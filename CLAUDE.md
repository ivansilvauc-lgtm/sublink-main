# Sublink Project Memory

## Project Description

Sublink is a Next.js-based web application for fabric/textile services. The project uses modern React components with TypeScript, featuring server-side rendering and static generation for SEO optimization.

## Build Commands

<!-- AUTO-MANAGED: build-commands -->
- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks
<!-- END AUTO-MANAGED -->

## Architecture

<!-- AUTO-MANAGED: architecture -->
```
src/
├── app/              # Next.js app router pages
│   ├── layout.tsx    # Root layout with metadata, JSON-LD schema
│   ├── page.tsx      # Home page
│   ├── robots.ts     # Robots metadata
│   ├── sitemap.ts    # XML sitemap generation (telas + servicios + blog)
│   ├── blog/
│   │   ├── page.tsx  # Blog listing page (sorted by date, grid layout)
│   │   ├── [slug]/   # Blog post pages (dynamic routing, metadata generation, related posts)
│   │   └── posts/    # Blog post content components (.tsx files)
│   ├── servicios/
│   │   └── [slug]/   # Services pages (dynamic routing, metadata generation)
│   ├── telas/
│   │   └── [...slug]/ # Fabrics/textiles pages (dynamic routing, metadata generation)
│   └── sostenibilidad/ # Sustainability page with eco-friendly content
├── components/       # React components
│   ├── Header/
│   ├── Counter/
│   ├── Detalles/     # Detail view components
│   ├── Estampacion/  # Stamping/printing section
│   ├── Sostenibilidad/ # Sustainability page components (TextReveal, TreeReveal, SublinkLogo)
│   ├── VideoReciclar/ # Video modal component for recycling content
│   ├── UI/           # Common UI components (MiniPop, Footer)
│   └── ...
├── lib/
│   ├── constant.ts   # Application constants (SUBLINK_URL)
│   ├── blog.ts       # Blog data, BlogPost interface, helper functions
│   ├── servicios.ts  # Services data
│   └── telas.ts      # Fabrics/textiles data
├── model/
│   └── tela.ts       # ITela interface, Iconos enum, IconosAlt mapping
└── ...other config files
```

Key configuration:
- **URL Base**: `https://www.sublink.company` (SUBLINK_URL constant)
- **Module Path Alias**: `@/*` maps to `./src/*`
- **Next.js Version**: 14.2.2
- **Remote Image Patterns**: via.placeholder.com
<!-- END AUTO-MANAGED -->

## Conventions

<!-- AUTO-MANAGED: conventions -->
### General Patterns
- **Constants**: Centralized in `src/lib/constant.ts` (e.g., SUBLINK_URL)
- **Path Aliases**: Use `@/` prefix for all imports (e.g., `@/lib/constant`, `@/components/Header`, `@/model/tela`)
- **Language**: Spanish for all user-facing content and UI text
- **Component Structure**: Each component in dedicated folder with `.tsx` file

### Layout & Viewport
- **Root Layout** (`src/app/layout.tsx`):
  - Poppins font (weights: 200, 300, 400, 600, 700, 800, 900; styles: normal, italic; display: swap)
  - Global metadata base with SUBLINK_URL, metadata title template, and default keywords
  - Viewport constraints: device-width, initialScale 1, maximumScale 1, userScalable false
  - JSON-LD schema (LocalBusiness type with name, url, logo, description, address, areaServed, contactPoint, sameAs Instagram)
  - Vercel Analytics (@vercel/analytics/react) + Google Analytics (GA ID: G-FQ4RY25W5X via @next/third-parties)
  - Suspense-wrapped Video component for lazy loading search params
  - Layout structure: Header > MiniPop > {children} > Video (lazy) > Footer
  - Max-width container: max-w-[1920px] mx-auto with Poppins className

### Metadata & SEO
- **Base Metadata**:
  - Default title: `Sublink Company | Servicios de Estampados y Sublimación Textil`
  - Title template: `Sublink | %s` (dynamic pages)
  - Default keywords: telas, sublimacion, estampados, sublimacion textil, sublimacion continua, sublimacion digital, sublimacion por rollo, sublimacion por metro, sublimacion venezuela, sublimacion textil venezuela, estampados venezuela
  - Authors: [{ name: 'Sublink Company' }, { name: 'Visual' }], Creator: Sublink, Publisher: Sublink
  - Canonical URLs based on SUBLINK_URL
  - OpenGraph: title, description, url, siteName, images (1200x630), locale (es_ES), type (website)
  - Robots: index, follow
  - Default description: Personalizamos +40 tipos de telas que tenemos disponibles, a través de la tecnología de Sublimación Textil Continua, con máquinas que permiten estampar el ancho de las telas en su totalidad, desde un metro hasta un rollo completo!. También ofrecemos etiquetas, vinil textil, DTF, corte laser, accesorios e insumos.

- **Dynamic Route Metadata Pattern**:
  - `generateMetadata()` async function pulls data from static arrays (servicios or telas)
  - `generateStaticParams()` for pre-rendering dynamic routes at build time
  - `dynamicParams = true` allows rendering unknown segments at runtime
  - Always set canonical URL, OpenGraph image/title/description, locale (es_ES)

### Routing
- **Dynamic Services**: `/servicios/[slug]` with servicios.find() lookup
- **Dynamic Fabrics**: `/telas/[...slug]` with catch-all route (categoria_slug + slug)
- **Blog Pages**:
  - `/blog` (index): Lists all posts sorted by date (descending), displays in 2-column grid
  - `/blog/[slug]` (individual posts): Dynamic routing with generateStaticParams from blogPosts array, imports content components from `/blog/posts/`
  - Post content mapped via contentMap (slug -> React component)
  - Related posts: Shows 2 other posts from blogPosts array filtered by slug
- **Static Pages**: `/sostenibilidad` (sustainability), `/page.tsx` (home)

### Sitemap Generation (`src/app/sitemap.ts`)
- Root: priority 1.0, frequency: monthly
- `/sostenibilidad`: priority 0.9, frequency: yearly
- `/blog`: priority 0.8, frequency: weekly (index page, includes metadata sorting)
- Blog posts (`/blog/[slug]`): priority 0.7, frequency: monthly (dynamic from blogPosts array)
  - lastModified uses post.fecha (YYYY-MM-DD format)
  - Includes all posts from blogPosts array via getAllSlugs()
- Servicios: priority 0.8, frequency: monthly
- Telas: priority 0.6, frequency: monthly
- All entries: lastModified: new Date()

### Image Handling
- **Next.js Image component** for optimization
- **WebP format** for static assets (`.webp`)
- **Alt text**: Descriptive Spanish text for accessibility
- **Responsive sizing**: Object-fit classes (contain, cover)

### Styling
- **Tailwind CSS**: Primary styling framework
- **Custom Classes**: Custom bg patterns (e.g., `sostenibilidad-bg`)
- **Color Scheme**: Primary color (#0082c9 for buttons), green accent (#619b55 for sustainability)
- **Max Width**: 1920px container (`max-w-[1920px] mx-auto`)

### Client vs Server Components
- **Server Components** (default): Pages and data-fetching logic
- **Client Components** (`"use client"`): Interactive features needing hooks (Video, modals, etc.)
- **Suspense**: Wraps lazy-loaded client components for search params

### Video Component Pattern
- URL-based activation: `?video=descubre-como-se-elaboran-nuestras-telas`
- Router back() on close
- YouTube iframe embeds for sustainability page content

### Blog Content Pattern
- **Data Source**: `src/lib/blog.ts` contains BlogPost interface and blogPosts array
- **Content Mapping**: Post content components imported in `/blog/[slug]/page.tsx` via contentMap (slug -> React.ComponentType); component must exist to render post
- **Post Structure**: Each post includes slug, titulo, descripcion, fecha (YYYY-MM-DD), autor, categoria, imagen, tiempoLectura, keywords[]
- **Content Components**: `.tsx` files in `/src/app/blog/posts/` directory, return JSX article content, rendered via prose classes with Tailwind typography
  - Example: `tipos-de-fibras-y-telas.tsx` exports TiposDeFibras component with sectioned fiber guide (4 fiber types: natural/synthetic/artificial/sustainable; yarn titration systems with table; 3 weave types: knit/woven/tricot; finish categories: basic and technical; quick reference table for garment-to-fabric associations)
- **Metadata Generation**: Dynamic metadata from blogPosts array (title, description, keywords, canonical URL, OpenGraph with post.imagen)
- **SEO Features**:
  - Breadcrumb navigation: Inicio > Blog > {post.titulo}
  - JSON-LD Article schema (headline, description, image, datePublished, author.name, articleBody)
  - Formatted date display: formatFecha() converts YYYY-MM-DD to localized Spanish format (es-VE)
- **Related Posts**: Filter blogPosts excluding current post, display up to 2 in 2-column grid with hover animations
- **Styling**: prose-blue prose-lg with custom heading/link/table styles via Tailwind prose classes; responsive tables with overflow-x-auto
- **CTA**: WhatsApp contact button in both blog listing and individual post pages (same message format as other pages)

### Carousel Components
- **Embla Carousel Pattern**: Use `embla-carousel-react` with optional plugins (AutoScroll, etc.)
- **Auto-Play Configuration**: AutoScroll plugin with playOnInit: true enables automatic playback
- **Keyboard/Mouse Control**: Implement toggleAutoplay callback to manage play/stop state via API hooks
- **Slide Generation**: Create slides array from data, map through with .map() for index-based rendering

### Home Page (page.tsx)
- **Component Structure**: Composition pattern with sequential section imports and layout
- **Section Order**: Slider > Ofrecemos > GoogleReviewsBadge > VideoReciclar > PrintOnDemandSection > Estampacion > Counter > LogoCarousel
- **Main Container**: flex flex-col items-center justify-between for full-width responsive sections

### Service Sections
- **PrintOnDemand Section**: Two-column grid (lg:grid-cols-2) with text and visual
- **Text Content**: Feature list (4 items max) with checkmark icons, dual CTA buttons (active/disabled states)
- **Image Side**: Responsive h-80 lg:h-[420px] with overlay gradient (black/40 opacity) and positioned text label
<!-- END AUTO-MANAGED -->

## Deployment Configuration

<!-- AUTO-MANAGED: deployment -->
**Vercel Configuration** (`vercel.json`):
```json
{
  "framework": "nextjs",
  "buildCommand": "npm run build",
  "installCommand": "npm install",
  "outputDirectory": ".next"
}
```

Deploys to Vercel with Next.js framework detection and standard build/output directories.

**Google Site Verification**:
- Verification file: `/public/googlee93a4b315cbce2f9.html` (deployed for Google Search Console)
- Used for domain ownership verification in Google Search Console
<!-- END AUTO-MANAGED -->

## Key Dependencies

<!-- AUTO-MANAGED: dependencies -->
### Production Dependencies
- **Framework**: Next.js 14.2.2, React 18.2.0, React DOM 18.2.0
- **Analytics**: Vercel Analytics 1.3.1, Google Analytics (via @next/third-parties 14.2.2)
- **UI Components**: Flowbite React 0.7.3
- **Animation**: Framer Motion 11.2.12
- **Carousel**: Embla Carousel 8.1.6 (auto-scroll & React)
- **Video**: react-modal-video 2.0.1 (YouTube modal player)
- **Utilities**: react-countup 6.5.3 (number animation)
- **Image Processing**: Sharp 0.33.3
- **Styling**: Tailwind CSS 3.3.0, PostCSS 8.x, Autoprefixer 10.0.1
- **TypeScript**: 5.x

### Dev Dependencies
- **Linting**: ESLint 8.x with next/eslint-config 14.2.2
- **Type Definitions**: @types/node, @types/react, @types/react-dom, @types/react-modal-video 1.2.3, @types/react-slick 0.23.13
<!-- END AUTO-MANAGED -->

## Data Models

<!-- AUTO-MANAGED: data-models -->
### ITela Interface (src/model/tela.ts)
```typescript
interface ITela {
  id: string;
  nombre: string;
  categoria: 'Telas Importadas' | 'Telas Nacionales' | 'Telas Ecológicas';
  categoria_slug: 'telas-importadas' | 'telas-nacionales' | 'telas-ecologicas';
  slug: string;
  caracteristicas: string;
  descripcion: string;
  composition: string;
  ancho: number;           // width in cm
  peso: number;            // weight in gr/m2
  precio: number;
  usos: string;
  tejido: string;          // fabric weave type
  rotacion: "Si" | "No";   // rotation/stamping capability
  base_ecologica: "Si" | "No";
  imagen_zoom: string;
  imagenes: string[];
  iconos: Iconos[];
  colors: string[];
}
```

### Iconos Enum (src/model/tela.ts)
22 fabric characteristic icons with alt text mapping (IconosAlt):
- **Core Icons**: FourWayStretch, Antifluido, FacilLavado, HomeDecor, Moda, Muralla, Outdoor
- **Performance**: PesoLigero, PetFriendly, Polar, RapidaAbsorcion, Reciclado, Resistente, SecadoRapido
- **Finish & Feel**: SoftTouch, SweaterResist, Textura, Transpirable, UPF50, Vintage, Lycra
- **Asset Path**: `/assets/iconos/icono-{name-kebab}.webp`
- **Alt Text**: Each icon has descriptive Spanish alt text in IconosAlt mapping

### Services Data (src/lib/servicios.ts)
- `IServicios` interface defines service metadata
- **Fields**: slug, title, subtitle, equipment_image, results_image, results_image_alt, description, details[], advantages[], sublink[], doit, metaTitle?, metaDescription?, keywords?
- **Services (6 total)**:
  - `sublimacion-textil-a-gran-formato`: Textile sublimation with EPSON plotters and continuous calandras (1.55m width, 10,000 m/month capacity)
  - `dtf-para-marquillas-laser-toner`: DTF labels LASER TONER (A4, tabloide format, 1-hour express delivery)
  - `dtf-industrial-continuo`: Industrial continuous DTF (60cm print width, durable 50-100 washes)
  - `corte-laser-textil`: Laser textile cutting (double pointer machine, 1.8m x 2.4m work area)
  - `etiquetas-nylon-y-silicon-monocromaticas`: Nylon and silicon monochromatic labels (black resin)
  - `vinil-textil`: Textile vinyl with variety of finishes (reflective, glow in the dark, metallic)
- **Dynamic Routing**: Services pages at `/servicios/[slug]`
- **Metadata**: Dynamic metadata generation with SEO fields (metaTitle fallback to title, metaDescription fallback to description)

### Blog Data (src/lib/blog.ts)
- **BlogPost Interface**:
  - `slug`: string (URL identifier, kebab-case)
  - `titulo`: string (article title in Spanish)
  - `descripcion`: string (short description for preview)
  - `fecha`: string (publication date, YYYY-MM-DD format)
  - `autor`: string (author name, e.g., "Sublink Textil")
  - `categoria`: string (category tag, e.g., "Guías de Telas", "Tendencias")
  - `imagen`: string (featured image path, webp format)
  - `tiempoLectura`: string (estimated read time, e.g., "5 min", "8 min")
  - `keywords`: string[] (SEO keywords array)
- **Blog Posts Array** (blogPosts: BlogPost[]):
  - "telas-para-trajes-de-bano": Swimsuit fabric guide (Lycra, Microfibra comparison)
  - "print-on-demand-modelo-actual": POD business model guide (sublimation, startup steps)
  - "tipos-de-fibras-y-telas": Comprehensive textile fibers guide (natural, synthetic, artificial, sustainable fiber types; yarn titration systems; weave types; technical finishes; 8 min read)
- **Helper Functions**:
  - `getBlogPost(slug: string)`: Find post by slug
  - `getAllSlugs()`: Get all post slugs for routing
- **Dynamic Routing**: Blog posts at `/blog/[slug]` load content from imported React components
- **Content Components**: Post content rendered from `.tsx` files in `/src/app/blog/posts/` directory; dynamic import via contentMap (slug -> React.ComponentType)
- **Metadata**: Dynamic generation with canonical URLs, OpenGraph, keywords; JSON-LD Article schema support
- **Usage**: Consumed by:
  - `/app/blog/page.tsx` (index, sorted by fecha descending)
  - `/app/blog/[slug]/page.tsx` (individual posts with generateStaticParams and contentMap)
  - `/app/sitemap.ts` for blog post sitemap entries

### Fabrics Data (src/lib/telas.ts)
- Large static array of ITela objects with full data structures
- **Export**: `export const telas: ITela[]`
- **Categories** (3 total):
  - `Telas Ecológicas` (categoria_slug: `telas-ecologicas`): Recycled PET-based fabrics (Chiffon Liviano Eco, Toalla Microfibra, Lycra Ecológica, etc.)
  - `Telas Importadas` (categoria_slug: `telas-importadas`): Premium imported fabrics (Loneta Soft, Lycra Lafayette, etc.)
  - `Telas Nacionales` (categoria_slug: `telas-nacionales`): Domestic fabrics (Microfibra Nacional, etc.)
- **Data Structure Per Fabric**:
  - Required: id, nombre, categoria, categoria_slug, slug, caracteristicas, descripcion, composition, ancho, peso, precio, usos, tejido, rotacion, base_ecologica, imagen_zoom, imagenes array, iconos array, colors array
  - All fabric records include both rotacion ("Si"/"No") for stamping capability and base_ecologica ("Si"/"No") for ecology classification
- **Dynamic Routing**: Fabrics pages at `/telas/[categoria_slug]/[slug]` use slug and categoria_slug for lookups
- **Metadata**: Dynamic metadata generation from telas array via generateMetadata in page.tsx
- **Usage**: Consumed by:
  - `/app/telas/[...slug]/page.tsx` for dynamic page generation and recommendations
  - `/app/telas/[...slug]/page.tsx generateStaticParams()` for pre-rendering all fabric routes
  - InteractiveImage component for hotspot fabric links
  - Ofrecemos component for filtered fabric displays (eco vs non-eco)
<!-- END AUTO-MANAGED -->

## Component Details

<!-- AUTO-MANAGED: components -->
### Calculadora Component
- **Location**: `src/components/Detalles/Calculadora.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Price calculator widget on fabric product pages
- **Props**: `precio` (number), `nombreTela` (string)
- **State Management**:
  - `total`: number state (initial: precio), updated via handleTotal()
  - `metrosTela`: string state, tracks input value from metros field
  - `handleTotal(metros: string)`: Updates both states, calculates total = Number(metros) * precio
- **Layout Structure**:
  - Container: flex flex-col gap-2, w-full, responsive margin (mt-10 sm:mt-0 lg:mt-10)
  - Heading: "Calculadora de precios" (text-[#363636], font-semibold, text-xl)
  - Calculator section: flex bg-[#0082c9] text-white p-3 rounded-lg items-start justify-between
- **Calculator Fields** (inside blue container):
  - Icon: Calculator symbol `/assets/calculadora-simbolo.png` (20x20)
  - Metros input: type="number", defaultValue={1}, min={0}, w-20 h-8, bg-[#a6f6ff], rounded-lg, text-center, border-transparent, onChange triggers handleTotal()
  - Price per meter: displays "Precio por metros" label + €{precio}
  - Total amount: displays "Monto*" label + €{total.toLocaleString('en')}
- **Bottom Section**:
  - Disclaimer: "*Precio basado en el tiempo de producción" (text-xs)
  - WhatsApp button: href to api.whatsapp.com/send with encodeURIComponent() for message: "¡Hola! Me gustaría comprar {metrosTela}mts de tela: {nombreTela}"
  - Button styling: bg-[#0082c9] text-white py-1 px-10 rounded-lg font-semibold
- **Responsive**: text-xs sm:text-[10px] lg:text-xs for field labels

### LogoCarousel Component
- **Location**: `src/components/Logos/LogoCarousel.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Auto-scrolling carousel displaying client logos in grid layout
- **Dependencies**: embla-carousel-react (with AutoScroll plugin for automatic playback)
- **Implementation**:
  - Embla carousel with loop: true, AutoScroll plugin (playOnInit: true, speed: 1)
  - toggleAutoplay callback manages play/stop state via emblaApi.plugins().autoScroll
  - useEffect initializes auto-scroll on mount
  - Slides array: 25 items (pairs of logo indices 1-50, excluding last empty pair)
  - Each slide displays 2x2 grid of logos with flex flex-col items-center justify-center gap-y-6
- **Layout Structure**:
  - Section: my-40 pointer-events-none (prevents interaction while scrolling)
  - Heading: text-primary text-5xl font-bold text-center tracking-tighter px-4 mb-20 "Clientes que han confiado en nosotros"
  - Carousel viewport: embla class with embla__viewport and embla__container
  - Logo items: w-36 h-36 shadow-md bg-zinc-50 with Image component (aspect-[1/1], w-full h-auto p-7)
- **Assets**: SVG logos from `/assets/logos-clientes/{number}.svg` (1-50 pattern)
- **Styling**: Tailwind grid with p-2 padding per slide, shadow effects

### Counter Component
- **Location**: `src/components/Counter/Counter.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Animated statistics display with intersection observer
- **Implementation**:
  - Uses `useInView` hook from framer-motion with `{ once: true }` option
  - Displays three metrics: 15+ years experience (prefix '+ ', suffix 'años'), 60,000 mts/year (suffix 'mts'), 25+ white fabrics
  - CountUp animation (2.75s duration) triggered when element enters viewport
  - Full-width primary-bg section with flex layout
  - Responsive: flex-col (mobile) to flex-row (sm and up) with adaptive spacing
  - Text layout with section groups aligned by items-center justify-center with adaptive widths (sm:w-[15-20ch] md:w-[30ch])

### Footer Component
- **Location**: `src/components/UI/Footer.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Page footer with contact info, blog link, and company details
- **Layout**: Three-column responsive layout with flex-col lg:flex-row
  - Left: Location info with localization icon - Address: "Av. 137, CC IMPERIAL II 3-08, PISO 3 (frente al CC Galeria), Valencia, Carabobo, Venezuela" with phone "+58 424-4067274"
  - Center: "SUBLINK COMPANY" text-4xl bold heading with "Quiénes Somos" text-2xl subtext
    - Added links: "📝 Blog Textil" (text-blue-300 hover:text-white, href="/blog")
    - Added link: "♻️ Sostenibilidad" (text-lime-300 hover:text-white, href="/sostenibilidad")
  - Right: Three contact items - Email (sublinkve@gmail.com), Instagram link (sublink.ve), Hours ("We are open from: MON - FRI 8:30 am - 4:30 pm")
- **Styling**: footer-bg class with responsive text sizes (text-base sm:text-xs md:text-sm xl:text-base on left, text-zinc-50)
- **Icon Sizing**: localization icon w-8 xl:w-10; email/instagram/horario icons w-5 sm:w-6 xl:w-10
- **Responsive**: flex-col lg:flex-row with items-center lg:items-start, gap-10 lg:gap-0
- **Assets**: Icons from `/assets/` directory (localization.svg, email.svg, instagram.svg, horario.svg)

### PrintOnDemand Section Component
- **Location**: `src/components/PrintOnDemand/PrintOnDemand.tsx`
- **Type**: Server component (no `"use client"`)
- **Purpose**: Showcase digital sublimation service (Print on Demand) with CTA
- **Layout Structure**: Two-column grid (lg:grid-cols-2) with gap-14 items-center, max-w-6xl mx-auto
- **Left Section (Text Content)**:
  - Badge: inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] mb-4 "Sublimación Digital"
  - Heading: text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 "Estampa tus diseños" + line break + "en cualquier tela"
  - Feature list: 4 items with checkmark icons (blue circles with white checkmarks)
    1. "Impresión desde 1 metro hasta rollo completo"
    2. "Tecnología EPSON de alta definición y durabilidad"
    3. "Compatible con más de 40 tipos de telas de poliéster"
    4. "Colores vibrantes que no se descascaran ni se agrietan"
  - Feature styling: flex items-start gap-3, checkmark span (mt-1 w-5 h-5 rounded-full bg-[#157ec2] flex items-center justify-center), SVG checkmark (w-3 h-3 text-white)
- **CTA Buttons** (flex flex-col sm:flex-row gap-4):
  - Active: `/servicios/sublimacion-textil-a-gran-formato` link, bg-[#157ec2] text-white, hover:bg-[#1269a8], "Ver servicio de sublimación"
  - Disabled: Placeholder button with border-2 border-gray-200 text-gray-400 cursor-not-allowed, "🔒 Sube tu Print (próximamente)"
- **Right Section (Visual)**:
  - Image container: relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl
  - Image: `/img/telas/telas-importadas/lycra-peruana-zoom.webp` (object-cover, responsive sizes)
  - Overlay gradient: absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
  - Positioned label (bottom-6 left-6 text-white):
    - Title: "Print on Demand" (text-lg font-bold)
    - Subtitle: "Desde 1 metro · Sin inventario" (text-sm text-white/80)

### Blog Pages (Dynamic)
- **Blog Index** (`src/app/blog/page.tsx`):
  - Server component with metadata export (title, description, keywords, canonical, openGraph)
  - Displays all blog posts sorted by fecha descending (newest first)
  - Grid layout: grid-cols-1 md:grid-cols-2 with gap-8
  - Each article card: Image (h-52), category badge, title, description (line-clamp-3), date, read article link
  - CTA section: Blue background with WhatsApp contact button
  - Helper: formatFecha() function for es-VE locale date formatting
- **Blog Post Detail** (`src/app/blog/[slug]/page.tsx`):
  - Dynamic routing with generateStaticParams() from blogPosts array
  - Loads content from mapped React components (contentMap)
  - Dynamic metadata generation: title, description, keywords, canonical, openGraph with image
  - Layout: Breadcrumb navigation > Article header > Featured image > Article content (prose styling) > Related articles (2 max) > CTA WhatsApp section
  - JSON-LD Article schema embedded (headline, description, image, datePublished, author)
  - Prose styling: Custom typography classes (prose-h2, prose-h3, prose-a, prose-strong, prose-table)
  - Related articles: Filtered to exclude current post, max 2 cards with image thumbnails
  - Error handling: notFound() if slug or content component missing
- **Blog Post Content** (`src/app/blog/posts/*.tsx`):
  - "telas-para-trajes-de-bano.tsx": Swimwear fabric guide with product comparison table, care instructions
  - "print-on-demand-modelo-actual.tsx": POD business model guide with startup steps, fabric compatibility box, success callouts
  - Both use React component exports, markdown-style content with headings, lists, tables
  - Custom styling: blockquotes (bg-blue-50 border-l-4 border-blue-600), info boxes (bg-gray-50 border border-gray-200), callouts (rounding, padding)
  - Internal links: e.g., `/telas/telas-importadas/lycra-lafayette` for related fabric products
- **Navbar Integration** (`src/components/Header/Navbar.tsx`):
  - Added "BLOG" nav item to desktop menu (text-gray-700 hover:text-blue-500, href="/blog")
  - Blog link appears in main navigation alongside TELAS, TELAS ECO, SERVICIOS, SOSTENIBILIDAD

### Video Component (Modal)
- **Location**: `src/components/VideoReciclar/Video.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Modal video player for embedded YouTube content
- **Implementation**:
  - Named export: `export const Video = () => { ... }`
  - ModalVideo props:
    - `channel='youtube'`
    - `videoId='lMJXxhRFO2k'`
    - `isOpen={searchParams.get('video') === 'descubre-como-se-elaboran-nuestras-telas'}`
    - `onClose={() => router.back()}`
  - Hook dependencies: `useSearchParams` and `useRouter` from `next/navigation`
  - Styling: Imported `./modal-video.min.css`

### VideoReciclar Component
- **Location**: `src/components/VideoReciclar/VideoReciclar.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Animated recycling section with reveal effect, floating elements, and video link
- **Implementation**:
  - Uses framer-motion with `useInView` hook (`{ once: true }`) for viewport detection and `useAnimation`
  - Main section: motion.section with aspect-[1/1] (mobile) lg:aspect-[4/1], relative w-full overflow-hidden
  - Clip-path animation on section entry: polygon(0 0, 100% 0, 100% 0, 0 0) to polygon(0 0, 100% 0, 100% 100%, 0 100%), duration 2s, delay 0.5s
  - Background layer: Infinite zoom/pan (scale 1.1 to 1.2, y: 0 to -10, x: 0 to -10, 16s duration, easeInOut reverse)
    - Desktop: `/img/reciclaje/fondo-cielo.webp` (hidden lg:block)
    - Mobile: `/img/reciclaje/cielo-sublink-square.webp` (block lg:hidden)
  - Content container: Centered positioned (top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2), scale fade-in (0.8→1 opacity, 1s duration, 0.8s delay)
  - Bottle image: `/img/reciclaje/botella.webp` with bounce animation (y: 0 to -5, 2.5s duration, infinite reverse), basis-1/2 p-6
  - Text section: animated heading "Descubre cómo se elaboran las telas de poliéster reciclado" (text-2xl, drop-shadow, opacity 0→1, 1s duration, 0.9s delay)
  - Video link: Link to "/" with query param `video=descubre-como-se-elaboran-nuestras-telas`, scroll={false}, bg-zinc-100 px-5 py-2 rounded-full
  - Cloud elements: Two motion.divs with horizontal scroll animation (x: 0→100% and 100%→0, 100s duration, linear infinite)
    - Cloud-a: absolute -left-1/2 -bottom-[580px] (hidden xl:block, p-6)
    - Cloud-a: absolute -left-1/2 responsive bottom (-bottom-32 sm:-bottom-96 lg:-bottom-32 xl:-bottom-20 2xl:-bottom-10), p-6, opacity-80
- **Responsive**: flex-col-reverse (mobile) to lg:flex-row with px-10 lg:space-x-20 at container, pt-10 lg:pt-0 on text section

### InteractiveImage Component
- **Location**: `src/components/InteractiveImage/InteractiveImage.tsx`
- **Type**: Server component (no `"use client"`)
- **Purpose**: Interactive image with hotspot links to fabric products
- **Implementation**:
  - Dual-variant design with conditional rendering:
    - Desktop (hidden md:block): 1920x830px image (`/img/imagen-interactiva-final.webp`)
    - Mobile (block md:hidden): 950x980px image (`/img/imagen-interactiva-final-mobile.webp`)
  - Four positioned hotspots (item + CSS class):
    - "Tela de Toalla" → `/telas/telas-ecologicas/toalla-microfibra` (desktop: 75% top, 30% left; mobile: 54% top, 48% left)
    - "Tela traje de baño" → `/telas/telas-importadas/lycra-lafayette` (desktop: 64% top, 25% left; mobile: 45% top, 43% left)
    - "Tela cortina" → `/telas/telas-nacionales/microfibra-nacional` (desktop: 30% top, 90% left; mobile: 30% top, 80% left)
    - "Tela para muebles" → `/telas/telas-importadas/loneta-soft` (desktop: 77% top, 68% left; mobile: 77% top, 68% left)
  - Hotspot styling: w-8 h-8 circular with opacity-70, border-2 border-zinc-50, with tooltip showing fabric name in primary color
  - Custom CSS classes (cojin, trapo) for positioning different hotspot types
  - z-index management: desktop z-50 on towel, mobile z-40/z-50 variants

### Ofrecemos Component
- **Location**: `src/components/Ofrecemos/Ofrecemos.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Services overview section with animated cards and modal integration
- **Implementation**:
  - Uses framer-motion `useInView` with `{ once: true }` for viewport animation
  - Container animation: opacity 0 to 1, y 20 to 0, delay 0.3s, duration 0.6s
  - Icons section: Four responsive feature icons (metro.webp, rapidez.webp, telas.webp, ecologica.webp) with flex-row spacing
    - Icon sizing: w-16 md:w-24
    - Icon labels: "Desde 1 metro", "Producción rápida", "Diferentes telas", "Tela ecológica" (text-xs sm:text-sm md:text-lg)
  - Heading section: "¿Qué ofrecemos?" in text-primary, responsive text-5xl sm:text-7xl, bold, tracking-tighter
  - Service description:
    - Line 1: "Servicio de sublimación textil a gran formato." (text-lg sm:text-xl, font-bold, uppercase)
    - Line 2: "Convertimos telas blancas en telas exclusivas con el print de tu preferencia." (text-lg sm:text-xl, font-bold, uppercase)
    - Line 3: "Usamos tintas y materiales de primera calidad..." (text-sm sm:text-base, text-zinc-500)
  - Three modal cards with aspect-[40/50] sizing and 600x799px images:
    - "TELAS" card (image: `/img/ofrecemos/sublimacion-textil.webp`, telas filtered by non-ecológicas)
    - "SERVICIOS TEXTILES" card (image: `/img/ofrecemos/servicios-textiles.webp`, all servicios)
    - "TELAS ECO" card (image: `/img/ofrecemos/productos-complementarios.webp`, telas filtered by ecológicas)
  - Card layout: w-80 md:w-60 lg:w-72 xl:w-96, rounded-3xl, overflow-hidden with absolute positioned image background
  - Text overlay: "TELAS" / "SERVICIOS TEXTILES" / "TELAS ECO" heading (text-4xl md:text-3xl xl:text-4xl, zinc-50, font-semibold, tracking-tighter)
  - Responsive: flex-col md:flex-row with md:space-x-4 lg:space-x-10

### MiniPop Component
- **Location**: `src/components/UI/MiniPop.tsx`
- **Type**: Server component (no `"use client"` directive)
- **Purpose**: Fixed left-side floating navigation panel with social links
- **Implementation**:
  - Hidden on mobile, visible on desktop (lg:block)
  - Fixed positioning at left side, top-1/4, z-50 with drop-shadow effects
  - Three interactive links inside absolute positioned container:
    - WhatsApp (href: api.whatsapp.com/send/?phone=584244067274&text=Vengo%20de%20la%20Web)
    - Instagram (target="_blank" to instagram.com/sublink.ve)
    - Home (Next.js Link component to "/" route)
  - SVG icons (20x20, white fill, hover:scale-105 effect)
  - Primary background color container (w-16 h-28) with minipop-clip custom clip-path styling
  - Inner flex layout: flex-col, items-center, justify-center, space-y-2 gaps, absolute positioned
  - Responsive drop-shadow: default [0_15px_10px_rgba(0,0,0,0.4)] on hover [0_8px_8px_rgba(0,0,0,0.4)] with transition-all duration-300

### Dynamic Service Pages
- **Location**: `src/app/servicios/[slug]/page.tsx`
- **Pattern**: Dynamic routing with service slug parameter
- **Metadata**: `generateMetadata()` pulls metaTitle, metaDescription, keywords from servicios array, setting canonical and og:image with 1200x630 dimensions
- **Static Params**: `generateStaticParams()` generates all service routes at build time
- **Title Sizing**: Conditional responsive sizing based on title length (text-4xl to 2xl:text-[84px])
- **Layout**:
  - Hero section with title, subtitle, and equipment image (responsive sizing with conditional dimensions)
  - Result section with image and description (dark primary background, 450px md:h-96)
  - Details section with structured content (details[], advantages[], sublink messaging, doit call-to-action)
- **Image Integration**: Uses `next/image` with responsive width/height pairs, absolute positioning for overlays
- **Responsive**: Two-column layout (lg:flex-row) with gap-x-4, responsive padding (px-12 lg:px-24)

### Dynamic Fabric Pages
- **Location**: `src/app/telas/[...slug]/page.tsx`
- **Pattern**: Catch-all dynamic routing with [categoria_slug]/[slug] - slug array lookup by params.slug[1]
- **Configuration**: `export const dynamicParams = true` allows runtime rendering of unknown segments
- **Metadata Generation**:
  - `generateMetadata({ params })`: Returns metadata with title=nombre, description=descripcion
  - Canonical: SUBLINK_URL + "/telas/" + categoria_slug + "/" + slug
  - OpenGraph: title=nombre, description=descripcion, url (canonical), images[1200x630]=imagen_zoom, locale=es_ES, type=website
  - Sets category="Tela", siteName="Sublink Company"
- **Static Params**: `generateStaticParams()` returns array of {slug: [categoria_slug, slug]} for all fabrics
- **Data Lookup**: `telas.find(tela => tela.slug === params.slug[1])` retrieves fabric data
- **Recommendations Filter**: `telas.filter(tela => tela.categoria_slug === params.slug[0] && tela.slug !== params.slug[1])`
- **Main Layout** (flex-col-reverse lg:flex-row gap-8, mt-32 sm:mt-44, max-w-6xl mx-auto mb-20, px-2 lg:px-1, h-full):
  - Left section (basis-full): ImageGallery with imagen_zoom, imagenes array, isEco={tela.base_ecologica}, isEstampar={tela.rotacion}
  - Right section (flex-col sm:flex-row lg:flex-col gap-2, basis-full):
    - Fabric name: h1 text-2xl font-semibold text-[#363636] tracking-wide
    - Price label: p text-zinc-600 "Precio por unidad:"
    - Price display: h2 text-2xl font-semibold text-[#363636] tracking-wide €{precio}
    - Color label: p text-zinc-600 "Color"
    - Color swatches: flex flex-row gap-2, each color square is w-12 h-12 border-[1px] border-zinc-900 with dynamic backgroundColor
    - Calculadora component: <Calculadora precio={tela.precio} nombreTela={tela.nombre} />
- **Detail Section** (flex-col-reverse lg:flex-row gap-8, mt-10):
  - Left table (basis-full): border-4 border-[#0082c9] rounded-xl px-6 py-14, w-full, max-w-2xl lg:max-w-lg
    - Rows: Composición, Usos, Peso(gr)/m2, Ancho (cm), Características, Tipo de tejido, Base ecologica
    - Row styling: border-b-[1px] border-zinc-400, text-left sm:text-center font-semibold text-sm py-3
    - Cell styling: td text-right py-1 text-zinc-700 font-regular text-sm
  - Right description (basis-full): border-t-2 border-[#0082c9], flex flex-col items-center lg:items-start lg:justify-start
    - Heading: h2 text-2xl font-semibold text-[#363636] tracking-wide "Descripción de la tela"
    - Description text: p text-zinc-600 text-sm text-center lg:text-left
    - Icons row: flex flex-row border-t-2 border-b-2 border-[#0082c9] pt-7 pb-6 w-full items-center lg:items-start justify-center lg:justify-start gap-3
    - Icon images: Next.js Image component, w-12 sm:w-20 aspect-square, alt from IconosAlt mapping
- **Recommendations**: Carousel rendered conditionally if recomendaciones.length > 0, displays same-category fabrics
- **Error Handling**: Returns h1 "Not found" if tela data not found
- **Not Found Case**: min-h-screen mt-56 max-w-5xl mx-auto mb-20 px-2 lg:px-0

### Sostenibilidad Page
- **Location**: `src/app/sostenibilidad/page.tsx`
- **Type**: Server-side rendered page
- **Purpose**: Comprehensive sustainability and eco-friendly fabrics page
- **Metadata**:
  - Title: "Telas Ecológicas y Sostenibilidad Textil | Sublink Company"
  - Keywords: sostenibilidad, telas ecológicas, telas recicladas, telas pet, telas sostenibles, telas ecológicas venezuela
  - Canonical: SUBLINK_URL + /sostenibilidad
- **Key Sections**:
  - Hero (590px mobile, 1000px desktop) with animated text and tree reveal components (leaf vector overlay)
  - "¿Qué son las telas ecológicas?" - Definition, benefits, PET fabric info with bottle count visualization
  - "Por qué usar telas recicladas PET" - Four focus areas with green accent headers: Reciclaje, Calidad, Impacto Social, Diferenciación
  - Embedded YouTube video (iframe, ID: 0lTb4e28IMU, 96x450px video container) - Production process
  - "Sostenibilidad" section - Sublink's Venezuela-first position and zero-waste policies
  - "Nuestras Políticas" subsections:
    - Fábrica por encargo (Print On Demand) - Single facility manufacturing
    - Cero Desperdicio (Zero Waist Policy) - Recycling and craft material donations
  - Partner logos section: Sutex, Greentex, Lafayette
  - Footer section with leaf vectors and animated SublinkLogo
- **Styling**:
  - Custom bg class: `sostenibilidad-bg`
  - Primary green accent: #619b55 (used for headings and highlights)
  - Responsive padding: px-2 sm:px-20
  - Responsive text sizes: text-[45px] sm:text-[110px]
- **Components Used**: TextReveal, TreeReveal, SublinkLogo (animated reveal components)
- **Assets**:
  - `/img/sostenibilidad/vector-hojas.webp` - Hero leaf vector (45% width on desktop, 80% opacity)
  - `/img/sostenibilidad/botellas-conteo.webp` - Bottle count visualization (75% width container)
  - `/img/sostenibilidad/logo-sutex.png` - Partner logo (490x143px)
  - `/img/sostenibilidad/logo-greentex.png` - Partner logo (640x240px)
  - `/img/sostenibilidad/logo-lafayette.png` - Partner logo (640x240px)
  - `/img/sostenibilidad/vector-hojas-derecho.webp` - Footer leaf vector (right side, 45% width desktop)
<!-- END AUTO-MANAGED -->

## Notes

<!-- AUTO-MANAGED: notes -->
### Architecture & Performance
- **App Router**: Uses Next.js 14 App Router with dynamic routing for services (`[slug]`) and fabrics (`[...slug]`)
- **Turbo Mode**: Development builds enabled with `--turbo` flag for faster iteration
- **Static Generation**: `generateStaticParams()` pre-renders all service and fabric pages at build time
- **Dynamic Params**: `dynamicParams = true` allows runtime rendering of unknown route segments

### SEO & Metadata
- **Sitemap**: Dynamic XML sitemap generation at `/sitemap.ts` includes all routes with appropriate priorities
- **Robots Meta**: Set to "index, follow" in root layout
- **JSON-LD Schema**: Organization schema with contactPoint and sameAs (Instagram) in root layout
- **Canonical URLs**: Set on all pages using SUBLINK_URL constant to prevent duplicate content issues
- **OpenGraph**: All pages include title, description, image, siteName, locale (es_ES) for social sharing

### Data Management
- **Static Data Arrays**: Services, fabrics, and blog data stored in `src/lib/servicios.ts`, `src/lib/telas.ts`, and `src/lib/blog.ts`
- **Type Safety**: TypeScript interfaces (ITela, IServicios, BlogPost) ensure data consistency
- **Lookup Pattern**: Dynamic pages find relevant data using `.find()` on slug parameter
- **Blog Content Pattern**: Blog post content loaded from React component files mapped by slug (contentMap)

### Video & Media
- **Modal Video**: URL-based activation pattern via search param `?video=descubre-como-se-elaboran-nuestras-telas`
- **YouTube Embeds**: Sustainability page includes iframe for production process video (ID: 0lTb4e28IMU)
- **Video Component**: Wrapped in Suspense in root layout for lazy loading search params

### Sustainability Focus
- **Unique Position**: Sublink is Venezuela's first and only PET fabric provider
- **Zero-Waste Policy**: Print-on-demand manufacturing with fabric scrap donations to artisans
- **Partner Ecosystem**: Collaborates with Sutex, Greentex, Lafayette for certified sustainable materials
- **Environmental Impact**: Emphasizes PET bottle recycling and circular economy initiatives

### File Structure
- **Constants**: Single source of truth at `src/lib/constant.ts` (SUBLINK_URL)
- **Data Modules**:
  - `src/lib/servicios.ts` - Services array and IServicios interface
  - `src/lib/telas.ts` - Fabrics array and ITela interface
  - `src/lib/blog.ts` - Blog posts array, BlogPost interface, helper functions (getBlogPost, getAllSlugs)
- **Blog Content**: React component files in `src/app/blog/posts/` directory (telas-para-trajes-de-bano.tsx, print-on-demand-modelo-actual.tsx)
- **Models**: Data interfaces in `src/model/tela.ts` with Iconos enum and IconosAlt mapping
- **Components**: Organized by feature (Header, UI, Sostenibilidad, Detalles, VideoReciclar, etc.)
- **Assets**: Images stored in `/public/img/` organized by feature directory, webp format preferred

### Analytics & Tracking
- **Vercel Analytics**: Integrated for performance monitoring and Web Vitals
- **Google Analytics**: GA ID G-FQ4RY25W5X configured in root layout
- **Tracking**: Both analytics initialized at page load via root layout

### Responsive Design
- **Mobile-First**: Tailwind breakpoints (sm, md, lg, xl, 2xl) used throughout
- **Container Queries**: Max-width 1920px with mx-auto for centered layout
- **Padding Scales**: px-2 mobile, px-20 desktop common pattern
- **Text Scaling**: Responsive font sizes using sm: and lg: prefixes

### Common Dependencies & Versions
- **embla-carousel-react@8.1.6**: Carousel with auto-scroll support
- **react-modal-video@2.0.1**: YouTube modal player for sustainability section
- **framer-motion@11.2.12**: Animation library for reveal components
- **flowbite-react@0.7.3**: Pre-built UI components
- **sharp@0.33.3**: Image processing for optimization
<!-- END AUTO-MANAGED -->
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         