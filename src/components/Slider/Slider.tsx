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

        {/* ── Slide 2: Acompañamiento — azul Sublink oscuro sólido ── */}
        <div
          className="min-w-full relative flex items-center overflow-hidden"
          style={{ background: '#0D5E8C', minHeight: 420 }}
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
            <h2
              className="leading-tight tracking-tight text-white"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 4rem)', fontWeight: 800 }}
            >
              NO estás solo,<br />TE acompañamos<br />en todo el proceso.
            </h2>
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
              i === current ? 'w-8 h-[10px] bg-[#157ec2]' : 'w-[10px] h-[10px] bg-[#157ec2]/40'
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
