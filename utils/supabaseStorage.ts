/**
 * Supabase storage service for user page responses
 * Provides cloud sync functionality with offline fallback
 */

import { supabase } from "./supabase";
import { UserPageResponse } from "../types/pageTypes";
import * as LocalStorage from "./pageStorage";
import { getUserId } from "./auth";

/**
 * Save user response to Supabase (with local fallback)
 */
export async function savePageResponse(
  pageNumber: number,
  fieldId: string,
  value: string
): Promise<void> {
  try {
    // Always save locally first for offline support
    await LocalStorage.savePageResponse(pageNumber, fieldId, value);

    // Get current user (or use anonymous ID)
    const userId = await getUserId();

    // Upsert to Supabase
    const { error } = await supabase.from("user_responses").upsert(
      {
        user_id: userId,
        page_number: pageNumber,
        field_id: fieldId,
        value: value,
        updated_at: new Date().toISOString(),
      },
      {
        onConflict: "user_id,page_number,field_id",
      }
    );

    if (error) {
      console.warn(
        "Error syncing to Supabase (using local storage):",
        error.message
      );
    }
  } catch (error) {
    console.warn("Failed to sync to cloud, data saved locally:", error);
  }
}

/**
 * Load user response for a specific page (cloud first, local fallback)
 */
export async function loadPageResponse(
  pageNumber: number
): Promise<UserPageResponse | null> {
  try {
    const userId = await getUserId();

    // Try to load from Supabase
    const { data, error } = await supabase
      .from("user_responses")
      .select("*")
      .eq("user_id", userId)
      .eq("page_number", pageNumber);

    if (error) throw error;

    if (data && data.length > 0) {
      // Convert Supabase format to app format
      const responses: { [fieldId: string]: string } = {};
      let lastModified = data[0].updated_at;

      data.forEach((row) => {
        responses[row.field_id] = row.value;
        if (row.updated_at > lastModified) {
          lastModified = row.updated_at;
        }
      });

      return {
        pageNumber,
        responses,
        lastModified,
      };
    }

    // Fallback to local storage
    return await LocalStorage.loadPageResponse(pageNumber);
  } catch (error) {
    console.warn("Error loading from Supabase, using local storage:", error);
    return await LocalStorage.loadPageResponse(pageNumber);
  }
}

/**
 * Load all user responses (cloud first, local fallback)
 */
export async function loadAllPageResponses(): Promise<UserPageResponse[]> {
  try {
    const userId = await getUserId();

    const { data, error } = await supabase
      .from("user_responses")
      .select("*")
      .eq("user_id", userId)
      .order("page_number");

    if (error) throw error;

    if (data && data.length > 0) {
      // Group by page number
      const pageMap = new Map<number, UserPageResponse>();

      data.forEach((row) => {
        if (!pageMap.has(row.page_number)) {
          pageMap.set(row.page_number, {
            pageNumber: row.page_number,
            responses: {},
            lastModified: row.updated_at,
          });
        }

        const pageResponse = pageMap.get(row.page_number)!;
        pageResponse.responses[row.field_id] = row.value;

        if (row.updated_at > pageResponse.lastModified) {
          pageResponse.lastModified = row.updated_at;
        }
      });

      return Array.from(pageMap.values());
    }

    // Fallback to local storage
    return await LocalStorage.loadAllPageResponses();
  } catch (error) {
    console.warn("Error loading from Supabase, using local storage:", error);
    return await LocalStorage.loadAllPageResponses();
  }
}

/**
 * Sync local data to cloud
 */
export async function syncLocalToCloud(): Promise<void> {
  try {
    const userId = await getUserId();
    const localResponses = await LocalStorage.loadAllPageResponses();

    if (localResponses.length === 0) return;

    // Prepare batch insert
    const records = localResponses.flatMap((pageResponse) =>
      Object.entries(pageResponse.responses).map(([fieldId, value]) => ({
        user_id: userId,
        page_number: pageResponse.pageNumber,
        field_id: fieldId,
        value: value,
        updated_at: pageResponse.lastModified,
      }))
    );

    const { error } = await supabase.from("user_responses").upsert(records, {
      onConflict: "user_id,page_number,field_id",
    });

    if (error) {
      console.error("Error syncing to cloud:", error);
    } else {
      console.log(`Successfully synced ${records.length} responses to cloud`);
    }
  } catch (error) {
    console.error("Failed to sync to cloud:", error);
  }
}

/**
 * Clear response for a specific page (both cloud and local)
 */
export async function clearPageResponse(pageNumber: number): Promise<void> {
  try {
    await LocalStorage.clearPageResponse(pageNumber);

    const userId = await getUserId();
    await supabase
      .from("user_responses")
      .delete()
      .eq("user_id", userId)
      .eq("page_number", pageNumber);
  } catch (error) {
    console.error("Error clearing page response:", error);
  }
}

/**
 * Clear all page responses (both cloud and local)
 */
export async function clearAllPageResponses(): Promise<void> {
  try {
    await LocalStorage.clearAllPageResponses();

    const userId = await getUserId();
    await supabase.from("user_responses").delete().eq("user_id", userId);
  } catch (error) {
    console.error("Error clearing all page responses:", error);
  }
}

// getUserId is now imported from "./auth" for centralized user management
