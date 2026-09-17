# GUÍA MAESTRA DE REESTILIZACIÓN: CONVERSIÓN DE ARTE PREVIO AL HOUSE STYLE ELSEFRAME

**Rol de este documento:** Manual autónomo de prompts universales para transformar material gráfico existente (ilustraciones viejas, viñetas generadas con estilos desactualizados, concept art 3D o sheets previos) al House Style oficial 2D de Elseframe Comics.  
**Misión:** Proporcionar dos prompts maestros listos para copiar y ejecutar directamente en el generador de imágenes:
- **Prompt A:** Conversión de viñetas, páginas o ilustraciones completas preservando composición, encuadre y narrativa.
- **Prompt B:** Conversión de sheets técnicos y concept art preservando identidad visual canónica, vistas y proporciones.

---

## 1. PRINCIPIO DE REESTILIZACIÓN

La identidad del diseño original se preserva íntegramente (rostro, vestuario, proporciones corporales, paleta de colores, objetos, daños).  
Lo que se reemplaza y descarta por completo es su **ejecución técnica anterior**:
- Se eliminan: acabados 3D/CGI, texturas fotorrealistas de piel o telas, iluminación artificial de estudio, brillos especulares plásticos ("glossy/wet-look") y gradientes difusos de aerógrafo.
- Se instaura: cómic americano 2D entintado a mano, línea de tinta orgánica con modulación de calibre, cel shading duro de 2 a 3 niveles tonales y acabado seco de imprenta.

Una conversión **jamás autoriza reescribir la escena, cambiar el número de viñetas ni rediseñar los personajes**.

---

## 2. IMÁGENES DE REFERENCIA A ADJUNTAR

Para ejecutar una reestilización, se adjuntan las siguientes referencias:
1. **ORIGINAL:** La imagen exacta que se va a transformar.
2. **ANCLA DE DIBUJO (Style Anchor):**
   - Por defecto: `diseño0_dibujo.jpg` (prioriza expresividad facial, ropa con pliegues estructurales y anatomía dibujada).
   - Alternativa: `diseño1_dibujo.webp` (prioriza figuras integradas en espacio, escala coral y profundidad atmosférica).
3. **COMPLEMENTO DE ESTILO opcional (Style Complement):** Una única imagen adicional si se busca un rasgo técnico específico:
   - `diseño3_color.webp`: Cohesión cromática ambiental y separación de planos por valor de color.
   - `diseño10_color.jpg`: Grandes campos de color gráfico, contraste cálido/frío y espacio negativo.
   - `diseño5_tension_sombras.webp`: Claroscuro gráfico, masas de negro puro y retención de detalle para tensión.
   - `diseño9 _accion 3d.webp`: Escorzo 2D dinámico, vectores de fuerza tangibles y solidez de apoyos ("3D dibujado", nunca CGI).
4. **CANON opcional:** Sheet vigente de personaje si la imagen original contenía errores de diseño que deban subsanarse.

---

## 3. PROMPT A: REESTILIZAR VIÑETA, PÁGINA O ILUSTRACIÓN EXISTENTE

Copiar este bloque íntegro en el chat de generación junto con los archivos adjuntos:

```text
TAREA — REINTERPRETACIÓN GRÁFICA DE UNA IMAGEN EXISTENTE AL HOUSE STYLE ELSEFRAME

Redibuja ORIGINAL como cómic americano 2D entintado a mano, aplicando la técnica y acabado de las referencias artísticas adjuntas. Reconstruye el dibujo de línea, las masas de sombra dura y el color plano de cómic. El resultado debe conservar exactamente la misma escena y composición, siendo inmediatamente reconocible como la misma imagen ejecutada con el lenguaje gráfico oficial de Elseframe Comics.

ROLES DE LOS ADJUNTOS:
- ORIGINAL: Único objetivo de edición. Aporta contenido narrativo, identidad de personajes, formato, composición de viñetas, encuadres de cámara, acción y continuidad. Su acabado visual previo queda completamente descartado.
- ANCLA DE DIBUJO (Style Anchor): Aporta trazo de tinta negra orgánica de calibre variable, anatomía estilizada dibujada, hachurado manual selectivo y economía de detalle. La primera ancla declarada gobierna el dibujo de figuras.
- COMPLEMENTO DE ESTILO (si está presente): Aporta exclusivamente el rasgo técnico declarado (atmósfera cromática, masas de negros para tensión o escorzo físico 2D).
- CANON (si está presente): Corrige exclusivamente discrepancias específicas de diseño canónico señaladas. No altera la composición de la escena.
Los personajes, diálogos, tramas o elementos propios de las referencias artísticas NO pertenecen a ORIGINAL.

ELEMENTOS A CONSERVAR RIGUROSAMENTE:
- Conserva la relación de aspecto del lienzo, encuadres, número exacto y orden de viñetas, gutters (calles entre paneles), perspectiva, posiciones relativas de los personajes y el instante preciso de la acción.
- Conserva rostros reconocibles, edad aparente, contextura física, siluetas, peinados, vestimenta, patrones gráficos, colores locales, armas, cicatrices y daños corporales previos.
- Conserva la locación, hora del día, fuentes de luz motivadas y progresión emocional de los personajes.

DIBUJO, ENTINTADO Y CEL SHADING:
- Construye las figuras con contorno exterior de tinta orgánica, líneas internas moduladas y masas gráficas de negro puro para sombras profundas.
- Aplica cel shading duro de 2 a 3 niveles tonales por superficie. Prohibido el sombreado por gradiente continuo o aerógrafo digital.
- Acabado seco de imprenta: Máximo un highlight amplio y delimitado por superficie reflectante real (metal, vidrio). Cero brillos especulares dispersos, destellos tipo estrella o piel sudorosa/plastificada.
- Fondos simplificados en planos lejanos mediante tinta y contraste de valores, sin desenfoques artificiales de cámara fotográfica.

ROTULACIÓN Y TEXTO EXISTENTE:
- Por defecto, conserva el texto y la posición de los globos presentes en ORIGINAL como una excepción de restauración fiel.
- Opción Arte Limpio (si el usuario lo especifica): Elimina todos los globos y cartelas de texto, redibuja los fondos ocultos y deja zonas despejadas ("calmas") para rotular posteriormente.

RESTRICCIONES DURAS:
No 3D render, no CGI look, no photorealism, no glossy overrendering, no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen, no painterly airbrush finish, no smooth gradient modeling on figures, no gratuitous bloom without real emissive source, no uniform procedural noise, no photographic microtextures, no watermarks, no artist signatures. No alterar el layout ni la narrativa original.

ENTREGA:
Una única versión final completa a la misma proporción y resolución, con fidelidad absoluta a la escena original pero completamente redibujada en el House Style.
```

### Modificadores opcionales para añadir al final del Prompt A:
- **Para arte limpio:** `INSTRUCCIÓN DE ARTE LIMPIO: Elimina toda la rotulación, globos y cartelas de texto del original. Redibuja los fondos que quedaban tapados por los globos y preserva zonas calmas para rotulación posterior.`
- **Para corrección canónica:** `CORRECCIÓN CANÓNICA PRIORITARIA: El sheet CANON adjunto corrige únicamente [detallar elemento, ej. el color del visor y la hombrera derecha]. Todo lo demás conserva la escena original.`

---

## 4. PROMPT B: REESTILIZAR SHEET O CONCEPT ART EXISTENTE

Copiar este bloque para actualizar fichas de diseño, hojas de personajes o concept art previo al estándar House Style:

```text
TAREA — CONVERSIÓN DE SHEET / CONCEPT ART A HOUSE STYLE ELSEFRAME

Redibuja ORIGINAL utilizando el lenguaje oficial de cómic americano 2D, con entintado manual nítido, masas gráficas de sombra y cel shading plano de 2 a 3 tonos. El objetivo es obtener una ficha de diseño clara, limpia y directamente utilizable como referencia de dibujo para páginas narrativas, preservando la misma identidad con una técnica gráfica renovada.

ROLES DE LOS ADJUNTOS:
- ORIGINAL: Define la identidad del personaje, criatura, vehículo u objeto y la estructura de vistas de la ficha existente. Su acabado previo queda completamente descartado.
- ANCLA DE DIBUJO (Style Anchor): Aporta trazo de tinta negra orgánica, construcción anatómica por planos y acabado seco de imprenta. No traslada sus personajes ni trajes al resultado.
- COMPLEMENTO DE ESTILO (opcional): Aporta exclusivamente el rasgo técnico declarado sin comprometer la legibilidad técnica del sheet.

ELEMENTOS A CONSERVAR RIGUROSAMENTE:
- Conserva el número y distribución de vistas de la ficha original (frente, 3/4, perfil o vista única si es concept art). No inventes vistas que no estén presentes.
- Personajes y criaturas: Preserva facciones faciales exactas, proporciones, masa corporal, peinado, colores locales de traje, emblemas, armas y accesorios.
- Vehículos y props: Preserva silueta general, líneas de ensamblaje, placas de blindaje, armas integradas y esquema cromático canónico.
- Locaciones: Preserva escala, arquitectura, materiales y puntos de referencia espaciales.

TÉCNICA DE EJECUCIÓN GRÁFICA:
- Líneas de tinta negra orgánicas con jerarquía: contorno exterior firme, líneas interiores selectivas y negros profundos para sombras clave.
- Cel shading estricto de dos a tres niveles tonales sobre colores planos.
- Iluminación gráfica limpia y clara sobre fondo neutro que permita inspeccionar cada detalle del diseño sin interferencias atmosféricas.
- Acabado seco: Telas mate con pliegues estructurales; metales con una sombra dura y máximo un highlight amplio; piel descrita por planos de color sin texturas de poros fotográficos.

TEXTO Y ROTULACIÓN:
- Mantén únicamente las etiquetas técnicas ya presentes en ORIGINAL. Si no existen etiquetas, no agregues texto generado de ningún tipo.
- Si se solicita arte limpio, elimina las etiquetas y deja los paneles limpios.

RESTRICCIONES DURAS:
No CGI, no 3D render, no maniquí de plástico, no microtexturas fotográficas, no brillos especulares dispersos, no piel sudorosa o aceitosa, no aerógrafo suave. No transformar el sheet en póster narrativo. No agregar humo, destellos, poderes activos ni poses de combate exageradas salvo que figuren en el original. No watermarks.

ENTREGA:
Una ficha de referencia técnica renovada en el House Style oficial, con sus vistas originales nítidas y listas para producción de páginas.
```

---

## 5. VALIDACIÓN TRAS LA REESTILIZACIÓN

Al comparar la imagen original con la versión reestilizada, verificar:
1. **Identidad:** ¿El personaje/objeto es inmediatamente reconocible como el mismo diseño?
2. **Composición:** ¿Se respetaron los encuadres, puntos de fuga, gestos y relaciones espaciales sin añadir elementos ajenos?
3. **Técnica House Style:** ¿Se eliminó todo rastro de render 3D, CGI, textura fotorrealista y gradiente difuso en favor de tinta orgánica y cel shading duro?
4. **Acabado seco:** ¿No hay brillos plásticos en piel o ropa?
5. **Limpieza tipográfica:** ¿No se generaron letras corruptas o logos inventados?
