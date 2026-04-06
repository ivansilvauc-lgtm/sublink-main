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
