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
│   │   ├── page.tsx        # Blog listing page (sorted by date descending, grid layout, metadata)
│   │   ├── [slug]/         # Blog post pages (dynamic routing, metadata generation, related posts, contentMap)
│   │   │   └── page.tsx    # Individual blog post with contentMap routing to TSX components
│   │   └── posts/          # Blog post content components (.tsx files)
│   │       ├── telas-para-trajes-de-bano.tsx
│   │       ├── print-on-demand-modelo-actual.tsx
│   │       └── tipos-de-fibras-y-telas.tsx
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
- **Blog Listing**: `/blog` page sorts posts by date (newest first) with metadata (categoria, reading time, formatted date)
  - Features: Grid layout (1 col mobile, 2 col desktop), featured images with hover zoom, description line-clamp-3, read link
  - CTA section at bottom: "¿Tienes preguntas sobre telas o sublimación?" with WhatsApp link
- **Date Formatting**: `formatFecha()` function converts YYYY-MM-DD to localized "es-VE" format
- **Current Posts**:
  - "telas-para-trajes-de-bano" (2026-03-15) - Swimwear fabrics guide
  - "print-on-demand-modelo-actual" (2026-03-28) - Print on demand business model
  - "tipos-de-fibras-y-telas" (2026-04-02) - Textile fibers comprehensive guide

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
  - NAV_ITEM_KEYS constant: `['toggleTelas', 'toggleTelasEco', 'toggleServicios']` (readonly tuple)
  - Menu Logic:
    - `handleMenuItems()`: Resets all menu states then toggles the selected one (one menu open at a time)
    - `resetMenuState()`: Used to close all menus and mobile drawer
    - `handleNavItemClick()`: useCallback wrapper for performance optimization
  - Desktop Layout: Hidden on mobile, flex display on lg+ screens
  - Mobile Layout: Hamburger menu button with MobileNav drawer component
  - Sub-components: NavItemLink, Hamburger, MobileNav, ProgressBar
  - Additional Links: Sostenibilidad (lime styling), Blog (gray styling)
  - Uses flowbite-react Button component

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
  - Client component with social links array (WhatsApp, Facebook, Instagram)
  - **Social Links**: WhatsApp (+58 416-2698802), Facebook (facebook.com/sublink.ve), Instagram (instagram.com/sublink.ve)
  - **Navigation Links**: Telas, Servicios, Sostenibilidad, Blog
  - **Contact Info**:
    - Address: Av. 137, CC Imperial II 3-08, Piso 3 (frente CC Galería), Valencia, Carabobo, Venezuela
    - Phone: +58 424-4067274
    - Email: sublinkve@gmail.com
    - Hours: Lun-Vie 8:30am-4:30pm
  - Grid layout: 1 col mobile, 2 cols tablet, 4 cols desktop
  - Social icons with hover effect (bg-zinc-800 → bg-[#157ec2])
  - Bottom bar with copyright year and sublink.company link

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
Recent changes focused on blog system expansion and component refinement (as of 2026-04-03):
- Blog System: Fully implemented with dynamic routing, metadata generation, and content mapping
- Blog Posts: Three posts published covering fabrics, print-on-demand, and textile fibers (dates: 2026-03-15, 2026-03-28, 2026-04-02)
  - Latest post: "tipos-de-fibras-y-telas" (2026-04-02) - Comprehensive textile fibers guide with 8 min reading time
- Blog Listing Page: Enhanced with grid layout, featured images, CTA section with WhatsApp integration
- Sitemap: Generates dynamic entries for telas (0.6 priority), servicios (0.8 priority), blog posts (0.7 priority)
  - Root pages: home (1.0), sostenibilidad (0.9), blog listing (0.8)
  - Blog entries use post.fecha for lastModified timestamp
- AnnouncementBar: Configured with monthly offer mechanism (current: Lycra Lafayette discount)
- Footer: Contact info with phone (+58 424-4067274), email, hours, and address with landmark (Piso 3 frente CC Galería)
- Navbar: Menu state management ensures single-menu-open pattern with responsive layouts
- Analytics: Vercel Analytics and Google Analytics (G-FQ4RY25W5X) integrated across layout
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