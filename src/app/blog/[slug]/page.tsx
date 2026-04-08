import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts, getBlogPost } from "@/lib/blog";
import { SUBLINK_URL } from "@/lib/constant";

// Importar contenido de artículos
import TelasTrajes from "../posts/telas-para-trajes-de-bano";
import PrintOnDemand from "../posts/print-on-demand-modelo-actual";
import TiposDeFibras from "../posts/tipos-de-fibras-y-telas";

interface Props {
  params: { slug: string };
}

const contentMap: Record<string, React.ComponentType> = {
  "telas-para-trajes-de-bano": TelasTrajes,
  "print-on-demand-modelo-actual": PrintOnDemand,
  "tipos-de-fibras-y-telas": TiposDeFibras,
};

export async function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = getBlogPost(params.slug);
  if (!post) return {};

  return {
    title: `${post.titulo} | Blog Sublink`,
    description: post.descripcion,
    keywords: post.keywords,
    alternates: {
      canonical: `${SUBLINK_URL}/blog/${post.slug}`,
    },
    openGraph: {
      title: post.titulo,
      description: post.descripcion,
      url: `${SUBLINK_URL}/blog/${post.slug}`,
      siteName: "Sublink Textil",
      images: [{ url: post.imagen, width: 1200, height: 630 }],
      locale: "es_VE",
      type: "article",
      publishedTime: post.fecha,
    },
  };
}

function formatFecha(fechaStr: string): string {
  const [year, month, day] = fechaStr.split("-").map(Number);
  const fecha = new Date(year, month - 1, day);
  return fecha.toLocaleDateString("es-VE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();

  const ContentComponent = contentMap[params.slug];
  if (!ContentComponent) notFound();

  // Artículos relacionados (los demás)
  const relacionados = blogPosts.filter((p) => p.slug !== params.slug).slice(0, 2);

  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-400 mb-8 flex items-center gap-2">
        <Link href="/" className="hover:text-blue-600 transition-colors">
          Inicio
        </Link>
        <span>›</span>
        <Link href="/blog" className="hover:text-blue-600 transition-colors">
          Blog
        </Link>
        <span>›</span>
        <span className="text-gray-600 truncate max-w-xs">{post.titulo}</span>
      </nav>

      {/* Encabezado del artículo */}
      <header className="mb-10">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-semibold text-blue-600 uppercase tracking-wide bg-blue-50 px-3 py-1 rounded-full">
            {post.categoria}
          </span>
          <span className="text-xs text-gray-400">{post.tiempoLectura} lectura</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4">
          {post.titulo}
        </h1>

        <p className="text-lg text-gray-500 mb-6">{post.descripcion}</p>

        <div className="flex items-center gap-4 text-sm text-gray-400 border-t border-gray-100 pt-4">
          <span>✍️ {post.autor}</span>
          <span>📅 {formatFecha(post.fecha)}</span>
        </div>
      </header>

      {/* Imagen principal */}
      <div className="relative h-72 md:h-96 w-full rounded-2xl overflow-hidden mb-12">
        <Image
          src={post.imagen}
          alt={post.titulo}
          fill
          className="object-cover"
          priority
          sizes="(max-width: 768px) 100vw, 896px"
        />
      </div>

      {/* Contenido del artículo */}
      <div className="prose prose-blue prose-lg max-w-none
        prose-headings:font-bold prose-headings:text-gray-900
        prose-h2:text-2xl prose-h2:mt-10 prose-h2:mb-4
        prose-h3:text-xl prose-h3:mt-6 prose-h3:mb-3
        prose-p:text-gray-700 prose-p:leading-relaxed
        prose-li:text-gray-700
        prose-a:text-blue-600 prose-a:no-underline hover:prose-a:underline
        prose-strong:text-gray-900
        prose-table:text-sm
        prose-th:bg-blue-600 prose-th:text-white">
        <ContentComponent />
      </div>

      {/* Separador */}
      <hr className="my-14 border-gray-100" />

      {/* Artículos relacionados */}
      {relacionados.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Artículos relacionados
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relacionados.map((rel) => (
              <Link
                key={rel.slug}
                href={`/blog/${rel.slug}`}
                className="group flex gap-4 bg-white border border-gray-100 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image
                    src={rel.imagen}
                    alt={rel.titulo}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="96px"
                  />
                </div>
                <div>
                  <span className="text-xs text-blue-600 font-semibold uppercase">
                    {rel.categoria}
                  </span>
                  <h3 className="text-sm font-bold text-gray-800 leading-snug mt-1 group-hover:text-blue-600 transition-colors">
                    {rel.titulo}
                  </h3>
                  <span className="text-xs text-gray-400 mt-1 block">
                    {rel.tiempoLectura} lectura
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA WhatsApp */}
      <div className="mt-12 bg-blue-600 rounded-2xl p-8 text-white text-center">
        <h2 className="text-xl font-bold mb-2">¿Te quedaron dudas?</h2>
        <p className="text-blue-100 mb-5 text-sm">
          Nuestro equipo puede asesorarte sobre telas, sublimación o cualquier
          servicio textil.
        </p>
        <a
          href="https://wa.me/584162698802?text=Vengo%20de%20la%20Web"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-white text-blue-600 font-bold px-7 py-3 rounded-full hover:bg-blue-50 transition-colors text-sm"
        >
          Escribir por WhatsApp
        </a>
      </div>

      {/* JSON-LD Article Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline: post.titulo,
            description: post.descripcion,
            image: `${SUBLINK_URL}${post.imagen}`,
            datePublished: post.fecha,
            author: {
              "@type": "Organization",
              name: post.autor,
            },
            publisher: {
              "@type": "Organization",
              name: "Sublink Textil",
              url: SUBLINK_URL,
            },
            url: `${SUBLINK_URL}/blog/${post.slug}`,
            keywords: post.keywords.join(", "),
          }),
        }}
      />
      {/* JSON-LD BreadcrumbList Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Inicio", item: SUBLINK_URL },
              { "@type": "ListItem", position: 2, name: "Blog", item: "${SUBLINK_URL}/blog" },
              { "@type": "ListItem", position: 3, name: post.titulo, item: `${SUBLINK_URL}/blog/${post.slug}` },
            ],
          }),
        }}
      />
    </main>
  );
}
