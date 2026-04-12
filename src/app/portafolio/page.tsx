import { Metadata } from "next";
import { PortafolioGrid } from "@/components/Portafolio/PortafolioGrid";
import { SUBLINK_URL } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Portafolio | Sublink — Sublimación Textil Venezuela",
  description: "Proyectos reales de sublimación textil en Valencia, Venezuela. Uniformes, trajes de baño, ropa deportiva, artículos promocionales y más.",
  keywords: [
    "portafolio sublimación",
    "proyectos textiles",
    "uniformes sublimados",
    "trajes de baño",
    "artículos promocionales",
    "sublimación Valencia",
    "sublimación Venezuela",
  ],
  alternates: {
    canonical: `${SUBLINK_URL}/portafolio`,
  },
  openGraph: {
    title: "Portafolio | Sublink — Sublimación Textil Venezuela",
    description: "Proyectos reales de sublimación textil en Valencia, Venezuela. Uniformes, trajes de baño, ropa deportiva, artículos promocionales y más.",
    url: `${SUBLINK_URL}/portafolio`,
    siteName: "Sublink Company",
    images: [{ url: `${SUBLINK_URL}/opengraph-image.jpg`, width: 1200, height: 630 }],
    locale: "es_VE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portafolio | Sublink — Sublimación Textil Venezuela",
    description: "Proyectos reales de sublimación textil en Valencia, Venezuela. Uniformes, trajes de baño, ropa deportiva y más.",
    images: [`${SUBLINK_URL}/opengraph-image.jpg`],
  },
};

const PROYECTOS = [
  {
    id: 1,
    titulo: "Uniformes deportivos — Club Fútbol",
    categoria: "Uniformes",
    tela: "Microdurazno",
    metros: 45,
    color: "bg-blue-900",
    descripcion: "Camisetas y shorts para equipo completo de 15 jugadores con número y nombre sublimados.",
  },
  {
    id: 2,
    titulo: "Colección trajes de baño",
    categoria: "Trajes de baño",
    tela: "Lycra Peruana",
    metros: 30,
    color: "bg-teal-700",
    descripcion: "Serie de 20 diseños únicos de trajes de baño para marca local.",
  },
  {
    id: 3,
    titulo: "Pareos personalizados — Boutique",
    categoria: "Moda",
    tela: "Chiffon Liviano Eco",
    metros: 25,
    color: "bg-purple-800",
    descripcion: "Colección de pareos de playa con estampado exclusivo para boutique de lujo.",
  },
  {
    id: 4,
    titulo: "Toallas gym — Regalo corporativo",
    categoria: "Promocional",
    tela: "Toalla Microfibra",
    metros: 40,
    color: "bg-orange-700",
    descripcion: "500 toallas con logo de empresa para obsequio corporativo de fin de año.",
  },
  {
    id: 5,
    titulo: "Leggings activewear — Marca propia",
    categoria: "Activewear",
    tela: "Lycra Legging",
    metros: 60,
    color: "bg-pink-800",
    descripcion: "Línea de 8 diseños de leggings para marca de ropa deportiva femenina.",
  },
  {
    id: 6,
    titulo: "Uniformes médicos clínica",
    categoria: "Uniformes",
    tela: "Microfibra Quik",
    metros: 35,
    color: "bg-cyan-800",
    descripcion: "Uniformes con bordado institucional para personal de clínica privada.",
  },
  {
    id: 7,
    titulo: "Manteles evento corporativo",
    categoria: "Decoración",
    tela: "Loneta Soft",
    metros: 20,
    color: "bg-amber-800",
    descripcion: "Manteles personalizados para evento de 200 personas con colores corporativos.",
  },
  {
    id: 8,
    titulo: "Colección verano — Swimwear",
    categoria: "Trajes de baño",
    tela: "Lycra Colombiana",
    metros: 50,
    color: "bg-emerald-700",
    descripcion: "40 piezas de swimwear con 5 diseños tropicales para temporada de verano.",
  },
  {
    id: 9,
    titulo: "Tote bags — Tienda eco",
    categoria: "Promocional",
    tela: "Loneta Soft",
    metros: 15,
    color: "bg-lime-800",
    descripcion: "200 tote bags con ilustraciones originales para tienda de productos orgánicos.",
  },
];

export default function PortafolioPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header section */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-800 text-white py-16 sm:py-24 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">
              Portafolio
            </h1>
            <div className="w-16 h-1 bg-blue-500 rounded-full"></div>
          </div>
          <p className="text-lg sm:text-xl text-zinc-300 max-w-3xl">
            Proyectos reales de sublimación textil realizados en Valencia, Venezuela. Desde uniformes deportivos hasta artículos promocionales, cada proyecto refleja nuestra pasión por la calidad y la innovación textil.
          </p>
        </div>
      </section>

      {/* Grid section */}
      <section className="py-12 sm:py-20 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto">
          <PortafolioGrid proyectos={PROYECTOS} />
        </div>
      </section>
    </main>
  );
}
