import { NextRequest, NextResponse } from "next/server";

// Rate limiting for search
const searchRateLimitMap = new Map<string, { count: number; resetTime: number }>();
const SEARCH_RATE_LIMIT = 10;
const SEARCH_RATE_WINDOW = 60 * 60 * 1000; // 1 hour

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

interface ProspeoLocation {
  city?: string;
  country?: string;
}

interface ProspeoJob {
  title?: string;
  company_name?: string;
}

interface ProspeoPerson {
  full_name?: string;
  first_name?: string;
  last_name?: string;
  linkedin_url?: string;
  current_job_title?: string;
  headline?: string;
  location?: ProspeoLocation;
  job_history?: ProspeoJob[];
}

interface ProspeoCompany {
  name?: string;
}

interface ProspeoResult {
  person?: ProspeoPerson;
  company?: ProspeoCompany;
}

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
    if (!checkSearchRateLimit(ip)) {
      return NextResponse.json(
        { error: "Zoeklimiet bereikt. Probeer het later opnieuw." },
        { status: 429 }
      );
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

    const response = await fetch("https://api.prospeo.io/search-person", {
      method: "POST",
      headers: {
        "X-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page: 1,
        filters: {
          person_name: {
            include: [query],
          },
        },
      }),
    });

    const data = await response.json();

    if (data.error) {
      if (data.error_code === "NO_RESULTS") {
        return NextResponse.json({ results: [] });
      }
      return NextResponse.json(
        { error: data.error_code || "Zoeken mislukt." },
        { status: 400 }
      );
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
