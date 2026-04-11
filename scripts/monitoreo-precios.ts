/**
 * monitoreo-precios.ts
 * Script CLI para investigar competidores y proveedores del mercado textil
 *
 * Uso:
 *   npx ts-node --skip-project scripts/monitoreo-precios.ts
 *   npx ts-node --skip-project scripts/monitoreo-precios.ts --url https://competidor.com --nombre "Mi Competidor"
 *   npx ts-node --skip-project scripts/monitoreo-precios.ts --buscar "telas poliéster Venezuela"
 *   npx ts-node --skip-project scripts/monitoreo-precios.ts --alibaba "sublimation fabric wholesale"
 */

import FirecrawlApp from "@mendable/firecrawl-js";
import * as fs from "fs";
import * as path from "path";

// Cargar .env.local manualmente
const envPath = path.resolve(process.cwd(), ".env.local");
if (fs.existsSync(envPath)) {
  const lines = fs.readFileSync(envPath, "utf-8").split("\n");
  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const eqIdx = trimmed.indexOf("=");
    if (eqIdx === -1) continue;
    const key = trimmed.slice(0, eqIdx).trim();
    const value = trimmed.slice(eqIdx + 1).trim();
    if (!process.env[key]) process.env[key] = value;
  }
}

const API_KEY = process.env.FIRECRAWL_API_KEY;
if (!API_KEY) {
  console.error("❌ Falta FIRECRAWL_API_KEY en .env.local");
  process.exit(1);
}

const client = new FirecrawlApp({ apiKey: API_KEY });

// ── Competidores por defecto ──────────────────────────────────────────────────
const COMPETIDORES_DEFAULT: { url: string; nombre: string }[] = [
  // Agrega URLs aquí:
  // { url: "https://competidor.com", nombre: "Nombre" },
];

// ── Scrape individual ─────────────────────────────────────────────────────────
// scrape() devuelve Document directamente — lanza error si falla
async function scrapearSitio(url: string, nombre: string): Promise<void> {
  console.log(`\n🔍 Analizando: ${nombre}`);
  console.log(`   ${url}`);
  console.log("─".repeat(60));

  try {
    const doc = await client.scrape(url, { formats: ["markdown"] });
    const contenido: string = doc.markdown ?? "";

    if (!contenido) {
      console.log("⚠️  Sitio accesible pero sin contenido markdown");
      return;
    }

    const lineas: string[] = contenido.split("\n").filter((l: string) => l.trim() !== "");

    const productos: string[] = lineas
      .filter((l: string) => /tela|sublimaci|algod|poli|spandex|licra|confecci|metros|rollo/i.test(l))
      .slice(0, 8);

    const precios: string[] = lineas
      .filter((l: string) => /precio|bs\.|bol[ií]var|d[oó]lar|\$|usd|tarifa|costo|\d+[\.,]\d+/i.test(l))
      .slice(0, 6);

    const contacto: string[] = lineas
      .filter((l: string) => /valencia|caracas|venezuela|tel[eé]fono|whatsapp|instagram|contacto|direcci/i.test(l))
      .slice(0, 4);

    console.log("\n📦 PRODUCTOS / TELAS:");
    if (productos.length) productos.forEach((p: string) => console.log(`  • ${p.trim()}`));
    else console.log("  (No detectado)");

    console.log("\n💰 PRECIOS:");
    if (precios.length) precios.forEach((p: string) => console.log(`  • ${p.trim()}`));
    else console.log("  (No detectado)");

    console.log("\n📍 CONTACTO / UBICACIÓN:");
    if (contacto.length) contacto.forEach((c: string) => console.log(`  • ${c.trim()}`));
    else console.log("  (No detectado)");

    console.log("\n📄 FRAGMENTO:");
    console.log(contenido.slice(0, 500) + "...");

  } catch (err) {
    console.log(`❌ Error al acceder al sitio: ${err}`);
  }
}

// ── Búsqueda web ──────────────────────────────────────────────────────────────
// search() devuelve SearchData: { web?, news?, images? }
async function buscarEnWeb(query: string): Promise<void> {
  console.log(`\n🌐 Buscando: "${query}"`);
  console.log("─".repeat(60));

  try {
    const results = await client.search(query, { limit: 5 });

    // Los resultados están en results.web (no en results.data)
    const items = results.web ?? [];

    if (items.length === 0) {
      console.log("❌ No se encontraron resultados");
      return;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    items.forEach((item: any, i: number) => {
      const title: string = item.title ?? item.metadata?.title ?? "Sin título";
      const url: string   = item.url   ?? item.metadata?.url   ?? "";
      const desc: string  = item.description ?? item.snippet   ?? "";
      console.log(`\n${i + 1}. ${title}`);
      console.log(`   URL: ${url}`);
      if (desc) console.log(`   ${desc.slice(0, 150)}...`);
    });

  } catch (err) {
    console.log(`❌ Error en búsqueda: ${err}`);
  }
}

// ── Main ──────────────────────────────────────────────────────────────────────
async function main(): Promise<void> {
  const args = process.argv.slice(2);
  console.log("🔥 Sublink — Monitoreo de Mercado Textil");
  console.log("=".repeat(60));

  const urlIdx = args.indexOf("--url");
  if (urlIdx !== -1 && args[urlIdx + 1]) {
    const nombreIdx = args.indexOf("--nombre");
    const nombre = nombreIdx !== -1 && args[nombreIdx + 1] ? args[nombreIdx + 1] : args[urlIdx + 1];
    await scrapearSitio(args[urlIdx + 1], nombre);
    return;
  }

  const buscarIdx = args.indexOf("--buscar");
  if (buscarIdx !== -1 && args[buscarIdx + 1]) {
    await buscarEnWeb(args[buscarIdx + 1]);
    return;
  }

  const alibabaIdx = args.indexOf("--alibaba");
  if (alibabaIdx !== -1 && args[alibabaIdx + 1]) {
    const query = args[alibabaIdx + 1];
    console.log(`\n🛒 Buscando en Alibaba: "${query}"`);
    await scrapearSitio(
      `https://www.alibaba.com/trade/search?SearchText=${encodeURIComponent(query)}`,
      "Alibaba"
    );
    return;
  }

  if (COMPETIDORES_DEFAULT.length === 0) {
    console.log("\n⚠️  Sin competidores configurados. Usa:");
    console.log('   --buscar "sublimación textil Venezuela"');
    console.log('   --url https://competidor.com --nombre "Empresa"');
    console.log('   --alibaba "sublimation fabric wholesale"');
    return;
  }

  for (const c of COMPETIDORES_DEFAULT) {
    await scrapearSitio(c.url, c.nombre);
  }
  console.log("\n✅ Análisis completo.", new Date().toLocaleString("es-VE"));
}

main().catch(console.error);
