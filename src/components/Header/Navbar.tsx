"use client"
import { useCallback, useEffect, useState } from "react";
import Link from "next/link"
import Image from "next/image"
import NavItemLink from './NavItemLink';
import { Hamburger } from "./Hamburger";
import type { ITela } from "@/model/tela";
import { Button } from "flowbite-react";
import { MobileNav } from "./MobileNav";
import type { IServicios } from "@/lib/servicios";
import ProgressBar from "./ProgressBar";

const NAV_ITEM_KEYS = ['toggleTelas', 'toggleTelasEco', 'toggleServicios'] as const;
type MenuStateKey = typeof NAV_ITEM_KEYS[number];
type NavItem = {
  key: string;
  toggleState: MenuStateKey;
  label: string;
  classNames?: string;
};

type MenuState = {
  toggleTelas: boolean;
  toggleTelasEco: boolean;
  toggleServicios: boolean;
  [key: string]: boolean;
};

const navItems: NavItem[] = [
  { key: "navitem-telas", toggleState: NAV_ITEM_KEYS[0], label: "TELAS" },
  { key: "navitem-telas-eco", toggleState: NAV_ITEM_KEYS[1], label: "TELAS ECO" },
  { key: "navitem-servicios", toggleState: NAV_ITEM_KEYS[2], label: "SERVICIOS" },
];

export const Navbar = ({ telas, servicios }: { telas: ITela[], servicios: IServicios[] }) => {

  const [toggleMenu, setToggleMenu] = useState(false);
  const [someMenuOpen, setSomeMenuOpen] = useState(false);
  const [menuState, setMenuState] = useState({
    toggleTelas: false,
    toggleTelasEco: false,
    toggleServicios: false,
  });

  useEffect(() => {
    setSomeMenuOpen(Object.values(menuState).some((value) => value));
  }, [menuState]);

  // Close menu when user scrolls
  useEffect(() => {
    const handleScroll = () => {
      if (Object.values(menuState).some((v) => v)) {
        resetMenuState();
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [menuState]);

  const resetMenuState = () => {
    setToggleMenu(false);
    setMenuState({
      toggleTelas: false,
      toggleTelasEco: false,
      toggleServicios: false,
    });
  };
  const handleMenuItems = (itemToggle: MenuStateKey) => {
    setMenuState((prevState: MenuState) => {
      return {
        toggleTelas: false,
        toggleTelasEco: false,
        toggleServicios: false,
        [itemToggle]: !prevState[itemToggle],
      }
    });
  }

  const handleNavItemClick = useCallback((toggleState: MenuStateKey) => () => {
    handleMenuItems(toggleState);
  }, []);

  return (
    <>
      <nav className="bg-white shadow-xl relative z-50">
        <div className="mx-auto w-full">
          <div className="flex mx-auto justify-between w-full ">
            {/* Primary menu and logo */}
            <div className={`flex items-center w-full shadow-b-md px-2 sm:px-12 space-x-2 transition-all py-4`}>
              {/* logo */}
              <div>
                <Link
                  href="/"
                  className="flex gap-1 font-bold text-gray-700 items-center "
                >
                  <Image src="/logo-sublink.png" width={425} height={98} alt="Logo de empresa Sublink" priority className="w-32 sm:w-44 h-auto" />
                </Link>
              </div>
              <ul className="hidden lg:flex items-center justify-evenly space-x-2 font-semibold text-lg w-full">
                {navItems.map((item: NavItem) => (
                  <NavItemLink key={item.key} onClick={handleNavItemClick(item.toggleState)} label={item.label} state={menuState[item.toggleState]} classNames={item.classNames} />
                ))}
                <li>
                  <Link className={`antialiased hover:text-lime-400 cursor-pointer text-lime-500`} href={"/sostenibilidad"}>SOSTENIBILIDAD</Link>
                </li>
                <li className="flex items-center gap-1">
                  <span className="antialiased text-gray-400 cursor-not-allowed select-none">BLOG</span>
                  <span className="text-[9px] font-bold uppercase bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full tracking-wide">Pronto</span>
                </li>
                <li className="flex items-center gap-1">
                  <span className="antialiased text-gray-400 cursor-not-allowed select-none">MEMBERSHIP</span>
                  <span className="text-[9px] font-bold uppercase bg-gray-200 text-gray-500 px-1.5 py-0.5 rounded-full tracking-wide">Pronto</span>
                </li>
              </ul>
            </div>
            <div className="flex items-center">
              {/* Mobile navigation toggle */}
              <div className="lg:hidden flex items-center">
                <Button size="sm" color="light" onClick={() => { setToggleMenu(!toggleMenu) }} className="mr-8 p-0! focus:ring-primary">
                  <Hamburger isOpen={toggleMenu} />
                </Button>
              </div>
            </div>
          </div>
        </div>
        {/* mobile navigation */}
        <MobileNav toggleMenu={toggleMenu} telas={telas} servicios={servicios} setToggleMenu={setToggleMenu} />
        <ProgressBar />
      </nav>
      {
        (
          <div className={`bg-zinc-50 shadow-md px-12 relative ${menuState.toggleTelas ? "py-6 border-t-2 border-t-primary opacity-100" : "h-0 opacity-0 pointer-events-none"} transition-all z-20`}>
            <div className="flex flex-col h-[660px] 2xl:h-[345px] flex-wrap content-around">
              <div className="flex flex-col h-full">
                <div className="py-4 flex items-center justify-start gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#157ec2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                  </svg>
                  <h3 className="font-semibold text-lg ">Telas Nacionales</h3>
                </div>
                <ul className={`flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 flex-wrap h-[calc(80%)]`}>
                  {
                    telas.filter(tela => tela.categoria_slug === "telas-nacionales").map((tela) => (
                      <li key={tela.slug} >
                        <Link href={`/telas/${tela.categoria_slug}/${tela.slug}`} onClick={() => handleMenuItems("toggleTelas")} className="text-gray-900 hover:text-primary">{tela.nombre}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
              <div className="flex flex-col h-full">
                <div className="py-4 flex items-center justify-start gap-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#157ec2" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                    <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
                  </svg>
                  <h3 className="font-semibold text-lg ">Telas Importadas</h3>
                </div>
                <ul className={`flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 flex-wrap h-[calc(80%)]`}>
                  {
                    telas.filter(tela => tela.categoria_slug === "telas-importadas").map((tela) => (
                      <li key={tela.slug} >
                        <Link href={`/telas/${tela.categoria_slug}/${tela.slug}`} onClick={() => handleMenuItems("toggleTelas")} className="text-gray-900 hover:text-primary">{tela.nombre}</Link>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
            <div className="absolute bottom-5 right-5">
              <Image src="/assets/logo-sublink-marca-de-agua.png" alt="logo de sublink en marca de agua" width={45} height={45} />
            </div>
          </div>
        )
      }
      {
        (
          <div className={`bg-zinc-50 shadow-md w-full relative ${menuState.toggleTelasEco ? "h-[270px] border-t-2 border-t-primary opacity-100" : "h-0 opacity-0 pointer-events-none"} transition-all z-20`}>
            <div className="px-24 py-4 flex items-center justify-start gap-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#157ec2" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
                <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05" />
              </svg>
              <h3 className="font-semibold text-lg ">Telas Ecológicas</h3>
            </div>
            <ul className={`flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 px-32 flex-wrap h-40`}>
              {
                telas.filter(tela => tela.categoria_slug === "telas-ecologicas").map((tela) => (
                  <li key={tela.slug} >
                    <Link href={`/telas/telas-ecologicas/${tela.slug}`} onClick={() => handleMenuItems("toggleTelasEco")} className="text-gray-900 hover:text-primary">{tela.nombre}</Link>
                  </li>
                ))
              }
            </ul>
            <div className="absolute bottom-5 right-5">
              <Image src="/assets/logo-sublink-marca-de-agua.png" alt="logo de sublink en marca de agua" width={45} height={45} />
            </div>
          </div>
        )
      }
      {
        (
          <div className={`bg-zinc-50 shadow-md relative ${menuState.toggleServicios ? "py-5 border-t-2 border-t-primary opacity-100" : "h-0 opacity-0 pointer-events-none"} transition-all z-20`}>
            <ul className={`flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 px-32 py-6 flex-wrap h-full`}>
              <li >
                <Link href={`/servicios/sublimacion-textil-a-gran-formato`} onClick={() => handleMenuItems("toggleServicios")} className="text-gray-900 hover:text-primary">Sublimación a GRAN Formato</Link>
              </li>
              <li >
                <Link href={`/servicios/dtf-para-marquillas-laser-toner`} onClick={() => handleMenuItems("toggleServicios")} className="text-gray-900 hover:text-primary">DTF para marquillas LÁSER TONER</Link>
              </li>
              <li >
                <Link href={`/servicios/dtf-industrial-continuo`} onClick={() => handleMenuItems("toggleServicios")} className="text-gray-900 hover:text-primary">DTF Industrial Continuo</Link>
              </li>
              <li >
                <Link href={`/servicios/corte-laser-textil`} onClick={() => handleMenuItems("toggleServicios")} className="text-gray-900 hover:text-primary">Corte Láser Textil</Link>
              </li>
              <li >
                <Link href={`/servicios/etiquetas-nylon-y-silicon-monocromaticas`} onClick={() => handleMenuItems("toggleServicios")} className="text-gray-900 hover:text-primary">Etiquetas Nylon y Silicon Monocromáticas (Resina Negra)</Link>
              </li>
              <li >
                <Link href={`/servicios/vinil-textil`} onClick={() => handleMenuItems("toggleServicios")} className="text-gray-900 hover:text-primary">Vinil Textil</Link>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="text-gray-400 cursor-not-allowed select-none">Servicio de Costura</span>
                <span className="text-[9px] font-bold uppercase bg-gray-200 text-gray-400 px-1.5 py-0.5 rounded-full tracking-wide">Pronto</span>
              </li>
            </ul>
            <div className="absolute bottom-5 right-5">
              <Image src="/assets/logo-sublink-marca-de-agua.png" alt="logo de sublink en marca de agua" width={45} height={45} />
            </div>
          </div>
        )
      }
      {
        someMenuOpen && (
          <div className="fixed hidden lg:block inset-0 w-full h-full bg-primary/80 z-10 cursor-pointer" style={{top: '0'}} onClick={() => resetMenuState()}>
            <div className='ripple-background'>
              <div className='circle xxlarge shade1'></div>
              <div className='circle xlarge shade2'></div>
              <div className='circle large shade3'></div>
              <div className='circle mediun shade4'></div>
              <div className='circle small shade5'></div>
            </div>
            <div className="patterns">
              <svg width="100%" height="100%">
                <text x="50%" y="60%" textAnchor="middle"  >
                  Sublink
                </text>
              </svg>
            </div>
          </div>
        )
      }
    </>
  )
}