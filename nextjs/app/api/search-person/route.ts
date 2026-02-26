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
async function tryProspeoSearch(apiKey: string, filters: Record<string, unknown>, keyIndex: number): Promise<{ success: boolean; data?: unknown; rateLimited?: boolean }> {
  const keyLabel = "Key " + (keyIndex + 1) + " (..."+apiKey.slice(-4)+")";
  try {
    const response = await fetch("https://api.prospeo.io/search-person", {
      method: "POST",
      headers: { "X-KEY": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ page: 1, filters }),
    });

    // HTTP-level rate limit
    if (response.status === 429 || response.status === 402) {
      console.log("[Prospeo] " + keyLabel + " → HTTP " + response.status + " (rate limited, trying next key)");
      return { success: false, rateLimited: true };
    }

    const data = await response.json();
    
    // Prospeo returns error in JSON body with rate limit info
    if (data.error && (
      data.error_code === "RATE_LIMIT" ||
      data.error_code === "CREDIT_LIMIT" ||
      data.error_code === "QUOTA_EXCEEDED" ||
      (typeof data.message === "string" && data.message.toLowerCase().includes("rate")) ||
      (typeof data.message === "string" && data.message.toLowerCase().includes("credit")) ||
      (typeof data.message === "string" && data.message.toLowerCase().includes("quota")) ||
      (typeof data.error === "string" && data.error.toLowerCase().includes("rate")) ||
      (typeof data.error === "string" && data.error.toLowerCase().includes("limit"))
    )) {
      console.log("[Prospeo] " + keyLabel + " → " + (data.error_code || data.error || data.message) + " (rate/credit limited, trying next key)");
      return { success: false, rateLimited: true };
    }

    console.log("[Prospeo] " + keyLabel + " → SUCCESS (" + (data.results?.length || 0) + " results)");
    return { success: true, data };
  } catch (err) {
    console.log("[Prospeo] " + keyLabel + " → NETWORK ERROR: " + err);
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

    console.log("[Prospeo] Search: \"" + query + "\"  - " + apiKeys.length + " keys available");
    for (let ki = 0; ki < apiKeys.length; ki++) {
      const result = await tryProspeoSearch(apiKeys[ki], filters, ki);
      
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
      console.log("[Prospeo] ALL " + apiKeys.length + " keys rate limited!");
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
      for (let ki = 0; ki < apiKeys.length; ki++) {
        const result = await tryProspeoSearch(apiKeys[ki], fallbackFilters, ki);
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
