"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface ReviewsData {
  name: string;
  rating: number;
  total: number;
  reviews: Review[];
}

// ✏️ EDITAR AQUÍ — actualiza con tu rating real de Google Business Profile
const GOOGLE_RATING = 5.0;
const GOOGLE_TOTAL_REVIEWS = 13; // número de reseñas visible en tu perfil
const GOOGLE_REVIEWS_URL = "https://search.google.com/local/reviews?placeid=ChIJd4jZgbDIwigRmh5Ff5t_6e0";

// ─── Badge compacto (ya existente en home) ────────────────────────────────────
export const GoogleReviewsBadge = ({ rating = GOOGLE_RATING, total = GOOGLE_TOTAL_REVIEWS }: { rating?: number; total?: number }) => (
  <a
    href={GOOGLE_REVIEWS_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-3 bg-white border border-gray-200 rounded-xl px-5 py-3 shadow-sm hover:shadow-md transition-shadow group"
    aria-label="Ver reseñas en Google"
  >
    {/* Google G logo */}
    <svg className="w-7 h-7 flex-shrink-0" viewBox="0 0 24 24">
      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
    </svg>
    <div>
      <div className="flex items-center gap-1">
        <span className="text-sm font-bold text-gray-800">{rating.toFixed(1)}</span>
        <Stars rating={rating} size="sm" />
      </div>
      <p className="text-xs text-gray-500 leading-none">
        {total ? `${total} reseñas en Google` : "Google Reviews"}
      </p>
    </div>
  </a>
);

// ─── Estrellas reutilizables ──────────────────────────────────────────────────
const Stars = ({ rating, size = "md" }: { rating: number; size?: "sm" | "md" }) => {
  const sz = size === "sm" ? "w-3.5 h-3.5" : "w-4 h-4";
  return (
    <div className="flex gap-0.5">
      {[1, 2, 3, 4, 5].map((s) => (
        <svg key={s} className={`${sz} ${s <= rating ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
        </svg>
      ))}
    </div>
  );
};

// ─── Sección completa de reseñas ──────────────────────────────────────────────
export const GoogleReviewsSection = () => {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((r) => r.json())
      .then((d) => {
        if (d.error) throw new Error(d.error);
        setData(d);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <ReviewsSkeleton />;
  if (error || !data) return null;

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-center justify-between mb-10 gap-4">
          <div>
            <h2 className="text-2xl font-bold text-zinc-900">Lo que dicen nuestros clientes</h2>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-3xl font-bold text-zinc-900">{data.rating.toFixed(1)}</span>
              <Stars rating={data.rating} />
              <span className="text-sm text-gray-500">({data.total} reseñas)</span>
            </div>
          </div>
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white border border-gray-200 rounded-lg px-4 py-2 text-sm text-gray-700 hover:shadow-md transition-shadow"
          >
            <svg className="w-5 h-5 flex-shrink-0" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            Ver todas en Google
          </a>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {data.reviews.map((review, i) => (
            <ReviewCard key={i} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReviewCard = ({ review }: { review: Review }) => (
  <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 flex flex-col gap-3">
    <div className="flex items-center gap-3">
      {review.profile_photo_url ? (
        <Image
          src={review.profile_photo_url}
          alt={review.author_name}
          width={40}
          height={40}
          className="rounded-full w-10 h-10 object-cover"
          unoptimized
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
          {review.author_name.charAt(0).toUpperCase()}
        </div>
      )}
      <div>
        <p className="font-semibold text-sm text-zinc-900 leading-tight">{review.author_name}</p>
        <p className="text-xs text-gray-400">{review.relative_time_description}</p>
      </div>
    </div>
    <Stars rating={review.rating} />
    {review.text && (
      <p className="text-sm text-gray-600 leading-relaxed line-clamp-4">{review.text}</p>
    )}
  </div>
);

const ReviewsSkeleton = () => (
  <section className="py-16 px-4 bg-gray-50">
    <div className="max-w-5xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {[1, 2, 3].map((i) => (
          <div key={i} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 animate-pulse">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-full bg-gray-200" />
              <div className="flex-1">
                <div className="h-3 bg-gray-200 rounded w-24 mb-1" />
                <div className="h-2 bg-gray-100 rounded w-16" />
              </div>
            </div>
            <div className="h-3 bg-gray-200 rounded w-20 mb-3" />
            <div className="space-y-2">
              <div className="h-2 bg-gray-100 rounded w-full" />
              <div className="h-2 bg-gray-100 rounded w-5/6" />
              <div className="h-2 bg-gray-100 rounded w-4/6" />
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);
