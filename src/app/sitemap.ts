import { SUBLINK_URL } from "@/lib/constant";
import { IServicios, servicios } from "@/lib/servicios";
import { telas } from "@/lib/telas";
import { ITela } from "@/model/tela";
import { MetadataRoute } from "next/types";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {

    const telasEntries: MetadataRoute.Sitemap = telas?.map((tela: ITela) => ({ 
        url: `${SUBLINK_URL}/telas/${tela?.categoria_slug}/${tela?.slug}`,
        changeFrequency: 'monthly',
        lastModified: new Date(),
        priority: 0.6
    }))

    const serviciosEntries: MetadataRoute.Sitemap = servicios?.map((servicio: IServicios) => ({ 
        url: `${SUBLINK_URL}/servicios/${servicio?.slug}`,
        changeFrequency: 'monthly',
        lastModified: new Date(),
        priority: 0.8
    }))

    return [
        { url: SUBLINK_URL, lastModified: new Date(), changeFrequency: 'monthly', priority: 1.0 },
        { url: `${SUBLINK_URL}/sostenibilidad`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.9 },
        ...serviciosEntries,
        ...telasEntries,
    ]
}