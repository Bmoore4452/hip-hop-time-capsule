-- Fix RLS policies for user_responses table (Version 3 - Most Permissive)
-- This allows ALL operations for both authenticated and anonymous users

-- Drop all existing policies
DROP POLICY IF EXISTS "Users can manage own responses" ON user_responses;
DROP POLICY IF EXISTS "Authenticated users can manage own responses" ON user_responses;
DROP POLICY IF EXISTS "Anonymous users can manage responses" ON user_responses;

-- Create a single permissive policy for all users
CREATE POLICY "Allow all operations for all users"
  ON user_responses
  FOR ALL
  USING (true)
  WITH CHECK (true);

-- Verify the policy was created
SELECT schemaname, tablename, policyname, roles FROM pg_policies WHERE tablename = 'user_responses';
