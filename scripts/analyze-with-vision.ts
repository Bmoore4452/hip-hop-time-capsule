/**
 * Enhanced AI Vision Analysis Script
 * Uses Claude Vision API to automatically analyze book pages
 */

import * as fs from 'fs';
import * as path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Anthropic from '@anthropic-ai/sdk';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Check for API key
const API_KEY = process.env.ANTHROPIC_API_KEY;
if (!API_KEY) {
  console.error('❌ Error: ANTHROPIC_API_KEY environment variable not set');
  console.error('\nTo set your API key:');
  console.error('  export ANTHROPIC_API_KEY="your-api-key-here"');
  console.error('\nGet your API key from: https://console.anthropic.com/');
  process.exit(1);
}

const anthropic = new Anthropic({
  apiKey: API_KEY,
});

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
const OUTPUT_FILE = path.join(__dirname, '../data/pages-metadata.json');

/**
 * Encode image to base64
 */
function encodeImageToBase64(filePath: string): string {
  const imageBuffer = fs.readFileSync(filePath);
  return imageBuffer.toString('base64');
}

/**
 * Analyze page using Claude Vision
 */
async function analyzePageWithClaude(fileName: string, pageNumber: number): Promise<PageMetadata> {
  const filePath = path.join(PAGES_DIR, fileName);
  const base64Image = encodeImageToBase64(filePath);
  
  const prompt = `Analyze this book page image and provide information in JSON format:

1. Page type: title, copyright, foreword, toc, content, interactive, or blank
2. Has input fields: Does this page have blank lines or areas for user to write?
3. Input fields: If yes, describe each one with id, type, label, and optional position
4. Description: Brief description of the page content
5. Needs custom layout: Does this need special handling?

Return ONLY valid JSON (no markdown):
{
  "type": "content",
  "hasInputFields": false,
  "inputFields": [],
  "description": "Brief description",
  "needsCustomLayout": false
}`;

  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 1024,
      messages: [{
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
          { type: "text", text: prompt }
        ],
      }],
    });

    const textContent = response.content.find(block => block.type === 'text');
    if (!textContent || textContent.type !== 'text') {
      throw new Error('No text content in response');
    }

    let jsonText = textContent.text.trim();
    jsonText = jsonText.replace(/^```json\s*/, '').replace(/\s*```$/, '');
    
    const analysis = JSON.parse(jsonText);

    return {
      pageNumber,
      fileName,
      type: analysis.type || 'content',
      hasInputFields: analysis.hasInputFields || false,
      inputFields: analysis.inputFields || [],
      description: analysis.description || '',
      needsCustomLayout: analysis.needsCustomLayout || false
    };

  } catch (error) {
    console.error(`   ⚠️  Error:`, error instanceof Error ? error.message : error);
    return {
      pageNumber,
      fileName,
      type: 'content',
      hasInputFields: false,
      description: `Error: ${error instanceof Error ? error.message : 'Unknown'}`,
      needsCustomLayout: false
    };
  }
}

/**
 * Process pages with rate limiting
 */
async function processAllPages(
  batchSize: number = 3,
  startPage?: number,
  endPage?: number
): Promise<PageMetadata[]> {
  let files = fs.readdirSync(PAGES_DIR)
    .filter(file => file.endsWith('.png'))
    .sort((a, b) => parseInt(a.replace('.png', '')) - parseInt(b.replace('.png', '')));
  
  if (startPage || endPage) {
    files = files.filter(file => {
      const pageNum = parseInt(file.replace('.png', ''));
      if (startPage && pageNum < startPage) return false;
      if (endPage && pageNum > endPage) return false;
      return true;
    });
  }
  
  const results: PageMetadata[] = [];
  const totalPages = files.length;
  
  console.log(`📚 Processing ${totalPages} pages in batches of ${batchSize}`);
  if (startPage || endPage) {
    console.log(`   Range: ${startPage || 'start'} to ${endPage || 'end'}`);
  }
  console.log();

  for (let i = 0; i < files.length; i += batchSize) {
    const batch = files.slice(i, i + batchSize);
    const batchNum = Math.floor(i / batchSize) + 1;
    const totalBatches = Math.ceil(files.length / batchSize);
    
    console.log(`\n📦 Batch ${batchNum}/${totalBatches}`);
    
    for (const fileName of batch) {
      const pageNumber = parseInt(fileName.replace('.png', ''));
      process.stdout.write(`   Page ${pageNumber}... `);
      
      const result = await analyzePageWithClaude(fileName, pageNumber);
      results.push(result);
      
      const icon = result.hasInputFields ? '📝' : '📄';
      console.log(`${icon} ${result.type}`);
      
      await new Promise(resolve => setTimeout(resolve, 500));
    }
    
    console.log(`✓ Completed ${results.length}/${totalPages}`);
    
    if (i + batchSize < files.length) {
      const delaySeconds = 3;
      process.stdout.write(`⏳ Waiting ${delaySeconds}s... `);
      await new Promise(resolve => setTimeout(resolve, delaySeconds * 1000));
      console.log('done');
    }
  }
  
  return results;
}

/**
 * Main execution
 */
async function main() {
  console.log('🤖 AI-powered page analysis with Claude Vision\n');
  if (API_KEY) {
    console.log(`🔑 API Key: ${API_KEY.substring(0, 8)}...${API_KEY.substring(API_KEY.length - 4)}\n`);
  }
  
  const args = process.argv.slice(2);
  let startPage: number | undefined;
  let endPage: number | undefined;
  let batchSize = 3;
  
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--start' && args[i + 1]) {
      startPage = parseInt(args[i + 1]);
      i++;
    } else if (args[i] === '--end' && args[i + 1]) {
      endPage = parseInt(args[i + 1]);
      i++;
    } else if (args[i] === '--batch-size' && args[i + 1]) {
      batchSize = parseInt(args[i + 1]);
      i++;
    }
  }
  
  try {
    const startTime = Date.now();
    const results = await processAllPages(batchSize, startPage, endPage);
    const duration = ((Date.now() - startTime) / 1000).toFixed(1);
    
    const dataDir = path.dirname(OUTPUT_FILE);
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    let finalResults = results;
    if ((startPage || endPage) && fs.existsSync(OUTPUT_FILE)) {
      const existingData = JSON.parse(fs.readFileSync(OUTPUT_FILE, 'utf-8'));
      const resultMap = new Map(results.map(r => [r.pageNumber, r]));
      
      finalResults = existingData.map((page: PageMetadata) => 
        resultMap.get(page.pageNumber) || page
      );
      
      results.forEach(r => {
        if (!existingData.find((p: PageMetadata) => p.pageNumber === r.pageNumber)) {
          finalResults.push(r);
        }
      });
      
      finalResults.sort((a, b) => a.pageNumber - b.pageNumber);
    }
    
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(finalResults, null, 2));
    
    console.log(`\n✅ Complete in ${duration}s!`);
    console.log(`📄 Saved to: ${OUTPUT_FILE}`);
    
    const interactivePages = results.filter(p => p.hasInputFields);
    console.log(`\n📊 Summary:`);
    console.log(`   Analyzed: ${results.length}`);
    console.log(`   Interactive: ${interactivePages.length}`);
    
    if (interactivePages.length > 0) {
      console.log(`\n📝 Interactive pages:`);
      interactivePages.slice(0, 5).forEach(p => {
        console.log(`   Page ${p.pageNumber}: ${p.inputFields?.length || 0} fields`);
      });
    }
    
  } catch (error) {
    console.error('\n❌ Error:', error);
    process.exit(1);
  }
}

main();
