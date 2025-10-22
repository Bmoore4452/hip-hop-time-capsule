# Page Layout Pattern

## Standard Page Structure

All pages should follow this consistent pattern for proper safe area handling and scrolling:

```tsx
import { colors } from "../utils/colors";
import SafeAreaWrapper from "./SafeAreaWrapper";

export default function PageComponent({ pageNumber }: PageProps) {
  return (
    <SafeAreaWrapper backgroundColor={colors.primary}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.contentContainer}>{/* Page content here */}</View>
      </ScrollView>
    </SafeAreaWrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contentContainer: {
    paddingHorizontal: moderateScale(30),
    paddingTop: moderateScale(40),
    paddingBottom: moderateScale(60),
  },
});
```

## Key Elements

### 1. SafeAreaWrapper with Purple Background

```tsx
<SafeAreaWrapper backgroundColor={colors.primary}>
```

- Creates purple status bar area at top
- Uses `colors.primary` for consistency

### 2. ScrollView Container

```tsx
<ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
```

- White background for content area
- Hides scroll indicator for cleaner look
- Allows content to scroll if it exceeds screen height

### 3. Content Container

```tsx
<View style={styles.contentContainer}>
```

- Inner container for actual page content
- Handles padding and spacing

## Visual Result

```
┌─────────────────────┐
│   Purple Safe Area  │ ← SafeAreaWrapper backgroundColor
├─────────────────────┤
│                     │
│   White Content     │ ← ScrollView container
│                     │
│   (scrollable)      │
│                     │
└─────────────────────┘
```

## Pages Updated

✅ IntroductionPage21 (Anita's Dedication)
✅ IntroductionPage22 (Hilton's Dedication)
✅ IntroductionPage23 (Questions Divider)

## When to Use This Pattern

- **All content pages** (dedications, stories, text-heavy pages)
- **Image pages** (when using ScrollView)
- **Interactive pages** (forms, questions)

This ensures consistent branding with the purple safe area while maintaining a clean white reading area.
