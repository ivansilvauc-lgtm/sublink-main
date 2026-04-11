/**
 * firecrawl.ts
 * Cliente reutilizable de Firecrawl para Sublink Company
 * Uso: investigación de competidores, proveedores y mercado textil
 */

import FirecrawlApp from "@mendable/firecrawl-js";

// ── Cliente singleton ─────────────────────────────────────────────────────────
let _client: FirecrawlApp | null = null;

export function getFirecrawlClient(): FirecrawlApp {
  if (!_client) {
    const apiKey = process.env.FIRECRAWL_API_KEY;
    if (!apiKey) {
      throw new Error("FIRECRAWL_API_KEY no configurada en variables de entorno");
    }
    _client = new FirecrawlApp({ apiKey });
  }
  return _client;
}

// ── Tipos ─────────────────────────────────────────────────────────────────────
export interface ResultadoScrape {
  url: string;
  titulo?: string;
  descripcion?: string;
  contenido?: string;
  error?: string;
}

export interface InfoCompetidor {
  url: string;
  nombre: string;
  productos?: string;
  precios?: string;
  ubicacion?: string;
  contenidoCompleto?: string;
  error?: string;
}

// ── Función principal: scrape de una URL ──────────────────────────────────────
export async function scrapearURL(url: string): Promise<ResultadoScrape> {
  try {
    const client = getFirecrawlClient();
    const result = await client.scrape(url, {
      formats: ["markdown"],
    });

    if (!result.success) {
      return { url, error: "No se pudo obtener la página" };
    }

    // Extraer título y descripción del markdown
    const markdown = (result.markdown as string | undefined) ?? "";
    const lineas = markdown.split("\n").filter(Boolean);
    const titulo = lineas.find((l) => l.startsWith("# "))?.replace("# ", "") ?? url;
    const descripcion = lineas.find((l) => l.length > 50 && !l.startsWith("#")) ?? "";

    return {
      url,
      titulo,
      descripcion: descripcion.slice(0, 200),
      contenido: markdown.slice(0, 3000),
    };
  } catch (err) {
    return { url, error: String(err) };
  }
}

// ── Función: analizar competidor ──────────────────────────────────────────────
export async function analizarCompetidor(
  url: string,
  nombre: string
): Promise<InfoCompetidor> {
  try {
    const client = getFirecrawlClient();
    const result = await client.scrape(url, {
      formats: ["markdown"],
    });

    if (!result.success) {
      return { url, nombre, error: "Sitio no accesible" };
    }

    const contenido = (result.markdown as string | undefined) ?? "";

    // Extraer secciones relevantes del markdown
    const lineas = contenido.split("\n");
    const seccionPrecios = lineas
      .filter(
        (l) =>
          /precio|bs|bolívar|dólar|\$|usd|tarifa|costo/i.test(l)
      )
      .slice(0, 10)
      .join("\n");

    const seccionProductos = lineas
      .filter(
        (l) =>
          /tela|sublimación|algodón|poliéster|spandex|licra|confección|metros|rollo/i.test(l)
      )
      .slice(0, 15)
      .join("\n");

    const seccionUbicacion = lineas
      .filter((l) => /valencia|caracas|maracay|venezuela|dirección|zona/i.test(l))
      .slice(0, 5)
      .join("\n");

    return {
      url,
      nombre,
      productos: seccionProductos || "No detectado",
      precios: seccionPrecios || "No detectado",
      ubicacion: seccionUbicacion || "No detectado",
      contenidoCompleto: contenido.slice(0, 5000),
    };
  } catch (err) {
    return { url, nombre, error: String(err) };
  }
}

// ── Función: buscar proveedores en la web ─────────────────────────────────────
export async function buscarProveedores(query: string): Promise<ResultadoScrape[]> {
  try {
    const client = getFirecrawlClient();
    const results = await client.search(query, { limit: 5 });

    if (!results.success || !results.data) return [];

    return results.data.map((item: { url?: string; title?: string; description?: string; markdown?: string }) => ({
      url: item.url ?? "",
      titulo: item.title ?? "",
      descripcion: item.description ?? "",
      contenido: item.markdown ?? "",
    }));
  } catch {
    return [];
  }
}
