import React from "react";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import EbookReader from "./EbookReader";

export default function App() {
  return (
    <SafeAreaProvider>
      <EbookReader />
    </SafeAreaProvider>
  );
}
