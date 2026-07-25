const fs = require('fs');
const path = require('path');

/**
 * Renombra los archivos numéricos de una carpeta sumándole un offset.
 * Ordena de MAYOR a MENOR antes de renombrar para evitar colisiones y sobrescritura.
 * 
 * @param {string} folderPath - Ruta de la carpeta objetivo.
 * @param {number} offset - Número a sumar al nombre actual de cada archivo.
 */
function shiftPageNumbers(folderPath, offset) {
  if (!fs.existsSync(folderPath)) {
    console.error(`Error: La carpeta especificada no existe: ${folderPath}`);
    return;
  }

  const files = fs.readdirSync(folderPath);

  // Filtrar archivos que empiezan por números (ej: 1.png, 05.jpg, 12_draft.png)
  const mapped = files
    .map(file => {
      const match = file.match(/^(\d+)(.*)$/);
      if (!match) return null;
      return {
        originalName: file,
        number: parseInt(match[1], 10),
        rest: match[2]
      };
    })
    .filter(Boolean);

  if (mapped.length === 0) {
    console.log(`No se encontraron archivos numéricos en: ${folderPath}`);
    return;
  }

  // REGLA CLAVE: Ordenar de MAYOR a MENOR (descendente)
  // Si sumamos un offset positivo (ej: +5), renombrar primero los números más altos
  // evita que "1.png" pase a "6.png" sobreescribiendo una "6.png" existente.
  mapped.sort((a, b) => b.number - a.number);

  console.log(`=== Renombrando en carpeta: ${folderPath} ===`);
  console.log(`Aplicando offset: +${offset}\n`);

  mapped.forEach(item => {
    const newNumber = item.number + offset;
    const newName = `${newNumber}${item.rest}`;
    const oldPath = path.join(folderPath, item.originalName);
    const newPath = path.join(folderPath, newName);

    console.log(`  [+] ${item.originalName}  -->  ${newName}`);
    fs.renameSync(oldPath, newPath);
  });

  console.log(`\n✔ Proceso completado exitosamente para ${mapped.length} archivos.\n`);
}

// Ejemplo de uso directo desde terminal: node scripts/shift_pages.js <ruta_carpeta> <offset>
if (require.main === module) {
  const args = process.argv.slice(2);
  if (args.length < 2) {
    console.log('Uso: node scripts/shift_pages.js <carpeta> <offset>');
    console.log('Ejemplo: node scripts/shift_pages.js ./3 5');
  } else {
    const targetFolder = path.resolve(args[0]);
    const offset = parseInt(args[1], 10);
    shiftPageNumbers(targetFolder, offset);
  }
}

module.exports = { shiftPageNumbers };
