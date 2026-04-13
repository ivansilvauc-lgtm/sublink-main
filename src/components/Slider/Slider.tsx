"use client"
import { useState, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InteractiveImage } from '../InteractiveImage/InteractiveImage';

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const SLIDES = 2;

  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES) % SLIDES), []);

  // Sin autoplay — solo se mueve con las flechas

  return (
    <div className="w-full mt-14 relative overflow-hidden">
      {/* Slide track */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {/* ── Slide 1: Imagen interactiva ── */}
        <div className="min-w-full">
          <InteractiveImage />
        </div>

        {/* ── Slide 2: Colores EPSON — azul Sublink muy claro ── */}
        <div
          className="min-w-full relative flex items-center overflow-hidden"
          style={{ background: '#E8F5FC', minHeight: 420 }}
        >
          {/* Imagen a la derecha */}
          <div className="absolute right-0 top-0 bottom-0 w-1/2 md:w-[55%]">
            <Image
              src="/img/ofrecemos/impresion-textil-1126250.webp"
              alt="Impresión textil sublimación Sublink"
              fill
              className="object-cover object-center"
              priority
            />
          </div>

          {/* Contenido */}
          <div className="relative z-20 px-10 md:px-20 py-16 max-w-lg">
            {/* Eyebrow */}
            <p className="text-[#157ec2] text-xs sm:text-sm font-bold uppercase tracking-widest mb-3">
              No estás solo, te acompañamos en este proceso
            </p>
            {/* Heading principal — letras montadas */}
            <h2
              className="leading-tight tracking-tight text-gray-900 mb-6"
              style={{
                fontSize: 'clamp(1.8rem, 4vw, 3.6rem)',
                fontWeight: 900,
                textShadow: '2px 2px 0px rgba(21,126,194,0.12)',
              }}
            >
              Colores EPSON<br />que te van a fascinar
            </h2>
            {/* CTA — sin flecha, solo texto */}
            <a
              href="#print-on-demand"
              className="inline-flex items-center justify-center bg-[#157ec2] hover:bg-[#1270A8] text-white font-extrabold px-8 py-3.5 rounded-full transition-colors text-sm sm:text-base uppercase tracking-widest shadow-md"
            >
              DISEÑA CONMIGO
            </a>
          </div>
        </div>
      </div>

      {/* ── Dots ── */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {Array.from({ length: SLIDES }).map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`rounded-full transition-all duration-300 ${
              i === current ? 'w-8 h-[10px] bg-[#157ec2]' : 'w-[10px] h-[10px] bg-gray-400 hover:w-4 hover:h-4 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Siguiente slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 rounded-full w-12 h-12 flex items-center justify-center text-white text-2xl transition"
      >
        ›
      </button>
    </div>
  );
};
