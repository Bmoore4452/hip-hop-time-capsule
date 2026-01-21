# Quick Start: AI Vision Analysis

## Setup (One-Time)

### 1. Get Your Anthropic API Key

1. Visit https://console.anthropic.com/
2. Sign up (free tier includes $5 credit)
3. Get your API key from dashboard

### 2. Set Environment Variable

```bash
export ANTHROPIC_API_KEY="sk-ant-api03-..."
```

**Make it permanent:**

```bash
echo 'export ANTHROPIC_API_KEY="sk-ant-api03-..."' >> ~/.zshrc
source ~/.zshrc
```

### 3. Verify

```bash
echo $ANTHROPIC_API_KEY
```

## Run Analysis

### Test First (Recommended)

Analyze 5 pages to test:

```bash
npx ts-node scripts/analyze-with-vision.ts --start 26 --end 30
```

### Analyze All Pages

```bash
npx ts-node scripts/analyze-with-vision.ts
```

**Time:** ~30-45 minutes for all 287 pages
**Cost:** ~$3-6 total

### Analyze Specific Range

```bash
# Pages 1-50
npx ts-node scripts/analyze-with-vision.ts --start 1 --end 50

# Pages 51-100
npx ts-node scripts/analyze-with-vision.ts --start 51 --end 100

# Continue as needed...
```

## What Gets Detected

✅ **Page type** (title, content, input-page, etc.)
✅ **All text content** (questions, body text, titles)
✅ **Input fields** with positions and types
✅ **Accent images** (crown, microphone, ink_blot, etc.) with positions
✅ **Layout complexity**

## Output

Results saved to: `data/pages-metadata.json`

The AI will automatically:

- Extract all text from pages
- Identify interactive input areas
- Detect decorative accent images
- Position elements using percentages
- Classify page types

## Cost Breakdown

- ~$0.01-0.02 per page
- 287 pages × $0.015 avg = ~$4.30 total
- Much cheaper than manual work!

## After Analysis

Once complete:

1. Review `data/pages-metadata.json`
2. Test pages in the app
3. Make manual adjustments if needed
4. All pages will work with UniversalPageRenderer!

**Ready?** Run the test command above to start! 🚀
