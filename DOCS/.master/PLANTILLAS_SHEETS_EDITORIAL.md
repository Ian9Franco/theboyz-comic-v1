# PLANTILLAS MAESTRAS DE PRODUCCIÓN: SHEETS, LOCACIONES, PORTADAS Y CONTRAPORTADAS (ELSEFRAME COMICS)

**Rol de este documento:** Manual autosuficiente de plantillas técnicas para piezas editoriales y de diseño canónico que **no son** páginas narrativas secuenciales de viñetas.  
**Piezas cubiertas:**
1. **Sheets de Personaje:** Nuevo desde cero (1A), actualización de estilo sin cambios de diseño (1B) y actualización con cambios de diseño canónico (1C).
2. **Sheets de Locación y Vehículos:** Vistas panorámicas, planos secundarios e inserts arquitectónicos/mecánicos.
3. **Portadas de Saga o Número:** Composición icónica de impacto unitario en Emphasis Render con reserva de aire tipográfico.
4. **Contraportadas Editoriales (Back Covers):** Composición editorial integrada (recap, créditos, títulos) con copy exacto inyectado.

---

## 1. ESPECIFICACIONES TÉCNICAS Y REGLAS GENERALES

- **Acabado House Style:** Cómic americano 2D entintado a mano, línea orgánica variable, cel shading duro de 2 a 3 niveles tonales, acabado seco de imprenta (sin brillos dispersos, sin wet-look, sin gradientes suaves de aerógrafo).
- **Dimensiones de Lienzo y Aspect Ratio:**
  - **Portadas y Contraportadas:** Formato vertical de cómic estándar **~0.71 (1055 × 1491 px)** o **2:3 / ~0.67 (1024 × 1536 px)**, con mínimo 1500–1600 px en el eje vertical.
  - **Sheets de Personaje (3 paneles lado a lado):** Formato panorámico **16:9** o **4:3**, o cuadrado **1:1** según distribución de vistas.
  - **Sheets de Locación / Vehículos:** Formato apaisado **16:9** o **4:3**.
- **Formatos de archivo:** Generación nativa master en **PNG** sin compresión destructiva; conversión a **WebP** (calidad 85%) para distribución web.
- **Regla de texto:** Los sheets, locaciones, vehículos y portadas **tienen prohibido generar texto o logos legibles**. La **contraportada es la única excepción** de este documento: genera exclusivamente el copy editorial suministrado de forma exacta y literal mediante el bloque **76E**.

---

## 2. SHEETS DE PERSONAJES

### Plantilla 1A: Personaje Nuevo (Diseño desde cero sin referencias previas)
*Usar cuando se crea un personaje por primera vez a partir de descripción puramente textual.*

```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive stylized anatomy, clear readable silhouettes, controlled medium detail, hard graphic shadow shapes, two to three dominant tonal levels per surface, selective hatching or subtle print-like texture, restrained environmental color. Selective material-correct highlights, minimal bloom, glow only from genuinely emissive sources. Maximum one broad, deliberate highlight per material plane — no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen. Shadow does real narrative work through hard-edged shapes describing volume, light direction and mood; the finish should read as dry, matte comic-print ink and flat color, not photographic gloss. Strong narrative composition and depth through perspective, overlap and foreshortening. No photorealism, no CGI, no 3D render, no glossy overrendering, no uniform procedural noise, no photographic microtexture, no painterly airbrush modeling on figures, no speech bubbles, no captions, no text, no readable signage, no watermarks.

CHARACTER DESIGN BRIEF — no reference image, design from description only:
- Name: [Nombre del personaje]
- Species / Origin: [Especie, procedencia o afiliación]
- Apparent Age: [Rango etario]
- Physical Build & Stature: [Contextura corporal precisa, altura, silueta]
- Facial Features: [Rostro, ojos, cejas, cicatrices, vello o rasgos distintivos]
- Hair: [Corte, textura, color y masa de cabello o ausencia total]
- Color Palette: [2 a 3 colores dominantes controlados + 1 color de acento]
- Costume / Uniform: [Corte, capas, prendas, materiales mate, armadura o telas]
- Gear & Weapons: [Accesorios, props en funda, visores, dispositivos canónicos]
- Personality in Pose: [Actitud que debe traslucir su lenguaje corporal]

Do NOT default to generic superhero proportions. Match body type, age and silhouette to the brief above exactly.

LAYOUT — three isolated panels on a single flat sheet, plain neutral flat-color background, clear gutters separating the panels:
1. FULL BODY (Front View): Neutral standing pose, full costume and equipment visible, clean readable silhouette.
2. FULL BODY (Three-Quarter or Side View): Slight posture change, same character, exact same costume and gear.
3. FACE / HEAD CLOSE-UP: Shoulders-up portrait, expressive acting matching personality, precise facial cel-shading: base skin color + one hard shadow shape + minimal highlight only where anatomically necessary.

FINISH: Flat color fields, one hard shadow per surface plane, optional single secondary deep shadow. No texture pass, no noise/grain/speckle/scratches. No photographic skin textures.
```

---

### Plantilla 1B: Actualización de Sheet Existente (Mismo diseño, nuevo House Style)
*Usar para migrar un sheet antiguo al House Style actual sin cambiar nada del diseño del personaje.*

```text
TWO REFERENCE IMAGES ARE ATTACHED — EACH HAS A DIFFERENT, STRICT PURPOSE:

REFERENCE 1 — OLD CHARACTER SHEET (identity baseline, outdated rendering):
Preserve exact character design, facial identity, hairstyle, proportions, anatomy, costume structure, gear and canonical color palette. Do NOT copy its digital 3D finish, soft airbrushed lighting, gradient shading, background or studio reflections — deprecated, fully discarded.

REFERENCE 2 — PUBLISHED STYLE PAGE (rendering and inking technique):
Use strictly for rendering technique: organic black ink contours, line weight modulation, two-tone hard-edged cel shading, and dry matte print finish. Do NOT copy any characters, poses or story layout from Reference 2.

LAYOUT — three isolated panels on a single flat sheet, plain neutral flat-color background, clear gutters:
1. FULL BODY — front view, clean standing pose, full outfit and equipment visible.
2. FULL BODY — three-quarter or profile view, slight pose variation, exact same outfit and colors.
3. HEAD CLOSE-UP — shoulders-up view, clear facial features, hard graphic shadow shapes.

FINISH & RESTRICTIONS:
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink linework, clear silhouettes, flat colors with hard two-tone cel-shading, dry matte comic-print texture. Maximum one broad highlight per plane — no scattered specular highlight dots, no sparkle, no wet-look sheen, no 3D render, no CGI, no painterly airbrushing, no speech bubbles, no text, no watermarks.
```

---

### Plantilla 1C: Actualización de Sheet con Modificaciones Canónicas
*Usar cuando el personaje existente cambia de traje, adquiere cicatrices, nuevo equipo o madura físicamente.*

```text
TWO REFERENCE IMAGES ARE ATTACHED:

REFERENCE 1 — OLD CHARACTER SHEET (identity baseline):
Use for baseline facial identity, proportions, and core physical features. Discard its rendering style completely.

REFERENCE 2 — STYLE PAGE (rendering technique):
Use strictly for ink handling, line weight, two-tone graphic cel-shading and dry matte finish.

MODIFICATIONS TO APPLY — HIGHEST PRIORITY, OVERRIDE REFERENCE 1 WHERE THEY CONFLICT:
- [Modificación 1: ej. nuevo traje táctico con hombreras blindadas oscuras]
- [Modificación 2: ej. cicatriz vertical sobre el ojo izquierdo]
- [Modificación 3: ej. cabello más corto y desordenado]
[Todo elemento no listado arriba se mantiene idéntico a Reference 1.]

PRECEDENCE:
1. Modifications listed above ALWAYS win.
2. Design identity from Reference 1 for everything not modified.
3. Rendering technique from Reference 2 governs how everything is drawn.

LAYOUT — three isolated panels on a single flat sheet, plain neutral flat-color background:
1. FULL BODY — front view, displaying updated costume and equipment clearly.
2. FULL BODY — three-quarter view, displaying full updated silhouette.
3. HEAD CLOSE-UP — shoulders-up portrait featuring the updated facial details/scars with clean cel-shading.

FINISH & RESTRICTIONS:
2D American comic-book art, hand-inked line work, two to three tonal levels per surface, hard graphic shadow shapes, dry matte print finish. No 3D, no CGI, no glossy skin, no airbrushed gradients, no text, no watermarks.
```

---

## 3. SHEETS DE LOCACIONES Y VEHÍCULOS

### Plantilla 2A: Sheet de Locación (Interior o Exterior)
*Define la arquitectura, materiales y atmósfera espacial de un escenario clave.*

```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, clear readable silhouettes, controlled medium detail, hard graphic shadow shapes, two to three dominant tonal levels per surface, restrained environmental color. Maximum one broad highlight per plane — no scattered specular highlight dots, no sparkle, no wet-look sheen. Dry matte comic-print ink and flat color finish. Depth achieved through linear perspective, overlap and value contrast. No photorealism, no CGI, no 3D render, no glossy overrendering, no uniform procedural noise, no photographic microtextures, no readable signs or text, no watermarks.

LOCATION DESIGN BRIEF:
- Canonical Name: [Nombre exacto de la locación]
- Type / Sector: [Interior, exterior urbano, complejo subterráneo, ruinas, etc.]
- Architectural Style: [Brutalista, alta tecnología modular, gótico industrial, etc.]
- Scale & Key Landmarks: [Dimensiones aparentes, estructuras identitarias en el espacio]
- Dominant Materials & Palette: [Hormigón, metal oxidado, aleación oscura, etc.]
- Canonical Lighting Sources: [Farolas frías, aberturas cenitales, cables luminiscentes, etc.]
- State of Wear / Damage: [Desgaste habitual, marcas de combate previo, escombros]

LAYOUT — multi-panel architectural reference on a neutral background:
1. WIDE ESTABLISHING VIEW: Dominant panoramic angle establishing the entire space, volume, perspective grid and dominant light direction.
2. SECONDARY ANGLE: Alternate viewpoint (opposite corner or exterior-to-interior transition) revealing spatial depths not visible in panel 1.
3. DETAIL INSETS: 1 to 2 close-up frames on distinctive functional or cultural elements (airlocks, machinery consoles, emblems, architectural ornamentation).

SIGNAGE RULE: Represent environmental signage and screens as flat, abstract graphic color shapes only. NO readable typography, letters, symbols or logos.
```

---

### Plantilla 2B: Sheet de Vehículo, Nave o Maquinaria Recurrente
*Define el diseño vehicular, silueta de casco y detalles funcionales.*

```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive stylized anatomy/mechanical design, clear silhouettes, hard graphic shadow shapes, two to three dominant tonal levels per plane, restrained local colors. Maximum one broad, deliberate highlight per metal plane — no scattered specular highlight dots, no sparkle, no wet-look sheen; dry matte comic-print ink and flat color finish. No photorealism, no CGI, no 3D render, no uniform noise, no readable text, no watermarks.

VEHICLE DESIGN BRIEF:
- Canonical Name / Model: [Nombre y tipo de vehículo]
- Scale & Proportions: [Dimensiones relativas, número de tripulantes]
- Silhouette & Hull Construction: [Forma general, líneas angulares o curvas, propulsores]
- Color Palette & Markings: [Colores primarios de blindaje, patrones gráficos de identificación]
- Canonical Wear / Battle Damage: [Abolladuras, quemaduras de reentrada, desgaste de pintura]
- Cockpit / Interior (if visible): [Disposición de mandos básicos y cúpula]

LAYOUT:
1. EXTERIOR THREE-QUARTER HERO VIEW: Full vehicle from dynamic three-quarter front angle, showcasing main volume and drive systems on a neutral background.
2. EXTERIOR SECOND ANGLE: Rear view displaying engines/thrusters, or profile view showing full silhouette.
3. DETAIL INSETS: Close-up on weapon hardpoints, landing gear, cockpit canopy or specific mechanical systems.

FINISH: Flat color planes with hard cel-shadows. Metal is described purely by shape, line-work, one hard shadow and at most one broad highlight. No photographic metal textures.
```

---

## 4. PORTADA DE SAGA O NÚMERO (COVER)

Una portada es una **imagen unitaria de máximo peso icónico**, ejecutada habitualmente en **Emphasis Render**, sin subdivisión de viñetas, con espacios reservados para la cabecera y créditos que se montan en postproducción.

```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive stylized anatomy, clear iconic silhouettes, bold black shadow masses, localized hatching. Hard-edged graphic cel-shading remains the structural base. Use selective rim light, motivated reflected color, controlled bloom around genuinely bright sources, stronger atmospheric depth and deliberate color separation. Keep highlights to one broad shape per material plane — no scattered specular dots, no sparkle, no wet-look sheen; the finish must read as dry ink and rich flat color, never photographic gloss or painterly 3D. No photorealism, no CGI, no glossy overrendering, no uniform noise filter, no photographic microtextures, no gratuitous glow, no speech bubbles, no text, no logos, no watermarks.

COVER BRIEF:
- Characters Appearing: [Personajes con variante exacta de traje, postura icónica y estado]
- Dominant Emotional Concept: [Confrontación definitiva, caída solitaria, revelación cósmica, etc.]
- Focal Hierarchy: [Un único sujeto o elemento dominante absoluto que ancla la mirada]
- Background & Environment: [Entorno simbólico o dramático subordinado al foco principal]

COMPOSITION RULES:
Single unified full-bleed illustration, no panel divisions, no chronological story beats. Iconic poster-like staging with an unmistakable focal point readable at thumbnail size. Depth constructed through forced perspective, silhouette overlap and value contrast.

CRITICAL RESERVED SPACE (LETTERING CLEARANCE):
- Upper Section: Maintain a visually calm, uncluttered zone across the top 20% of the canvas reserved for the comic title / saga logo lockup.
- Lower Section: Maintain a clean, calm margin at the bottom 10% for credits and legal folio.
- Do NOT place crucial faces, eyes, hands or climactic focal points inside these reserved zones.
- GENERATE ZERO TEXT: Do NOT draw logos, letters, issue numbers or barcodes. These are added strictly in layout software.
```

---

## 5. CONTRAPORTADA EDITORIAL (BACK COVER)

La contraportada es la **única pieza de todo el sistema Elseframe autorizada a generar copy tipográfico extenso dentro de la imagen**. El título, sinopsis (recap), créditos editoriales y los módulos visuales forman un solo diseño editorial indisoluble.

```text
[Seleccionar 76A para Base Render o 76B para Emphasis Render según el dramatismo de la contraportada]

BACK COVER TYPOGRAPHY EXCEPTION (BLOCK 76E):
BACK COVER TYPOGRAPHY EXCEPTION — This is the only Elseframe production piece allowed to generate extended editorial copy as part of the final image. Override only the "no text" clause of the selected House Style block for the exact copy supplied under BACK COVER COPY. Render every supplied word exactly once, preserving spelling, accents, punctuation, capitalization and declared hierarchy. Typography, recap, credits and image modules must form one intentional editorial composition. Do not invent, autocomplete, paraphrase, translate or spell-correct any text. No placeholder text, lorem ipsum, pseudo-lettering, speech bubbles, in-scene narrative captions, readable environmental signage or additional logos. If the final copy is missing or contradictory, stop and request it before generation. All other House Style restrictions remain fully active.

EDITORIAL PROFILE:
[Elegir uno de los dos perfiles canónicos:]
- Profile A (Asymmetric Negative Space / Secret Wars Style): Massive bold black ink silhouette / icon on a clean stark white background + prominent title + two clean vertical columns (left: technical credits; right: justified recap narrative block).
- Profile B (Modular Grid / Institutional Homage Style): Heavy black section banner at top + 1 to 2 contained editorial image modules framed in thin black borders + integrated text columns and quotes below.

BACK COVER BRIEF:
- Tone of Recap: [e.g. Somber aftermath, rising cosmic threat, cold tactical debrief]
- Relationship of Text to Image: [Image frames the text / text balances heavy graphic silhouette]

BACK COVER COPY — FINAL AND EXACT (MANDATORY):
- Eyebrow / Section Label: [Exact text, e.g. "ELSEFRAME COMICS PRESENTS", or None]
- Main Title: [Exact title of the saga or issue]
- Recap Body Text: [Exact narrative recap paragraphs — render word for word]
- Closing Tagline: [Exact closing line, e.g. "THE BATTLE BEGINS HERE.", or None]
- Credits Block: [Exact names and roles: Writer, Artist, Colorist, Editor, or None]
- Folio / Issue Marker: [Exact issue number and date code, or None]

COPY INTEGRATION RULES:
Render every single word provided above exactly once. Maintain strict typographical hierarchy: Section Label → Main Title → Recap Body → Closing Tagline → Credits. Text must remain sharply legible against high-contrast backgrounds; image elements must never overlap or obscure letterforms. No fake filler text, no lorem ipsum, no speech bubbles. All other House Style restrictions remain active.
```

---

## 6. BLOQUES TÉCNICOS INTEGRADOS PARA COPIA RÁPIDA

Para comodidad operativa, estos son los bloques canónicos en inglés listos para inyección:

### Bloque 76A — Base Render (House Style)
```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive stylized anatomy, clear readable silhouettes, controlled medium detail, hard graphic shadow shapes, two to three dominant tonal levels per surface, selective hatching or subtle print-like texture, restrained environmental color. Selective material-correct highlights, minimal bloom, glow only from genuinely emissive sources. Maximum one broad, deliberate highlight per material plane — no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen. Shadow does real narrative work through hard-edged shapes describing volume, light direction and mood; the finish should read as dry, matte comic-print ink and flat color, not photographic gloss. Strong narrative composition and depth through perspective, overlap and foreshortening. No photorealism, no CGI, no 3D render, no glossy overrendering, no uniform procedural noise, no photographic microtexture, no painterly airbrush modeling on figures, no speech bubbles, no captions, no text, no readable signage, no watermarks.
```

### Bloque 76B — Emphasis Render (House Style)
```text
2D hand-drawn American comic-book artwork, entirely hand-inked, organic variable-width black ink contours, expressive anatomy, clear silhouettes, bold black shadow masses, localized hatching or print-like texture. Hard-edged graphic shading remains the structural base. Use selective rim light, motivated reflected color, controlled bloom around genuinely bright sources, stronger atmospheric depth and deliberate color separation. Even with richer lighting, keep highlights to one broad, deliberate shape per material plane — no scattered specular highlight dots, no sparkle or starburst highlights, no wet-look sheen; the finish must still read as dry ink-and-flat-color, not photographic gloss. The result must remain graphic and ink-led, never painterly or 3D. No photorealism, no CGI, no glossy overrendering, no uniform noise filter, no photographic microtexture, no gratuitous glow, no speech bubbles, no captions, no text, no readable signage, no watermarks.
```
