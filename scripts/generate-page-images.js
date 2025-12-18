const fs = require("fs");

// Generate the file content
const lines = [
  "/**",
  " * Image registry for all book pages",
  " * Auto-generated mapping of page numbers to image assets",
  " */",
  "",
  "const pageImages: { [key: number]: any } = {",
];

// Add all 287 image requires
for (let i = 1; i <= 287; i++) {
  const comma = i < 287 ? "," : "";
  lines.push(
    `  ${i}: require('../Color Copy of Thank You Jesus for a number 1 Best seller!! /${i}.png')${comma}`
  );
}

lines.push("};");
lines.push("");
lines.push("export function getPageImage(pageNumber: number): any {");
lines.push("  return pageImages[pageNumber] || null;");
lines.push("}");
lines.push("");
lines.push("export default pageImages;");

// Write to file
fs.writeFileSync("utils/pageImages.ts", lines.join("\n") + "\n");

console.log("✅ Generated pageImages.ts with 287 image imports");
