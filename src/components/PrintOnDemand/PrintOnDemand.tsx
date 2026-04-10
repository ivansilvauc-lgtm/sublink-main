"use client"

import Image from "next/image";
import { useState, useEffect } from "react";

const PRINTS = [
  {
    src: "/img/prints/AP001 - CEBRA 1.png",
    alt: "Estampado cebra en blanco y negro sublimado en tela",
  },
  {
    src: "/img/prints/FL002 - APRICOT.jpg",
    alt: "Estampado floral apricot sublimado en tela",
  },
  {
    src: "/img/prints/FL226- JIRASO MONARCHS.jpg",
    alt: "Estampado floral jiraso monarchs sublimado en tela",
  },
];

export const PrintOnDemandSection = () => {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActive((prev) => (prev + 1) % PRINTS.length);
    }, 980);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="w-full bg-white py-10 md:py-14 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 items-center">

        {/* Left: Text content */}
        <div>
          <span className="inline-block text-xs font-bold uppercase tracking-widest text-[#157ec2] mb-4">
            Sublimación Digital
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight mb-4 md:mb-6">
            Estampa tus diseños<br />en cualquier tela
          </h2>

          <ul className="space-y-3 mb-6">
            {[
              "Impresión desde 1 metro hasta rollo completo",
              "Compatible con más de 25 telas",
              "Colores vibrantes que no se caen con los lavados ni se agrietan",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-gray-600">
                <span className="mt-1 w-5 h-5 rounded-full bg-[#157ec2] flex-shrink-0 flex items-center justify-center">
                  <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="text-base">{item}</span>
              </li>
            ))}
          </ul>

          {/* Technology line + logos */}
          <p className="text-sm text-gray-500 mb-3">
            Usamos tintas y materiales de primera calidad para lograr estampados nítidos y de alta durabilidad. Tecnología Epson y Monti Antoni.
          </p>
          <div className="flex items-center gap-4 mb-5 md:mb-8">
            {/* Epson logo */}
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-1.5 bg-white">
              <Image src="/assets/epson-logo.svg" alt="Epson" width={90} height={36} className="h-8 w-auto" />
            </div>
            {/* Monti Antonio logo */}
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-1.5 bg-white">
              <Image src="/assets/monti-antonio-logo.svg" alt="Monti Antonio" width={110} height={36} className="h-8 w-auto" />
            </div>
          </div>

          {/* Buttons — ambos inactivos */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 bg-[#157ec2]/50 text-white font-bold px-7 py-3.5 rounded-full cursor-not-allowed text-sm uppercase tracking-wide"
            >
              Print FREE
              <span className="text-xs font-normal normal-case opacity-80">(próximamente)</span>
            </button>

            <button
              disabled
              title="Próximamente"
              className="inline-flex items-center justify-center gap-2 border-2 border-gray-200 text-gray-400 font-bold px-7 py-3.5 rounded-full cursor-not-allowed text-sm uppercase tracking-wide"
            >
              🔒 Sube tu Print
              <span className="text-xs font-normal normal-case">(próximamente)</span>
            </button>
          </div>
        </div>

        {/* Right: Dynamic print carousel */}
        <div className="relative w-full h-56 sm:h-72 lg:h-[420px] rounded-2xl overflow-hidden shadow-xl">
          {PRINTS.map((print, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                opacity: active === i ? 1 : 0,
                transition: 'opacity 245ms ease-in-out',
              }}
            >
              <Image
                src={print.src}
                alt={print.alt}
                fill
                className="object-cover"
                style={{
                  transform: active === i ? 'scale(1.065)' : 'scale(1)',
                  transition: 'transform 980ms ease-out, opacity 245ms ease-in-out',
                }}
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority={i === 0}
              />
            </div>
          ))}

          {/* Dot indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
            {PRINTS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  active === i ? "bg-white w-6" : "bg-white/50"
                }`}
                aria-label={`Print ${i + 1}`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
