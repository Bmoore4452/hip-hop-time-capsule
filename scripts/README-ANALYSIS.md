# Page Analysis Scripts

This directory contains scripts to analyze and classify the book pages for the data-driven page system.

## Available Scripts

### 1. `manual-page-classifier.ts` (Recommended Starting Point)
Creates a template JSON file with all 287 pages pre-populated with educated guesses. You can then manually review and update the classifications.

```bash
npx ts-node scripts/manual-page-classifier.ts
```

**Output:**
- `data/pages-metadata-template.json` - Template with all pages
- `data/classification-checklist.md` - Markdown checklist to track progress

### 2. `analyze-with-vision.ts` (AI-Powered)
Uses AI vision APIs (Claude, GPT-4 Vision) to automatically analyze pages and detect input fields.

**Requirements:**
- AI API key (Anthropic, OpenAI, or Google Cloud)
- Install required packages: `npm install @anthropic-ai/sdk` or `openai`

```bash
# Set API key
export ANTHROPIC_API_KEY="your-key-here"

# Run analysis
npx ts-node scripts/analyze-with-vision.ts
```

### 3. `analyze-pages.ts` (Base Framework)
Core types and structures used by other scripts. Can be used to build custom analysis tools.

## Workflow

### Quick Start (Manual Classification)

1. **Generate template:**
   ```bash
   npx ts-node scripts/manual-page-classifier.ts
   ```

2. **Review pages:**
   - Open `data/pages-metadata-template.json`
   - For each page, look at the corresponding PNG in `/Color Copy of Thank You Jesus for a number 1 Best seller!! /`
   - Update the JSON with accurate information

3. **For interactive pages with input fields:**
   ```json
   {
     "pageNumber": 24,
     "fileName": "24.png",
     "type": "interactive",
     "hasInputFields": true,
     "inputFields": [
       {
         "id": "name",
         "type": "text",
         "label": "MY NAME IS:",
         "placeholder": "Tap to enter your name..."
       }
     ]
   }
   ```

### AI-Powered Analysis (Advanced)

1. **Install dependencies:**
   ```bash
   npm install @anthropic-ai/sdk
   ```

2. **Set up API key:**
   ```bash
   export ANTHROPIC_API_KEY="your-api-key"
   ```

3. **Run analysis:**
   ```bash
   npx ts-node scripts/analyze-with-vision.ts
   ```

4. **Review and refine results:**
   AI detection isn't perfect, so review the generated JSON and make corrections.

## Page Types

- `title` - Title page
- `copyright` - Copyright/legal page
- `foreword` - Foreword section
- `toc` - Table of contents
- `content` - Regular content page (no interaction)
- `interactive` - Page with input fields
- `blank` - Blank/mostly empty page

## Input Field Types

- `text` - Single line text input
- `textarea` - Multi-line text input
- `date` - Date picker input
- `number` - Numeric input

## Next Steps

After classification:
1. Run the chosen script to generate page metadata
2. Review and refine the classifications
3. The universal page renderer will use this data to display pages correctly
4. Interactive pages will automatically get input overlays based on the field definitions
