const fs = require('fs');
const path = require('path');

// Source and destination paths
const sourceImage = path.join(__dirname, '..', 'public', 'images', 'hero-bg.jpg');
const destDir = path.join(__dirname, '..', 'public');

// Create a simple favicon.ico by copying the hero image
function createFavicon() {
  try {
    // Check if source image exists
    if (!fs.existsSync(sourceImage)) {
      console.error('❌ Source image not found at:', sourceImage);
      console.log('ℹ️  Please ensure the image exists at: public/images/hero-bg.jpg');
      return false;
    }

    // Ensure destination directory exists
    if (!fs.existsSync(destDir)) {
      fs.mkdirSync(destDir, { recursive: true });
    }

    // Create a simple favicon.ico by copying the hero image
    fs.copyFileSync(sourceImage, path.join(destDir, 'favicon.ico'));
    
    // Create apple-touch-icon.png (just a copy for now)
    fs.copyFileSync(sourceImage, path.join(destDir, 'apple-touch-icon.png'));
    
    console.log('✅ Basic favicon files created successfully!');
    console.log('📁 Output directory:', destDir);
    return true;
  } catch (error) {
    console.error('❌ Error creating favicon:', error.message);
    return false;
  }
}

// Run the function
createFavicon();
