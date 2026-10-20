"use client"
import { useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { WhatsAppLink } from '@/components/UI/WhatsAppLink';

export const Estampacion = () => {

    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    const handleMove = (event: React.MouseEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        
        const { clientX } = event;
        const { left, right } = event.currentTarget.getBoundingClientRect();
        const position = (clientX - left) / (right - left) * 100;
        setSliderPosition(position);
    }

    const handleTouch = (event: React.TouchEvent<HTMLDivElement>) => {
        if (!isDragging) return;
        
        const { clientX } = event.touches[0];
        const { left, right } = event.currentTarget.getBoundingClientRect();
        const position = (clientX - left) / (right - left) * 100;
        setSliderPosition(position);
    }

    const handleMouseDown = () => {
        setIsDragging(true);
    }
    const handleMouseUp = () => {
        setIsDragging(false);
    }
    return (
        <div className="overflow-hidden py-4">
            <h2 className="text-primary text-xl sm:text-3xl font-semibold text-center tracking-tighter px-4">
                Las mejores soluciones de estampación
            </h2>
            <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 20, rotateZ: 10 }}
            animate={isInView ? { opacity: 1, y: 0, rotateZ:0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full relative my-14 px-3" onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
                <div className="relative w-full max-w-[450px] aspect-[40/50] m-auto overflow-hidden rounded-[34px] select-none"
                    onMouseMove={handleMove}
                    onTouchMove={handleTouch}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}

                >
                    <Image src="/img/estampacion/before-sublink.webp" width={800} height={910}
                        alt="Mujer de espalda sosteniendo tela estampada descolorida"
                        className="absolute h-full"
                    />
                    <div className="absolute top-0 left-0 right-0 w-full max-w-[450px] aspect-[40/50] m-auto overflow-hidden select-none"
                        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
                    >
                        <Image src="/img/estampacion/after-sublink.webp" width={800} height={910}
                            alt="Mujer de espalpa sosteniendo tela estampada colorida"
                            className="absolute h-full"
                        />
                    </div>
                    <div className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize" style={{ left: `calc(${sliderPosition}% - 1px)` }}>
                        <div className="bg-white absolute rounded-full h-12 w-12 -left-[21px] top-[calc(50%-5px)] -translate-y-1/2">
                            <div className="flex items-center justify-center h-full w-full space-x-1">
                                <Image src="/assets/left-arrow.svg" width={15} height={15} alt="Icono de flecha" />
                                <Image src="/assets/right-arrow.svg" width={15} height={15} alt="Icono de flecha" />
                            </div>
                        </div>
                    </div>
                    <div className="absolute top-0 left-0 bg-primary pl-5 pr-4 rounded-br-lg">
                        <p className="text-zinc-50 text-center">SUBLINK</p>
                        </div>
                        <div className="absolute top-0 right-0 bg-primary pl-4 pr-5 rounded-bl-lg">
                        <p className="text-zinc-50 text-center">OTROS</p>
                        </div>
                </div>
            </motion.div>

            {/* CTA post-slider */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-2 mb-6 px-4">
                <Link
                    href="https://www.sublink.company/servicios"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                    Ver todos nuestros servicios →
                </Link>
                <WhatsAppLink
                    message="Hola Sublink, quiero cotizar un proyecto 👋"
                    source="estampacion"
                    className="inline-flex items-center gap-2 border-2 border-primary text-primary hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-full transition-all duration-200 text-sm"
                >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Cotizar por WhatsApp
                </WhatsAppLink>
            </div>
        </div>
    )
}