# Quick Setup Guide for Google Sheets Integration

## 🚀 Quick Start (5 minutes)

### 1. Install Dependencies
```bash
npm install googleapis
```

### 2. Setup Google Sheet

**Copy the template headers to your Google Sheet:**

```
Team Name | Track | Category | Problem Statement 1 | Problem Statement 2 | Problem Statement 3 | Team Lead Name | Team Lead Student ID | Team Lead Mobile | Team Lead Email | Team Lead GitHub | Member 2 Name | Member 2 Student ID | Member 2 Mobile | Member 2 Email | Member 2 GitHub | Member 3 Name | Member 3 Student ID | Member 3 Mobile | Member 3 Email | Member 3 GitHub | Member 4 Name | Member 4 Student ID | Member 4 Mobile | Member 4 Email | Member 4 GitHub | Timestamp
```

Or import the `GOOGLE_SHEETS_TEMPLATE.csv` file into your Google Sheet.

### 3. Create Service Account

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create new project
3. Enable "Google Sheets API"
4. Create Service Account:
   - APIs & Services → Credentials → Create Credentials → Service Account
   - Download JSON key file

### 4. Share Sheet with Service Account

1. Open your Google Sheet
2. Click "Share"
3. Add the service account email (from JSON file: `client_email`)
4. Give "Editor" permission
5. Click "Share"

### 5. Configure Environment Variables

Create `.env.local` file in your project root:

```env
GOOGLE_SHEET_ID=your_sheet_id_from_url
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-service-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYour_Key_Here\n-----END PRIVATE KEY-----\n"
```

**Get these values from:**
- `GOOGLE_SHEET_ID`: From your sheet URL
- `GOOGLE_SERVICE_ACCOUNT_EMAIL`: From JSON file → `client_email`
- `GOOGLE_PRIVATE_KEY`: From JSON file → `private_key`

### 6. Update Sheet Tab Name (if needed)

If your Google Sheet tab is not named "Registrations", update it in:

`app/api/submit-registration/route.ts`

```typescript
const SHEET_NAME = 'Your_Tab_Name_Here'; // Line 11
```

### 7. Test It!

```bash
npm run dev
```

1. Open http://localhost:3000
2. Click "Register Now"
3. Fill the form
4. Submit
5. Check your Google Sheet!

## 📋 Checklist

- [ ] Installed `googleapis` package
- [ ] Created Google Sheet with headers
- [ ] Enabled Google Sheets API
- [ ] Created Service Account
- [ ] Downloaded JSON key file
- [ ] Shared sheet with service account email
- [ ] Created `.env.local` with all 3 variables
- [ ] Updated sheet tab name (if different from "Registrations")
- [ ] Tested submission

## 🔧 Common Issues

**"The caller does not have permission"**
→ Share the sheet with service account email

**"Invalid credentials"**
→ Check private key format in `.env.local`

**"Spreadsheet not found"**
→ Verify GOOGLE_SHEET_ID is correct

**Data not appearing**
→ Check sheet tab name matches SHEET_NAME in code

## 📚 Need More Help?

See `GOOGLE_SHEETS_SETUP.md` for detailed instructions.

## 🎉 You're Done!

Your registration form is now connected to Google Sheets!
