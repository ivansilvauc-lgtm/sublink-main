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
}

export default function SostenibilidadPage() {
    return (
        <main className="sostenibilidad-bg pt-20 overflow-x-hidden">
            <section className="relative h-[590px] sm:h-[1000px]">
                <div className="absolute w-full sm:w-[45%] opacity-80 h-auto -top-6 left-0">
                    <Image src="/img/sostenibilidad/vector-hojas.webp" alt="Sostenibilidad" width={1618} height={1343} className="object-cover" />
                </div>
                <div className="relative top-4 sm:top-32">
                    <TextReveal />
                    <TreeReveal />
                </div>
            </section>
            <section className="py-8 sm:py-20 px-4 sm:px-20">
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
                <div className="max-w-[75%] mx-auto mt-10">
                    <Image src="/img/sostenibilidad/botellas-conteo.webp" alt="Telas ecológicas" width={2058} height={2235} className="object-cover" />
                </div>
            </section>
            <section className="py-16 sm:py-20 px-4 sm:px-20">
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
            <section className="h-96 sm:h-[450px] bg-[#a2c0c2] w-full">
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
            <section className="py-16 sm:py-20 px-4 sm:px-20">
                <h2 className="text-[#619b55] text-3xl font-black">SOSTENIBILIDAD</h2>
                <div className="mt-6 max-w-4xl mx-auto bg-white border border-[#c5ddb8] rounded-2xl px-6 py-6 shadow-sm text-base sm:text-xl text-[#535353] [&>p]:mb-4">
                    <p>Sublink es la primera y única empresa en Venezuela que incluye en su portafolio telas hechas a partir de botellas PET recicladas. El poliéster reciclado da una segunda vida a un material que no es biodegradable y que, de lo contrario, iría al vertedero o al océano.</p>
                    <p>Gracias a este innovador proceso de reciclaje, contribuimos a la construcción de un futuro sostenible a largo plazo al tiempo que apoyamos el reciclaje con una economía circular.</p>
                    <p>También adoptamos políticas de cero residuos y practicamos la sostenibilidad en diferentes etapas de nuestra producción, esforzándonos por minimizar nuestro impacto ambiental y promover un futuro más verde para la industria textil.</p>
                    <p className="text-center mt-6 text-zinc-900 font-semibold !mb-0">Descubre cómo podemos ayudarte a transformar tu producción con precisión y eficiencia incomparables.</p>
                </div>
            </section>
            <section className="py-4 sm:py-20 px-4 sm:px-20">
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
            <section className="py-20 px-20">
                <div className="flex flex-row items-center justify-center max-w-2xl mx-auto gap-12 flex-wrap">
                    <div className="w-52 h-auto">
                        <Image src="/img/sostenibilidad/logo-lafayette.png" alt="Logo Lafayette - proveedor de materiales textiles" width={640} height={240} className="object-contain" />
                    </div>
                    <div className="w-44 h-auto flex items-center justify-center">
                        <Image src="/img/sostenibilidad/logo-textilia.png" alt="Logo Textilia - proveedor de materiales textiles" width={400} height={200} className="object-contain" />
                    </div>
                    <div className="w-52 h-auto">
                        <Image src="/img/sostenibilidad/logo-protela.png" alt="Logo Protela - proveedor de materiales textiles" width={490} height={143} className="object-contain" />
                    </div>
                </div>
            </section>
            <section className="h-[450px] relative">
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

