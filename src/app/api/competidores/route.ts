/**
 * /api/competidores
 * Analiza competidores del mercado textil con Firecrawl
 *
 * GET  /api/competidores          → lista todos los competidores configurados
 * POST /api/competidores          → scrape de una URL puntual
 *       body: { url: string, nombre?: string }
 */

import { NextResponse } from "next/server";
import { analizarCompetidor, buscarProveedores } from "@/lib/firecrawl";

// ── Competidores conocidos del mercado textil Venezuela ───────────────────────
// Agrega o quita URLs según tu investigación de mercado
const COMPETIDORES = [
  {
    url: "https://www.telasvenezuela.com",
    nombre: "Telas Venezuela",
  },
  {
    url: "https://www.sublimacionvenezuela.com",
    nombre: "Sublimación Venezuela",
  },
  // Agrega más competidores aquí:
  // { url: "https://...", nombre: "..." },
];

// ── GET: analizar todos los competidores ──────────────────────────────────────
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const modo = searchParams.get("modo") ?? "competidores";

  try {
    if (modo === "buscar") {
      // Modo búsqueda: busca proveedores de telas en Venezuela
      const query =
        searchParams.get("q") ??
        "proveedor telas sublimación textil Venezuela precio";
      const resultados = await buscarProveedores(query);
      return NextResponse.json({ query, resultados });
    }

    // Modo competidores: analiza las URLs configuradas en paralelo
    const analisis = await Promise.all(
      COMPETIDORES.map((c) => analizarCompetidor(c.url, c.nombre))
    );

    return NextResponse.json({
      fecha: new Date().toISOString(),
      competidores: analisis,
      total: analisis.length,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Error al analizar competidores", detalle: String(err) },
      { status: 500 }
    );
  }
}

// ── POST: scrape de una URL puntual ───────────────────────────────────────────
export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { url, nombre } = body as { url: string; nombre?: string };

    if (!url) {
      return NextResponse.json({ error: "Se requiere el campo 'url'" }, { status: 400 });
    }

    const resultado = await analizarCompetidor(url, nombre ?? url);

    return NextResponse.json({
      fecha: new Date().toISOString(),
      resultado,
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Error al procesar la solicitud", detalle: String(err) },
      { status: 500 }
    );
  }
}
