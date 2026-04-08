import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/lib/blog";
import { SUBLINK_URL } from "@/lib/constant";

export const metadata: Metadata = {
  title: "Blog | Sublink Textil Venezuela",
  description:
    "Guías, tendencias y consejos sobre telas, sublimación y el sector textil en Venezuela. Todo lo que necesitas saber para elegir la tela correcta.",
  keywords: [
    "blog telas Venezuela",
    "guía de telas",
    "sublimación digital Venezuela",
    "print on demand Venezuela",
    "telas para confección",
  ],
  alternates: {
    canonical: `${SUBLINK_URL}/blog`,
  },
  openGraph: {
    title: "Blog | Sublink Textil Venezuela",
    description:
      "Guías y tendencias sobre telas y sublimación en Venezuela.",
    url: `${SUBLINK_URL}/blog`,
    siteName: "Sublink Textil",
    locale: "es_VE",
    type: "website",
  },
};

function formatFecha(fechaStr: string): string {
  const [year, month, day] = fechaStr.split("-").map(Number);
  const fecha = new Date(year, month - 1, day);
  return fecha.toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPage() {
  const posts = [...blogPosts].sort(
    (a, b) => new Date(b.fecha).getTime() - new Date(a.fecha).getTime()
  );

  return (
    <main className="max-w-5xl mx-auto px-4 py-16">
      {/* Encabezado */}
      <div className="text-center mb-14">
        <span className="inline-block bg-blue-100 text-blue-700 text-sm font-semibold px-4 py-1 rounded-full mb-4 uppercase tracking-wide">
          Blog
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Guías y Tendencias Textiles
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          Todo lo que necesitas saber sobre telas, sublimación y el sector textil
          en Venezuela.
        </p>
      </div>

      {/* Grid de artículos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-300"
          >
            {/* Imagen */}
            <div className="relative h-52 w-full overflow-hidden">
              <Image
                src={post.imagen}
                alt={post.titulo}
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Contenido */}
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-2 py-1 rounded">
                  {post.categoria}
                </span>
                <span className="text-xs text-gray-400">{post.tiempoLectura} lectura</span>
              </div>

              <h2 className="text-xl font-bold text-gray-900 mb-2 leading-snug hover:text-blue-600 transition-colors">
                <Link href={`/blog/${post.slug}`}>{post.titulo}</Link>
              </h2>

              <p className="text-gray-500 text-sm leading-relaxed mb-5 line-clamp-3">
                {post.descripcion}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">
                  {formatFecha(post.fecha)}
                </span>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors flex items-center gap-1"
                >
                  Leer artículo →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>

    </main>
  );
}
