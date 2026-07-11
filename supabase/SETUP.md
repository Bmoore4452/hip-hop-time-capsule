# Supabase setup (one-time, ~10 minutes)

The app runs fine without any of this — login and saving simply stay disabled
until the two env vars exist. Do this when you want accounts + persistence.

## 1. Create the project

1. Go to [supabase.com](https://supabase.com) → sign in with GitHub → **New project**.
2. Name it `hip-hop-time-capsule`, pick a strong database password (save it
   somewhere — you rarely need it again), region closest to you (US East).
3. Wait ~2 minutes for provisioning.

## 2. Create the tables

1. In the dashboard, open **SQL Editor** → **New query**.
2. Paste the entire contents of [`schema.sql`](./schema.sql) and click **Run**.
3. You should see "Success. No rows returned."

## 3. Auth settings (PoC-friendly)

1. **Authentication → Sign In / Providers → Email**: turn **off**
   "Confirm email" so testers can sign up and start immediately.
   (Turn it back on before any public launch.)

## 4. Wire the app to the project

1. **Project Settings → API**: copy the **Project URL** and the
   **anon public** key.
2. Locally: `cp .env.example .env` and paste both values in, then restart
   `npm start`.
3. For the GitHub Pages deploy: repo **Settings → Secrets and variables →
   Actions → Variables** → add `EXPO_PUBLIC_SUPABASE_URL` and
   `EXPO_PUBLIC_SUPABASE_ANON_KEY` with the same values, then re-run the
   "Deploy web build to GitHub Pages" workflow (Actions tab → Run workflow).

The anon key is safe to ship in the client bundle — row-level security in
`schema.sql` is what protects user data.

## What persists

- **Answers** on question pages 25–75 (saved on every answer edit)
- **Reading progress** (auto-resume on next launch)
- **Profile** (display name from sign-up)
- `trivia_results` table exists for later; the game doesn't write to it yet.
