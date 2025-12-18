-- Fix RLS policies for user_responses table (Version 2)
-- More explicit handling of anonymous users

-- Drop existing policy
DROP POLICY IF EXISTS "Users can manage own responses" ON user_responses;

-- Create separate policy for authenticated users
CREATE POLICY "Authenticated users can manage own responses"
  ON user_responses
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid()::text)
  WITH CHECK (user_id = auth.uid()::text);

-- Create separate policy for anonymous users (anyone not authenticated)
CREATE POLICY "Anonymous users can manage responses"
  ON user_responses
  FOR ALL
  TO anon
  USING (user_id LIKE 'anon_%')
  WITH CHECK (user_id LIKE 'anon_%');

-- Verify policies were created
SELECT schemaname, tablename, policyname, roles FROM pg_policies WHERE tablename = 'user_responses';
