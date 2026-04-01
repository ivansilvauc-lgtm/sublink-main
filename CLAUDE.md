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
- **Constants**: Centralized in `src/lib/constant.ts`
- **Path Aliases**: Use `@/` prefix for imports (e.g., `@/lib/constant`, `@/components/Header`)
- **Metadata**: SEO metadata (canonical, og:image, etc.) set in page components using `SUBLINK_URL`
- **Component Structure**: Each component in dedicated folder with `.tsx` file
- **Import Pattern**: `import { SUBLINK_URL } from "@/lib/constant"`
- **Root Layout**: Includes global JSON-LD schema, Poppins font config, metadata base, viewport settings, and Suspense-wrapped Video modal
- **Dynamic Route Metadata**:
  - `generateMetadata()` async function pulls data from static arrays
  - `generateStaticParams()` for ISR/pre-rendering of dynamic routes
  - `dynamicParams = true` allows rendering unknown segments
- **Sitemap Generation**: Dynamic sitemap includes root, sostenibilidad, all servicios with priority 0.8, and all telas with priority 0.6
- **SEO Pattern**: Each dynamic page sets canonical URL, OpenGraph image/title/description, and locale (es_ES)
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

- **Framework**: Next.js 14.2.2, React 18.2.0
- **UI Components**: Flowbite React 0.7.3
- **Animation**: Framer Motion 11.2.12
- **Carousel**: Embla Carousel (auto-scroll & React)
- **Utilities**: react-countup, react-modal-video
- **Image Processing**: Sharp 0.33.3
- **Styling**: Tailwind CSS 3.3.0, PostCSS
- **TypeScript**: 5.x

## Data Models

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
- FourWayStretch, Antifluido, FacilLavado, HomeDecor, Moda, Muralla, Outdoor
- PesoLigero, PetFriendly, Polar, RapidaAbsorcion, Reciclado, Resistente, SecadoRapido
- SoftTouch, SweaterResist, Textura, Transpirable, UPF50, Vintage, Lycra

## Component Details

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

### Sostenibilidad Page
- **Location**: `src/app/sostenibilidad/page.tsx`
- **Purpose**: Comprehensive sustainability and eco-friendly fabrics page
- **Key Sections**:
  - Hero with animated text and tree reveal components
  - "¿Qué son las telas ecológicas?" - Definition and benefits of sustainable fabrics
  - "Por qué usar telas recicladas PET" - Four focus areas: Reciclaje, Calidad, Impacto Social, Diferenciación
  - Embedded YouTube video (iframe) - Production process documentation
  - "Sostenibilidad" - Sublink's commitment and zero-waste policies
  - "Nuestras Políticas" - Print-on-demand and zero-waste initiatives
  - Partner logos (Sutex, Greentex, Lafayette)
  - Branded footer with leaf vectors and Sublink logo
- **Styling**: Uses Tailwind + custom bg class (sostenibilidad-bg), green accent color (#619b55)
- **Components Used**: TextReveal, TreeReveal, SublinkLogo (animated reveal components)

## Notes

- Project uses Next.js App Router with dynamic routing for services and fabric categories
- SEO optimization through sitemaps, robots.txt, and metadata APIs
- Turbo mode enabled for faster development builds
- Modal video component supports URL-based video activation pattern
- Sustainability page emphasizes Sublink's unique position as Venezuela's first PET fabric provider
- Root layout wraps Video component in Suspense for lazy loading search params
