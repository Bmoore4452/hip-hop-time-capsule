/**
 * Page Layout Analyzer - Extract detailed layout information from pages
 * Uses Claude Vision API to analyze page structure for recreation
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";
import Anthropic from "@anthropic-ai/sdk";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error("❌ Error: ANTHROPIC_API_KEY not set");
  process.exit(1);
}

const anthropic = new Anthropic({ apiKey: API_KEY });

interface PageLayout {
  pageNumber: number;
  backgroundColor: string;
  backgroundGradient?: { colors: string[]; direction: string };
  textElements: Array<{
    content: string;
    font: string;
    fontSize: number;
    color: string;
    position: { x: number; y: number };
    alignment: "left" | "center" | "right";
    weight: "normal" | "bold";
  }>;
  images: Array<{
    description: string;
    position: { x: number; y: number; width: number; height: number };
    type: "photo" | "graphic" | "icon";
  }>;
  inputFields: Array<{
    id: string;
    type: "text" | "textarea";
    placeholder: string;
    position: { x: number; y: number; width: number; height: number };
    label?: string;
  }>;
  decorativeElements: Array<{
    type: "line" | "shape" | "pattern";
    description: string;
    position: { x: number; y: number };
  }>;
}

async function analyzePageLayout(pageNumber: number): Promise<PageLayout> {
  const imagePath = path.join(
    __dirname,
    "..",
    "Color Copy of Thank You Jesus for a number 1 Best seller!! ",
    `${pageNumber}.png`
  );

  if (!fs.existsSync(imagePath)) {
    throw new Error(`Image not found: ${imagePath}`);
  }

  const imageData = fs.readFileSync(imagePath);
  const base64Image = imageData.toString("base64");

  const prompt = `Analyze this book page image and extract ALL layout information needed to recreate it as a React Native component.

Provide a detailed JSON structure with:

1. **Background**: Color (hex) or gradient (array of colors with direction)
2. **Text Elements**: All visible text with:
   - Exact content
   - Approximate font size (in points)
   - Font weight (normal/bold)
   - Color (hex)
   - Position (x, y as percentage of page: 0-100)
   - Alignment (left/center/right)
3. **Images/Graphics**: Any photos, illustrations, or icons with:
   - Description
   - Position and size (x, y, width, height as percentages)
   - Type (photo/graphic/icon)
4. **Input Fields**: Interactive text input areas with:
   - ID (descriptive name)
   - Type (text/textarea)
   - Placeholder text
   - Position and size
   - Label if any
5. **Decorative Elements**: Lines, shapes, patterns with:
   - Type and description
   - Position

Be precise with measurements. Use percentages (0-100) for positioning.
Return ONLY valid JSON, no explanations.`;

  const response = await anthropic.messages.create({
    model: "claude-sonnet-4-5",
    max_tokens: 4000,
    messages: [
      {
        role: "user",
        content: [
          {
            type: "image",
            source: {
              type: "base64",
              media_type: "image/png",
              data: base64Image,
            },
          },
          {
            type: "text",
            text: prompt,
          },
        ],
      },
    ],
  });

  const content = response.content[0];
  if (content.type !== "text") {
    throw new Error("Unexpected response type");
  }

  // Extract JSON from response
  const jsonMatch = content.text.match(/\{[\s\S]*\}/);
  if (!jsonMatch) {
    throw new Error("No JSON found in response");
  }

  const layout: PageLayout = JSON.parse(jsonMatch[0]);
  layout.pageNumber = pageNumber;

  return layout;
}

async function main() {
  const args = process.argv.slice(2);
  const pageNumber = parseInt(args[0]);

  if (!pageNumber || pageNumber < 1 || pageNumber > 287) {
    console.error(
      "Usage: npx ts-node scripts/analyze-page-layout.ts <page-number>"
    );
    console.error("Example: npx ts-node scripts/analyze-page-layout.ts 26");
    process.exit(1);
  }

  console.log(`\n🔍 Analyzing page ${pageNumber} layout...\n`);

  try {
    const layout = await analyzePageLayout(pageNumber);

    // Save to file
    const outputPath = path.join(
      __dirname,
      "..",
      "data",
      `page-${pageNumber}-layout.json`
    );
    fs.writeFileSync(outputPath, JSON.stringify(layout, null, 2));

    console.log(`✅ Layout analysis complete!`);
    console.log(`📄 Saved to: ${outputPath}\n`);
    console.log("Summary:");
    console.log(`  - Text elements: ${layout.textElements?.length || 0}`);
    console.log(`  - Images: ${layout.images?.length || 0}`);
    console.log(`  - Input fields: ${layout.inputFields?.length || 0}`);
    console.log(
      `  - Decorative elements: ${layout.decorativeElements?.length || 0}`
    );
    console.log(
      `\nNext: Run generate-component.ts to create React Native component`
    );
  } catch (error) {
    console.error("❌ Error:", error);
    process.exit(1);
  }
}

main();
