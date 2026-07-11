-- Hip-Hop Time Capsule — database schema
-- Run this once in the Supabase dashboard: SQL Editor → New query → paste → Run.

-- ── Profiles (one row per auth user, created at sign-up) ─────────────────────
create table if not exists public.profiles (
  id uuid primary key references auth.users (id) on delete cascade,
  display_name text not null default '',
  onboarding_complete boolean not null default false,
  created_at timestamptz not null default now()
);

-- ── Question-page answers (pages 25-75) ──────────────────────────────────────
-- One row per user per question; the app upserts on save, so the unique
-- constraint is what prevents duplicates.
create table if not exists public.answers (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  page_number int not null,
  question_number int not null,
  answer_text text not null default '',
  updated_at timestamptz not null default now(),
  unique (user_id, page_number, question_number)
);

-- ── Reading progress (resume where you left off) ─────────────────────────────
create table if not exists public.progress (
  user_id uuid primary key references auth.users (id) on delete cascade,
  current_page int not null default 1,
  updated_at timestamptz not null default now()
);

-- ── Trivia results (optional, for later) ─────────────────────────────────────
create table if not exists public.trivia_results (
  id bigint generated always as identity primary key,
  user_id uuid not null references auth.users (id) on delete cascade,
  score int not null,
  total_questions int not null,
  played_at timestamptz not null default now()
);

-- ── Row-level security: users can only touch their own rows ──────────────────
alter table public.profiles enable row level security;
alter table public.answers enable row level security;
alter table public.progress enable row level security;
alter table public.trivia_results enable row level security;

create policy "own profile" on public.profiles
  for all using (auth.uid() = id) with check (auth.uid() = id);

create policy "own answers" on public.answers
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own progress" on public.progress
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);

create policy "own trivia results" on public.trivia_results
  for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
