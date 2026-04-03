"use client"
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';
const LOGOS = [1,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,48,49,50];
const slides = LOGOS.reduce<number[][]>((acc, logo, i) => {
  if (i % 2 === 0) acc.push([logo, LOGOS[i + 1]].filter(Boolean) as number[]);
  return acc;
}, []);

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



