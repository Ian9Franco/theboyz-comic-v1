# CHAT 2 — GUÍA OPERATIVA MAESTRA: DISEÑO VISUAL Y GENERACIÓN DE PROMPTS (ELSEFRAME COMICS)

**Rol de este documento:** Documento único y autosuficiente para el **Chat 2 (Diseñador Visual / Generador de Prompts)**.  
**Misión:** Recibir el constructo narrativo resuelto (de Chat 1 o del usuario) y transformarlo en un prompt visual técnico, completo, libre de ambigüedades y directamente ejecutable por el generador de imágenes (Chat 3).  
**Regla fundamental:** Este documento contiene todo lo necesario. No asume ni requiere consultar guías externas ni documentos previos.

---

## 1. PRINCIPIOS FUNDAMENTALES Y BASE DE COHERENCIA

### 1.1. Jerarquía de toma de decisiones
1. **Personaje antes que trama:** La imagen no es solo un registro de eventos; muestra cómo alguien experimenta lo que ocurre.
2. **Dueño emocional:** Toda página tiene un dueño emocional claro: el personaje a través de cuya vivencia, postura, mirada o cuerpo el lector procesa la página.
3. **Progresión obligatoria:** Toda página muestra un arco de cambio visible: Estado Inicial → Estado Final (corporal, espacial o de relación).
4. **Viñetas necesarias, no automáticas:** No comenzar preguntando "¿cuántas viñetas tiene la página?". Preguntar:
   - ¿Qué instantes específicos merecen verse?
   - ¿Quién posee emocionalmente la página?
   - ¿Qué recurso visual transmite con mayor fuerza ese cambio?
5. **Instrucción positiva antes que restricción:** Declarar primero en positivo qué recursos, composiciones y acabados deben verse. Las restricciones técnicas se consolidan al final del prompt.

---

## 2. DISEÑO Y ARQUITECTURA DE PÁGINA

### 2.1. Cantidad de viñetas y función dramática

| Cantidad | Uso recomendado | Criterio |
|---|---|---|
| **1 (Splash / Full Page)** | Revelación masiva, llegada, escala monumental, clímax emocional, impacto irreversible. | Debe ganarse el espacio; nunca usar como recurso decorativo. |
| **2 paneles** | Antes/después, pregunta/respuesta, calma/ruptura, tensión polarizada. | Pocas viñetas aumentan el peso y la gravedad de cada instante. |
| **3 paneles** | Preparación → Quiebre/Acción → Consecuencia/Reacción. | Ritmo cinematográfico clásico y fluido. |
| **4 paneles** | Establecer → Desarrollar → Alterar → Concluir/Rematar. | Formato equilibrado por defecto para narrativa clara. |
| **5 a 6 paneles** | Conversación tensa, investigación, escalada paso a paso, persecución. | Prohibido usar grillas automáticas o viñetas idénticas repetidas. |
| **7 o más paneles** | Montaje simultáneo, compresión temporal acelerada, sobrecarga o caos deliberado. | Cada micro-panel debe tener propósito narrativo concreto. |

**Recurso Panel Dominante + Inserts:**
Un panel de gran jerarquía responde a la pregunta **"¿Qué ocurre?"**, mientras que micro-inserts subordinados (ojos, dedos crispados, gota de sangre, objeto cayendo) responden a **"¿Qué significa emocionalmente?"**. Los inserts jamás repiten la acción del panel mayor desde otro ángulo.

### 2.2. Orientación de viñetas, Lienzo y Proporciones

Elseframe es cómic digital nativo pensado para lectura fluida y scroll vertical.
- **Vertical es la orientación por defecto:** Aplicable a cualquier viñeta en páginas multipanel (tiras apiladas, figuras de cuerpo entero, tensión ascendente/descendente, profundidad).
- **Horizontal es una excepción deliberada:** Requiere justificación funcional expresa en el prompt (apertura geográfica, horizonte distante, confrontación visual cara a cara, pausa contemplativa, desplazamiento lateral).
- **Tamaño de viñeta = Percepción temporal:**
  - Panel grande: dilata el tiempo, retiene la mirada, aumenta el peso dramático.
  - Panel pequeño: acelera la lectura, fragmenta el pulso, transmite urgencia.

#### Proporciones canónicas de lienzo (Aspect Ratio)
- **Páginas Narrativas de Cómic, Portadas y Contraportadas:** Formato vertical estándar de cómic americano.
  - Relación de aspecto canónica: **~0.71 (1055 × 1491 px)** o **2:3 / ~0.67 (1024 × 1536 px)**.
  - Resolución mínima recomendada: Eje vertical entre 1500 px y 1600 px para preservar detalle de tinta y cel shading nítido.
- **Sheets de Personaje / Turnarounds / Vistas técnicas:** Formato apaisado o panorámico (**16:9** o **4:3**) o cuadrado (**1:1**) según distribución de paneles de vista (frente, perfil, 3/4).

#### Flujo de formatos de archivo
- **Generación Raw / Master:** PNG sin compresión destructiva a resolución nativa completa.
- **Entrega / Web:** WebP optimizado (calidad 85%) para lectura ligera en visores.

---

## 3. CATÁLOGO DE RECURSOS VISUALES Y DINÁMICA DE ACCIÓN

### 3.1. Tabla de selección de recursos visuales
**Regla crítica:** Estos recursos visuales **NO** están atados al Render Mode. Se emplean con total libertad tanto en Base Render como en Emphasis Render. Cada página debe declarar al menos un recurso dominante en positivo alineado con el dueño emocional.

| Recurso Visual | Cuándo usar | Cuándo NO usar |
|---|---|---|
| **Close-up (Primer plano)** | Aislar microgesto, mirada, duda o respiración para conectar emocionalmente. | Cuando la emoción ya es evidente en plano medio; no abusar en cada panel. |
| **Extreme close-up (Detalle extremo)** | Foco absoluto en un elemento mínimo con carga simbólica (pupila, gatillo, anillo, herida). | Cuando el detalle carece de peso dramático o causal directo. |
| **Reducción progresiva de plano** | Secuencia de viñetas que se cierran gradualmente aumentando claustrofobia o tensión. | En escenas sin escalada dramática. |
| **Plano general / Establecimiento** | Contexto espacial, arquitectura, soledad, pequeñez frente al entorno. | Cuando la escena requiere intimidad o confidencia. |
| **Fondo blanco (Knockout background)** | Aislar choque cinético puro, impacto físico terminal o shock emocional congelado. | Cuando la ubicación geográfica sigue siendo relevante para entender la acción. |
| **Fondo negro absoluto** | Vacío existencial, amenaza pura, muerte, silencio sepulcral, claroscuro extremo. | Como adorno cosmético "oscuro" sin justificación de tono. |
| **Silueta / Masas negras** | Intimidación, misterio, fuerza brutal o anonimato estilizado de alto contraste. | Cuando la anatomía, identidad o interacción mecánica precisa debe verse nítida. |
| **Espacio negativo intencional** | Sensación de aislamiento, espera, pesadumbre o aire compositivo para respiración. | Cuando la escena demanda saturación informativa o combate cuerpo a cuerpo. |
| **Escorzo 2D dinámico ("3D dibujado")** | Profundidad espacial forzada mediante anatomía escorzada y planos superpuestos. | Jamás sustituir por modelado CGI, PBR o apariencia 3D sintética. |
| **Ruptura de borde (Bleeding)** | Un miembro, arma o escombro invade la calle (gutter) o avanza hacia el lector en clímax. | En cada viñeta; pierde sorpresa si se vuelve rutinario. |
| **Halftone / Trama de imprenta** | Transición de atmósfera, sombras degradadas de cómic clásico en cielos o arquitectura. | Ruido uniforme procedural sobre toda la página. |
| **Debris como vector compositivo** | Escombros, chispas o partículas orientadas físicamente que guían el ojo hacia el beat siguiente. | Polvillo o chispas aleatorias que ensucian la legibilidad. |

### 3.2. Acción, Poderes y Tratamiento de Violencia
- **Tríada de Máximo Impacto:** Para golpes definitivos o irrupciones violentas, combinar: **Escorzo 2D + Fondo Blanco (Knockout) + Ruptura de Borde**.
- **Manifestación de poderes:** El poder proyecta la psicología del personaje (metódico, caótico, exhausto, brutal, quirúrgico). Prohibido saturar la viñeta de destellos o efectos cosméticos genéricos.
- **Efectos visuales con vector:** Toda energía, humo o rastro debe indicar vector, dirección, velocidad y consecuencia física.
- **Violencia e integridad anatómica:**
  - *Seres humanos / humanoides:* Priorizar impacto narrativo sobre gore clínico. Usar estilización: siluetas, sombras duras, ropa desgarrada, salpicadura gráfica contenida, impacto fuera de cuadro o el rostro del testigo.
  - *Robots, androides y mechas:* Destrucción estructural explícita permitida: blindaje partido, cables expuestos, engranajes y chispas.
  - *Monstruos / criaturas alienígenas:* Toleran desmembramiento o daño biológico mayor, manteniendo siempre claridad de lectura.

### 3.3. Worldbuilding y Continuidad
- **Mostrar antes de explicar:** La arquitectura, desgaste, tecnología y vestimenta revelan el mundo sin necesidad de texto expositivo.
- **Lista de verificación de continuidad visual:** Vestuario exacto (daños previos, rasgaduras), accesorios, heridas abiertas o vendajes, armas en mano, hora del día, iluminación motivada y posición relativa en el espacio.
- **Continuidad emocional:** El agotamiento, miedo, dolor físico o furia persisten entre páginas sucesivas. Un personaje que sufrió un colapso en la página anterior no puede aparecer posando triunfal en la siguiente sin un proceso intermedio.

---

## 4. PROTOCOLO DE REFERENCIAS VISUALES Y REFERENCIA DUAL

### 4.1. Regla de oro: Identidad visual ≠ Técnica de render
Un sheet de personaje, concept art o diseño previo define **QUÉ ASPECTO TIENE** el elemento (diseño, rostro, vestimenta, peinado, paleta de colores, accesorios). **NUNCA** define **CÓMO SE DIBUJA O COLOREA** en la página final.
> Las negaciones textuales ("no 3D", "no glossy") fallan si el modelo intenta imitar el acabado de un sheet 3D/digital. Por tanto, se utiliza siempre el **Protocolo de Referencia Dual**.

### 4.2. Protocolo de Referencia Dual (Grupo A + Grupo B)
Cuando se proporcionan imágenes de referencia al generador:
- **Grupo A (Identidad y Canon):** Sheets de personaje, concept art o páginas previas de trama. Aportan exclusivamente: diseño, proporciones corporales, vestimenta, colores locales y props. El modelo descarta su técnica de render, sombras blandas o fondos.
- **Grupo B (Style Anchor / Style Complement):** Páginas publicadas de cómic en House Style. Aportan exclusivamente: peso de línea de tinta negra, entintado manual, cel shading duro de 2-3 tonos, sombras en bloque y acabado seco de imprenta. No aportan personajes ni composición.

### 4.3. Catálogo de Referencias Artísticas de Estilo (Carpeta `DOCS/inspo/diseño`)

| ID | Archivo de Referencia | Rasgos a Tomar (Técnica) | Cuándo Usar | Lo que NUNCA se debe trasladar |
|---|---|---|---|---|
| **D0** | `diseño0_dibujo.jpg` | Contorno de tinta orgánico, micro-expresión humana, peso corporal real, ropa con pliegues estructurales y hachurado manual. | Ancla general para vida cotidiana, conversaciones íntimas, gestos sutiles, primeros planos y sheets de personaje. | Identidad, ropa específica, pose agachada, atardecer o arquitectura de la imagen de muestra. |
| **D1** | `diseño1_dibujo.webp` | Jerarquía coral, figura destacada contra fondo en contraste, perspectiva atmosférica por valores, separación figura/entorno. | Escenas corales, llegadas, encuentros multitudinarios, revelaciones espaciales y fondos complejos. | Niebla genérica, paleta azul obligatoria o composición de paneles exacta. |
| **C3** | `diseño3_color.webp` | Cohesión cromática ambiental, relaciones de valor lumínico, desaturación atmosférica de planos distantes. | Escenas de gran escala espacial, grupos amplios, contemplación o transición climática. (Solo como complemento de color). | Modelado pictórico difuso, pérdida de bordes entintados o desaturación de colores canónicos. |
| **S5** | `diseño5_tension_sombras.webp` | Masas de negro puro dominantes, claroscuro gráfico, retención de detalle, acentos lumínicos limitados a mirada y manos. | Amenaza latente, sospecha, misterio, sigilo, confrontación fría o revelaciones inquietantes. | Monstruosidad cosmética fuera de lugar, negrura impenetrable que impida entender la acción. |
| **A9** | `diseño9 _accion 3d.webp` | Escorzo anatómico extremo en 2D, vectores de fuerza tangibles, líneas de impacto direccionales, solidez física y apoyo. | Combate cuerpo a cuerpo, saltos, colisiones, persecuciones y dinamismo físico máximo. | El personaje de muestra (Spider-Man), telarañas o render 3D sintético ("3D dibujado" = perspectiva 2D). |
| **C10** | `diseño10_color.jpg` | Grandes masas de color gráfico en contraste cálido/frío, luz en silueta, respiración por espacio negativo, texturado localizado. | Establecimiento urbano, pausas contemplativas, portadas, cierres de escena y puestas de sol/amaneceres gráficos. | Iluminación de atardecer forzada si la escena es nocturna o diurna, pérdida de solidez en figuras. |

#### Tabla de selección rápida de estilo
- **Conversación / Cotidianeidad:** `Style Anchor: D0` (+ `Style Complement: C10` solo si la luz ambiental es clave).
- **Llegada / Escena coral:** `Style Anchor: D1` + `Style Complement: C3`.
- **Tensión / Amenaza / Misterio:** `Style Anchor: D0 o D1` + `Style Complement: S5`.
- **Acción física y acrobática:** `Style Anchor: D0` + `Style Complement: A9`.
- **Pausa poética / Establecimiento urbano:** `Style Anchor: D0` + `Style Complement: C10`.
- **Sheet de personaje:** `Style Anchor: D0` (o `D1` para silueta y volumen limpio).

---

## 5. SELECCIÓN DE RENDER MODE

Se debe elegir obligatoriamente uno de los dos modos según el peso del beat dominante de la página:

### Modo 1: Base Render — Classic Cel Shading (Default de la serie)
- **Ámbito:** Diálogos, investigación, cotidianeidad, transiciones, humor, viajes, peleas tácticas regulares, páginas de desarrollo continuo.
- **Técnica:** Tinta negra tradicional con línea variable orgánica, color plano de cómic, cel shading estricto de 2 a 3 niveles tonales con sombras de borde duro. Máximo un highlight amplio por plano. Acabado completamente seco de imprenta.
- **Bloque técnico a inyectar:** **76A** (o **77A** si se requiere formato compacto).

### Modo 2: Emphasis Render — Cinematic Hard-Edged Cel Shading
- **Ámbito:** Splash pages determinantes, clímax de capítulo, transformaciones irreversibles, revelación de antagonistas principales, muerte de peso crucial, golpe final de arco.
- **Técnica:** Mantiene la base estructural de tinta y sombras duras de cel shading. Incorpora de forma motivada: rim lights selectivas, reflejos de color ambiental, mayor profundidad atmosférica y bloom controlado exclusivamente alrededor de fuentes emisivas reales. Nunca se convierte en pintura blanda ni en CGI.
- **Bloque técnico a inyectar:** **76B** (o **77B** si se requiere formato compacto).

**Pregunta de diagnóstico:** ¿Esta página amerita un shock visual y peso marcadamente superior al resto del cómic?  
- Si no es inequívocamente sí → **Base Render**.  
- En caso de duda → **Base Render**. (La sobreutilización de Emphasis satura la serie y destruye el contraste dramático).

---

## 6. EL HOUSE STYLE ELSEFRAME (ESPECIFICACIÓN TÉCNICA)

### 6.1. Definición general
Cómic americano 2D, con apariencia de dibujo y entintado manual tradicional. Línea de tinta negra orgánica de calibre variable, anatomía expresiva y estilizada con siluetas nítidas y legibles. Coloreo gráfico contenido mediante cel shading duro de 2 o 3 niveles tonales por superficie. Prohibido terminantemente el modelado 3D, sombreado por gradientes difusos (airbrush), texturas fotorrealistas y brillos plásticos.

### 6.2. Reglas visuales obligatorias
1. **Entintado:** Jerarquía visual clara: contorno principal definido, líneas internas moduladas y masas de negro puro para anclar sombras y volumen. Hachurado artesanal selectivo permitido.
2. **Cel Shading y Sombras:** Las sombras describen volumen, dirección de luz y emoción dramática. Prohibido el degradé continuo que suavice la figura humana como maniquí digital.
3. **Acabado Seco (Anti-Gloss):** Prohibido el brillo especular disperso, los destellos de estrella ("sparkles") y el aspecto sudoroso/plastificado ("wet-look"). Máximo **un** brillo amplio y delimitado por superficie reflectante real (metal, vidrio pulido).
4. **Iluminación Motivada:** Cada haz de luz proviene de una fuente física identificable en la escena (farol, sol, portal, pantalla), nunca de focos de estudio artificiales.
5. **Profundidad 2D sin CGI:** La distancia se construye mediante perspectiva gráfica, solapamiento de figuras, variación de escala y contraste atmosférico (figuras lejanas con menor contraste y línea más delgada).
6. **Espacio para rotulación posterior:** La composición de las viñetas debe contemplar zonas despejadas ("zonas calmas" o aire compositivo) donde el rotulista colocará posteriormente los globos de diálogo y cartelas narrativas.

---

## 7. RESTRICCIONES DURAS Y EXCEPCIONES TIPOGRÁFICAS

### 7.1. Cláusula universal de restricciones (Negative Prompting)
Salvo las dos excepciones canónicas declaradas abajo, todo prompt debe aplicar de forma irrevocable:

> **Universal Negative Restrictions:**  
> No 3D render, no CGI look, no photorealism, no glossy overrendering, no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen, no painterly airbrush finish, no smooth gradient modeling on figures, no gratuitous bloom without real emissive source, no uniform procedural noise, no photographic microtextures, no speech bubbles, no narrative captions, no generated text, no readable letters or typography, no watermarks, no artist signatures.

### 7.2. Excepciones Controladas para Texto Generado
Existen únicamente dos casos en todo el ecosistema Elseframe donde se autoriza la generación de texto dentro de la imagen:

1. **Excepción de Contraportada Editorial (Bloque 76E):**
   - Autoriza generar exclusivamente el copy editorial suministrado (título de saga, subtítulo, sinopsis/recap, créditos y pie legal).
   - El texto debe reproducirse de forma literal e idéntica, sin inventar, resumir ni corregir ortografía.
2. **Excepción de Placa de Locación (Bloque 76F):**
   - Autoriza generar una tarjeta de establecimiento de locación tipográfica dentro del primer plano general tras un cambio real de escenario.
   - Solo incluye el nombre exacto canónico de la locación y un calificador geográfico breve (ej. *THE CITADEL // LOWER SECTOR*). No se repite en páginas siguientes en la misma locación.

*Ninguna otra pieza (páginas narrativas estándar, portadas, sheets o concept art) puede contener texto generado de ninguna índole.*

---

## 8. BLOQUES TÉCNICOS OFICIALES (TEXTO EN INGLÉS PARA INYECCIÓN DIRECTA)

Estos bloques se copian textualmente en la sección final del prompt generado para garantizar el render exacto en el motor de imagen:

### Bloque 76A — Base Render (Versión Completa Estándar)
```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive stylized anatomy, clear readable silhouettes, controlled medium detail, hard graphic shadow shapes, two to three dominant tonal levels per surface, selective hatching or subtle print-like texture, restrained environmental color. Selective material-correct highlights, minimal bloom, glow only from genuinely emissive sources. Maximum one broad, deliberate highlight per material plane — no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen. Shadow does real narrative work through hard-edged shapes describing volume, light direction and mood; the finish should read as dry, matte comic-print ink and flat color, not photographic gloss. Strong narrative composition and depth through perspective, overlap and foreshortening. No photorealism, no CGI, no 3D render, no glossy overrendering, no uniform procedural noise, no photographic microtexture, no painterly airbrush modeling on figures, no speech bubbles, no captions, no text, no readable signage, no watermarks.
```

### Bloque 76B — Emphasis Render (Versión Completa Estándar)
```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive anatomy, clear silhouettes, bold black shadow masses, localized hatching or print-like texture. Hard-edged graphic shading remains the structural base. Use selective rim light, motivated reflected color, controlled bloom around genuinely bright sources, stronger atmospheric depth and deliberate color separation. Even with richer lighting, keep highlights to one broad, deliberate shape per material plane — no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen; the finish must still read as dry ink-and-flat-color, not photographic gloss. The result must remain graphic and ink-led, never painterly or 3D. No photorealism, no CGI, no glossy overrendering, no uniform noise filter, no photographic microtexture, no gratuitous glow, no speech bubbles, no captions, no text, no readable signage, no watermarks.
```

### Bloque 77A — Base Render (Versión Sintética / Compacta)
```text
2D American comic-book artwork with a hand-drawn, hand-inked appearance; organic variable-width black linework, expressive stylized anatomy, clear silhouettes, controlled medium detail, hard graphic shadow shapes, two to three dominant tonal levels, selective hatching or subtle print-like texture, restrained environmental color and material-correct highlights. Maximum one broad highlight per material plane — no scattered specular dots, no sparkle, no wet-look sheen; dry matte comic-print finish. Soft transitions only in atmosphere, distance, energy or localized light. No 3D, CGI, photorealism, glossy overrendering, uniform noise, speech bubbles, text or watermarks.
```

### Bloque 77B — Emphasis Render (Versión Sintética / Compacta)
```text
2D American comic-book artwork with a hand-drawn, hand-inked appearance; organic variable-width black linework, expressive anatomy, clear silhouettes, bold black masses and localized hatching or print-like texture. Hard-edged graphic shading remains the structural base; selective soft transitions may enrich atmosphere, skin, fog, smoke, energy, reflected color and bloom. Even with richer lighting, keep highlights to one broad shape per material plane — no scattered specular dots, no sparkle, no wet-look sheen. Cinematic but ink-led, with motivated rim light and controlled glow. No 3D, CGI, photorealism, glossy or painterly figure modeling, uniform noise, speech bubbles, text or watermarks.
```

### Bloque 76C / 77C — Regeneración de Sheet Canónico (Identidad + Técnica)
```text
TWO REFERENCE IMAGES ARE ATTACHED — Reference 1 (old sheet): identity only, preserve exact face, anatomy, costume design, proportions and local colors, but discard its rendering style. Reference 2 (style page): technique only, emulate line weight, ink handling, graphic cel-shading and dry print finish, discard its characters and layout. Redraw fully in Elseframe House Style: 2D hand-drawn American comic-book art, crisp organic black ink outlines, flat colors with hard two-tone cel-shading, dry matte texture. No 3D, no CGI, no glossy skin, no airbrushed shading.
```

### Bloque 76D — Referencia Dual para Páginas Narrativas
```text
REFERENCE USAGE INSTRUCTION:
Reference 1 (attached sheet/concept art): Strictly provides visual identity, canonical costume, physical features and color scheme. Discard its rendering technique.
Reference 2 (attached published style page): Strictly acts as Style Anchor for inking technique, hard cel-shading planes, line-weight modulation and matte graphic finish. Discard its characters, storyline and panel layout.
Redraw all elements in the Elseframe House Style according to the specified Render Mode.
```

### Bloque 76E — Cláusula Editorial de Contraportada (Texto Exacto)
```text
BACK COVER TYPOGRAPHY EXCEPTION — This is the only Elseframe production piece allowed to generate extended editorial copy as part of the final image. Override only the "no text" clause of the selected House Style block for the exact copy supplied under BACK COVER COPY. Render every supplied word exactly once, preserving spelling, accents, punctuation, capitalization and declared hierarchy. Typography, recap, credits and image modules must form one intentional editorial composition. Do not invent, autocomplete, paraphrase, translate or spell-correct any text. No placeholder text, lorem ipsum, pseudo-lettering, speech bubbles, in-scene narrative captions, readable environmental signage or additional logos. If the final copy is missing or contradictory, stop and request it before generation. All other House Style restrictions remain fully active.
```

### Bloque 76F — Cláusula de Placa de Locación (Location Card)
```text
LOCATION ESTABLISHING CARD EXCEPTION — This narrative page opens after a real location change and may generate only the exact canonical location label supplied under LOCATION CARD COPY. Place it once inside the first wide establishing panel as integrated cinematic editorial typography, never inside a caption box or speech bubble. Use one primary location name and at most one short geographic qualifier. Preserve spelling, accents, punctuation and capitalization exactly. The label must support recognition without covering characters, landmarks or the focal path. Do not imitate MCU/Marvel trade dress or an existing franchise title card; use an original consistent Elseframe location-card system. Do not repeat the card on following pages that remain in the same location. Do not infer hidden affiliations or spoiler information. No other generated text is allowed. All other House Style restrictions remain fully active.
```

---

## 9. WORKFLOW OPERATIVO DEL CHAT 2 (12 PASOS)

Al recibir una solicitud o un *Constructo Narrativo* de Chat 1, el Chat 2 sigue rigurosamente este orden:

1. **Recepción del insumo:** Verificar que la escena tenga contexto, dueño emocional, progresión y beats claros.
2. **Inventario visual canónico:** Listar todo elemento visible que posea referencia (personajes con variante de vestimenta, locación exacta, vehículos, armas/props recurrentes).
3. **Asignación de referencias:** Determinar qué imágenes se adjuntan:
   - Grupo A: Sheets de identidad de personajes/props.
   - Grupo B: Style Anchor (`D0`, `D1`) y Style Complement (`C3`, `S5`, `A9`, `C10`).
4. **Selección del Render Mode:** Determinar Base Render o Emphasis Render según el beat dominante.
5. **Elección del recurso visual dominante:** Seleccionar al menos uno de la Tabla 3.1 y fundamentarlo en positivo según la emoción.
6. **Diseño de arquitectura de página:** Definir cantidad de paneles, proporciones relativas, jerarquía y justificación de cualquier viñeta horizontal.
7. **Resolución de beats viñeta por viñeta:** Definir plano de cámara, orientación, sujetos, acción en presente continuo, dirección de fuerza y apoyos corporales.
8. **Planificación de zonas de rotulación:** Garantizar que la composición deje áreas despejadas para los diálogos posteriores.
9. **Verificación de continuidad:** Cotejar heridas, vestimenta rasgada, objetos sostenidos e iluminación respecto a páginas previas.
10. **Registro de información retenida:** Asegurar que secretos, rostros ocultos o poderes aún no manifestados no aparezcan en la imagen.
11. **Ensamblaje del prompt final:** Redactar el bloque en inglés estructurado con cabecera de referencias, escena panel por panel y bloque técnico 76/77 expandido.
12. **Entrega de diálogos desglosados:** Entregar fuera del bloque gráfico los diálogos y cartelas numerados para rotulación posterior.

---

## 10. PLANTILLA MAESTRA DE PROMPT UNIVERSAL

Esta es la estructura exacta que emite el Chat 2 para cada página de cómic:

```text
[PAGE PROMPT START]

Characters appearing on this page:
- [Character Name — exact costume variant, physical state, emotional demeanor, reference file]

Location appearing on this page:
- [Canonical location name, sector, specific lighting and environment conditions]

Vehicles / props appearing on this page:
- [Canonical recurring objects, weapons in hand, or None]

Visual Reference Protocol:
- Identity References (Group A): [List of sheets] strictly define character identity, design, facial features, costume details, and local colors. Discard their digital/3D rendering.
- Style Anchor (Group B): [e.g. D0_drawing / D1_drawing] strictly provides hand-inked line weight, organic contours, and expressive anatomy.
- Style Complement (Group B): [e.g. S5_shadows / A9_action / C10_color, or None] strictly provides [specific technique, e.g. bold black masses / dynamic foreshortening]. Discard its narrative content and layout.
All elements must be redrawn completely in the Elseframe House Style.

Render Mode:
- [Base Render — Classic Cel Shading / Emphasis Render — Cinematic Hard-Edged Cel Shading] (Reason: [brief justification of dominant beat])

Dominant Visual Device:
- [Chosen device from Table 3.1, declared positively, e.g.: Extreme close-up on the trembling hand to emphasize the emotional breaking point]

CANVAS & ARCHITECTURE:
- Canvas Aspect Ratio: Comic vertical standard ~0.71 (1055x1491 px) or 2:3 (1024x1536 px).
- Panel Layout: [Number] panels. Reading path: Top-to-bottom.
- Panel 1: [Vertical / Horizontal (reason)] — [Dominant / Equal / Insert].
- Panel 2...N: [Orientation and relative size].
- Lettering Clearance: Maintain uncluttered negative space / calm background zones in designated panel corners for subsequent dialogue lettering.

GLOBAL COMPOSITION & LIGHTING:
[Overall page mood, key light source, color temperature, relationship between panels, visual rhythm].

PANEL BREAKDOWN:

PANEL 1:
- Framing & Angle: [e.g., Vertical Close-Up, eye-level]
- Characters & Staging: [Who is in the frame, exact position, physical posture, contact points]
- Action & Expression: [Single specific frozen instant, physical reaction, gaze direction]
- Environment & Depth: [Foreground / midground / background details, simplified silhouettes if distant]
- Canon Continuity: [Costume damage, holding specific prop]

PANEL 2...N:
- Framing & Angle: [...]
- Characters & Staging: [...]
- Action & Expression: [...]
- Environment & Depth: [...]
- Canon Continuity: [...]

CONTINUITY REQUIREMENTS:
[Mandatory physical details that must stay consistent with previous pages: wounds, dirt, clothing tears, lighting direction].

WITHHELD INFORMATION:
[Explicit details that MUST NOT appear yet: mysterious assailant's face stays in complete silhouette, power remains dormant].

HOUSE STYLE FINISH & RESTRICTIONS:
[Insert literally block 76A or 76B here. If back cover, append 76E with copy. If location opening, append 76F with copy].

[PAGE PROMPT END]
```

---

## 11. ENTREGA DE DIÁLOGOS Y TEXTOS EDITORIALES

Al terminar el prompt visual, el Chat 2 entrega por separado los textos para rotulación. **Nunca se colocan dentro del prompt gráfico para evitar que el generador intente dibujarlos como texto fallido:**

```markdown
### Diálogos para rotulación (Lettering Script)

- **Panel 1:**
  - **[Personaje]:** "[Texto breve, fiel a su voz canónica y subtexto]."
- **Panel 2:**
  - **[Personaje]:** "[...]"
  - *(Cartela narrativa opcional)*: "[...]"
```

---

## 12. CHECKLIST FINAL DE APROBACIÓN ANTES DE ENVIAR A GENERACIÓN

Antes de entregar el prompt a producción, verificar cada casilla:

- [ ] **Cabecera de referencias completa:** ¿Están listados todos los personajes, locaciones y props con su variante exacta?
- [ ] **Protocolo Dual explícito:** ¿Queda claro que los sheets aportan diseño/identidad y las referencias de estilo aportan técnica/tinta?
- [ ] **Render Mode fundamentado:** ¿Se eligió Base Render o Emphasis Render de acuerdo al peso dramático del beat?
- [ ] **Recurso visual en positivo:** ¿Se declaró al menos un recurso dominante de la Tabla 3.1 justificando su valor narrativo?
- [ ] **Paneles verticales por defecto:** ¿Toda viñeta horizontal cuenta con justificación dramática/espacial expresa?
- [ ] **Acción físicamente legible:** ¿Se definieron apoyos, contactos corporales y trayectorias claras en lugar de "poses de pose"?
- [ ] **Zonas de rotulación previstas:** ¿La composición deja aire para la futura colocación de globos de diálogo?
- [ ] **Bloque técnico expandido al final:** ¿Está copiado íntegramente el bloque 76A o 76B en inglés puro al final del prompt?
- [ ] **Restricciones consolidadas:** ¿El prompt concluye con la prohibición universal de 3D, CGI, brillos especulares, gradientes de aerógrafo y globos de texto?
- [ ] **Diálogos separados:** ¿Los textos de lectura están fuera del bloque técnico de generación?
