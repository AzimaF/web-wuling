/**
 * Image Optimization Script for BYD BIPO Serpong
 * Converts large PNG/JPG images to WebP and compresses them
 * Run: node scripts/optimize-images.js
 */

import sharp from 'sharp';
import { readdir, stat, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PUBLIC_DIR = path.join(__dirname, '..', 'public');

const EXTENSIONS = ['.png', '.jpg', '.jpeg'];
const MAX_WIDTH = 1920;         // Max width (downscale if larger)
const WEBP_QUALITY = 82;        // WebP quality (0-100)
const HERO_QUALITY = 85;        // Slightly higher for hero images
const HERO_KEYWORDS = ['halaman-1', 'cover', 'hero', 'banner'];

let totalSaved = 0;
let totalFiles = 0;

/**
 * Recursively finds all image files in a directory
 */
async function findImages(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await findImages(fullPath));
    } else if (EXTENSIONS.includes(path.extname(entry.name).toLowerCase())) {
      files.push(fullPath);
    }
  }
  return files;
}

/**
 * Converts a single image to WebP
 */
async function convertToWebP(inputPath) {
  const ext = path.extname(inputPath);
  const outputPath = inputPath.replace(ext, '.webp');

  // Skip if WebP already exists and is newer
  if (existsSync(outputPath)) {
    const [inStat, outStat] = await Promise.all([stat(inputPath), stat(outputPath)]);
    if (outStat.mtimeMs > inStat.mtimeMs) {
      return; // Already optimized
    }
  }

  const inputStat = await stat(inputPath);
  const inputSizeKB = (inputStat.size / 1024).toFixed(1);

  // Determine quality based on file type (hero gets higher quality)
  const fileName = path.basename(inputPath).toLowerCase();
  const isHero = HERO_KEYWORDS.some(k => fileName.includes(k));
  const quality = isHero ? HERO_QUALITY : WEBP_QUALITY;

  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let pipeline = image;

    // Downscale if wider than MAX_WIDTH
    if (metadata.width && metadata.width > MAX_WIDTH) {
      pipeline = pipeline.resize(MAX_WIDTH, null, { 
        withoutEnlargement: true,
        fit: 'inside'
      });
    }

    await pipeline
      .webp({ quality, effort: 4 })
      .toFile(outputPath);

    const outputStat = await stat(outputPath);
    const outputSizeKB = (outputStat.size / 1024).toFixed(1);
    const savedKB = ((inputStat.size - outputStat.size) / 1024).toFixed(1);
    const savedPct = (((inputStat.size - outputStat.size) / inputStat.size) * 100).toFixed(0);

    totalSaved += (inputStat.size - outputStat.size);
    totalFiles++;

    const relativePath = path.relative(PUBLIC_DIR, inputPath);
    console.log(`✅ ${relativePath}`);
    console.log(`   ${inputSizeKB}KB → ${outputSizeKB}KB (saved ${savedKB}KB / ${savedPct}%)`);
  } catch (err) {
    console.error(`❌ Failed to convert ${inputPath}:`, err.message);
  }
}

async function main() {
  console.log('🔍 Scanning images in public/...\n');
  
  const images = await findImages(PUBLIC_DIR);
  
  console.log(`Found ${images.length} images. Starting conversion...\n`);
  console.log('─'.repeat(60));

  // Process images sequentially to avoid memory issues
  for (const imagePath of images) {
    await convertToWebP(imagePath);
  }

  console.log('─'.repeat(60));
  console.log(`\n✨ Done! Converted ${totalFiles} images.`);
  console.log(`💾 Total space saved: ${(totalSaved / 1024 / 1024).toFixed(2)} MB`);
  console.log('\nNote: Original files are kept. WebP versions are alongside them.');
  console.log('To use WebP in your app, update image src from ".png" to ".webp"');
}

main().catch(console.error);
