// Server Component — sin "use client"
// Se ejecuta en el servidor y se revalida cada hora (ISR).
// Si la Places API de Google retorna datos → los usa automáticamente.
// Si no (cobertura limitada en Venezuela) → cae al fallback estático.

import { GoogleReviewsBadge } from "./GoogleReviews";

const PLACE_ID = "ChIJd4jZgbDIwigRmh5Ff5t_6e0";

async function fetchLiveReviews(): Promise<{ rating: number; total: number } | null> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  if (!apiKey) return null;

  try {
    const url =
      `https://maps.googleapis.com/maps/api/place/details/json` +
      `?place_id=${PLACE_ID}` +
      `&fields=rating,user_ratings_total` +
      `&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 3600 }, // revalida cada hora sin redeploy
    });

    const data = await res.json();

    if (data.status === "OK" && typeof data.result?.rating === "number") {
      return {
        rating: data.result.rating,
        total: data.result.user_ratings_total ?? 0,
      };
    }
  } catch {
    // silencioso — usa fallback estático
  }

  return null;
}

/**
 * GoogleReviewsBadgeAuto
 * Versión automatizada del badge. Se actualiza sola cada hora.
 * Úsala en page.tsx en lugar de <GoogleReviewsBadge />.
 */
export const GoogleReviewsBadgeAuto = async () => {
  const live = await fetchLiveReviews();

  // Si la API retornó datos → pásalos al badge.
  // Si no → GoogleReviewsBadge usa sus constantes estáticas por defecto.
  return <GoogleReviewsBadge rating={live?.rating} total={live?.total} />;
};
