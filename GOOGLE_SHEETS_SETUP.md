# Google Sheets Integration Setup Guide

## Step 1: Create Google Sheet with Headers

Create a new Google Sheet or use your existing "Inverthon" sheet and add the following column headers in Row 1:

### Column Headers (in order):

| Column | Header Name | Description |
|--------|-------------|-------------|
| A | Team Name | Primary identifier |
| B | Track | Open Innovation / RoboWars / Both |
| C | Category | Hardware / Software / N/A |
| D | Problem Statement 1 | First selected problem |
| E | Problem Statement 2 | Second selected problem |
| F | Problem Statement 3 | Third selected problem |
| G | Team Lead Name | Full name |
| H | Team Lead Student ID | Student ID |
| I | Team Lead Mobile | Phone number |
| J | Team Lead Email | Email address |
| K | Team Lead GitHub | GitHub username |
| L | Member 2 Name | Full name |
| M | Member 2 Student ID | Student ID |
| N | Member 2 Mobile | Phone number |
| O | Member 2 Email | Email address |
| P | Member 2 GitHub | GitHub username |
| Q | Member 3 Name | Full name |
| R | Member 3 Student ID | Student ID |
| S | Member 3 Mobile | Phone number |
| T | Member 3 Email | Email address |
| U | Member 3 GitHub | GitHub username |
| V | Member 4 Name | Full name |
| W | Member 4 Student ID | Student ID |
| X | Member 4 Mobile | Phone number |
| Y | Member 4 Email | Email address |
| Z | Member 4 GitHub | GitHub username |
| AA | Timestamp | Submission date/time |

## Step 2: Create Google Cloud Project & Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create Service Account:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "Service Account"
   - Fill in service account details
   - Click "Create and Continue"
   - Skip optional steps and click "Done"

5. Create Service Account Key:
   - Click on the created service account
   - Go to "Keys" tab
   - Click "Add Key" > "Create New Key"
   - Select "JSON" format
   - Download the JSON file

## Step 3: Share Google Sheet with Service Account

1. Open your Google Sheet
2. Click "Share" button
3. Add the service account email (found in the JSON file as `client_email`)
4. Give it "Editor" permissions
5. Uncheck "Notify people" and click "Share"

## Step 4: Configure Environment Variables

Add these to your `.env.local` file:

```env
# Google Sheets Configuration
GOOGLE_SHEET_ID=your_spreadsheet_id_here
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project-id.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Private_Key_Here\n-----END PRIVATE KEY-----\n"
```

### How to get these values:

1. **GOOGLE_SHEET_ID**: 
   - Open your Google Sheet
   - Copy the ID from the URL: `https://docs.google.com/spreadsheets/d/[THIS_IS_THE_ID]/edit`

2. **GOOGLE_SERVICE_ACCOUNT_EMAIL**:
   - Found in the downloaded JSON file as `client_email`

3. **GOOGLE_PRIVATE_KEY**:
   - Found in the downloaded JSON file as `private_key`
   - Copy the entire key including `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----`
   - Keep the `\n` characters as they are

## Step 5: Install Required Package

Run this command in your project:

```bash
npm install googleapis
```

## Step 6: Test the Integration

1. Start your development server: `npm run dev`
2. Open the registration form
3. Fill out all required fields
4. Submit the form
5. Check your Google Sheet for the new entry

## Troubleshooting

### Error: "The caller does not have permission"
- Make sure you shared the sheet with the service account email
- Verify the service account has "Editor" permissions

### Error: "Invalid credentials"
- Check that your private key is correctly formatted in .env.local
- Ensure there are no extra spaces or line breaks
- The private key should be wrapped in quotes

### Error: "Spreadsheet not found"
- Verify the GOOGLE_SHEET_ID is correct
- Make sure the sheet is shared with the service account

### Data not appearing in sheet
- Check the SHEET_NAME in the API route matches your sheet tab name
- Default is "Registrations" - change if your tab has a different name

## Sample Data Format

Here's what a sample row will look like:

```
Team Innovators | Open Innovation | Software | AI-powered Education Platform | Blockchain-based Supply Chain | Mental Health Support Application | John Doe | 2021001 | +91 98765 43210 | john@example.com | johndoe | Jane Smith | 2021002 | +91 98765 43211 | jane@example.com | janesmith | ... | 2025-02-13 10:30:45
```

## Security Notes

- Never commit your `.env.local` file to version control
- Add `.env.local` to your `.gitignore` file
- Keep your service account JSON file secure
- Regularly rotate your service account keys
- Use environment variables for all sensitive data
