import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Rate limiting
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);
  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

// Extract basic name from LinkedIn URL as fallback
function extractNameFromUrl(url: string): string {
  try {
    const match = url.match(/linkedin\.com\/in\/([^/?]+)/);
    if (match) {
      return match[1]
        .replace(/-/g, " ")
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .replace(/\d+/g, "")
        .trim();
    }
  } catch { /* empty */ }
  return "";
}

// Enrich LinkedIn profile via Prospeo API
async function enrichLinkedInProfile(linkedinUrl: string): Promise<{
  firstName: string;
  lastName: string;
  fullName: string;
  headline: string;
  currentTitle: string;
  companyName: string;
  location: string;
  jobHistory: string[];
  skills: string[];
} | null> {
  const apiKey = process.env.Prospeo;
  if (!apiKey) {
    console.warn("[Prospeo] No API key found, falling back to URL parsing.");
    return null;
  }

  try {
    const res = await fetch("https://api.prospeo.io/enrich-person", {
      method: "POST",
      headers: {
        "X-KEY": apiKey,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          linkedin_url: linkedinUrl,
        },
      }),
    });

    // Parse response (Prospeo returns 400 for NO_MATCH, handle gracefully)
    let data;
    try {
      data = await res.json();
    } catch {
      console.warn("[Prospeo] Could not parse response");
      return null;
    }

    if (!res.ok || data.error || !data.person) {
      console.warn("[Prospeo] No match:", data.error_code || data.error || res.status);
      return null;
    }
    const person = data.person;
    const company = data.company;

    // Extract job history (last 3 jobs)
    const jobHistory = (person.job_history || [])
      .slice(0, 3)
      .map((job: { title: string; company_name: string; duration_in_months?: number }) => 
        `${job.title} bij ${job.company_name}${job.duration_in_months ? ` (${Math.round(job.duration_in_months / 12)} jaar)` : ""}`
      );

    return {
      firstName: person.first_name || "",
      lastName: person.last_name || "",
      fullName: person.full_name || "",
      headline: person.headline || "",
      currentTitle: person.current_job_title || "",
      companyName: company?.name || (person.job_history?.[0]?.company_name) || "",
      location: person.location ? `${person.location.city || ""}, ${person.location.country || ""}`.replace(/^, |, $/g, "") : "",
      jobHistory,
      skills: person.skills || [],
    };
  } catch (error) {
    console.error("[Prospeo] Fetch error:", error);
    return null;
  }
}

export async function POST(req: NextRequest) {
  try {
    // Rate limiting
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json(
        { error: "Je hebt het maximum aantal berichten bereikt (3 per uur). Probeer het later opnieuw." },
        { status: 429 }
      );
    }

    const body = await req.json();
    const { linkedinUrl, email, jobTitle, tone } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Een geldig e-mailadres is vereist." }, { status: 400 });
    }
    if (!linkedinUrl && !jobTitle) {
      return NextResponse.json({ error: "Vul een LinkedIn URL of functietitel in." }, { status: 400 });
    }

    // Try to enrich via Prospeo first
    let profileData = null;
    if (linkedinUrl && linkedinUrl.includes("linkedin.com/in/")) {
      profileData = await enrichLinkedInProfile(linkedinUrl);
    }

    // Fallback: extract name from URL
    const candidateName = profileData?.fullName || extractNameFromUrl(linkedinUrl || "");

    // Build rich profile context for prompt
    let profileContext = "";
    if (profileData) {
      profileContext = `
VERRIJKT LINKEDIN PROFIEL (via scraping):
- Volledige naam: ${profileData.fullName}
- Huidige functie: ${profileData.currentTitle}
- Bedrijf: ${profileData.companyName}
- Headline: ${profileData.headline}
- Locatie: ${profileData.location}
- Werkervaring: ${profileData.jobHistory.join(" → ")}
- Skills: ${profileData.skills.length > 0 ? profileData.skills.slice(0, 10).join(", ") : "niet beschikbaar"}`;
    }

    const toneInstruction = tone === "formal"
      ? "Schrijf in een formele, professionele toon."
      : "Schrijf in een informele, warme en persoonlijke toon.";

    const prompt = `Je bent een expert recruitment copywriter voor Nederlandse recruiters. Genereer een gepersonaliseerd LinkedIn InMail bericht.

KANDIDAAT INFORMATIE:
- Naam: ${candidateName || "de kandidaat"}
- LinkedIn profiel: ${linkedinUrl || "niet beschikbaar"}
- Functie waarvoor geworven wordt: ${jobTitle || "niet gespecificeerd"}
${profileContext}

INSTRUCTIES:
- ${toneInstruction}
- Het bericht moet ECHT persoonlijk aanvoelen — gebruik specifieke details uit het profiel.
- Als er werkervaring of headline beschikbaar is, verwijs daar concreet naar.
- Gebruik de voornaam van de kandidaat als aanspreking.
- Noem de functie waarvoor je werft.
- Houd het bericht kort en krachtig (max 150 woorden).
- Gebruik een pakkende openingszin die opvalt in een drukke inbox.
- GEEN generieke zinnen als "Ik zag je profiel" of "Ik was onder de indruk". Wees specifiek.
- Eindig met een uitnodiging voor een kort gesprek of (virtuele) koffie.
- Schrijf in het Nederlands.
- Geef ALLEEN het bericht terug, geen uitleg, geen aanhalingstekens, geen extra tekst.`;

    // Call Gemini API
    const geminiKey = process.env.Gemini;
    if (!geminiKey) {
      return NextResponse.json({ error: "API configuratie ontbreekt. Neem contact op met support." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(geminiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3-pro-preview" });
    const result = await model.generateContent(prompt);
    const message = result.response.text();

    if (!message) {
      return NextResponse.json({ error: "Er kon geen bericht worden gegenereerd. Probeer het opnieuw." }, { status: 500 });
    }

    // Log lead
    console.log("[LEAD]", { email, linkedinUrl, jobTitle, enriched: !!profileData, timestamp: new Date().toISOString() });

    return NextResponse.json({
      message: message.trim(),
      candidateName: candidateName || undefined,
      enriched: !!profileData,
      profileSummary: profileData ? {
        name: profileData.fullName,
        title: profileData.currentTitle,
        company: profileData.companyName,
        headline: profileData.headline,
      } : undefined,
    });
  } catch (error) {
    console.error("Error generating message:", error);
    return NextResponse.json({ error: "Er is een fout opgetreden. Probeer het opnieuw." }, { status: 500 });
  }
}
