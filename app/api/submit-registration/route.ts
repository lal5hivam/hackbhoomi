import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();

    // Google Sheets Configuration
    const SPREADSHEET_ID = process.env.GOOGLE_SHEET_ID;
    const SHEET_NAME = 'Registrations'; // Change this to your sheet tab name

    if (!SPREADSHEET_ID) {
      throw new Error('Google Sheet ID not configured');
    }

    // Setup Google Sheets API
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: ['https://www.googleapis.com/auth/spreadsheets'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    // Prepare row data in the correct order
    const rowData = [
      data.teamName,
      data.track,
      data.category,
      data.problemStatement1,
      data.problemStatement2,
      data.problemStatement3,
      data.teamLeadName,
      data.teamLeadStudentId,
      data.teamLeadMobile,
      data.teamLeadEmail,
      data.teamLeadGithub,
      data.member2Name,
      data.member2StudentId,
      data.member2Mobile,
      data.member2Email,
      data.member2Github,
      data.member3Name,
      data.member3StudentId,
      data.member3Mobile,
      data.member3Email,
      data.member3Github,
      data.member4Name,
      data.member4StudentId,
      data.member4Mobile,
      data.member4Email,
      data.member4Github,
      data.member5Name,
      data.member5StudentId,
      data.member5Mobile,
      data.member5Email,
      data.member5Github,
      data.timestamp,
    ];

    // Append data to sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:AF`,
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json(
      { success: true, message: 'Registration submitted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error submitting to Google Sheets:', error);
    return NextResponse.json(
      {
        success: false,
        message: error instanceof Error ? error.message : 'Failed to submit registration',
      },
      { status: 500 }
    );
  }
}
