import { telas } from "@/lib/telas";
import { Top } from "./Top"
import { Navbar } from "./Navbar";
import { servicios } from "@/lib/servicios";

export const Header = () => {

  return (
    <header className="fixed top-0 z-50 max-w-[1920px] w-full">
      <Top text={""}/>
      <Navbar telas={telas} servicios={servicios}/>
    </header>
  );
}

