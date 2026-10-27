import { Counter } from "@/components/Counter/Counter";
import { Estampacion } from "@/components/Estampacion/Estampacion";
import { LogoCarousel } from "@/components/Logos/LogoCarousel";
import { Ofrecemos } from "@/components/Ofrecemos/Ofrecemos";
import { IconBar } from "@/components/Ofrecemos/IconBar";
import { Slider } from "@/components/Slider/Slider";
import { VideoReciclar } from "@/components/VideoReciclar/VideoReciclar";
import { PrintOnDemandSection } from "@/components/PrintOnDemand/PrintOnDemand";
import { ReviewsCarousel } from "@/components/UI/ReviewsCarousel";
import { FabricSelector } from "@/components/FabricSelector/FabricSelector";
import { HomeEnlaces } from "@/components/UI/HomeEnlaces";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Slider />

      {/* H1 SEO — centrado, limpio */}
      <div className="w-full bg-zinc-50 border-b border-zinc-200 py-3 px-4">
        <h1 className="text-sm font-medium text-zinc-500 text-center leading-snug">
          Sublimación Textil y Telas en Venezuela — <span className="font-bold text-primary">Sublink Company</span>, Valencia
        </h1>
      </div>

      {/* Barra de íconos: Desde 1m, Producción rápida, Diferentes telas, Tela ecológica */}
      <IconBar />

      {/* ¿Qué vas a confeccionar? */}
      <FabricSelector />

      <PrintOnDemandSection />
      <Estampacion />
      <Ofrecemos />
      <HomeEnlaces />
      <VideoReciclar />

      {/* Barra azul con contadores — justo antes de Clientes */}
      <Counter />

      <LogoCarousel />

      {/* Google Reviews carousel — actualiza RESENAS en ReviewsCarousel.tsx */}
      <ReviewsCarousel />
    </main>
  );
}
