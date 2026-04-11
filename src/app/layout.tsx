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
      <head>
        {/* VWO Smart Code — reemplazar XXXXXX con tu Account ID de vwo.com */}
        <script
          type="text/javascript"
          id="vwoCode"
          dangerouslySetInnerHTML={{
            __html: `
window._vwo_code || (function() {
  var account_id=XXXXXX,
  version=2.1,
  settings_tolerance=2000,
  hide_element='body',
  hide_element_style='opacity:0 !important;filter:alpha(opacity=0) !important;background:none !important;transition:none !important;',
  /* DO NOT EDIT BELOW THIS LINE */
  f=false,w=window,d=document,v=d.querySelector('#vwoCode'),cK='_vwo_'+account_id+'_settings',cc={};try{var c=JSON.parse(localStorage.getItem('_vwo_'+account_id+'_config'));cc=c&&typeof c==='object'?c:{}}catch(e){}var stT=cc.stT==='session'?w.sessionStorage:w.localStorage;code={nonce:v&&v.nonce,use_existing_jquery:function(){return typeof use_existing_jquery!=='undefined'?use_existing_jquery:undefined},library_tolerance:function(){return typeof library_tolerance!=='undefined'?library_tolerance:undefined},settings_tolerance:function(){return cc.sT||settings_tolerance},hide_element_style:function(){return'{'+(cc.hES||hide_element_style)+'}'},hide_element:function(){if(performance.getEntriesByType('navigation')[0].entryType==='back_forward'){var r=!0,u=!1;return{src:r,hMB:u}}return cc.hE||hide_element},getVersion:function(){return version},getMatchedCookies:function(e){var t=[];if(document.cookie){t=document.cookie.split(';').filter(function(n){return n.match(e)})}return t},getCombinationCookie:function(){var e=code.getMatchedCookies(/(?:^|;)\\s?(_vis_opt_exp_\\d+_combi=[^;$]*)/gi);var t=e.map(function(n){try{return JSON.parse(decodeURIComponent(n.trim().split('=').slice(1).join('=')))}catch(e){}}).filter(Boolean);return Object.assign.apply(Object,[{}].concat(t))},launchSurvey:function(){if(d.getElementById('vwo-survey-widget')){return}var e=d.createElement('div');e.id='vwo-survey-widget';d.documentElement.appendChild(e)},isMobile:function(){return/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)},getMetaData:function(e){var t='',n=d.querySelectorAll('meta');for(var i=0;i<n.length;i++){if(n[i].getAttribute('name')===e){t=n[i].getAttribute('content');break}}return t},onUserAgent:function(t){if(t.method==='STUB'){var e=[];return{getItem:function(n){return e[n]||null},setItem:function(n,r){e[n]=r},removeItem:function(n){delete e[n]}}}else{return w[t.method+'Storage']}},getFirstParsedUrl:function(){var e=w.location.href;return e},getQueryParams:function(){var e={};w.location.search.substring(1).split('&').forEach(function(n){var r=n.split('=');if(r.length===2){e[decodeURIComponent(r[0])]=decodeURIComponent(r[1])}});return e}};w._vwo_settings_timer=setTimeout(function(){w.VWO&&VWO.caE&&(VWO.caE('settingsError'),w._vwo_settings_timer&&clearTimeout(w._vwo_settings_timer))},code.settings_tolerance());var r,e=d.createElement('script');e.src='https://dev.visualwebsiteoptimizer.com/j.php?a='+account_id+'&domain='+w.location.hostname+'&n=t&rnd='+Math.random();e.setAttribute('nonce',(v&&v.nonce)||'');e.addEventListener('error',function(){w._vwo_code.finished(8)});e.addEventListener('load',function(){if(!w._vwo_loaded){w._vwo_code.finished(7)}});var t=d.getElementsByTagName('head')[0];t.insertBefore(e,t.firstChild);return code}());
            `,
          }}
        />
      </head>
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
