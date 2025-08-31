const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'images', 'hero-bg.jpg');
    const outputDir = path.join(__dirname, '..', 'public');
    
    // Ensure output directory exists
    await fs.ensureDir(outputDir);
    
    // Create different sizes of favicons
    const sizes = [16, 32, 48, 64, 128, 192, 256, 512];
    
    // Generate ICO file (favicon.ico)
    await sharp(inputPath)
      .resize(64, 64, { fit: 'cover' })
      .toFile(path.join(outputDir, 'favicon.ico'));
    
    // Generate PNG files for different sizes
    const pngPromises = sizes.map(size => 
      sharp(inputPath)
        .resize(size, size, { fit: 'cover' })
        .toFile(path.join(outputDir, `favicon-${size}x${size}.png`))
    );

    // Generate apple-touch-icon.png (180x180)
    pngPromises.push(
      sharp(inputPath)
        .resize(180, 180, { fit: 'cover' })
        .toFile(path.join(outputDir, 'apple-touch-icon.png'))
    );

    // Generate safari-pinned-tab.svg (simple monochrome version using sharp)
    await sharp(inputPath)
      .resize(32, 32, { fit: 'cover' })
      .grayscale()
      .toFile(path.join(outputDir, 'safari-pinned-tab.png'));
    
    // Wait for all image processing to complete
    await Promise.all(pngPromises);
    
    // Create browserconfig.xml
    const browserConfig = `<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
  <msapplication>
    <tile>
      <square150x150logo src="/mstile-150x150.png"/>
      <TileColor>#ffffff</TileColor>
    </tile>
  </msapplication>
</browserconfig>`;
    
    await fs.writeFile(path.join(outputDir, 'browserconfig.xml'), browserConfig);
    
    console.log('✅ Favicon files generated successfully!');
  } catch (error) {
    console.error('❌ Error generating favicon:', error);
    process.exit(1);
  }
}

generateFavicon();
