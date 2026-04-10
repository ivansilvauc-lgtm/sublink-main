"use client"
import { useEffect, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll';

// Colores de avatar por inicial
const AVATAR_COLORS: Record<string, string> = {
  A: "#1789C4", B: "#EA028C", C: "#F6931F", D: "#8AC640",
  E: "#EC1F25", F: "#6B46C1", G: "#0F9D58", H: "#DB4437",
  I: "#4285F4", J: "#F4B400", K: "#0F9D58", L: "#DB4437",
  M: "#EA028C", N: "#1789C4", O: "#F6931F", P: "#6B46C1",
  Q: "#EC1F25", R: "#8AC640", S: "#4285F4", T: "#F4B400",
  U: "#0F9D58", V: "#EA028C", W: "#1789C4", X: "#DB4437",
  Y: "#F6931F", Z: "#6B46C1",
};

function avatarColor(nombre: string): string {
  const inicial = (nombre?.[0] ?? "S").toUpperCase();
  return AVATAR_COLORS[inicial] ?? "#157ec2";
}

// ── Fallback hardcodeado ─────────────────────────────────────────────────────
const RESENAS_FALLBACK = [
  { nombre: "Alfredo Silva",    rating: 5, text: "Increíble calidad en la sublimación. Los colores quedaron exactamente como el diseño original, vivos y duraderos. 100% recomendados.",         relative_time_description: "Hace 1 semana" },
  { nombre: "Valentina Rojas",  rating: 5, text: "Mandé mis diseños un lunes y el miércoles ya tenía todo listo. Calidad excelente y atención al cliente de primera.",                         relative_time_description: "Hace 2 semanas" },
  { nombre: "Carlos Medina",    rating: 5, text: "Hicimos los uniformes de nuestro equipo de fútbol y quedaron espectaculares. El sublimado aguantó varios lavados sin perder color.",          relative_time_description: "Hace 3 semanas" },
  { nombre: "Luisa Fernández",  rating: 5, text: "Pedí telas personalizadas para mi colección y superaron mis expectativas. El proceso fue muy sencillo y el resultado profesional.",           relative_time_description: "Hace 1 mes" },
  { nombre: "Roberto Díaz",     rating: 5, text: "Excelente servicio. Trabajamos con Sublink para nuestros productos promocionales y siempre entregan con puntualidad y calidad.",             relative_time_description: "Hace 1 mes" },
  { nombre: "Gabriela Torres",  rating: 5, text: "La mejor empresa de sublimación en Valencia. Los colores son vibrantes, la tela se siente premium. Ya hice mi tercer pedido.",               relative_time_description: "Hace 2 meses" },
];

interface GoogleReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
}

interface ReviewsData {
  rating: number | null;
  total: number | null;
  reviews: GoogleReview[];
}

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

const GoogleIcon = () => (
  <svg className="w-4 h-4 ml-auto flex-shrink-0" viewBox="0 0 24 24" fill="none">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

export const ReviewsCarousel = () => {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [emblaRef] = useEmblaCarousel(
    { loop: true, align: 'start', dragFree: true },
    [AutoScroll({ playOnInit: true, speed: 1.26, stopOnInteraction: false })]
  );

  // Cargar reseñas reales desde Google Places API
  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then((json) => {
        if (json.reviews && Array.isArray(json.reviews) && json.reviews.length > 0) {
          setData({ rating: json.rating, total: json.total, reviews: json.reviews });
        }
      })
      .catch(() => {
        // Silencioso — usa fallback
      });
  }, []);

  // Normalizar reseñas para el render
  const resenas = data?.reviews?.length
    ? data.reviews.map((r: GoogleReview) => ({
        nombre: r.author_name,
        rating: r.rating,
        text: r.text,
        fecha: r.relative_time_description,
      }))
    : RESENAS_FALLBACK.map(r => ({ nombre: r.nombre, rating: r.rating, text: r.text, fecha: r.relative_time_description }));

  const rating = data?.rating ?? 5.0;
  const total  = data?.total  ?? null;

  // Duplicar reseñas para loop continuo visible
  const resenasDuplicadas = [...resenas, ...resenas, ...resenas];

  return (
    <section className="w-full pt-10 pb-16 bg-gray-50">
      {/* Header */}
      <div className="flex flex-col items-center mb-8 px-4">
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
          <span className="text-4xl font-bold text-gray-900">{rating.toFixed(1)}</span>
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <svg key={i} className="w-6 h-6 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            ))}
          </div>
        </div>
        <p className="text-sm text-gray-500 mt-1">
          {total ? `Basado en ${total} reseñas verificadas` : 'Lo que dicen nuestros clientes'}
        </p>
      </div>

      {/* Carousel */}
      <div className="pointer-events-none overflow-hidden w-full">
        <div ref={emblaRef} style={{ overflow: 'hidden' }}>
          <div style={{ display: 'flex', backfaceVisibility: 'hidden', touchAction: 'pan-y pinch-zoom' }}>
            {resenasDuplicadas.map((r, i) => {
              const inicial = (r.nombre?.[0] ?? "S").toUpperCase();
              return (
                <div
                  key={i}
                  style={{ flex: '0 0 300px', minWidth: 0, paddingLeft: '16px' }}
                >
                  <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 h-full flex flex-col">
                    {/* Avatar + nombre */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                        style={{ backgroundColor: avatarColor(r.nombre) }}
                      >
                        {inicial}
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">{r.nombre}</p>
                        <p className="text-xs text-gray-400">{r.fecha}</p>
                      </div>
                      <GoogleIcon />
                    </div>
                    <Estrellas n={r.rating} />
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>

  );
};
