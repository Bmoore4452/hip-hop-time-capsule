#!/usr/bin/env node

/**
 * Book Page Analyzer
 * Simple Node.js script to generate page metadata templates
 */

const fs = require("fs");
const path = require("path");

const BOOK_PAGES_DIR = path.join(
  __dirname,
  "../Color Copy of Thank You Jesus for a number 1 Best seller!! "
);
const METADATA_FILE = path.join(__dirname, "../data/pages-metadata.json");

// Available accent images
const ACCENT_IMAGES = [
  "b_boy1.png",
  "crown.png",
  "hip_hop_chain.png",
  "ink_blot.png",
  "microphone.png",
  "splash-icon.png",
];

class BookPageAnalyzer {
  constructor() {
    this.metadata = [];
    this.loadExistingMetadata();
  }

  loadExistingMetadata() {
    try {
      const data = fs.readFileSync(METADATA_FILE, "utf-8");
      this.metadata = JSON.parse(data);
      console.log(
        `Loaded ${this.metadata.length} existing page metadata entries`
      );
    } catch (error) {
      console.log("No existing metadata found, starting fresh");
      this.metadata = [];
    }
  }

  /**
   * Generate templates for a range of pages
   */
  generateTemplates(startPage, endPage) {
    console.log(
      `\nGenerating templates for pages ${startPage} to ${endPage}...\n`
    );

    const templates = [];

    for (let pageNum = startPage; pageNum <= endPage; pageNum++) {
      const imagePath = path.join(BOOK_PAGES_DIR, `${pageNum}.png`);

      if (fs.existsSync(imagePath)) {
        templates.push({
          pageNumber: pageNum,
          fileName: `${pageNum}.png`,
          type: "content",
          hasInputFields: false,
          inputFields: [],
          accentImages: [],
          textContent: {
            title: "",
            body: "",
            questions: [],
          },
          description: `Page ${pageNum} - TODO: Add description`,
          needsCustomLayout: false,
        });
      } else {
        console.warn(`⚠️  Warning: Page ${pageNum}.png not found`);
      }
    }

    // Output to a separate file for review
    const outputPath = path.join(
      __dirname,
      `../data/pages-${startPage}-${endPage}-templates.json`
    );
    fs.writeFileSync(outputPath, JSON.stringify(templates, null, 2));

    console.log(`✓ Generated ${templates.length} templates`);
    console.log(`✓ Saved to: ${outputPath}\n`);
    console.log("📝 Next steps:");
    console.log("   1. Review and edit the template file");
    console.log("   2. Fill in page details (type, text, inputs, accents)");
    console.log("   3. Merge into pages-metadata.json when ready\n");

    return templates;
  }

  /**
   * Show example of a complete page metadata
   */
  showExample() {
    const example = {
      pageNumber: 26,
      fileName: "26.png",
      type: "input-page",
      hasInputFields: true,
      inputFields: [
        {
          id: "question3",
          type: "multiline",
          label: "3. What was the first song that caught your attention?",
          position: { top: "30%", left: "10%" },
          width: "80%",
          height: 100,
          multiline: true,
          numberOfLines: 4,
          placeholder: "Enter your answer here...",
        },
        {
          id: "question4",
          type: "multiline",
          label:
            "4. What were the emotions you felt hearing Hip-Hop for the first time?",
          position: { top: "55%", left: "10%" },
          width: "80%",
          height: 100,
          multiline: true,
          numberOfLines: 4,
          placeholder: "Enter your answer here...",
        },
      ],
      accentImages: [
        {
          name: "ink_blot.png",
          position: { top: "5%", right: "5%" },
          width: 50,
          height: 50,
        },
      ],
      textContent: {
        questions: [
          "3. What was the first song that caught your attention?",
          "4. What were the emotions you felt hearing Hip-Hop for the first time?",
        ],
      },
      description:
        "Input page with two questions about first Hip-Hop experience, featuring ink blot accent",
      needsCustomLayout: false,
    };

    console.log("\n--- EXAMPLE PAGE METADATA ---\n");
    console.log(JSON.stringify(example, null, 2));
    console.log("\n--- AVAILABLE ACCENT IMAGES ---");
    ACCENT_IMAGES.forEach((img) => console.log(`  - ${img}`));
    console.log("\n");
  }

  /**
   * Analyze a single page - shows template
   */
  analyzePage(pageNumber) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Analyzing Page ${pageNumber}`);
    console.log(`${"=".repeat(60)}\n`);

    const imagePath = path.join(BOOK_PAGES_DIR, `${pageNumber}.png`);

    if (!fs.existsSync(imagePath)) {
      console.error(`❌ Error: Image not found at ${imagePath}`);
      return;
    }

    console.log(`✓ Found image: ${imagePath}`);
    console.log("\nPlease review the page image and use this template:\n");

    const template = {
      pageNumber,
      fileName: `${pageNumber}.png`,
      type: "content",
      hasInputFields: false,
      inputFields: [],
      accentImages: [],
      textContent: {
        title: "",
        body: "",
        questions: [],
      },
      description: "",
      needsCustomLayout: false,
    };

    console.log(JSON.stringify(template, null, 2));

    console.log("\n--- AVAILABLE ACCENT IMAGES ---");
    ACCENT_IMAGES.forEach((img) => console.log(`  - ${img}`));

    console.log("\n--- PAGE TYPES ---");
    console.log(
      "  title | copyright | toc | foreword | content | input-page | blank"
    );
    console.log("\n");
  }
}

// CLI Handler
const args = process.argv.slice(2);
const analyzer = new BookPageAnalyzer();

if (args.length === 0) {
  console.log(`
📚 Book Page Analyzer Tool
==========================

Usage:
  node scripts/analyze-book-pages.js <command> [options]

Commands:
  analyze <pageNum>              - Analyze a single page
  batch <startPage> <endPage>    - Generate templates for a range
  example                        - Show an example page metadata

Examples:
  node scripts/analyze-book-pages.js analyze 50
  node scripts/analyze-book-pages.js batch 1 50
  node scripts/analyze-book-pages.js example
    `);
} else {
  const command = args[0];

  switch (command) {
    case "analyze":
      const pageNum = parseInt(args[1]);
      if (isNaN(pageNum)) {
        console.error("❌ Error: Please provide a valid page number");
      } else {
        analyzer.analyzePage(pageNum);
      }
      break;

    case "batch":
      const start = parseInt(args[1]);
      const end = parseInt(args[2]);
      if (isNaN(start) || isNaN(end)) {
        console.error(
          "❌ Error: Please provide valid start and end page numbers"
        );
      } else {
        analyzer.generateTemplates(start, end);
      }
      break;

    case "example":
      analyzer.showExample();
      break;

    default:
      console.error(`❌ Unknown command: ${command}`);
      console.log("Run without arguments to see usage help");
  }
}
