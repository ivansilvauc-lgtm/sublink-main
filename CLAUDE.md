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
│   ├── layout.tsx          # Root layout with metadata, JSON-LD schema, AnnouncementBar
│   ├── page.tsx            # Home page
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
│   │   ├── GoogleReviews.tsx # Google reviews widget
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
- **Remote Image Patterns**: via.placeholder.com
- **Analytics**: Vercel Analytics + Google Analytics (GA ID: G-FQ4RY25W5X)
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
- **Current Posts** (as of 2026-04-02):
  - "telas-para-trajes-de-bano" (2026-03-15, 5 min) - Swimwear fabrics guide: Lycra Laurent, Microfibra Nacional
  - "print-on-demand-modelo-actual" (2026-03-28, 6 min) - Print on demand business model: sublimación digital, zero inventory
  - "tipos-de-fibras-y-telas" (2026-04-02, 8 min) - Textile fibers comprehensive guide: natural, synthetic, artificial, sustainable fibers

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
  - ANNOUNCEMENT object with properties:
    - `text`: Banner message text (currently: "🎉 OFERTA DEL MES: 10% de descuento en Lycra Lafayette al mayor")
    - `link`: Destination URL (currently: `/telas/telas-importadas/lycra-lafayette`)
    - `linkText`: Link label (currently: `"Ver tela →"`)
    - `active`: Boolean to show/hide banner (currently: `true`)
  - Styling: bg-zinc-900, white text, sm font, centered flex layout
  - **Editing Instructions**: Update ANNOUNCEMENT object directly in the component file (marked with comment: ✏️ EDITAR AQUÍ)

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

### Sitemap Generation
- **sitemap.ts** generates MetadataRoute.Sitemap with:
  - Blog entries: priority 0.7, monthly changeFreq, lastModified from post.fecha
  - Servicios entries: priority 0.8, monthly changeFreq
  - Telas entries: priority 0.6, monthly changeFreq
  - Root pages: home (1.0), blog (0.8), sostenibilidad (0.9)

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
Recent changes focused on blog system expansion, component refinement, and styling enhancements (as of 2026-04-04):
- **Blog System**: Fully implemented with dynamic routing, metadata generation, and content mapping via contentMap
- **Blog Posts**: Three published posts with metadata, date formatting, SEO optimization (dates: 2026-03-15, 2026-03-28, 2026-04-02)
  - "telas-para-trajes-de-bano" (2026-03-15, 5 min) - Swimwear fabrics guide: Lycra Lafayette (4-way stretch, chlorine-resistant, €26.50/m), Lycra Peruana (€24/m), Microfibra Nacional (2-way, €7/m). Covers durability, chlorine exposure, UV protection, fabric comparison table
  - "print-on-demand-modelo-actual" (2026-03-28, 6 min) - POD business model: zero inventory, design-to-customer workflow, sublimación digital (compatible 65%+ polyester), niche selection, design tools (Canva), fabric compatibility table
  - "tipos-de-fibras-y-telas" (2026-04-02, 8 min) - Comprehensive fiber types: natural (algodón, lana, lino, seda), synthetic (poliéster, nylon, acrílico, elastano), artificial (viscosa, rayón, modal, acetato), sustainable (bambú, cáñamo, Eco Fibra, Lyocell). Yarn count systems (Ne, Nm, Dtex). Weave and finish technical details
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
- **AnnouncementBar**: Monthly offer mechanism (editable ANNOUNCEMENT object), active flag, link to product page, styling with emojis
  - ANNOUNCEMENT = { text, link, linkText, active } - edit in component file
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
- **SVG Assets**: epson-logo.svg, monti-antonio-logo.svg added to public/assets/ for logo carousel and partner displays
- **Tailwind Config**: Extended colors with primary #157ec2, secondary #f9f9f9, custom gray scale (100-900), plugins: flowbite, @tailwindcss/typography
- **Ofrecemos Component**: Two-column section showing "TELAS" and "SERVICIOS TEXTILES" cards with image backgrounds, modal triggers via ModalComponent for fabric/service selection
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