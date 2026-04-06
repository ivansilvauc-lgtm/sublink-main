import { NextResponse } from "next/server";

// Place ID confirmado de Sublink Sublimación Textil Valencia, Venezuela
const PLACE_ID = "ChIJd4jZgbDIwigRmh5Ff5t_6e0";
const API_KEY = process.env.GOOGLE_PLACES_API_KEY;

export const revalidate = 3600; // revalidar cada 1 hora

export async function GET() {
  if (!API_KEY) {
    return NextResponse.json({ error: "GOOGLE_PLACES_API_KEY no configurada" }, { status: 500 });
  }

  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${PLACE_ID}` +
      `&fields=name,rating,user_ratings_total,reviews` +
      `&key=${API_KEY}`;

    const res = await fetch(url, { next: { revalidate: 3600 } });
    const data = await res.json();

    if (data.status !== "OK") {
      return NextResponse.json({ error: data.status, detail: data.error_message }, { status: 500 });
    }

    return NextResponse.json({
      name: data.result.name,
      rating: data.result.rating ?? null,
      total: data.result.user_ratings_total ?? null,
      reviews: (data.result.reviews ?? []).slice(0, 5),
    });
  } catch (err) {
    return NextResponse.json({ error: "Error al obtener reseñas", detail: String(err) }, { status: 500 });
  }
}
