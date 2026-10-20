import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { servicios } from "@/lib/servicios";
import { SUBLINK_URL } from "@/lib/constant";

export const metadata: Metadata = {
    title: "Servicios de Sublimación, DTF y Estampados Textiles | Sublink Venezuela",
    description:
        "Sublimación textil continua, DTF industrial, DTF para marquillas, corte láser y etiquetas en Venezuela. Capacidad de 10.000 m/mes. Valencia, Carabobo.",
    keywords: [
        "servicios de sublimación venezuela",
        "sublimación textil valencia",
        "DTF venezuela",
        "corte láser textil venezuela",
        "estampados textiles venezuela",
        "etiquetas de ropa venezuela",
        "Sublink Company servicios",
    ],
    alternates: {
        canonical: `${SUBLINK_URL}/servicios`,
    },
    openGraph: {
        title: "Servicios de Sublimación, DTF y Estampados Textiles | Sublink Venezuela",
        description:
            "Sublimación textil continua, DTF industrial, DTF para marquillas, corte láser y etiquetas en Venezuela.",
        url: `${SUBLINK_URL}/servicios`,
        siteName: "Sublink Company",
        images: [{ url: `${SUBLINK_URL}/opengraph-image.jpg`, width: 1200, height: 630 }],
        locale: "es_VE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Servicios de Sublimación, DTF y Estampados Textiles | Sublink Venezuela",
        description:
            "Sublimación textil continua, DTF, corte láser y etiquetas en Venezuela. Valencia, Carabobo.",
        images: [`${SUBLINK_URL}/opengraph-image.jpg`],
    },
};

export default function ServiciosPage() {
    const serviciosVisibles = servicios.filter((s) => s.visible !== false);

    const breadcrumbJsonLd = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
            { "@type": "ListItem", position: 1, name: "Inicio", item: SUBLINK_URL },
            { "@type": "ListItem", position: 2, name: "Servicios", item: `${SUBLINK_URL}/servicios` },
        ],
    };

    const collectionJsonLd = {
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Servicios de Sublimación y Estampados Textiles — Sublink Venezuela",
        itemListElement: serviciosVisibles.map((servicio, i) => ({
            "@type": "ListItem",
            position: i + 1,
            item: {
                "@type": "Service",
                name: servicio.title,
                description: servicio.metaDescription ?? servicio.description,
                url: `${SUBLINK_URL}/servicios/${servicio.slug}`,
                image: `${SUBLINK_URL}${servicio.equipment_image}`,
                provider: {
                    "@type": "LocalBusiness",
                    name: "Sublink Company",
                    url: SUBLINK_URL,
                },
                areaServed: { "@type": "Country", name: "Venezuela" },
            },
        })),
    };

    return (
        <main className="min-h-screen mt-28 lg:mt-32 max-w-6xl mx-auto px-4 lg:px-8 pb-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
            />

            {/* Breadcrumb visual */}
            <nav aria-label="Breadcrumb" className="text-sm text-zinc-500 mb-6">
                <ol className="flex items-center gap-2">
                    <li>
                        <Link href="/" className="hover:text-primary">Inicio</Link>
                    </li>
                    <li aria-hidden="true">/</li>
                    <li className="text-zinc-900 font-medium" aria-current="page">Servicios</li>
                </ol>
            </nav>

            <header className="mb-12 text-center">
                <h1 className="text-3xl lg:text-5xl font-bold text-zinc-900 mb-4">
                    Servicios de Sublimación, DTF y Estampados Textiles
                </h1>
                <p className="text-lg text-zinc-600 max-w-3xl mx-auto">
                    En Sublink combinamos tecnología de punta, equipos industriales y un
                    equipo con años de experiencia en el sector textil venezolano. Desde
                    sublimación continua a gran formato hasta DTF, corte láser y
                    etiquetas, cubrimos toda la cadena de personalización de prendas.
                </p>
            </header>

            {/* Grid de servicios */}
            <section
                aria-label="Lista de servicios"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {serviciosVisibles.map((servicio) => (
                    <article
                        key={servicio.slug}
                        className="group bg-white border border-zinc-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow"
                    >
                        <Link href={`/servicios/${servicio.slug}`} className="block">
                            <div className="relative aspect-[4/3] bg-zinc-100 overflow-hidden">
                                <Image
                                    src={servicio.equipment_image}
                                    alt={`${servicio.title} — Sublink Venezuela`}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                            <div className="p-5">
                                <h2 className="text-lg font-bold text-zinc-900 mb-2 group-hover:text-primary transition-colors">
                                    {servicio.title}
                                </h2>
                                <p className="text-sm text-zinc-600 line-clamp-3 mb-4">
                                    {servicio.description}
                                </p>
                                <span className="text-sm font-semibold text-primary inline-flex items-center gap-1">
                                    Ver detalles
                                    <svg
                                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={2}
                                            d="M9 5l7 7-7 7"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </Link>
                    </article>
                ))}
            </section>

            {/* CTA final */}
            <section className="mt-16 bg-gradient-to-br from-primary to-[#0f6ba8] text-white rounded-xl p-8 lg:p-12 text-center">
                <h2 className="text-2xl lg:text-3xl font-bold mb-3">
                    ¿Tienes un proyecto en mente?
                </h2>
                <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                    Cuéntanos qué quieres producir y te asesoramos para elegir el
                    servicio y la tela ideal. Respondemos por WhatsApp en minutos.
                </p>
                <a
                    href="https://wa.me/584244067274?text=Hola%20Sublink%2C%20vengo%20de%20la%20p%C3%A1gina%20de%20Servicios%20%F0%9F%91%8B"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-semibold hover:bg-zinc-100 transition-colors"
                >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Hablar por WhatsApp
                </a>
            </section>
        </main>
    );
}
