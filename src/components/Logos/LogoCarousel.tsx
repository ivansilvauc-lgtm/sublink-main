"use client"
import { useCallback, useEffect } from 'react';
import Image from 'next/image';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';

// ── Logo list ─────────────────────────────────────────────────────────────────
// Numbered logos: /assets/logos-clientes/[n].svg (default ext = svg)
// For a different extension, add to NUMBERED_LOGO_EXT below.
// Named logos: /assets/logos-clientes/[name].svg (or override via NAMED_LOGO_FILE)
// To remove a client: delete the number from NUMBERED_LOGOS below.
// 2026-10-20: removed 3 (Locos de Viaje duplicado), added 51 (MARNIE Swimwear, PNG)
const NUMBERED_LOGOS = [1,2,4,5,7,8,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,39,40,41,42,43,45,46,47,49,50,51];
const NAMED_LOGOS = ["ARENA CRISTAL"]; // named PNGs/SVGs added to logos-clientes folder

// Override extension for specific numbered logos (default = svg)
const NUMBERED_LOGO_EXT: Record<number, string> = {
  51: "png", // MARNIE Swimwear
};

// Logos that should render WITHOUT the white box (transparent background, no border)
const NO_BOX_LOGOS = new Set<string>();

type LogoEntry = { type: "numbered"; n: number } | { type: "named"; name: string };

const allLogos: LogoEntry[] = [
  ...NUMBERED_LOGOS.map(n => ({ type: "numbered" as const, n })),
  ...NAMED_LOGOS.map(name => ({ type: "named" as const, name })),
];

const slides = allLogos.reduce<LogoEntry[][]>((acc, logo, i) => {
  if (i % 2 === 0) acc.push([logo, allLogos[i + 1]].filter(Boolean));
  return acc;
}, []);

// Map named logos to their actual filenames (name → full filename with extension)
const NAMED_LOGO_FILE: Record<string, string> = {
  "ARENA CRISTAL": "ARENA CRISTAL.png",
};

function logoSrc(entry: LogoEntry): string {
  if (entry.type === "numbered") {
    const ext = NUMBERED_LOGO_EXT[entry.n] ?? "svg";
    return `/assets/logos-clientes/${entry.n}.${ext}`;
  }
  const file = NAMED_LOGO_FILE[entry.name] ?? `${entry.name}.svg`;
  return `/assets/logos-clientes/${file}`;
}

// Texto alternativo (SEO + accesibilidad) por logo
const LOGO_ALT_NUM: Record<number, string> = {
  1: "Logo de Olga Bolaños",
  2: "Logo de Mako Fishing & Kitesurf",
  4: "Logo de Vanessa Farina",
  5: "Logo de Lanchas Venezuela",
  7: "Logo de Filamento",
  8: "Logo de Lembo Master Fishing",
  10: "Logo de Atelier Tepuy",
  11: "Logo de Saia",
  12: "Logo de Rekyte",
  13: "Logo de Grupo Satélite",
  14: "Logo de Katoah",
  15: "Logo de Mar Azul",
  16: "Logo de Mia Swimwears",
  17: "Logo de Kassia Sea Collection",
  18: "Logo de Katcow Swimwear",
  19: "Logo de Athuah",
  20: "Logo de Makai Clothing & Stuff",
  21: "Logo de Piropo",
  22: "Logo de Fornace",
  23: "Logo de Bajo el Mar",
  24: "Logo de Rabirrubia Swimwear",
  25: "Logo de Sunala Swimwear",
  26: "Logo de Capraia Swimwear",
  27: "Logo de Haawa",
  28: "Logo de H2O",
  29: "Logo de Afrodizia Swimwear",
  30: "Logo de Moana Swimwear",
  31: "Logo de Spranger Swimwear",
  32: "Logo de Henalu",
  33: "Logo de Kukui",
  34: "Logo de Bezo",
  35: "Logo de Mykonos Swimwear",
  36: "Logo de Agua Viva",
  37: "Logo de Playasha",
  39: "Logo de Vibes",
  40: "Logo de Sweet Peas",
  41: "Logo de Bascano",
  42: "Logo de Maraná",
  43: "Logo de Mera Kids",
  45: "Logo de Moda Hidráulica",
  46: "Logo de Al Sole",
  47: "Logo de Tucuchire",
  49: "Logo de Parakeet Beach Wear",
  50: "Logo de Moana Swimwear",
  51: "Logo de Marnie Swimwear",
};
const LOGO_ALT_NAMED: Record<string, string> = {
  "ARENA CRISTAL": "Logo de Arena Cristal Swimwear",
};

function logoAlt(entry: LogoEntry): string {
  if (entry.type === "numbered") return LOGO_ALT_NUM[entry.n] ?? "Logo de cliente de Sublink";
  return LOGO_ALT_NAMED[entry.name] ?? "Logo de cliente de Sublink";
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
                                    {(() => {
                                        const name0 = slide[0].type === "named" ? slide[0].name : null;
                                        const noBox0 = name0 && NO_BOX_LOGOS.has(name0);
                                        return (
                                            <div className={noBox0 ? "w-36 h-36 flex items-center justify-center" : "w-36 h-36 shadow-md bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-4"}>
                                                <Image src={logoSrc(slide[0])} alt={logoAlt(slide[0])} width={100} height={100} className={noBox0 ? "w-full h-full object-contain" : "w-full h-full object-contain p-3"} />
                                            </div>
                                        );
                                    })()}
                                    {slide[1] && (() => {
                                        const name1 = slide[1].type === "named" ? slide[1].name : null;
                                        const noBox1 = name1 && NO_BOX_LOGOS.has(name1);
                                        return (
                                            <div className={noBox1 ? "w-36 h-36 flex items-center justify-center" : "w-36 h-36 shadow-md bg-white border border-zinc-200 rounded-lg flex items-center justify-center p-4"}>
                                                <Image src={logoSrc(slide[1])} alt={logoAlt(slide[1])} width={100} height={100} className={noBox1 ? "w-full h-full object-contain" : "w-full h-full object-contain p-3"} />
                                            </div>
                                        );
                                    })()}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}



