# Page 21 - Anita's Dedication

## Overview

Page 21 displays a heartfelt dedication from Anita to her daughter and granddaughter.

## Content Structure

### Title

- **"ANITA'S DEDICATION"** in bold purple text
- Centered at the top of the page

### Photo Section

- Two framed photos side by side
- Black border frames (4px thick)
- Photos currently use placeholder images (Kool Moe Dee photos)
- **TO UPDATE**: Replace with actual photos of:
  - Arlene Yvette Scipio (daughter)
  - Gayla Renee Robinson (granddaughter)

### Dedication Text

Main paragraph expressing:

- Love and gratitude to daughter and granddaughter
- The book's dedication to both
- Thanks for their love, encouragement, and support
- Blessings and prayers for their future

**Key Names** (bold and italic):

- Arlene Yvette Scipio
- Gayla Renee Robinson

### Signature Section

- Decorative heart icons on both sides
- "Love, Mom & Grandma" in purple italic script
- Centered at the bottom

## Styling Features

- **Purple theme**: Uses `colors.primary` for title and signature
- **Justified text**: Main dedication text is justified for formal appearance
- **Responsive sizing**: Scales appropriately across devices
- **Elegant layout**: Clean, centered design with proper spacing

## Images to Update

### Current (Placeholder):

```tsx
source={require('../assets/kool-moe-dee.jpg')}
source={require('../assets/kool-moe-dee2.jpg')}
```

### When Ready:

1. Add photos to `assets/` folder:
   - `arlene-scipio.jpg` (or similar)
   - `gayla-robinson.jpg` (or similar)
2. Update the image sources in `IntroductionPage21.tsx`:

   ```tsx
   // First photo
   source={require('../assets/arlene-scipio.jpg')}

   // Second photo
   source={require('../assets/gayla-robinson.jpg')}
   ```

3. Update heart icons (currently using placeholders):
   ```tsx
   // Replace both heart icon sources with actual heart images
   source={require('../assets/heart-icon.png')}
   ```

## Design Notes

- Photo frames have thick black borders to match the book's aesthetic
- Text is justified for a more formal, book-like appearance
- Purple color scheme matches the app's branding
- Signature section mimics handwritten appearance with italic style
- Responsive layout ensures proper display on all device sizes

## Page Number

**21** (as shown in the original design)
