/**
 * Component Generator - Creates React Native components from layout analysis
 */

import * as fs from "fs";
import * as path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

interface PageLayout {
  pageNumber: number;
  backgroundColor: string;
  backgroundGradient?: { colors: string[]; direction: string };
  textElements: Array<{
    content: string;
    fontSize: number;
    color: string;
    position: { x: number; y: number };
    alignment: "left" | "center" | "right";
    weight: "normal" | "bold";
  }>;
  images: Array<{
    description: string;
    position: { x: number; y: number; width: number; height: number };
  }>;
  inputFields: Array<{
    id: string;
    type: "text" | "textarea";
    placeholder: string;
    position: { x: number; y: number; width: number; height: number };
    label?: string;
  }>;
}

function generateComponent(layout: PageLayout): string {
  const {
    pageNumber,
    backgroundColor,
    backgroundGradient,
    textElements,
    images,
    inputFields,
  } = layout;

  const componentName = `Page${pageNumber}`;
  const hasGradient = !!backgroundGradient;
  const hasInputFields = inputFields && inputFields.length > 0;

  let imports = [
    `import React${hasInputFields ? ", { useState }" : ""} from 'react';`,
    `import { View, Text, StyleSheet${hasInputFields ? ", TextInput" : ""}${
      images?.length ? ", Image" : ""
    } } from 'react-native';`,
  ];

  if (hasGradient) {
    imports.push(`import { LinearGradient } from 'expo-linear-gradient';`);
  }

  if (hasInputFields) {
    imports.push(`import * as Storage from '../utils/supabaseStorage';`);
  }

  let componentBody = "";

  // State for input fields
  if (hasInputFields) {
    const stateVars = inputFields
      .map(
        (field) =>
          `  const [${field.id}, set${capitalize(field.id)}] = useState('');`
      )
      .join("\n");

    componentBody += `${stateVars}\n\n`;

    // Load saved values
    componentBody += `  React.useEffect(() => {\n`;
    componentBody += `    loadSavedValues();\n`;
    componentBody += `  }, []);\n\n`;

    componentBody += `  const loadSavedValues = async () => {\n`;
    componentBody += `    const response = await Storage.loadPageResponse(${pageNumber});\n`;
    componentBody += `    if (response) {\n`;
    inputFields.forEach((field) => {
      componentBody += `      if (response.responses.${
        field.id
      }) set${capitalize(field.id)}(response.responses.${field.id});\n`;
    });
    componentBody += `    }\n`;
    componentBody += `  };\n\n`;

    // Save handlers
    inputFields.forEach((field) => {
      componentBody += `  const handleSave${capitalize(
        field.id
      )} = async (value: string) => {\n`;
      componentBody += `    set${capitalize(field.id)}(value);\n`;
      componentBody += `    await Storage.savePageResponse(${pageNumber}, '${field.id}', value);\n`;
      componentBody += `  };\n\n`;
    });
  }

  // Render method
  const containerStyle = hasGradient
    ? `colors={${JSON.stringify(
        backgroundGradient.colors
      )}} style={styles.container}`
    : `style={styles.container}`;

  const Container = hasGradient ? "LinearGradient" : "View";

  let renderContent = `  return (\n    <${Container} ${containerStyle}>\n`;

  // Text elements
  if (textElements && textElements.length > 0) {
    textElements.forEach((text, idx) => {
      renderContent += `      <Text style={styles.text${idx}}>${text.content}</Text>\n`;
    });
  }

  // Input fields
  if (inputFields && inputFields.length > 0) {
    inputFields.forEach((field) => {
      if (field.label) {
        renderContent += `      <Text style={styles.label${capitalize(
          field.id
        )}}>${field.label}</Text>\n`;
      }
      renderContent += `      <TextInput\n`;
      renderContent += `        style={styles.input${capitalize(field.id)}}\n`;
      renderContent += `        value={${field.id}}\n`;
      renderContent += `        onChangeText={handleSave${capitalize(
        field.id
      )}}\n`;
      renderContent += `        placeholder="${field.placeholder}"\n`;
      renderContent += `        ${
        field.type === "textarea"
          ? "multiline\n        numberOfLines={4}\n"
          : ""
      }      />\n`;
    });
  }

  renderContent += `    </${Container}>\n  );`;

  // Styles
  let styles = `const styles = StyleSheet.create({\n`;
  styles += `  container: {\n`;
  styles += `    flex: 1,\n`;
  if (!hasGradient) {
    styles += `    backgroundColor: '${backgroundColor}',\n`;
  }
  styles += `    padding: 20,\n`;
  styles += `  },\n`;

  // Text styles
  if (textElements && textElements.length > 0) {
    textElements.forEach((text, idx) => {
      styles += `  text${idx}: {\n`;
      styles += `    fontSize: ${text.fontSize},\n`;
      styles += `    color: '${text.color}',\n`;
      styles += `    fontWeight: '${text.weight}',\n`;
      styles += `    textAlign: '${text.alignment}',\n`;
      styles += `    position: 'absolute',\n`;
      styles += `    top: '${text.position.y}%',\n`;
      styles += `    left: '${text.position.x}%',\n`;
      styles += `  },\n`;
    });
  }

  // Input field styles
  if (inputFields && inputFields.length > 0) {
    inputFields.forEach((field) => {
      if (field.label) {
        styles += `  label${capitalize(field.id)}: {\n`;
        styles += `    fontSize: 14,\n`;
        styles += `    fontWeight: '600',\n`;
        styles += `    position: 'absolute',\n`;
        styles += `    top: '${field.position.y - 5}%',\n`;
        styles += `    left: '${field.position.x}%',\n`;
        styles += `  },\n`;
      }

      styles += `  input${capitalize(field.id)}: {\n`;
      styles += `    position: 'absolute',\n`;
      styles += `    top: '${field.position.y}%',\n`;
      styles += `    left: '${field.position.x}%',\n`;
      styles += `    width: '${field.position.width}%',\n`;
      styles += `    height: '${field.position.height}%',\n`;
      styles += `    borderWidth: 1,\n`;
      styles += `    borderColor: '#ccc',\n`;
      styles += `    borderRadius: 8,\n`;
      styles += `    padding: 10,\n`;
      styles += `    fontSize: 16,\n`;
      styles += `  },\n`;
    });
  }

  styles += `});\n`;

  // Complete component
  return `${imports.join(
    "\n"
  )}\n\ninterface ${componentName}Props {\n  pageNumber: number;\n}\n\nexport default function ${componentName}({ pageNumber }: ${componentName}Props) {\n${componentBody}${renderContent}\n}\n\n${styles}`;
}

function capitalize(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function main() {
  const args = process.argv.slice(2);
  const pageNumber = parseInt(args[0]);

  if (!pageNumber || pageNumber < 1 || pageNumber > 287) {
    console.error(
      "Usage: npx ts-node scripts/generate-component.ts <page-number>"
    );
    console.error("Example: npx ts-node scripts/generate-component.ts 26");
    process.exit(1);
  }

  const layoutPath = path.join(
    __dirname,
    "..",
    "data",
    `page-${pageNumber}-layout.json`
  );

  if (!fs.existsSync(layoutPath)) {
    console.error(`❌ Layout file not found: ${layoutPath}`);
    console.error(`\nRun analyze-page-layout.ts first:`);
    console.error(`  npx ts-node scripts/analyze-page-layout.ts ${pageNumber}`);
    process.exit(1);
  }

  const layout: PageLayout = JSON.parse(fs.readFileSync(layoutPath, "utf-8"));
  const componentCode = generateComponent(layout);

  const outputPath = path.join(
    __dirname,
    "..",
    "components",
    `Page${pageNumber}.tsx`
  );
  fs.writeFileSync(outputPath, componentCode);

  console.log(`✅ Component generated!`);
  console.log(`📄 Saved to: ${outputPath}`);
  console.log(`\nTo use this component, add to PageRenderer.tsx:`);
  console.log(`  case ${pageNumber}:`);
  console.log(`    return <Page${pageNumber} pageNumber={pageNumber} />;`);
}

main();
