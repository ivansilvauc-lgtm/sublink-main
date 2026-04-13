# Reporte SEO — Sublink Company
**Fecha:** 12 de abril de 2026  
**URL del sitio:** https://www.sublink.company  
**Preparado por:** Claude SEO Skill

---

## Puntuación General: 69/100 🟠

| Dimensión | Puntuación | Estado |
|-----------|-----------|--------|
| Meta Tags (title + description) | 14/20 | 🟡 |
| Contenido y Headings | 14/20 | 🟡 |
| Crawlability (robots, sitemap, canonical) | 11/15 | 🟡 |
| Imágenes | 10/15 | 🟡 |
| Schema / Structured Data | 7/10 | 🟡 |
| Performance | 7/10 | 🟡 |
| Internal Linking | 6/10 | 🟠 |

---

## Resumen Ejecutivo

Sublink.company tiene una base SEO sólida: Next.js 14 con SSG/ISR, sitemap dinámico, robots.txt correcto, structured data en páginas de producto y servicios, y una mayoría de imágenes ya en formato WebP. El trabajo de las últimas semanas (metaTitle/metaDescription por servicio, priceCurrency VES, sitemap dinámico) ha puesto el sitio en buen camino.

Los problemas actuales se concentran en tres áreas: (1) **meta tags incompletos** en páginas secundarias — sostenibilidad y portafolio carecen de OpenGraph e imagen OG, lo que afecta directamente el CTR en redes sociales y WhatsApp; (2) **oportunidades de schema** desaprovechadas, especialmente FAQPage (el footer tiene 5 preguntas frecuentes listas para marcar) y Service schema; (3) **enlazado interno débil** — el homepage no tiene ningún enlace contextual a páginas de telas o servicios, y el portafolio es prácticamente un nodo huérfano.

Con 12 correcciones específicas (la mayoría implementables en menos de 2 horas de código), el sitio puede alcanzar 82-85/100 y comenzar a aparecer en snippets enriquecidos de Google para búsquedas de "sublimación textil Venezuela", "telas para trajes de baño Venezuela" y variantes locales.

---

## Hallazgos por Dimensión

### 1. Meta Tags
**Puntuación: 14/20**

| Página | Title | Description | OG | Twitter | Canonical |
|--------|-------|-------------|-----|---------|-----------|
| Home (`/`) | ✅ 51 chars | ✅ 127 chars | ✅ | ✅ | ✅ |
| Sostenibilidad | ✅ 58 chars | ✅ | ❌ Ausente | ❌ Ausente | ✅ |
| Portafolio | ✅ 51 chars | ✅ | ❌ Ausente | ❌ Ausente | ✅ |
| Telas `/telas/…` | ✅ dinámico | ✅ | ✅ | ❌ Ausente | ✅ |
| Servicios `/servicios/…` | ✅ metaTitle | ✅ metaDesc | ✅ | ❌ Ausente | ✅ |
| Blog `[slug]` | ✅ | ✅ | ✅ | ✅ | ✅ |

**Problemas encontrados:**

- 🔴 **OG ausente en Sostenibilidad y Portafolio**: Cuando alguien comparte `/sostenibilidad` o `/portafolio` en WhatsApp o Instagram, no se genera la vista previa con imagen. Esto afecta conversión directa.
- 🟡 **Twitter card ausente en Telas y Servicios** (5 servicios + 58 telas): sin `twitter: { card, title, description, images }` en los `generateMetadata()` correspondientes.
- 🟡 **Title template duplica "Sublink"**: El template en layout es `"Sublink | %s"`. Cuando el metaTitle de un servicio ya termina con `"| Sublink Company"` (ej. `"Sublimación Textil en Venezuela | Sublink Company"`), el resultado renderizado sería `"Sublink | Sublimación Textil en Venezuela | Sublink Company"` — demasiado largo (70+ chars) y marca duplicada.

---

### 2. Contenido y Headings
**Puntuación: 14/20**

**Problemas encontrados:**

- 🔴 **H1 invisible en Home**: El H1 usa `className="sr-only"` (screen reader only). Google generalmente procesa este contenido, pero no da la misma señal de relevancia que un H1 visible en el viewport. Considerar hacerlo al menos visualmente presente (aunque pequeño) en lugar de ocultarlo con `sr-only`.
- 🔴 **Sostenibilidad no tiene H1**: La página `/sostenibilidad` no declara ningún `<h1>` — el texto "¿QUÉ SON LAS TELAS ECOLÓGICAS?" está en un `<span>` decorativo y luego un `<h2>`. Google no tiene H1 que ancle la relevancia de la página.
- 🟡 **Heading order en Servicios**: La estructura es `H1 (nombre) → H3 (subtítulo) → H2 (Ventajas del Servicio)`. El H3 aparece antes del primer H2, violando la jerarquía semántica. Debería ser H1 → H2 → H3.
- 🟡 **Ofrecemos usa H2 para labels de card** ("TELAS", "SERV. TEXTIL", "TELAS ECO"): Son labels visuales, no headings reales. Mejor cambiarlos a `<p>` o `<span>` estilizados, reservando los H2 del homepage para secciones más relevantes ("¿Qué vas a confeccionar?", "Sublimación Digital", etc.).
- 🟢 **Blog posts**: Estructura excelente H2/H3, buen contenido largo (5-8 min), keywords naturales.

---

### 3. Crawlability
**Puntuación: 11/15**

**Problemas encontrados:**

- 🔴 **Blog en sitemap pero bloqueado por middleware**: `sitemap.ts` incluye `/blog`, `/blog/telas-para-trajes-de-bano`, `/blog/print-on-demand-modelo-actual`, `/blog/tipos-de-fibras-y-telas` — pero `middleware.ts` redirige todas estas URLs a `/` con 307. Google desperdicia crawl budget visitando 4 URLs del sitemap que solo devuelven redirect. **Mientras el blog esté bloqueado, estas entradas deben eliminarse del sitemap.**
- 🟢 **robots.ts correcto**: `Allow: /`, `Disallow: /private/`, sitemap apuntado correctamente.
- 🟢 **Canonical tags**: Presentes en todas las páginas con URL completa.
- 🟢 **Sitemap dinámico**: Cubre home, sostenibilidad, portafolio, 58 telas, 7 servicios — bien priorizado.

---

### 4. Imágenes
**Puntuación: 10/15**

| Métrica | Valor |
|---------|-------|
| Imágenes WebP | 151 ✅ |
| Imágenes JPG/PNG | 45 ⚠️ |
| Imágenes con priority (hero) | 2 ✅ |
| Alt texts genéricos "Logo cliente" | ~45 imágenes ⚠️ |

**Problemas encontrados:**

- 🔴 **LogoCarousel: todos los logos tienen `alt="Logo cliente"`** (~45 slides × 2 logos). Google no puede inferir a qué empresa pertenece cada logo — oportunidad perdida de brand mentions. Usar el nombre real de cada cliente.
- 🟡 **Slider alt text usa URL del archivo** como alt (`banner.acf['imagen-desktop']`). El alt del slider principal (LCP candidate) debería ser descriptivo como "Sublimación textil de alta calidad — Sublink Valencia".
- 🟡 **cloud-a.png: 536KB PNG sin convertir**. Es la imagen más pesada del proyecto; debería ser WebP. Impacta LCP en la página de sostenibilidad.
- 🟡 **Archivos no utilizados en `/public/img/ofrecemos/`**: `affiliate_program_caspar_14.jpg` (483KB), `microfactory_caspar_6-scaled.jpg` (512KB), y `descarga (2).jfif` siguen en `/public/` aunque ya no se referencian (reemplazados por los nuevos WebP). Son 1MB+ servibles innecesariamente.
- 🟡 **2× PDFs de 3.2MB cada uno** (`Monti Antonio T02.pdf`, `Monti Antonio T03 1800.pdf`) dentro de `/public/img/ofrecemos/` — accesibles públicamente vía URL directa. Si no son para descarga pública, moverlos fuera de `/public/`.
- 🟡 **Iconos de categorías PNG** (~28KB c/u): `pareo.png`, `camisa.png`, `chaqueta.png`, etc. — candidatos a conversión a WebP o SVG.

---

### 5. Schema / Structured Data
**Puntuación: 7/10**

| Schema | Páginas | Estado |
|--------|---------|--------|
| LocalBusiness | Todas (layout) | ✅ |
| VideoObject | Todas (layout) | ✅ |
| Product + Offer | Telas (`/telas/…`) | ✅ |
| BreadcrumbList | Telas + Servicios | ✅ |
| Article | Blog `[slug]` | ✅ |
| FAQPage | ❌ Ninguna | 🔴 |
| Service | ❌ Servicios | 🟡 |
| Organization | ❌ Ninguna | 🟡 |

**Problemas encontrados:**

- 🔴 **FAQPage schema ausente**: El footer contiene 5 preguntas frecuentes (pedido mínimo, tiempo de producción, durabilidad del color, subir diseño, tipos de tela). Implementar `FAQPage` JSON-LD en el layout genera rich snippets con las respuestas directamente en Google, aumentando CTR entre 20-30%.
- 🟡 **Service schema ausente en Servicios**: Las páginas `/servicios/sublimacion-textil-a-gran-formato`, `/servicios/dtf-industrial-continuo`, etc. solo tienen BreadcrumbList. Añadir schema `Service` con `name`, `description`, `provider` (LocalBusiness), `areaServed` y `offers` mejoraría los resultados enriquecidos para búsquedas transaccionales.
- 🟡 **Organization schema**: Complementaria al LocalBusiness ya existente; útil para Knowledge Graph. Incluye logo oficial, redes sociales (sameAs), founding year.

---

### 6. Performance
**Puntuación: 7/10**

**Señales detectadas:**

- 🟡 **Microsoft Clarity: script sincrónico en `<head>`**: El snippet de Clarity se ejecuta de forma síncrona en el `<head>` antes de renderizar el contenido. Aunque es pequeño, bloquea el parser brevemente. Moverlo a `<Script strategy="afterInteractive">` de Next.js lo difiere hasta después del contenido visible.
- 🟡 **Ofrecemos: imágenes originales JPG (495KB + 512KB) en `/public/`**: Aunque ya no se usan en el código, siguen siendo archivos servibles. Eliminarlos.
- 🟢 **Next.js Image**: Usado consistentemente — optimización automática de tamaño, formato y lazy loading.
- 🟢 **WebP mayoritario**: 151 WebP vs 45 JPG/PNG — excelente ratio.
- 🟢 **Google Fonts via `next/font`**: Sin render-blocking, swap automático.
- 🟢 **Google Analytics via `@next/third-parties`**: Carga optimizada, no bloquea.
- 🟢 **Vercel Analytics**: Ligero, sin impacto en performance.

---

### 7. Internal Linking
**Puntuación: 6/10**

**Problemas encontrados:**

- 🔴 **Homepage sin enlaces contextuales a páginas deep**: El `page.tsx` del home no contiene ningún `<Link>` a páginas de telas o servicios concretas. Todo el enlazado ocurre vía Navbar o componentes JavaScript (modales). Google no puede "seguir" esos links en el HTML estático, lo que reduce la autoridad de PageRank que fluye a las páginas de producto.
- 🟡 **Portafolio sin links salientes**: `/portafolio` muestra proyectos con tela y descripción, pero no enlaza a la página de la tela usada (ej. "Microdurazno" → `/telas/telas-nacionales/microdurazno`). Oportunidad de crear anchor text relevante.
- 🟡 **Blog posts no enlazan a telas ni servicios**: El post de "telas para trajes de baño" menciona "Lycra Lafayette" y "Microfibra Nacional" pero no enlaza a sus páginas de producto. El post de POD menciona sublimación pero no enlaza a `/servicios/sublimacion-textil-a-gran-formato`.
- 🟢 **Footer**: Tiene Quick links a páginas principales — bien.
- 🟢 **BreadcrumbList**: Implementado en telas y servicios.
- 🟢 **Servicios y Telas**: Carousel de recomendaciones enlaza entre páginas del mismo tipo.

---

## Plan de Acción Priorizado

### Semana 1 — Quick wins (alto impacto, < 2h de código)

1. ✅ **Eliminar blog del sitemap** → `src/app/sitemap.ts` → Eliminar `blogEntries` del return mientras el blog esté bloqueado. Evita crawl waste inmediato.
   ```ts
   // Eliminar esta línea del return:
   ...blogEntries,
   ```

2. ✅ **Agregar OpenGraph + Twitter a Sostenibilidad** → `src/app/sostenibilidad/page.tsx`
   ```ts
   openGraph: {
     title: "Telas Ecológicas y Sostenibilidad Textil | Sublink",
     description: "...",
     url: SUBLINK_URL + "/sostenibilidad",
     images: [{ url: `${SUBLINK_URL}/img/sostenibilidad/hero-eco.webp`, width: 1200, height: 630 }],
     locale: "es_VE", type: "website",
   },
   twitter: { card: "summary_large_image", title: "...", description: "...", images: ["..."] }
   ```

3. ✅ **Agregar OpenGraph + Twitter a Portafolio** → `src/app/portafolio/page.tsx` — misma estructura.

4. ✅ **Añadir H1 a Sostenibilidad** → `src/app/sostenibilidad/page.tsx` → convertir el primer `<span>` del hero en `<h1>` o agregar un H1 semántico (puede ser sr-only en este caso, a diferencia del home que lo tiene en un contexto de muchos H2).

5. ✅ **FAQPage schema** → `src/app/layout.tsx` → copiar las 5 FAQs del footer como JSON-LD (5min de trabajo, mayor retorno SEO del plan).

### Semana 2-4 — Optimizaciones importantes

6. **Corregir heading order en Servicios** → `src/app/servicios/[slug]/page.tsx` → cambiar el `<h3>` del subtítulo a `<h2>` o convertir el orden en H1 → H2 → H3 correctamente.

7. **Twitter cards en Telas y Servicios** → `src/app/telas/[...slug]/page.tsx` y `src/app/servicios/[slug]/page.tsx` → agregar bloque `twitter:` en `generateMetadata()`.

8. **Corregir metaTitle template** → Revisar que los metaTitle de servicios no incluyan "Sublink" al final para evitar que el template `"Sublink | %s"` los duplique. Alternativa: cambiar template a `"%s | Sublink"`.

9. **Convertir cloud-a.png a WebP** → 536KB → <50KB estimado. Ejecutar:
   ```bash
   cwebp public/img/reciclaje/cloud-a.png -q 85 -o public/img/reciclaje/cloud-a.webp
   ```
   Y actualizar la referencia en el componente.

10. **Mover Clarity a `<Script strategy="afterInteractive">`** → `src/app/layout.tsx` → usar `import Script from 'next/script'` con `strategy="afterInteractive"` en lugar del script inline en `<head>`.

11. **Limpiar archivos no usados** → Eliminar de `/public/img/ofrecemos/`:
    - `affiliate_program_caspar_14.jpg` (483KB)
    - `microfactory_caspar_6-scaled.jpg` (512KB)
    - `Monti Antonio T02.pdf` (3.2MB)
    - `Monti Antonio T03 1800.pdf` (3.2MB)

### Mes 2+ — Mejoras estratégicas

12. **Internal linking contextual desde Home**: Agregar al menos 3-4 `<Link>` en el HTML estático del homepage hacia páginas de alta prioridad. Ejemplo: en la sección "¿Qué ofrecemos?", añadir un link `"Ver todas las telas →"` que apunte a `/telas`.

13. **Internal linking en Blog**: En cada post, enlazar los nombres de telas mencionados a sus páginas de producto. Ejemplo: "Lycra Lafayette" → `<Link href="/telas/telas-importadas/lycra-lafayette">`.

14. **Internal linking en Portafolio**: Enlazar el campo `tela` de cada proyecto a la página de tela correspondiente.

15. **Service schema en Servicios**: Agregar JSON-LD `@type: "Service"` en cada página de servicio con `name`, `description`, `provider`, `areaServed`, `offers`.

16. **LogoCarousel alt texts**: Usar el nombre real de cada empresa en lugar de "Logo cliente". Requiere actualizar el array de logos con `{ n: 14, name: "nombre empresa" }`.

17. **Alterar H1 home de sr-only a visible**: Considerar mostrar el H1 como un subtítulo pequeño debajo del slider o integrado en el Hero — más señal SEO con el mismo contenido.

---

## Métricas a monitorear

Después de implementar las mejoras, monitorea en **Google Search Console** y **Google Analytics**:

- [ ] Impresiones y clics para "sublimación textil Venezuela" (keyword principal)
- [ ] Coverage report — verificar que las páginas de telas y servicios estén todas indexadas
- [ ] Rich results — `FAQPage` debería aparecer en 2-3 semanas de indexación
- [ ] CTR en páginas de sostenibilidad y portafolio (mejora esperada con OG image)
- [ ] Core Web Vitals: LCP (cloud-a.png conversión a WebP impacta sostenibilidad)
- [ ] Páginas con 0 impresiones — posible pérdida de indexación en telas/servicios

---

*Generado con Claude SEO Skill — 12 de abril de 2026*
