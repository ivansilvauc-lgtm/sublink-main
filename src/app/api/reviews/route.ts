import { NextResponse } from "next/server";

// Place ID confirmado de Sublink Sublimación Textil Valencia, Venezuela
const PLACE_ID = "ChIJd4jZgbDIwigRmh5Ff5t_6e0";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export const revalidate = 3600; // revalidar cada 1 hora

// Formato único que consume ReviewsCarousel (el mismo que usaba la API legacy)
interface NormalizedReview {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
}

interface NormalizedResult {
  name: string | null;
  rating: number | null;
  total: number | null;
  reviews: NormalizedReview[];
}

// 1) Places API (New): https://places.googleapis.com/v1/places/{id}
async function fetchPlacesNew(): Promise<{ ok: true; data: NormalizedResult } | { ok: false; error: string }> {
  const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}?languageCode=es`, {
    headers: {
      "X-Goog-Api-Key": API_KEY as string,
      "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
    },
    next: { revalidate: 3600 },
  });
  const json = await res.json();
  if (!res.ok) {
    return { ok: false, error: `${json?.error?.status ?? res.status}: ${json?.error?.message ?? "sin detalle"}` };
  }
  return {
    ok: true,
    data: {
      name: json.displayName?.text ?? null,
      rating: json.rating ?? null,
      total: json.userRatingCount ?? null,
      reviews: (json.reviews ?? []).map((r: {
        rating?: number;
        text?: { text?: string };
        originalText?: { text?: string };
        relativePublishTimeDescription?: string;
        authorAttribution?: { displayName?: string };
      }) => ({
        author_name: r.authorAttribution?.displayName ?? "Cliente de Google",
        rating: r.rating ?? 5,
        text: r.text?.text ?? r.originalText?.text ?? "",
        relative_time_description: r.relativePublishTimeDescription ?? "",
      })),
    },
  };
}

// 2) Places API (legacy): respaldo para cuentas que la tengan habilitada
async function fetchPlacesLegacy(): Promise<{ ok: true; data: NormalizedResult } | { ok: false; error: string }> {
  const url =
    `https://maps.googleapis.com/maps/api/place/details/json` +
    `?place_id=${PLACE_ID}` +
    `&fields=name,rating,user_ratings_total,reviews` +
    `&language=es` +
    `&key=${API_KEY}`;
  const res = await fetch(url, { next: { revalidate: 3600 } });
  const json = await res.json();
  if (json.status !== "OK") {
    return { ok: false, error: `${json.status}: ${json.error_message ?? "sin detalle"}` };
  }
  return {
    ok: true,
    data: {
      name: json.result.name ?? null,
      rating: json.result.rating ?? null,
      total: json.result.user_ratings_total ?? null,
      reviews: json.result.reviews ?? [],
    },
  };
}

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: "GOOGLE_PLACES_API_KEY no configurada" }, { status: 500 });
  }

  try {
    // Google devuelve como máximo 5 reseñas por ficha en ambas APIs.
    const nueva = await fetchPlacesNew();
    if (nueva.ok) return NextResponse.json(nueva.data);

    const legacy = await fetchPlacesLegacy();
    if (legacy.ok) return NextResponse.json(legacy.data);

    // Ambas fallaron: se devuelve el motivo de cada una para diagnosticar
    return NextResponse.json(
      { error: "Places API no disponible", places_new: nueva.error, places_legacy: legacy.error },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json({ error: "Error al obtener reseñas", detail: String(err) }, { status: 500 });
  }
}
