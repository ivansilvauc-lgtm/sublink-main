import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Poppins, Inter } from 'next/font/google'
import { Header } from "@/components/Header/Header";
import { AnnouncementBar } from "@/components/UI/AnnouncementBar";
import { MiniPop } from "@/components/UI/MiniPop";
import { Footer } from "@/components/UI/Footer";
import { PreFooter } from "@/components/UI/PreFooter";
import { Video } from "@/components/VideoReciclar/Video";
import { Suspense } from "react";
import { SUBLINK_URL } from "@/lib/constant";
import { Analytics } from "@vercel/analytics/react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { ChatbotWidget } from "@/components/UI/ChatbotWidget";

const poppins = Poppins({
  weight: ['200', '300', '400', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
})

// Inter: fuente secundaria para lectura editorial (blog)
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
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
    default: 'Sublink | Estampados y Sublimación Textil Venezuela',
    template: `Sublink | %s`,
  },
  description: "Sublimación textil continua en Venezuela. +40 tipos de telas desde 1 metro. Estampados, DTF, corte láser, vinil textil y etiquetas. Valencia, Carabobo.",
  keywords: ["telas", "sublimacion", "estampados", "sublimacion textil", "sublimacion continua", "sublimacion digital", "sublimacion por rollo", "sublimacion por metro", "sublimacion venezuela", "sublimacion textil venezuela", "estampados venezuela"],
  authors: [{ name: 'Sublink Company' }, { name: 'Visual' }],
  alternates: {
    canonical: SUBLINK_URL,
  },
  robots: 'index, follow',
  creator: 'Sublink',
  publisher: 'Sublink',
  openGraph: {
    title: 'Sublink | Estampados y Sublimación Textil Venezuela',
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
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Sublink Company',
    url: SUBLINK_URL,
    logo: `${SUBLINK_URL}/logo-sublink.png`,
    image: `${SUBLINK_URL}/opengraph-image.jpg`,
    description: 'Empresa líder en sublimación textil, estampados, DTF, corte láser y telas ecológicas en Venezuela.',
    telephone: '+58-424-4067274',
    email: 'sublinkve@gmail.com',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. 137, CC Imperial II 3-08, Piso 3',
      addressLocality: 'Valencia',
      addressRegion: 'Carabobo',
      addressCountry: 'VE',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.1621,
      longitude: -67.9928,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:30',
      closes: '16:30',
    },
    areaServed: [
      { '@type': 'City', name: 'Valencia' },
      { '@type': 'State', name: 'Carabobo' },
      { '@type': 'Country', name: 'Venezuela' },
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+58-424-4067274',
      contactType: 'customer service',
      availableLanguage: 'Spanish',
    },
    sameAs: [
      'https://www.instagram.com/sublink.ve',
      'https://www.facebook.com/sublink.ve',
    ],
  };

  const videoJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Cómo se fabrican las telas de poliéster reciclado — Sublink',
    description: 'Descubre cómo Sublink elabora sus telas de poliéster reciclado a partir de botellas PET. Proceso de fabricación de telas ecológicas en Venezuela.',
    thumbnailUrl: `${SUBLINK_URL}/img/reciclaje/fondo-cielo.webp`,
    uploadDate: '2023-01-01',
    embedUrl: 'https://www.youtube.com/embed/lMJXxhRFO2k',
    url: 'https://www.youtube.com/watch?v=lMJXxhRFO2k',
    publisher: {
      '@type': 'Organization',
      name: 'Sublink Company',
      logo: { '@type': 'ImageObject', url: `${SUBLINK_URL}/logo-sublink.png` },
    },
  };

  return (
    <html lang="es-VE">
      <body className={`${poppins.className} ${poppins.variable} ${inter.variable} max-w-[1920px] mx-auto`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(videoJsonLd) }}
        />
        <AnnouncementBar />
        <Header />
        <MiniPop />
        {children}
        <Suspense>
          <Video />
        </Suspense>
        <PreFooter />
        <Footer />
        <ChatbotWidget />
        <Analytics />
        <GoogleAnalytics gaId="G-FQ4RY25W5X" />
      </body>
    </html>
  );
}
