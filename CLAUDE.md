# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
# Start development server (Expo Go / web)
npm start

# Run on iOS simulator
npm run ios

# Run on Android emulator
npm run android

# Run in browser
npm run web
```

There are no test or lint commands configured.

## Architecture Overview

This is a **React Native / Expo** app implementing an interactive digital ebook — "Hip-Hop Time Capsule" — a 285-page book with text content, interactive question pages, quotes, and a trivia game.

### Core Data Flow

```
App.tsx
  └── EbookReader.tsx          ← State owner: currentPage, nav controls visibility, trivia state
        ├── PageRenderer.tsx   ← Switch-based router: maps page numbers → page components
        ├── NavigationControls ← Overlay: prev/next buttons + go-to-page input
        ├── InvisibleNavZones  ← Touch zones for left/right/center tap navigation
        └── NavigationHint     ← First-time user guide overlay
```

**EbookReader** owns all navigation state. It passes callbacks down to PageRenderer and navigation components. The trivia game (pages 81–90) has special state that affects navigation behavior — when `triviaGameState !== 'splash'`, swipe/tap navigation is disabled.

### Page Routing (PageRenderer.tsx)

Pages are mapped via a `switch` statement. Pages not explicitly cased fall through to dynamic handlers:

| Page range | Handler |
|---|---|
| 1–24, 91–92, 285 | Named static components |
| 25–75 | `QuestionPage` → `QuestionPageTemplate` (config from `utils/questionsConfig.ts`) |
| 76–80 | `QuotesPage` (data from `utils/quotesData.ts`) |
| 81–90 | `TriviaGame` (data from `utils/triviaData.ts`) |

### Adding a New Page

1. Create `components/YourPage.tsx` following the standard page layout pattern (see below)
2. Add a `case N:` in `components/PageRenderer.tsx`

### Standard Page Layout Pattern

All content pages use `SafeAreaWrapper` with `colors.primary` (purple) for the status bar area, and a white `ScrollView` for content:

```tsx
import { StyleSheet, ScrollView, View } from "react-native";
import SafeAreaWrapper from "./SafeAreaWrapper";
import { colors } from "../utils/colors";
import { moderateScale } from "../utils/responsive";

export default function MyPage({ pageNumber }: { pageNumber: number }) {
  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>
          {/* content */}
        </View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  contentContainer: {
    paddingHorizontal: moderateScale(30),
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(60),
  },
});
```

### Responsive Scaling (`utils/responsive.ts`)

All sizing should use these helpers rather than hardcoded pixel values. Base reference device is iPhone 14 Pro Max (414×896):

- `moderateScale(size, factor?)` — general spacing and padding
- `scaleFont(size)` — font sizes (clamped to 0.9–1.15× scale)
- `scaleWidth(size)` / `scaleHeight(size)` — for width/height-specific scaling
- `isSmallDevice()` / `isMediumDevice()` / `isLargeDevice()` / `isTablet()` — device detection

### Color Palette (`utils/colors.ts`)

```ts
colors.primary  // rgba(79, 23, 213, 1)   — purple, status bar + nav buttons
colors.accent   // rgba(210, 56, 187, 1)  — pink, decorative elements
colors.text     // #000
colors.background // #fff
```

### Question Pages (pages 25–75)

Question content is defined entirely in `utils/questionsConfig.ts` as a `Record<number, QuestionPageConfig>`. To add or modify questions, edit that file — no component changes needed. Each page config has:
- `questions[]` — array of `{ number, text, isLongQuestion? }`
- `topIcon` / `bottomIcon` — asset references from `assets/`
- `topIconTint` / `bottomIconTint` — color strings

Answers are stored in component-local state (not persisted between sessions).

### Key Assets

Icons used on question pages: `assets/crown.png`, `assets/b_boy1.png`, `assets/ink_blot.png`, `assets/hip_hop_chain.png`. These are tinted via `tintColor` style prop.
