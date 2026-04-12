import { NextResponse } from 'next/server';

export const revalidate = 3600; // cache 1 hour

// Fuentes alternativas en orden de prioridad
const SOURCES = [
  {
    url: 'https://ve.dolarapi.com/v1/dolares',
    parse: (data: unknown) => {
      // API puede devolver "EUR", "euro", "euros", "Euro" — comparar case-insensitive
      const arr = data as Array<{ moneda?: string; promedio?: number; nombre?: string }>;
      const eur = arr.find(d => {
        const key = (d.moneda ?? d.nombre ?? '').toLowerCase();
        return key === 'eur' || key === 'euro' || key === 'euros';
      });
      return eur?.promedio ?? null;
    },
  },
  {
    url: 'https://pydolarve.pythonanywhere.com/api/v1/dollar?page=bcv',
    parse: (data: unknown) => {
      const d = data as { EUR?: { price?: number } };
      return d?.EUR?.price ?? null;
    },
  },
  {
    // yadio.io — API de tasas venezolanas, confiable y sin auth
    url: 'https://api.yadio.io/rate/EUR/VES',
    parse: (data: unknown) => {
      const d = data as { rate?: number };
      return d?.rate ?? null;
    },
  },
  {
    // yadio.io alternativo con exrates
    url: 'https://api.yadio.io/exrates/EUR',
    parse: (data: unknown) => {
      const d = data as { base?: string; rates?: { VES?: number } };
      return d?.rates?.VES ?? null;
    },
  },
];

export async function GET() {
  for (const source of SOURCES) {
    try {
      const res = await fetch(source.url, {
        next: { revalidate: 3600 },
        headers: {
          'User-Agent': 'sublink.company/1.0',
          'Accept': 'application/json',
        },
        signal: AbortSignal.timeout(8000), // 8s timeout por fuente
      });
      if (!res.ok) continue;
      const data = await res.json();
      const rate = source.parse(data);
      if (rate && rate > 0) {
        return NextResponse.json({ rate, source: source.url });
      }
    } catch {
      continue;
    }
  }
  return NextResponse.json({ rate: null, error: 'No disponible' }, { status: 503 });
}
