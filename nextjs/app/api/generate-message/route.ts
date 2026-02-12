import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

// Rate limiting: simple in-memory store
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 3;
const RATE_WINDOW = 60 * 60 * 1000; // 1 hour

function extractNameFromLinkedInUrl(url: string): string {
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

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || req.headers.get("x-real-ip") || "unknown";
    if (!checkRateLimit(ip)) {
      return NextResponse.json({ error: "Je hebt het maximum aantal berichten bereikt (3 per uur). Probeer het later opnieuw." }, { status: 429 });
    }

    const body = await req.json();
    const { linkedinUrl, email, jobTitle, tone } = body;

    if (!email || !email.includes("@")) {
      return NextResponse.json({ error: "Een geldig e-mailadres is vereist." }, { status: 400 });
    }
    if (!linkedinUrl && !jobTitle) {
      return NextResponse.json({ error: "Vul een LinkedIn URL of functietitel in." }, { status: 400 });
    }

    const candidateName = extractNameFromLinkedInUrl(linkedinUrl || "");

    const toneInstruction = tone === "formal"
      ? "Schrijf in een formele, professionele toon."
      : "Schrijf in een informele, warme en persoonlijke toon.";

    const prompt = `Je bent een expert recruitment copywriter voor Nederlandse recruiters. Genereer een gepersonaliseerd LinkedIn InMail bericht.

KANDIDAAT INFORMATIE:
- Naam: ${candidateName || "de kandidaat"}
- LinkedIn profiel: ${linkedinUrl || "niet beschikbaar"}
- Functie waarvoor geworven wordt: ${jobTitle || "niet gespecificeerd"}

INSTRUCTIES:
- ${toneInstruction}
- Het bericht moet persoonlijk aanvoelen, niet als een template.
- Gebruik de naam van de kandidaat als die beschikbaar is.
- Noem de functie waarvoor je werft als die beschikbaar is.
- Houd het bericht kort (max 150 woorden).
- Gebruik een pakkende openingszin die opvalt in een drukke inbox.
- Eindig met een uitnodiging voor een kort gesprek.
- Schrijf in het Nederlands.
- Geef ALLEEN het bericht terug, geen uitleg of extra tekst.`;

    const apiKey = process.env.Gemini;
    if (!apiKey) {
      return NextResponse.json({ error: "API configuratie ontbreekt. Neem contact op met support." }, { status: 500 });
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    const model = genAI.getGenerativeModel({ model: "gemini-3.0-pro" });
    const result = await model.generateContent(prompt);
    const message = result.response.text();

    if (!message) {
      return NextResponse.json({ error: "Er kon geen bericht worden gegenereerd. Probeer het opnieuw." }, { status: 500 });
    }

    console.log("[LEAD]", { email, linkedinUrl, jobTitle, timestamp: new Date().toISOString() });

    return NextResponse.json({ message: message.trim(), candidateName: candidateName || undefined });
  } catch (error) {
    console.error("Error generating message:", error);
    return NextResponse.json({ error: "Er is een fout opgetreden. Probeer het opnieuw." }, { status: 500 });
  }
}
