/**
 * Demo authentication for development
 * Simulates Apple Sign-In without requiring actual Apple Developer setup
 */

import AsyncStorage from "@react-native-async-storage/async-storage";
import { supabase } from "./supabase";

const DEMO_MODE_KEY = "@hip_hop_demo_mode";
const DEMO_USER_KEY = "@hip_hop_demo_user";

export interface DemoUser {
  id: string;
  email: string;
  name: string;
  createdAt: string;
}

const DEFAULT_DEMO_USERS: DemoUser[] = [
  {
    id: "demo_user_1",
    email: "john@example.com",
    name: "John Doe",
    createdAt: new Date().toISOString(),
  },
  {
    id: "demo_user_2",
    email: "jane@example.com",
    name: "Jane Smith",
    createdAt: new Date().toISOString(),
  },
  {
    id: "demo_user_3",
    email: "alex@example.com",
    name: "Alex Johnson",
    createdAt: new Date().toISOString(),
  },
];

/**
 * Check if demo mode is enabled
 */
export async function isDemoMode(): Promise<boolean> {
  const mode = await AsyncStorage.getItem(DEMO_MODE_KEY);
  // Default to true in development
  return mode !== "false";
}

/**
 * Enable demo mode
 */
export async function enableDemoMode(): Promise<void> {
  await AsyncStorage.setItem(DEMO_MODE_KEY, "true");
}

/**
 * Disable demo mode
 */
export async function disableDemoMode(): Promise<void> {
  await AsyncStorage.setItem(DEMO_MODE_KEY, "false");
}

/**
 * Sign in with demo account
 */
export async function signInWithDemoUser(
  userId?: string
): Promise<{ success: boolean; user?: DemoUser; error?: string }> {
  try {
    const demoEnabled = await isDemoMode();

    if (!demoEnabled) {
      return { success: false, error: "Demo mode is disabled" };
    }

    // Select user
    const user = userId
      ? DEFAULT_DEMO_USERS.find((u) => u.id === userId) || DEFAULT_DEMO_USERS[0]
      : DEFAULT_DEMO_USERS[0];

    // Save demo user
    await AsyncStorage.setItem(DEMO_USER_KEY, JSON.stringify(user));

    console.log("Signed in with demo user:", user.email);
    return { success: true, user };
  } catch (error: any) {
    console.error("Demo sign-in error:", error);
    return { success: false, error: error.message };
  }
}

/**
 * Get current demo user
 */
export async function getCurrentDemoUser(): Promise<DemoUser | null> {
  try {
    const demoEnabled = await isDemoMode();
    if (!demoEnabled) return null;

    const userStr = await AsyncStorage.getItem(DEMO_USER_KEY);
    if (!userStr) return null;

    return JSON.parse(userStr);
  } catch (error) {
    console.error("Error getting demo user:", error);
    return null;
  }
}

/**
 * Sign out demo user
 */
export async function signOutDemoUser(): Promise<void> {
  await AsyncStorage.removeItem(DEMO_USER_KEY);
  console.log("Demo user signed out");
}

/**
 * Get demo user ID (for storage)
 */
export async function getDemoUserId(): Promise<string | null> {
  const user = await getCurrentDemoUser();
  return user?.id || null;
}

/**
 * Check if user is signed in with demo account
 */
export async function isDemoUserSignedIn(): Promise<boolean> {
  const user = await getCurrentDemoUser();
  return user !== null;
}

/**
 * Get list of available demo users
 */
export function getDemoUsers(): DemoUser[] {
  return DEFAULT_DEMO_USERS;
}

/**
 * Toggle demo mode
 */
export async function toggleDemoMode(): Promise<boolean> {
  const current = await isDemoMode();
  if (current) {
    await disableDemoMode();
    await signOutDemoUser();
  } else {
    await enableDemoMode();
  }
  return !current;
}
