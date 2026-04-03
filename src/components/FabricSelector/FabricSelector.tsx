"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// ── Clothing categories ──────────────────────────────────────────────────────

type CategoryKey = "playa" | "deportivo" | "moda" | "uniformes" | "hogar" | "accesorios";

interface Category {
  key: CategoryKey;
  label: string;
  emoji: string;
  description: string;
}

const categories: Category[] = [
  {
    key: "playa",
    label: "Playa & Baño",
    emoji: "🏖️",
    description: "Trajes de baño, franelas UPF, ropa de playa",
  },
  {
    key: "deportivo",
    label: "Deportivo",
    emoji: "⚡",
    description: "Franelas, leggings, ropa de alto rendimiento",
  },
  {
    key: "moda",
    label: "Moda",
    emoji: "👗",
    description: "Vestidos, blusas, faldas, prendas de noche",
  },
  {
    key: "uniformes",
    label: "Uniformes",
    emoji: "🏥",
    description: "Uniformes médicos, empresariales, mantelería",
  },
  {
    key: "hogar",
    label: "Hogar & Decor",
    emoji: "🏠",
    description: "Tapicería, toldos, muebles, mantelería",
  },
  {
    key: "accesorios",
    label: "Accesorios",
    emoji: "🎒",
    description: "Morrales, bolsos, cartucheras, tote bags",
  },
];

// ── Fabric data mapped to categories ────────────────────────────────────────

interface FabricCard {
  nombre: string;
  slug: string;
  categoria_slug: string;
  imagen: string;
  usos: string;
  tag?: string;
}

const fabricsByCategory: Record<CategoryKey, FabricCard[]> = {
  playa: [
    {
      nombre: "Lycra Peruana",
      slug: "lycra-peruana",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/lycra-peruana-zoom.webp",
      usos: "Trajes de baño UPF 20",
      tag: "Más vendida",
    },
    {
      nombre: "Lycra Lafayette",
      slug: "lycra-lafayette",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-especiales/lycra-lafayette-zoom.webp",
      usos: "Trajes de baño UPF 50",
      tag: "UPF 50",
    },
    {
      nombre: "Lycra Colombiana",
      slug: "lycra-colombiana",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/lycra-colombiana-zoom.webp",
      usos: "Franelas playa UPF 20",
    },
    {
      nombre: "Lycra Ecológica",
      slug: "lycra-ecologica",
      categoria_slug: "telas-ecologicas",
      imagen: "/img/telas/telas-ecologicas/lycra-ecologica-zoom.webp",
      usos: "Trajes de baño UPF 20",
      tag: "Eco",
    },
    {
      nombre: "Lycra Everlast",
      slug: "lycra-everlast",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/lycra-everlast-zoom.webp",
      usos: "Trajes de baño",
    },
    {
      nombre: "Toalla Microfibra",
      slug: "toalla-microfibra",
      categoria_slug: "telas-ecologicas",
      imagen: "/img/telas/telas-ecologicas/toalla-microfibra-zoom.webp",
      usos: "Paños de playa, ponchos",
      tag: "Eco",
    },
  ],
  deportivo: [
    {
      nombre: "Runner Africa",
      slug: "runner-africa",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/runner-importada-zoom.webp",
      usos: "Franelas deportivas UPF 30",
      tag: "Importada",
    },
    {
      nombre: "Lycra Legging",
      slug: "lycra-legging",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/lycra-legging-zoom.webp",
      usos: "Legging, sportwear UPF 30",
    },
    {
      nombre: "Dri-Fit Nacional",
      slug: "dri-fit-nacional",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/dri-fit-nacional-zoom.webp",
      usos: "Franelas, deporte",
    },
    {
      nombre: "Atlética Nacional",
      slug: "atletica-nacional",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/atletica-zoom.webp",
      usos: "Franelas, deporte",
    },
    {
      nombre: "Microfibra Nacional",
      slug: "microfibra-nacional",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp",
      usos: "Shorts, chaquetas",
    },
  ],
  moda: [
    {
      nombre: "Seda Nacional Betty",
      slug: "seda-nacional-betty",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/seda-nacional-betty-zoom.webp",
      usos: "Pareos, blusas, prendas de noche",
      tag: "Premium",
    },
    {
      nombre: "Chiffon Liviano Eco",
      slug: "chiffon-liviano-eco",
      categoria_slug: "telas-ecologicas",
      imagen: "/img/telas/telas-ecologicas/chiffon-liviano-zoom.webp",
      usos: "Vestidos, blusas, pareos",
      tag: "Eco",
    },
    {
      nombre: "Moda Colombiana",
      slug: "moda-colombiana",
      categoria_slug: "telas-ecologicas",
      imagen: "/img/telas/telas-ecologicas/moda-colombiana-zoom.webp",
      usos: "Camisería, vestidos, faldas",
    },
    {
      nombre: "Malla Chiffon Pesada",
      slug: "malla-chiffon-pesada",
      categoria_slug: "telas-ecologicas",
      imagen: "/img/telas/telas-ecologicas/malla-chiffon-pesada-zoom.webp",
      usos: "Blusas, vestidos, faldas",
      tag: "Eco",
    },
    {
      nombre: "Malla Chiffon Nacional",
      slug: "malla-chiffon-nacional",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/malla-chiffon-nacional-zoom.webp",
      usos: "Moda, blusas, vestidos",
    },
    {
      nombre: "Crepe Nacional",
      slug: "crepe-nacional",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/crepe-nacional-zoom.webp",
      usos: "Moda, pareos, blusas",
    },
    {
      nombre: "Lino Poliéster",
      slug: "lino-poliester",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-especiales/lino-poliester-zoom.webp",
      usos: "Camisas, pantalones, blusas",
    },
  ],
  uniformes: [
    {
      nombre: "Microfibra Antifluido",
      slug: "microfibra-antifluido",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/microfibra-antifluido-zoom.webp",
      usos: "Uniformes médicos, chaquetas",
      tag: "Antifluido",
    },
    {
      nombre: "Microfibra Quik",
      slug: "microfibra-quik",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/microfibra-quik-zoom.webp",
      usos: "Uniformes médicos, shorts",
    },
    {
      nombre: "Gabardina",
      slug: "gabardina",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/gabardina-zoom.webp",
      usos: "Uniformes, hogar, decoración",
    },
    {
      nombre: "Minimat",
      slug: "minimat",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/minimat-zoom.webp",
      usos: "Mantelería, uniformes, delantales",
    },
    {
      nombre: "Muselina",
      slug: "muselina",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/muselina-zoom.webp",
      usos: "Franelas, backings",
    },
  ],
  hogar: [
    {
      nombre: "Loneta IMP 600D",
      slug: "loneta-imp-600d",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/loneta-imp-600d-zoom.webp",
      usos: "Toldos, morrales, muebles",
      tag: "Resistente",
    },
    {
      nombre: "Loneta Soft",
      slug: "loneta-soft",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/loneta-soft-zoom.webp",
      usos: "Tapicería, morralería",
      tag: "Pet Friendly",
    },
    {
      nombre: "Gabardina",
      slug: "gabardina",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/gabardina-zoom.webp",
      usos: "Mantelería, cortinas, decoración",
    },
    {
      nombre: "Minimat",
      slug: "minimat",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/minimat-zoom.webp",
      usos: "Manteles, servilletas, birretes",
    },
    {
      nombre: "Toalla Microfibra",
      slug: "toalla-microfibra",
      categoria_slug: "telas-ecologicas",
      imagen: "/img/telas/telas-ecologicas/toalla-microfibra-zoom.webp",
      usos: "Paños, toallas, ponchos",
      tag: "Eco",
    },
  ],
  accesorios: [
    {
      nombre: "Loneta Soft",
      slug: "loneta-soft",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/loneta-soft-zoom.webp",
      usos: "Morrales, cartucheras",
      tag: "Pet Friendly",
    },
    {
      nombre: "Loneta IMP 600D",
      slug: "loneta-imp-600d",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-importadas/loneta-imp-600d-zoom.webp",
      usos: "Morrales, delantales",
      tag: "Resistente",
    },
    {
      nombre: "Pop Sublimable",
      slug: "pop-sublimable",
      categoria_slug: "telas-importadas",
      imagen: "/img/telas/telas-especiales/pop-sublimable-zoom.webp",
      usos: "Tote bags, tulas, bolsos",
    },
    {
      nombre: "Microfibra Nacional",
      slug: "microfibra-nacional",
      categoria_slug: "telas-nacionales",
      imagen: "/img/telas/telas-nacionales/microfibra-nacional-zoom.webp",
      usos: "Banderines, bolsas",
    },
  ],
};

// ── Tag color helper ─────────────────────────────────────────────────────────

function tagColor(tag: string): string {
  if (tag === "Eco") return "bg-green-100 text-green-700";
  if (tag === "UPF 50" || tag === "Antifluido") return "bg-blue-100 text-blue-700";
  if (tag === "Premium") return "bg-yellow-100 text-yellow-700";
  if (tag === "Más vendida") return "bg-[#157ec2] text-white";
  if (tag === "Resistente" || tag === "Pet Friendly") return "bg-zinc-100 text-zinc-700";
  return "bg-gray-100 text-gray-600";
}

// ── Main component ───────────────────────────────────────────────────────────

export const FabricSelector = () => {
  const [selected, setSelected] = useState<CategoryKey | null>(null);

  const fabrics = selected ? fabricsByCategory[selected] : [];

  return (
    <section className="w-full bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] mb-3">
            Encuentra tu tela ideal
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            ¿Qué vas a confeccionar?
          </h2>
          <p className="text-gray-500 mt-3 max-w-lg mx-auto">
            Selecciona el tipo de prenda y te mostramos las telas que tenemos para ese uso.
          </p>
        </div>

        {/* Category pills */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setSelected(selected === cat.key ? null : cat.key)}
              className={`
                flex flex-col items-center justify-center gap-2 rounded-2xl p-4 transition-all duration-200 border-2 cursor-pointer
                ${
                  selected === cat.key
                    ? "border-[#157ec2] bg-white shadow-md scale-[1.03]"
                    : "border-transparent bg-white shadow-sm hover:border-[#157ec2]/40 hover:shadow-md"
                }
              `}
              aria-pressed={selected === cat.key}
              title={cat.description}
            >
              <span className="text-3xl" aria-hidden="true">{cat.emoji}</span>
              <span className={`text-xs font-bold text-center leading-tight ${selected === cat.key ? "text-[#157ec2]" : "text-gray-700"}`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Results panel */}
        {selected && (
          <div>
            <div className="flex items-center gap-2 mb-6">
              <span className="text-2xl">{categories.find(c => c.key === selected)?.emoji}</span>
              <div>
                <h3 className="font-bold text-gray-900 text-lg">
                  Telas para {categories.find(c => c.key === selected)?.label}
                </h3>
                <p className="text-sm text-gray-500">
                  {categories.find(c => c.key === selected)?.description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {fabrics.map((fabric) => (
                <Link
                  key={fabric.slug}
                  href={`/telas/${fabric.categoria_slug}/${fabric.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 hover:-translate-y-0.5"
                >
                  {/* Image */}
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

                  {/* Info */}
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

            {/* CTA */}
            <div className="mt-8 text-center">
              <Link
                href="/telas"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#157ec2] hover:underline"
              >
                Ver todo el catálogo de telas →
              </Link>
            </div>
          </div>
        )}

        {/* Empty state */}
        {!selected && (
          <p className="text-center text-gray-400 text-sm mt-2">
            Toca una categoría para ver las telas disponibles
          </p>
        )}
      </div>
    </section>
  );
};
