import { Counter } from "@/components/Counter/Counter";
import { Estampacion } from "@/components/Estampacion/Estampacion";
import { LogoCarousel } from "@/components/Logos/LogoCarousel";
import { Ofrecemos } from "@/components/Ofrecemos/Ofrecemos";
import { IconBar } from "@/components/Ofrecemos/IconBar";
import { Slider } from "@/components/Slider/Slider";
import { VideoReciclar } from "@/components/VideoReciclar/VideoReciclar";
import { PrintOnDemandSection } from "@/components/PrintOnDemand/PrintOnDemand";
import { GoogleReviewsBadgeAuto } from "@/components/UI/GoogleReviewsServer";
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

      {/* Google Reviews — se actualiza automáticamente cada hora */}
      <div className="w-full flex justify-center py-8 bg-gray-50 border-t border-gray-100">
        <GoogleReviewsBadgeAuto />
      </div>
    </main>
  );
}
