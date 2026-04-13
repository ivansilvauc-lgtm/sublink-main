import { Metadata } from "next";
import Link from "next/link";
import { telas } from "@/lib/telas";
import { SUBLINK_URL } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Catálogo de Telas para Sublimación | Sublink Venezuela",
  description: "Explora +40 tipos de telas para sublimación textil en Venezuela: telas ecológicas, importadas y nacionales. Poliéster, lycra, microfibra y más. Desde 1 metro.",
  keywords: [
    "telas para sublimación Venezuela",
    "catálogo de telas",
    "telas poliéster Venezuela",
    "telas ecológicas Venezuela",
    "lycra sublimación",
    "microfibra sublimación",
    "telas Valencia Venezuela",
    "sublimación textil Venezuela",
  ],
  alternates: {
    canonical: `${SUBLINK_URL}/telas`,
  },
  openGraph: {
    title: "Catálogo de Telas para Sublimación | Sublink Venezuela",
    description: "Explora +40 tipos de telas para sublimación textil en Venezuela: telas ecológicas, importadas y nacionales. Desde 1 metro.",
    url: `${SUBLINK_URL}/telas`,
    siteName: "Sublink Company",
    locale: "es_VE",
    type: "website",
  },
};

const categorias = [
  { slug: "telas-ecologicas", label: "Telas Ecológicas" },
  { slug: "telas-importadas", label: "Telas Importadas" },
  { slug: "telas-nacionales", label: "Telas Nacionales" },
];

export default function TelasPage() {
  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Catálogo de Telas para Sublimación — Sublink",
    description: "Más de 40 tipos de telas para sublimación textil disponibles en Venezuela. Telas ecológicas, importadas y nacionales.",
    url: `${SUBLINK_URL}/telas`,
    provider: {
      "@type": "Organization",
      name: "Sublink Company",
      url: SUBLINK_URL,
    },
    hasPart: telas.map((tela) => ({
      "@type": "Product",
      name: tela.nombre,
      description: tela.descripcion,
      url: `${SUBLINK_URL}/telas/${tela.categoria_slug}/${tela.slug}`,
      offers: {
        "@type": "Offer",
        price: tela.precio,
        priceCurrency: "VES",
        availability: "https://schema.org/InStock",
      },
    })),
  };

  const telasPorCategoria = categorias.map((cat) => ({
    ...cat,
    items: telas.filter((t) => t.categoria_slug === cat.slug),
  }));

  return (
    <main className="min-h-screen mt-32 sm:mt-40 max-w-6xl mx-auto mb-20 px-4">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />

      <h1 className="text-3xl sm:text-5xl font-bold text-primary text-center tracking-tight mb-4">
        Catálogo de Telas
      </h1>
      <p className="text-center text-zinc-600 text-sm sm:text-base mb-12 max-w-2xl mx-auto">
        +40 tipos de telas para sublimación textil disponibles en Venezuela. Escoge la tela ideal para tu proyecto.
      </p>

      {telasPorCategoria.map((cat) => (
        <section key={cat.slug} className="mb-14">
          <h2 className="text-xl font-bold text-zinc-800 mb-6 pb-2 border-b border-zinc-200">
            {cat.label}
            <span className="ml-2 text-sm font-normal text-zinc-400">({cat.items.length} telas)</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {cat.items.map((tela) => (
              <Link
                key={tela.slug}
                href={`/telas/${tela.categoria_slug}/${tela.slug}`}
                className="group block bg-white border border-zinc-200 rounded-xl p-4 hover:border-primary hover:shadow-md transition-all duration-200 focus:ring-2 focus:ring-primary focus:outline-none"
              >
                <p className="text-xs text-zinc-400 uppercase tracking-wide mb-1">{tela.composition}</p>
                <h3 className="font-semibold text-zinc-800 text-sm group-hover:text-primary transition-colors leading-tight mb-2">
                  {tela.nombre}
                </h3>
                <p className="text-primary font-bold text-sm">€{tela.precio}<span className="text-zinc-400 font-normal text-xs">/m</span></p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
