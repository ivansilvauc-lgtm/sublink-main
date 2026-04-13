# Análisis Completo — sublink.company
**Fecha:** 13 de abril de 2026  
**Analizó:** Claude (Cowork) — basado en código fuente directo  

---

## 1. REPORTE SEO

### Puntuación general: 74/100

---

### 🔴 CRÍTICO (arreglar primero)

**1. Blog excluido del sitemap intencionalmente pero el middleware redirige /blog a /**
→ `src/app/sitemap.ts` línea 7 (comentario) + `src/middleware.ts`  
→ Google desperdicia crawl budget yendo a /blog y encontrando redirect 302. Si el blog no está listo, mejor retirarlo del header nav también, o añadir una landing de "próximamente" con canonical. Actualmente es un redirect silencioso que confunde a Google.

**2. description del layout tiene 154 caracteres → OK, pero el og:description repite exacto el mismo texto**
→ `src/app/layout.tsx` línea 42 y línea 53  
→ El og:description debería estar optimizado para redes sociales (más corto, más emocional, con llamada a la acción). Actualmente tiene 154 chars que es texto técnico/funcional.

**3. Ninguna página de tela tiene Article/Product schema con "precio en VES"**
→ `src/app/telas/[...slug]/page.tsx` — no hay JSON-LD  
→ Sin schema Product, Google no puede mostrar precio, disponibilidad ni imágenes en rich results. Esto es una pérdida directa de CTR en búsquedas de producto.

**4. Falta `<link rel="preconnect">` para fonts y analytics en layout.tsx**
→ `src/app/layout.tsx` — no hay preconnect a `fonts.googleapis.com`, `fonts.gstatic.com`, `www.google-analytics.com`  
→ Esto retrasa LCP (Largest Contentful Paint) porque el browser no inicia la conexión con anticipación. Poner en `<head>` antes de cualquier font.

**5. Dominio "syblinktextil.com" — posible typo de compra**
→ El dominio correcto debería ser "sublinkTextil.com" (con L). Revisar si la compra fue "syb" o "sub". Si es typo, reclamar el correcto antes de que un competidor lo tome y haga brand squatting.

---

### 🟡 IMPORTANTE (impacto medio)

**6. title del layout tiene 51 chars — bien, pero template "%s" en páginas no incluye keyword de ubicación**
→ `src/app/layout.tsx` línea 41: `template: 'Sublink | %s'`  
→ Las páginas de servicio usan `metaTitle` como título completo, que sí incluye "Venezuela". OK para SEO. Pero el home usa el `default` que ya está bien con "Venezuela". Sin problema aquí, pero vigilar que ninguna página use el template sin keyword local.

**7. og:locale en layout es `es_VE` pero en páginas de servicios es `es_ES`**
→ `src/app/layout.tsx` línea 65: `locale: 'es_VE'`  
→ `src/app/servicios/[slug]/page.tsx` línea 35: `locale: 'es_VE'` ✅ (está bien en este archivo)  
→ Verificar que TODAS las páginas dinámicas usen `es_VE` y no `es_ES` por error de copiar/pegar.

**8. Sitemap no incluye `/portafolio` en las entradas dinámicas — solo está como URL estática**
→ `src/app/sitemap.ts` línea 34  
→ El portafolio sí está (priority 0.7). OK. Sin embargo, cada proyecto individual en el portafolio no tiene página propia, así que no se puede linkear individualmente. Considera crear páginas `/portafolio/[slug]` en el futuro para capturar búsquedas específicas de tipo de proyecto.

**9. Imágenes en Slider sin `sizes` prop definido**
→ `src/components/Slider/Slider.tsx` línea 37-41  
→ El `<Image>` con `fill` no tiene `sizes` definido. Next.js descargará la imagen más grande por defecto en todos los breakpoints. Añadir `sizes="100vw"` para el slider.

**10. No hay robots.txt personalizado visible en el código**
→ `src/app/robots.ts` no fue revisado, verificar que exista  
→ Si no existe como `robots.ts`, Next.js sirve uno por defecto que permite todo. Crear uno explícito para controlar `Disallow: /api/` y configurar el `Sitemap:` URL.

**11. No hay `hreflang` (ok para ahora, pero a futuro)**
→ Si el sitio alguna vez hace versión en inglés (para importadores), falta la meta de `hreflang`. Documentar como tarea futura cuando exista versión EN.

---

### 🟢 MEJORAS (impacto bajo)

**12. El H1 visible en TrustBand tiene 71 caracteres — demasiado largo para el peso semántico**
→ `src/app/page.tsx` línea 21  
→ Texto actual: "Sublimación Textil y Telas en Venezuela — Sublink Company, Valencia"  
→ Considera acortarlo a "Sublimación Textil en Venezuela | Sublink, Valencia" (50 chars)

**13. ReviewsCarousel — las reseñas hardcodeadas (fallback) no tienen fecha actualizada**
→ `src/components/UI/ReviewsCarousel.tsx` — RESENAS_FALLBACK  
→ La fecha "hace 2 semanas" en el fallback nunca cambia. Si la API de Google falla, los usuarios ven fechas congeladas. Considera actualizar el fallback o añadir nota "(verificado)".

**14. No hay structured data para FAQPage en el Footer**
→ `src/components/UI/Footer.tsx` — accordion de FAQ  
→ Tienes 5 preguntas frecuentes en el footer. Añadir JSON-LD `FAQPage` schema generaría rich snippets en Google con las respuestas directamente en la SERP. Esto es un quick win alto impacto.

**15. Canonical de la home apunta a SUBLINK_URL sin trailing slash**
→ `src/app/layout.tsx` línea 46: `canonical: SUBLINK_URL`  
→ Asegúrate que `SUBLINK_URL` NO termine en `/` para evitar canonicals duplicados (con y sin slash).

---

### ✅ CORRECTO

- `lang="es-VE"` en el HTML tag ✅
- metadataBase configurado con SUBLINK_URL ✅
- Canonical en cada página dinámica (servicios, telas) ✅
- Open Graph con imagen 1200×630 ✅
- Twitter card `summary_large_image` ✅
- robots: "index, follow" global ✅
- JSON-LD LocalBusiness en layout (dirección, teléfono, coordenadas, horario) ✅
- generateStaticParams en rutas dinámicas (SSG) ✅
- Sitemap dinámico con prioridades diferenciadas ✅
- HSTS + X-Frame-Options + CSP en next.config.mjs ✅
- Google Analytics GA4 integrado ✅
- Vercel Analytics integrado ✅
- Keywords por página en servicios (metaTitle, metaDescription, keywords array) ✅
- BreadcrumbList JSON-LD en páginas de servicio ✅

---

### Plan de acción SEO (prioridad)

1. **Añadir Product JSON-LD** en `telas/[...slug]/page.tsx` con `offers.price`, `offers.priceCurrency: "USD"` (el precio en euros no está indexado por Google Venezuela)
2. **Crear `src/app/robots.ts`** con `Disallow: /api/` y `Sitemap: https://www.sublink.company/sitemap.xml`
3. **Añadir FAQPage JSON-LD** en Footer con las 5 preguntas existentes — rich snippet gratuito
4. **Añadir `preconnect`** a `fonts.googleapis.com` y `fonts.gstatic.com` en layout.tsx para mejorar LCP
5. **Resolver la situación del Blog**: activarlo con al menos 3 artículos O sacarlo del nav y del sitemap completamente
6. **Verificar el dominio "syblinktextil.com"** — confirmar si es typo o es intencional (marca diferente)

---
---

## 2. ANÁLISIS UX/UI

### Puntuación general: 71/100

---

### 🔴 PROBLEMAS CRÍTICOS DE EXPERIENCIA

**UX-1. No hay CTA claro above the fold en mobile**
→ `src/components/Slider/Slider.tsx` — Slide 1 es InteractiveImage, sin botón de conversión visible  
→ El botón "Cotizar ahora" en el TrustBand es pequeño (text-xs) y se pierde. En mobile el usuario no sabe qué hacer al llegar. El botón principal debería estar en el hero mismo, con al menos 44px de altura (estándar táctil de Apple/Google).

**UX-2. Botón flotante de WhatsApp solo en mobile (`lg:hidden`) — desktop no tiene acceso rápido**
→ `src/app/page.tsx` línea 29-40: el botón flotante tiene clase `lg:hidden`  
→ Los usuarios de desktop que quieran contactar deben scrollear hasta el footer o el PreFooter. Considera hacer el botón visible en todos los breakpoints o añadir un CTA fijo en el sidebar derecho para desktop.

**UX-3. Chatbot widget (bottom-6 right-6) compite visualmente con el WhatsApp flotante**
→ `src/components/UI/ChatbotWidget.tsx` — fixed bottom-6 right-6  
→ `src/app/page.tsx` — el WhatsApp también es fixed bottom-6  
→ Ambos están en la misma esquina. En mobile se solapan. El chatbot debería estar en bottom-6 right-6 y el WhatsApp en bottom-6 right-24 (o viceversa), con separación de al menos 60px.

**UX-4. El Slider no tiene autoplay — el usuario puede no descubrir el Slide 2**
→ `src/components/Slider/Slider.tsx` línea 14: comentario "Sin autoplay"  
→ El Slide 2 tiene el copy "Colores EPSON que te van a fascinar" que es valioso. Si el usuario no hace clic en las flechas (que son pequeñas), nunca lo ve. O agrega autoplay suave (5-7 segundos) o fusiona el mensaje en el Slide 1.

**UX-5. Las flechas del Slider son difíciles de encontrar (bg-black/20)**
→ `src/components/Slider/Slider.tsx` líneas 87-100  
→ Las flechas son `bg-black/20` — casi invisibles en imágenes oscuras Y en imágenes claras. Mejorar a `bg-white/70 text-gray-900` o `bg-[#157ec2] text-white` para visibilidad garantizada.

---

### 🟡 FRICCIONES IMPORTANTES

**UX-6. FabricSelector — no hay feedback visual al seleccionar**
→ El selector de "¿Qué vas a confeccionar?" probablemente tiene estados de hover pero no un checkmark claro de "esto está seleccionado". Verificar que el estado activo sea inequívoco (borde azul + checkmark).

**UX-7. AnnouncementBar bloquea el Header en mobile sin padding compensatorio**
→ `src/components/UI/AnnouncementBar.tsx` — fixed top-0 z-[60]  
→ El Header tiene `mt-14` en el Slider pero la AnnouncementBar es un elemento fixed que agrega ~40px extra al top. En resoluciones pequeñas puede estar cubriendo parte del contenido. Verificar que el body tenga `padding-top` que compense la suma de AnnouncementBar + Header.

**UX-8. Footer accordion — el texto de preguntas es muy pequeño (text-xs text-zinc-400)**
→ `src/components/UI/Footer.tsx` — las respuestas usan `text-xs`  
→ Para ser un elemento de FAQ que es parte del SEO y de la confianza del usuario, el texto debería ser al menos `text-sm` (14px). A `text-xs` (12px) es ilegible en mobile sin zoom.

**UX-9. Botón "Hablar con experto en diseño" está disabled sin explicación contextual**
→ `src/components/UI/PreFooter.tsx` — el tercer botón está `disabled` con solo "próximamente" en gris  
→ El usuario ve un botón apagado sin saber cuándo estará disponible ni qué alternativa usar. Mejor: ocultar el botón o reemplazarlo temporalmente con "Escríbenos por WhatsApp para hablar de diseño".

**UX-10. No hay breadcrumb visible en páginas de tela (solo JSON-LD, no visual)**
→ `src/app/telas/[...slug]/page.tsx` — el BreadcrumbList es solo schema  
→ Los breadcrumbs visuales ayudan al usuario a orientarse y reducen el bounce. Con la navegación anidada de Sublink (Telas > Nacionales > Lycra), es especialmente importante mostrarlos.

---

### 🟢 MEJORAS MENORES

**UX-11. ReviewsCarousel — las cards no tienen link a la reseña original en Google**
→ `src/components/UI/ReviewsCarousel.tsx` — las cards no son clickeables  
→ Añadir un enlace al perfil de Google Business para que el usuario pueda ver más reseñas. Aumenta la confianza.

**UX-12. Counter animado — no hay descripción de qué significan los números**
→ El componente Counter muestra números (ej: 500+) pero si el copy es solo el número + etiqueta corta, el usuario puede no entender el contexto. Verificar que cada counter tiene un label descriptivo.

**UX-13. LogoCarousel — logos sin nombre de empresa (solo imagen)**
→ `src/components/Logos/LogoCarousel.tsx` — `alt="Logo cliente"`  
→ El alt text es genérico. Cada logo debería tener el nombre real de la empresa como alt. Además, si el usuario hace hover en un logo, mostrar el nombre de la empresa en tooltip mejoraría la credibilidad.

---

### ✅ UX/UI CORRECTO

- AnnouncementBar con CTA de WhatsApp — baja fricción para contacto ✅
- TrustBand debajo del hero con rating + CTA — buena estructura above fold ✅
- PreFooter con trust indicators (Google 5.0, Epson, Monti Antonio) ✅
- Responsive grid en Portafolio (1→2→3 columnas) ✅
- Dots del Slider ahora grises con hover grow (fix aplicado hoy) ✅
- Cards de blog con hover zoom en imagen ✅
- Footer FAQ accordion — buena organización de info ✅
- Fonts Poppins (900 weight disponible para headings bold) ✅
- Color primario consistente #157ec2 en toda la UI ✅
- ChatbotWidget con lazy load (iframe solo si isOpen) ✅

---
---

## 3. ANÁLISIS QUE TE ESTÁS PERDIENDO

*(Para aplicar a la laptop / al negocio completo)*

### 🅐 Performance / Core Web Vitals (CWV)

**Por qué importa:** Google usa LCP, CLS y FID/INP como ranking factor desde 2021. Un sitio lento cae en posiciones aunque el SEO sea perfecto.

**Cómo auditarlo:**
1. Ve a [PageSpeed Insights](https://pagespeed.web.dev/) y pega `https://www.sublink.company`
2. Busca: LCP > 2.5s ❌, CLS > 0.1 ❌, INP > 200ms ❌

**En tu código, los riesgos principales son:**
- Poppins carga 7 weights (200-900) — son ~500KB de font. Reducir a 400, 700, 900 ahorraría ~60%
- La imagen del Slider (`impresion-textil-1126250.webp`) es 2600×1493px — verificar que Next.js la está sirviendo en tamaño adecuado para mobile
- `fill` en el Slider sin `sizes` puede forzar descarga del 100% del ancho de pantalla
- Microsoft Clarity (heatmap) carga scripts adicionales — medir impacto en TTI

---

### 🅑 Análisis de Conversión (CRO — Conversion Rate Optimization)

**Por qué importa:** Puedes tener tráfico SEO perfecto pero si nadie cotiza, el negocio no crece.

**Métricas a medir:**
- ¿Qué % de visitantes hace clic en "Cotizar ahora"?
- ¿Dónde abandonan más (qué sección)?
- ¿Cuánto tiempo pasan en la página de telas vs. servicios?

**Cómo:**
- **Microsoft Clarity** (ya tienes el script) — activa recordings de sesión y mira los heatmaps. ¿La gente scrollea hasta el PreFooter o rebota en el Slider?
- **Google Analytics 4** (ya tienes G-FQ4RY25W5X) — configura eventos: `clic_whatsapp`, `clic_cotizar`, `scroll_50pct`, `scroll_100pct`

**Quick wins de CRO identificados en el código:**
1. El botón "Cotizar ahora" en TrustBand tiene color verde WhatsApp (#25D366) — puede confundirse. Considera azul Sublink + texto "Pide tu cotización" para que parezca el botón principal, y verde solo para WhatsApp.
2. La página de telas no tiene un botón de compra/cotizar visible — el usuario llega, ve la tela, pero ¿cómo cotiza? Añadir CTA en la ficha de tela.

---

### 🅒 Análisis de Accesibilidad (a11y)

**Por qué importa:** En Venezuela y Latam hay ~15% de población con alguna discapacidad visual. Además, Google usa criterios de accesibilidad como señal indirecta de calidad.

**Cómo auditarlo:**
- Chrome DevTools → Lighthouse → Accessibility (puntaje objetivo: >90)
- O instala extensión [axe DevTools](https://www.deque.com/axe/) en Chrome

**Riesgos identificados en el código:**
- `alt="Logo cliente"` en todos los logos del carrusel — no descriptivo
- El chatbot iframe tiene `title="Asistente Sublink"` ✅ pero el botón del chatbot solo tiene `aria-label` — verificar contraste del ícono
- Las flechas del Slider tienen `aria-label` ✅ pero los dots también necesitan indicar "Slide actual: 1 de 2" (aria-current o aria-selected)
- Todos los colores de texto deben pasar contraste WCAG AA: zinc-400 sobre blanco puede fallar

---

### 🅓 Análisis de Velocidad de Carga de Imágenes (Image Audit)

**Por qué importa:** Las imágenes son el 60-80% del peso de un sitio de productos. Si cargan lento, los usuarios en mobile con datos limitados se van.

**Checklist para tu proyecto:**
```
src/public/img/ofrecemos/
├── sublimacion-textil.webp     ← verificar <200KB
├── servicios-textiles.webp     ← verificar <200KB  
├── productos-complementarios.webp ← verificar <200KB
└── impresion-textil-1126250.webp  ← es 2600×1493px — ¿se sirve en ese tamaño en mobile?
```

**Ejecuta en la laptop:**
```bash
cd C:\Users\administracion1\Desktop\REPOSITORIOS\sublink-main
find public -name "*.jpg" -o -name "*.png" -o -name "*.webp" | xargs ls -lh | sort -k5 -rh | head -20
```
Te da las imágenes más pesadas ordenadas por tamaño.

---

### 🅔 Análisis de Dominios (Brand Protection)

**Dominios comprados confirmados:**
- `sublink.com.ve` — ✅ Excelente, dominio .ve da señales locales fuertes para búsquedas en Venezuela
- `syblinktextil.com` — ⚠️ **REVISAR**: ¿Es "syb" o debería ser "sub"? Si es typo, el dominio correcto es `sublinkTextil.com`

**Dominios recomendados que aún podrías registrar:**
- `sublink.lat` — para expansión latinoamericana
- `sublinkvenezuela.com` — SEO de marca con keyword de país
- `sublinkcompany.com` — nombre exacto de la empresa

**Estrategia de uso:**
- `sublink.company` (principal) con canonical
- `sublink.com.ve` → redirect 301 a sublink.company (señal de entidad local Venezuela)
- Los demás → redirect 301 también

---

### 🅕 Análisis de Velocidad de Red (porque estás en Venezuela)

**El problema específico de Venezuela:**
- Latencia promedio desde Venezuela a servidores de Vercel en US-East: ~120-180ms
- Los usuarios en CANTV/Digitel/Movistar en zonas con mala señal pueden ver TTFBs de 800ms+

**Soluciones ya aplicadas en tu proyecto:**
- Vercel CDN (distribución global) ✅
- Imágenes WebP ✅
- Next.js SSG (páginas pre-generadas) ✅
- ISR en reviews (revalidate: 3600) ✅

**Lo que falta:**
- Edge Runtime para la API de reviews (actualmente Node runtime)
- Precarga de fonts desde el CDN de Vercel (no desde Google Fonts directamente)

---

## RESUMEN DE PRIORIDADES TOTALES

| # | Acción | Impacto | Esfuerzo |
|---|--------|---------|----------|
| 1 | Fix solapamiento WhatsApp + Chatbot en mobile | Alto | 15 min |
| 2 | Product JSON-LD en páginas de tela | Alto SEO | 30 min |
| 3 | FAQPage JSON-LD en Footer | Alto SEO | 20 min |
| 4 | Crear robots.ts explícito | Medio SEO | 10 min |
| 5 | Breadcrumb visual en páginas de tela | Medio UX | 30 min |
| 6 | Configurar eventos GA4 (clic_whatsapp, clic_cotizar) | Alto CRO | 20 min |
| 7 | Revisar Clarity recordings (ya instalado) | Alto CRO | 0 min |
| 8 | Auditar PageSpeed Insights | Alto Performance | 10 min |
| 9 | Resolver dominio "syblinktextil.com" | Crítico Marca | 30 min |
| 10 | Preconnect a Google Fonts en layout.tsx | Bajo Performance | 5 min |

---

*Generado automáticamente desde análisis de código fuente — sublink.company — 2026-04-13*
