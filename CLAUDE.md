# Sublink Project Memory

## Project Description

Sublink is a Next.js 14.2.2 web application for textile and fabric services in Venezuela. The project uses React with TypeScript, featuring server-side rendering and static generation for SEO optimization. It includes a comprehensive blog system, fabric selector, sustainability messaging, and e-commerce integration.

## Build Commands

<!-- AUTO-MANAGED: build-commands -->
- `npm run dev` - Start development server with Turbo mode (`next dev --turbo`)
- `npm run build` - Build for production (`next build`)
- `npm start` - Start production server (`next start`)
- `npm run lint` - Run ESLint checks (`next lint`)
- **Analytics**: Vercel Insights integrated via `/_vercel/insights/script.js` for production performance monitoring
<!-- END AUTO-MANAGED -->

## Architecture

<!-- AUTO-MANAGED: architecture -->
```
src/
├── app/                    # Next.js app router pages
│   ├── api/                # API routes for backend functionality
│   │   └── reviews/        # Google Places reviews endpoint
│   │       └── route.ts    # Fetches business reviews from Google Places API (revalidates hourly)
│   ├── layout.tsx          # Root layout with metadata, JSON-LD schema, AnnouncementBar
│   ├── page.tsx            # Home page (imports components: Slider, IconBar, FabricSelector, PrintOnDemandSection, Estampacion, Ofrecemos, VideoReciclar, Counter, LogoCarousel, ReviewsCarousel)
│   ├── robots.ts           # Robots metadata
│   ├── sitemap.ts          # XML sitemap generation using async default export (telas + servicios + blog posts + home + sostenibilidad + blog index)
│   ├── blog/
│   │   ├── page.tsx        # Blog listing page (sorted by date descending, grid layout, metadata, related posts CTA)
│   │   ├── [slug]/         # Dynamic blog post route with generateStaticParams, generateMetadata
│   │   │   └── page.tsx    # Uses contentMap to route slug to component, includes breadcrumb, related posts (2), prose styling
│   │   └── posts/          # Blog post content components (TSX, rendered as children in prose container)
│   │       ├── telas-para-trajes-de-bano.tsx      # Swimwear fabrics guide
│   │       ├── print-on-demand-modelo-actual.tsx  # Print-on-demand business model
│   │       └── tipos-de-fibras-y-telas.tsx        # Textile fibers comprehensive guide
│   ├── servicios/
│   │   └── [slug]/page.tsx # Services pages with dynamic routing: generateStaticParams() for static generation, generateMetadata() for SEO (title, description, keywords, canonical URL, OpenGraph with og:image). Layout: responsive flex column/row with equipment_image and results_image display (2xl:max-w-[1920px]). Displays service title, subtitle, equipment image, results image with description
│   ├── telas/
│   │   └── [...slug]/      # Fabrics/textiles pages (dynamic routing, metadata generation)
│   ├── portafolio/         # Portfolio page showcasing completed textile projects
│   │   └── page.tsx        # Portfolio listing with PROYECTOS array (9 items), PortafolioGrid component, dark header (zinc-900 to zinc-800), metadata with SEO keywords for "portafolio sublimación"
│   └── sostenibilidad/     # Sustainability page with eco-friendly content
│   │   └── page.tsx        # Comprehensive sustainability messaging: PET recycled fabrics, zero waste policy, print-on-demand model, partner logos (Lafayette, Textilia, Protela). Uses Image optimization, custom components (TextReveal, TreeReveal, SublinkLogo), animated hero sections with vector graphics. Metadata includes canonical URL, keywords (sostenibilidad, telas ecológicas, telas recicladas, telas pet)
├── components/             # React components
│   ├── Header/             # Navbar, Header components with menu state
│   │   ├── Navbar.tsx      # Client component ("use client"): Main navigation with three dropdown menus (TELAS, TELAS ECO, SERVICIOS). Features: Type-safe menu state with MenuStateKey and NavItem types, NAV_ITEM_KEYS readonly tuple, exclusive single-menu-open pattern via handleMenuItems(), useCallback optimization for menu item clicks, passive scroll listener auto-closes menus. Dropdown layouts: 2-column for telas (h-[550px] desktop / h-72 2xl). Imports: NavItemLink, Hamburger, MobileNav, Button from flowbite-react, ProgressBar
│   │   ├── NavItemLink.tsx # Client component navigation item with state management
│   │   ├── Hamburger.tsx   # Mobile hamburger menu toggle
│   │   ├── MobileNav.tsx   # Client component mobile navigation drawer with state
│   │   └── ProgressBar.tsx # Client component scroll progress indicator
│   ├── Counter/            # Counter component for stats
│   ├── Detalles/           # Detail view components
│   ├── Estampacion/        # Stamping/printing section
│   ├── Ofrecemos/          # Product offerings section with three category cards
│   │   └── Ofrecemos.tsx   # Client component ("use client"): Renders TELAS, SERVICIOS TEXTILES, TELAS ECO cards (600x799px, 40/50 aspect ratio). Imports telas array (filtered by categoria_slug), servicios array, ModalComponent. Three responsive cards with background images, each with modal trigger for product details
│   ├── Portafolio/         # Portfolio display components
│   │   └── PortafolioGrid.tsx # Client component ("use client"): Renders portfolio projects grid with category filtering tabs, project cards (colored header, title, description, fabric/meters badges), WhatsApp integration button. Features useMemo filtering optimization, responsive layout (1 col mobile, 2 col sm, 3 col lg). Imports: useState, useMemo from React, Link from next/link
│   ├── Sostenibilidad/     # Sustainability page components (TextReveal, TreeReveal, SublinkLogo)
│   ├── VideoReciclar/      # Video modal component for recycling content
│   ├── UI/                 # Common UI components
│   │   ├── MiniPop.tsx     # Popup component
│   │   ├── PreFooter.tsx   # Pre-footer CTA section: left side with trust messaging + badges (Google 5.0 rating, Epson technology, Monti Antonio), right side with 3 action buttons (WhatsApp contact green, Cal.com fabric expert blue, design expert), responsive md layout, CAL_LINK constant points to 15-min expert call with UTM tracking
│   │   ├── Footer.tsx      # Footer with 4-column responsive grid layout: (1) logo + tagline + social links (WhatsApp href: wa.me/584162698802, Facebook, Instagram with hover effects), (2) contact (Av. 137 CC Imperial II, Valencia, +58 424-4067274, sublinkve@gmail.com, hours Lun-Vie 8:30-4:30pm) + quick nav links, (3) FAQ accordion (5 Q&A items: min order, production time, color durability, design upload, polyester requirement), (4) printing guide accordion (5 Q&A items: file resolution, RGB vs CMYK, margins/bleed, Pantone colors, color proofs). Uses reusable Accordion component with state management. bg-zinc-900 text-zinc-300, max-w-6xl container
│   │   ├── AnnouncementBar.tsx # Announcement banner (client component, "use client"). ANNOUNCEMENT object: text, link, linkText, active flag (set active: false to hide). Features: blink animation (3s step-start, white #ffffff / red #ef4444), WhatsApp CTA button (#25D366 green, hover #1ebe5a), responsive fixed top-0 layout (z-[60]). Layout: left spacer (w-28 sm:w-36) > center animated text with optional Link > right WhatsApp button. Constants: WA_NUMBER (584244067274), WA_MESSAGE (encoded "Hola Sublink, vengo de la página web 👋"). Styling: inline @keyframes blink-announcement, whitespace-nowrap button text, aria-label for accessibility
│   │   ├── GoogleReviews.tsx # Google reviews badge and section components (client-side, fetches from /api/reviews)
│   │   ├── GoogleReviewsServer.tsx # Server component for live Google Places reviews with ISR (revalidates hourly)
│   │   ├── ReviewsCarousel.tsx # Client carousel displaying customer testimonials (embla-carousel with auto-scroll, 6 reviews with avatars and 5-star ratings)
│   │   └── ...
│   ├── FabricSelector/     # Fabric selection component
│   ├── DeadStock/          # Deadstock fabric section
│   ├── PrintOnDemand/      # Print-on-demand feature component
│   ├── Logos/              # LogoCarousel component for client logos display
│   └── ...
├── lib/
│   ├── constant.ts         # Application constants (SUBLINK_URL)
│   ├── blog.ts             # BlogPost interface, blogPosts array, getBlogPost() and getAllSlugs() helpers
│   ├── servicios.ts        # Services data (IServicios interface)
│   └── telas.ts            # Fabrics/textiles data
├── model/
│   └── tela.ts             # ITela interface, Iconos enum, IconosAlt mapping
├── public/
│   ├── assets/
│   │   ├── epson-logo.svg              # Epson brand logo for printing equipment display
│   │   ├── monti-antonio-logo.svg      # Monti Antonio supplier/partner logo
│   │   ├── logos-clientes/             # Client/partner logos directory
│   │   │   ├── protela.svg             # Protela client logo
│   │   │   ├── ram.svg                 # RAM client logo
│   │   │   ├── [n].svg                 # Numbered client logos (1-50, excluding certain numbers)
│   │   │   └── [name].svg              # Named client logos (e.g., ARENA CRISTAL)
│   │   ├── iconos-categorias/          # Category/product type icons
│   │   │   ├── mantel.svg              # Tablecloth category icon
│   │   │   ├── muebles.svg             # Furniture category icon
│   │   │   ├── salidabano.svg          # Swimwear/beach exit category icon
│   │   │   ├── short.svg               # Shorts category icon
│   │   │   ├── totebag.svg             # Tote bag category icon
│   │   │   ├── uniforme.svg            # Uniform category icon
│   │   │   └── [other].svg             # Additional category icons
│   │   └── ...other assets
│   └── img/
│       └── ofrecemos/                  # Product category section background images (Ofrecemos component)
│           ├── sublimacion-textil.webp # TELAS section card background (152KB, 600x799px, 40/50 aspect ratio)
│           ├── servicios-textiles.webp # SERVICIOS TEXTILES section card background (40KB, 600x799px)
│           └── productos-complementarios.webp # TELAS ECO section card background (150KB, 600x799px)
└── ...other config files
```

Key configuration:
- **URL Base**: `https://www.sublink.company` (SUBLINK_URL constant)
- **Module Path Alias**: `@/*` maps to `./src/*`
- **Next.js Version**: 14.2.2
- **Environment Variables** (`.env.local`):
  - `GOOGLE_PLACES_API_KEY` - API key for Google Places reviews (fetches real-time business ratings and review count)
- **Remote Image Patterns** (`next.config.mjs`):
  - `via.placeholder.com` (https) - Placeholder images for testing/fallbacks
  - `lh3.googleusercontent.com` (https) - Google profile photos for Google Places reviews carousel
- **Analytics**: Vercel Analytics + Google Analytics (GA ID: G-FQ4RY25W5X)
- **Google Places API**: Used for fetching reviews via /api/reviews endpoint (requires GOOGLE_PLACES_API_KEY)
- **Vercel Deployment**: Framework: nextjs, buildCommand: `npm run build`, outputDirectory: `.next`
- **Tailwind Configuration** (`tailwind.config.ts`):
  - Content paths: `./src/pages/**/*.{js,ts,jsx,tsx,mdx}`, `./src/components/**/*.{js,ts,jsx,tsx,mdx}`, `./src/app/**/*.{js,ts,jsx,tsx,mdx}`, `node_modules/flowbite-react/lib/esm/**/*.js`
  - **Extended Colors**:
    - Primary: `#157ec2` (Sublink brand blue)
    - Secondary: `#f9f9f9` (Light background)
    - Tertiary: `#f2f2f2` (Lighter background)
    - Gray palette (100-900): `#f5f5f5` to `#171717` (11 steps for consistent contrast)
  - **Plugins**: `flowbite/plugin`, `@tailwindcss/typography` (prose styling for blog content)

### Sitemap Generation
- **sitemap.ts** exports async default function returning Promise<MetadataRoute.Sitemap> with:
  - **Root pages**: home (priority 1.0, monthly), blog index (0.8, weekly), sostenibilidad (0.9, yearly)
  - **Telas entries** (from src/lib/telas.ts array):
    - URL pattern: `/telas/{categoria_slug}/{slug}`
    - Priority: 0.6, changeFreq: monthly, lastModified: current date
  - **Servicios entries** (from src/lib/servicios.ts array):
    - URL pattern: `/servicios/{slug}`
    - Priority: 0.8, changeFreq: monthly, lastModified: current date
  - **Blog entries** (from src/lib/blog.ts array):
    - URL pattern: `/blog/{slug}`
    - Priority: 0.7, changeFreq: monthly, lastModified: post.fecha (actual post date)
  - All URLs use SUBLINK_URL constant for canonical base URL
  - Implementation uses array spreading to combine entry arrays
<!-- END AUTO-MANAGED -->

## Conventions

<!-- AUTO-MANAGED: conventions -->
### General Patterns
- **Constants**: Centralized in `src/lib/constant.ts` (e.g., SUBLINK_URL)
- **Path Aliases**: Use `@/` prefix for all imports (e.g., `@/lib/constant`, `@/components/Header`, `@/model/tela`)
- **Language**: Spanish for all user-facing content and UI text
- **Component Structure**: Each component in dedicated folder with `.tsx` file
- **Client Components**: Use `"use client"` directive at top for interactive components

### Blog System
- **Blog Posts Array**: Stored in `src/lib/blog.ts` as `blogPosts: BlogPost[]`
- **Blog Post Interface**:
  ```typescript
  interface BlogPost {
    slug: string;
    titulo: string;
    descripcion: string;
    fecha: string (YYYY-MM-DD format);
    autor: string;
    categoria: string;
    imagen: string (URL path);
    tiempoLectura: string (e.g. "5 min");
    keywords: string[];
  }
  ```
- **Content Mapping**: `src/app/blog/[slug]/page.tsx` uses `contentMap` to route slug to component
  - Maps: `"slug-name": ComponentName`
  - Components are imported from `../posts/` directory
  - contentMap exports: `{"telas-para-trajes-de-bano": TelasTrajes, "print-on-demand-modelo-actual": PrintOnDemand, "tipos-de-fibras-y-telas": TiposDeFibras}`
- **Dynamic Post Route** (`[slug]/page.tsx`):
  - `generateStaticParams()`: Returns all blog post slugs for static generation
  - `generateMetadata()`: Creates SEO metadata with title, description, keywords, canonical URL, Open Graph (og:title, og:description, og:url, og:image, og:type: article, publishedTime)
  - `formatFecha()`: Converts YYYY-MM-DD to "es-VE" locale format (e.g. "2 de abril de 2026")
  - Layout: Breadcrumb > Header (categoria badge, title, description, author, date) > Featured image > Prose-styled content > Related posts (2) > WhatsApp CTA
  - Content styling: `prose prose-blue prose-lg` with custom heading/link/table styling
  - JSON-LD Article schema embedded in page
- **Blog Listing** (`src/app/blog/page.tsx`):
  - Type: Server component with exported Metadata
  - **Metadata Configuration**:
    - Title: "Blog | Sublink Textil Venezuela"
    - Description: Textile guides, trends, and advice about fabrics and sublimation in Venezuela
    - Keywords: blog telas, guía de telas, sublimación digital, print on demand Venezuela, telas para confección
    - Canonical: `https://www.sublink.company/blog`
    - OpenGraph: title, description, url, siteName "Sublink Textil", locale "es_VE", type "website"
  - **Layout & Sorting**:
    - Grid: 1 col mobile, 2 col desktop (grid grid-cols-1 md:grid-cols-2 gap-8)
    - Sorts posts by date descending: `new Date(b.fecha).getTime() - new Date(a.fecha).getTime()`
    - Max-width container: max-w-5xl mx-auto px-4 py-16
  - **Header Section**:
    - Badge: Blue bg (bg-blue-100 text-blue-700), "Blog" label
    - Title: "Guías y Tendencias Textiles" (text-4xl md:text-5xl font-bold text-gray-900)
    - Description: Textile guides, sublimation, and Venezuelan textile sector info
  - **Article Cards**:
    - Image: Responsive with hover zoom (h-52 overflow-hidden, object-cover hover:scale-105 transition-transform duration-500)
    - Metadata: Category badge (blue-600, uppercase), reading time display, formatted date via formatFecha()
    - Title: Links to individual post (h2 text-xl font-bold, hover:text-blue-600 transition)
    - Description: 3-line clamp (line-clamp-3 text-gray-500 text-sm)
    - Footer: Date + "Leer artículo →" link
  - **formatFecha() Helper Function**:
    - Parses YYYY-MM-DD string, formats to localized "es-VE" date string (e.g., "2 de abril de 2026")
    - Parameters: year, month, day extracted from string split
    - Uses: Date constructor (year, month-1, day) → toLocaleDateString("es-VE", {year, month: long, day})
  - **Date Formatting**: `formatFecha()` function converts YYYY-MM-DD to localized "es-VE" format
- **Current Posts** (as of 2026-04-07, 3 total):
  - "telas-para-trajes-de-bano" (2026-03-15, 5 min, categoria: "Guías de Telas") - Swimwear fabrics guide: lycra, microfibra comparison; chlorine resistance, elasticity, durability. Keywords: telas para trajes de baño, lycra para baño, microfibra, tela resistente al cloro, tela elastizada
  - "print-on-demand-modelo-actual" (2026-03-28, 6 min, categoria: "Tendencias") - POD business model: zero inventory, customer-driven production, sublimación digital, niche selection, channel setup (Instagram, WhatsApp), margin targets (40-50%). Keywords: print on demand, sublimación digital, negocio sin inventario, impresión bajo demanda Venezuela, emprender textil
  - "tipos-de-fibras-y-telas" (2026-04-02, 8 min, categoria: "Guías de Telas") - Comprehensive fiber types guide: natural (algodón, lana, lino, seda), synthetic (poliéster, nylon, acrílico, elastano), artificial (viscosa, rayón, modal, acetato), sustainable (bambú, cáñamo, Lyocell). Includes yarn count systems and weave types. Keywords: tipos de telas Venezuela, fibras textiles, telas para ropa deportiva, telas para uniformes, telas para moda, telas para playa, guía de telas
- **Blog Implementation Architecture**:
  - `src/lib/blog.ts` exports: `BlogPost` interface, `blogPosts` array (3 posts), `getBlogPost(slug)` lookup function, `getAllSlugs()` helper
  - `src/app/blog/page.tsx` is server component with metadata export, sorts posts by date descending, renders 2-column grid with image hover zoom, category badges, reading time
  - `src/app/blog/[slug]/page.tsx` implements dynamic routes with `generateStaticParams()` for SSG, `generateMetadata()` for SEO per post, includes breadcrumb navigation, related posts section (2 items), prose-styled content container
  - `src/app/blog/posts/` directory contains TSX components for each post content (telas-para-trajes-de-bano.tsx, print-on-demand-modelo-actual.tsx, tipos-de-fibras-y-telas.tsx)

### Portfolio System
- **Portfolio Page** (`src/app/portafolio/page.tsx`):
  - Type: Server component with exported Metadata
  - **Metadata Configuration**:
    - Title: "Portafolio | Sublink — Sublimación Textil Venezuela"
    - Description: Real textile sublimation projects from Valencia, Venezuela (uniforms, swimwear, sports, promotional items)
    - Keywords: portafolio sublimación, proyectos textiles, uniformes sublimados, trajes de baño, artículos promocionales, sublimación Valencia
    - Canonical: `https://www.sublink.company/portafolio`
  - **Data Structure**: PROYECTOS array with 9 portfolio items, each with:
    - `id`: Numeric identifier
    - `titulo`: Project title (e.g., "Uniformes deportivos — Club Fútbol")
    - `categoria`: Category filter (e.g., "Uniformes", "Trajes de baño", "Activewear", "Moda", "Promocional", "Decoración")
    - `tela`: Fabric type (e.g., "Microdurazno", "Lycra Peruana", "Chiffon Liviano Eco")
    - `metros`: Square meters used (numeric)
    - `color`: Tailwind color class for card header (e.g., "bg-blue-900", "bg-teal-700")
    - `descripcion`: Project description
  - **Layout**: Dark header section (zinc-900 to zinc-800 gradient) with H1 title "Portafolio", descriptive text about real projects, blue accent line. Content section with PortafolioGrid component
- **PortafolioGrid Component** (`src/components/Portafolio/PortafolioGrid.tsx`):
  - Type: Client component (`"use client"`)
  - Props: `{ proyectos: Proyecto[] }`
  - **Proyecto Type**:
    ```typescript
    type Proyecto = {
      id: number;
      titulo: string;
      categoria: string;
      tela: string;
      metros: number;
      color: string;
      descripcion: string;
    };
    ```
  - **State Management**:
    - `categoriaActiva`: Currently selected filter category (default: "Todos")
  - **Features**:
    - Category tabs: "Todos", "Uniformes", "Trajes de baño", "Activewear", "Moda", "Promocional", "Decoración"
    - Filtering: useMemo optimization for proyectosFiltrados, filters by categoriaActiva
    - Card layout: Colored header area with category badge, project title, description, fabric/meters badges
    - WhatsApp integration: `handleWhatsApp()` function sends pre-filled message to +584244067274 with project title
    - Responsive grid: 1 col mobile, 2 col sm, 3 col lg
  - **Styling**:
    - Category tabs: Active (bg-[#157ec2] text-white shadow-lg), Inactive (bg-zinc-100 text-gray-700)
    - Cards: White background, rounded-lg, shadow-md hover:shadow-xl transition
    - Color header: Tailwind color classes from proyectos array
    - Text styling: h3 line-clamp-2 for titles, p line-clamp-2 for descriptions
  - **Empty State**: Displays message "No hay proyectos en esta categoría" when no matches

### Layout & Viewport
- **Root Layout** (`src/app/layout.tsx`):
  - Poppins font (weights: 200, 300, 400, 600, 700, 800, 900; styles: normal, italic; display: swap)
  - Global metadata base with SUBLINK_URL, metadata title template with `| %s`, and keywords
  - Viewport constraints: device-width, initialScale 1, maximumScale 1, userScalable false
  - JSON-LD schema (LocalBusiness type with name, url, logo, description, address, areaServed, contactPoint, sameAs Instagram)
  - Vercel Analytics + Google Analytics integration
  - Layout structure: AnnouncementBar > Header > MiniPop > {children} > Video (lazy) > PreFooter > Footer
  - Max-width container: max-w-[1920px] mx-auto with Poppins className

### Header/Navigation Components
- **Navbar** (`src/components/Header/Navbar.tsx`):
  - Type: Client component (`"use client"`)
  - Props: `{ telas: ITela[], servicios: IServicios[] }`
  - **Type Safety**:
    - `NAV_ITEM_KEYS` constant: `['toggleTelas', 'toggleTelasEco', 'toggleServicios']` (readonly tuple, enforces type safety)
    - `MenuStateKey` type: `typeof NAV_ITEM_KEYS[number]` (derived union type)
    - `NavItem` interface: `{ key: string; toggleState: MenuStateKey; label: string; classNames?: string }`
    - `MenuState` interface: Object with boolean flags for each menu toggle + generic `[key: string]: boolean`
  - State Management:
    - `toggleMenu`: Boolean for mobile menu visibility
    - `menuState`: MenuState object with keys: `toggleTelas`, `toggleTelasEco`, `toggleServicios`
    - `someMenuOpen`: Derived state tracking if any dropdown is open (via useEffect)
  - Menu Logic:
    - `handleMenuItems(itemToggle: MenuStateKey)`: Resets all menu states to false, then toggles selected one (exclusive one-menu-open pattern)
    - `resetMenuState()`: Closes all menus and mobile drawer (called on scroll events)
    - `handleNavItemClick(toggleState)`: useCallback wrapper for performance optimization, returns click handler
  - **Scroll Behavior**: Passive scroll listener with `{ passive: true }` auto-closes menus on scroll
  - Desktop Layout: Hidden on mobile (<lg), flex display on lg+ screens with nav items and additional links
  - Mobile Layout: Hamburger menu button (sm) toggling MobileNav drawer component
  - Sub-components: NavItemLink, Hamburger, MobileNav, ProgressBar
  - Additional Links: Portafolio (/portafolio, text-gray-700), Sostenibilidad (/sostenibilidad, lime-500 hover:lime-400), Blog (/blog, gray-700)
  - Dependencies: flowbite-react Button, NavItemLink with dynamic onClick handlers
  - Dropdowns: Two-column layout for telas filtering (h-[550px] desktop / h-72 2xl)

### Announcement Bar
- **AnnouncementBar** (`src/components/UI/AnnouncementBar.tsx`):
  - Type: Client component (`"use client"`)
  - **Configuration** (marked with ✏️ EDITAR AQUÍ comments):
    - ANNOUNCEMENT object properties:
      - `text`: Banner message text (current: "Crepe Doble Importado 10€ !!!")
      - `link`: Destination URL (default: empty string)
      - `linkText`: Link label (default: empty string)
      - `active`: Boolean to show/hide banner (default: `true`, set to false to hide)
    - WA_NUMBER: "584244067274" (WhatsApp contact number)
    - WA_MESSAGE: encodeURIComponent("Hola Sublink, vengo de la página web 👋") (pre-filled message)
  - **Layout Structure**: fixed top-0 left-0 w-full bg-zinc-900 text-white z-[60], flex items-center justify-between, py-2 px-4
    - Left Spacer: w-28 sm:w-36 shrink-0 (padding for layout balance)
    - Center: font-semibold text-center flex-1 with announcement-blink animation class, optional Link (ml-2 underline underline-offset-2 hover:text-blue-100 transition-colors whitespace-nowrap)
    - Right WhatsApp Button: shrink-0 flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5a] transition-colors text-white text-xs font-bold px-3 py-1 rounded-full whitespace-nowrap ml-2
  - **Animation**: Inline `@keyframes blink-announcement` with color alternation:
    - 0%, 49%: color #ffffff (white)
    - 50%, 100%: color #ef4444 (red)
    - Timing: 3s step-start infinite (discrete color change every ~1.5 second step)
  - **WhatsApp Icon**: Inline SVG (24x24 viewBox), fill="currentColor", w-3.5 h-3.5 shrink-0
  - **Button Text**: "Escríbenos" (hidden sm:inline on mobile)
  - **Conditional Rendering**: Link and text animation only render if respective props provided

### Google Reviews
- **GoogleReviewsServer** (`src/components/UI/GoogleReviewsServer.tsx`):
  - Type: Server component (no `"use client"`) with ISR (Incremental Static Regeneration)
  - **Revalidation**: `next: { revalidate: 3600 }` - Updates every 1 hour without redeploy
  - **fetchLiveReviews()** async function:
    - Queries Google Places API for PLACE_ID: `ChIJd4jZgbDIwigRmh5Ff5t_6e0` (Sublink Valencia, Venezuela)
    - Fields requested: `rating`, `user_ratings_total`
    - Returns: `{ rating: number, total: number }` or `null` if API unavailable
    - Handles: Missing API key, network errors, invalid API responses gracefully (silent failure, uses fallback)
  - **GoogleReviewsBadgeAuto** export:
    - Async server component that fetches live reviews and passes to GoogleReviewsBadge with optional rating/total props
    - Falls back to static defaults (from GoogleReviewsBadge component) if API unavailable
    - Comment: Places API may have limited coverage in Venezuela, fallback ensures graceful degradation
  - **Integration**: Used in `src/app/page.tsx` - renders in centered div with gray background (w-full flex justify-center py-8 bg-gray-50 border-t border-gray-100)

- **GoogleReviews** (`src/components/UI/GoogleReviews.tsx`):
  - Type: Client component (`"use client"`) with server-side data fetching from `/api/reviews`
  - **Configuration** (marked with ✏️ EDITAR AQUÍ comments):
    - `GOOGLE_RATING = 5.0` - Actual Google Business Profile rating
    - `GOOGLE_TOTAL_REVIEWS = 1` - Total reviews count visible in profile
    - `GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJd4jZgbDIwigRmh5Ff5t_6e0"` - Direct link to reviews
  - **GoogleReviewsBadge** (compact badge component):
    - Props: `{ rating?: number (defaults to GOOGLE_RATING), total?: number (defaults to GOOGLE_TOTAL_REVIEWS) }`
    - Displays: Google G logo (inline SVG), star rating (5-star visual), review count, clickable link to Google Business profile
    - Styling: White background, border-gray-200, rounded-xl, px-5 py-3, hover shadow transition
    - Link: Uses GOOGLE_REVIEWS_URL constant for direct business reviews access
  - **Stars** (reusable star rating component):
    - Props: `{ rating: number, size?: "sm" | "md" }`
    - Renders: 5 stars, yellow-400 for filled, gray-300 for empty based on rating value
  - **GoogleReviewsSection** (full section component):
    - Type: Client component with useEffect + useState for data fetching
    - Fetches: GET `/api/reviews` (endpoint returns: name, rating, total, reviews array)
    - State: `data: ReviewsData | null`, `loading: boolean`, `error: boolean`
    - ReviewsData interface: `{ name: string, rating: number, total: number, reviews: Review[] }`
    - Review interface: `{ author_name, profile_photo_url, rating, relative_time_description, text }`
    - Loading state: Renders ReviewsSkeleton component (3-card skeleton grid)
    - Error state: Returns null if error or no data
    - Display: Section with "Lo que dicen nuestros clientes" header, rating/stars/total count display, 3-column grid of ReviewCards (responsive: 1 col mobile, 2 col sm, 3 col lg)
  - **ReviewCard** component:
    - Displays: Author photo/initial circle, author name, date (relative_time_description), star rating, review text (line-clamp-4)
    - Styling: White background, rounded-xl, shadow-sm, border-gray-100
  - **ReviewsSkeleton** component:
    - Renders: 3 animated loading cards with pulse animation matching ReviewCard structure

- **ReviewsCarousel** (`src/components/UI/ReviewsCarousel.tsx`):
  - Type: Client component (`"use client"`) displaying hard-coded customer testimonials in an auto-scrolling carousel
  - **Carousel Data** (RESENAS array, 6 reviews):
    - Alfredo Silva: "Increíble calidad en la sublimación..." (5★, avatar: A, #1789C4)
    - Valentina Rojas: "Mandé mis diseños un lunes..." (5★, avatar: V, #EA028C)
    - Carlos Medina: "Hicimos los uniformes de nuestro equipo..." (5★, avatar: C, #F6931F)
    - Luisa Fernández: "Pedí telas personalizadas..." (5★, avatar: L, #8AC640)
    - Roberto Díaz: "Excelente servicio. Trabajamos con Sublink..." (5★, avatar: R, #EC1F25)
    - Gabriela Torres: "La mejor empresa de sublimación en Valencia..." (5★, avatar: G, #6B46C1)
  - **Library**: embla-carousel-react with AutoScroll plugin (speed: 0.8, playOnInit: true, loop enabled)
  - **Layout Section**:
    - Container: py-20 bg-gray-50 border-t border-gray-100
    - Header: Google Reviews badge with 5.0 rating, 5 stars (yellow-400), text "Lo que dicen nuestros clientes"
    - Cards: 320px width with 16px margin, white bg, rounded-2xl, shadow-sm, border-gray-100, h-full flex layout
  - **Card Structure**: Avatar circle (colored background, initials) + Name/date metadata → Stars (Estrellas component) → Quote text (line-clamp pending)
  - **Estrellas Sub-component**: Renders 5-star rating display (filled yellow-400 vs gray-200 based on rating)
  - **Autoplay**: toggleAutoplay() useCallback controls emblaApi autoScroll plugin play/stop
  - **Dependencies**: embla-carousel-react, embla-carousel-auto-scroll plugins

### PreFooter
- **PreFooter** (`src/components/UI/PreFooter.tsx`):
  - Type: Client component (`"use client"`)
  - **Purpose**: Call-to-action section before footer with trust indicators and action buttons
  - **Structure**: Single `<section>` with responsive grid layout (max-w-6xl mx-auto, flex flex-col md:flex-row items-center justify-between)
  - **Configuration**:
    - CAL_LINK constant: `https://cal.com/ivan-silva-qa8jpy/15min?utm_source=sublink.company&utm_medium=web&utm_campaign=prefooter` (15-minute fabric expert call with UTM tracking)
    - CAL_LINK_DISABLED constant: `"#"` (placeholder for design expert feature, pending activation)
    - Setup instructions: To change cal.com link, update CAL_LINK constant with new event URL
  - **Layout**:
    - Container: bg-zinc-900, w-full, max-w-6xl mx-auto, px-6 py-14, flex flex-col md:flex-row items-center justify-between, gap-10
    - Grid items: Left column (flex-1, max-w-xl) and Right column (w-full md:w-auto, min-w-[260px])
  - **Left Column - Message + Trust Indicators**:
    - Label: "Valencia, Venezuela · Desde 2018" (text-xs font-bold uppercase tracking-widest, text-[#157ec2])
    - Heading: "¿Listo para estampar tu próximo proyecto?" (text-3xl md:text-4xl font-bold text-white leading-tight, with line break on mobile)
    - Description: "Más de 500 clientes confían en Sublink para sublimación textil de alta calidad. Entregas rápidas, desde 1 metro." (text-zinc-400 text-sm leading-relaxed)
    - **Trust Badges** (flex flex-wrap gap-4 mt-1):
      1. Google Rating: "★★★★★" (text-yellow-400 text-sm) + "5.0 Google" (text-white text-xs font-bold) in bg-zinc-800 rounded-full badge
      2. Epson Technology: Printer SVG icon (w-4 h-4 text-[#157ec2]) + "Tecnología Epson" (text-white text-xs font-bold) in bg-zinc-800 rounded-full badge
      3. Monti Antonio: Palette SVG icon (w-4 h-4 text-[#157ec2]) + "Monti Antonio" (text-white text-xs font-bold) in bg-zinc-800 rounded-full badge
  - **Right Column - Action Buttons** (flex flex-col gap-3 w-full md:w-auto min-w-[260px]):
    1. **WhatsApp Quote Button**:
       - Element: `<a>` with href `https://wa.me/584244067274?text=Hola%20Sublink%2C%20quiero%20cotizar%20un%20proyecto%20👋`
       - Style: flex items-center justify-center gap-3, bg-[#25D366] hover:bg-[#1ebe5d], text-white font-bold, rounded-xl px-6 py-4, transition-all duration-200, shadow-lg shadow-green-900/30
       - Icon: WhatsApp SVG (w-5 h-5, currentColor fill)
       - Text: "Cotizar por WhatsApp"
    2. **Fabric Expert Call Button**:
       - Element: `<a>` with href={CAL_LINK}, target="_blank", rel="noopener noreferrer"
       - Style: flex items-center justify-center gap-3, bg-zinc-700 hover:bg-[#157ec2], text-white font-bold, rounded-xl px-6 py-4, transition-all duration-200, border border-zinc-600 hover:border-[#157ec2]
       - Icon: Calendar SVG (w-5 h-5, stroke-currentColor)
       - Text: "Hablar con experto en telas" with "· gratis" in smaller gray text (text-xs font-normal text-zinc-300 ml-1)
    3. **Design Expert Button** (disabled, pending activation):
       - Element: `<button>` disabled with aria-disabled="true"
       - Style: flex items-center justify-center gap-3, bg-zinc-800 text-zinc-500, opacity-60, cursor-not-allowed, rounded-xl px-6 py-4, border border-zinc-700
       - Icon: Design/pencil SVG (w-5 h-5, stroke-currentColor)
       - Text: "Hablar con experto en diseño" with "· próximamente" in smaller text (text-xs font-normal ml-1)
    4. **Hours Info**: "Mar – Jue · 5:00 pm – 5:30 pm" (text-xs text-zinc-500 text-center)
  - **Styling Details**:
    - Dark zinc-900 background for contrast with white and blue accents
    - Responsive grid changes from vertical (mobile) to horizontal (md+)
    - Trust badges use compact rounded-full pill style with icon + text pairs
    - Buttons use transition-all duration-200 for smooth hover effects
    - Icons rendered as inline SVGs with appropriate colors (green #25D366 for WhatsApp, blue #157ec2 for call)
  - **Dependencies**: Link from next/link

### Ofrecemos (Product Offerings Section)
- **Ofrecemos** (`src/components/Ofrecemos/Ofrecemos.tsx`):
  - Type: Client component (`"use client"`)
  - **Purpose**: Showcases three main product/service categories with interactive modals
  - **Animations**: Uses framer-motion for scroll-triggered entrance animations
    - `containerVariants`: Defines animation keyframes (hidden: opacity 0, y 20 → visible: opacity 1, y 0 with 0.3s delay, 0.6s duration)
    - `useRef()` + `useInView(ref, { once: true })`: Triggers animation when container enters viewport (once on first view)
    - `motion.div` wrapper applies variants and animation state based on isInView
  - **Layout Structure**: Full-width section with responsive flexbox layout
    - Header: Centered title "¿Qué ofrecemos?" (text-primary text-5xl sm:text-7xl font-bold)
    - Subtitle & Description: Three centered text lines explaining textile sublimation service
    - Cards Container: flex flex-col md:flex-row justify-center items-center with responsive spacing (md:space-x-4 lg:space-x-10)
    - Mobile: Stacks vertically (my-4), Desktop: Horizontal row with gap spacing
  - **Three Category Cards** (each 600x799px, aspect ratio 40/50):
    1. **TELAS Card**:
       - Background Image: `/img/ofrecemos/sublimacion-textil.webp` (152KB)
       - Content: White line accent (w-[2px] h-auto bg-primary) + "TELAS" heading (text-4xl md:text-3xl xl:text-4xl)
       - Modal: ModalComponent displaying filtered telas array (excludes "telas-ecologicas" category)
       - Filter Logic: `telas.filter((tela) => tela.categoria_slug !== "telas-ecologicas")`
    2. **SERVICIOS TEXTILES Card**:
       - Background Image: `/img/ofrecemos/servicios-textiles.webp` (40KB)
       - Content: White line accent + Two-line heading ("SERVICIOS" + "TEXTILES" on separate lines)
       - Modal: ModalComponent displaying servicios array (all services)
    3. **TELAS ECO Card**:
       - Background Image: `/img/ofrecemos/productos-complementarios.webp` (150KB)
       - Content: White line accent + "TELAS ECO" heading
       - Modal: ModalComponent displaying filtered telas array (only "telas-ecologicas" category)
       - Filter Logic: `telas.filter((tela) => tela.categoria_slug === "telas-ecologicas")`
  - **Responsive Sizing**:
    - Card Width: w-80 (mobile) → md:w-60 → lg:w-72 → xl:w-96
    - Card Margin: my-4 (mobile) → md:my-20 (desktop)
    - Image Container: relative w-full h-auto object-cover -z-10
    - Text Positioning: mt-8 ml-6 md:ml-4 xl:ml-10 with flexbox layout
  - **Styling**:
    - Cards: rounded-3xl overflow-hidden with absolute positioned background images
    - Heading: font-semibold text-zinc-900 with tracking-tighter for compact spacing
    - White Accent Line: w-[2px] h-auto bg-primary mt-2 (left side design element)
    - Flex Gap: space-x-3 between accent line and text content
  - **Dependencies**: Image from next/image, telas and servicios from @/lib, ModalComponent from @/components/UI/Modal
  - **Data Dependencies**:
    - telas: ITela[] array from src/lib/telas.ts (100+ fabric items with categoria_slug property)
    - servicios: IServicios[] array from src/lib/servicios.ts (4+ services with full details)

### Footer
- **Footer** (`src/components/UI/Footer.tsx`):
  - Type: Client component with `"use client"` directive at top of file
  - **Structure**: Main grid (max-w-6xl, 4 columns with responsive layout) + bottom bar
  - **Column 1 - Logo + Tagline + Social Links**:
    - Image: `/assets/logo-sublink-marca-de-agua.png` (w-36 h-auto, from next/image)
    - Text: "Sublimación textil, telas y estampados de alta calidad en Valencia, Venezuela." (text-sm text-zinc-400 leading-relaxed max-w-[200px] text-center)
    - **Social Links** (flex gap-3 mt-1, socialLinks array with 3 items):
      - WhatsApp: `https://wa.me/584162698802?text=Vengo%20de%20la%20Web` (target="_blank", rel="noopener noreferrer", aria-label)
      - Facebook: `https://www.facebook.com/sublink.ve` (target="_blank", rel="noopener noreferrer", aria-label)
      - Instagram: `https://www.instagram.com/sublink.ve` (target="_blank", rel="noopener noreferrer", aria-label)
      - Icon styling: w-9 h-9 rounded-lg bg-zinc-800 hover:bg-[#157ec2] flex items-center justify-center text-zinc-300 hover:text-white transition-all duration-200
      - Each icon is inline SVG (xmlns, viewBox, fill="currentColor", class="w-5 h-5")
  - **Column 2 - Contact Info**:
    - Address: Av. 137, CC Imperial II 3-08, Piso 3 (frente CC Galería), Valencia, Carabobo, Venezuela
    - Phone: +58 424-4067274 (tel: link, text-sm text-zinc-400 hover:text-white)
    - Email: sublinkve@gmail.com (mailto: link, text-sm text-zinc-400 hover:text-white)
    - Hours: Lun – Vie · 8:30 am – 4:30 pm (text-xs text-zinc-500)
    - **Quick Navigation Subsection** (flex flex-col gap-2 mt-3):
      - Header: "Navegación" (text-xs font-bold uppercase tracking-widest)
      - Links: Telas (/), Servicios (/), Sostenibilidad (/sostenibilidad), Blog (/blog)
  - **Column 3 - FAQ Accordion** (Accordion component with useState):
    - Header: "Preguntas Frecuentes" (text-white text-xs font-bold uppercase tracking-widest)
    - FAQ_ITEMS array (5 items):
      1. "¿Cuál es el pedido mínimo?" → "Desde 1 metro lineal de tela. No hay cantidad mínima para estampación si el diseño ya está preparado."
      2. "¿Cuánto tiempo tarda la producción?" → "Entre 24 y 72 horas hábiles según la cantidad y complejidad. Pedidos urgentes consultar disponibilidad."
      3. "¿Los colores se lavan sin desteñirse?" → "Sí. La sublimación fija el tinte en la fibra. Se recomienda lavar a 30°C al revés y sin blanqueador."
      4. "¿Puedo subir mi propio diseño?" → "Claro. Aceptamos PDF, PNG, AI y PSD a 300 DPI mínimo en perfil de color RGB."
      5. "¿Qué telas admiten sublimación?" → "100% poliéster o mezcla poliéster+elastano. En blanco o colores muy claros para máxima fidelidad de color."
  - **Column 4 - Printing Guide Accordion** (Accordion component with useState):
    - Header: "Guía de Impresión" (text-white text-xs font-bold uppercase tracking-widest)
    - GUIA_ITEMS array (5 items):
      1. "Resolución y formato del archivo" → "Mínimo 150 DPI para telas grandes, 300 DPI para prendas. Formatos: PDF, PNG, AI, PSD. Enviar en perfil RGB."
      2. "Perfil de color: RGB vs CMYK" → "Diseña siempre en RGB. Nosotros hacemos la conversión al perfil de impresión Epson para garantizar fidelidad de color en la tela."
      3. "Márgenes y sangría" → "Agrega 5 mm de sangría en todos los bordes. Para prendas tipo camiseta, respeta 1.5 cm de margen desde las costuras."
      4. "Colores: Pantone y referencias" → "Si tienes un Pantone específico, indícanos el código. Referencia por guía Pantone Solid Coated para máxima precisión."
      5. "Prueba de color (muestra)" → "Recomendamos solicitar una muestra de 0.5 m antes de producir grandes cantidades. Costo de muestra aplica."
  - **Accordion Component** (internal function component):
    - Props: `{ items: { q: string; a: string }[] }`
    - State: `open: number | null` (tracks which accordion item is expanded, useState hook)
    - Rendering: Maps items array, each item in border-b border-zinc-800 last:border-0 div
    - Button structure: w-full flex items-center justify-between gap-2 py-2.5 text-left text-sm text-zinc-300 hover:text-white transition-colors
    - Button content: span (font-medium leading-snug) + SVG chevron (w-4 h-4, rotate-180 when open, transition-transform duration-200)
    - Open state content: Renders `<p>` with pb-3 text-xs text-zinc-400 leading-relaxed pr-4 when open === i
  - **Responsive Layout**: max-w-6xl mx-auto px-6 py-14, grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10
  - **Bottom Bar**:
    - Copyright: "© {year} Sublink C.A. · Valencia, Venezuela" (text-xs text-zinc-500)
    - Link: `https://www.sublink.company` (Link component, text-xs text-zinc-500 hover:text-white)
    - Layout: border-t border-zinc-800 py-5 px-6 flex flex-col sm:flex-row items-center justify-between gap-2
  - **Styling**: bg-zinc-900 text-zinc-300, hover:text-white transitions, border-t border-zinc-800
  - **Imports & Dependencies**:
    - `"use client"` directive at top (client component)
    - `Image` from `next/image` (with width, height, alt props)
    - `Link` from `next/link` (for internal route links)
    - `useState` from `react` (for accordion open state)
    - Accordion component (local utility function inside Footer.tsx)


### API Routes
- **GET /api/reviews** (`src/app/api/reviews/route.ts`):
  - Purpose: Fetch Google Places business reviews and ratings via API route
  - Revalidation: `export const revalidate = 3600` (1 hour, ISR)
  - PLACE_ID: `ChIJd4jZgbDIwigRmh5Ff5t_6e0` (Sublink Valencia, Venezuela) - hardcoded constant
  - Environment Variable: `GOOGLE_PLACES_API_KEY` (required, returns 500 if missing)
  - Query Fields: `name, rating, user_ratings_total, reviews`
  - Returns: JSON with `{ name, rating, total (user_ratings_total), reviews[] }` where fields are normalized from Google Places API response
  - Reviews Array: Contains up to 5 reviews (sliced with `.slice(0, 5)`), each with `author_name, profile_photo_url, rating, relative_time_description, text`
  - Error Handling:
    - 500 if `GOOGLE_PLACES_API_KEY` not configured (status 500, error message)
    - 500 if Google Places API returns non-OK status (status 500, includes detail: error_message from API)
    - 500 on catch with detail: String(err) for network/parsing errors
  - Used by: GoogleReviewsSection (client component in UI/GoogleReviews.tsx) and GoogleReviewsServer (server component, fallback)

<!-- END AUTO-MANAGED -->

## Patterns

<!-- AUTO-MANAGED: patterns -->
- **Image Optimization**: Next.js Image component with `fill`, `sizes`, responsive layouts
- **Link Navigation**: Next.js Link component for all internal routes
- **Metadata Generation**: Dynamic metadata for blog posts using `generateMetadata()` function
- **Static Generation**: `generateStaticParams()` for blog post routes
- **Date Handling**: YYYY-MM-DD strings with toLocaleDateString("es-VE") formatting
- **Styling**: Tailwind CSS utility classes (grid, flex, max-width containers)
- **State Management**: React hooks (useState, useEffect, useCallback) for client-side state
- **Type Safety**: Full TypeScript interfaces for BlogPost, ITela, IServicios

<!-- END AUTO-MANAGED -->

## Dependencies

<!-- AUTO-MANAGED: dependencies -->
### Runtime
- `next@14.2.2` - React framework with App Router
- `react@18.2.0`, `react-dom@18.2.0` - React library
- `framer-motion@11.2.12` - Animation library
- `embla-carousel-react@8.1.6`, `embla-carousel-auto-scroll@8.1.6` - Carousel component
- `flowbite-react@0.7.3` - UI component library
- `react-countup@6.5.3` - Counter animation
- `react-modal-video@2.0.1` - Video modal
- `sharp@0.33.3` - Image processing for Next.js image optimization
- `@vercel/analytics@1.3.1` - Analytics tracking
- `@next/third-parties@14.2.2` - Google Analytics integration

### Development
- `typescript@5` - Type safety
- `eslint@8`, `eslint-config-next@14.2.2` - Code linting
- `tailwindcss@3.3.0`, `postcss@8`, `autoprefixer@10.0.1` - CSS framework and processing
- `@tailwindcss/typography@0.5.13` - Prose styling for blog content
- `@types/node@20`, `@types/react@18`, `@types/react-dom@18`, `@types/react-modal-video@1.2.3`, `@types/react-slick@0.23.13` - Type definitions

### External Services
- **Google Places API** - Business reviews and ratings (requires GOOGLE_PLACES_API_KEY env var in .env.local)
- **Google Analytics** - Tracking ID G-FQ4RY25W5X

### Configuration Files
- **`.env.local`**: Environment variables
  - `GOOGLE_PLACES_API_KEY` - API key for Google Places reviews (fetches real-time business ratings and review count)
- **`next.config.mjs`**: Next.js configuration
  - Image remotePatterns: `via.placeholder.com` (placeholder images), `lh3.googleusercontent.com` (Google review profile photos)

<!-- END AUTO-MANAGED -->

## Best Practices

<!-- AUTO-MANAGED: best-practices -->
- Use Next.js Image component for all images to enable optimization
- Implement proper metadata for SEO (title, description, keywords, Open Graph)
- Use generateStaticParams for dynamic routes that should be pre-rendered
- Implement proper TypeScript interfaces for data structures
- Use path aliases (@/) for all imports to improve code organization
- Keep blog posts in separate .tsx component files within posts/ directory
- Use Spanish language for all user-facing content (es-VE locale)
- Implement proper viewport and device constraints in root layout
- Use Tailwind CSS for consistent styling approach
- Keep components as client components only when necessary ("use client" directive)

<!-- END AUTO-MANAGED -->

## Git Insights

<!-- AUTO-MANAGED: git-insights -->
Recent changes focused on multi-repository synchronization and component enhancement (as of 2026-04-07):
- **Blog System**: Fully implemented with dynamic routing, metadata generation, and content mapping via contentMap
- **Blog Posts**: Three published posts with comprehensive content, metadata, SEO optimization (dates: 2026-03-15, 2026-03-28, 2026-04-02)
  - "telas-para-trajes-de-bano" (2026-03-15, 5 min) - Swimwear fabrics detailed guide
  - "print-on-demand-modelo-actual" (2026-03-28, 6 min) - POD business model guide
  - "tipos-de-fibras-y-telas" (2026-04-02, 8 min) - Comprehensive textile fibers reference
- **Multi-Repository Structure**: Two parallel project directories (/sublink-main for dev work, /REPOSITORIOS/sublink-main for production deployments)
- **Header Navigation**: Navbar component with exclusive menu toggle state management, responsive desktop/mobile layouts, nav item caching with useCallback (synchronized across both repos)
- **Footer Component**: Fully styled 4-column grid layout with logo/socials, contact info, FAQ accordion, printing guide accordion (synchronized across both repos)
- **Blog Listing Page**: Grid layout (responsive 1-2 cols), date sorting (descending), formatted dates via formatFecha() helper, article card metadata display
    - Microfibra Nacional: 2-way stretch, medium chlorine resistance, €7/m, very lightweight, ideal for casual/cover-ups
    - Care instructions: hand wash/cold, air dry only, rinse after chlorine exposure
    - Comparison table: elasticity, chlorine resistance, price, ideal use
  - "print-on-demand-modelo-actual" (2026-03-28, 6 min) - POD business model comprehensive guide
    - Definition: produce only on customer order, zero inventory model
    - Growth drivers: mass customization, social media channels, low entry barrier, catalog flexibility
    - Sublimación digital: full-color without extra cost, durable transfers, 1-unit minimum, 65%+ polyester compatible
    - Fabric compatibility: Microfibra (ideal), Lycra blends (good), dri-fit (excellent), pure algodón (NOT compatible)
    - 5-step startup process: niche selection, design sourcing (Canva, freelance), supplier selection, sales channel (Instagram/WhatsApp), margin strategy (40-50% minimum)
    - Cost: designs ($0-100), samples, digital marketing (initially $0)
    - Fabric compatibility table: polyester %, recommendations
  - "tipos-de-fibras-y-telas" (2026-04-02, 8 min) - Comprehensive textile fiber and weave technical guide
    - Fiber categories: Natural (algodón-casual, lana-thermal, lino-summer, seda-luxury), Synthetic (poliéster-sportswear/sublimation, nylon-durability, acrílico-wool alternative, elastano-stretch), Artificial (viscosa-soft/elegant, rayón-drape, modal-absorbent/intimate, acetato-silk imitation), Sustainable (bambú-eco, cáñamo-durability, Eco Fibra-recycled PET, Lyocell-closed-loop)
    - Yarn count systems: Ne (cotton 840y/lb), Nm (wool 20m/1g), Denier (polyester 1g/9000m). Inverse relationship for Ne/Nm, direct for Denier
    - Knit weaves: Jersey, Piqué, Interlock, Rib, Fleece, French Terry, Jacquard with specific end-use recommendations
    - Woven weaves: Tafeta, Popelina, Twill, Rib-Stop, Denim/Bull Denim, Drill, Oxford, Gabardina with application details
    - Technical note: Point/Knit is elastic/soft; Woven is structured/rigid
- **Blog Listing Page** (/blog): Grid layout (1 col mobile, 2 col desktop), sorted by date descending, featured images, metadata display (categoria, tiempoLectura), hover zoom effect, CTA section "¿Tienes preguntas sobre telas o sublimación?" with WhatsApp link
- **Dynamic Blog Routes**: [slug]/page.tsx with generateStaticParams, generateMetadata, contentMap routing, related posts section (2 related), breadcrumb navigation
  - contentMap: {"telas-para-trajes-de-bano": TelasTrajes, "print-on-demand-modelo-actual": PrintOnDemand, "tipos-de-fibras-y-telas": TiposDeFibras}
  - formatFecha() converts YYYY-MM-DD to es-VE locale (e.g., "2 de abril de 2026")
  - Blog post components use `<article className="prose prose-lg max-w-none">` for consistent styling
- **Blog Interface** (src/lib/blog.ts): slug, titulo, descripcion, fecha (YYYY-MM-DD), autor, categoria, imagen, tiempoLectura, keywords array
  - getBlogPost(slug) helper to fetch single post
  - getAllSlugs() helper returns array of all post slugs
- **Sitemap Generation**: sitemap.ts generates MetadataRoute.Sitemap with entries for:
  - Blog posts (priority 0.7, monthly changeFrequency, lastModified from post.fecha)
  - Servicios (priority 0.8, monthly)
  - Telas (priority 0.6, monthly)
  - Root pages: home (1.0, monthly), blog (0.8, weekly), sostenibilidad (0.9, yearly)
- **DeadStock Component** (`src/components/DeadStock/DeadStock.tsx`): Limited inventory promotion section
  - deadstockItems array with: nombre, descripcion, metros, descuento%, color (hex), colorNombre, slug, categoria_slug, available flag
  - Current items: Lycra Colombiana (45m, 30% off), Microfibra Antifluido (28m, 25% off), Runner Africa (33m, 20% off)
  - Section styling: bg-zinc-900 with yellow "Stock Limitado" badge, yellow CTA button to WhatsApp, 3-column grid layout
  - Filters by available: true, returns null if no items
- **AnnouncementBar** (`src/components/UI/AnnouncementBar.tsx`): Client component fixed position announcement bar with editable ANNOUNCEMENT object and WhatsApp integration
  - Type: Client component (`"use client"`)
  - ANNOUNCEMENT = { text, link, linkText, active } - supports empty values for link/linkText (current: text="Crepe Doble Importado 10€ !!!", link="", active=true)
  - Controlled visibility: Set active: false to hide banner entirely
  - WhatsApp Integration: WA_NUMBER ("584244067274"), WA_MESSAGE (encoded "Hola Sublink, vengo de la página web 👋")
  - Animation: Inline @keyframes blink-announcement (3s step-start, alternates white #ffffff / red #ef4444)
  - Layout: Fixed top-0 with z-[60], flex items-center justify-between, bg-zinc-900, white text, py-2 px-4
  - Structure: Left spacer (w-28 sm:w-36) > Center animated text with optional Link > Right WhatsApp button
  - WhatsApp Button: Green (#25D366) hover:green (#1ebe5a), flexbox with gap-1.5, whitespace-nowrap, aria-label accessibility
  - Link Styling: ml-2 underline underline-offset-2 hover:text-blue-100 transition-colors (optional, renders if ANNOUNCEMENT.link provided)
- **Footer**: Contact info (phone: +58 424-4067274, email: sublinkve@gmail.com, address: Valencia, Carabobo), social links (WhatsApp, Facebook, Instagram), grid layout responsive
- **Navbar**: Client component with menu state management (toggleTelas, toggleTelasEco, toggleServicios), single-menu-open pattern, mobile drawer with hamburger, responsive layouts
  - NAV_ITEM_KEYS constant enforces menu state keys (as const tuple)
  - handleMenuItems() resets all menus then toggles selected one
  - Uses TypeScript type safety with MenuStateKey and NavItem types
- **Layout**: Poppins font (200-900 weights), JSON-LD LocalBusiness schema, viewport constraints (no zoom), AnnouncementBar at top, suspense-wrapped Video component, Vercel & Google Analytics
  - Root layout imports: Header, AnnouncementBar, MiniPop, Footer, Video, Analytics, GoogleAnalytics
  - Metadata includes openGraph with locale es_ES, creator/publisher/authors
- **Analytics**: Vercel Analytics integrated, Google Analytics (ID: G-FQ4RY25W5X) via @next/third-parties
- **Home Page** (src/app/page.tsx): Section layout with Slider, IconBar, FabricSelector, PrintOnDemandSection, Estampacion, Ofrecemos, VideoReciclar, Counter, LogoCarousel, GoogleReviewsBadge
- **Logo Carousel** (`src/components/Logos/LogoCarousel.tsx`):
  - Type: Client component (`"use client"`)
  - Uses Embla Carousel with AutoScroll plugin (speed: 1)
  - Logo system: NUMBERED_LOGOS array (1-50, excluding certain numbers) and NAMED_LOGOS array ("ARENA CRISTAL")
  - File structure: `/assets/logos-clientes/[n].svg` for numbered logos, `/assets/logos-clientes/[name].[ext]` for named logos
  - NAMED_LOGO_EXT mapping for file extensions (default: svg, override per logo)
  - Generates 2-logo slides via reduce, carousel loops infinitely with autoplay
  - Features: toggleAutoplay callback, useEffect hook management
- **SVG Assets**: epson-logo.svg, monti-antonio-logo.svg added to public/assets/ for branding displays
- **Tailwind Config** (`tailwind.config.ts`): Extended colors with primary #157ec2, secondary #f9f9f9, tertiary #f2f2f2, custom gray scale (100-900), plugins: flowbite, @tailwindcss/typography
- **Ofrecemos Component** (`src/components/Ofrecemos/Ofrecemos.tsx`): Main service offering section with three modal-triggered cards
  - Type: Client component (`"use client"`)
  - Layout: flex flex-col md:flex-row with centered items, responsive spacing (md:space-x-4 lg:space-x-10)
  - Section Header: H2 "¿Qué ofrecemos?" (text-primary, text-5xl sm:text-7xl, font-bold, tracking-tighter), service description paragraphs (text-zinc-900, text-lg sm:text-xl, uppercase)
  - Cards: Three card sections with aspect-[40/50] rounded-3xl images
    - "TELAS": Filters non-eco fabrics (categoria_slug !== "telas-ecologicas")
    - "SERVICIOS TEXTILES": Full servicios array
    - "TELAS ECO": Filters eco fabrics (categoria_slug === "telas-ecologicas")
  - Card Structure: Relative positioned containers with Image backgrounds (sublimacion-textil.webp, servicios-textiles.webp, productos-complementarios.webp), overlay text with primary-color vertical accent line, ModalComponent triggers
  - Data imports: telas array from @/lib/telas, servicios array from @/lib/servicios
  - Styling: w-full px-6 section wrapper, responsive card sizes (w-80 md:w-60 lg:w-72 xl:w-96), my-4 md:my-20 spacing
- **PrintOnDemandSection Component** (`src/components/PrintOnDemand/PrintOnDemand.tsx`): Comprehensive POD service presentation
  - Type: Client component (`"use client"`)
  - Layout: w-full bg-white py-14 px-4, max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 items-center
  - Left Content:
    - Heading: "Sublimación Digital" (span xs font-bold uppercase tracking-widest text-[#157ec2]), "Estampa tus diseños en cualquier tela" (h2 text-3xl md:text-4xl font-bold text-gray-900)
    - Features: 3-item list with checkmark icons (rounded-full bg-[#157ec2] flex items-center justify-center, svg w-3 h-3 text-white)
      - "Impresión desde 1 metro hasta rollo completo"
      - "Compatible con más de 25 telas"
      - "Colores vibrantes que no se caen con los lavados ni se agrietan"
    - Technology: Text "Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología Epson y Monti Antoni."
    - Logo Displays: Two bordered boxes (border border-gray-200 rounded-lg px-3 py-1.5 bg-white) with Epson and Monti Antonio SVG logos
    - Buttons: Two disabled buttons (both disabled title="Próximamente")
      - "Print FREE" (bg-[#157ec2]/50 text-white font-bold px-7 py-3.5 rounded-full cursor-not-allowed)
      - "Sube tu Print" (border-2 border-gray-200 text-gray-400 font-bold px-7 py-3.5 rounded-full cursor-not-allowed with lock emoji)
  - Right Carousel: Dynamic print rotation with PRINTS array (3 items: AP001 CEBRA, FL002 APRICOT, MO008 ITALIAN TILES)
    - Rotation: 980ms interval via useEffect setInterval
    - Animation: opacity transitions (245ms ease-in-out), image scale transform (1 → 1.065, 980ms ease-out)
    - Image Container: relative w-full h-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl with absolute inset-0 positioning
    - Dot Indicators: absolute bottom-4 left-1/2 -translate-x-1/2, clickable buttons with active state (bg-white w-6 vs bg-white/50 w-2)
  - State: active (useState tracking current print index)
  - Data: PRINTS array with src, alt properties
- **Google Reviews Integration** (as of 2026-04-06):
  - **Component Configuration**: GoogleReviews.tsx with editable constants (marked with ✏️ EDITAR AQUÍ):
    - `GOOGLE_RATING = 5.0` - Real Google Business Profile rating
    - `GOOGLE_TOTAL_REVIEWS = 1` - Total reviews count visible in profile
    - `GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJd4jZgbDIwigRmh5Ff5t_6e0"` - Direct reviews link
  - **API Route** (`src/app/api/reviews/route.ts`): GET endpoint fetching Google Places API
    - Returns: business name, rating, total ratings count, newest 5 reviews with author name, profile photo, rating, date, text
    - Cache: 1-hour revalidation (revalidate: 3600)
    - Requires environment: GOOGLE_PLACES_API_KEY
  - **GoogleReviewsBadge Component**: Compact badge with configurable props (rating, total defaults from constants)
    - Displays: Google G logo (inline SVG), star rating visual, review count text, clickable link
    - Link uses GOOGLE_REVIEWS_URL for direct business profile access
  - **GoogleReviewsSection Component**: Full section with loading/error/data states
    - Fetches from /api/reviews endpoint
    - Header: "Lo que dicen nuestros clientes" with rating display and "Ver todas en Google" link
    - ReviewCard subcomponent: Author photo/initial, name, date, stars, review text (line-clamp-4)
    - ReviewsSkeleton: 3-card animated loading state
  - **Stars Component**: Reusable 5-star visual with size variants (sm, md), yellow-400 filled / gray-300 empty
  - **Home Page Integration**: GoogleReviewsBadge displayed in centered container with bg-gray-50 border-t on home page
  - **next.config.mjs Update**: Added remotePatterns for `lh3.googleusercontent.com` (Google profile photo CDN)
- **Component Updates** (as of 2026-04-07):
  - **AnnouncementBar Component**: Updated promotional text to "Crepe Doble Importado 10€ !!!" with blink animation (3s step-start alternating white / red). WhatsApp CTA button with #25D366 green color, hover #1ebe5a, flexbox layout with icon + text. WhatsApp number: 584244067274, message: "Hola Sublink, vengo de la página web 👋". Added aria-label for accessibility
  - **Navbar Component**: Enhanced type safety with MenuStateKey derived union type, NavItem interface, and readonly NAV_ITEM_KEYS tuple. Implemented exclusive single-menu-open pattern via handleMenuItems(). Added passive scroll listener with `{ passive: true }`. Dropdown layouts: 2-column for telas filtering (h-[550px] desktop / h-72 2xl). useCallback optimization for menu item click handlers
  - **Services Page** (`src/app/servicios/[slug]/page.tsx`): Implemented full dynamic routing with generateStaticParams() for static generation and generateMetadata() for SEO (title, description, keywords, canonical URL, OpenGraph with og:image). Responsive layout: flex column/row with 2xl:max-w-[1920px] container. Displays equipment_image and results_image fields from service data
  - **Ofrecemos Component**: Enhanced layout documentation with detailed section structure, card styling, and filtering logic
  - **PrintOnDemandSection Component**: Comprehensive documentation added covering grid layout, carousel mechanics (980ms rotation, opacity/scale animations), disabled button states (próximamente), and dot indicator navigation
- **Sublink Calculadora Project** (`/sublink-calculadora/index.html`):
  - Standalone HTML pricing calculator with Spanish interface (es locale)
  - Design Tokens: Navy (#0D2E5A), Blue (#0086C9), Sky (#00AAEB), Off-white (#F0F5FB), Light (#E0EEF9), Gray (#64748B)
  - Typography: Montserrat (headings, weights 700-900) and Open Sans (body, weights 300-500)
  - Visual Effects: Diagonal fabric texture (repeating-linear-gradient -45deg), radial accent gradient (bottom-right)
  - Page Structure: Header (logo, badge with blink animation, subtitle), calc-wrapper grid (2 columns on desktop, 1 mobile)
  - Components: Card-based layout with card-header (blue background, icon circles, titles), card-body sections, form fields with validation styling
- **Utility HTML Tools** (Standalone projects in /REPOSITORIOS/):
  - **Gana Con Sublink** (`/ganaconsublink/index.html`) - Revenue sharing/partnership calculator tool
  - **Sublink Extractor Colores** (`/sublink-extractorcolores/index.html`) - Color extraction utility for design assets
  - **Sublink Crear Un Print** (`/sublink-crearunprint/index.html`) - Print design creation guide/tool
  - **Guía GitHub Token** (`/guia-github-token.html`) - Technical documentation for GitHub token setup
  - All tools use consistent Sublink branding and Spanish interface, designed for standalone deployment
<!-- END AUTO-MANAGED -->

## Local Notes

<!-- MANUAL -->
- Project uses es-VE locale for Spanish (Venezuela)
- Google Analytics ID: G-FQ4RY25W5X
- WhatsApp contact: +58 416-2698802
- Business location: Valencia, Carabobo, Venezuela
- Monthly offer mechanism in AnnouncementBar for promotions
<!-- END MANUAL -->
 