# 05 — Guía operativa de prompts con referencias artísticas

Versión 1.0 · 11 de septiembre de 2026.

## 1. Función y relación con las guías

Transformar una narrativa solicitada en un prompt visual completo y ejecutable. Este documento desarrolla la selección de referencias de `DOCS/inspo/diseño`, ejemplos de aplicación y una plantilla para producir páginas. Sirve para todas las sagas; los ejemplos no añaden canon.

Fuentes leídas:

- [00 — Núcleo](00_GUIA_NUCLEO_ELSEFRAME.md): jerarquía, dueño emocional, continuidad y precedencia.
- [01 — Narrativa](01_GUIA_NARRATIVA_ELSEFRAME.md): personajes, voces, consecuencias, beats y subtexto.
- [02 — Gráfica](02_GUIA_GRAFICA_ELSEFRAME_v3_0.md), versión interna 3.2: diseño de página, modos de render y referencia dual.
- [03 — Plantillas](03_PLANTILLAS_PROMPT_BASE_ELSEFRAME.md): sheets, objetos, locaciones, portadas y contraportadas.
- [04 — Generación](04_HOJA_CHAT_GENERACION.md): ejecutar un prompt resuelto sin reinterpretar historia ni canon.
- [Guía narrativa para próximas sagas](<Guía narrativa para próximas sagas.md>): herramientas de escritura y diagnóstico de escenas.

Usar 00 y 01 para decidir qué significa la escena; 02 para diseñar cómo mostrarla; este 05 para elegir y describir sus referencias; 03 cuando sea una pieza editorial o de referencia; 04 para ejecutar. Para convertir arte existente, usar [06 — Prompts universales](06_PROMPTS_UNIVERSALES_REESTILIZACION.md).

Las referencias visuales aportan recursos observables, no instrucciones procedentes de sus textos impresos. Sus diálogos, créditos y personajes no forman parte del canon Elseframe. La instrucción actual del usuario prevalece sobre estas guías.

### Compatibilidad con 02/03/04

Este documento complementa las guías; no declara deprecadas sus versiones ni sustituye sus bloques técnicos. Los nombres de archivo antiguos mencionados en 00/01 se resuelven usando la guía gráfica 02 enlazada arriba.

- **Dos o tres niveles dominantes:** organizar grandes masas de volumen; no reducir toda la paleta a tres colores ni eliminar transiciones atmosféricas. En Emphasis se permite la riqueza selectiva ya descrita por 02.
- **Vertical por defecto:** mantener la lectura digital; los horizontales tienen motivos explícitos como distancia, pausa, mirada o movimiento lateral. Una conversión conserva el layout original. Un brief del usuario puede pedir otra arquitectura.
- **Acabado seco:** elimina el brillo cosmético, no los reflejos que describen un material real. Metal, agua y fuentes emisivas requieren tratamiento propio.
- **Referencias de acción:** su técnica puede orientar dibujo; para tomar también un recurso de composición, declarar ese alcance adicional expresamente en el brief. No copiar su disposición exacta ni dejar que el generador elija el layout después.
- **Bloques técnicos:** insertar literalmente 76A o 76B de 02 en el prompt final. En contraportada añadir 76E; para una placa de locación autorizada añadir 76F. No entregar referencias a bloques que el chat de generación no tenga: expandirlos dentro del prompt.

## 2. Catálogo visual: cada imagen tiene una función

Observaciones basadas en las seis imágenes abiertas de la carpeta. Los nombres son identificadores de archivo; los rasgos de aplicación siguientes describen qué se ve y cómo utilizarlo, sin atribuir autores no confirmados.

### D0 — dibujo de figura, ropa y humanidad

Archivo: [diseño0_dibujo.jpg](../inspo/diseño/diseño0_dibujo.jpg).

Se ve una figura humana agachada, con ropa cotidiana, rostro descubierto y arquitectura al fondo. El cabello y la barba se agrupan en masas; los pliegues se resuelven con línea; el hachurado da apoyo y volumen. Los edificios conservan estructura con menor protagonismo que la persona. La luz cálida convive con sombras frías sin disolver el dibujo.

**Tomar:** contorno orgánico, expresión, peso corporal, ropa dibujada y detalle subordinado al foco. Es el ancla general para vida cotidiana, primeros planos y sheets de personaje.

**No trasladar:** identidad, máscara, traje, pose agachada, edificio, puesta de sol, firma o marcas de portada. Una página tranquila no necesita esa pose ni esa luz.

**Frase operativa:** «Usar D0 para construir rostros, cabello y ropa mediante línea de peso variable, pliegues estructurales y hachurado localizado; mantener superficies abiertas de color».

### D1 — dibujo integrado en espacio y jerarquía coral

Archivo: [diseño1_dibujo.webp](../inspo/diseño/diseño1_dibujo.webp).

Una figura clara vista de espaldas domina un espacio con personajes distantes y rocas. El ambiente azul separa profundidad mediante contraste; el detalle disminuye con la distancia. La página pasa del general a rostro y conversación. Los reflejos metálicos se leen como formas delimitadas.

**Tomar:** distribución de atención entre figuras, perspectiva atmosférica, línea contenida, masa clara contra entorno oscuro y transición del espacio a la reacción.

**Usar:** llegada, encuentro, revelación de lugar, escena coral, locaciones y concept art con profundidad. Puede ser ancla de dibujo alternativa a D0.

**No trasladar:** niebla automática, reparto, rocas, capa blanca, paleta azul obligatoria ni la misma grilla. Un brillo de metal no autoriza brillo plástico en toda la página.

**Frase:** «Usar D1 para graduar contraste y detalle por distancia, manteniendo al dueño emocional y sus interlocutores reconocibles dentro del entorno».

### C3 — color unificador y profundidad atmosférica

Archivo: [diseño3_color.webp](../inspo/diseño/diseño3_color.webp).

Ilustración coral con una gran figura al fondo. Colores fríos, desaturación y veladuras ambientales unen el conjunto; acentos cálidos seleccionan focos. Hay acabado más pictórico y textura que en D0.

**Tomar:** relación de valores, saturación graduada, cohesión cromática y separación de escalas.

**Usar:** espacios amplios, grupos, distancia, sensación de mundo o pausa contemplativa. Siempre como complemento de color del dibujo elegido.

**No trasladar:** modelado pictórico completo, textura sobre cada superficie, formación de grupo ni personajes gigantes inexistentes. No vuelve borrosas las caras ni desatura los colores canónicos hasta volverlos irreconocibles.

**Frase:** «Usar C3 solo para la cohesión ambiental y separación por valor/saturación; mantener contornos y sombras construidos por el ancla de dibujo».

### S5 — tensión mediante sombras y detalle retenido

Archivo: [diseño5_tension_sombras.webp](../inspo/diseño/diseño5_tension_sombras.webp).

Una figura dominante se concentra en una gran masa oscura. Rostro, casco, manos y armas reciben los acentos claros. Los paneles inferiores acercan la amenaza a las miradas y respuestas. La paleta terrosa y limitada reduce distracciones.

**Tomar:** jerarquía de valores, detalle selectivo, presencia, retención de información y foco emocional. Las sombras pueden ocultar sin perder silueta.

**Usar:** amenaza, confrontación, tensión silenciosa o revelación inquietante. Puede operar en Base; la oscuridad no exige Emphasis.

**No trasladar:** armadura, rayos, tentáculos, habla del antagonista ni negrura total. No oscurecer mecánicamente a un personaje amable ni ocultar el mecanismo de una acción.

**Frase:** «Usar S5 para concentrar las masas negras y reservar los valores claros a la mirada y al gesto que cambia la escena».

### A9 — acción, escorzo y profundidad dibujada

Archivo: [diseño9 _accion 3d.webp](<../inspo/diseño/diseño9 _accion 3d.webp>).

Una figura atraviesa un obstáculo y avanza mediante escorzos, superposición y cambios de escala. Fragmentos, diagonales y blancos organizan el recorrido. Hay recursos de ruptura de borde y continuidad del movimiento entre paneles.

**Tomar:** claridad de silueta, anatomía en profundidad, dirección de fuerza, peso y contacto. Para composición nueva, declarar por separado si se usará una ruptura de borde o una trayectoria diagonal.

**Usar:** saltos, impactos, persecución, desplazamiento físico. La técnica 2D también sirve para escenas de acción en Base.

**No trasladar:** Spider-Man, telarañas, explosiones, daños gratuitos, repetición del protagonista sin propósito ni la página exacta. El “3d” del nombre describe aquí volumen espacial por dibujo, nunca CGI, PBR o material plástico.

**Frase:** «Usar A9 para escorzo y superposición con tinta firme; mostrar apoyo, contacto y dirección de fuerza mediante siluetas separadas y profundidad dibujada».

### C10 — color gráfico, luz y espacio negativo

Archivo: [diseño10_color.jpg](../inspo/diseño/diseño10_color.jpg).

Figura recortada contra un cielo de grandes formas naranjas y azul grisáceo. Tramas localizadas, pinceladas ambientales y un contraluz cálido construyen la atmósfera. La ciudad se agrupa por distancia; la figura conserva negros profundos y dibujo claro.

**Tomar:** grandes masas cromáticas, contraste cálido/frío, luz selectiva en silueta, textura localizada y respiración ambiental.

**Usar:** establecimiento urbano, pausa, cierre o imagen dominante. El espacio negativo debe pertenecer a la escena y no ser un hueco decorativo.

**No trasladar:** atardecer obligatorio, traje, pose, ciudad exacta, cielo pintado en cada panel o brillo perimetral sin fuente. Conservar la hora y la iluminación del canon.

**Frase:** «Usar C10 para agrupar la paleta en campos grandes y separar figura y fondo con luz motivada; concentrar la trama en áreas ambientales seleccionadas».

## 3. Selección rápida

Usar normalmente **un ancla de dibujo y un complemento**. Si el brief requiere un tercer aporte, explicar la función independiente; no mezclar todas las imágenes con igual autoridad. La selección final debe nombrar archivos concretos, además de sus IDs.

| Necesidad narrativa | Selección inicial | Qué debe resolver |
|---|---|---|
| Conversación, cuidado, cotidianeidad | D0; C10 solo si el entorno y la luz importan | Actuación, gesto y claridad de figura |
| Llegada o escena coral | D1 + C3 | Quién domina y cómo se ordena la profundidad |
| Amenaza, sospecha, silencio | D0 o D1 + S5 | Qué se oculta y qué gesto permanece visible |
| Acción física | D0 + A9 | Trayectoria, apoyos y lectura de cuerpos |
| Establecimiento urbano o pausa | D0 + C10 | Escala, color ambiental y foco |
| Sheet técnico | D0, o D1 para espacio/volumen | Identidad inspeccionable, sin atmósfera que tape diseño |
| Momento irreversible | Ancla pertinente + S5 o A9 según el hecho | Peso dramático concreto; Emphasis si lo justifica el beat |

Una escena nocturna puede usar C10 conservando la noche: se toma organización cromática, no el sol. Una conversación tensa puede usar S5 sin rayos ni silueta monumental. Las referencias ofrecen herramientas; la narrativa decide cuáles usar.

## 4. Procedimiento del modelo

1. Identificar si se pide una página nueva, una conversión, un sheet o una pieza editorial. No confundir los flujos.
2. Leer la narrativa solicitada y el canon pertinente. Extraer contexto previo, presentes, deseos, cambio de escena, dueño emocional y estado inicial/final. No convertir un desenlace pedido en permiso para inventar una saga.
3. Registrar información nueva y retenida. Toda profecía, poder o identidad necesita respaldo del canon o del usuario.
4. Inventariar personajes visibles con estado/traje, lugar, vehículos y utilería recurrente. Separar lo que solo se menciona.
5. Inspeccionar adjuntos y asignar funciones. No asegurar haber visto una imagen por reconocer su nombre. Si falta una referencia esencial, pedir solo esa información; si falta un detalle menor, declarar una inferencia conservadora.
6. Elegir ancla y complemento por función. Escribir una frase concreta de aplicación y otra de límite. El uso de referencias no debe quedarse en una lista de nombres.
7. Elegir Base o Emphasis según el beat dominante, conservando el contraste dramático de la secuencia. Emphasis es mayor peso y luz controlada, no más microdetalle.
8. Elegir el recurso dominante de página y los instantes necesarios. Determinar número, orden, tamaño y orientación de viñetas después de los beats. Justificar horizontales con su función. Evitar grillas uniformes por inercia y falsas splash de momentos menores.
9. Resolver geografía y tiempo. En acción: posiciones antes/después, eje de desplazamiento, apoyo, contacto y consecuencia. Un panel muestra un instante principal; separar acciones sucesivas incompatibles.
10. Resolver actuación. La emoción cambia postura, manos, mirada, distancia y conducta; no basta “cara triste”. Mantener cansancio, temor, heridas y confianza de la página anterior.
11. Preparar diálogos fieles a las voces, breves y separados para rotular después. No describir en palabras lo que ya muestra la imagen. Si hay texto editorial, usar su copy exacto con la excepción correspondiente.
12. Emitir un prompt completo que no dependa del historial. Expandir el bloque técnico elegido de 02, los rasgos de las referencias y la continuidad necesaria. No dejar “igual que antes”, IDs sin archivo ni alternativas sin resolver.

Preguntar solamente por vacíos que cambian canon, contenido o diseño importante. No pedir aprobación por cada lente, viñeta o elección rutinaria. La autorización previa del usuario para escribir un recap permite redactarlo; fijar su texto exacto antes de generar. Si no hay texto ni autorización para escribirlo, pedir el copy faltante y avanzar con el resto del diseño.

## 5. Plantilla universal para páginas nuevas

Esta plantilla la completa el modelo de prompts. Los corchetes son instrucciones de preparación; deben desaparecer del prompt final. El modelo de generación recibe una decisión cerrada.

```text
Characters appearing on this page:
- [Cada personaje visible, variante exacta, estado, referencia de identidad.]

Location appearing on this page:
- [Lugar preciso y rasgos de continuidad; identificar diseño nuevo como propuesta si corresponde.]

Vehicles / ships / major recurring props appearing on this page:
- [Lista o None.]

Visual reference rule:
- [Archivo de identidad → elemento exacto que define.]
- [Archivo de continuidad → ropa, daño, objetos, hora y geografía que conserva.]
- Style Anchor: [archivo D0 o D1 y rasgos de dibujo aplicados.]
- Style Complement: [archivo seleccionado, función y límite concretos, o None.]
- [Si se toma un recurso compositivo, declararlo expresamente; no copiar el layout de la referencia.]
Los sheets aportan identidad y no acabado; las referencias artísticas aportan técnica y no contenido. Redibujar los elementos canónicos con la técnica declarada.

Render Mode:
- [Base Render — Classic Cel Shading o Emphasis Render — Cinematic Hard-Edged Cel Shading; motivo del beat dominante.]

Dominant visual device:
- [Recurso concreto y por qué sirve al dueño emocional.]

CONTEXTO Y CONDICIONES
[Qué ocurrió inmediatamente antes; hora, clima, fuentes de luz y estado corporal.]
FUNCIÓN NARRATIVA
[Cambio de información, relación o decisión que logra la página.]
DUEÑO EMOCIONAL Y PROGRESIÓN
[Nombre: estado inicial → estado final, expresado por conducta.]

ARQUITECTURA
[Formato, cantidad exacta de viñetas, orden, tamaño relativo, orientación y motivo de horizontales. Una ruta de lectura inequívoca.]

COMPOSICIÓN GLOBAL
[Imagen dominante; relación entre paneles; espacio negativo; separación de planos; áreas de rotulación futura.]

VIÑETA 1
[Plano/orientación, ubicación de sujetos, un instante principal, gesto, intención, objetos y foco.]
VIÑETA 2…N
[Cada beat muestra cambio. Resolver apoyos, contactos y movimientos de forma físicamente legible.]

CONTINUIDAD OBLIGATORIA
[Vestuario, rasgos, heridas, objetos, geografía, eje, escala, conocimiento y emoción que se conservan.]
INFORMACIÓN RETENIDA
[Qué no debe revelarse, manifestarse o añadirse.]

TRATAMIENTO ESPECÍFICO
[Aplicación de ancla/complemento a caras, entorno, color o acción de esta página. No instrucciones genéricas como “más cómic”.]

ACABADO Y RESTRICCIONES
[Insertar literalmente 76A o 76B de 02. Añadir solo las restricciones particulares necesarias, al final. Si corresponde, insertar 76E/76F con copy exacto.]
```

Después del bloque visual, entregar **Diálogos para rotular**, ordenados por viñeta y hablante, o indicar “sin diálogo”. Para un prompt listo para generar, no insertar estos diálogos dentro de una instrucción que simultáneamente prohíba generar texto.

## 6. Ejemplos de decisión resuelta

Son ejemplos operativos de cómo completar la plantilla, no prompts visuales autónomos ni acontecimientos canónicos nuevos. El modelo debe expandir cada ejemplo con inventario real, referencias y bloque técnico antes de enviarlo a generación.

### A. Cotidianeidad después del peligro

**Narrativa recibida:** dos amigos llegan a casa después de una amenaza; uno comprueba que el otro está bien.

**Selección:** D0 como ancla única. Base. La luz doméstica viene del lugar, no del atardecer de la referencia.

**Dueño/progresión:** quien recibe el cuidado; vigilancia → confianza. **Recurso:** acercamiento del plano a las manos, seguido de una pausa compartida.

**Arquitectura:** tres paneles: general vertical de entrada; plano medio vertical del gesto de revisar el brazo; plano conjunto horizontal final, justificado como respiración.

**Acciones:** entrar manteniendo atención al exterior → aceptar la revisión → sentarse junto al amigo. Cada panel cambia conducta. Conservar daños existentes y anatomía canónica; no añadir una herida para justificar el cuidado.

**Frase visual:** «La ropa y las manos se dibujan con el peso de línea y pliegues selectivos de diseño0_dibujo.jpg. La caída de los hombros expresa alivio; el fondo pierde detalle al acercarse al gesto».

### B. Sospecha sin revelar la amenaza

**Narrativa recibida:** un personaje escucha algo fuera de campo mientras su acompañante sigue hablando.

**Selección:** D0 + S5. Base: tensión contenida, todavía sin revelación mayor.

**Dueño/progresión:** quien escucha; comodidad → vigilancia. **Recurso:** reducción progresiva de plano y masa negra que oculta una zona del entorno.

**Arquitectura:** tres paneles: conjunto horizontal para conversación; vertical del personaje deteniendo un gesto; franja horizontal de mirada, justificada por atención y pausa.

**Frase visual:** «De diseño5_tension_sombras.webp tomar la distribución selectiva de claros: conservar mirada y mano legibles. La zona oscura oculta información sin introducir ojos brillantes, alas o una silueta que revele al intruso».

### C. Impacto físico que cambia la ventaja

**Narrativa recibida:** un defensor usa un apoyo del entorno para hacer retroceder al atacante.

**Selección:** D0 + A9. Emphasis solo si este es el giro decisivo; en un intercambio regular sería Base.

**Dueño/progresión:** defensor; esfuerzo → iniciativa. **Recurso:** detalle de apoyo → panel dominante de impacto → reacción.

**Arquitectura:** insert superior de apoyo, vertical central dominante de contacto, horizontal inferior de evaluación, justificado por enfrentamiento y pausa.

**Frase visual:** «Aplicar el escorzo y las siluetas separadas de diseño9 _accion 3d.webp. El punto de apoyo está visible antes del impulso; el impacto tiene una dirección inequívoca y pocos fragmentos si el entorno efectivamente se rompe. La referencia no introduce telarañas ni explosiones».

### D. Llegada y escala

**Narrativa recibida:** un grupo entra en un lugar y descubre a alguien esperándolo.

**Selección:** D1 + C3. Base salvo que el descubrimiento sea una revelación mayor.

**Dueño/progresión:** integrante que reconoce al esperado; incertidumbre → reconocimiento. **Recurso:** general dominante y reacción pequeña.

**Arquitectura:** plano general horizontal para la distancia entre grupos y dos paneles verticales de reconocimiento y respuesta. No colocar a todos en una fila frontal.

**Frase visual:** «Usar diseño1_dibujo.webp para escalonar figuras por profundidad y diseño3_color.webp para reducir contraste en la distancia, manteniendo el color canónico del sujeto que concentra la atención. No agregar niebla si el lugar no la admite».

### E. Cierre urbano contemplativo

**Narrativa recibida:** tras una decisión, una persona se queda mirando su ciudad.

**Selección:** D0 + C10. Base cuando es una pausa; una splash requiere peso narrativo adicional.

**Dueño/progresión:** esa persona; agitación → resolución silenciosa. **Recurso:** espacio negativo y figura integrada en una vista amplia.

**Arquitectura:** dos paneles: gesto cercano de soltar un objeto ya presente; general vertical amplio que muestra la nueva postura ante la ciudad.

**Frase visual:** «Usar diseño10_color.jpg para campos cromáticos amplios y separación por luz, adaptados a la hora real de la escena. Conservar el dibujo humano de diseño0_dibujo.jpg y agrupar edificios distantes; no cambiar automáticamente a un atardecer naranja».

## 7. Portadas, contraportadas y sheets

Para portada o contraportada elegir técnica de dibujo/color con este catálogo y estructura con 03. Las imágenes de [inspo/contraportada](../inspo/contraportada) aportan diseño editorial únicamente. La primera página de una saga puede ser contraportada si así lo pide el usuario; no convertirla por defecto en una página de acción.

Contraportada: composición editorial, jerarquía tipográfica y copy exacto; ninguna escena nueva para rellenar huecos. Si el usuario encarga escribir el recap, redactarlo a partir del canon, sin spoilers no pedidos; después incorporarlo literalmente. No inventar créditos, firmas, afiliaciones ni folios.

Sheets: priorizar inspección del diseño sobre dramatismo. Usar 03 para crear vistas nuevas y 06 para convertir un original. Una locación o nave necesita su propia arquitectura de ficha; no aplicar dos cuerpos completos y un rostro a cualquier tipo de asset.

## 8. Diagnóstico y verificación

| Síntoma | Corrección concreta |
|---|---|
| Parece un render con filtro de líneas | Rehacer contorno, sombra y color; el original aporta identidad, el ancla decide ejecución |
| Todo está lleno de pequeñas líneas | Agrupar pliegues, musculatura y arquitectura; reservar detalle a foco y rasgos canónicos |
| Color plano sin volumen | Reforzar sombra principal, solapamiento y dirección de luz; no solucionar con gloss |
| Todo está oscuro | Redistribuir claros hacia gesto, contacto o identidad; S5 no exige negro total |
| Todas las páginas tienen el mismo color | Transferir relaciones cromáticas, no copiar la paleta de la referencia |
| Acción confusa | Revisar eje, apoyo, contacto y antes/después; separar instantes incompatibles |
| Personajes posan durante una crisis | Sustituir pose por conducta que responda al peligro, sin alterar canon |
| Se mezclan diseños de referencias | Reasignar cada adjunto a su elemento o técnica y quitar referencias redundantes |
| Todo parece una splash | Recuperar Base y tamaño de panel proporcional al peso real de cada beat |
| El prompt remite a otro documento | Expandir instrucciones necesarias y bloque 76 en la entrega final |

Antes de entregar el prompt, verificar: referencias realmente vistas y roles inequívocos; narrativa respetada; canon y poses consistentes; dueño emocional visible; cada viñeta aporta cambio; geografía y lectura claras; modo de render justificado; textura y color subordinados al dibujo; texto según el flujo; ausencia de placeholders y alternativas pendientes.

Después de generar, comprobar el resultado con esas mismas preguntas. Un prompt bien formado todavía puede producir errores de anatomía, identidad, texto o continuidad. No declarar una conversión validada sin mirar su resultado.
