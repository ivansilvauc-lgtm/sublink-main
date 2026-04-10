"use client"
import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion, useInView } from 'framer-motion';

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
            className="w-full relative my-16 px-3" onMouseUp={handleMouseUp} onTouchEnd={handleMouseUp}>
                <div className="relative w-full max-w-[450px] aspect-[40/50] m-auto overflow-hidden rounded-[34px] select-none"
                    onMouseMove={handleMove}
                    onTouchMove={handleTouch}
                    onMouseDown={handleMouseDown}
                    onTouchStart={handleMouseDown}

                >
                    <Image src="/img/estampacion/before-sublink.webp" width={800} height={910}
                        alt="Mujer de espalpa sosteniendo tela estampada descolorida"
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
        </div>
    )
}