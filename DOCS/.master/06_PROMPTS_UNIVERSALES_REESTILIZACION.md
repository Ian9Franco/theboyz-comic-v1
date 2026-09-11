# Prompts universales — conversión al dibujo Elseframe

Versión 1.0 · 11 de septiembre de 2026.

Dos prompts completos para transformar material existente: A convierte una viñeta, página o ilustración; B convierte un sheet o concept art de personaje, criatura, objeto, vehículo o locación. Se pueden copiar por separado a un chat de imágenes junto con los adjuntos indicados. No requieren que ese chat conozca esta conversación.

La identidad del diseño antiguo se conserva. Lo que se reemplaza es su ejecución visual: modelado plástico, microdetalle indiscriminado, iluminación de estudio, superficies brillantes y acabado de render. Una conversión no autoriza reescribir una escena ni rediseñar un personaje.

## 1. Qué imágenes adjuntar

1. **ORIGINAL:** imagen concreta que se quiere convertir.
2. **ANCLA DE DIBUJO:** por defecto [diseño0_dibujo.jpg](../inspo/diseño/diseño0_dibujo.jpg). Para un acabado de tinta más contenido y figuras integradas en profundidad atmosférica, usar [diseño1_dibujo.webp](../inspo/diseño/diseño1_dibujo.webp).
3. **COMPLEMENTO opcional:** una imagen elegida por un motivo concreto, según la tabla. No agregar todas por costumbre.
4. **CANON opcional:** sheet vigente si hay errores de identidad en el original. Especificar qué elemento corrige.

Un nombre de archivo no adjunta la imagen. Si el modelo tiene acceso a archivos, debe abrirlos; si no lo tiene, entregar los archivos como imágenes. Mantener explícitos los roles incluso cuando el orden de los adjuntos cambie.

| Complemento | Función aplicable a una conversión | Límite |
|---|---|---|
| [diseño1_dibujo.webp](../inspo/diseño/diseño1_dibujo.webp) | Separación entre figuras y planos, economía del fondo, integración del volumen con la tinta | No agregar niebla ni cambiar el layout para reproducir su escena |
| [diseño3_color.webp](../inspo/diseño/diseño3_color.webp) | Color unificador, saturación graduada y profundidad por valores | No trasladar su acabado pictórico a toda la figura ni su paleta literal |
| [diseño10_color.jpg](../inspo/diseño/diseño10_color.jpg) | Grandes campos cromáticos, cálido/frío, trama localizada y luz que recorta la silueta | No convertir una noche en atardecer ni añadir contraluz sin fuente |
| [diseño5_tension_sombras.webp](../inspo/diseño/diseño5_tension_sombras.webp) | Masas negras, detalle retenido y foco en mirada/manos durante amenaza o tensión | No oscurecer una ficha técnica hasta ocultar su diseño |
| [diseño9 _accion 3d.webp](<../inspo/diseño/diseño9 _accion 3d.webp>) | Lectura del escorzo existente, silueta, contacto físico y dirección de fragmentos ya presentes | “3d” significa profundidad dibujada: no CGI. No agregar golpes, escombros ni rupturas de borde ausentes |

El análisis completo de cada referencia y las reglas para páginas nuevas están en [05AI_examp.md](05AI_examp.md).

## 2. Prompt A — convertir una viñeta, página o ilustración existente

Copiar el bloque completo. Funciona sin rellenar campos: ORIGINAL es la imagen a transformar y las otras imágenes se identifican como ancla/complemento. Si hay varias imágenes originales, indicar una sola por ejecución.

```text
TAREA — REINTERPRETACIÓN GRÁFICA DE UNA IMAGEN EXISTENTE

Redibuja ORIGINAL como cómic americano 2D entintado a mano, con la técnica de las referencias artísticas adjuntas. Reconstruye el dibujo, las masas de sombra y el color. El resultado debe conservar la misma escena y ser reconocible como la misma imagen, ejecutada con un lenguaje gráfico nuevo.

ROLES DE LOS ADJUNTOS
- ORIGINAL: único objetivo de edición. Aporta contenido, identidad visible, formato, composición, acción y continuidad; su acabado anterior se descarta.
- ANCLA DE DIBUJO: aporta línea, anatomía dibujada, hachurado y economía de detalle. Si están identificadas por nombre, diseño0_dibujo.jpg prioriza figura y ropa; diseño1_dibujo.webp prioriza figuras integradas en espacio y profundidad. La primera ancla declarada gobierna el dibujo.
- COMPLEMENTO, si está presente: aporta solamente la función declarada. diseño3_color.webp: atmósfera y separación cromática. diseño10_color.jpg: grandes masas de color y contraste cálido/frío. diseño5_tension_sombras.webp: jerarquía de negros para tensión. diseño9 _accion 3d.webp: profundidad y acción dibujadas mediante escorzo, no render 3D.
- CANON, si está identificado: corrige exclusivamente las discrepancias de identidad expresamente señaladas. No reemplaza el contenido de la escena.
Los personajes, trajes, objetos, acontecimientos, tipografía y marcas de las referencias artísticas no pertenecen a ORIGINAL.

CONSERVAR
Mantén relación de aspecto, recorte, número y orden de viñetas, forma de sus bordes, gutters, encuadres, perspectiva general, posiciones relativas, dirección de lectura y momento de cada acción. Una viñeta aislada sigue siendo una viñeta aislada; una página sigue teniendo el mismo número de viñetas.
Mantén rostros reconocibles, edad aparente, contextura, silueta, peinado, vestuario, patrones identificatorios, colores locales, armas, objetos, cantidad de extremidades y rasgos de especie. Conserva heridas, daños, apoyos, contactos y escala relativa.
Mantén lugar, clima, hora, fuentes de luz y progresión emocional. La simplificación del fondo debe conservar entradas, obstáculos y elementos que expliquen la acción.
Si un detalle pequeño es incierto, conserva su lectura más clara sin inventarle función o significado. Un defecto de anatomía solo se corrige localmente si la solución es inequívoca y no altera identidad, pose ni acción; una ambigüedad importante se señala antes de resolverla.

DIBUJO Y TINTA
Construye la figura con contornos orgánicos de grosor variable. Diferencia contorno exterior, líneas interiores y masas negras. Usa pliegues selectivos en vez de dibujar todas las arrugas; planos anatómicos claros en vez de subdividir cada músculo. Rostros, miradas, manos y puntos de contacto reciben el detalle que permite comprender la escena.
El hachurado sigue la forma y se concentra en zonas necesarias. Deja áreas de color abiertas. Mantén detalles canónicos como tatuajes, marcas y piezas distintivas, simplificando su ejecución a la escala final sin sustituir su diseño.

COLOR Y VOLUMEN
Organiza cada forma mediante color local, sombra principal legible y profundidad adicional cuando haga falta. Las grandes masas de luz y sombra deben funcionar antes de añadir textura. Permite variación cromática y transiciones selectivas de atmósfera sin cubrir el dibujo con sombreado continuo de render.
Conserva los colores identificatorios, adaptando su valor y saturación a la luz existente. Separa planos por contraste, escala y superposición. Simplifica elementos distantes con dibujo y color, no con desenfoque de cámara fotográfica.
Representa metal y superficies húmedas mediante reflejos amplios y motivados; tela y piel mediante planos y tinta. La lluvia o el suelo mojado se conservan si existen, pero no hacen brillar uniformemente a todos los personajes. Mantén un acabado mayormente mate de impresión.

ACCIÓN Y EMOCIÓN
Refuerza la legibilidad de la pose existente con la tinta y la separación de valores. Conserva los ejes de movimiento, apoyos y puntos de impacto. No agregues anatomía o gestos nuevos para volver la escena más espectacular. Las masas negras deben dirigir la atención, no ocultar información narrativa necesaria.

ROTULACIÓN EXISTENTE
Por defecto conserva el contenido y la posición del texto legible de ORIGINAL como una excepción limitada de restauración. No copies texto de las referencias artísticas. Si se suministra una transcripción, úsala exactamente, sin traducir ni reescribir. Si el texto de ORIGINAL no puede leerse con seguridad, solicita la transcripción de ese fragmento; no lo completes por contexto. No agregues globos o palabras a un original sin texto.
Si la instrucción del usuario es “arte limpio”, elimina la rotulación y sus globos/cajas, reconstruye el fondo y deja zonas calmas para rotular después. Este modo se aplica solo si se solicita.

RESTRICCIONES
No CGI, modelado PBR, apariencia de figura plástica, iluminación genérica de estudio, poros fotográficos, microarañazos por toda la superficie, puntos especulares dispersos, bloom decorativo ni filtro de ruido uniforme. No convertir el resultado en vector plano, caricatura simplificada o concept art pintado. No usar una capa de contornos sobre el render viejo como sustituto de redibujar. No sumar personajes, poderes, violencia, objetos, clima ni marcas de agua. No modificar el layout ni rehacer la narrativa por iniciativa propia.

ENTREGA
Una sola versión completa del objetivo, a la misma proporción. Revisar identidad, composición, acción, texto y legibilidad antes de entregarla. Mantener el original como archivo separado; guardar la conversión con un nombre nuevo.
```

### Opciones breves para añadir al final

- **Arte limpio:** «Eliminar rotulación y globos del original; dejar el arte preparado para rotular después».
- **Corrección canónica concreta:** «El sheet CANON corrige únicamente [rasgo]. Todo lo demás mantiene la escena original».
- **Énfasis:** «Mantener el peso dramático del original, usando masas de sombra más contundentes y luz existente mejor organizada; conservar todos los acontecimientos y la composición».

No añadir “más épico”, “8K ultra detailed” o “cinematic render”: no especifican el problema visual y pueden reintroducir el acabado que se quiere abandonar. Para cambiar el layout o los beats, usar un encargo de rediseño de página separado.

## 3. Prompt B — convertir cualquier sheet o concept art

El modo predeterminado convierte el material tal como existe. No obliga a un objeto a tener tres vistas de personaje ni inventa una espalda que nunca se mostró. Para construir nuevas vistas, usar la opción posterior.

```text
TAREA — CONVERSIÓN DE SHEET / CONCEPT ART A ELSEFRAME

Redibuja ORIGINAL con lenguaje de cómic americano 2D, entintado visible, masas gráficas y color controlado. Conserva el diseño representado. El objetivo es obtener una referencia clara y utilizable para dibujar páginas, con la misma identidad y una ejecución gráfica nueva.

ROLES
- ORIGINAL: identidad del personaje, criatura, objeto, vehículo o locación y estructura de la ficha existente. No aporta acabado final.
- ANCLA DE DIBUJO: técnica de tinta y construcción de formas. Preferir diseño0_dibujo.jpg para personaje, ropa y anatomía; diseño1_dibujo.webp para integración de formas y espacio. Ninguna aporta personajes o diseños al resultado.
- COMPLEMENTO opcional: solo el rasgo declarado; nunca reemplaza la legibilidad técnica del sheet. Las referencias de color no obligan a incorporar niebla, un atardecer o luces ajenas al original.
- CORRECCIONES DE DISEÑO: ninguna por defecto. Aplicar únicamente cambios expresamente enumerados por el usuario.

INVARIANTES
Conserva número y orden de vistas, proporción del lienzo, poses mostradas, escala relativa y detalles identificatorios. Si es una ilustración de concept art única, conserva una sola vista y su composición; no la conviertas automáticamente en un turnaround.
Personajes y criaturas: preservar rostro, edad, contextura, silueta, anatomía de especie, cantidad de extremidades, patrones, colores locales, vestuario, accesorios y daños canónicos. No normalizar una anatomía inusual ni transformar todos los cuerpos en superhéroes musculosos.
Objetos y vehículos: preservar volumen general, proporciones, piezas funcionales, distribución de paneles, uniones, equipo, entradas e identidad cromática. Simplificar tornillos y textura sin suprimir elementos que identifican o explican el objeto.
Locaciones: preservar distribución espacial, escala, arquitectura, accesos, hitos, materiales y daños relevantes. No inventar habitaciones ni cambiar la geografía.

EJECUCIÓN
Dibujar formas con contorno exterior de peso variable, líneas internas selectivas y sombras legibles. Mantener áreas limpias de color. Traducir volumen mediante planos, superposición y perspectiva dibujada; conservar escorzos presentes sin aspecto de render.
La luz debe permitir inspeccionar el diseño. En una ficha neutra, usar iluminación gráfica sencilla y uniforme entre vistas sobre fondo neutro. En un concept art ambiental, conservar las fuentes y condiciones de la escena, ordenando el contraste para que los elementos importantes se lean.
Representar tela con pliegues estructurales, metal con sombra y reflejo amplio, piel con planos y marcas canónicas. Eliminar detalle de superficie que no aporte identidad. Conservar desgaste narrativo; no cubrir todo con arañazos decorativos.
Usar el color local del diseño. Mantener sombra principal clara y profundidad adicional localizada. La textura artística se concentra en tinta o áreas justificadas; la ficha debe permitir reconocer bordes, colores y piezas sin interferencia atmosférica.

CONTINUIDAD ENTRE VISTAS
Las vistas representan el mismo elemento. Preservar distribución de colores, accesorios, costuras importantes, marcas, armas, número de dedos/extremidades y proporciones donde sean visibles. No reflejar una asimetría canónica. No inventar detalles del reverso o de interiores no mostrados. Si un detalle importante contradice otra vista y no hay canon que lo resuelva, señalar el punto exacto.

TEXTO
Mantener únicamente etiquetas legibles ya presentes en ORIGINAL o transcripción exacta suministrada, como excepción limitada de restauración. Si una etiqueta es ilegible, pedir ese texto; no inventarlo. Si el original no tiene etiquetas, no crearlas. Con la instrucción “arte limpio”, retirar etiquetas y reservar el espacio para maquetación posterior. Nunca trasladar nombres, logos ni texto de las referencias de estilo.

RESTRICCIONES
No CGI, PBR, maniquí de plástico, microtextura fotográfica, iluminación de producto, reflejos dispersos, render glossy ni modelado blando por airbrush. No convertir la ficha en póster narrativo. No agregar humo, partículas, poderes, paisajes o poses heroicas. No rediseñar silueta, rostro, traje o equipo bajo la excusa de mejorar el estilo. No simplificar hasta borrar identidad. No agregar watermark.

ENTREGA
Una conversión del sheet o concept art con sus vistas originales, diseño consistente y acabado de tinta y color de cómic. Guardar como versión nueva, manteniendo el archivo anterior.
```

### Opción: convertir además a un sheet nuevo

Agregar solo cuando se quiera reorganizar el material: «Además de convertir el acabado, crear un nuevo sheet de [tipo] con estas vistas: [lista exacta]. Conservar el canon y declarar qué partes no están documentadas antes de inventarlas».

- Personaje documentado: frontal de cuerpo completo, tres cuartos o lateral y rostro; confirmar respaldo visual para vistas adicionales.
- Vehículo: usar vistas que permitan entender casco y equipo. Interior solo si existe referencia o autorización de diseño.
- Locación: general, segundo ángulo y detalle, si la geometría disponible permite construirlos.
- Objeto: vistas necesarias para reconocer forma y función. Sin caras ni poses de personaje.

## 4. Comprobación y límites

Comparar original y conversión al tamaño de lectura: misma acción, misma identidad, mismos elementos y layout; tinta más clara, menos brillo cosmético y mejor separación de planos. Revisar manos, asimetrías y texto a mayor tamaño. La primera imagen convertida debe revisarse antes de usarla como nuevo canon.

Estos prompts expresan objetivos de conservación, no garantizan identidad pixel a pixel ni rotulación perfecta. Si la rotulación debe permanecer exacta, conservar su capa original y componerla sobre el arte limpio fuera del generador. Si falla solamente un elemento, corregirlo con una instrucción puntual; no añadir una lista interminable de prohibiciones.

La excepción de conservar texto existente se limita a restauración. Para páginas nuevas se mantienen las reglas de 02/03/04: arte sin texto salvo copy editorial o placa de locación autorizados, o una instrucción explícita del usuario.
