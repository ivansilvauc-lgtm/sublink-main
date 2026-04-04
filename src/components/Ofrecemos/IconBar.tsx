"use client"
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';

const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.6 } },
};

export const IconBar = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <section className="w-full mb-16">
            <motion.div
                ref={ref}
                variants={containerVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className="flex flex-row items-baseline justify-evenly mt-16 space-x-2">
                <div>
                    <Image src="/assets/metro.webp" width={120} height={120} alt="Desde 1 metro" className="w-16 md:w-24 m-auto" />
                    <p className="text-xs sm:text-sm md:text-lg text-zinc-800 mt-1 text-center">Desde 1 metro</p>
                </div>
                <div>
                    <Image src="/assets/rapidez.webp" width={120} height={120} alt="Producción rápida" className="w-16 md:w-24 m-auto" />
                    <p className="text-xs sm:text-sm md:text-lg text-zinc-800 mt-1 text-center">Producción rápida</p>
                </div>
                <div>
                    <Image src="/assets/telas.webp" width={120} height={120} alt="Diferentes telas" className="w-16 md:w-24 m-auto" />
                    <p className="text-xs sm:text-sm md:text-lg text-zinc-800 mt-1 text-center">Diferentes telas</p>
                </div>
                <div>
                    <Image src="/assets/ecologica.webp" width={120} height={120} alt="Tela ecológica" className="w-16 md:w-24 m-auto" />
                    <p className="text-xs sm:text-sm md:text-lg text-zinc-800 mt-1 text-center">Tela ecológica</p>
                </div>
            </motion.div>
        </section>
    );
};
