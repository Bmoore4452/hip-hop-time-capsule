#!/usr/bin/env node

/**
 * Test AI Vision Setup
 * Quick test to verify Anthropic API is working
 */

const Anthropic = require("@anthropic-ai/sdk");

// Check for API key
const API_KEY = process.env.ANTHROPIC_API_KEY;

console.log("🧪 Testing AI Vision Setup\n");

if (!API_KEY) {
  console.error("❌ ANTHROPIC_API_KEY not set!\n");
  console.error("To set your API key:");
  console.error('  export ANTHROPIC_API_KEY="sk-ant-api03-..."');
  console.error("\nGet your API key from: https://console.anthropic.com/\n");
  process.exit(1);
}

console.log("✅ API Key found!");
console.log(
  `   Key: ${API_KEY.substring(0, 12)}...${API_KEY.substring(
    API_KEY.length - 4
  )}\n`
);

// Test API connection
async function testConnection() {
  console.log("📡 Testing API connection...\n");

  const anthropic = new Anthropic({ apiKey: API_KEY });

  try {
    const response = await anthropic.messages.create({
      model: "claude-sonnet-4-5",
      max_tokens: 50,
      messages: [
        {
          role: "user",
          content: "Reply with just: API works!",
        },
      ],
    });

    const textContent = response.content.find((block) => block.type === "text");
    if (textContent && textContent.type === "text") {
      console.log("✅ API Response:", textContent.text);
      console.log("\n🎉 Setup complete! You're ready to analyze pages.\n");
      console.log("Next steps:");
      console.log("  1. Test with 5 pages:");
      console.log(
        "     npx ts-node scripts/analyze-with-vision.ts --start 26 --end 30\n"
      );
      console.log("  2. Or analyze all 287 pages:");
      console.log("     npx ts-node scripts/analyze-with-vision.ts\n");
    }
  } catch (error) {
    console.error("❌ API Error:", error.message);
    console.error("\nPlease check:");
    console.error("  - Your API key is valid");
    console.error("  - You have credits remaining");
    console.error("  - You have internet connection\n");
    process.exit(1);
  }
}

testConnection();
