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
import { AdsAttribution } from "@/components/UI/AdsAttribution";
import { FAQ_ITEMS } from "@/lib/faq";
import { MAPS_PLACE_URL } from "@/lib/maps";
import { WhatsAppLink } from "@/components/UI/WhatsAppLink";
import Script from "next/script";

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
}

export const metadata: Metadata = {
  metadataBase: new URL(SUBLINK_URL),
  title: {
    default: 'Sublink | Estampados y Sublimación Textil Venezuela',
    template: `%s`,
  },
  description: "Sublimación textil continua en Venezuela. +40 tipos de telas desde 1 metro. Estampados, DTF, corte láser y etiquetas. Valencia, Carabobo.",
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
    description: "Sublimación textil continua en Venezuela. +40 tipos de telas desde 1 metro. Estampados, DTF, corte láser y etiquetas. Valencia, Carabobo.",
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
    locale: 'es_VE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sublink | Estampados y Sublimación Textil Venezuela',
    description: 'Personalizamos +40 tipos de telas con tecnología de Sublimación Textil Continua. Desde 1 metro. Valencia, Venezuela.',
    images: [`${SUBLINK_URL}/opengraph-image.jpg`],
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
    '@id': `${SUBLINK_URL}/#localbusiness`,
    parentOrganization: { '@id': `${SUBLINK_URL}/#organization` },
    name: 'Sublink Company',
    alternateName: 'Sublink Sublimación Textil',
    url: SUBLINK_URL,
    hasMap: MAPS_PLACE_URL,
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
      latitude: 10.209055,
      longitude: -68.010026,
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

  // Organization schema — entidad de marca (nombre legal, logo, redes y contacto) para el Knowledge Graph.
  const orgJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${SUBLINK_URL}/#organization`,
    name: 'Sublink Company',
    legalName: 'Sublink C.A.',
    alternateName: 'Sublink Sublimación Textil',
    url: SUBLINK_URL,
    logo: {
      '@type': 'ImageObject',
      url: `${SUBLINK_URL}/logo-sublink.png`,
      width: 425,
      height: 98,
    },
    image: `${SUBLINK_URL}/opengraph-image.jpg`,
    description: 'Sublimación textil continua, DTF, corte láser y telas ecológicas en Valencia, Venezuela.',
    email: 'sublinkve@gmail.com',
    telephone: '+58-424-4067274',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. 137, CC Imperial II 3-08, Piso 3',
      addressLocality: 'Valencia',
      addressRegion: 'Carabobo',
      addressCountry: 'VE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+58-424-4067274',
      contactType: 'sales',
      areaServed: 'VE',
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
    name: 'Textiles sostenibles',
    description: 'Video sobre textiles sostenibles del canal Telas Lafayette.',
    thumbnailUrl: 'https://i.ytimg.com/vi/Yv-IqBSyaR0/hqdefault.jpg',
    uploadDate: '2025-07-07',
    embedUrl: 'https://www.youtube.com/embed/Yv-IqBSyaR0',
    url: 'https://www.youtube.com/watch?v=Yv-IqBSyaR0',
    creator: { '@type': 'Organization', name: 'Telas Lafayette' },
  };

  // FAQPage schema — las preguntas más buscadas sobre sublimación textil en Venezuela.
  // Google muestra estas respuestas como rich snippets expandibles en la SERP (alto CTR).
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ_ITEMS.map((item) => ({
      '@type': 'Question',
      name: item.q,
      acceptedAnswer: { '@type': 'Answer', text: item.a },
    })),
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
        {/* Microsoft Clarity — carga diferida: no bloquea el render ni compite con el LCP */}
        <Script
          id="ms-clarity"
          strategy="lazyOnload"
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){
  c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
  t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
  y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
})(window, document, "clarity", "script", "wa7dky6252");`,
          }}
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

        {/* ── Botón WhatsApp flotante — solo mobile (lg: lo cubre MiniPop) ── */}
        <WhatsAppLink
          message="Hola Sublink, vengo de la web 👋"
          source="chat-flotante"
          aria-label="Contactar por WhatsApp"
          className="fixed bottom-4 left-4 z-40 lg:hidden flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#1ebe5a] text-white rounded-full shadow-lg shadow-green-900/40 transition-all duration-200 hover:scale-110 active:scale-95"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
        </WhatsAppLink>

        <AdsAttribution />
        <Analytics />
        <GoogleAnalytics gaId="G-FQ4RY25W5X" />
      </body>
    </html>
  );
}
