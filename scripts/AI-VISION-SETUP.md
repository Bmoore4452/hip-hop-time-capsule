# AI Vision Setup Guide

This guide explains how to use AI vision to automatically analyze all 287 book pages.

## Prerequisites

1. **Anthropic API Key** (for Claude Vision)
   - Sign up at: https://console.anthropic.com/
   - Get your API key from the dashboard
   - Free tier includes $5 credit
   - Each page analysis costs approximately $0.01-0.02

**Estimated cost for 287 pages: ~$3-6**

## Setup Steps

### 1. Install Dependencies

Already done! The SDK is installed.

### 2. Set Your API Key

```bash
export ANTHROPIC_API_KEY="your-api-key-here"
```

**Make it permanent** (add to your shell profile):

```bash
# For zsh (macOS default)
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.zshrc
source ~/.zshrc

# For bash
echo 'export ANTHROPIC_API_KEY="your-api-key-here"' >> ~/.bashrc
source ~/.bashrc
```

### 3. Verify Setup

```bash
echo $ANTHROPIC_API_KEY
```

Should display your API key.

## Running the Analysis

### Analyze All Pages

```bash
npx ts-node scripts/analyze-with-vision.ts
```

This will:
- Process all 287 pages in batches of 3
- Take approximately 30-45 minutes
- Save results to `data/pages-metadata.json`
- Cost approximately $3-6

### Test with a Small Range First

**Recommended:** Test with 10 pages first to verify it works:

```bash
npx ts-node scripts/analyze-with-vision.ts --start 26 --end 35
```

### Analyze Specific Page Range

```bash
# Pages 50-100
npx ts-node scripts/analyze-with-vision.ts --start 50 --end 100

# Pages 100-200
npx ts-node scripts/analyze-with-vision.ts --start 100 --end 200

# Last 87 pages
npx ts-node scripts/analyze-with-vision.ts --start 200 --end 287
```

### Adjust Batch Size

```bash
# Slower but more reliable
npx ts-node scripts/analyze-with-vision.ts --batch-size 2

# Faster but may hit rate limits
npx ts-node scripts/analyze-with-vision.ts --batch-size 5
```

## What Gets Detected

The AI will analyze each page and detect:

1. **Page Type**
   - title, copyright, foreword, toc, content, interactive, blank

2. **Input Fields** (if interactive)
   - Field ID
   - Field type (text, textarea, date, number)
   - Label text
   - Approximate position on page

3. **Description**
   - Brief summary of page content

4. **Custom Layout Flag**
   - Whether it needs special handling

## Output Format

Results saved to `data/pages-metadata.json`:

```json
[
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
        "placeholder": "Tap to enter your name...",
        "position": { "top": 30, "left": 10, "width": 80, "height": 5 }
      }
    ],
    "description": "Interactive page for user to input personal hip-hop journey",
    "needsCustomLayout": false
  }
]
```

## Troubleshooting

### "API key not set" error

Make sure you exported the key in your current terminal:
```bash
export ANTHROPIC_API_KEY="your-key-here"
```

### Rate limit errors

The script has built-in rate limiting, but if you hit limits:
- Reduce batch size: `--batch-size 2`
- The script will continue after waiting

### Connection errors

- Check your internet connection
- Verify API key is valid
- Check Anthropic status: https://status.anthropic.com/

### Incorrect classifications

AI isn't perfect! After analysis:
1. Review the generated JSON
2. Manually correct any misclassifications
3. Add/refine input field definitions

## Cost Optimization

**To save money:**

1. **Test first** with a small range (10 pages)
2. **Skip already-classified pages** (1-25 already done)
3. **Process in chunks** - stop and review before continuing
4. **Only analyze once** - save the JSON file

**Recommended approach:**
```bash
# Test with 10 pages
npx ts-node scripts/analyze-with-vision.ts --start 26 --end 35

# If results look good, do pages 36-150
npx ts-node scripts/analyze-with-vision.ts --start 36 --end 150

# Then finish the rest
npx ts-node scripts/analyze-with-vision.ts --start 151 --end 287
```

## Next Steps

After analysis is complete:
1. Review and refine the JSON file
2. Test the universal page renderer with the data
3. Build out the interactive input system
