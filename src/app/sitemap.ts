import { SUBLINK_URL } from "@/lib/constant";
import { IServicios, servicios } from "@/lib/servicios";
import { telas } from "@/lib/telas";
import { ITela } from "@/model/tela";
import { MetadataRoute } from "next/types";

// Blog bloqueado (en construcción) — middleware redirige /blog/* a /
// Las entradas de blog se excluyen del sitemap para no desperdiciar crawl budget.
// Reactivar importando blogPosts y añadiendo blogEntries cuando el blog esté listo.

export default async function sitemap():Promise<MetadataRoute.Sitemap> {

    const now = new Date();

    const telasEntries: MetadataRoute.Sitemap = telas?.map((tela: ITela) => ({
        url: `${SUBLINK_URL}/telas/${tela?.categoria_slug}/${tela?.slug}`,
        changeFrequency: 'monthly',
        lastModified: now,
        priority: 0.6
    }))

    const serviciosEntries: MetadataRoute.Sitemap = servicios?.filter((s: IServicios) => s.visible !== false).map((servicio: IServicios) => ({
        url: `${SUBLINK_URL}/servicios/${servicio?.slug}`,
        changeFrequency: 'monthly',
        lastModified: now,
        priority: 0.8
    }))

    return [
        { url: SUBLINK_URL, lastModified: now, changeFrequency: 'monthly', priority: 1.0 },
        { url: `${SUBLINK_URL}/sostenibilidad`, lastModified: now, changeFrequency: 'yearly', priority: 0.9 },
        { url: `${SUBLINK_URL}/telas`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SUBLINK_URL}/servicios`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
        { url: `${SUBLINK_URL}/portafolio`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
        ...serviciosEntries,
        ...telasEntries,
    ]
}