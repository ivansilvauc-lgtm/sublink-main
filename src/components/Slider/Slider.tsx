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

        {/* ── Slide 2: Impresión textil — azul claro sólido ── */}
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

          {/* Gradiente que funde la imagen hacia el fondo azul claro */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to right, #E8F5FC 0%, #E8F5FC 42%, rgba(232,245,252,0.9) 55%, rgba(232,245,252,0.4) 75%, transparent 100%)',
            }}
          />

          {/* Contenido */}
          <div className="relative z-20 px-10 md:px-20 py-16 max-w-lg">
            <h2
              className="leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 700, color: '#1270A8' }}
            >
              Impresión<br />textil
            </h2>
            <p className="text-lg md:text-xl mt-3 font-semibold" style={{ color: '#157ec2' }}>
              Colores EPSON que te van a fascinar
            </p>
            <a
              href="#print-on-demand"
              className="mt-6 inline-flex items-center font-bold text-sm tracking-wide px-7 py-3.5 rounded-full transition-all duration-200 hover:opacity-90 hover:scale-105"
              style={{ background: '#157ec2', color: '#fff' }}
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
              i === current ? 'w-6 h-2 bg-[#157ec2]' : 'w-2 h-2 bg-[#157ec2]/40'
            }`}
          />
        ))}
      </div>

      {/* ── Arrows ── */}
      <button
        onClick={prev}
        aria-label="Slide anterior"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-white text-xl transition"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Siguiente slide"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-30 bg-black/20 hover:bg-black/40 rounded-full w-9 h-9 flex items-center justify-center text-white text-xl transition"
      >
        ›
      </button>
    </div>
  );
};
