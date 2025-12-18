/**
 * Supabase client configuration
 *
 * Setup Instructions:
 * 1. Go to https://supabase.com and create a free account
 * 2. Create a new project (takes ~2 minutes to provision)
 * 3. Go to Settings > API
 * 4. Copy the "Project URL" and "anon public" key
 * 5. Create a .env file in the project root with:
 *    SUPABASE_URL=your-project-url
 *    SUPABASE_ANON_KEY=your-anon-key
 */

import { createClient } from "@supabase/supabase-js";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Supabase project credentials
const SUPABASE_URL = "https://nmgflgslmmtvfdoxuepd.supabase.co";
const SUPABASE_ANON_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im5tZ2ZsZ3NsbW10dmZkb3h1ZXBkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjYwODU3MjMsImV4cCI6MjA4MTY2MTcyM30.p6l6Sb71i_lkF-JDIZ2YWUN-dmZuINCiqnx9_bAozgU";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

/**
 * Database types for TypeScript
 */
export interface Database {
  public: {
    Tables: {
      user_responses: {
        Row: {
          id: string;
          user_id: string;
          page_number: number;
          field_id: string;
          value: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          page_number: number;
          field_id: string;
          value: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          page_number?: number;
          field_id?: string;
          value?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
