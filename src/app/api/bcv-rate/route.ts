import { NextResponse } from 'next/server';

export const revalidate = 1800; // cache 30 min

// Fuentes en orden de prioridad — si una falla, pasa a la siguiente
const SOURCES = [
  {
    // yadio.io — especializado en tasas venezolanas (BCV + paralelo)
    url: 'https://api.yadio.io/rate/EUR/VES',
    parse: (data: unknown) => {
      const d = data as { rate?: number };
      return (d?.rate && d.rate > 0) ? d.rate : null;
    },
  },
  {
    // yadio.io alternativo exrates
    url: 'https://api.yadio.io/exrates/EUR',
    parse: (data: unknown) => {
      const d = data as { base?: string; rates?: { VES?: number } };
      return (d?.rates?.VES && d.rates.VES > 0) ? d.rates.VES : null;
    },
  },
  {
    // open.er-api.com — API pública sin auth, cubre VES
    url: 'https://open.er-api.com/v6/latest/EUR',
    parse: (data: unknown) => {
      const d = data as { result?: string; rates?: { VES?: number } };
      return (d?.rates?.VES && d.rates.VES > 0) ? d.rates.VES : null;
    },
  },
  {
    // exchangerate-api.com — fallback público ampliamente disponible
    url: 'https://api.exchangerate-api.com/v4/latest/EUR',
    parse: (data: unknown) => {
      const d = data as { rates?: { VES?: number } };
      return (d?.rates?.VES && d.rates.VES > 0) ? d.rates.VES : null;
    },
  },
  {
    // dolarapi.com — tasas venezolanas (array de monedas)
    url: 'https://ve.dolarapi.com/v1/dolares',
    parse: (data: unknown) => {
      const arr = data as Array<{ moneda?: string; promedio?: number; nombre?: string }>;
      if (!Array.isArray(arr)) return null;
      const eur = arr.find(d => {
        const key = (d.moneda ?? d.nombre ?? '').toLowerCase();
        return key === 'eur' || key === 'euro' || key === 'euros';
      });
      return (eur?.promedio && eur.promedio > 0) ? eur.promedio : null;
    },
  },
  {
    // pydolarve — respaldo adicional venezolano
    url: 'https://pydolarve.pythonanywhere.com/api/v1/dollar?page=bcv',
    parse: (data: unknown) => {
      const d = data as { EUR?: { price?: number } };
      return (d?.EUR?.price && d.EUR.price > 0) ? d.EUR.price : null;
    },
  },
];

export async function GET() {
  for (const source of SOURCES) {
    try {
      const res = await fetch(source.url, {
        cache: 'no-store',
        headers: {
          'User-Agent': 'sublink.company/1.0',
          'Accept': 'application/json',
        },
        signal: AbortSignal.timeout(6000), // 6s timeout por fuente
      });
      if (!res.ok) continue;
      const data = await res.json();
      const rate = source.parse(data);
      if (rate && rate > 0) {
        return NextResponse.json(
          { rate, source: new URL(source.url).hostname },
          { headers: { 'Cache-Control': 'public, max-age=1800, stale-while-revalidate=3600' } }
        );
      }
    } catch {
      // fuente falló — intentar la siguiente
      continue;
    }
  }
  return NextResponse.json(
    { rate: null, error: 'Tasa EUR/VES no disponible en este momento' },
    { status: 503 }
  );
}
