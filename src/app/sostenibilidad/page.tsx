import { SublinkLogo } from '@/components/Sostenibilidad/SublinkLogo';
import { TextReveal } from '@/components/Sostenibilidad/TextReveal';
import { TreeReveal } from '@/components/Sostenibilidad/TreeReveal';
import { SUBLINK_URL } from '@/lib/constant';
import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {

    title: "Telas Ecológicas y Sostenibilidad Textil | Sublink Company",
    description: 'Un tejido sostenible es aquel que se preocupa por minimizar las emisiones y generar el mínimo impacto posible en el medio ambiente a la hora de ser fabricado. En la lista de tejidos sostenibles podríamos incluir algunos tejidos reciclados, orgánicos, ecológicos, veganos, o incluso biodegradables.',
    keywords: ['sostenibilidad', 'telas ecológicas', 'telas recicladas', 'telas pet', 'telas sostenibles', 'telas ecológicas venezuela'],
    category: 'Ecología',
    alternates: {
        canonical: SUBLINK_URL + "/sostenibilidad",
    },
    openGraph: {
        title: "Telas Ecológicas y Sostenibilidad Textil | Sublink Company",
        description: "Sublink es la primera empresa en Venezuela con telas hechas de botellas PET recicladas. Conoce nuestras políticas de cero desperdicio y producción sostenible.",
        url: `${SUBLINK_URL}/sostenibilidad`,
        siteName: "Sublink Company",
        images: [{ url: `${SUBLINK_URL}/opengraph-image.jpg`, width: 1200, height: 630 }],
        locale: "es_VE",
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "Telas Ecológicas y Sostenibilidad Textil | Sublink Company",
        description: "Sublink es la primera empresa en Venezuela con telas hechas de botellas PET recicladas. Cero desperdicio, Print On Demand.",
        images: [`${SUBLINK_URL}/opengraph-image.jpg`],
    },
}

export default function SostenibilidadPage() {
    return (
        <main className="sostenibilidad-bg pt-20 overflow-x-hidden">
            <h1 className="sr-only">Telas Ecológicas y Sostenibilidad Textil — Sublink Company, Valencia Venezuela</h1>
            <section className="relative h-[480px] sm:h-[700px]">
                <div className="absolute w-full sm:w-[45%] opacity-80 h-auto -top-6 left-0">
                    <Image src="/img/sostenibilidad/vector-hojas.webp" alt="Sostenibilidad" width={1618} height={1343} className="object-cover" />
                </div>
                <div className="relative top-4 sm:top-32">
                    <TextReveal />
                    <TreeReveal />
                </div>
            </section>
            <section className="py-6 sm:py-10 px-4 sm:px-20">
                <div className="text-[#619b55] font-bold text-[45px] sm:text-[110px] leading-none tracking-tight w-full text-left">
                    <span>¿QUÉ SON</span>
                    <h2>LAS TELAS ECOLÓGICAS?</h2>
                </div>
                <div className="mt-6 max-w-4xl mx-auto">
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-6 py-6 shadow-sm text-base sm:text-xl [&>p]:mb-4 text-[#535353]">
                        <p>Un tejido sostenible es aquel que se preocupa por minimizar las emisiones y generar el mínimo impacto posible en el medio ambiente a la hora de ser fabricado. En la lista de tejidos sostenibles podríamos incluir algunos tejidos reciclados, orgánicos, ecológicos, veganos, o incluso biodegradables.</p>
                        <p>Las telas elaboradas con botellas PET recicladas, son una opción más sostenible para los consumidores preocupados por el medio ambiente, ya que contribuyen a la reducción de residuos y plásticos en el planeta.</p>
                        <p className="mb-0">La tela producida a partir de botellas PET recicladas se utiliza en una variedad de productos, como ropa, bolsas, mochilas, y otros productos textiles.</p>
                    </div>
                </div>
                <div className="max-w-[75%] mx-auto mt-4">
                    <Image src="/img/sostenibilidad/botellas-conteo.webp" alt="Telas ecológicas" width={2058} height={2235} className="object-cover" />
                </div>
            </section>
            <section className="py-6 sm:py-10 px-4 sm:px-20">
                <div className="text-[#619b55] font-bold text-[45px] sm:text-[110px] leading-none tracking-tight w-full text-left">
                    <span>PORQUE USAR</span>
                    <h2>TELAS RECICLADAS</h2>
                    <h2>PET</h2>
                </div>
                <div className="mt-6 max-w-4xl mx-auto grid sm:grid-cols-2 gap-4 text-base sm:text-xl text-[#535353]">
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-5 py-5 shadow-sm">
                        <h2 className="text-[#619b55] font-semibold mb-2">RECICLAJE</h2>
                        <p>Un tejido sostenible es aquel que se preocupa por minimizar las emisiones y generar el mínimo impacto posible en el medio ambiente a la hora de ser fabricado. En la lista de tejidos sostenibles podríamos incluir algunos tejidos reciclados, orgánicos, ecológicos, veganos, o incluso biodegradables.</p>
                    </div>
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-5 py-5 shadow-sm">
                        <h2 className="text-[#619b55] font-semibold mb-2">CALIDAD</h2>
                        <p>Además de su impacto positivo en el medio ambiente, también son de alta calidad. Son telas ligeras, resistentes y duraderas, por lo que son una buena opción para ropa deportiva, moda, bolsas, entre otros. También son fáciles de mantener y lavar, y no requieren cuidados especiales.</p>
                    </div>
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-5 py-5 shadow-sm">
                        <h2 className="text-[#619b55] font-semibold mb-2">IMPACTO SOCIAL</h2>
                        <p>La producción de telas recicladas también tiene un impacto social positivo, ya que genera empleos y oportunidades económicas en las comunidades locales donde se lleva a cabo el proceso de producción.</p>
                    </div>
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-5 py-5 shadow-sm">
                        <h2 className="text-[#619b55] font-semibold mb-2">DIFERENCIACIÓN EN EL MERCADO</h2>
                        <p>Confeccionar con telas ecológicas puede diferenciar a una marca en el mercado, además de mejorar la percepción, imagen y valor de la marca, y esto puede ayudar a atraer a consumidores que buscan productos más sostenibles y responsables.</p>
                    </div>
                </div>
            </section>
            <section className="h-72 sm:h-[380px] bg-[#a2c0c2] w-full">
                <div className="w-full sm:w-[50%] relative h-full mx-auto" >
                    <iframe
                        className="absolute top-0 left-0 w-full h-full"
                        src="https://www.youtube.com/embed/0lTb4e28IMU"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        title="Proceso de fabricación de telas ecológicas recicladas - Sublink"
                    ></iframe>
                </div>
            </section>
            <section className="py-6 sm:py-10 px-4 sm:px-20">
                <h2 className="text-[#619b55] text-3xl font-black">SOSTENIBILIDAD</h2>
                <div className="mt-6 max-w-4xl mx-auto bg-white border border-[#c5ddb8] rounded-2xl px-6 py-6 shadow-sm text-base sm:text-xl text-[#535353] [&>p]:mb-4">
                    <p>Sublink es la primera y única empresa en Venezuela que incluye en su portafolio telas hechas a partir de botellas PET recicladas. El poliéster reciclado da una segunda vida a un material que no es biodegradable y que, de lo contrario, iría al vertedero o al océano.</p>
                    <p>Gracias a este innovador proceso de reciclaje, contribuimos a la construcción de un futuro sostenible a largo plazo al tiempo que apoyamos el reciclaje con una economía circular.</p>
                    <p>También adoptamos políticas de cero residuos y practicamos la sostenibilidad en diferentes etapas de nuestra producción, esforzándonos por minimizar nuestro impacto ambiental y promover un futuro más verde para la industria textil.</p>
                    <p className="text-center mt-6 text-zinc-900 font-semibold !mb-0">Descubre cómo podemos ayudarte a transformar tu producción con precisión y eficiencia incomparables.</p>
                </div>
            </section>
            <section className="py-6 sm:py-10 px-4 sm:px-20">
                <h2 className="text-[#619b55] text-3xl font-black">NUESTRAS POLÍTICAS</h2>
                <div className="mt-6 max-w-4xl mx-auto flex flex-col gap-4 text-base sm:text-xl text-[#535353]">
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-6 py-5 shadow-sm">
                        <h3 className="text-lg sm:text-2xl font-bold text-[#619b55] mb-2">Comprometidos con nuestro entorno y nuestros clientes</h3>
                        <p>Sublink es la primera y única empresa en Venezuela que incluye en su portafolio telas hechas a partir de botellas PET recicladas. El poliéster reciclado da una segunda vida a un material que no es biodegradable y que, de lo contrario, iría al vertedero o al océano.</p>
                    </div>
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-6 py-5 shadow-sm">
                        <h3 className="text-lg sm:text-2xl font-bold text-[#619b55] mb-2">Fábrica por encargo (Print On Demand)</h3>
                        <p className="mb-3">Nuestro objetivo es minimizar los residuos de tela imprimiendo sólo lo necesario. No mantenemos telas estampadas en existencia. Cuando nos realizas un pedido, fabricamos y enviamos tu tela al instante, reduciendo el consumo energético.</p>
                        <p>Además, mantenemos nuestra huella de carbono al mínimo, ya que fabricamos todo en una sola instalación. Tus telas se elaboran bajo un solo techo y se envían directamente a ti.</p>
                    </div>
                    <div className="bg-white border border-[#c5ddb8] rounded-2xl px-6 py-5 shadow-sm">
                        <h3 className="text-lg sm:text-2xl font-bold text-[#619b55] mb-2">Cero Desperdicio (Zero Waist Policy)</h3>
                        <p className="mb-3">Minimizamos nuestro impacto ambiental mediante la reducción, reutilización y reciclaje de materiales en cada proceso, comprometiéndonos con un futuro más sostenible.</p>
                        <p>Hemos reducido nuestros residuos textiles al ofrecer los retazos de las telas de manera gratuita a artesanos, artistas o cualquiera que quiera un reto creativo. Incluso reutilizamos la tela sobrante para otros productos y proyectos.</p>
                    </div>
                </div>
            </section>
            <section className="py-10 px-6 sm:px-20">
                <div className="flex flex-row items-center justify-center mx-auto gap-8 sm:gap-12">
                    <div className="w-36 sm:w-44 h-16 sm:h-20 flex items-center justify-center">
                        <Image src="/img/sostenibilidad/logo-lafayette.png" alt="Logo Lafayette - proveedor de materiales textiles" width={640} height={240} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-36 sm:w-44 h-16 sm:h-20 flex items-center justify-center">
                        <Image src="/img/sostenibilidad/logo-textilia-clean.png" alt="Logo Textilia - proveedor de materiales textiles" width={224} height={224} className="w-full h-full object-contain" />
                    </div>
                    <div className="w-36 sm:w-44 h-16 sm:h-20 flex items-center justify-center">
                        <Image src="/img/sostenibilidad/logo-protela.png" alt="Logo Protela - proveedor de materiales textiles" width={490} height={143} className="w-full h-full object-contain" />
                    </div>
                </div>
            </section>
            {/* CTA Telas ECO */}
            <section className="py-8 px-6 bg-[#f2f8ee]">
                <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
                    <span className="inline-block bg-[#619b55]/15 text-[#619b55] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full">Telas Ecológicas</span>
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#2d5a1e] leading-tight">
                        ¿Listo para apostar por la moda sostenible?
                    </h2>
                    <p className="text-zinc-600 text-lg max-w-xl">
                        Cotiza tu proyecto con nuestras telas ECO hechas de PET reciclado. Calidad premium, huella mínima.
                    </p>
                    <a
                        href={`https://wa.me/584244067274?text=${encodeURIComponent('Hola Sublink! Me interesa cotizar un proyecto con telas ECO (sostenibles). ¿Pueden ayudarme? 🌱')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-3 bg-[#619b55] hover:bg-[#4d7d42] text-white font-bold py-4 px-10 rounded-2xl transition-colors text-lg shadow-lg shadow-green-900/20"
                    >
                        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 shrink-0">
                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                        </svg>
                        Cotizar tela ECO
                    </a>
                </div>
            </section>

            <section className="h-[280px] sm:h-[380px] relative">
                <div className="absolute w-full sm:w-[45%] opacity-80 h-auto bottom-0 right-0">
                    <Image src="/img/sostenibilidad/vector-hojas-derecho.webp" alt="vector-de-hojas" width={1618} height={1343} className="object-cover" />
                </div>
                <div className="absolute w-[95%] sm:w-[45%] h-auto left-0 bottom-0 ml-0 sm:ml-20">
                    <SublinkLogo />
                    {/* <Image src="/logo-sublink.svg" alt="logo-empresa-sublink" width={1280} height={850} className="object-cover" /> */}
                </div>
            </section>
        </main>
    )
}

