import { Counter } from "@/components/Counter/Counter";
import { Estampacion } from "@/components/Estampacion/Estampacion";
import { LogoCarousel } from "@/components/Logos/LogoCarousel";
import { Ofrecemos } from "@/components/Ofrecemos/Ofrecemos";
import { Slider } from "@/components/Slider/Slider";
import { VideoReciclar } from "@/components/VideoReciclar/VideoReciclar";

export default function Home() {

  return (
    <main className="flex flex-col items-center justify-between">
      <Slider />
      <Ofrecemos/>
      <VideoReciclar />
      <Estampacion />
      <Counter />
      <LogoCarousel/>
    </main>
  );
}
