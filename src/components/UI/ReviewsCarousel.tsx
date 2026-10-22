"use client"
import { useEffect, useRef, useState } from 'react';

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
  { nombre: "Chain a la Parrilla Restaurante", rating: 5, text: "Excelente servicio. Calidad y diseños insuperables, en Chain a la Parrilla encontramos en Sublilnk al aliado perfecto. No solo nos fabrican los uniformes del restaurante con una calidad superior, sino que también nos han hecho todo el marketing visual: banderines, toldos personalizados y más. Cada detalle lo entregan impecable, con materiales resistentes y un diseño que realza nuestra marca. 100% recomendados para cualquier negocio que busque calidad y confianza" },
  { nombre: "Anabela Pantin", rating: 5, text: "Ofrecen una calidad excepcional en sublimación textil y una atención de primera. El equipo es sumamente atento y nos brinda una asesoría excelente de principio a fin. Llevamos más de 5 años de relación comercial y, sin duda, seguiremos confiando en su trabajo." },
  { nombre: "Katherine Quintero", rating: 5, text: "Excelente calidad en telas y atención impecable. Los materiales superaron mis expectativas en textura, color y durabilidad. Además, el proceso de compra es rápido y eficiente. Sin duda, seguiré trabajando con ellos. 1000/10" },
  { nombre: "Gabriela Castillo", rating: 5, text: "Agradezco mucho haber coincidido con ustedes de verdad hacen posible todos mis sueños..gracias por formar parte de mis colecciones. 100% recomendados." },
  { nombre: "eliecer diaz", rating: 5, text: "Excelente calidad en todos sus productos, super puntuales y con muy buena atencion, me gustan  sus diseños y el tiempo de entrega  pero sobre todo la calidad volví por más tengo empleados con uniformes de hasta 3 años y aún se ven bien, recomendado 100%" },
  { nombre: "Magalis Mavares", rating: 5, text: "Excelente servicio de sublimación y asesoría textil! Graciass a Sublink  siento la confianza de ofrecer un producto de calidad a mis clientes!  Excelente trato y rapidez en las entregas!" },
  { nombre: "Sunala Swimwear", rating: 5, text: "Increíble atención y servicio. La calidad de las telas es muy buena, siempre dispuestos ayudarnos y hacer lo imposible por darnos el mejor servicio. Muchos años trabajando con SUBLINK sin inconvenientes." },
  { nombre: "Libys Baldwin", rating: 5, text: "Excelente atencion tengo mas de 4 años con sublink, atencion personalizada, atentos a los detalles, te acompañan en todo el proceso desde el inicio hasta el final cuando ya tienes el producto terminado" },
  { nombre: "Maragoza", rating: 5, text: "Gran aliado para nuestra marca, los acabados textiles son de primera y el trato muy profesional, un servicio confiable y de alta calidad para cualquier proyecto textil 💜 ..." },
  { nombre: "karen pescoso", rating: 5, text: "Excelente equipo de trabajo y calidad garantizada, años trabajando con Sublink , sin duda alguna el mejor aliado para mi marca 🤝 ..." },
  { nombre: "Kevin Uzcategui", rating: 5, text: "Excelente atención. Destaco especialmente la alta calidad de sus productos y la amabilidad del personal, quienes brindan un trato sumamente profesional." },
  { nombre: "Claudia Fugazza Trevisi", rating: 5, text: "Muchos años creando juntas 💜 Siempre impecables en calidad, atención y servicio...." },
  { nombre: "Jesus Garcia", rating: 5, text: "Excelente calidad de la tela y de las impresiones, una durabilidad de mas de 10 años, los recomiendo." },
  { nombre: "ALEX MARTINEZ", rating: 5, text: "Excelente calidad en sus productos, buenos materiales y buen precio... 100% recomendados" },
  { nombre: "LILIBETH FUENMAYOR", rating: 5, text: "Súper recomendable responsables y rápidos tiempo trabajando con ellos excelente equipo ✅ 🫶 👍 ..." },
  { nombre: "Paola Alfonsi", rating: 5, text: "Responsables, creativos y entregas en tiempo récord. Llegamos mucho tiempo trabajando con ellos y tenemos muy buena experiencia." },
  { nombre: "KAMA MERU CA", rating: 5, text: "Me gustó la variedad de telas, tienes desde nacionales hasta premiun, lafayette lo mejor, y la tinta EPSON no tiene comparación" },
  { nombre: "Nathaly", rating: 5, text: "Súper buenos, responsables y atentos, siempre me ayudan a resolver, a veces hasta en tiempo record 💙 ..." },
  { nombre: "Fabiola Cecilia Pietri Pavan", rating: 5, text: "Excelente servicio! Felices de trabajar nuestras creaciones con ustedes" },
  { nombre: "carly tomei", rating: 5, text: "Muy buena la experiencia! Todo el personal muy amable." },
  { nombre: "Eyling susej yanes camacho", rating: 5, text: "Muy buena atención" },
  { nombre: "Marievi Alvarado", rating: 5, text: "Excelente servicio" },
  { nombre: "andreina moreno", rating: 5, text: "" },
  { nombre: "anii kmero", rating: 5, text: "" },
  { nombre: "Maria A. Guzmán A.", rating: 5, text: "" },
  { nombre: "Afrodizia Swimwear", rating: 5, text: "" },
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
  const scrollerRef = useRef<HTMLDivElement>(null);
  const pausedUntil = useRef(0);

  // Cargar reseñas reales desde Google Places API
  useEffect(() => {
    fetch('/api/reviews')
      .then(res => res.json())
      .then((json) => {
        // Se acepta la respuesta aunque no traiga reseñas: rating y total siguen siendo reales
        if (json && !json.error) {
          setData({
            rating: json.rating ?? null,
            total: json.total ?? null,
            reviews: Array.isArray(json.reviews) ? json.reviews : [],
          });
        }
      })
      .catch(() => {
        // Silencioso — usa fallback
      });
  }, []);

  // Combinar reseñas de la API con curadas (Google API legacy max 5 reviews).
  // RESENAS_FALLBACK = las 26 reseñas reales del Google Business Profile (copiadas tal cual).
  const reviewsApi = data?.reviews?.length
    ? data.reviews.map((r: GoogleReview) => ({
        nombre: r.author_name,
        rating: r.rating,
        text: r.text,
        fecha: r.relative_time_description,
      }))
    : [];
  const curadas = RESENAS_FALLBACK.map(r => ({
    nombre: r.nombre, rating: r.rating, text: r.text, fecha: "", // fecha fija obsoleta: no se muestra
  }));
  const seen = new Set<string>();
  const resenas = [...reviewsApi, ...curadas].filter(r => {
    const key = (r.nombre || "").trim().toLowerCase();
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });

  const rating = data?.rating ?? 5.0;
  const total  = data?.total  ?? 26; // respaldo: reseñas actuales en Google (la API lo actualiza)

  const CARD = 316; // 300px de tarjeta + 16px de separación

  // Pausa el avance automático cuando la persona interactúa
  const pausar = (ms: number) => { pausedUntil.current = Date.now() + ms; };

  const mover = (dir: 1 | -1) => {
    pausar(10000);
    scrollerRef.current?.scrollBy({ left: dir * CARD, behavior: 'smooth' });
  };

  // Avance suave; al llegar al final vuelve al inicio. Cada reseña existe UNA sola vez.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    // Con "reducir movimiento" en el sistema se mantiene el avance, pero SIN animación
    // (cambio directo de tarjeta) y más espaciado. Sin esa preferencia: desplazamiento suave.
    const reducir = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const comportamiento: ScrollBehavior = reducir ? 'auto' : 'smooth';
    const cada = reducir ? 7000 : 4500;
    const id = window.setInterval(() => {
      if (Date.now() < pausedUntil.current) return;
      const alFinal = el.scrollLeft + el.clientWidth >= el.scrollWidth - 8;
      if (alFinal) el.scrollTo({ left: 0, behavior: comportamiento });
      else el.scrollBy({ left: CARD, behavior: comportamiento });
    }, cada);
    return () => window.clearInterval(id);
  }, []);

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

      {/* Carousel: finito, deslizable, sin reseñas repetidas */}
      <div className="relative w-full">
        <button
          type="button"
          aria-label="Reseña anterior"
          onClick={() => mover(-1)}
          className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow items-center justify-center text-gray-600 hover:bg-gray-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <button
          type="button"
          aria-label="Reseña siguiente"
          onClick={() => mover(1)}
          className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white border border-gray-200 shadow items-center justify-center text-gray-600 hover:bg-gray-50"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>

        <div
          ref={scrollerRef}
          onPointerDown={() => pausar(10000)}
          onMouseEnter={() => pausar(8000)}
          onFocus={() => pausar(10000)}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory px-4 pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {resenas.map((r, idx) => {
            const inicial = (r.nombre?.[0] ?? "S").toUpperCase();
            return (
              <div key={`${idx}-${r.nombre}`} className="w-[300px] shrink-0 snap-start">
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
                      {r.fecha ? <p className="text-xs text-gray-400">{r.fecha}</p> : null}
                    </div>
                    <GoogleIcon />
                  </div>
                  <Estrellas n={r.rating} />
                  {r.text ? <p className="text-sm text-gray-600 leading-relaxed flex-1">&ldquo;{r.text}&rdquo;</p> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>

  );
};
