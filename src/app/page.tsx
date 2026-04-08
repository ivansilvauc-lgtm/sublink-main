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

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      {/* H1 semántico para SEO — texto visible pero integrado al diseño */}
      <h1 className="w-full text-center text-sm font-medium text-zinc-500 px-4 pt-[72px] pb-1 tracking-wide">
        Sublimación Textil y Telas en Venezuela — Sublink Company, Valencia
      </h1>
      <Slider />

      {/* Barra de íconos: Desde 1m, Producción rápida, Diferentes telas, Tela ecológica */}
      <IconBar />

      {/* ¿Qué vas a confeccionar? */}
      <FabricSelector />

      <PrintOnDemandSection />
      <Estampacion />
      <Ofrecemos />
      <VideoReciclar />

      {/* Barra azul con contadores — justo antes de Clientes */}
      <Counter />

      <LogoCarousel />

      {/* Google Reviews carousel — actualiza RESENAS en ReviewsCarousel.tsx */}
      <ReviewsCarousel />
    </main>
  );
}
