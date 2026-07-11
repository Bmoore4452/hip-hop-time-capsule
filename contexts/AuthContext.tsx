import React, {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from 'react';
import { Session } from '@supabase/supabase-js';
import { supabase, isSupabaseConfigured } from '../lib/supabase';

interface AuthContextValue {
  // null until the stored session has been checked, so the app can show a
  // splash instead of flashing the login screen at cold start.
  sessionLoaded: boolean;
  session: Session | null;
  // True when the user chose "skip" — read the book without an account.
  skippedLogin: boolean;
  signIn: (email: string, password: string) => Promise<string | null>;
  signUp: (email: string, password: string, displayName: string) => Promise<string | null>;
  signOut: () => Promise<void>;
  skipLogin: () => void;
}

const AuthContext = createContext<AuthContextValue>({
  sessionLoaded: true,
  session: null,
  skippedLogin: false,
  signIn: async () => null,
  signUp: async () => null,
  signOut: async () => {},
  skipLogin: () => {},
});

export function AuthProvider({ children }: { children: ReactNode }) {
  const [sessionLoaded, setSessionLoaded] = useState(!isSupabaseConfigured);
  const [session, setSession] = useState<Session | null>(null);
  const [skippedLogin, setSkippedLogin] = useState(false);

  useEffect(() => {
    if (!supabase) return;
    supabase.auth.getSession().then(({ data }) => {
      setSession(data.session);
      setSessionLoaded(true);
    });
    const { data: sub } = supabase.auth.onAuthStateChange((_event, s) => {
      setSession(s);
    });
    return () => sub.subscription.unsubscribe();
  }, []);

  const signIn = async (email: string, password: string) => {
    if (!supabase) return 'Supabase is not configured.';
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    return error ? error.message : null;
  };

  const signUp = async (email: string, password: string, displayName: string) => {
    if (!supabase) return 'Supabase is not configured.';
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) return error.message;
    // With email confirmation disabled (recommended for the PoC) a session is
    // returned immediately and we can create the profile row now. If
    // confirmation is on, data.session is null and the profile is created on
    // first sign-in instead.
    if (data.session && data.user) {
      await supabase.from('profiles').upsert({
        id: data.user.id,
        display_name: displayName,
        onboarding_complete: true,
      });
    }
    return null;
  };

  const signOut = async () => {
    if (supabase) await supabase.auth.signOut();
    setSkippedLogin(false);
  };

  return (
    <AuthContext.Provider
      value={{
        sessionLoaded,
        session,
        skippedLogin,
        signIn,
        signUp,
        signOut,
        skipLogin: () => setSkippedLogin(true),
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
