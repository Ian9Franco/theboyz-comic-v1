const fs = require('fs');
const path = require('path');

/**
 * Renombra secuencialmente de 1 a N todos los archivos estrictamente numéricos de una carpeta,
 * respetando el orden numérico actual.
 * Utiliza nombres temporales para garantizar 0 colisiones/sobrescrituras.
 * 
 * @param {string} folderPath - Ruta de la carpeta objetivo.
 * @param {number} startNumber - Número por el cual iniciar el reordenamiento (por defecto 1).
 */
function sequentialReorder(folderPath, startNumber = 1) {
  if (!fs.existsSync(folderPath)) {
    console.error(`Error: La carpeta especificada no existe: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  // Filtrar y mapear solo archivos con nombre estrictamente numérico (ej: "68.png", ignorando "68a.png" o alfanuméricos)
  const mapped = files
    .map(file => {
      const match = file.match(/^(\d+)(\.[a-zA-Z0-9]+)$/);
      if (!match) return null;
      return {
        originalName: file,
        number: parseInt(match[1], 10),
        ext: match[2] // ej: ".png"
      };
    })
    .filter(Boolean);

  if (mapped.length === 0) {
    console.log(`No se encontraron archivos estrictamente numéricos en: ${folderPath}`);
    return;
  }

  // Ordenar de MENOR a MAYOR para mantener el orden actual
  mapped.sort((a, b) => a.number - b.number);

  console.log(`=== Reordenando secuencialmente en carpeta: ${folderPath} ===`);
  console.log(`Total archivos a reordenar: ${mapped.length}`);
  console.log(`Página menor encontrada: ${mapped[0].number} -> Pasará a ser: ${startNumber}`);
  console.log(`Secuencia objetivo: ${startNumber} hasta ${startNumber + mapped.length - 1}\n`);

  // Paso 1: Renombrar a nombres temporales únicos para evitar colisiones
  const tempMapped = mapped.map((item, index) => {
    const tempName = `__temp_${Date.now()}_${index}_${item.ext}`;
    const oldPath = path.join(folderPath, item.originalName);
    const tempPath = path.join(folderPath, tempName);
    fs.renameSync(oldPath, tempPath);
    return {
      tempName,
      targetNumber: startNumber + index,
      ext: item.ext,
      originalName: item.originalName
    };
  });

  // Paso 2: Renombrar de nombre temporal al número secuencial final
  tempMapped.forEach(item => {
    const finalName = `${item.targetNumber}${item.ext}`;
    const tempPath = path.join(folderPath, item.tempName);
    const finalPath = path.join(folderPath, finalName);

    console.log(`  [+] ${item.originalName}  -->  ${finalName}`);
    fs.renameSync(tempPath, finalPath);
  });

  console.log(`\n✔ Reordenamiento secuencial completado con éxito para ${mapped.length} archivos.\n`);
}

if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 1) {
    console.log('Uso: node scripts/reorder_sequential.js <carpeta> [startNumber]');
    console.log('Ejemplo: node scripts/reorder_sequential.js "./3" 1');
  } else {
    const targetFolder = path.resolve(args[0]);
    const startNum = args[1] ? parseInt(args[1], 10) : 1;
    sequentialReorder(targetFolder, startNum);
  }
}

module.exports = { sequentialReorder };
