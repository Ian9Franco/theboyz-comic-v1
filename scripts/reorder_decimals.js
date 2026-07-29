const fs = require('fs');
const path = require('path');

/**
 * Renombra secuencialmente (1..N) todos los archivos de imágenes de páginas de un cómic,
 * soportando números decimales (páginas puente como 40.5, 41.5, 42.7, etc.).
 * Preserva las extensiones originales y utiliza renombrado en 2 pasos con nombres temporales
 * para garantizar 0 colisiones y 0 sobrescrituras.
 * 
 * @param {string} folderPath - Ruta absoluta o relativa de la carpeta objetivo.
 */
function reorderDecimalPages(folderPath) {
  const resolvedPath = path.resolve(folderPath);

  if (!fs.existsSync(resolvedPath)) {
    console.error(`❌ Error: La carpeta no existe: ${resolvedPath}`);
    return;
  }

  const files = fs.readdirSync(resolvedPath);

  // Filtrar archivos de imágenes numéricas (ignorando metadata y portadas)
  const ignoredFiles = new Set(['Portada.webp', 'chapter.json', 'dialogues.json']);

  const mapped = [];
  for (const file of files) {
    if (ignoredFiles.has(file)) continue;

    const ext = path.extname(file);
    if (!/\.(png|webp|jpg|jpeg)$/i.test(ext)) continue;

    const baseName = path.basename(file, ext);
    // Extraer número inicial (entero o decimal) y sufijo posterior (ej: "43.5 corregir" -> 43.5, " corregir")
    const match = baseName.match(/^(\d+(?:\.\d+)?)(.*)$/);
    if (!match) continue;

    mapped.push({
      originalName: file,
      num: parseFloat(match[1]),
      suffix: match[2], // ej: " corregir" o ""
      ext: ext.toLowerCase()
    });
  }

  if (mapped.length === 0) {
    console.log(`⚠️ No se encontraron páginas numéricas en: ${resolvedPath}`);
    return;
  }

  // Ordenar por valor numérico ascendente (y alfabéticamente si hay empate)
  mapped.sort((a, b) => a.num - b.num || a.originalName.localeCompare(b.originalName, undefined, { numeric: true }));

  console.log(`\n==================================================`);
  console.log(`📂 PROCESANDO CARPETA: ${resolvedPath}`);
  console.log(`==================================================`);
  console.log(`Total de imágenes a reordenar: ${mapped.length}\n`);

  const timestamp = Date.now();

  // Paso 1: Renombrar a nombres temporales únicos para evitar colisiones
  const tempMapped = mapped.map((item, index) => {
    const tempName = `__temp_${timestamp}_${index}_${item.ext}`;
    const oldPath = path.join(resolvedPath, item.originalName);
    const tempPath = path.join(resolvedPath, tempName);

    fs.renameSync(oldPath, tempPath);
    return {
      tempName,
      targetNumber: index + 1,
      suffix: item.suffix,
      ext: item.ext,
      originalName: item.originalName
    };
  });

  // Paso 2: Renombrar de nombre temporal al número secuencial final (preservando sufijos)
  tempMapped.forEach(item => {
    const finalName = `${item.targetNumber}${item.suffix}${item.ext}`;
    const tempPath = path.join(resolvedPath, item.tempName);
    const finalPath = path.join(resolvedPath, finalName);

    console.log(`  [+] ${item.originalName.padEnd(25)}  -->  ${finalName}`);
    fs.renameSync(tempPath, finalPath);
  });

  console.log(`\n✅ Completado con éxito: ${mapped.length} páginas reordenadas del 1 al ${mapped.length}.\n`);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.log('Uso: node scripts/reorder_decimals.js <carpeta1> [carpeta2 ...]');
  } else {
    args.forEach(folder => reorderDecimalPages(folder));
  }
}

module.exports = { reorderDecimalPages };
