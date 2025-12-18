/**
 * Manual Page Classification Helper
 * 
 * This is a simpler approach that creates a template JSON file
 * that you can manually fill in as you review each page.
 * 
 * It generates a structured JSON with placeholders for all 287 pages
 * that you can update as you review them.
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

interface PageInputField {
  id: string;
  type: 'text' | 'textarea' | 'date' | 'number';
  label: string;
  placeholder?: string;
  position?: {
    top: number;
    left: number;
    width: number;
    height: number;
  };
}

interface PageMetadata {
  pageNumber: number;
  fileName: string;
  type: 'title' | 'copyright' | 'foreword' | 'toc' | 'content' | 'interactive' | 'blank';
  hasInputFields: boolean;
  inputFields?: PageInputField[];
  description?: string;
  needsCustomLayout?: boolean;
}

const PAGES_DIR = path.join(__dirname, '../Color Copy of Thank You Jesus for a number 1 Best seller!! ');
const OUTPUT_FILE = path.join(__dirname, '../data/pages-metadata-template.json');

/**
 * Generate template JSON for manual classification
 */
function generateTemplate(): PageMetadata[] {
  const files = fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.png'))
    .sort((a, b) => parseInt(a.replace('.png', '')) - parseInt(b.replace('.png', '')));
  
  const template: PageMetadata[] = files.map(fileName => {
    const pageNumber = parseInt(fileName.replace('.png', ''));
    
    // Make educated guesses for common pages
    let type: PageMetadata['type'] = 'content';
    let hasInputFields = false;
    let description = 'TODO: Review and classify this page';
    
    if (pageNumber === 1) {
      type = 'title';
      description = 'Title page';
    } else if (pageNumber === 2) {
      type = 'copyright';
      description = 'Copyright page';
    } else if (pageNumber >= 3 && pageNumber <= 10) {
      type = 'foreword';
      description = 'Foreword section';
    } else if (pageNumber >= 11 && pageNumber <= 25) {
      type = 'content';
      description = 'Introduction section';
    }
    
    // Page 24 we know is interactive based on existing component
    if (pageNumber === 24) {
      hasInputFields = true;
      type = 'interactive';
      description = 'Interactive page: Hip Hop Is (with input fields)';
    }
    
    return {
      pageNumber,
      fileName,
      type,
      hasInputFields,
      description,
      needsCustomLayout: false,
      ...(hasInputFields && {
        inputFields: [
          {
            id: 'field1',
            type: 'text' as const,
            label: 'TODO: Add label',
            placeholder: 'TODO: Add placeholder'
          }
        ]
      })
    };
  });
  
  return template;
}

/**
 * Create a markdown checklist for manual review
 */
function generateReviewChecklist(template: PageMetadata[]): string {
  let markdown = `# Page Classification Checklist\n\n`;
  markdown += `Total pages: ${template.length}\n\n`;
  markdown += `## Instructions\n\n`;
  markdown += `Review each page and update the JSON file with:\n`;
  markdown += `1. Page type (title, copyright, foreword, toc, content, interactive, blank)\n`;
  markdown += `2. Whether it has input fields\n`;
  markdown += `3. If interactive, define the input fields\n\n`;
  markdown += `## Pages to Review\n\n`;
  
  template.forEach(page => {
    const status = page.description?.includes('TODO') ? '[ ]' : '[x]';
    const interactive = page.hasInputFields ? ' 📝 INTERACTIVE' : '';
    markdown += `${status} Page ${page.pageNumber}: ${page.type}${interactive}\n`;
  });
  
  return markdown;
}

function main() {
  console.log('📋 Generating manual classification template...\n');
  
  const template = generateTemplate();
  const dataDir = path.dirname(OUTPUT_FILE);
  
  // Create data directory
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir, { recursive: true });
  }
  
  // Save template JSON
  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(template, null, 2));
  console.log(`✅ Template saved to: ${OUTPUT_FILE}`);
  
  // Save checklist
  const checklistPath = path.join(dataDir, 'classification-checklist.md');
  const checklist = generateReviewChecklist(template);
  fs.writeFileSync(checklistPath, checklist);
  console.log(`📝 Checklist saved to: ${checklistPath}`);
  
  // Print summary
  const interactivePages = template.filter(p => p.hasInputFields);
  console.log(`\n📊 Template Summary:`);
  console.log(`   Total pages: ${template.length}`);
  console.log(`   Interactive pages: ${interactivePages.length}`);
  console.log(`   To review: ${template.filter(p => p.description?.includes('TODO')).length}`);
  
  console.log(`\n📝 Next Steps:`);
  console.log(`1. Open ${OUTPUT_FILE}`);
  console.log(`2. Review each page using the PNG files`);
  console.log(`3. Update the JSON with accurate information`);
  console.log(`4. For interactive pages, define input fields with positions`);
  console.log(`5. Use the checklist to track progress`);
}

main();

export { generateTemplate, generateReviewChecklist };
