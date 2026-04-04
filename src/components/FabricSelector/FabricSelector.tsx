"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ── SVG icons — line art style ───────────────────────────────────────────────

const Icons: Record<string, React.FC<{ className?: string }>> = {
  TrajesDeBano: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 8 C14 8 12 18 12 24" />
      <path d="M34 8 C34 8 36 18 36 24" />
      <path d="M14 8 Q24 14 34 8" />
      <path d="M12 24 Q24 28 36 24" />
      <path d="M12 24 L10 38 Q24 42 38 38 L36 24" />
      <path d="M10 38 Q12 44 16 44" />
      <path d="M38 38 Q36 44 32 44" />
    </svg>
  ),
  Pareo: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 8 L38 8 L38 10 Q24 16 10 10 Z" />
      <path d="M10 10 Q12 28 16 40 Q24 44 32 40 Q36 28 38 10" />
      <path d="M16 40 Q24 38 32 40" />
      <path d="M10 8 Q24 12 38 8" />
    </svg>
  ),
  Short: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10 10 L38 10 L38 12 Q24 14 10 12 Z" />
      <path d="M10 12 L8 36 Q16 40 22 38 L24 28 L26 38 Q32 40 40 36 L38 12" />
      <path d="M22 38 Q24 40 26 38" />
    </svg>
  ),
  Moda: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Dress form / mannequin */}
      <ellipse cx="24" cy="10" rx="5" ry="6" />
      <path d="M19 16 Q14 20 15 28 Q16 34 20 36 L28 36 Q32 34 33 28 Q34 20 29 16" />
      <path d="M20 36 L20 42 L28 42 L28 36" />
      <path d="M18 42 L30 42" />
      <line x1="24" y1="4" x2="24" y2="2" />
      <path d="M12 22 L36 22" />
    </svg>
  ),
  Muebles: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Sofa with cushions */}
      <path d="M8 22 Q8 18 12 18 L36 18 Q40 18 40 22 L40 34 L8 34 Z" />
      <path d="M8 28 L40 28" />
      <path d="M18 18 L18 28" />
      <path d="M30 18 L30 28" />
      {/* Arm rests */}
      <path d="M6 24 Q6 20 8 20 L8 34 L6 34 Q4 34 4 30 L4 26 Q4 24 6 24 Z" />
      <path d="M42 24 Q42 20 40 20 L40 34 L42 34 Q44 34 44 30 L44 26 Q44 24 42 24 Z" />
      {/* Legs */}
      <line x1="10" y1="34" x2="10" y2="40" />
      <line x1="38" y1="34" x2="38" y2="40" />
      <line x1="20" y1="34" x2="20" y2="39" />
      <line x1="28" y1="34" x2="28" y2="39" />
      {/* Cushion details */}
      <path d="M10 22 Q14 20 18 22" />
      <path d="M22 22 Q26 20 30 22" />
      <path d="M32 22 Q36 20 38 22" />
    </svg>
  ),
  Chaqueta: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 6 L10 12 L6 24 L12 24 L12 42 L36 42 L36 24 L42 24 L38 12 L30 6" />
      <path d="M18 6 Q24 10 30 6" />
      <path d="M18 6 L20 18 L24 20 L28 18 L30 6" />
      <path d="M6 24 L12 24" />
      <path d="M42 24 L36 24" />
    </svg>
  ),
  Toalla: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="14" width="28" height="24" rx="2" />
      <path d="M10 22 L38 22" />
      <path d="M14 8 Q24 6 34 8 L34 14 L14 14 Z" />
      <path d="M18 22 L18 38" />
      <path d="M24 22 L24 38" />
      <path d="M30 22 L30 38" />
    </svg>
  ),
  SalidaDeBano: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Bathrobe */}
      <path d="M20 6 L14 14 L10 42 L22 42 L24 28 L26 42 L38 42 L34 14 L28 6" />
      <path d="M20 6 Q24 10 28 6" />
      <path d="M20 6 L22 18 L24 22 L26 18 L28 6" />
      <path d="M10 20 L14 20" />
      <path d="M34 20 L38 20" />
      <ellipse cx="24" cy="4" rx="4" ry="3" />
    </svg>
  ),
  ToteBag: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="10" y="18" width="28" height="24" rx="2" />
      <path d="M17 18 Q17 10 24 10 Q31 10 31 18" />
      <path d="M10 26 L38 26" />
    </svg>
  ),
  Mantel: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Table with tablecloth */}
      <rect x="8" y="18" width="32" height="4" rx="1" />
      <path d="M8 22 L6 36 Q8 38 10 36 L12 22" />
      <path d="M40 22 L42 36 Q40 38 38 36 L36 22" />
      <path d="M6 18 Q8 12 24 12 Q40 12 42 18" />
      <path d="M6 36 Q8 44 24 44 Q40 44 42 36" />
    </svg>
  ),
  Delantal: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8 Q24 6 30 8 L30 14 L18 14 Z" />
      <path d="M16 14 Q10 18 10 26 Q10 40 24 42 Q38 40 38 26 Q38 18 32 14 Z" />
      <path d="M18 14 L16 14" />
      <path d="M30 14 L32 14" />
      <path d="M18 8 L16 6 Q12 4 10 8" />
      <path d="M30 8 L32 6 Q36 4 38 8" />
      <path d="M14 26 L34 26" />
    </svg>
  ),
  Uniforme: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* T-shirt / polo */}
      <path d="M18 6 L6 14 L10 20 L14 16 L14 42 L34 42 L34 16 L38 20 L42 14 L30 6" />
      <path d="M18 6 Q24 10 30 6" />
    </svg>
  ),
  Pijama: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Pajama top */}
      <path d="M18 6 L10 12 L12 18 L16 14 L16 28 L32 28 L32 14 L36 18 L38 12 L30 6" />
      <path d="M18 6 Q24 9 30 6" />
      {/* Pajama pants */}
      <path d="M16 28 L14 44 L22 44 L24 36 L26 44 L34 44 L32 28 Z" />
      <path d="M22 44 Q24 46 26 44" />
    </svg>
  ),
  Camisa: ({ className }) => (
    <svg className={className} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      {/* Dress shirt / camisa */}
      <path d="M18 4 L10 10 L6 20 L12 20 L12 44 L36 44 L36 20 L42 20 L38 10 L30 4" />
      <path d="M18 4 Q20 8 24 8 Q28 8 30 4" />
      {/* Collar */}
      <path d="M18 4 L22 12 L24 10 L26 12 L30 4" />
      {/* Button placket */}
      <line x1="24" y1="10" x2="24" y2="36" />
      <circle cx="24" cy="18" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="24" cy="24" r="0.8" fill="currentColor" stroke="none" />
      <circle cx="24" cy="30" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  ),
};

// ── Category definitions ─────────────────────────────────────────────────────

type CategoryKey =
  | "trajes"
  | "pareo"
  | "short"
  | "moda"
  | "muebles"
  | "chaqueta"
  | "toalla"
  | "salidabano"
  | "totebag"
  | "mantel"
  | "delantal"
  | "uniforme"
  | "pijama"
  | "camisa";

interface Category {
  key: CategoryKey;
  label: string;
  Icon: React.FC<{ className?: string }>;
}

const categories: Category[] = [
  { key: "trajes",    label: "Trajes de baño",  Icon: Icons.TrajesDeBano },
  { key: "pareo",     label: "Pareo",            Icon: Icons.Pareo },
  { key: "short",     label: "Short",            Icon: Icons.Short },
  { key: "moda",      label: "Moda",             Icon: Icons.Moda },
  { key: "muebles",   label: "Muebles",          Icon: Icons.Muebles },
  { key: "chaqueta",  label: "Chaqueta",         Icon: Icons.Chaqueta },
  { key: "toalla",    label: "Toalla",           Icon: Icons.Toalla },
  { key: "salidabano",label: "Salida de baño",   Icon: Icons.SalidaDeBano },
  { key: "totebag",   label: "Tote Bag",         Icon: Icons.ToteBag },
  { key: "mantel",    label: "Manteles",         Icon: Icons.Mantel },
  { key: "delantal",  label: "Delantales",       Icon: Icons.Delantal },
  { key: "uniforme",  label: "Uniformes",        Icon: Icons.Uniforme },
  { key: "pijama",    label: "Pijamas",          Icon: Icons.Pijama },
  { key: "camisa",    label: "Camisas",          Icon: Icons.Camisa },
];

// ── Fabric cards ─────────────────────────────────────────────────────────────

interface FabricCard {
  nombre: string;
  slug: string;
  categoria_slug: string;
  imagen: string;
  usos: string;
  tag?: string;
}

const fabricsByCategory: Record<CategoryKey, FabricCard[]> = {
  trajes: [
    { nombre: "Lycra Peruana",    slug: "lycra-peruana",    categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/lycra-peruana-zoom.webp",         usos: "Trajes de baño UPF 20", tag: "Más vendida" },
    { nombre: "Lycra Lafayette",  slug: "lycra-lafayette",  categoria_slug: "telas-importadas", imagen: "/img/telas/telas-especiales/lycra-lafayette-zoom.webp",       usos: "Trajes de baño UPF 50", tag: "UPF 50" },
    { nombre: "Lycra Colombiana", slug: "lycra-colombiana", categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/lycra-colombiana-zoom.webp",       usos: "Franelas playa UPF 20" },
    { nombre: "Lycra Ecológica",  slug: "lycra-ecologica",  categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/lycra-ecologica-zoom.webp",        usos: "Trajes de baño UPF 20", tag: "Eco" },
    { nombre: "Lycra Everlast",   slug: "lycra-everlast",   categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/lycra-everlast-zoom.webp",         usos: "Trajes de baño" },
  ],
  pareo: [
    { nombre: "Chiffon Liviano Eco",      slug: "chiffon-liviano-eco",      categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/chiffon-liviano-zoom.webp",         usos: "Pareos, blusas, vestidos", tag: "Eco" },
    { nombre: "Chiffon Textura de Lino",  slug: "chiffon-textura-de-lino",  categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/chiffon-textura-lino-zoom.webp",    usos: "Pareos, faldas", tag: "Eco" },
    { nombre: "Seda Nacional Betty",      slug: "seda-nacional-betty",      categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/seda-nacional-betty-zoom.webp",     usos: "Pareos, bandanas", tag: "Premium" },
    { nombre: "Crepe Nacional",           slug: "crepe-nacional",           categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/crepe-nacional-zoom.webp",          usos: "Pareos, blusas" },
    { nombre: "Moda Colombiana",          slug: "moda-colombiana",          categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/moda-colombiana-zoom.webp",         usos: "Pareos, vestidos" },
  ],
  short: [
    { nombre: "Microfibra Antifluido",  slug: "microfibra-antifluido",  categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/microfibra-antifluido-zoom.webp",  usos: "Shorts deportivos", tag: "Importada" },
    { nombre: "Microfibra Quik",        slug: "microfibra-quik",        categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/microfibra-quik-zoom.webp",        usos: "Shorts, uniformes" },
    { nombre: "Microfibra Nacional",    slug: "microfibra-nacional",    categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp",    usos: "Shorts, banderines" },
    { nombre: "Dri-Fit Nacional",       slug: "dri-fit-nacional",       categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/dri-fit-nacional-zoom.webp",       usos: "Shorts deportivos" },
    { nombre: "Runner Africa",          slug: "runner-africa",          categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/runner-importada-zoom.webp",       usos: "Shorts UPF 30" },
  ],
  moda: [
    { nombre: "Seda Nacional Betty",    slug: "seda-nacional-betty",    categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/seda-nacional-betty-zoom.webp",   usos: "Prendas de noche, blusas", tag: "Premium" },
    { nombre: "Malla Chiffon Pesada",   slug: "malla-chiffon-pesada",   categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/malla-chiffon-pesada-zoom.webp",  usos: "Vestidos, blusas, faldas", tag: "Eco" },
    { nombre: "Malla Chiffon Nacional", slug: "malla-chiffon-nacional", categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/malla-chiffon-nacional-zoom.webp", usos: "Vestidos, faldas" },
    { nombre: "Moda Colombiana",        slug: "moda-colombiana",        categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/moda-colombiana-zoom.webp",        usos: "Camisería, vestidos" },
    { nombre: "Lino Poliéster",         slug: "lino-poliester",         categoria_slug: "telas-importadas", imagen: "/img/telas/telas-especiales/lino-poliester-zoom.webp",         usos: "Camisas, pantalones, blusas" },
    { nombre: "Crepe Nacional",         slug: "crepe-nacional",         categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/crepe-nacional-zoom.webp",         usos: "Moda casual" },
  ],
  muebles: [
    { nombre: "Loneta IMP 600D", slug: "loneta-imp-600d", categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/loneta-imp-600d-zoom.webp",  usos: "Tapicería, toldos, muebles", tag: "Resistente" },
    { nombre: "Loneta Soft",     slug: "loneta-soft",     categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/loneta-soft-zoom.webp",      usos: "Tapicería, morralería",      tag: "Pet Friendly" },
    { nombre: "Gabardina",       slug: "gabardina",       categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/gabardina-zoom.webp",        usos: "Decoración, cortinas" },
    { nombre: "Minimat",         slug: "minimat",         categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/minimat-zoom.webp",          usos: "Manteles, tapetes, muebles" },
  ],
  chaqueta: [
    { nombre: "Microfibra Antifluido", slug: "microfibra-antifluido", categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/microfibra-antifluido-zoom.webp", usos: "Chaquetas, uniformes", tag: "Antifluido" },
    { nombre: "Microfibra Quik",       slug: "microfibra-quik",       categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/microfibra-quik-zoom.webp",       usos: "Chaquetas, rompevientos" },
    { nombre: "Microfibra Nacional",   slug: "microfibra-nacional",   categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp",   usos: "Chaquetas deportivas" },
  ],
  toalla: [
    { nombre: "Toalla Microfibra", slug: "toalla-microfibra", categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/toalla-microfibra-zoom.webp", usos: "Toallas, paños de playa, ponchos", tag: "Eco" },
  ],
  salidabano: [
    { nombre: "Malla Chiffon Nacional", slug: "malla-chiffon-nacional", categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/malla-chiffon-nacional-zoom.webp", usos: "Salidas de baño, kimonos" },
    { nombre: "Malla Chiffon Pesada",   slug: "malla-chiffon-pesada",   categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/malla-chiffon-pesada-zoom.webp",   usos: "Salidas de baño, vestidos",   tag: "Eco" },
    { nombre: "Seda Nacional Betty",    slug: "seda-nacional-betty",    categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/seda-nacional-betty-zoom.webp",     usos: "Salidas de baño, pareos",     tag: "Premium" },
    { nombre: "Chiffon Liviano Eco",    slug: "chiffon-liviano-eco",    categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/chiffon-liviano-zoom.webp",         usos: "Salidas de baño, kimonos",    tag: "Eco" },
    { nombre: "Chiffon Textura de Lino",slug: "chiffon-textura-de-lino",categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/chiffon-textura-lino-zoom.webp",    usos: "Salidas de baño, pareos",     tag: "Eco" },
  ],
  totebag: [
    { nombre: "Pop Sublimable",      slug: "pop-sublimable",      categoria_slug: "telas-importadas", imagen: "/img/telas/telas-especiales/pop-sublimable-zoom.webp",      usos: "Tote bags, tulas, bolsos" },
    { nombre: "Loneta Soft",         slug: "loneta-soft",         categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/loneta-soft-zoom.webp",         usos: "Morrales, cartucheras",   tag: "Pet Friendly" },
    { nombre: "Loneta IMP 600D",     slug: "loneta-imp-600d",     categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/loneta-imp-600d-zoom.webp",     usos: "Morrales, delantales",    tag: "Resistente" },
    { nombre: "Microfibra Nacional", slug: "microfibra-nacional", categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp", usos: "Bolsos, tote bags livianos" },
  ],
  mantel: [
    { nombre: "Minimat",      slug: "minimat",      categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/minimat-zoom.webp",     usos: "Manteles, servilletas" },
    { nombre: "Gabardina",    slug: "gabardina",    categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/gabardina-zoom.webp",   usos: "Mantelería, decoración" },
    { nombre: "Lino Poliéster", slug: "lino-poliester", categoria_slug: "telas-importadas", imagen: "/img/telas/telas-especiales/lino-poliester-zoom.webp", usos: "Manteles formales" },
  ],
  delantal: [
    { nombre: "Minimat",           slug: "minimat",           categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/minimat-zoom.webp",                   usos: "Delantales, uniformes" },
    { nombre: "Gabardina",         slug: "gabardina",         categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/gabardina-zoom.webp",                 usos: "Delantales, uniformes" },
    { nombre: "Microfibra Nacional", slug: "microfibra-nacional", categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp", usos: "Delantales deportivos" },
    { nombre: "Loneta Soft",       slug: "loneta-soft",       categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/loneta-soft-zoom.webp",               usos: "Delantales, morrales",    tag: "Pet Friendly" },
    { nombre: "Loneta IMP 600D",   slug: "loneta-imp-600d",   categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/loneta-imp-600d-zoom.webp",           usos: "Delantales, toldos",      tag: "Resistente" },
  ],
  uniforme: [
    { nombre: "Atlética Nacional", slug: "atletica-nacional", categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/atletica-zoom.webp",         usos: "Franelas deportivas" },
    { nombre: "Dri-Fit Nacional",  slug: "dri-fit-nacional",  categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/dri-fit-nacional-zoom.webp", usos: "Franelas, deporte" },
    { nombre: "Runner Africa",     slug: "runner-africa",     categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/runner-importada-zoom.webp", usos: "Franelas UPF 30", tag: "Importada" },
    { nombre: "Muselina",          slug: "muselina",          categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/muselina-zoom.webp",         usos: "Franelas, backings" },
  ],
  pijama: [
    { nombre: "Moda Colombiana",     slug: "moda-colombiana",     categoria_slug: "telas-ecologicas", imagen: "/img/telas/telas-ecologicas/moda-colombiana-zoom.webp",        usos: "Pijamas, ropa de descanso" },
    { nombre: "Microdurazno",        slug: "microdurazno",        categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/microdurazno-zoom.webp",            usos: "Pijamas, conjuntos suaves" },
    { nombre: "Seda Nacional Betty", slug: "seda-nacional-betty", categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/seda-nacional-betty-zoom.webp",    usos: "Pijamas de seda", tag: "Premium" },
  ],
  camisa: [
    { nombre: "Lino Poliéster",       slug: "lino-poliester",       categoria_slug: "telas-importadas", imagen: "/img/telas/telas-especiales/lino-poliester-zoom.webp",           usos: "Camisas, guayaberas, blusas" },
    { nombre: "Microfibra Antifluido",slug: "microfibra-antifluido", categoria_slug: "telas-importadas", imagen: "/img/telas/telas-importadas/microfibra-antifluido-zoom.webp",   usos: "Camisas deportivas, uniformes", tag: "Antifluido" },
    { nombre: "Microfibra Nacional",  slug: "microfibra-nacional",  categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp",      usos: "Camisas deportivas" },
    { nombre: "Gabardina",            slug: "gabardina",            categoria_slug: "telas-nacionales", imagen: "/img/telas/telas-nacionales/gabardina-zoom.webp",                usos: "Camisas formales, uniformes" },
  ],
};

// ── Tag colors ───────────────────────────────────────────────────────────────

function tagColor(tag: string): string {
  if (tag === "Eco")         return "bg-green-100 text-green-700";
  if (tag === "UPF 50")      return "bg-blue-100 text-blue-700";
  if (tag === "Antifluido")  return "bg-blue-100 text-blue-700";
  if (tag === "Premium")     return "bg-yellow-100 text-yellow-700";
  if (tag === "Más vendida") return "bg-[#157ec2] text-white";
  return "bg-gray-100 text-gray-600";
}

// ── Component ────────────────────────────────────────────────────────────────

export const FabricSelector = () => {
  const [selected, setSelected] = useState<CategoryKey | null>(null);
  const fabrics = selected ? fabricsByCategory[selected] : [];
  const selectedCat = categories.find((c) => c.key === selected);

  return (
    <section className="w-full bg-[#f9f7f4] py-14 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] mb-3">
            Encuentra tu tela ideal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ¿Qué vas a confeccionar?
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Selecciona el tipo de prenda y te mostramos las telas que tenemos para ese uso.
          </p>
        </div>

        {/* Category grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-3 mb-10">
          {categories.map((cat) => {
            const isSelected = selected === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setSelected(isSelected ? null : cat.key)}
                aria-pressed={isSelected}
                className={`
                  flex flex-col items-center justify-center gap-2.5 rounded-2xl p-3.5 transition-all duration-200 border-2 cursor-pointer group
                  ${isSelected
                    ? "border-[#157ec2] bg-white shadow-md"
                    : "border-transparent bg-white shadow-sm hover:border-[#157ec2]/40 hover:shadow-md"
                  }
                `}
              >
                <cat.Icon
                  className={`w-10 h-10 transition-colors ${
                    isSelected ? "text-[#157ec2]" : "text-gray-500 group-hover:text-[#157ec2]"
                  }`}
                />
                <span className={`text-[10px] font-semibold text-center leading-tight ${
                  isSelected ? "text-[#157ec2]" : "text-gray-600"
                }`}>
                  {cat.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Results */}
        {selected && selectedCat && (
          <div>
            <div className="flex items-center gap-3 mb-6">
              <selectedCat.Icon className="w-6 h-6 text-[#157ec2]" />
              <div>
                <h3 className="font-bold text-gray-900 text-lg">Telas para {selectedCat.label}</h3>
                <p className="text-sm text-gray-400">{fabrics.length} tela{fabrics.length !== 1 ? "s" : ""} disponible{fabrics.length !== 1 ? "s" : ""}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {fabrics.map((fabric) => (
                <Link
                  key={fabric.slug + fabric.categoria_slug}
                  href={`/telas/${fabric.categoria_slug}/${fabric.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  <div className="relative w-full aspect-square overflow-hidden">
                    <Image
                      src={fabric.imagen}
                      alt={fabric.nombre}
                      fill
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {fabric.tag && (
                      <span className={`absolute top-2 left-2 text-[10px] font-bold px-2 py-0.5 rounded-full ${tagColor(fabric.tag)}`}>
                        {fabric.tag}
                      </span>
                    )}
                  </div>
                  <div className="p-3">
                    <p className="font-semibold text-gray-900 text-sm leading-tight group-hover:text-[#157ec2] transition-colors">
                      {fabric.nombre}
                    </p>
                    <p className="text-xs text-gray-500 mt-1 leading-snug">{fabric.usos}</p>
                    <span className="inline-block mt-2 text-[10px] font-bold text-[#157ec2] uppercase tracking-wide">
                      Ver tela →
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 text-center">
              <Link href="/telas" className="inline-flex items-center gap-2 text-sm font-semibold text-[#157ec2] hover:underline">
                Ver todo el catálogo de telas →
              </Link>
            </div>
          </div>
        )}

        {!selected && (
          <p className="text-center text-gray-400 text-xs mt-2">
            Toca una categoría para ver las telas disponibles
          </p>
        )}
      </div>
    </section>
  );
};
