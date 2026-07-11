import React from "react";
import { View, ActivityIndicator, StyleSheet, Platform } from "react-native";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EbookReader from "./EbookReader";
import AuthScreen from "./components/AuthScreen";
import { AuthProvider, useAuth } from "./contexts/AuthContext";
import { isSupabaseConfigured } from "./lib/supabase";
import { colors } from "./utils/colors";

// Deep links (?page=N on web) skip the login gate so screenshot verification
// and shared page links keep working.
function hasPageDeepLink(): boolean {
  if (Platform.OS === "web" && typeof window !== "undefined") {
    return new URLSearchParams(window.location.search).has("page");
  }
  return false;
}

function Gate() {
  const { sessionLoaded, session, skippedLogin } = useAuth();

  if (!isSupabaseConfigured || session || skippedLogin || hasPageDeepLink()) {
    return <EbookReader />;
  }
  if (!sessionLoaded) {
    return (
      <View style={styles.splash}>
        <ActivityIndicator size="large" color={colors.primary} />
      </View>
    );
  }
  return <AuthScreen />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <AuthProvider>
        <Gate />
      </AuthProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    alignItems: "center",
  },
});
