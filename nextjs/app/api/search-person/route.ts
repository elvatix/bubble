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

interface ProspeoLocation { city?: string; country?: string; }
interface ProspeoJob { title?: string; company_name?: string; }
interface ProspeoPerson {
  full_name?: string; first_name?: string; last_name?: string;
  linkedin_url?: string; current_job_title?: string; headline?: string;
  location?: ProspeoLocation; job_history?: ProspeoJob[];
}
interface ProspeoCompany { name?: string; }
interface ProspeoResult { person?: ProspeoPerson; company?: ProspeoCompany; }

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

    const apiKey = process.env.Prospeo;
    if (!apiKey) {
      return NextResponse.json({ error: "API key niet geconfigureerd." }, { status: 500 });
    }

    // Smart parsing: try to separate name from company/job keywords
    // Heuristic: if 3+ words, last word(s) might be company/job
    const words = query.trim().split(/\s+/);
    
    // Build filters based on input
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const filters: Record<string, any> = {};
    
    if (words.length <= 2) {
      // Just a name — use person_name filter
      filters.person_name = { include: [query.trim()] };
    } else {
      // 3+ words: first 2 words = name, rest = company or job context
      const namePart = words.slice(0, 2).join(" ");
      const contextPart = words.slice(2).join(" ");
      
      filters.person_name = { include: [namePart] };
      // Try both company name and job title for the context
      filters.company = { names: { include: [contextPart] } };
    }

    const response = await fetch("https://api.prospeo.io/search-person", {
      method: "POST",
      headers: { "X-KEY": apiKey, "Content-Type": "application/json" },
      body: JSON.stringify({ page: 1, filters }),
    });

    // Check HTTP-level rate limit from Prospeo
    if (response.status === 429 || response.status === 402) {
      return NextResponse.json({ error: "Zoekservice tijdelijk niet beschikbaar. Plak een LinkedIn URL om verder te gaan.", fallback: true }, { status: 429 });
    }

    let data = await response.json();

    // If company filter returns no results, retry with just the name
    if (data.error && data.error_code === "NO_RESULTS" && words.length > 2) {
      const fallbackRes = await fetch("https://api.prospeo.io/search-person", {
        method: "POST",
        headers: { "X-KEY": apiKey, "Content-Type": "application/json" },
        body: JSON.stringify({
          page: 1,
          filters: { person_name: { include: [query.trim()] } },
        }),
      });
      data = await fallbackRes.json();
    }

    if (data.error) {
      if (data.error_code === "NO_RESULTS") {
        return NextResponse.json({ results: [] });
      }
      // Prospeo rate limit or quota exceeded
      if (response.status === 429 || data.error_code === "RATE_LIMIT" || (data.message && data.message.toLowerCase().includes("rate"))) {
        return NextResponse.json({ error: "Zoekservice tijdelijk niet beschikbaar. Probeer het over een paar minuten opnieuw of plak een LinkedIn URL.", fallback: true }, { status: 429 });
      }
      return NextResponse.json({ error: "Zoeken niet beschikbaar. Plak een LinkedIn URL om verder te gaan.", fallback: true }, { status: 400 });
    }

    const results = (data.results || []).slice(0, 8).map((r: ProspeoResult) => {
      const person = r.person || {};
      const company = r.company || {};
      const currentJob = person.job_history?.[0];

      return {
        fullName: person.full_name || `${person.first_name || ""} ${person.last_name || ""}`.trim(),
        linkedinUrl: person.linkedin_url || null,
        jobTitle: person.current_job_title || currentJob?.title || null,
        headline: person.headline || null,
        companyName: currentJob?.company_name || company.name || null,
        location: person.location
          ? `${person.location.city || ""}, ${person.location.country || ""}`.replace(/^, |, $/g, "")
          : null,
      };
    });

    return NextResponse.json({ results });
  } catch {
    return NextResponse.json({ error: "Zoeken mislukt." }, { status: 500 });
  }
}
