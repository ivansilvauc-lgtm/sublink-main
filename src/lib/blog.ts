export interface BlogPost {
  slug: string;
  titulo: string;
  descripcion: string;
  fecha: string;
  autor: string;
  categoria: string;
  imagen: string;
  tiempoLectura: string;
  keywords: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "telas-para-trajes-de-bano",
    titulo: "Telas para trajes de baño: guía completa para elegir la mejor",
    descripcion:
      "Descubre qué telas son las más adecuadas para trajes de baño: lycra, microfibra y sus diferencias en resistencia al cloro, elasticidad y durabilidad.",
    fecha: "2026-03-15",
    autor: "Sublink Textil",
    categoria: "Guías de Telas",
    imagen: "/img/telas/telas-importadas/lycra-peruana-zoom.webp",
    tiempoLectura: "5 min",
    keywords: [
      "telas para trajes de baño",
      "lycra para baño",
      "microfibra traje de baño",
      "tela resistente al cloro",
      "tela elastizada",
    ],
  },
  {
    slug: "print-on-demand-modelo-actual",
    titulo: "Print on Demand: el modelo de negocio actual para vender ropa",
    descripcion:
      "Aprende cómo funciona el Print on Demand, por qué está revolucionando la industria textil y cómo puedes arrancar tu negocio sin inventario con sublimación digital.",
    fecha: "2026-03-28",
    autor: "Sublink Textil",
    categoria: "Tendencias",
    imagen: "/assets/iconos-textiles/estampar.webp",
    tiempoLectura: "6 min",
    keywords: [
      "print on demand",
      "sublimación digital",
      "negocio de ropa sin inventario",
      "impresión bajo demanda Venezuela",
      "emprender textil",
    ],
  },
  {
    slug: "tipos-de-fibras-y-telas",
    titulo: "Tipos de fibras textiles: naturales, sintéticas, artificiales y sostenibles",
    descripcion:
      "Guía completa sobre fibras textiles: naturales (algodón, seda, lino), sintéticas (poliéster, elastano), artificiales (viscosa, modal) y sostenibles (bambú, lyocell). Incluye tipos de tejidos y acabados técnicos.",
    fecha: "2026-04-02",
    autor: "Sublink Textil",
    categoria: "Guías de Telas",
    imagen: "/img/telas/telas-ecologicas/chiffon-liviano-1.webp",
    tiempoLectura: "8 min",
    keywords: [
      "tipos de telas Venezuela",
      "fibras textiles",
      "telas para ropa deportiva",
      "telas para uniformes",
      "telas para moda",
      "telas para playa",
      "guía de telas",
    ],
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
