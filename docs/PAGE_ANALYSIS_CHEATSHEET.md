# Quick Reference: Page Analysis Cheatsheet

## Metadata Template (Copy-Paste Ready)

```json
{
  "pageNumber": XX,
  "fileName": "XX.png",
  "type": "content",
  "hasInputFields": false,
  "inputFields": [],
  "accentImages": [],
  "textContent": {
    "title": "",
    "body": "",
    "questions": []
  },
  "description": "",
  "needsCustomLayout": false
}
```

## Page Types

| Type         | Use For                     |
| ------------ | --------------------------- |
| `title`      | Cover pages, chapter titles |
| `copyright`  | Copyright, legal info       |
| `toc`        | Table of contents           |
| `foreword`   | Introductions, forewords    |
| `content`    | Regular text pages          |
| `input-page` | Pages with user inputs      |
| `blank`      | Blank/separator pages       |

## Input Field Types

| Type        | Description     | Best For              |
| ----------- | --------------- | --------------------- |
| `text`      | Single line     | Names, short answers  |
| `multiline` | Multiple lines  | Questions, paragraphs |
| `signature` | Signature field | Autograph pages       |

## Position Shortcuts

### Percentage-Based (Recommended)

```json
"position": {
  "top": "10%",      // 10% from top
  "left": "5%",      // 5% from left
  "right": "5%",     // 5% from right
  "bottom": "10%"    // 10% from bottom
}
```

### Pixel-Based

```json
"position": {
  "top": 50,         // 50 pixels from top
  "left": 20         // 20 pixels from left
}
```

### Common Layouts

**Top-Right Corner**

```json
"position": { "top": "5%", "right": "5%" }
```

**Top-Left Corner**

```json
"position": { "top": "5%", "left": "5%" }
```

**Bottom-Center**

```json
"position": { "bottom": "10%", "left": "50%" }
```

**Centered**

```json
"position": { "top": "50%", "left": "50%" }
```

## Accent Images Quick Reference

| Image | Filename            | Best Use                 | Typical Size |
| ----- | ------------------- | ------------------------ | ------------ |
| 👑    | `crown.png`         | Achievements, highlights | 40x40        |
| 🎤    | `microphone.png`    | Music, performance       | 50x50        |
| ⛓️    | `hip_hop_chain.png` | Hip-hop culture          | 45x45        |
| 💃    | `b_boy1.png`        | Dancing, movement        | 60x60        |
| 💧    | `ink_blot.png`      | Artistic, creative       | 50x50        |
| ✨    | `splash-icon.png`   | Emphasis, style          | 40x40        |

## Input Field Example Templates

### Single Question

```json
"inputFields": [
  {
    "id": "answer1",
    "type": "multiline",
    "label": "What's your favorite Hip-Hop song?",
    "position": { "top": "40%", "left": "10%" },
    "width": "80%",
    "height": 100,
    "multiline": true,
    "numberOfLines": 4,
    "placeholder": "Tap to answer..."
  }
]
```

### Two Questions (Stacked)

```json
"inputFields": [
  {
    "id": "question1",
    "type": "multiline",
    "label": "Question 1?",
    "position": { "top": "30%", "left": "10%" },
    "width": "80%",
    "height": 100,
    "multiline": true,
    "numberOfLines": 4
  },
  {
    "id": "question2",
    "type": "multiline",
    "label": "Question 2?",
    "position": { "top": "55%", "left": "10%" },
    "width": "80%",
    "height": 100,
    "multiline": true,
    "numberOfLines": 4
  }
]
```

### Name Field (Single Line)

```json
"inputFields": [
  {
    "id": "user_name",
    "type": "text",
    "label": "Your Name",
    "position": { "top": "70%", "left": "25%" },
    "width": "50%",
    "height": 40,
    "maxLength": 50
  }
]
```

## Page Analysis Speed Guide

### Quick Page (2 min)

- Blank page
- No input fields
- No accent images
- Just set type and description

### Simple Page (5 min)

- Basic content
- 0-1 accent images
- No input fields
- Extract main text

### Medium Page (10 min)

- Content with 1-2 questions
- 1-2 accent images
- Simple input fields

### Complex Page (15-20 min)

- Multiple questions
- Multiple accent images
- Complex layout
- Detailed text extraction

## Common Patterns

### Question Page with Accent

```json
{
  "pageNumber": XX,
  "fileName": "XX.png",
  "type": "input-page",
  "hasInputFields": true,
  "inputFields": [
    {
      "id": "questionXX",
      "type": "multiline",
      "label": "Question text here?",
      "position": { "top": "35%", "left": "10%" },
      "width": "80%",
      "height": 100,
      "multiline": true,
      "numberOfLines": 4
    }
  ],
  "accentImages": [
    {
      "name": "crown.png",
      "position": { "top": "5%", "right": "5%" },
      "width": 40,
      "height": 40
    }
  ],
  "description": "Input page with question about X"
}
```

### Content Page with Images

```json
{
  "pageNumber": XX,
  "fileName": "XX.png",
  "type": "content",
  "hasInputFields": false,
  "accentImages": [
    {
      "name": "microphone.png",
      "position": { "top": "10%", "left": "5%" },
      "width": 45,
      "height": 45
    },
    {
      "name": "b_boy1.png",
      "position": { "bottom": "10%", "right": "5%" },
      "width": 60,
      "height": 60
    }
  ],
  "textContent": {
    "title": "Chapter Title",
    "body": "Main content text..."
  },
  "description": "Content about X with decorative elements"
}
```

## Workflow Tips

1. **Open two windows**: Original page + code editor
2. **Use template**: Copy-paste JSON template
3. **Fill top-to-bottom**: Page number → Type → Fields → Images
4. **Test frequently**: Every 5-10 pages
5. **Save often**: Commit to git regularly

## Validation Checklist

Before moving to next page:

- [ ] Page number correct
- [ ] File name matches (`XX.png`)
- [ ] Type appropriate
- [ ] All text extracted
- [ ] Input fields positioned
- [ ] Accent images placed
- [ ] Description written
- [ ] JSON valid (no syntax errors)

## Time Estimates

- **287 pages total**
- **Average 5-7 minutes per page**
- **Total: ~24-33 hours of work**

**Break it into sessions:**

- 10 pages/session = ~1 hour
- 29 sessions = complete book
- 5 sessions/week = done in 6 weeks

## Pro Tips

✅ Start with easy pages (blanks, TOC)
✅ Group similar pages together
✅ Take breaks every 10-15 pages
✅ Test in batches of 10
✅ Use percentage positions for responsiveness
✅ Keep accent image sizes consistent
✅ Write clear descriptions for future reference

---

**Ready to start? Run:**

```bash
npx ts-node scripts/analyze-book-pages.ts batch 1 287
```
