-- Fix RLS policies for user_responses table
-- Run this in Supabase SQL Editor: https://supabase.com/dashboard/project/nmgflaslmmtvfdoxuepd/sql

-- Drop existing policies
DROP POLICY IF EXISTS "Users can access own responses" ON user_responses;
DROP POLICY IF EXISTS "Anonymous users can manage own responses" ON user_responses;

-- Create a single, simpler policy that allows users to manage their own data
CREATE POLICY "Users can manage own responses"
  ON user_responses
  FOR ALL
  USING (
    -- Allow if user_id matches the authenticated user's ID
    user_id = auth.uid()::text
    OR
    -- Allow if user_id is an anonymous ID (starts with 'anon_')
    user_id LIKE 'anon_%'
  )
  WITH CHECK (
    -- Same conditions for INSERT/UPDATE
    user_id = auth.uid()::text
    OR
    user_id LIKE 'anon_%'
  );

-- Verify the policy was created
SELECT schemaname, tablename, policyname FROM pg_policies WHERE tablename = 'user_responses';
