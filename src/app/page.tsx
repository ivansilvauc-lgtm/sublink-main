import { Counter } from "@/components/Counter/Counter";
import { Estampacion } from "@/components/Estampacion/Estampacion";
import { LogoCarousel } from "@/components/Logos/LogoCarousel";
import { Ofrecemos } from "@/components/Ofrecemos/Ofrecemos";
import { Slider } from "@/components/Slider/Slider";
import { VideoReciclar } from "@/components/VideoReciclar/VideoReciclar";
import { PrintOnDemandSection } from "@/components/PrintOnDemand/PrintOnDemand";
import { GoogleReviewsBadge } from "@/components/UI/GoogleReviews";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Slider />
      <Ofrecemos />

      {/* Google Reviews badge */}
      <div className="w-full flex justify-center py-6 bg-gray-50">
        <GoogleReviewsBadge />
      </div>

      <VideoReciclar />
      <PrintOnDemandSection />
      <Estampacion />
      <Counter />
      <LogoCarousel />
    </main>
  );
}
