"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Category icon paths ───────────────────────────────────────────────────────
// Save your icon images to /public/assets/iconos-categorias/ with these names:
//   trajes.png  pareo.png  short.png  moda.png  muebles.png  chaqueta.png
//   toalla.png  salidabano.png  totebag.png  mantel.png  delantal.png
//   uniforme.png  pijama.png  camisa.png

// ── (old SVG icon removed — using image files now) ────────────────────────────

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
  iconSrc: string;
}

// Icon files: save your images to /public/assets/iconos-categorias/
// using the filenames listed in iconSrc below.
const categories: Category[] = [
  { key: "trajes",     label: "Trajes de baño", iconSrc: "/assets/iconos-categorias/trajes.png" },
  { key: "pareo",      label: "Pareo",           iconSrc: "/assets/iconos-categorias/pareo.png" },
  { key: "short",      label: "Short",           iconSrc: "/assets/iconos-categorias/short.svg" },
  { key: "moda",       label: "Moda",            iconSrc: "/assets/iconos-categorias/moda.png" },
  { key: "muebles",    label: "Muebles",         iconSrc: "/assets/iconos-categorias/muebles.svg" },
  { key: "chaqueta",   label: "Chaqueta",        iconSrc: "/assets/iconos-categorias/chaqueta.png" },
  { key: "toalla",     label: "Toalla",          iconSrc: "/assets/iconos-categorias/toalla.png" },
  { key: "salidabano", label: "Salida de baño",  iconSrc: "/assets/iconos-categorias/salidabano.svg" },
  { key: "totebag",    label: "Tote Bag",        iconSrc: "/assets/iconos-categorias/totebag.svg" },
  { key: "mantel",     label: "Manteles",        iconSrc: "/assets/iconos-categorias/mantel.svg" },
  { key: "delantal",   label: "Delantales",      iconSrc: "/assets/iconos-categorias/delantal.png" },
  { key: "uniforme",   label: "Uniformes",       iconSrc: "/assets/iconos-categorias/uniforme.svg" },
  { key: "pijama",     label: "Pijamas",         iconSrc: "/assets/iconos-categorias/pijama.png" },
  { key: "camisa",     label: "Camisas",         iconSrc: "/assets/iconos-categorias/camisa.png" },
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
    { nombre: "Microdurazno",        slug: "microdurazno",        categoria_slug: "telas-importadas", imagen: "/img/telas/telas-nacionales/dri-fit-nacional-zoom.webp",         usos: "Pijamas, conjuntos suaves" },
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
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
            ¿Qué vas a confeccionar?
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto text-sm">
            Selecciona el tipo de prenda y te mostramos las telas que tenemos para ese uso.
          </p>
          <p className="text-center font-black text-base text-[#157ec2] mt-4 tracking-wide">
            Click en la Tela de la Imagen
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
                <Image
                  src={cat.iconSrc}
                  alt={cat.label}
                  width={40}
                  height={40}
                  className={`w-10 h-10 object-contain transition-opacity ${
                    isSelected ? "opacity-100" : "opacity-60 group-hover:opacity-100"
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
              <Image src={selectedCat.iconSrc} alt={selectedCat.label} width={24} height={24} className="w-6 h-6 object-contain" />
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
