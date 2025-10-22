# Page 22 - Hilton's Dedication

## Overview

Page 22 displays Hilton's heartfelt dedication to his daughter, granddaughters, and late son.

## Content Structure

### Title

- **"HILTON'S DEDICATION"** in bold purple text with underline
- Centered at the top of the page

### Photo Section

- Two framed photos side by side
- Black border frames (4px thick)
- Photos currently use placeholder images
- **TO UPDATE**: Replace with actual photos of:
  - Kadence L. White (left - in yellow dress with Broadway sign)
  - Chloe N. White (right - in pink outfit)

### Dedication Text

Main paragraph expressing:

- Love and dedication to daughter and granddaughters
- Memorial to late son Hilton Fuquan Scipio (RIP)
- The book's dedication and its meaning
- Memories of Hilton's Hip-Hop journey
- Pride in family and hopes to inspire them
- Message about being yourself and following your heart

**Key Names** (bold and italic):

- Cheri Scipio-White (daughter)
- Kadence L. White (granddaughter)
- Chloe N. White (granddaughter)
- Hilton Fuquan Scipio (RIP) (late son)

### Signature Section

- Purple flower icon on the left
- "With all my love, Dad/Papa Scipio" in Great Vibes cursive font
- Blue dove/peace icon on the right
- Centered at the bottom

## Styling Features

- **Purple theme**: Uses `colors.primary` for title
- **Underlined title**: Different from Anita's page
- **Justified text**: Main dedication text is justified for formal appearance
- **Cursive signature**: Uses Great Vibes font
- **Black text for signature**: Different from Anita's purple signature
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
   - `kadence-white.jpg` (yellow dress photo)
   - `chloe-white.jpg` (pink outfit photo)
2. Update the image sources in `IntroductionPage22.tsx`:

   ```tsx
   // Left photo - Kadence
   source={require('../assets/kadence-white.jpg')}

   // Right photo - Chloe
   source={require('../assets/chloe-white.jpg')}
   ```

3. Update decorative icons:

   ```tsx
   // Purple flower icon (left)
   source={require('../assets/purple-flower.png')}

   // Blue dove icon (right)
   source={require('../assets/blue-dove.png')}
   ```

## Design Differences from Page 21

1. **Title**: Has underline decoration
2. **Signature color**: Black text instead of purple
3. **Icons**: Flower (left) and dove (right) instead of hearts
4. **Tone**: More formal with memorial mention (RIP)
5. **Content**: Focuses on Hip-Hop career impact and legacy

## Page Number

**22**
