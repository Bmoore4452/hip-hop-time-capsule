import { supabase } from './supabase';

// All helpers are no-ops when Supabase is unconfigured or nobody is signed in,
// so callers never need to branch — the app just behaves like the old
// in-memory version.

async function currentUserId(): Promise<string | null> {
  if (!supabase) return null;
  const { data } = await supabase.auth.getSession();
  return data.session?.user.id ?? null;
}

// ── Question-page answers ─────────────────────────────────────────────────────

export async function loadAnswers(
  pageNumber: number,
): Promise<Record<number, string>> {
  const userId = await currentUserId();
  if (!supabase || !userId) return {};
  const { data, error } = await supabase
    .from('answers')
    .select('question_number, answer_text')
    .eq('user_id', userId)
    .eq('page_number', pageNumber);
  if (error || !data) return {};
  const result: Record<number, string> = {};
  for (const row of data) result[row.question_number] = row.answer_text;
  return result;
}

export async function saveAnswer(
  pageNumber: number,
  questionNumber: number,
  answerText: string,
): Promise<void> {
  const userId = await currentUserId();
  if (!supabase || !userId) return;
  await supabase.from('answers').upsert(
    {
      user_id: userId,
      page_number: pageNumber,
      question_number: questionNumber,
      answer_text: answerText,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id,page_number,question_number' },
  );
}

// ── Reading progress ──────────────────────────────────────────────────────────

export async function loadProgress(): Promise<number | null> {
  const userId = await currentUserId();
  if (!supabase || !userId) return null;
  const { data, error } = await supabase
    .from('progress')
    .select('current_page')
    .eq('user_id', userId)
    .maybeSingle();
  if (error || !data) return null;
  return data.current_page;
}

export async function saveProgress(currentPage: number): Promise<void> {
  const userId = await currentUserId();
  if (!supabase || !userId) return;
  await supabase.from('progress').upsert(
    {
      user_id: userId,
      current_page: currentPage,
      updated_at: new Date().toISOString(),
    },
    { onConflict: 'user_id' },
  );
}
