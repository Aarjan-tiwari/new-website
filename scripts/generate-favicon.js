const sharp = require('sharp');
const fs = require('fs-extra');
const path = require('path');

async function generateFavicon() {
  try {
    const inputPath = path.join(__dirname, '..', 'public', 'images', 'hero-bg.jpg');
    const outputDir = path.join(__dirname, '..', 'public');
    
    // Ensure output directory exists
    await fs.ensureDir(outputDir);
    
    // Check if source image exists
    if (!await fs.pathExists(inputPath)) {
      console.error('❌ Source image not found at:', inputPath);
      console.log('ℹ️  Please ensure the image exists at: public/images/hero-bg.jpg');
      return;
    }

    // Create different sizes of favicons
    const sizes = [16, 32, 48, 64, 128, 192, 256, 512];
    const pngPromises = [];
    
    try {
      console.log('🔄 Generating favicon.ico...');
      await sharp(inputPath)
        .resize(64, 64, { fit: 'cover' })
        .toFile(path.join(outputDir, 'favicon.ico'));
      
      // Generate PNG files for different sizes
      for (const size of sizes) {
        console.log(`🔄 Generating favicon-${size}x${size}.png...`);
        pngPromises.push(
          sharp(inputPath)
            .resize(size, size, { fit: 'cover' })
            .composite([{
              input: Buffer.from(
                `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="none" stroke="none" />
                </svg>`
              ),
              blend: 'dest-in'
            }])
            .toFile(path.join(outputDir, `favicon-${size}x${size}.png`))
            .catch(err => console.error(`❌ Error generating ${size}x${size} icon:`, err.message))
        );
      }

      // Generate apple-touch-icon.png (180x180 with circular mask)
      console.log('🔄 Generating apple-touch-icon.png...');
      pngPromises.push(
        sharp(inputPath)
          .resize(180, 180, { fit: 'cover' })
          .composite([{
            input: Buffer.from(
              '<svg width="180" height="180" viewBox="0 0 180 180" xmlns="http://www.w3.org/2000/svg">' +
              '<circle cx="90" cy="90" r="90" fill="none" stroke="none" />' +
              '</svg>'
            ),
            blend: 'dest-in'
          }])
          .toFile(path.join(outputDir, 'apple-touch-icon.png'))
          .catch(err => console.error('❌ Error generating apple-touch-icon:', err.message))
      );

      // Generate safari-pinned-tab.png (simple monochrome version)
      console.log('🔄 Generating safari-pinned-tab.png...');
      await sharp(inputPath)
        .resize(32, 32, { fit: 'cover' })
        .grayscale()
        .toFile(path.join(outputDir, 'safari-pinned-tab.png'))
        .catch(err => console.error('❌ Error generating safari-pinned-tab:', err.message));
      
      // Wait for all image processing to complete
      await Promise.all(pngPromises);
      
      console.log('✅ All favicon files generated successfully!');
      console.log('📁 Output directory:', outputDir);
      
    } catch (error) {
      console.error('❌ Error during favicon generation:', error.message);
      process.exit(1);
    }
  } catch (error) {
    console.error('❌ Fatal error:', error);
    process.exit(1);
  }
}

generateFavicon();
