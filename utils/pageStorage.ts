/**
 * Storage utility for saving and loading user page responses
 */

import AsyncStorage from '@react-native-async-storage/async-storage';
import { UserPageResponse } from '../types/pageTypes';

const STORAGE_KEY_PREFIX = '@hip_hop_page_';

/**
 * Save user response for a specific page
 */
export async function savePageResponse(
  pageNumber: number,
  fieldId: string,
  value: string
): Promise<void> {
  try {
    const key = `${STORAGE_KEY_PREFIX}${pageNumber}`;
    
    // Load existing responses for this page
    const existing = await loadPageResponse(pageNumber);
    
    const response: UserPageResponse = {
      pageNumber,
      responses: {
        ...existing?.responses,
        [fieldId]: value,
      },
      lastModified: new Date().toISOString(),
    };
    
    await AsyncStorage.setItem(key, JSON.stringify(response));
  } catch (error) {
    console.error('Error saving page response:', error);
  }
}

/**
 * Load user response for a specific page
 */
export async function loadPageResponse(
  pageNumber: number
): Promise<UserPageResponse | null> {
  try {
    const key = `${STORAGE_KEY_PREFIX}${pageNumber}`;
    const data = await AsyncStorage.getItem(key);
    
    if (data) {
      return JSON.parse(data);
    }
    return null;
  } catch (error) {
    console.error('Error loading page response:', error);
    return null;
  }
}

/**
 * Load all user responses
 */
export async function loadAllPageResponses(): Promise<UserPageResponse[]> {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const pageKeys = keys.filter(key => key.startsWith(STORAGE_KEY_PREFIX));
    
    const responses = await AsyncStorage.multiGet(pageKeys);
    
    return responses
      .map(([, value]) => value ? JSON.parse(value) : null)
      .filter((response): response is UserPageResponse => response !== null);
  } catch (error) {
    console.error('Error loading all page responses:', error);
    return [];
  }
}

/**
 * Clear response for a specific page
 */
export async function clearPageResponse(pageNumber: number): Promise<void> {
  try {
    const key = `${STORAGE_KEY_PREFIX}${pageNumber}`;
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('Error clearing page response:', error);
  }
}

/**
 * Clear all page responses
 */
export async function clearAllPageResponses(): Promise<void> {
  try {
    const keys = await AsyncStorage.getAllKeys();
    const pageKeys = keys.filter(key => key.startsWith(STORAGE_KEY_PREFIX));
    await AsyncStorage.multiRemove(pageKeys);
  } catch (error) {
    console.error('Error clearing all page responses:', error);
  }
}
