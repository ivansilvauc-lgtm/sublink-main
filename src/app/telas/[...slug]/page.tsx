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
  
  return {
    title: tela?.nombre ?? '',
    description: tela?.descripcion ?? '',
    category: "Tela",
    alternates: {
      canonical: SUBLINK_URL + "/telas/" + tela?.categoria_slug + "/" + tela?.slug,
    },
    openGraph: {
      title: tela?.nombre ?? '',
      description: tela?.descripcion ?? '',
      url: SUBLINK_URL + "/telas/" + tela?.categoria_slug + "/" + tela?.slug,
      siteName: 'Sublink Company',
      images: [
        {
          url: tela?.imagen_zoom ?? '',
          width: 1200,
          height: 630,
        },
      ],
      locale: 'es_ES',
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
  return (
    <main className="h-full mt-32 sm:mt-44 max-w-6xl mx-auto mb-20 px-2 lg:px-1">
      <div className="flex flex-col-reverse lg:flex-row gap-8 justify-center lg:justify-start items-center lg:items-start">
        <div className="basis-full">
          <ImageGallery imagen_zoom={tela?.imagen_zoom} images={tela?.imagenes} isEco={tela?.base_ecologica || 'No'} isEstampar={tela?.rotacion || 'No'} />
        </div>
        <div className="flex flex-col sm:flex-row lg:flex-col items-start justify-start basis-full">
          <div className="flex flex-col gap-2 basis-full">
            <h1 className="text-2xl font-semibold mb-2 text-[#363636] tracking-wide">{tela?.nombre}</h1>
            <p className="text-zinc-600"> Precio por unidad:</p>
            <h2 className="text-2xl font-semibold mb-2 text-[#363636] tracking-wide">${tela?.precio}</h2>
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