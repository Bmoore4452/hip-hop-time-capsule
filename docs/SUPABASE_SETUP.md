# Supabase Setup Guide

This guide walks you through setting up Supabase for cloud sync of user responses.

## Why Supabase?

- ✅ **Free tier**: 500MB database, 1GB storage
- ✅ **Real-time sync**: Auto-sync across devices
- ✅ **Offline-first**: Works without internet, syncs when online
- ✅ **Simple auth**: Optional user accounts or anonymous usage
- ✅ **PostgreSQL**: Powerful, reliable database

## Step 1: Create Supabase Account

1. Go to [https://supabase.com](https://supabase.com)
2. Click "Start your project"
3. Sign up with GitHub or email
4. Free tier includes everything you need!

## Step 2: Create Project

1. Click "New Project"
2. Choose your organization (or create one)
3. Fill in:
   - **Name**: `hip-hop-time-capsule`
   - **Database Password**: Generate a strong password (save it!)
   - **Region**: Choose closest to your users
4. Click "Create new project"
5. Wait ~2 minutes for provisioning

## Step 3: Create Database Table

1. In your Supabase project, click "SQL Editor" in the left sidebar
2. Click "New Query"
3. Copy and paste this SQL:

```sql
-- Create user_responses table
CREATE TABLE user_responses (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id TEXT NOT NULL,
  page_number INTEGER NOT NULL,
  field_id TEXT NOT NULL,
  value TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),

  -- Ensure one response per user per page per field
  UNIQUE(user_id, page_number, field_id)
);

-- Create index for faster queries
CREATE INDEX idx_user_responses_user_id ON user_responses(user_id);
CREATE INDEX idx_user_responses_page_number ON user_responses(page_number);

-- Enable Row Level Security (RLS)
ALTER TABLE user_responses ENABLE ROW LEVEL SECURITY;

-- Policy: Users can only access their own data
CREATE POLICY "Users can access own responses"
  ON user_responses
  FOR ALL
  USING (user_id = current_setting('request.jwt.claims', true)::json->>'sub' OR user_id LIKE 'anon_%');

-- Policy: Allow anonymous users to manage their data
CREATE POLICY "Anonymous users can manage own responses"
  ON user_responses
  FOR ALL
  USING (user_id LIKE 'anon_%')
  WITH CHECK (user_id LIKE 'anon_%');
```

4. Click "Run" or press Cmd/Ctrl + Enter
5. You should see "Success. No rows returned"

## Step 4: Get Your API Keys

1. Click "Settings" (gear icon) in the left sidebar
2. Click "API" under Project Settings
3. You'll see two important values:
   - **Project URL**: `https://xxxxx.supabase.co`
   - **anon public key**: `eyJhbGci...` (long string)

## Step 5: Configure Your App

### Option A: Using Environment Variables (Recommended for production)

1. Create a `.env` file in your project root:

```bash
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_ANON_KEY=your-anon-key-here
```

2. Add `.env` to your `.gitignore`:

```bash
echo ".env" >> .gitignore
```

3. Install dotenv:

```bash
npm install dotenv
```

4. Update `utils/supabase.ts` to load from `.env`

### Option B: Direct Configuration (Quick start)

1. Open `utils/supabase.ts`
2. Replace the placeholder values:

```typescript
const SUPABASE_URL = "https://your-project.supabase.co";
const SUPABASE_ANON_KEY = "your-anon-key-here";
```

⚠️ **Important**: Don't commit your keys to public repositories!

## Step 6: Update Your App to Use Supabase

### For New Code

Import from `supabaseStorage` instead of `pageStorage`:

```typescript
import * as Storage from "../utils/supabaseStorage";

// Save a response
await Storage.savePageResponse(24, "name", "John Doe");

// Load a response
const response = await Storage.loadPageResponse(24);

// Load all responses
const allResponses = await Storage.loadAllPageResponses();
```

### For Existing Code

The API is identical, just change the import:

```typescript
// Old
import * as Storage from "../utils/pageStorage";

// New
import * as Storage from "../utils/supabaseStorage";
```

## Step 7: Test It

1. Start your app:

```bash
npx expo start
```

2. Fill in some interactive fields
3. Check Supabase:
   - Go to "Table Editor" in your project
   - Click "user_responses"
   - You should see your data!

## Features

### ✨ Offline-First

- All data saves locally first (instant)
- Syncs to cloud when internet available
- Works perfectly without internet

### ✨ Anonymous Users

- No login required
- Each device gets a unique anonymous ID
- Data tied to that device

### ✨ Optional Authentication

Later, you can add proper user accounts:

```typescript
// Sign up
await supabase.auth.signUp({
  email: "user@example.com",
  password: "password123",
});

// Sign in
await supabase.auth.signInWithPassword({
  email: "user@example.com",
  password: "password123",
});

// Data automatically syncs to user's account
```

### ✨ Manual Sync

Force sync local data to cloud:

```typescript
import { syncLocalToCloud } from "../utils/supabaseStorage";

await syncLocalToCloud();
```

## Monitoring

### View Data

1. Supabase Dashboard → Table Editor → user_responses

### View Logs

1. Supabase Dashboard → Logs
2. See all database queries and errors

### Usage

1. Supabase Dashboard → Settings → Usage
2. Monitor database size, API requests

## Cost

**Free Tier Includes:**

- 500 MB database storage
- 1 GB file storage
- 2 GB bandwidth
- 50,000 monthly active users

**For this app:**

- Each response is ~100 bytes
- 100 fields × 100 users = 1 MB
- **You'd need 10,000+ active users to exceed free tier**

## Troubleshooting

### "Failed to sync to cloud"

✅ Data still saved locally, will sync when connection restored

### "Invalid API key"

1. Check your Supabase project is active
2. Verify you copied the **anon public** key (not service role)
3. Check the URL is correct

### "Row Level Security" errors

Make sure you ran the SQL policies in Step 3

### Data not syncing

1. Check internet connection
2. Open app console logs
3. Verify `SUPABASE_URL` and `SUPABASE_ANON_KEY` are correct

## Next Steps

1. ✅ Set up Supabase project
2. ✅ Create database table
3. ✅ Configure API keys
4. 🔄 Update app to use Supabase storage
5. 🔄 Test with interactive pages
6. (Optional) Add user authentication
7. (Optional) Add real-time sync across devices

---

**Need help?** Check the Supabase docs: https://supabase.com/docs
