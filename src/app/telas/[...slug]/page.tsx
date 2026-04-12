import Image from 'next/image';
import { Calculadora } from '@/components/Detalles/Calculadora';
import { ImageGallery } from '@/components/Detalles/ImageGallery';
import { telas } from '@/lib/telas';
import Carousel from '@/components/Detalles/Carousel';
import { ITela, IconosAlt } from '@/model/tela';
import { Metadata } from 'next';
import { SUBLINK_URL } from '@/lib/constant';

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string[] } }): Promise<Metadata> {
  
  const tela: ITela | undefined = telas.find(tela => tela.slug === params.slug[1]);
  
  const seoTitle = tela ? `${tela.nombre} — Tela para Sublimación Venezuela` : '';
  return {
    title: seoTitle,
    description: tela?.descripcion ?? '',
    category: "Tela",
    alternates: {
      canonical: SUBLINK_URL + "/telas/" + tela?.categoria_slug + "/" + tela?.slug,
    },
    openGraph: {
      title: seoTitle,
      description: tela?.descripcion ?? '',
      url: SUBLINK_URL + "/telas/" + tela?.categoria_slug + "/" + tela?.slug,
      siteName: 'Sublink Company',
      images: [
        {
          url: tela?.imagen_zoom ? `${SUBLINK_URL}${tela.imagen_zoom}` : '',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'es_VE',
      type: 'website',
    },
  }
}

export async function generateStaticParams() {

  return telas.map((tela) => ({
    slug: [tela.categoria_slug, tela.slug]
  }))
}

export default function TelasPage({ params }: { params: { slug: string[] } }) {

  const tela: ITela | undefined = telas.find(tela => tela.slug === params.slug[1]);
  const recomendaciones = telas.filter(tela => tela.categoria_slug === params.slug[0] && tela.slug !== params.slug[1]);

  if (!tela) {
    return (
      <main className="min-h-screen mt-56 max-w-5xl mx-auto mb-20 px-2 lg:px-0">
        <h1>Not found</h1>
      </main>
    )
  }
  const productJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: tela.nombre,
    description: tela.descripcion,
    image: tela.imagen_zoom,
    url: `${SUBLINK_URL}/telas/${tela.categoria_slug}/${tela.slug}`,
    brand: { '@type': 'Brand', name: 'Sublink Company' },
    offers: {
      '@type': 'Offer',
      price: tela.precio,
      priceCurrency: 'VES',
      availability: 'https://schema.org/InStock',
      seller: { '@type': 'Organization', name: 'Sublink Company' },
    },
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Inicio', item: SUBLINK_URL },
      { '@type': 'ListItem', position: 2, name: 'Telas', item: `${SUBLINK_URL}/telas` },
      { '@type': 'ListItem', position: 3, name: tela.nombre, item: `${SUBLINK_URL}/telas/${tela.categoria_slug}/${tela.slug}` },
    ],
  };

  return (
    <main className="h-full mt-32 sm:mt-44 max-w-6xl mx-auto mb-20 px-2 lg:px-1">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center lg:justify-start items-center lg:items-start">
        <div className="basis-full">
          <ImageGallery imagen_zoom={tela?.imagen_zoom} images={tela?.imagenes} isEco={tela?.base_ecologica || 'No'} isEstampar={tela?.rotacion || 'No'} />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col items-start justify-start basis-full">
          <div className="flex flex-col gap-2 basis-full">
            <h1 className="text-2xl font-semibold mb-2 text-[#363636] tracking-wide">{tela?.nombre}</h1>
            <p className="text-zinc-600"> Precio por unidad:</p>
            <p className="text-2xl font-semibold mb-2 text-[#363636] tracking-wide">€{tela?.precio}<span className="text-sm font-normal text-zinc-500">/metro</span></p>
            <a
              href={`https://wa.me/584244067274?text=${encodeURIComponent(`Hola Sublink! Me interesa la tela ${tela?.nombre} (€${tela?.precio}/m). ¿Tienen disponibilidad? 👋`)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1ebe5a] text-white font-bold py-3 px-6 rounded-xl w-full transition-colors mb-3"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 shrink-0">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Cotizar por WhatsApp
            </a>
            <p className="text-zinc-600 mb-3">Color</p>
            <div className="flex flex-row gap-2">
              {
                tela?.colors.map((color, index) => (
                  <div key={index} className={`w-12 h-12 border-[1px] border-zinc-900`} style={{ backgroundColor: color }}></div>
                ))
              }
            </div>
          </div>
          <Calculadora precio={tela?.precio || 0} nombreTela={tela?.nombre || ""} />
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center items-start mt-10">
        <div className="border-4 border-[#0082c9] rounded-xl px-6 py-14 w-full mx-auto max-w-2xl lg:max-w-lg basis-full self-stretch">
          <table className="table-auto w-full" >
            <tbody>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3" style={{ width: '30%' }}>Composición</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.composition}</td>
              </tr>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3">Usos</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.usos}</td>
              </tr>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3">Peso(gr)/m2</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.peso}</td>
              </tr>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3">Ancho (cm)</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.ancho}</td>
              </tr>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3">Características</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.caracteristicas}</td>
              </tr>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3">Tipo de tejido</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.tejido}</td>
              </tr>
              <tr className="border-b-[1px] border-zinc-400">
                <td className="text-left sm:text-center font-semibold text-sm py-3">Base ecologica</td>
                <td className="text-right py-1 text-zinc-700 font-regular text-sm">{tela?.base_ecologica}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="flex flex-col items-center lg:items-start lg:justify-start border-t-2 border-[#0082c9] basis-full">
          <h2 className="text-2xl font-semibold my-3 text-[#363636] tracking-wide">Descripción de la tela</h2>
          <p className="text-zinc-600 text-sm text-center lg:text-left mb-5">{tela?.descripcion}</p>
          <div className="flex flex-row border-t-2 border-b-2 border-[#0082c9] pt-7 pb-6 w-full items-center lg:items-start justify-center lg:justify-start gap-3">
            {
              tela?.iconos?.map((icono, index) => (
                <Image key={index + icono} src={icono} width={150} height={150} alt={IconosAlt[icono] ?? "Icono de característica de tela"} className="w-12 sm:w-20 aspect-square" />
              ))
            }
          </div>
        </div>
      </div>
      {
        recomendaciones?.length > 0 && (<Carousel recomendaciones={recomendaciones} />)
      }
    </main>
  );
}