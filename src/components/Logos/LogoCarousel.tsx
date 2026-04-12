"use client"
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';

// ── Logo list ─────────────────────────────────────────────────────────────────
// Numbered logos: /assets/logos-clientes/[n].svg
// Named logos: /assets/logos-clientes/[name].svg
// To remove SUTEX and greentex: delete their numbers from the numbered list below
// (Ivan: open the folder logos-clientes, check which .svg files match those logos)
const NUMBERED_LOGOS = [1,2,3,4,5,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,49,50];
const NAMED_LOGOS = ["ARENA CRISTAL"]; // named PNGs/SVGs added to logos-clientes folder

type LogoEntry = { type: "numbered"; n: number } | { type: "named"; name: string };

const allLogos: LogoEntry[] = [
  ...NUMBERED_LOGOS.map(n => ({ type: "numbered" as const, n })),
  ...NAMED_LOGOS.map(name => ({ type: "named" as const, name })),
];

const slides = allLogos.reduce<LogoEntry[][]>((acc, logo, i) => {
  if (i % 2 === 0) acc.push([logo, allLogos[i + 1]].filter(Boolean));
  return acc;
}, []);

// Map named logos to their actual file extension
const NAMED_LOGO_EXT: Record<string, string> = {
  "ARENA CRISTAL": "png",
};

function logoSrc(entry: LogoEntry): string {
  if (entry.type === "numbered") return `/assets/logos-clientes/${entry.n}.svg`;
  const ext = NAMED_LOGO_EXT[entry.name] ?? "svg";
  return `/assets/logos-clientes/${entry.name}.${ext}`;
}

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
        <section className="mt-20 mb-0 pointer-events-none">
            <h2 className="text-primary text-5xl font-bold text-center tracking-tighter px-4 mb-10">
                Clientes que han confiado en nosotros
            </h2>
            <div className="embla">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container">
                        {slides.map((slide, index) => (
                            <div className="embla__slide" key={index}>
                                <div className="flex flex-col items-center justify-center gap-y-6 p-2">
                                    <div className="w-36 h-36 shadow-md bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-4">
                                        <Image src={logoSrc(slide[0])} alt="Logo cliente" width={100} height={100} className="w-full h-full object-contain p-3" />
                                    </div>
                                    {slide[1] && (
                                        <div className="w-36 h-36 shadow-md bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-4">
                                            <Image src={logoSrc(slide[1])} alt="Logo cliente" width={100} height={100} className="w-full h-full object-contain p-3" />
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}



