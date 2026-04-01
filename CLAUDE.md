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
│   ├── sitemap.ts    # XML sitemap generation (telas + servicios)
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
  - Poppins font (weights: 200, 300, 400, 600, 700, 800, 900; styles: normal, italic)
  - Global metadata base with SUBLINK_URL
  - Viewport constraints: device-width, initialScale 1, maximumScale 1, no user scaling
  - JSON-LD schema (LocalBusiness type with address, areaServed, contactPoint, sameAs)
  - Vercel Analytics + Google Analytics (GA ID: G-FQ4RY25W5X)
  - Suspense-wrapped Video component for lazy loading search params
  - Header > MiniPop > {children} > Video (lazy) > Footer structure

### Metadata & SEO
- **Base Metadata**:
  - Title template: `Sublink | %s` (dynamic pages)
  - Default keywords: telas, sublimacion, estampados, sublimacion textil, sublimacion continua, sublimacion digital, sublimacion por rollo/metro, sublimacion venezuela, estampados venezuela
  - Canonical URLs based on SUBLINK_URL
  - OpenGraph: title, description, url, siteName, images (1200x630), locale (es_ES), type (website)
  - Robots: index, follow
  - Default description: Services for personalizing 40+ fabric types via continuous textile sublimation, plus labels, vinyl, DTF, laser cutting, and supplies

- **Dynamic Route Metadata Pattern**:
  - `generateMetadata()` async function pulls data from static arrays (servicios or telas)
  - `generateStaticParams()` for pre-rendering dynamic routes at build time
  - `dynamicParams = true` allows rendering unknown segments at runtime
  - Always set canonical URL, OpenGraph image/title/description, locale (es_ES)

### Routing
- **Dynamic Services**: `/servicios/[slug]` with servicios.find() lookup
- **Dynamic Fabrics**: `/telas/[...slug]` with catch-all route (categoria_slug + slug)
- **Static Pages**: `/sostenibilidad` (sustainability), `/page.tsx` (home)

### Sitemap Generation (`src/app/sitemap.ts`)
- Root: priority 1.0, frequency: monthly
- `/sostenibilidad`: priority 0.9, frequency: yearly
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
- **Services**: sublimacion-textil-a-gran-formato, dtf-para-marquillas-laser-toner, dtf-industrial-continuo, corte-laser-textil (with full SEO metadata and structured content)
- **Dynamic Routing**: Services pages at `/servicios/[slug]`
- **Metadata**: Dynamic metadata generation with SEO fields (metaTitle fallback to title, metaDescription fallback to description)

### Fabrics Data (src/lib/telas.ts)
- Large static array of ITela objects
- **Categories**: Telas Importadas, Telas Nacionales, Telas Ecológicas
- **Dynamic Routing**: Fabrics pages at `/telas/[categoria_slug]/[slug]`
- **Metadata**: Dynamic metadata generation from telas array
<!-- END AUTO-MANAGED -->

## Component Details

<!-- AUTO-MANAGED: components -->
### Counter Component
- **Location**: `src/components/Counter/Counter.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Animated statistics display with intersection observer
- **Implementation**:
  - Uses `useInView` hook from framer-motion with `{ once: true }` option
  - Displays three metrics: 15+ years experience, 60,000 mts fabrics/year, 25+ white fabrics
  - CountUp animation (2.75s duration) triggered when element enters viewport
  - Full-width primary-bg section with flex layout
  - Responsive: flex-col (mobile) to flex-row (sm and up) with adaptive spacing

### Footer Component
- **Location**: `src/components/UI/Footer.tsx`
- **Type**: Client component (`"use client"`)
- **Purpose**: Page footer with contact info and company details
- **Layout**: Three-column responsive layout (responsive stacking)
  - Left: Location info (Valencia address, phone +58 424-4067274) with localization icon
  - Center: "SUBLINK COMPANY" heading with "Quiénes Somos" subtext
  - Right: Contact details (email: sublinkve@gmail.com, Instagram: sublink.ve, hours: MON-FRI 8:30am-4:30pm)
- **Styling**: footer-bg class with responsive icon and text sizing (scales from 45px mobile to 10xl desktop)
- **Assets**: Icons from `/assets/` directory (localization.svg, email.svg, instagram.svg, horario.svg)

### VideoReciclar Component
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
- **Metadata**: `generateMetadata()` pulls nombre, descripcion, imagen_zoom from telas array, setting canonical with categoria_slug and slug
- **Static Params**: `generateStaticParams()` maps [categoria_slug, slug] array pairs for all fabrics
- **Layout** (main grid with flex-col-reverse lg:flex-row):
  - Left: ImageGallery with imagen_zoom, imagenes array, eco/stamping badges
  - Right: Price ($), color swatches (colors array as square divs), Calculadora component
- **Detail Section** (flex-col-reverse lg:flex-row):
  - Table: Composition, uses, weight (gr/m2), width (cm), characteristics, weave, ecological base (border-4 border-primary)
  - Description: Fabric details, icon indicators (responsive sizing w-12 sm:w-20)
- **Recommendations**: Carousel displays same-category fabrics filtered by categoria_slug
- **Responsive**: flex-col-reverse (mobile) to flex-row (lg), gaps 8px, max-width 6xl centered

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
- **Static Data Arrays**: Services and fabrics data stored in `src/lib/servicios.ts` and `src/lib/telas.ts`
- **Type Safety**: TypeScript interfaces (ITela, IServicios) ensure data consistency
- **Lookup Pattern**: Dynamic pages find relevant data using `.find()` on slug parameter

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
- **Models**: Data interfaces in `src/model/tela.ts` with Iconos enum and IconosAlt mapping
- **Components**: Organized by feature (Header, UI, Sostenibilidad, Detalles, VideoReciclar, etc.)
- **Assets**: Images stored in `/public/img/` organized by feature directory

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
