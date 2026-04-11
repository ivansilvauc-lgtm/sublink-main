"use client"
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

export const VideoReciclar = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <motion.section
            ref={ref}
            id="reciclar"
            className="relative w-full aspect-[1/1] lg:aspect-[4/1] mb-20 overflow-hidden h-auto"
        >

            <motion.div
                    className="absolute w-full h-full overflow-hidden"
                    initial={{ y: 0, x:0, scale: 1.1 }}
                    animate={{ y: -10, x: -10,scale: 1.2 }}
                    transition={{ duration: 16, repeat: Infinity, repeatType:"reverse" ,ease: "easeInOut"}}
            >
                <Image src="/img/reciclaje/fondo-cielo.webp" alt="Fondo de cielo azul con nubes blancas" fill className="absolute hidden lg:block w-full object-cover" />
                <Image src="/img/reciclaje/cielo-sublink-square.webp" alt="Fondo de cielo azul con nubes blancas"  fill  className="absolute block lg:hidden w-full object-cover" />
            </motion.div>
            <motion.div
                initial={{ scale: 0.8, opacity: 0, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex flex-col-reverse lg:flex-row items-center justify-center relative w-full px-10 lg:space-x-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <motion.div
                    initial={{ y: 0 }}
                    animate={{ y: -5}}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType:"reverse" ,ease: "easeInOut"}}
                    className="w-full p-6 basis-1/2"
                    >
                        
                    <Image src="/img/reciclaje/botella.webp" alt="Botellas PET recicladas para fabricación de telas de poliéster ecológicas" width={800} height={428} className="w-full" />
                </motion.div>

                <div className="flex flex-col items-start justify-center pt-10 lg:pt-0">
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.9 }}
                        className="text-zinc-50 text-2xl drop-shadow-[0_15px_15px_rgba(0,0,0,0.6)] font-semibold">Descubre cómo se elaboran las telas de poliéster reciclado</motion.p>
                    <Link href={{
                        pathname: '/',
                        query: { video: 'descubre-como-se-elaboran-nuestras-telas' },
                    }} scroll={false} className="mt-2 bg-zinc-100 px-5 py-2 rounded-full">
                        <div className="flex items-center justify-center">
                            <p className="text-sm mr-2">Ver video</p>
                            <Image src="/assets/right-arrow.svg" width={10} height={10} alt="Icono de flecha" />
                        </div>
                    </Link>
                </div>
                <motion.div
                    initial={{ x: 0 }}
                    animate={{ x: "100%"}}
                    transition={{ duration: 100, repeat: Infinity, repeatType:"reverse" ,ease: "linear"}}
                    className="w-full p-6 absolute -left-1/2 -bottom-[580px] pointer-events-none hidden xl:block"
                    >
                        
                    <Image src="/img/reciclaje/cloud-a.png" alt="Nube decorativa" width={400} height={200} className="w-full" />
                </motion.div>
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0}}
                    transition={{ duration: 100, repeat: Infinity, repeatType:"reverse" ,ease: "linear"}}
                    className="w-full p-6 absolute -left-1/2 -bottom-32 sm:-bottom-96 lg:-bottom-32 xl:-bottom-20 2xl:-bottom-10 pointer-events-none opacity-80"
                    >
                        
                    <Image src="/img/reciclaje/cloud-a.png" alt="Nube decorativa" width={400} height={200} className="w-full" />
                </motion.div>
            </motion.div>
        </motion.section>
    )
}



