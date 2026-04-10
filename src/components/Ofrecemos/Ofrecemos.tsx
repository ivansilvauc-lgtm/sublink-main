"use client"
import Image from 'next/image';
import { telas } from '@/lib/telas';
import { servicios } from '@/lib/servicios';
import { ModalComponent } from '../UI/Modal';

export const Ofrecemos = () => {

    return (
        <section className="w-full">
            <div className="px-6">
                <h2 className="text-primary text-3xl sm:text-5xl lg:text-7xl font-bold text-center mt-6 tracking-tighter">
                    ¿Qué ofrecemos?
                </h2>
                <p className="text-center text-zinc-900 text-sm sm:text-lg mt-4 font-bold uppercase">Servicio de sublimación textil a gran formato.</p>
                <p className="text-center text-zinc-900 text-sm sm:text-lg mt-1 font-bold uppercase">Convertimos telas blancas en telas exclusivas con el print de tu preferencia.</p>
                <p className="text-center text-zinc-500 text-xs sm:text-sm mt-2 mb-6 md:mb-0">Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología EPSON.</p>
            </div>
            {/* Cards — horizontal row on all screens */}
            <div className="flex flex-row justify-center items-end px-2 gap-2 sm:gap-4 md:gap-4 lg:gap-10 mt-4 md:mt-0">

                {/* Card 1: Telas */}
                <div className="relative my-2 md:my-20">
                    <div className="relative w-[29vw] sm:w-60 md:w-60 lg:w-72 xl:w-96 aspect-[40/50] rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image src="/img/ofrecemos/sublimacion-textil.webp" width={600} height={799}
                            alt="Sublimación textil telas"
                            className="absolute w-full h-auto object-cover -z-10"
                        />
                        <div className="flex mt-3 ml-2 sm:mt-8 sm:ml-6 md:ml-4 xl:ml-10 space-x-1.5 sm:space-x-3">
                            <div className="w-[2px] h-auto bg-primary mt-1 sm:mt-2" />
                            <div>
                                <h2 className="font-semibold text-zinc-50 text-sm sm:text-2xl md:text-3xl xl:text-4xl tracking-tighter leading-tight">TELAS</h2>
                            </div>
                        </div>
                        <ModalComponent list={telas.filter((tela) => tela.categoria_slug !== "telas-ecologicas")} label={"Telas"} />
                    </div>
                </div>

                {/* Card 2: Servicios */}
                <div className="relative my-2 md:my-20">
                    <div className="relative w-[29vw] sm:w-60 md:w-60 lg:w-72 xl:w-96 aspect-[40/50] rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image src="/img/ofrecemos/servicios-textiles.webp" width={600} height={799}
                            alt="Servicios textiles"
                            className="absolute w-full h-auto object-cover -z-10"
                        />
                        <div className="flex mt-3 ml-2 sm:mt-8 sm:ml-6 md:ml-4 xl:ml-10 space-x-1.5 sm:space-x-3">
                            <div className="w-[2px] h-auto bg-primary mt-1 sm:mt-2" />
                            <div>
                                <h2 className="font-semibold text-zinc-50 text-sm sm:text-2xl md:text-3xl xl:text-4xl tracking-tighter leading-tight">SERV.</h2>
                                <h3 className="font-light text-zinc-50 text-xs sm:text-xl md:text-2xl xl:text-4xl tracking-tighter leading-tight">TEXTIL</h3>
                            </div>
                        </div>
                    </div>
                    <ModalComponent list={servicios} label={"servicios"} />
                </div>

                {/* Card 3: Telas Eco */}
                <div className="relative my-2 md:my-20">
                    <div className="relative w-[29vw] sm:w-60 md:w-60 lg:w-72 xl:w-96 aspect-[40/50] rounded-2xl md:rounded-3xl overflow-hidden">
                        <Image src="/img/ofrecemos/productos-complementarios.webp" width={600} height={799}
                            alt="Telas ecológicas"
                            className="absolute w-full h-auto object-cover -z-10"
                        />
                        <div className="flex mt-3 ml-2 sm:mt-8 sm:ml-6 md:ml-4 xl:ml-10 space-x-1.5 sm:space-x-3">
                            <div className="w-[2px] h-auto bg-primary mt-1 sm:mt-2" />
                            <div>
                                <h2 className="font-semibold text-zinc-50 text-sm sm:text-2xl md:text-3xl xl:text-4xl tracking-tighter leading-tight">TELAS</h2>
                                <h3 className="font-light text-zinc-50 text-xs sm:text-xl md:text-2xl xl:text-4xl tracking-tighter leading-tight">ECO</h3>
                            </div>
                        </div>
                    </div>
                    <ModalComponent list={telas.filter((tela) => tela.categoria_slug === "telas-ecologicas")} label={"Telas Eco"} />
                </div>

            </div>
        </section>
    )
}

