import { NextRequest, NextResponse } from "next/server";

const searchRateLimitMap = new Map<string, { count: number; resetTime: number }>();
const SEARCH_RATE_LIMIT = 100;
const SEARCH_RATE_WINDOW = 60 * 60 * 1000;

function checkSearchRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = searchRateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    searchRateLimitMap.set(ip, { count: 1, resetTime: now + SEARCH_RATE_WINDOW });
    return true;
  }
  if (entry.count >= SEARCH_RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// Collect all Prospeo API keys from env vars (Prospeo, Prospeo2, Prospeo3, ...)
function getProspeoKeys(): string[] {
  const keys: string[] = [];
  // First key
  if (process.env.Prospeo) keys.push(process.env.Prospeo);
  // Numbered keys: Prospeo2, Prospeo3, ...
  for (let i = 2; i <= 20; i++) {
    const key = process.env[`Prospeo${i}`];
    if (key) keys.push(key);
  }
  return keys;
}

interface ProspeoLocation { city?: string; country?: string; }
interface ProspeoJob { title?: string; company_name?: string; }
interface ProspeoPerson {
  full_name?: string; first_name?: string; last_name?: string;
  linkedin_url?: string; current_job_title?: string; headline?: string;
  location?: ProspeoLocation; job_history?: ProspeoJob[];
}
interface ProspeoCompany { name?: string; }
interface ProspeoResult { person?: ProspeoPerson; company?: ProspeoCompany; }

// Try a single Prospeo search with a given API key
async function tryProspeoSearch(apiKey: string, filters: Record<string, unknown>): Promise<{ success: boolean; data?: unknown; rateLimited?: boolean }> {
  try {
    const response = await fetch("https://api.prospeo.io/search-person", {
      method: "POST",
      headers: { "X-KEY": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ page: 1, filters }),
    });

    if (response.status === 429 || response.status === 402) {
      return { success: false, rateLimited: true };
    }

    const data = await response.json();
    
    // Prospeo returns error with rate limit info
    if (data.error && (
      data.error_code === "RATE_LIMIT" ||
      (typeof data.message === "string" && data.message.toLowerCase().includes("rate")) ||
      (typeof data.error === "string" && data.error.toLowerCase().includes("rate"))
    )) {
      return { success: false, rateLimited: true };
    }

    return { success: true, data };
  } catch {
    return { success: false, rateLimited: false };
  }
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
    if (!checkSearchRateLimit(ip)) {
      return NextResponse.json({ error: "Zoeklimiet bereikt." }, { status: 429 });
    }

    const body = await req.json();
    const { query } = body;
    if (!query || query.length < 2) {
      return NextResponse.json({ error: "Voer minimaal 2 karakters in." }, { status: 400 });
    }

    const apiKeys = getProspeoKeys();
    if (apiKeys.length === 0) {
      return NextResponse.json({ error: "API key niet geconfigureerd." }, { status: 500 });
    }

    // Build filters
    const words = query.trim().split(/\s+/);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filters: Record<string, any> = {};
    
    if (words.length <= 2) {
      filters.person_name = { include: [query.trim()] };
    } else {
      const namePart = words.slice(0, 2).join(" ");
      const contextPart = words.slice(2).join(" ");
      filters.person_name = { include: [namePart] };
      filters.company = { names: { include: [contextPart] } };
    }

    // Try each API key until one works (automatic failover)
    let lastData: unknown = null;
    let allRateLimited = true;

    for (const key of apiKeys) {
      const result = await tryProspeoSearch(key, filters);
      
      if (result.success) {
        lastData = result.data;
        allRateLimited = false;
        break;
      }
      
      if (!result.rateLimited) {
        allRateLimited = false;
      }
    }

    // All keys rate limited
    if (allRateLimited && !lastData) {
      return NextResponse.json({ 
        error: "Zoekservice tijdelijk niet beschikbaar. Plak een LinkedIn URL om verder te gaan.", 
        fallback: true 
      }, { status: 429 });
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let data = lastData as any;

    if (!data) {
      return NextResponse.json({ error: "Zoeken niet beschikbaar. Plak een LinkedIn URL.", fallback: true }, { status: 500 });
    }

    // If company filter returns no results, retry with just the name (try all keys again)
    if (data.error && data.error_code === "NO_RESULTS" && words.length > 2) {
      const fallbackFilters = { person_name: { include: [query.trim()] } };
      for (const key of apiKeys) {
        const result = await tryProspeoSearch(key, fallbackFilters);
        if (result.success) {
          data = result.data;
          break;
        }
      }
    }

    if (data.error) {
      if (data.error_code === "NO_RESULTS") {
        return NextResponse.json({ results: [] });
      }
      return NextResponse.json({ error: "Zoeken niet beschikbaar. Plak een LinkedIn URL.", fallback: true }, { status: 400 });
    }

    const results = (data.results || []).slice(0, 8).map((r: ProspeoResult) => {
      const person = r.person || {};
      const company = r.company || {};
      const currentJob = person.job_history?.[0];

      const firstName = person.first_name || "";
      const lastName = person.last_name || "";
      const city = person.location?.city || "";
      const country = person.location?.country || "";
      const locationStr = [city, country].filter(Boolean).join(", ");

      return {
        fullName: person.full_name || (firstName + " " + lastName).trim(),
        linkedinUrl: person.linkedin_url || null,
        jobTitle: person.current_job_title || currentJob?.title || null,
        headline: person.headline || null,
        companyName: currentJob?.company_name || company.name || null,
        location: locationStr || null,
      };
    });

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Zoeken mislukt." }, { status: 500 });
  }
}
