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
│   ├── layout.tsx    # Root layout with metadata, JSON-LD schema, AnnouncementBar
│   ├── page.tsx      # Home page
│   ├── robots.ts     # Robots metadata
│   ├── sitemap.ts    # XML sitemap generation (telas + servicios + blog posts)
│   ├── blog/
│   │   ├── page.tsx  # Blog listing page (sorted by date descending, grid layout, metadata)
│   │   ├── [slug]/   # Blog post pages (dynamic routing, metadata generation, related posts, contentMap)
│   │   └── posts/    # Blog post content components (.tsx files)
│   │       ├── telas-para-trajes-de-bano.tsx
│   │       ├── print-on-demand-modelo-actual.tsx
│   │       └── tipos-de-fibras-y-telas.tsx
│   ├── servicios/
│   │   └── [slug]/   # Services pages (dynamic routing, metadata generation)
│   ├── telas/
│   │   └── [...slug]/ # Fabrics/textiles pages (dynamic routing, metadata generation)
│   └── sostenibilidad/ # Sustainability page with eco-friendly content
├── components/       # React components
│   ├── Header/       # Navbar, Header components with menu state
│   ├── Counter/
│   ├── Detalles/     # Detail view components
│   ├── Estampacion/  # Stamping/printing section
│   ├── Sostenibilidad/ # Sustainability page components (TextReveal, TreeReveal, SublinkLogo)
│   ├── VideoReciclar/ # Video modal component for recycling content
│   ├── UI/           # Common UI components
│   │   ├── MiniPop
│   │   ├── Footer    # Footer with social links (WhatsApp, Facebook, Instagram)
│   │   ├── AnnouncementBar  # Announcement banner in root layout
│   │   └── ...
│   ├── FabricSelector/
│   ├── DeadStock/
│   ├── PrintOnDemand/
│   ├── Logos/        # LogoCarousel component for client logos display
│   └── ...
├── lib/
│   ├── constant.ts   # Application constants (SUBLINK_URL)
│   ├── blog.ts       # BlogPost interface, blogPosts array, getBlogPost() and getAllSlugs() helpers
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
  - Layout structure: AnnouncementBar > Header > MiniPop > {children} > Video (lazy) > Footer
  - Max-width container: max-w-[1920px] mx-auto with Poppins className

### Header Components
- **Navbar** (`src/components/Header/Navbar.tsx`):
  - Type: Client component (`"use client"`)
  - Props: { telas: ITela[], servicios: IServicios[] }
  - Menu state: toggleMenu (boolean), menuState object with toggleTelas, toggleTelasEco, toggleServicios (booleans)
  - NAV_ITEM_KEYS constant: ['toggleTelas', 'toggleTelasEco', 'toggleServicios'] (readonly tuple)
  - navItems array with 3 items: { key, toggleState: MenuStateKey, label: "TELAS"|"TELAS ECO"|"SERVICIOS" }
  - Menu logic: handleMenuItems(itemToggle) resets all other menus, toggles selected one (only one menu open at a time)
  - useCallback for handleNavItemClick to optimize toggle dispatch
  - useEffect monitors menuState to update someMenuOpen flag
  - Layout: nav with bg-white shadow-xl relative z-50, flex with logo (left), menu items (center), mobile menu (right)
  - Includes ProgressBar component and MobileNav component for responsive navigation
  - Logo positioned in flex container with navigation items
  - Navigation items: TELAS, TELAS ECO, SERVICIOS (dropdown toggles)

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
- Imports: SUBLINK_URL from `@/lib/constant`, servicios from `@/lib/servicios`, telas from `@/lib/telas`, blogPosts from `@/lib/blog`, ITela and IServicios types
- Returns MetadataRoute.Sitemap (Promise-based async function)
- Entry order: Root > Sostenibilidad > Blog index > Servicios > Telas > Blog posts
- Root: url: SUBLINK_URL, lastModified: new Date(), priority 1.0, frequency: monthly
- `/sostenibilidad`: priority 0.9, frequency: yearly, lastModified: new Date()
- `/blog`: priority 0.8, frequency: weekly, lastModified: new Date()
- Servicios entries: Maps servicios array to `/servicios/[slug]`, priority 0.8, frequency: monthly
- Telas entries: Maps telas array to `/telas/[categoria_slug]/[slug]`, priority 0.6, frequency: monthly
- Blog post entries: Maps blogPosts array to `/blog/[slug]`, priority 0.7, frequency: monthly
  - lastModified: new Date(post.fecha) using post.fecha (YYYY-MM-DD format from BlogPost interface)
- All entries spread into single return array

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
- **Data Source**: `src/lib/blog.ts`
  - Exports BlogPost interface: slug, titulo, descripcion, fecha (YYYY-MM-DD), autor, categoria, imagen, tiempoLectura, keywords[]
  - Exports blogPosts array with 3 posts: telas-para-trajes-de-bano, print-on-demand-modelo-actual, tipos-de-fibras-y-telas
  - Exports helper functions: getBlogPost(slug) -> BlogPost | undefined, getAllSlugs() -> string[]
- **Blog Listing** (`/blog/page.tsx`):
  - Metadata: title "Blog | Sublink Textil Venezuela", keywords for blog content, locale es_VE, OpenGraph
  - Function: formatFecha() converts YYYY-MM-DD to Spanish localized date (es-VE)
  - Sorts posts descending by fecha: [...blogPosts].sort((a,b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime())
  - Layout: max-w-5xl mx-auto, centered header with "Blog" badge, post grid (grid-cols-1 md:grid-cols-2 gap-8)
  - Each post card: image (h-52), titulo, descripcion, date (formatted), author, reading time, link to `/blog/[slug]`
  - Card styling: bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md
- **Blog Post Detail** (`/blog/[slug]/page.tsx`):
  - generateStaticParams() from blogPosts array for pre-rendering
  - generateMetadata() pulls data from getBlogPost(slug) to generate title, description, keywords, canonical URL, OpenGraph with image
  - contentMap: Record<string, React.ComponentType> maps slug to content component
    - "telas-para-trajes-de-bano" -> TelasTrajes
    - "print-on-demand-modelo-actual" -> PrintOnDemand
    - "tipos-de-fibras-y-telas" -> TiposDeFibras
  - Returns notFound() if post or content component missing
  - Layout: max-w-4xl mx-auto with breadcrumb (Inicio > Blog > {titulo})
  - Header: categoria badge, reading time, titulo, descripcion, autor, fecha
  - Featured image: h-72 md:h-96 rounded-2xl with priority loading
  - Renders ContentComponent from contentMap using prose-blue prose-lg styling
  - Related posts: Filter blogPosts excluding current, display 2 in 2-column grid with links
- **Post Content Components**: `.tsx` files in `/src/app/blog/posts/` directory export default React component returning JSX article
  - Examples: TelasTrajes (types), PrintOnDemand (POD model), TiposDeFibras (fiber guide with tables)
- **Styling**: prose-blue prose-lg with Tailwind typography classes, custom prose variants for headings/links

### Carousel Components
- **Embla Carousel Pattern**: Use `embla-carousel-react` with optional plugins (AutoScroll, etc.)
- **Auto-Play Configuration**: AutoScroll plugin with playOnInit: true enables automatic playback
- **Keyboard/Mouse Control**: Implement toggleAutoplay callback to manage play/stop state via API hooks
- **Slide Generation**: Create slides array from data, map through with .map() for index-based rendering

### LogoCarousel Component
- **Location**: `src/components/Logos/LogoCarousel.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Displays scrolling carousel of client logos with automatic playback
- **Dependencies**: embla-carousel-react, embla-carousel-auto-scroll, next/image
- **Slide Data**: slides array generated from 25 pairs of logo indices [[1,2], [3,4], ..., [49,50]]
- **Carousel Setup**: embla-carousel-react with loop: true, AutoScroll plugin (playOnInit: true, speed: 1)
- **Auto-Play Logic**:
  - toggleAutoplay callback manages play/stop state via autoScroll plugin API
  - useEffect triggers toggleAutoplay() on component mount with empty dependency array
  - eslint-disable-next-line react-hooks/exhaustive-deps comment allows intentional hook omission
- **Layout**:
  - Section: my-40 pointer-events-none with h2 title "Clientes que han confiado en nosotros" (text-primary text-5xl font-bold)
  - Embla viewport/container structure: embla > embla__viewport > embla__container
  - Slides mapped with index key, flex flex-col items-center justify-center gap-y-6
  - Two-image layout per slide: w-36 h-36 containers with shadow-md bg-zinc-50
  - Images: Next.js Image component (width/height: 80, aspect-[1/1]) loading SVGs from `/assets/logos-clientes/{number}.svg`

### Home Page (src/app/page.tsx)
- **Component Structure**: Composition pattern with sequential section imports and layout
- **Section Order**: Slider > Ofrecemos > VideoReciclar > FabricSelector > PrintOnDemandSection > Estampacion > Counter > LogoCarousel > GoogleReviewsBadge (bottom)
- **Imports**: Counter, Estampacion, LogoCarousel, Ofrecemos, Slider, VideoReciclar, PrintOnDemandSection, GoogleReviewsBadge, FabricSelector
- **Main Container**: flex flex-col items-center justify-between for full-width responsive sections
- **GoogleReviewsBadge**: Positioned at bottom in centered div (w-full flex justify-center py-8 bg-gray-50 border-t border-gray-100)

### FabricSelector Component
- **Location**: `src/components/FabricSelector/FabricSelector.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Interactive fabric discovery tool with product-use category filtering and line art icons
- **Icons**: 14 SVG line art icons for product categories (TrajesDeBano, Pareo, Short, Moda, Muebles, Chaqueta, Toalla, SalidaDeBano, ToteBag, Mantel, Delantal, Uniforme, Pijama, Camisa)
- **Category Type**: CategoryKey type with 14 keys: trajes, pareo, short, moda, muebles, chaqueta, toalla, salidabano, totebag, mantel, delantal, uniforme, pijama, camisa
- **Categories**: 14 items with key, label (Spanish), Icon (React.FC with className prop)
  - All icons use SVG line art style with viewBox="0 0 48 48", stroke-based design (stroke="currentColor", strokeWidth="1.5"), strokeLinecap="round", strokeLinejoin="round"
  - Camisa icon: dress shirt form with collar and button line detail
- **State Management**: activeCategory tracks selected category (string, CategoryKey type)
- **Fabric Data Structure**: fabricsByCategory Record<CategoryKey, FabricCard[]> with 5-6 fabrics per category
  - FabricCard interface: nombre, slug, categoria_slug, imagen, usos, tag? (optional badge)
  - Tag examples: "Más vendida", "UPF 50", "Eco", "Premium", "Importada", "Resistente", "Pet Friendly", "Antifluido"
- **Responsive Layout**: flex-col lg:flex-row with category tabs on left, fabric grid on right
  - Tab styling: flex items-center gap-2, border-b lg:border-r border-gray-200, cursor-pointer
  - Fabric cards: Link to `/telas/{categoria_slug}/{slug}`, image (h-40), name, uses, optional tag badge
  - Grid: grid-cols-2 lg:grid-cols-3 gap-6 responsive layout
- **Section Container**: max-w-6xl mx-auto with padding and background (bg-white or gray-50)

### DeadStock Component
- **Location**: `src/components/DeadStock/DeadStock.tsx`
- **Type**: Server component (no `"use client"`)
- **Purpose**: Limited inventory flash sale section for surplus fabric rolls
- **Implementation**:
  - deadstockItems array with nombre, descripcion, metros (available), descuento (%), color (hex), colorNombre, slug, categoria_slug, available (boolean)
  - activeItems = deadstockItems.filter(i => i.available) for conditional rendering
  - Returns null if no items available
  - Section: w-full bg-zinc-900 py-16, max-w-6xl mx-auto
  - Header: "Stock Limitado" badge (yellow-400) + "Dead Stock" h2 (text-white) + description (zinc-400)
  - WhatsApp CTA button: Links to wa.me/584162698802 with parameterized message about Dead Stock inquiry
  - Card grid: grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5
  - Each card: displays nombre, descripcion, metros, descuento, color circle (colored background), colorNombre label
  - Updates: Modify deadstockItems array with available: true/false to control display

### UI Components - Footer
- **Footer** (`src/components/UI/Footer.tsx`):
  - Type: Client component (`"use client"`)
  - socialLinks array: WhatsApp (wa.me/584162698802 with parameterized text), Facebook (facebook.com/sublink.ve), Instagram (instagram.com/sublink.ve) with inline SVG icons (w-5 h-5)
  - navLinks array: Telas (href: "/"), Servicios (href: "/"), Sostenibilidad (href: "/sostenibilidad"), Blog (href: "/blog")
  - Main footer grid: bg-zinc-900 text-zinc-300 w-full, max-w-6xl mx-auto px-6 py-14
    - Grid structure: grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 responsive
  - Column 1 (Logo & Tagline): Image logo (w-36 h-auto) + description (text-sm text-zinc-400 max-w-[200px])
  - Column 2 (Contacto): h4 header (text-white text-xs font-bold uppercase tracking-widest), address, phone href, email href, hours (text-xs text-zinc-500)
  - Column 3 (Navegación): h4 header, Link components for each nav item (text-sm text-zinc-400 hover:text-white transition-colors)
  - Column 4 (Síguenos): h4 header, social icon links (w-10 h-10 rounded-lg bg-zinc-800 hover:bg-[#157ec2] flex items-center justify-center text-zinc-300 hover:text-white transition-all)
  - Bottom bar: border-t border-zinc-800 py-5 px-6, copyright text (text-xs text-zinc-500), sublink.company link

### UI Components - AnnouncementBar
- **AnnouncementBar** (`src/components/UI/AnnouncementBar.tsx`):
  - Type: Client component (`"use client"`)
  - ANNOUNCEMENT object with properties: text (emoji + offer text), link (href), linkText, active (boolean flag)
  - Current announcement: "10% de descuento en Lycra Lafayette al mayor" linking to `/telas/telas-importadas/lycra-lafayette`
  - Returns null if ANNOUNCEMENT.active === false (set active: false to hide banner without removing component)
  - Styling: w-full bg-zinc-900 text-white text-sm font-semibold py-2 px-4
  - Layout: flex items-center justify-center gap-2 flex-wrap for responsive center alignment
  - Link styling: underline underline-offset-2 hover:text-blue-100 transition-colors whitespace-nowrap
  - Maintenance: Edit ANNOUNCEMENT object at top of file to change monthly promotions

### UI Components - GoogleReviewsBadge
- **GoogleReviewsBadge** (`src/components/UI/GoogleReviews.tsx`):
  - Type: Functional component (Server-renderable, no hooks)
  - Purpose: Display Google Reviews credibility badge with 4.8 rating
  - Google Link: `https://g.co/kgs/sublink` (target="_blank", rel="noopener noreferrer")
  - Accessibility: aria-label="Ver reseñas en Google"
  - Badge Container: inline-flex items-center gap-3, bg-white border border-gray-200, rounded-xl px-5 py-3, shadow-sm with hover:shadow-md transition
  - Google Logo: SVG with brand colors (G logo using #4285F4 blue, #34A853 green, #FBBC05 yellow, #EA4335 red from official Google brand palette)
  - Rating Display: "4.8" text (text-sm font-bold text-gray-800) + 5-star icon set (w-3.5 h-3.5)
    - Stars 1-4: text-yellow-400 (full stars)
    - Star 5: text-yellow-300 (lighter shade for visual variation)
  - Label: "Google Reviews" text (text-xs text-gray-500)
  - Usage: Imported and rendered in home page (src/app/page.tsx) as social proof element at bottom

### Service Sections
- **PrintOnDemandSection** (`src/components/PrintOnDemand/PrintOnDemand.tsx`):
  - Type: Server component (no `"use client"`)
  - Layout: w-full bg-white py-14 px-4, max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
  - Left column:
    - Badge (inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] "Sublimación Digital")
    - h2 title (text-3xl md:text-4xl font-bold text-gray-900) "Estampa tus diseños\nen cualquier tela"
    - Feature list: 3 items with checkmark icons (w-5 h-5 bg-[#157ec2] rounded-full), text-gray-600, mapped from array
    - Features: "Impresión desde 1 metro hasta rollo completo", "Compatible con más de 25 telas", "Colores vibrantes que no se caen con los lavados ni se agrietan"
    - Technology note: "Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología Epson y Monti Antoni."
    - Logo chips: EPSON and MONTI ANTONIO SVG logos in border-gray-200 containers
  - Buttons: Both disabled (disabled attribute), inactive styling
    - "Print FREE" button (bg-[#157ec2]/50 text-white, title="Próximamente", cursor-not-allowed)
    - "🔒 Sube tu Print" button (border-2 border-gray-200 text-gray-400, title="Próximamente", cursor-not-allowed)
  - Right column: Image container (relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl), Image fill with objectCover, overlay gradient (from-black/40 to-transparent), bottom label "Print on Demand" + "Desde 1 metro · Sin inventario" (text-white)
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
- **Services (8 total)**:
  - `sublimacion-textil-a-gran-formato`: Textile sublimation (EPSON & Monti Antoni calandras, 1.55m width, 10,000 m/month capacity, 200°C heat transfer process)
  - `dtf-para-marquillas-laser-toner`: DTF labels LASER TONER (A4, tabloide format, 1-hour express delivery, 50+ wash durability)
  - `dtf-industrial-continuo`: Industrial continuous DTF (60cm print width, 50-100 wash durability, full personalization)
  - `corte-laser-textil`: Laser textile cutting (double pointer machine, 1.8m x 2.4m work area, edge sealing on synthetics)
  - `etiquetas-nylon-y-silicon-monocromaticas`: Nylon and silicon monochromatic labels (black resin, water/heat resistant to 50°C)
  - `vinil-textil`: Textile vinyl HTV (variety of finishes: reflective, glow in the dark, metallic, 50 wash durability)
  - `servicio-de-costura`: Sewing and textile confection (small to medium volumes, integrated with sublimation/laser/labeling services, patterns, cutting, industrial machines, quality finishes)
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
  - `Telas Ecológicas` (categoria_slug: `telas-ecologicas`): Recycled PET-based fabrics (Chiffon Liviano Eco, Chiffon Textura de Lino, Malla Chiffon Pesada, Moda Colombiana, Lycra Ecológica, Toalla Microfibra)
  - `Telas Importadas` (categoria_slug: `telas-importadas`): Premium imported fabrics (Loneta Soft, Lycra Lafayette, Lycra Legging, Microdurazno, Runner Africa, etc.)
  - `Telas Nacionales` (categoria_slug: `telas-nacionales`): Domestic fabrics (Microfibra Nacional, etc.)
- **Data Structure Per Fabric**:
  - Required: id, nombre, categoria, categoria_slug, slug, caracteristicas, descripcion, composition, ancho, peso, precio, usos, tejido, rotacion, base_ecologica, imagen_zoom, imagenes array, iconos array, colors array
  - All fabric records include both rotacion ("Si"/"No") for stamping capability and base_ecologica ("Si"/"No") for ecology classification
  - Fabric specifications include: ancho (width in m), peso (weight in gr/m²), composition (fiber content), tejido (weave type), usos (applications), with full image galleries
- **Dynamic Routing**: Fabrics pages at `/telas/[categoria_slug]/[slug]` use slug and categoria_slug for lookups
- **Metadata**: Dynamic metadata generation from telas array via generateMetadata in page.tsx
- **Usage**: Consumed by:
  - `/app/telas/[...slug]/page.tsx` for dynamic page generation and recommendations
  - `/app/telas/[...slug]/page.tsx generateStaticParams()` for pre-rendering all fabric routes
  - FabricSelector component for browsing by use-case category
  - InteractiveImage component for hotspot fabric links
  - Ofrecemos component for filtered fabric displays (eco vs non-eco)
<!-- END AUTO-MANAGED -->

## Component Details

<!-- AUTO-MANAGED: components -->
### AnnouncementBar Component
- **Location**: `src/components/UI/AnnouncementBar.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Sticky promotional banner at top of page with monthly offer messaging
- **Implementation**:
  - ANNOUNCEMENT object with: text (promotional message), link (URL to product/page), linkText (CTA label), active (boolean toggle)
  - Current offer: "10% de descuento en Lycra Lafayette al mayor" linking to `/telas/telas-importadas/lycra-lafayette`
  - Returns null if active: false for easy hide/show without code removal
  - Styling: w-full bg-zinc-900 text-white text-sm font-semibold py-2 px-4
  - Layout: flex items-center justify-center gap-2 flex-wrap for responsive center alignment
  - Link styling: underline underline-offset-2 hover:text-blue-100 transition-colors whitespace-nowrap
- **Maintenance**: Edit ANNOUNCEMENT object at top of file to change monthly promotions

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
- **Purpose**: Page footer with contact info, navigation links, and social media
- **Layout**: Four-column responsive grid (grid-cols-1 sm:grid-cols-2 lg:grid-cols-4, gap-10)
  - Col 1 (Logo & Tagline): Sublink logo (brightness-200, w-36 h-auto) + company description (text-sm text-zinc-400)
  - Col 2 (Contacto): Address, phone (+58 424-4067274), email (sublinkve@gmail.com), hours (Lun-Vie 8:30am-4:30pm)
  - Col 3 (Navegación): Links to Telas (/), Servicios (/), Sostenibilidad (/sostenibilidad), Blog (/blog)
  - Col 4 (Síguenos): Social icons (WhatsApp, Facebook, Instagram) as SVG with hover transitions
- **Styling**: bg-zinc-900 text-zinc-300, white headings (text-white text-xs font-bold uppercase tracking-widest)
- **Background**: max-w-6xl mx-auto px-6 py-14 container
- **Responsive**: Adapts from single column (mobile) to 4-column layout (lg), with proper spacing and link hover states

### PrintOnDemand Section Component
- **Location**: `src/components/PrintOnDemand/PrintOnDemand.tsx`
- **Type**: Server component (no `"use client"`)
- **Purpose**: Showcase digital sublimation service (Print on Demand) with CTA
- **Layout Structure**: Two-column grid (w-full bg-white py-14 px-4, max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center)
- **Left Section (Text Content)**:
  - Badge: inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] mb-4 "Sublimación Digital"
  - Heading: h2 text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-6 with line break: "Estampa tus diseños" + br + "en cualquier tela"
  - Feature list: space-y-3 mapped array with 3 items, checkmark icons (w-5 h-5 rounded-full bg-[#157ec2] flex-shrink-0 flex items-center justify-center)
    1. "Impresión desde 1 metro hasta rollo completo"
    2. "Compatible con más de 25 telas"
    3. "Colores vibrantes que no se caen con los lavados ni se agrietan"
  - Feature styling: flex items-start gap-3, SVG checkmark (w-3 h-3 text-white, fill="none", viewBox="0 0 24 24", stroke="currentColor", strokeWidth={3}, strokeLinecap="round", strokeLinejoin="round")
  - Technology note: "Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología Epson y Monti Antoni." (text-sm text-gray-500)
  - Logo chips: EPSON and MONTI ANTONIO SVG logos in border-gray-200 containers
- **CTA Buttons** (flex flex-col sm:flex-row gap-4):
  - Primary button (disabled): bg-[#157ec2]/50 text-white px-7 py-3.5 rounded-full cursor-not-allowed, title="Próximamente", "Print FREE" + span "(próximamente)"
  - Secondary button (disabled): border-2 border-gray-200 text-gray-400 px-7 py-3.5 rounded-full cursor-not-allowed, title="Próximamente", "🔒 Sube tu Print" + span "(próximamente)"
- **Right Section (Visual)**:
  - Image container: relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl
  - Image: next/image fill, src="/img/telas/telas-importadas/lycra-peruana-zoom.webp", alt="Sublimación textil en telas Sublink", className="object-cover", sizes="(max-width: 1024px) 100vw, 50vw"
  - Overlay gradient: absolute inset-0 bg-gradient-to-t from-black/40 to-transparent
  - Positioned label (absolute bottom-6 left-6 text-white):
    - Title: p "Print on Demand" (text-lg font-bold)
    - Subtitle: p "Desde 1 metro · Sin inventario" (text-sm text-white/80)

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
  - Desktop menu items: TELAS (dropdown), TELAS ECO (dropdown), SERVICIOS (dropdown), SOSTENIBILIDAD, BLOG
  - BLOG link styling: text-gray-700 hover:text-blue-500 font-semibold, href="/blog"
  - SOSTENIBILIDAD link styling: text-lime-500 hover:text-lime-400 antialiased, href="/sostenibilidad"
  - Mobile navigation: Uses MobileNav component for responsive menu
  - Menu state: toggleTelas, toggleTelasEco, toggleServicios managed via handleMenuItems callback
  - NAV_ITEM_KEYS constant defines available toggles (no toggleBlog/toggleSostenibilidad as they don't have dropdowns)

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