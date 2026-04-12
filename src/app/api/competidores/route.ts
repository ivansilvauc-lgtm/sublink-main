/**
 * /api/competidores — DESHABILITADO
 *
 * Esta ruta fue removida del bundle de Next.js porque @mendable/firecrawl-js
 * usa 'undici' internamente, que webpack no puede compilar.
 *
 * Para análisis de competidores usar:
 *   - public/sublink-scraper.html  (UI directa en el browser)
 *   - npx ts-node --skip-project scripts/monitoreo-precios.ts  (CLI)
 */

import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(
    { message: "Usa sublink-scraper.html o el CLI monitoreo-precios.ts para análisis de competidores." },
    { status: 503 }
  );
}

export async function POST() {
  return NextResponse.json(
    { message: "Usa sublink-scraper.html o el CLI monitoreo-precios.ts para análisis de competidores." },
    { status: 503 }
  );
}
