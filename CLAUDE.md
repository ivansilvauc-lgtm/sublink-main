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
│   ├── layout.tsx    # Root layout with metadata
│   ├── page.tsx      # Home page
│   ├── robots.ts     # Robots metadata
│   ├── sitemap.ts    # XML sitemap generation
│   ├── servicios/    # Services pages (dynamic routing)
│   ├── telas/        # Fabrics/textiles pages (dynamic routing)
│   └── sostenibilidad/ # Sustainability page
├── components/       # React components
│   ├── Header/
│   ├── Counter/
│   ├── Detalles/     # Detail view components
│   ├── Estampacion/  # Stamping/printing section
│   └── ...
├── lib/
│   └── constant.ts   # Application constants
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

## Notes

- Project uses Next.js App Router with dynamic routing for services and fabric categories
- SEO optimization through sitemaps, robots.txt, and metadata APIs
- Turbo mode enabled for faster development builds
