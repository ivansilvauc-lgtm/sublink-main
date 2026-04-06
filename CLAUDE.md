# Sublink Project Memory

## Project Description

Sublink is a Next.js 14.2.2 web application for textile and fabric services in Venezuela. The project uses React with TypeScript, featuring server-side rendering and static generation for SEO optimization. It includes a comprehensive blog system, fabric selector, sustainability messaging, and e-commerce integration.

## Build Commands

<!-- AUTO-MANAGED: build-commands-->
- `npm run dev` - Start development server with Turbo mode
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint checks
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
│   ├── page.tsx            # Home page (imports GoogleReviewsBadgeAuto for live reviews with ISR fallback)
│   ├── robots.ts           # Robots metadata
│   ├── sitemap.ts          # XML sitemap generation (telas + servicios + blog posts)
│   ├── blog/
│   │   ├── page.tsx        # Blog listing page (sorted by date descending, grid layout, metadata, related posts CTA)
│   │   ├── [slug]/         # Dynamic blog post route with generateStaticParams, generateMetadata
│   │   │   └── page.tsx    # Uses contentMap to route slug to component, includes breadcrumb, related posts (2), prose styling
│   │   └── posts/          # Blog post content components (TSX, rendered as children in prose container)
│   │       ├── telas-para-trajes-de-bano.tsx      # Swimwear fabrics guide
│   │       ├── print-on-demand-modelo-actual.tsx  # Print-on-demand business model
│   │       └── tipos-de-fibras-y-telas.tsx        # Textile fibers comprehensive guide
│   ├── servicios/
│   │   └── [slug]/         # Services pages (dynamic routing, metadata generation)
│   ├── telas/
│   │   └── [...slug]/      # Fabrics/textiles pages (dynamic routing, metadata generation)
│   └── sostenibilidad/     # Sustainability page with eco-friendly content
├── components/             # React components
│   ├── Header/             # Navbar, Header components with menu state
│   │   ├── Navbar.tsx      # Main navigation with dropdown menus
│   │   ├── NavItemLink.tsx # Navigation item links
│   │   ├── Hamburger.tsx   # Mobile hamburger menu
│   │   ├── MobileNav.tsx   # Mobile navigation drawer
│   │   └── ProgressBar.tsx # Scroll progress indicator
│   ├── Counter/            # Counter component for stats
│   ├── Detalles/           # Detail view components
│   ├── Estampacion/        # Stamping/printing section
│   ├── Sostenibilidad/     # Sustainability page components (TextReveal, TreeReveal, SublinkLogo)
│   ├── VideoReciclar/      # Video modal component for recycling content
│   ├── UI/                 # Common UI components
│   │   ├── MiniPop.tsx     # Popup component
│   │   ├── Footer.tsx      # Footer with social links (WhatsApp, Facebook, Instagram)
│   │   ├── AnnouncementBar.tsx # Announcement banner (ANNOUNCEMENT object with text, link, active flag)
│   │   ├── GoogleReviews.tsx # Google reviews badge and section components (client-side, fetches from /api/reviews)
│   │   ├── GoogleReviewsServer.tsx # Server component for live Google Places reviews with ISR (revalidates hourly)
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
└── ...other config files
```

Key configuration:
- **URL Base**: `https://www.sublink.company` (SUBLINK_URL constant)
- **Module Path Alias**: `@/*` maps to `./src/*`
- **Next.js Version**: 14.2.2
- **Remote Image Patterns** (`next.config.mjs`):
  - `via.placeholder.com` (https) - Placeholder images
  - `lh3.googleusercontent.com` (https) - Google review profile photos
- **Analytics**: Vercel Analytics + Google Analytics (GA ID: G-FQ4RY25W5X)
- **Google Places API**: Used for fetching reviews via /api/reviews endpoint
- **Vercel Deployment**: Framework: nextjs, buildCommand: `npm run build`, outputDirectory: `.next`

### Sitemap Generation
- **sitemap.ts** generates MetadataRoute.Sitemap with:
  - Blog entries (priority 0.7, monthly changeFreq, lastModified from post.fecha)
  - Servicios entries (priority 0.8, monthly changeFreq)
  - Telas entries (priority 0.6, monthly changeFreq) - mapped via `categoria_slug/slug` pattern
  - Root pages: home (1.0, monthly), blog (0.8, weekly), sostenibilidad (0.9, yearly)
  - All entries use SUBLINK_URL constant for canonical URLs
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
- **Blog Listing**: `/blog` page sorts posts by date (newest first) with metadata (categoria, reading time, formatted date)
  - Features: Grid layout (1 col mobile, 2 col desktop), featured images with hover zoom, description line-clamp-3, read link
  - CTA section at bottom: "¿Tienes preguntas sobre telas o sublimación?" with WhatsApp link
- **Date Formatting**: `formatFecha()` function converts YYYY-MM-DD to localized "es-VE" format
- **Current Posts** (as of 2026-04-04):
  - "telas-para-trajes-de-bano" (2026-03-15, 5 min) - Swimwear fabrics guide: Lycra Lafayette (€26.50/m, 4-way stretch, chlorine-resistant), Lycra Peruana (€24/m), Microfibra Nacional (€7/m, 2-way). Covers durability, chlorine exposure, UV protection, care instructions
  - "print-on-demand-modelo-actual" (2026-03-28, 6 min) - POD business model: zero inventory, customer-driven production, sublimación digital (65%+ polyester compatible), niche selection, channel setup (Instagram, WhatsApp), margin targets (40-50%)
  - "tipos-de-fibras-y-telas" (2026-04-02, 8 min) - Comprehensive fiber types: natural (algodón, lana, lino, seda), synthetic (poliéster, nylon, acrílico, elastano), artificial (viscosa, rayón, modal, acetato), sustainable (bambú, cáñamo, Eco Fibra, Lyocell). Yarn count systems (Ne, Nm, Denier). Weave types (Jersey, Piqué, Interlock, Rib, Fleece, French Terry, Jacquard for knits; Tafeta, Popelina, Twill, Rib-Stop, Denim, Drill, Oxford, Gabardina for wovens). Finishing techniques
- **Blog Listing Page** (/blog): Grid layout (1 col mobile, 2 col desktop), sorted by date descending, featured images with hover zoom, metadata display (categoria badge, tiempoLectura), description line-clamp-3, white rounded cards with border and shadow transitions, CTA section with WhatsApp link, page metadata with canonical URL and OpenGraph

### Layout & Viewport
- **Root Layout** (`src/app/layout.tsx`):
  - Poppins font (weights: 200, 300, 400, 600, 700, 800, 900; styles: normal, italic; display: swap)
  - Global metadata base with SUBLINK_URL, metadata title template with `| %s`, and keywords
  - Viewport constraints: device-width, initialScale 1, maximumScale 1, userScalable false
  - JSON-LD schema (LocalBusiness type with name, url, logo, description, address, areaServed, contactPoint, sameAs Instagram)
  - Vercel Analytics + Google Analytics integration
  - Layout structure: AnnouncementBar > Header > MiniPop > {children} > Video (lazy) > Footer
  - Max-width container: max-w-[1920px] mx-auto with Poppins className

### Header/Navigation Components
- **Navbar** (`src/components/Header/Navbar.tsx`):
  - Type: Client component (`"use client"`)
  - Props: `{ telas: ITela[], servicios: IServicios[] }`
  - State Management:
    - `toggleMenu`: Boolean for mobile menu visibility
    - `menuState`: Object with keys: `toggleTelas`, `toggleTelasEco`, `toggleServicios`
    - `someMenuOpen`: Derived state tracking if any dropdown is open (via useEffect)
  - NAV_ITEM_KEYS constant: `['toggleTelas', 'toggleTelasEco', 'toggleServicios']` (readonly tuple, enforces type safety)
  - Menu Logic:
    - `handleMenuItems(itemToggle: MenuStateKey)`: Resets all menu states then toggles selected one (exclusive one-menu-open pattern)
    - `resetMenuState()`: Closes all menus and mobile drawer (called on scroll events)
    - `handleNavItemClick(toggleState)`: useCallback wrapper for performance optimization, returns click handler
  - Desktop Layout: Hidden on mobile (<lg), flex display on lg+ screens with nav items and additional links
  - Mobile Layout: Hamburger menu button (sm) toggling MobileNav drawer component
  - Sub-components: NavItemLink, Hamburger, MobileNav, ProgressBar
  - Additional Links: Sostenibilidad (/sostenibilidad, lime-500 hover:lime-400), Blog (/blog, gray-700)
  - Dependencies: flowbite-react Button, NavItemLink with dynamic onClick handlers
  - Dropdowns: Expands nav items for "Telas Nacionales" filtered by categoria_slug (two-column layout, h-[550px] desktop / h-72 2xl)
  - Scroll Behavior: Menu auto-closes on scroll (passive scroll listener)

### Announcement Bar
- **AnnouncementBar** (`src/components/UI/AnnouncementBar.tsx`):
  - Type: Client component (`"use client"`)
  - **Configuration** (marked with ✏️ EDITAR AQUÍ comments):
    - ANNOUNCEMENT object properties:
      - `text`: Banner message text (default: "Oferta del Mes")
      - `link`: Destination URL (default: empty string)
      - `linkText`: Link label (default: empty string)
      - `active`: Boolean to show/hide banner (default: `true`, set to false to hide)
    - WA_NUMBER: "584244067274" (WhatsApp contact number)
    - WA_MESSAGE: encodeURIComponent("Hola Sublink, vengo de la página web 👋") (pre-filled message)
  - **Layout Structure**: fixed top-0 left-0 w-full bg-zinc-900 text-white z-[60], flex items-center justify-between
    - Left Spacer: w-28 sm:w-36 shrink-0 (padding for layout balance)
    - Center: font-semibold text-center flex-1 with optional Link (ml-2 underline underline-offset-2 hover:text-blue-100)
    - Right WhatsApp Button: shrink-0 flex items-center gap-1.5 bg-[#25D366] hover:bg-[#1ebe5a] transition-colors text-xs font-bold px-3 py-1 rounded-full
  - **WhatsApp Icon**: Inline SVG (24x24 viewBox), white fill, w-3.5 h-3.5
  - **Button Text**: "Escríbenos" (hidden sm:inline on mobile)
  - **Conditional Rendering**: Link only renders if ANNOUNCEMENT.link is provided

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
  - **Integration**: Used in `src/app/page.tsx` line 35 - renders in centered div with gray background (w-full flex justify-center py-8 bg-gray-50 border-t border-gray-100)

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

### Footer
- **Footer** (`src/components/UI/Footer.tsx`):
  - Type: Client component (`"use client"`)
  - **Structure**: Main grid (max-w-6xl, 4 columns with responsive layout) + bottom bar
  - **Column 1 - Logo + Tagline**:
    - Image: `/assets/logo-sublink-marca-de-agua.png` (w-36)
    - Text: "Sublimación textil, telas y estampados de alta calidad en Valencia, Venezuela."
  - **Column 2 - Contact Info**:
    - Address: Av. 137, CC Imperial II 3-08, Piso 3 (frente CC Galería), Valencia, Carabobo, Venezuela
    - Phone: +58 424-4067274 (tel: link)
    - Email: sublinkve@gmail.com (mailto: link)
    - Hours: Lun – Vie · 8:30 am – 4:30 pm
  - **Column 3 - Navigation Links**: Telas (/), Servicios (/), Sostenibilidad (/sostenibilidad), Blog (/blog)
  - **Column 4 - Social Links**:
    - WhatsApp: wa.me/584162698802?text=Vengo%20de%20la%20Web
    - Facebook: facebook.com/sublink.ve
    - Instagram: instagram.com/sublink.ve
    - Icons with hover: bg-zinc-800 → bg-[#157ec2] transition
  - **Responsive Layout**: 1 col mobile (sm:grid-cols-2) > 2 cols tablet > lg:grid-cols-4 desktop
  - **Bottom Bar**: Copyright year (dynamic via new Date().getFullYear()), link to sublink.company
  - **Styling**: bg-zinc-900 text, hover:text-white transitions, border-t border-zinc-800


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
- `sharp@0.33.3` - Image processing
- `@vercel/analytics@1.3.1` - Analytics tracking
- `@next/third-parties@14.2.2` - Google Analytics integration

### Development
- TypeScript, ESLint, Tailwind CSS, PostCSS, Autoprefixer
- Type definitions for React, React DOM, React Modal Video
- @tailwindcss/typography - Prose styling for blog content

### External Services
- **Google Places API** - Business reviews and ratings (requires GOOGLE_PLACES_API_KEY env var)
- **Google Analytics** - Tracking ID G-FQ4RY25W5X

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
Recent changes focused on blog system completion and detailed content implementation (as of 2026-04-04):
- **Blog System**: Fully implemented with dynamic routing, metadata generation, and content mapping via contentMap
- **Blog Posts**: Three published posts with comprehensive content, metadata, SEO optimization (dates: 2026-03-15, 2026-03-28, 2026-04-02)
  - "telas-para-trajes-de-bano" (2026-03-15, 5 min) - Swimwear fabrics detailed guide
    - Lycra Lafayette: 4-way stretch, 18-22% elastano, €26.50/m, high chlorine resistance, ideal for competition/sports
    - Lycra Peruana: 4-way stretch, medium-high chlorine resistance, €24/m, ideal for fashion/beach
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
- **AnnouncementBar** (`src/components/UI/AnnouncementBar.tsx`): Fixed position announcement bar with editable ANNOUNCEMENT object and WhatsApp integration
  - ANNOUNCEMENT = { text, link, linkText, active } - supports empty values for link/linkText
  - Current state: text="Oferta del Mes", link="", active=true
  - WhatsApp Integration: WA_NUMBER ("584244067274"), WA_MESSAGE (encoded "Hola Sublink, vengo de la página web 👋")
  - Layout: Fixed top-0 with z-[60], flex items-center justify-between, bg-zinc-900, white text
  - Components: Left spacer (w-28 sm:w-36) > Center text with optional Link > Right WhatsApp button (#25D366 green)
  - Styling: fixed top-0, bg-zinc-900, z-[60], conditionally renders Link if link provided
  - WhatsApp Button: Green button with WhatsApp icon, "Escríbenos" text (hidden sm:inline), opens wa.me link
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
- **Component Updates** (as of 2026-04-06):
  - **Ofrecemos Component**: Enhanced layout documentation with detailed section structure, card styling, and filtering logic
  - **PrintOnDemandSection Component**: Comprehensive documentation added covering grid layout, carousel mechanics (980ms rotation, opacity/scale animations), disabled button states (próximamente), and dot indicator navigation
  - **AnnouncementBar Component**: Configuration documentation updated with clear ✏️ EDITAR AQUÍ markers, WA_NUMBER/WA_MESSAGE constants, and conditional Link rendering
- **Sublink Calculadora Project** (`/sublink-calculadora/index.html`):
  - Standalone HTML pricing calculator with Spanish interface (es locale)
  - Design Tokens: Navy (#0D2E5A), Blue (#0086C9), Sky (#00AAEB), Off-white (#F0F5FB), Light (#E0EEF9), Gray (#64748B)
  - Typography: Montserrat (headings, weights 700-900) and Open Sans (body, weights 300-500)
  - Visual Effects: Diagonal fabric texture (repeating-linear-gradient -45deg), radial accent gradient (bottom-right)
  - Page Structure: Header (logo, badge with blink animation, subtitle), calc-wrapper grid (2 columns on desktop, 1 mobile)
  - Components: Card-based layout with card-header (blue background, icon circles, titles), card-body sections, form fields with validation styling
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