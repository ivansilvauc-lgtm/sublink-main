"use client"
import { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';

// ── Reseñas ───────────────────────────────────────────────────────────────────
// Agrega aquí las reseñas reales de Google a medida que lleguen.
// Los colores de avatar se asignan por persona (cualquier color hex sirve).
const RESENAS = [
  {
    nombre: "Alfredo Silva",
    inicial: "A",
    color: "#1789C4",
    estrellas: 5,
    texto: "Increíble calidad en la sublimación. Los colores quedaron exactamente como el diseño original, vivos y duraderos. 100% recomendados.",
    fecha: "Hace 1 semana",
  },
  {
    nombre: "Valentina Rojas",
    inicial: "V",
    color: "#EA028C",
    estrellas: 5,
    texto: "Mandé mis diseños un lunes y el miércoles ya tenía todo listo. Calidad excelente y atención al cliente de primera.",
    fecha: "Hace 2 semanas",
  },
  {
    nombre: "Carlos Medina",
    inicial: "C",
    color: "#F6931F",
    estrellas: 5,
    texto: "Hicimos los uniformes de nuestro equipo de fútbol y quedaron espectaculares. El sublimado aguantó varios lavados sin perder color.",
    fecha: "Hace 3 semanas",
  },
  {
    nombre: "Luisa Fernández",
    inicial: "L",
    color: "#8AC640",
    estrellas: 5,
    texto: "Pedí telas personalizadas para mi colección y superaron mis expectativas. El proceso fue muy sencillo y el resultado profesional.",
    fecha: "Hace 1 mes",
  },
  {
    nombre: "Roberto Díaz",
    inicial: "R",
    color: "#EC1F25",
    estrellas: 5,
    texto: "Excelente servicio. Trabajamos con Sublink para nuestros productos promocionales y siempre entregan con puntualidad y calidad.",
    fecha: "Hace 1 mes",
  },
  {
    nombre: "Gabriela Torres",
    inicial: "G",
    color: "#6B46C1",
    estrellas: 5,
    texto: "La mejor empresa de sublimación en Valencia. Los colores son vibrantes, la tela se siente premium. Ya hice mi tercer pedido.",
    fecha: "Hace 2 meses",
  },
];

function Estrellas({ n }: { n: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} className={`w-4 h-4 ${i < n ? 'text-yellow-400' : 'text-gray-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export const ReviewsCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, align: 'start' },
    [AutoScroll({ playOnInit: true, speed: 0.8 })]
  );

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll;
    if (!autoScroll) return;
    const playOrStop = autoScroll.isPlaying() ? autoScroll.stop : autoScroll.play;
    playOrStop();
  }, [emblaApi]);

  useEffect(() => {
    toggleAutoplay();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className="w-full py-20 bg-gray-50 border-t border-gray-100">
      {/* Header con rating agregado */}
      <div className="flex flex-col items-center mb-12 px-4">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <span className="text-2xl font-bold text-gray-900">Google Reviews</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-4xl font-bold text-gray-900">5.0</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">Lo que dicen nuestros clientes</p>
      </div>

      {/* Carousel de tarjetas */}
      <div className="embla pointer-events-none">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {RESENAS.map((r, i) => (
              <div
                key={i}
                className="embla__slide"
                style={{ flex: '0 0 320px', marginRight: '16px' }}
              >
                <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
                  {/* Avatar + nombre */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                      style={{ backgroundColor: r.color }}
                    >
                      {r.inicial}
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">{r.nombre}</p>
                      <p className="text-xs text-gray-400">{r.fecha}</p>
                    </div>
                    {/* Logo Google pequeño */}
                    <svg className="w-4 h-4 ml-auto flex-shrink-0" viewBox="0 0 24 24" fill="none">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                  </div>

                  {/* Estrellas */}
                  <Estrellas n={r.estrellas} />

                  {/* Texto */}
                  <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.texto}&rdquo;</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
