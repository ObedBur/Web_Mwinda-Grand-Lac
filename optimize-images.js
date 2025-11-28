import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const publicDir = path.join(process.cwd(), 'public');
const MAX_WIDTH = 1200;
const QUALITY = 80;

// List of large images to optimize
const imagesToOptimize = [
  'apps-crm.jpg',
  'media-en-ligne.jpg',
  'marketing-digital.jpg',
  'maintenance-branding.jpg',
  'tp210-d2-poster-01-352.jpg'
];

async function optimizeImages() {
  console.log('Starting image optimization...');

  for (const file of imagesToOptimize) {
    const filePath = path.join(publicDir, file);
    
    if (fs.existsSync(filePath)) {
      const tempPath = path.join(publicDir, `temp-${file}`);
      
      try {
        const stats = fs.statSync(filePath);
        const sizeMB = stats.size / (1024 * 1024);
        console.log(`Optimizing ${file} (${sizeMB.toFixed(2)} MB)...`);

        await sharp(filePath)
          .resize(MAX_WIDTH, null, { withoutEnlargement: true })
          .jpeg({ quality: QUALITY, mozjpeg: true })
          .toFile(tempPath);

        // Replace original with optimized
        fs.unlinkSync(filePath);
        fs.renameSync(tempPath, filePath);
        
        const newStats = fs.statSync(filePath);
        const newSizeMB = newStats.size / (1024 * 1024);
        console.log(`✅ ${file} optimized: ${newSizeMB.toFixed(2)} MB (Saved ${(sizeMB - newSizeMB).toFixed(2)} MB)`);
        
      } catch (error) {
        console.error(`❌ Error optimizing ${file}:`, error);
        if (fs.existsSync(tempPath)) fs.unlinkSync(tempPath);
      }
    } else {
      console.log(`⚠️ File not found: ${file}`);
    }
  }
  
  console.log('Optimization complete!');
}

optimizeImages();
