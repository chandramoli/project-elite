// app/api/sheet/route.ts
import { google } from 'googleapis';
import path from 'path';
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';


const corsHeaders = {
  'Access-Control-Allow-Origin': '*', // Or restrict to 'https://www.projectelite.in'
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
}

export async function GET() {
  
  try {
    const keyFilePath = path.join(process.cwd(), 'credentials.json');
    const keyFile = await fs.readFile(keyFilePath, 'utf8');

    const auth = new google.auth.GoogleAuth({
      credentials: JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_JSON),
      scopes: ['https://www.googleapis.com/auth/spreadsheets.readonly'],
    });

    const sheets = google.sheets({ version: 'v4', auth });

    const spreadsheetId = '16qqqxTG-N7DCs2lJQZvzvELIzsJd2UeryeaMyHl3JT8';
    const range = 'Sheet1';

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId,
      range,
    });

    const rows = response.data.values;
    console.log('Fetched rows:', response);

    return NextResponse.json({ data: rows, },{headers: corsHeaders,status: 200});
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    return NextResponse.json({ error: 'Failed to fetch sheet data' }, {
      status: 500,
      headers: corsHeaders,
    });
  }
}
