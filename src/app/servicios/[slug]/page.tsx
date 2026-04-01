import { SUBLINK_URL } from "@/lib/constant";
import { type IServicios, servicios } from "@/lib/servicios"
import { Metadata } from "next";
import Image from 'next/image'

export const dynamicParams = true;

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {

  const servicio: IServicios | undefined = servicios.find(serv => serv.slug === params.slug);
  const seoTitle = servicio?.metaTitle ?? servicio?.title ?? '';
  const seoDescription = servicio?.metaDescription ?? servicio?.description ?? '';

  return {
    title: seoTitle,
    description: seoDescription,
    keywords: servicio?.keywords,
    category: "Services",
    alternates: {
      canonical: SUBLINK_URL + "/servicios/" + servicio?.slug,
    },
    openGraph: {
      title: seoTitle,
      description: seoDescription,
      url: SUBLINK_URL + "/servicios/" + servicio?.slug,
      siteName: 'Sublink Company',
      images: [
        {
          url: servicio?.equipment_image ?? '',
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

  return servicios.map((servicio) => ({
    slug: servicio.slug
  }))
}

export default function ServicioPage({ params }: { params: { slug: string } }) {

  const servicio: IServicios | undefined = servicios.find(servicio => servicio.slug === params.slug);

  if (!servicio) {
    return (
      <main className="min-h-screen mt-56 max-w-5xl mx-auto mb-20 px-2 lg:px-0">
        <h1>Not found</h1>
      </main>
    )
  }
  return (
    <main className="min-h-screen mt-40 mx-auto mb-20">
      <div className="flex flex-col lg:flex-row w-full 2xl:max-w-[1920px] mx-auto items-center justify-center px-12 lg:px-24 mb-0 gap-x-4 2xl:gap-x-0">
        <div className="basis-full flex flex-col justify-center items-center lg:items-center text-center lg:text-left">
          <h1 className={`${servicio?.title.length > 16 ? "text-4xl sm:text-6xl lg:text-5xl xl:text-6xl 2xl:text-7xl" : "text-4xl sm:text-6xl lg:text-6xl xl:text-7xl 2xl:text-[84px]"} text-primary font-bold drop-shadow-sm leading-none tracking-tight `}>{servicio.title}</h1>
          <h3 className="text-primary drop-shadow-sm text-xl sm:text-3xl lg:text-2xl xl:text-5xl leading-none tracking-tight self-center lg:self-start">{servicio.subtitle}</h3>
        </div>
        <div className="basis-10/12 flex items-center justify-center p-10">
          <div className={`${servicio?.title.length > 16 ? "w-80 h-80 md:w-[420px] md:h-[420px] 2xl:w-[520px] 2xl:h-[520px]" : "w-80 h-80 md:w-[420px] md:h-[420px] xl:w-[480px] xl:h-[480px] 2xl:w-[580px] 2xl:h-[480px]"} relative`}>
            <Image src={servicio.equipment_image} alt={servicio.title} width={800} height={800} className="absolute w-full h-full object-contain" />
          </div>
        </div>
      </div>
      <div className="flex flex-col md:flex-row bg-primary h-[450px] md:h-96 items-center">
        <div className="w-full h-full relative">
          <Image src={servicio.results_image} alt={servicio.results_image_alt || servicio.slug} width={800} height={800} className="absolute w-full h-full object-cover" />
        </div>
        <div className="basis-1/2 md:basis-full p-8 lg:p-16">
          <p className="text-zinc-50 text-justify md:text-xl lg:text-2xl ">{servicio.description}</p>
        </div>
      </div>
      <div className="2xl:max-w-7xl mx-auto mt-24 mb-48 px-2 md:px-8 2xl:px-0">
        <div className="mb-12 flex flex-col gap-y-6">
          {
            servicio.details.map((detail, index) => (<p key={`${"detail-" + index}`} className="text-zinc-600 text-xl font-semibold text-justify">{detail}</p>))
          }
        </div>
        <h2 className="text-zinc-600 text-xl font-semibold my-8 text-center sm:text-left">Ventajas del Servicio</h2>
        <ul className="list-disc marker:text-zinc-600 pl-3">
          {
            servicio.advantages.map((advantage, index) => (
              <li key={`${"advantages-" + index}`}>
                <p className="text-zinc-600 text-lg">{advantage}</p>
              </li>
            ))
          }
        </ul>
        <div className="my-12 flex flex-col gap-y-6">
          {
            servicio.sublink.map((item, index) => (<p key={`${"sublink-" + index}`} className="text-primary text-xl font-semibold text-justify">{item}</p>))
          }
        </div>
        <p className="text-zinc-800 text-xl font-bold text-center">{servicio.doit}</p>
      </div>
    </main>
  )
}