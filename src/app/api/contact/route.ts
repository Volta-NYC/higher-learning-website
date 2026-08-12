import { google } from "googleapis";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

const emailPattern = /^\S+@\S+\.\S+$/;

function text(value: unknown, maximumLength: number) {
  return typeof value === "string" ? value.trim().slice(0, maximumLength) : "";
}

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();

    if (!body || typeof body !== "object") {
      return NextResponse.json({ error: "Invalid request." }, { status: 400 });
    }

    const { name, email, subject, message } = body as Record<string, unknown>;
    const submission = {
      name: text(name, 120),
      email: text(email, 254),
      subject: text(subject, 200),
      message: text(message, 5_000),
    };

    if (!submission.name || !emailPattern.test(submission.email)) {
      return NextResponse.json(
        { error: "Please provide your name and a valid email address." },
        { status: 400 }
      );
    }

    const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
    const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, "\n");
    const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;

    if (!serviceAccountEmail || !privateKey || !spreadsheetId) {
      console.error("Google Sheets contact-form environment variables are missing.");
      return NextResponse.json({ error: "Service is not configured." }, { status: 500 });
    }

    const auth = new google.auth.JWT({
      email: serviceAccountEmail,
      key: privateKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });
    const sheets = google.sheets({ version: "v4", auth });

    await sheets.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[
          new Date().toISOString(),
          submission.name,
          submission.email,
          submission.subject,
          submission.message,
        ]],
      },
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact submission failed:", error);
    return NextResponse.json(
      { error: "Unable to send your message. Please try again." },
      { status: 500 }
    );
  }
}
