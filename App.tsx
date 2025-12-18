import React, { useState } from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import HomeScreen from "./components/HomeScreen";
import EbookReader from "./EbookReader";

export default function App() {
  const [showReader, setShowReader] = useState(false);

  if (showReader) {
    return (
      <SafeAreaProvider>
        <EbookReader onBackToHome={() => setShowReader(false)} />
      </SafeAreaProvider>
    );
  }

  return (
    <SafeAreaProvider>
      <HomeScreen onStartReading={() => setShowReader(true)} />
    </SafeAreaProvider>
  );
}
