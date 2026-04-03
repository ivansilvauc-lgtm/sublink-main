"use client"
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
const slides = Array.from({ length: 25 }, (_, i) => [2 * i + 1, 2 * i + 2]).slice(0, -1).concat([[49,50]]);

export const LogoCarousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
        AutoScroll({ playOnInit: true, speed: 1 })
    ])

    useEffect(() => {
        toggleAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const toggleAutoplay = useCallback(() => {
        const autoScroll = emblaApi?.plugins()?.autoScroll
        if (!autoScroll) return

        const playOrStop = autoScroll.isPlaying()
            ? autoScroll.stop
            : autoScroll.play
        playOrStop()
    }, [emblaApi])


    return (
        <section className="my-40 pointer-events-none">
            <h2 className="text-primary text-5xl font-bold text-center tracking-tighter px-4 mb-20">
                Clientes que han confiado en nosotros
            </h2>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((slide, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="flex flex-col items-center justify-center gap-y-6 p-2">
                                    <div className="w-36 h-36 shadow-md bg-zinc-50 flex items-center justify-center p-2">
                                        <Image src={`/assets/logos-clientes/${slide[0]}.svg`} alt="Logo" width={80} height={80} className="w-full aspect-[1/1] h-auto p-7" />
                                    </div>
                                    <div className="w-36 h-36 shadow-md bg-zinc-50 flex items-center justify-center">
                                        <Image src={`/assets/logos-clientes/${slide[1]}.svg`} alt="Logo" width={80} height={80} className="w-full aspect-[1/1] h-auto p-7" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}



