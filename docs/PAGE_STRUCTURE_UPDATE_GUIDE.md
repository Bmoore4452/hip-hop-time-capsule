# Page Structure Update Guide

## ✅ Already Updated Pages

The following pages have been updated with the correct structure:

1. TitlePage.tsx (Page 1)
2. ThankYouPage.tsx (Page 2)
3. CopyrightPage.tsx (Page 3)
4. TableOfContentsPage.tsx (Page 4)
5. IntroductionPage21.tsx (Page 21)
6. IntroductionPage22.tsx (Page 22)
7. IntroductionPage23.tsx (Page 23)

## ⏳ Pages Still Need Updating

The following pages need the new structure applied:

### Table of Contents

- [ ] TableOfContentsPage2.tsx (Page 5)

### Foreword Section

- [ ] ForewordPage.tsx (Page 7)
- [ ] ForewordPage8.tsx (Page 8)
- [ ] ForewordPage9.tsx (Page 9)
- [ ] ForewordPage10.tsx (Page 10)
- [ ] ForewordPage11.tsx (Page 11)

### Introduction Section

- [ ] IntroductionPage.tsx (Page 12)
- [ ] IntroductionPage13.tsx (Page 13)
- [ ] IntroductionPage14.tsx (Page 14)
- [ ] IntroductionPage15.tsx (Page 15)
- [ ] IntroductionPage16.tsx (Page 16)
- [ ] IntroductionPage17.tsx (Page 17)
- [ ] IntroductionPage18.tsx (Page 18)
- [ ] IntroductionPage19.tsx (Page 19)
- [ ] IntroductionPage20.tsx (Page 20)

## Required Changes for Each Page

### 1. Update Import Statement

**Find:**

```tsx
import { StyleSheet, Text, View } from "react-native";
```

**Replace with:**

```tsx
import { StyleSheet, Text, View, ScrollView } from "react-native";
```

### 2. Update SafeAreaWrapper

**Find:**

```tsx
<SafeAreaWrapper backgroundColor="#fff">
```

**Replace with:**

```tsx
<SafeAreaWrapper backgroundColor={colors.primary}>
```

### 3. Add ScrollView Wrapper

**Find:**

```tsx
<SafeAreaWrapper backgroundColor={colors.primary}>
    <View style={styles.container}>
```

**Replace with:**

```tsx
<SafeAreaWrapper backgroundColor={colors.primary}>
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
```

### 4. Close ScrollView

**Find (at the end of the component):**

```tsx
            </View>
        </SafeAreaWrapper>
    );
}
```

**Replace with:**

```tsx
            </View>
        </ScrollView>
    </SafeAreaWrapper>
    );
}
```

### 5. Update Styles

**Find:**

```tsx
const styles = StyleSheet.Create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // ...other styles
    },
```

**Replace with:**

```tsx
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    contentContainer: {
        flex: 1,
        // ...move the other styles here (padding, alignItems, etc)
        minHeight: 600, // Add this to ensure proper scrolling
    },
```

## Visual Result

```
┌─────────────────────────────────┐
│   🟣 Purple Safe Area (Status)  │ ← SafeAreaWrapper backgroundColor={colors.primary}
├─────────────────────────────────┤
│                                 │
│   ⚪ White Content Area         │ ← ScrollView container backgroundColor: '#fff'
│                                 │
│   (Content can scroll)          │
│                                 │
│                                 │
└─────────────────────────────────┘
```

## Benefits

- ✅ Consistent branding across all pages
- ✅ Purple status bar area on all pages
- ✅ White reading area for better readability
- ✅ Scrollable content for longer pages
- ✅ Proper safe area handling

## Quick Test

After updating each page, test by:

1. Navigate to the page in the app
2. Check status bar area is purple
3. Check content area is white
4. Try scrolling (especially on longer pages)
5. Check that content is not cut off
