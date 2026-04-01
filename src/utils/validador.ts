import { type ITela } from "@/model/tela";
import { telas } from "@/lib/telas";

function verificarIdsUnicos(telas: ITela[]): void {
    const ids = new Set();
    const idsRepetidos: string[] = [];

    telas.forEach(tela => {
        if (ids.has(tela.id)) {
            idsRepetidos.push(tela.id);
        } else {
            ids.add(tela.id);
        }
    });

    if (idsRepetidos.length > 0) {
        console.log("IDs repetidos encontrados:", idsRepetidos);
        throw new Error("Se encontraron IDs de telas repetidos. Deteniendo la build.");
    } else {
        console.log("No se encontraron IDs repetidos.");
    }
}

function verificarSlugsSimilares(telas: ITela[]): void {
    const slugs = new Set();
    const slugsSimilares: string[] = [];

    telas.forEach(tela => {
        const slug = tela.slug.toLowerCase();
        if (slugs.has(slug)) {
            slugsSimilares.push(slug);
        } else {
            slugs.add(slug);
        }
    });

    if (slugsSimilares.length > 0) {
        console.log("Slugs similares encontrados:", slugsSimilares);
        throw new Error("Se encontraron slugs de telas similares. Deteniendo la build.");
    } else {
        console.log("No se encontraron slugs similares.");
    }
}

try {
    if (Array.isArray(telas) && telas.length > 0) {
        verificarIdsUnicos(telas);
        verificarSlugsSimilares(telas);
    } else {
        console.log("No se encontraron telas.");
    }
} catch (error) {
    console.error(error);
    process.exit(1); 
}