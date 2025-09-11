#!/bin/bash

# Image Resizing Helper Script for Hip-Hop Time Capsule App
# This script helps create all the required app icon and splash screen sizes
# 
# Prerequisites: Install ImageMagick
# brew install imagemagick
#
# Usage: 
# 1. Save your book cover as "book-cover-original.png" in the assets folder
# 2. Run this script from the project root: bash scripts/resize-images.sh

ASSETS_DIR="./assets"
SOURCE_IMAGE="$ASSETS_DIR/book-cover-original.png"

# Check if source image exists
if [ ! -f "$SOURCE_IMAGE" ]; then
    echo "❌ Source image not found: $SOURCE_IMAGE"
    echo "Please save your book cover as 'book-cover-original.png' in the assets folder"
    exit 1
fi

echo "🎨 Creating app icons and splash screens from $SOURCE_IMAGE"

# Create app icon (1024x1024)
echo "📱 Creating app icon..."
magick "$SOURCE_IMAGE" -resize 1024x1024 "$ASSETS_DIR/book-cover-icon.png"

# Create splash screen (1284x2778 - iPhone 14 Pro Max)
echo "🖼️  Creating splash screen..."
magick "$SOURCE_IMAGE" -resize 1284x2778 -gravity center -background "#4c2c92" -extent 1284x2778 "$ASSETS_DIR/book-cover-splash.png"

# Create adaptive icon (1024x1024, centered for Android)
echo "🤖 Creating Android adaptive icon..."
magick "$SOURCE_IMAGE" -resize 1024x1024 -gravity center -background transparent -extent 1024x1024 "$ASSETS_DIR/book-cover-adaptive.png"

# Create favicon (64x64)
echo "🌐 Creating web favicon..."
magick "$SOURCE_IMAGE" -resize 64x64 "$ASSETS_DIR/book-cover-favicon.png"

echo "✅ All images created successfully!"
echo ""
echo "Generated files:"
echo "  📱 book-cover-icon.png (1024x1024) - App icon"
echo "  🖼️  book-cover-splash.png (1284x2778) - Splash screen"
echo "  🤖 book-cover-adaptive.png (1024x1024) - Android adaptive icon"
echo "  🌐 book-cover-favicon.png (64x64) - Web favicon"
echo ""
echo "Next steps:"
echo "1. Test the app: npx expo start"
echo "2. Check how the icons look on different devices"
echo "3. Adjust if needed and re-run this script"
