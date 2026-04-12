import { NextResponse } from 'next/server';

export const revalidate = 3600; // cache 1 hour

// Fuentes alternativas en orden de prioridad
const SOURCES = [
  {
    url: 'https://ve.dolarapi.com/v1/dolares',
    parse: (data: unknown) => {
      const arr = data as Array<{ moneda?: string; promedio?: number }>;
      const eur = arr.find(d => d.moneda === 'EUR');
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
];

export async function GET() {
  for (const source of SOURCES) {
    try {
      const res = await fetch(source.url, {
        next: { revalidate: 3600 },
        headers: { 'User-Agent': 'sublink.company/1.0' },
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
