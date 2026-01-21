/**
 * Book Page Analyzer
 *
 * This script helps analyze each page from the book to extract:
 * - Text content
 * - Accent image positions (crown, microphone, ink_blot, etc.)
 * - Input field locations and types
 * - Layout patterns
 *
 * Run: npx ts-node scripts/analyze-book-pages.ts <pageNumber>
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BOOK_PAGES_DIR = path.join(
  __dirname,
  "../Color Copy of Thank You Jesus for a number 1 Best seller!! "
);
const ACCENT_IMAGES_DIR = path.join(__dirname, "../assets/accent_images");
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

interface AccentImage {
  name: string;
  position: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  width?: number;
  height?: number;
}

interface InputField {
  id: string;
  type: "text" | "multiline" | "signature";
  label: string;
  position: {
    top?: number | string;
    bottom?: number | string;
    left?: number | string;
    right?: number | string;
  };
  width?: number | string;
  height?: number | string;
  placeholder?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
}

interface PageMetadata {
  pageNumber: number;
  fileName: string;
  type:
    | "title"
    | "copyright"
    | "toc"
    | "foreword"
    | "content"
    | "blank"
    | "input-page";
  hasInputFields: boolean;
  inputFields: InputField[];
  accentImages?: AccentImage[];
  textContent?: {
    title?: string;
    subtitle?: string;
    body?: string;
    questions?: string[];
    footer?: string;
  };
  description: string;
  needsCustomLayout: boolean;
}

class BookPageAnalyzer {
  private metadata: PageMetadata[] = [];

  constructor() {
    this.loadExistingMetadata();
  }

  private loadExistingMetadata() {
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
   * Interactive page analysis - prompts user for page details
   */
  async analyzePage(pageNumber: number) {
    console.log(`\n${"=".repeat(60)}`);
    console.log(`Analyzing Page ${pageNumber}`);
    console.log(`${"=".repeat(60)}\n`);

    const imagePath = path.join(BOOK_PAGES_DIR, `${pageNumber}.png`);

    if (!fs.existsSync(imagePath)) {
      console.error(`Error: Image not found at ${imagePath}`);
      return;
    }

    console.log(`✓ Found image: ${imagePath}`);
    console.log(
      "\nPlease review the page image and provide the following information:\n"
    );

    // Create template for manual entry
    const template: PageMetadata = {
      pageNumber,
      fileName: `${pageNumber}.png`,
      type: "content", // TODO: Update based on page
      hasInputFields: false, // TODO: Update if page has input fields
      inputFields: [],
      accentImages: [],
      textContent: {
        title: "",
        body: "",
        questions: [],
      },
      description: "", // TODO: Add description
      needsCustomLayout: false,
    };

    console.log("\n--- TEMPLATE FOR PAGE", pageNumber, "---\n");
    console.log(JSON.stringify(template, null, 2));
    console.log("\n--- ACCENT IMAGES AVAILABLE ---");
    ACCENT_IMAGES.forEach((img) => console.log(`  - ${img}`));

    console.log("\n--- NEXT STEPS ---");
    console.log("1. Review page image visually");
    console.log("2. Copy template above");
    console.log("3. Fill in the details:");
    console.log(
      "   - type: title | copyright | toc | foreword | content | blank | input-page"
    );
    console.log("   - Add text content (questions, body text, etc.)");
    console.log("   - Add accent images with positions");
    console.log("   - Add input fields if interactive");
    console.log("4. Save to pages-metadata.json");
    console.log("\n");
  }

  /**
   * Batch analysis - generates templates for a range of pages
   */
  generateTemplates(startPage: number, endPage: number) {
    console.log(
      `Generating templates for pages ${startPage} to ${endPage}...\n`
    );

    const templates: PageMetadata[] = [];

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
            title: `Page ${pageNum}`,
            body: "",
            questions: [],
          },
          description: `Page ${pageNum} - TODO: Add description`,
          needsCustomLayout: false,
        });
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
    console.log(
      "Review and edit this file, then merge into pages-metadata.json"
    );
  }

  /**
   * Show example of a complete page metadata
   */
  showExample() {
    const example: PageMetadata = {
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
    console.log("\n");
  }
}

// CLI Handler
const args = process.argv.slice(2);
const analyzer = new BookPageAnalyzer();

if (args.length === 0) {
  console.log(`
Book Page Analyzer Tool
=======================

Usage:
  npx ts-node scripts/analyze-book-pages.ts <command> [options]

Commands:
  analyze <pageNum>              - Analyze a single page
  batch <startPage> <endPage>    - Generate templates for a range
  example                        - Show an example page metadata

Examples:
  npx ts-node scripts/analyze-book-pages.ts analyze 50
  npx ts-node scripts/analyze-book-pages.ts batch 1 50
  npx ts-node scripts/analyze-book-pages.ts example
    `);
} else {
  const command = args[0];

  switch (command) {
    case "analyze":
      const pageNum = parseInt(args[1]);
      if (isNaN(pageNum)) {
        console.error("Error: Please provide a valid page number");
      } else {
        analyzer.analyzePage(pageNum);
      }
      break;

    case "batch":
      const start = parseInt(args[1]);
      const end = parseInt(args[2]);
      if (isNaN(start) || isNaN(end)) {
        console.error("Error: Please provide valid start and end page numbers");
      } else {
        analyzer.generateTemplates(start, end);
      }
      break;

    case "example":
      analyzer.showExample();
      break;

    default:
      console.error(`Unknown command: ${command}`);
  }
}
