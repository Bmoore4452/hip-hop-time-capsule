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
  └── EbookReader.tsx          ← State owner (repo root): currentPage, nav controls visibility, trivia state. totalPages = 287
        ├── PageRenderer.tsx   ← Switch-based router: maps page numbers → page components; provides PageFooterContext
        ├── NavigationControls ← Overlay: prev/next buttons + go-to-page input
        ├── InvisibleNavZones  ← Touch zones for left/right/center tap navigation
        └── NavigationHint     ← First-time user guide overlay
```

**EbookReader** (at the repo root, not in `components/`) owns all navigation state. It passes callbacks down to PageRenderer and navigation components. The trivia game (pages 81–90) has special state that affects navigation behavior — when `triviaGameState !== 'splash'`, swipe/tap navigation is disabled.

### Page Routing (PageRenderer.tsx)

Pages are mapped via a `switch` statement. Pages not explicitly cased fall through to dynamic handlers in the `default:` branch:

| Page range | Handler | Data source |
|---|---|---|
| 1–24 | Named static components (TitlePage, ForewordPage*, IntroductionPage*, etc.) | inline |
| 25–75 | `QuestionPage` → `QuestionPageTemplate` | `utils/questionsConfig.ts` |
| 76–80 | `QuotesPage` | `utils/quotesData.ts` |
| 81–90 | `TriviaGame` | `utils/triviaData.ts` |
| 91–92 | `DJScipioJourneyPage` / `DJScipioJourneyPage92` (section intro) | inline |
| 93–142 | `DJScipioAnswerPage` (Q&A) | `utils/djScipioAnswers.ts` |
| 143–144 | `AnitaScipioJourneyPage` / `AnitaScipioPage144` (section intro) | inline |
| 145–212 | `AnitaScipioAnswerPage` (Q&A) | `utils/anitaScipioAnswers.ts` |
| 213–214 | `YankeeConcertPage` | `utils/yankeeConcertPages.ts` |
| 215 | `BurstSplashPage` (purple section divider) | inline `lines` prop |
| 216 | `TributePage` | `utils/tributePages.ts` |
| 217 | `ThankYouSectionsPage` | `utils/thankYouSectionsPages.ts` |
| 218 | `LetterTributePage` | `utils/letterTributePages.ts` |
| 219–222 | `SpecialThanksPage`, `IHeartThanksPage`, `AngelaYeePage`, `BreakfastClubPage` | inline |
| 244, 254, 257, 266, 268 | `BurstSplashPage` (purple section dividers) | inline `lines` prop |
| 223–287 (all others) | `BackMatterPage` (generic block renderer) | `utils/backMatterPages.ts` |

The back-matter pages (223–287) are fully data-driven: `utils/backMatterPages.ts` holds one entry per page as a list of typed blocks (`title`, `heading`, `divider`, `script`, `body` with rich-text segments, `image`, `imageRow`, `photoGrid`, `nameList`, `spacer`) rendered by `components/BackMatterPage.tsx`. Photo/QR assets for these pages are cropped from the source book scans and named `assets/bm<page>-<slug>.png`. Page 265 is intentionally blank (empty `blocks`). To edit back-matter content, edit the data file only. Images in `BackMatterPage` are sized numerically from screen width (percentage width + `aspectRatio` style is unreliable on this react-native-web version).

On web, `?page=N` deep-links straight to a page (used for screenshot verification); it also skips the first-time navigation hint.

The DJ Scipio (`djScipioAnswers.ts`) and Anita Scipio (`anitaScipioAnswers.ts`) data files share a similar shape: an array of page objects keyed by `pageNumber`, each holding `answers[]` of `{ questionNumber, questionText, answerText, qrCodes?, ripNote? }`. Anita pages additionally have a `pageType` of `"answers" | "continued"`. To edit Q&A content, edit these data files — no component changes needed.

### Page-Number Footer (`PageFooterContext`)

`PageRenderer` wraps each page in `PageFooterContext.Provider`, supplying the page number that should appear in the standard bottom footer (`null` = no footer). `SafeAreaWrapper` reads this via `usePageFooter()`: when non-null it renders the page above a pinned `PageNumberFooter`; when null it renders children alone.

The footer is suppressed (`footerPageNumber = null`) for the trivia game (81–90) and for pages that draw their own footer — DJ Scipio answers (93–142), Anita Scipio answers (145–211), and the purple divider pages 143, 215, 244, 254, 257, 266, and 268. See `hasOwnFooter` in `PageRenderer.tsx`.

(`PageFooter.tsx` is a separate, older tappable footer with a go-to-page modal — distinct from `PageNumberFooter.tsx`.)

### Adding a New Page

1. Create `components/YourPage.tsx` following the standard page layout pattern (see below). Use `SafeAreaWrapper` so the page number footer is rendered automatically via context.
2. Add a `case N:` in `components/PageRenderer.tsx` (or a range check in its `default:` branch for a contiguous data-driven section).
3. If the page draws its own footer or should have none, add it to the `hasOwnFooter` / trivia checks in `PageRenderer.tsx` so the standard footer isn't duplicated.

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

The back-matter sections (213+) use photo assets in `assets/` such as the Yankee concert photos (`yankee-*.png`, `yankee214-*.png`), the iHeart/Breakfast Club logos (`iheart-media-logo.png`, `breakfast-club-*.png`, `way-up-logo.png`, `angela-yee.png`), and tribute images (`tribute-misael.png`, `thanks219-*.png`). Several answer pages render QR codes from URLs defined in their data files.
