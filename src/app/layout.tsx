import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins } from 'next/font/google'
import { Header } from "@/components/Header/Header";
import { MiniPop } from "@/components/UI/MiniPop";
import { Footer } from "@/components/UI/Footer";
import { Video } from "@/components/VideoReciclar/Video";
import { Suspense } from "react";
import { SUBLINK_URL } from "@/lib/constant";

const poppins = Poppins({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
}

export const metadata: Metadata = {
  metadataBase: new URL(SUBLINK_URL),
  title: {
    default: 'Sublink Company | Servicios de Estampados y Sublimación Textil',
    template: `Sublink | %s`,
  },
  description: "Personalizamos +40 tipos de telas que tenemos disponibles, a través de la tecnología de Sublimación Textil Continua, con máquinas que permiten estampar el ancho de las telas en su totalidad, desde un metro hasta un rollo completo!. También ofrecemos etiquetas, vinil textil, DTF, corte laser, accesorios e insumos.",
  keywords: ["telas", "sublimacion", "estampados", "sublimacion textil", "sublimacion continua", "sublimacion digital", "sublimacion por rollo", "sublimacion por metro"],
  authors: [{ name: 'Sublink Company' }, { name: 'Visual' }],
  alternates: {
    canonical: SUBLINK_URL,
  },
  robots: 'index, follow',
  creator: 'Sublink',
  publisher: 'Sublink',
  openGraph: {
    title: 'Sublink Company | Servicios de Estampados y Sublimación Textil',
    description: 'Personalizamos +40 tipos de telas que tenemos disponibles, a través de la tecnología de Sublimación Textil Continua, con máquinas que permiten estampar el ancho de las telas en su totalidad, desde un metro hasta un rollo completo!.',
    url: SUBLINK_URL,
    siteName: 'Sublink Company',
    images: [
      {
        url: `${SUBLINK_URL}/opengraph-image.jpg`,
        type: 'image/jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'es_ES',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.className} max-w-[1920px] mx-auto`}>
        <Header />
        <MiniPop />
        {children}
        <Suspense>
          <Video />
        </Suspense>
        <Footer />
      </body>
    </html>
  );
}
