const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const COMICS_DIR = path.join(__dirname, 'comics');

if (!fs.existsSync(COMICS_DIR)) {
  console.error(`❌ El directorio 'comics' no existe en: ${COMICS_DIR}`);
  console.log(`💡 Asegúrate de copiar las carpetas de los cómics aquí.`);
  process.exit(1);
}

const SUPPORTED_EXTS = ['.png', '.jpg', '.jpeg', '.tiff', '.bmp'];

async function walkDir(dir) {
  let files = [];
  const list = fs.readdirSync(dir);
  for (const item of list) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    if (stat.isDirectory()) {
      files = files.concat(await walkDir(fullPath));
    } else {
      const ext = path.extname(item).toLowerCase();
      if (SUPPORTED_EXTS.includes(ext)) {
        files.push({ fullPath, ext });
      }
    }
  }
  return files;
}

async function convertImages() {
  console.log('🔍 Buscando imágenes para optimizar...');
  const images = await walkDir(COMICS_DIR);

  if (images.length === 0) {
    console.log('✨ No se encontraron imágenes PNG/JPG/JPEG para convertir.');
    return;
  }

  console.log(`🚀 Se encontraron ${images.length} imágenes. Iniciando conversión a WebP...`);
  let successCount = 0;
  let errorCount = 0;

  for (const img of images) {
    const { fullPath, ext } = img;
    const dirName = path.dirname(fullPath);
    const baseName = path.basename(fullPath, ext);
    const destPath = path.join(dirName, `${baseName}.webp`);

    try {
      console.log(`⏳ Convirtiendo: ${path.relative(COMICS_DIR, fullPath)}`);
      
      // Convert to webp with premium quality and compression configuration
      await sharp(fullPath)
        .webp({ quality: 85, effort: 6 })
        .toFile(destPath);

      // Remove the original non-webp file
      fs.unlinkSync(fullPath);
      successCount++;
    } catch (error) {
      console.error(`❌ Error al convertir ${path.basename(fullPath)}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n--- 📊 Resumen de Conversión ---');
  console.log(`✅ Convertidas con éxito: ${successCount}`);
  if (errorCount > 0) {
    console.log(`⚠️ Errores: ${errorCount}`);
  }
  console.log('🎉 ¡Proceso finalizado!');
}

convertImages();
