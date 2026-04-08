import { SUBLINK_URL } from "@/lib/constant";
import { IServicios, servicios } from "@/lib/servicios";
import { telas } from "@/lib/telas";
import { blogPosts } from "@/lib/blog";
import { ITela } from "@/model/tela";
import { MetadataRoute } from "next/types";

export default async function sitemap():Promise<MetadataRoute.Sitemap> {

    const telasEntries: MetadataRoute.Sitemap = telas?.map((tela: ITela) => ({
        url: `${SUBLINK_URL}/telas/${tela?.categoria_slug}/${tela?.slug}`,
        changeFrequency: 'monthly',
        lastModified: new Date('2025-04-01'),
        priority: 0.6
    }))

    const serviciosEntries: MetadataRoute.Sitemap = servicios?.map((servicio: IServicios) => ({
        url: `${SUBLINK_URL}/servicios/${servicio?.slug}`,
        changeFrequency: 'monthly',
        lastModified: new Date('2025-04-01'),
        priority: 0.8
    }))

    const blogEntries: MetadataRoute.Sitemap = blogPosts.map((post) => ({
        url: `${SUBLINK_URL}/blog/${post.slug}`,
        changeFrequency: 'monthly',
        lastModified: new Date(post.fecha),
        priority: 0.7
    }))

    return [
        { url: SUBLINK_URL, lastModified: new Date('2025-04-01'), changeFrequency: 'monthly', priority: 1.0 },
        { url: `${SUBLINK_URL}/sostenibilidad`, lastModified: new Date('2025-04-01'), changeFrequency: 'yearly', priority: 0.9 },
        { url: `${SUBLINK_URL}/blog`, lastModified: new Date('2025-04-01'), changeFrequency: 'weekly', priority: 0.8 },
        ...serviciosEntries,
        ...telasEntries,
        ...blogEntries,
    ]
}