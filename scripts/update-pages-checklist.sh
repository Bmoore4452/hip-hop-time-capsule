#!/bin/bash

# Script to update all page components to use the consistent structure:
# SafeAreaWrapper backgroundColor={colors.primary} + ScrollView pattern

# List of page files that need updating (excluding already updated ones)
pages=(
    "TableOfContentsPage.tsx"
    "TableOfContentsPage2.tsx"
    "ForewordPage.tsx"
    "ForewordPage8.tsx"
    "ForewordPage9.tsx"
    "ForewordPage10.tsx"
    "ForewordPage11.tsx"
    "IntroductionPage.tsx"
    "IntroductionPage13.tsx"
    "IntroductionPage14.tsx"
    "IntroductionPage15.tsx"
    "IntroductionPage16.tsx"
    "IntroductionPage17.tsx"
    "IntroductionPage18.tsx"
    "IntroductionPage19.tsx"
    "IntroductionPage20.tsx"
)

echo "Pages that need to be updated manually:"
echo "========================================"
for page in "${pages[@]}"; do
    echo "- $page"
done

echo ""
echo "Pattern to apply:"
echo "================="
echo "1. Import ScrollView: import { StyleSheet, Text, View, ScrollView } from 'react-native';"
echo "2. Change SafeAreaWrapper: <SafeAreaWrapper backgroundColor={colors.primary}>"
echo "3. Add ScrollView wrapper: <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>"
echo "4. Close ScrollView before SafeAreaWrapper closes: </ScrollView>"
echo "5. Update styles to add container style with flex: 1 and backgroundColor: '#fff'"
