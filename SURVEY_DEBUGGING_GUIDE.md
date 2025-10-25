# Survey Debugging Guide

## Issue Fixed: Survey Not Saving to Database

### Problem
When users completed the survey, the data wasn't being saved to the database. After returning to the dashboard and trying to access the survey again, they were prompted to retake it.

### Root Cause
The `SurveyResponse` table didn't exist in the database - the migration hadn't been run yet.

### Solution Applied

#### 1. Database Schema Update
- Added the TikTokAccount model that was missing from the schema (it existed in DB but not in schema)
- Pushed the complete schema to the database using `npx prisma db push`
- The SurveyResponse table now exists in the database

#### 2. Enhanced Logging
Added comprehensive console logging throughout the survey flow:

**Client-side logging** ([components/survey/results-screen.tsx](components/survey/results-screen.tsx)):
- Logs when saving survey response
- Logs the answers being saved
- Logs the API response
- Logs success/failure states

**Dashboard logging** ([components/dashboard/survey-preferences.tsx](components/dashboard/survey-preferences.tsx)):
- Logs when fetching survey responses
- Logs the number of responses found
- Logs if no responses exist

**API logging** ([app/api/survey/route.ts](app/api/survey/route.ts)):
- Logs session user ID on POST/GET requests
- Logs the complete request body
- Logs the data being saved to database
- Logs successful creation with survey ID
- Logs errors with detailed messages

### How to Test

1. **Complete the survey as a logged-in user**:
   - Open browser console (F12)
   - Click through all survey questions
   - On the results screen, you should see:
     ```
     Saving survey response with answers: {platform: "...", goal: "...", ...}
     Selected services: ["auto-caption", "best-time", ...]
     [API] Survey POST - Session user ID: clxxx...
     [API] Survey POST - Request body: {...}
     [API] Creating survey response with data: {...}
     [API] Survey created successfully: clyyy...
     Survey save response: {success: true, surveyResponseId: "clyyy..."}
     Survey saved successfully with ID: clyyy...
     ```

2. **Navigate to dashboard**:
   - Go to `/dashboard/manager`
   - Check console for:
     ```
     Fetching survey responses...
     [API] Survey GET - Session user ID: clxxx...
     [API] Survey GET - Found responses: 1
     Survey fetch response: {success: true, surveyResponses: [...]}
     Found survey responses: 1
     ```
   - Your survey preferences should display on the dashboard

3. **Check Settings page**:
   - Go to `/dashboard/settings`
   - Click "Preferences" tab
   - Same survey data should appear

### Console Commands for Verification

Check if the SurveyResponse table exists:
```bash
npx prisma studio
```
This opens Prisma Studio where you can browse the database and see the SurveyResponse records.

Query the database directly:
```sql
SELECT * FROM "SurveyResponse";
```

### Expected Behavior Now

✅ **When completing survey**:
- Survey data is saved to database immediately on results screen
- Survey response ID is stored in localStorage
- Logged-in users: data is linked to their user account
- Anonymous users: data is saved with null userId

✅ **When viewing dashboard**:
- Survey preferences card loads and displays user's answers
- "Retake Survey" button allows updating preferences
- Shows human-readable labels for all answers

✅ **When retaking survey**:
- New survey response is created (keeps history)
- Dashboard shows the most recent response

### Troubleshooting

If survey still not saving:

1. **Check browser console for errors**
   - Look for red error messages
   - Check the API response logs
   - Verify the session user ID is present

2. **Check server logs**
   - Run your Next.js dev server
   - Look for `[API]` prefixed logs
   - Check for database connection errors

3. **Verify database connection**
   - Ensure DATABASE_URL in `.env.local` is correct
   - Test connection: `npx prisma db pull`

4. **Check Prisma Client**
   - If you see Prisma errors, regenerate: `npx prisma generate`

5. **Verify table exists**
   - Open Prisma Studio: `npx prisma studio`
   - Look for `SurveyResponse` table
   - Check if it has the correct columns

### Files Modified

1. [prisma/schema.prisma](prisma/schema.prisma) - Added SurveyResponse and TikTokAccount models
2. [components/survey/results-screen.tsx](components/survey/results-screen.tsx) - Added logging and session-aware redirect
3. [components/dashboard/survey-preferences.tsx](components/dashboard/survey-preferences.tsx) - Added logging for fetch
4. [app/api/survey/route.ts](app/api/survey/route.ts) - Enhanced logging for debugging

### Database Schema

The SurveyResponse table structure:
- `id` - Unique identifier (cuid)
- `userId` - Foreign key to User (nullable)
- `platform` - User's platform choice
- `goal` - User's main goal
- `postingFrequency` - How often they post
- `userType` - Type of user
- `automationLevel` - Desired automation level
- `selectedServices` - JSON array of selected services
- `createdAt` - Timestamp
- `updatedAt` - Timestamp
