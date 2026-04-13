"use client"
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { InteractiveImage } from '../InteractiveImage/InteractiveImage';

export const Slider = () => {
  const [current, setCurrent] = useState(0);
  const SLIDES = 2;

  const next = useCallback(() => setCurrent(c => (c + 1) % SLIDES), []);
  const prev = useCallback(() => setCurrent(c => (c - 1 + SLIDES) % SLIDES), []);

  useEffect(() => {
    const t = setInterval(next, 6500);
    return () => clearInterval(t);
  }, [next]);

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

        {/* ── Slide 2: Impresión textil — fondo azul Sublink ── */}
        <div
          className="min-w-full relative flex items-center overflow-hidden"
          style={{ background: '#157ec2', minHeight: 420 }}
        >
          {/* Imagen completa con mix-blend-mode para tonos azules */}
          <div className="absolute inset-0 z-0" style={{ isolation: 'isolate' }}>
            <Image
              src="/img/ofrecemos/impresion-textil-1126250.webp"
              alt="Impresión textil sublimación Sublink"
              fill
              className="object-cover object-center"
              style={{ mixBlendMode: 'luminosity', opacity: 0.75 }}
              priority
            />
          </div>

          {/* Gradiente: cubre lado izquierdo con azul para el texto */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                'linear-gradient(to right, #157ec2 0%, #157ec2 38%, rgba(21,126,194,0.72) 55%, transparent 100%)',
            }}
          />

          {/* Contenido */}
          <div className="relative z-20 px-10 md:px-20 py-16 max-w-lg">
            <h2
              className="text-white leading-tight tracking-tight"
              style={{ fontSize: 'clamp(2.4rem, 5vw, 4.5rem)', fontWeight: 300 }}
            >
              Impresión<br />textil
            </h2>
            <p className="text-white/80 text-lg md:text-xl mt-3 font-light">
              Colores que fascinan
            </p>
            <Link
              href="/telas"
              className="mt-6 inline-flex items-center gap-2 text-white font-medium text-base hover:gap-4 transition-all duration-200"
            >
              Comenzar a diseñar <span className="text-xl">→</span>
            </Link>
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
              i === current ? 'w-6 h-2 bg-white' : 'w-2 h-2 bg-white/50'
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
