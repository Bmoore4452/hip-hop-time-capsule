/**
 * Authentication utilities for Apple Sign-In with Supabase
 */

import { supabase } from "./supabase";
import appleAuth from "@invertase/react-native-apple-authentication";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { isDemoMode, getCurrentDemoUser, getDemoUserId } from "./demoAuth";

const ANON_USER_KEY = "@hip_hop_anon_user_id";

/**
 * Sign in with Apple (iOS only)
 */
export async function signInWithApple(): Promise<{
  success: boolean;
  error?: string;
}> {
  try {
    // Start Apple Sign-In flow
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure we have identity token
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error("No identity token returned from Apple");
    }

    // Sign in to Supabase with Apple ID token
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "apple",
      token: appleAuthRequestResponse.identityToken,
      nonce: appleAuthRequestResponse.nonce,
    });

    if (error) {
      console.error("Supabase auth error:", error);
      return { success: false, error: error.message };
    }

    // Clear anonymous user ID since we're now authenticated
    await AsyncStorage.removeItem(ANON_USER_KEY);

    console.log("Successfully signed in with Apple:", data.user?.id);
    return { success: true };
  } catch (error: any) {
    console.error("Apple Sign-In error:", error);

    if (error.code === appleAuth.Error.CANCELED) {
      return { success: false, error: "Sign in was canceled" };
    }

    return { success: false, error: error.message || "Failed to sign in" };
  }
}

/**
 * Sign out current user
 */
export async function signOut(): Promise<void> {
  try {
    await supabase.auth.signOut();
    console.log("Successfully signed out");
  } catch (error) {
    console.error("Error signing out:", error);
  }
}

/**
 * Get current user ID (authenticated, demo, or anonymous)
 */
export async function getUserId(): Promise<string> {
  // Check for demo mode first
  const demoEnabled = await isDemoMode();
  if (demoEnabled) {
    const demoUserId = await getDemoUserId();
    if (demoUserId) {
      return demoUserId;
    }
  }

  // Check if user is authenticated with Apple
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (user) {
    return user.id;
  }

  // Use anonymous ID stored locally
  let anonId = await AsyncStorage.getItem(ANON_USER_KEY);

  if (!anonId) {
    anonId = `anon_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    await AsyncStorage.setItem(ANON_USER_KEY, anonId);
  }

  return anonId;
}

/**
 * Check if Apple Sign-In is available (iOS 13+)
 */
export async function isAppleSignInAvailable(): Promise<boolean> {
  try {
    return await appleAuth.isSupported;
  } catch {
    return false;
  }
}

/**
 * Get current user information (supports demo mode)
 */
export async function getCurrentUser() {
  // Check demo mode first
  const demoEnabled = await isDemoMode();
  if (demoEnabled) {
    const demoUser = await getCurrentDemoUser();
    if (demoUser) {
      // Return demo user in Supabase user format
      return {
        id: demoUser.id,
        email: demoUser.email,
        user_metadata: { name: demoUser.name },
        created_at: demoUser.createdAt,
      };
    }
  }

  const {
    data: { user },
  } = await supabase.auth.getUser();
  return user;
}

/**
 * Check if user is authenticated (including demo mode)
 */
export async function isAuthenticated(): Promise<boolean> {
  // Check demo mode
  const demoEnabled = await isDemoMode();
  if (demoEnabled) {
    const demoUser = await getCurrentDemoUser();
    if (demoUser) return true;
  }

  // Check real auth
  const user = await getCurrentUser();
  return user !== null;
}

/**
 * Listen to auth state changes
 */
export function onAuthStateChange(
  callback: (authenticated: boolean, userId?: string) => void
) {
  return supabase.auth.onAuthStateChange((event, session) => {
    const isAuth = session?.user !== null && session?.user !== undefined;
    callback(isAuth, session?.user?.id);
  });
}

/**
 * Migrate anonymous data to authenticated user
 */
export async function migrateAnonymousData(): Promise<void> {
  try {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      console.log("No authenticated user to migrate to");
      return;
    }

    // Get old anonymous ID
    const anonId = await AsyncStorage.getItem(ANON_USER_KEY);

    if (!anonId) {
      console.log("No anonymous data to migrate");
      return;
    }

    // Update all anonymous responses to the authenticated user ID
    const { error } = await supabase
      .from("user_responses")
      .update({ user_id: user.id })
      .eq("user_id", anonId);

    if (error) {
      console.error("Error migrating data:", error);
    } else {
      console.log("Successfully migrated anonymous data to authenticated user");
      // Clear the anonymous ID
      await AsyncStorage.removeItem(ANON_USER_KEY);
    }
  } catch (error) {
    console.error("Failed to migrate anonymous data:", error);
  }
}
