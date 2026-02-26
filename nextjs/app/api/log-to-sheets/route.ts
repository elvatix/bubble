import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

const SHEET_ID = process.env.GOOGLE_SHEET_ID;
const SERVICE_EMAIL = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;

function getPrivateKey(): string | undefined {
  let key = process.env.GOOGLE_PRIVATE_KEY;
  if (!key) return undefined;

  // Replace literal \n with actual newlines
  key = key.replace(/\\n/g, "\n");

  // If the BEGIN/END markers are missing, add them
  if (!key.includes("-----BEGIN PRIVATE KEY-----")) {
    key = `-----BEGIN PRIVATE KEY-----\n${key.trim()}\n-----END PRIVATE KEY-----\n`;
  }

  return key;
}

export async function POST(req: NextRequest) {
  try {
    const PRIVATE_KEY = getPrivateKey();

    if (!SHEET_ID || !SERVICE_EMAIL || !PRIVATE_KEY) {
      console.error("[Sheets Log] Missing environment variables:", {
        hasSheetId: !!SHEET_ID,
        hasEmail: !!SERVICE_EMAIL,
        hasKey: !!PRIVATE_KEY,
      });
      return NextResponse.json({ error: "Config missing" }, { status: 500 });
    }

    const body = await req.json();
    const {
      name,
      linkedinUrl,
      vacancy,
      toneOfVoice,
      extraInstruction,
      vacancyText,
      createdMessage,
    } = body;

    // Authenticate with Google Sheets API via Service Account
    const auth = new google.auth.JWT({
      email: SERVICE_EMAIL,
      key: PRIVATE_KEY,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({ version: "v4", auth });

    const timestamp = new Date().toISOString();

    // Append a new row to Logs!B:I (columns B through I)
    await sheets.spreadsheets.values.append({
      spreadsheetId: SHEET_ID,
      range: "Logs!B:I",
      valueInputOption: "USER_ENTERED",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [
          [
            timestamp,           // B: created
            name || "",          // C: name
            linkedinUrl || "",   // D: linkedin_url
            vacancy || "",       // E: vacancy
            toneOfVoice || "",   // F: tone_of_voice
            extraInstruction || "", // G: extra_instruction
            vacancyText || "",   // H: vacancy_text
            createdMessage || "", // I: created_message
          ],
        ],
      },
    });

    console.log("[Sheets Log] Successfully logged row for:", name);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Sheets Log] Error:", error);
    return NextResponse.json({ error: "Log failed" }, { status: 500 });
  }
}
