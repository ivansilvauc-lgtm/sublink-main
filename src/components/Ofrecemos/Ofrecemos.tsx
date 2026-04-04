"use client"
import Image from 'next/image';
import { telas } from '@/lib/telas';
import { servicios } from '@/lib/servicios';
import { ModalComponent } from '../UI/Modal';

export const Ofrecemos = () => {

    return (
        <section className="w-full">
            <div className="px-6">
                <h2 className="text-primary text-5xl sm:text-7xl font-bold text-center mt-12 tracking-tighter">
                    ¿Qué ofrecemos?
                </h2>
                <h1 className="text-center text-zinc-900 text-lg sm:text-xl mt-10 font-bold uppercase">Servicio de sublimación textil a gran formato.</h1>
                <h2 className="text-center text-zinc-900 text-lg sm:text-xl mt-1 font-bold uppercase">Convertimos telas blancas en telas exclusivas con el print de tu preferencia.</h2>
                <p className="text-center text-zinc-500 text-sm sm:text-base mt-3 mb-10 md:mb-0">Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología EPSON.</p>
            </div>
            <div className="flex flex-col md:flex-row justify-center items-center md:space-x-4 lg:space-x-10">
                <div className="flex flex-row justify-center items-center my-4 md:my-20">
                    <div className="relative w-80 md:w-60 lg:w-72 xl:w-96 aspect-[40/50] rounded-3xl overflow-hidden">
                        <Image src="/img/ofrecemos/sublimacion-textil.webp" width={600} height={799}
                            alt="Imagen de sala con objectos flotantes"
                            className="absolute w-full h-auto object-cover -z-10"
                        />
                        <div className="flex mt-8 ml-6 md:ml-4 xl:ml-10 space-x-3">
                            <div className="w-[2px] h-auto bg-primary mt-2" />
                            <div>
                                <h2 className="font-semibold text-zinc-50 text-4xl md:text-3xl xl:text-4xl tracking-tighter">TELAS</h2>
                                {/* <h3 className="font-light text-zinc-50 text-3xl md:text-2xl xl:text-4xl tracking-tighter leading-5">TEXTIL</h3> */}
                            </div>
                        </div>
                        <ModalComponent list={telas.filter((tela) => tela.categoria_slug !== "telas-ecologicas")} label={"Telas"} />
                    </div>
                </div>

                <div className="relative my-4 md:my-20">
                    <div className="relative w-80 md:w-60 lg:w-72 xl:w-96 aspect-[40/50] rounded-3xl overflow-hidden">
                        <Image src="/img/ofrecemos/servicios-textiles.webp" width={600} height={799}
                            alt="Imagen de servicios textiles"
                            className="absolute w-full h-auto object-cover -z-10"
                        />

                        <div className="flex mt-8 ml-6 md:ml-4 xl:ml-10 space-x-3">
                            <div className="w-[2px] h-auto bg-primary mt-2" />
                            <div>
                                <h2 className="font-semibold text-zinc-50 text-4xl md:text-3xl xl:text-4xl tracking-tighter">SERVICIOS</h2>
                                <h3 className="font-light text-zinc-50 text-3xl md:text-2xl xl:text-4xl tracking-tighter leading-5">TEXTILES</h3>
                            </div>
                        </div>

                    </div>
                    <ModalComponent list={servicios} label={"servicios"} />
                </div>

                <div className="relative my-4 md:my-20">
                    <div className="relative w-80 md:w-60 lg:w-72 xl:w-96 aspect-[40/50] rounded-3xl overflow-hidden">
                        <Image src="/img/ofrecemos/productos-complementarios.webp" width={600} height={799}
                            alt="Imagen de sala con objectos flotantes"
                            className="absolute w-full h-auto object-cover -z-10"
                        />

                        <div className="flex mt-8 ml-6 md:ml-4 xl:ml-10 space-x-3">
                            <div className="w-[2px] h-auto bg-primary mt-2" />
                            <div>
                                <h2 className="font-semibold text-zinc-50 text-4xl md:text-3xl xl:text-4xl tracking-tighter">TELAS ECO</h2>
                            </div>
                        </div>
                    </div>
                    <ModalComponent list={telas.filter((tela) => tela.categoria_slug === "telas-ecologicas")} label={"Telas Eco"} />
                </div>
            </div>
        </section>
    )
}

