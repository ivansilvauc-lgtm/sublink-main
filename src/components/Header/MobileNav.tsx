"use client"
import { useEffect, useState } from 'react'
import type { ITela } from '@/model/tela'
import { MobileLink } from './MobileLink'
import { Scroll } from './Scroll'
import type { IServicios } from '../../lib/servicios';
import { MobileBackButton } from './MobileBackButton'
import Link from 'next/link'


interface MobileNavProps {
    toggleMenu: boolean,
    setToggleMenu: (toggleMenu: boolean) => void,
    telas: ITela[],
    servicios: IServicios[]
}

export const MobileNav = ({ toggleMenu, setToggleMenu, telas, servicios }: MobileNavProps) => {

    const [showLinks, setShowLinks] = useState({
        telas: false,
        eco: false,
        servicios: false,
    });
    const [someShowLinks, setSomeShowLinks] = useState(false);

    useEffect(() => {
        if (someShowLinks) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }

        return () => {
            document.body.style.overflow = '';
        };
    }, [someShowLinks]);

    useEffect(() => {
        if (toggleMenu === false) {
            setShowLinks({
                telas: false,
                eco: false,
                servicios: false,
            });
            setSomeShowLinks(false);
        }
    }, [toggleMenu])

    const handleButtonClick = (linkName: string | null) => {
        setShowLinks({
            telas: linkName === 'telas' ? true : false,
            eco: linkName === 'eco' ? true : false,
            servicios: linkName === 'servicios' ? true : false,
        });
        setSomeShowLinks(linkName !== null)
    };

    const handleItemClick = () => {
        setShowLinks({
            telas: false,
            eco: false,
            servicios: false,

        });
        setToggleMenu(false);
    }

    return (
        <div
            className={`fixed z-40 w-full bg-primary flex flex-col lg:hidden duration-700 ${toggleMenu ? "h-screen" : "h-0"}`}
        >
            <div className={`curved bg-gray-100 ${!someShowLinks ? "h-[70vh]" : "h-full sm:h-[100vh]"} transition-all duration-500 overflow-auto`}>
                {!someShowLinks && (
                    <ul className={`flex flex-col gap-6 font-bold tracking-wider items-center mt-10 sm:mt-20 ${someShowLinks ? 'fadeInDown' : 'fadeInUp'}`}>
                         <li className="flex justify-center px-5 py-3">
                            <Link href="/" onClick={() => setToggleMenu(false)} className="text-gray-700 hover:text-gray-800 text-2xl">
                                <p className="antialiased">INICIO</p>
                            </Link>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick("telas")} className="text-gray-700 hover:text-gray-800 text-2xl px-5 py-3">
                                <p className="antialiased">TELAS</p>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick("eco")} className="text-gray-700 hover:text-gray-800 text-2xl px-5 py-3">
                                <p className="antialiased">TELAS ECO</p>
                            </button>
                        </li>
                        <li>
                            <button onClick={() => handleButtonClick("servicios")} className="text-gray-700 hover:text-gray-800 text-2xl px-5 py-3">
                                <p className="antialiased">SERVICIOS</p>
                            </button>
                        </li>
                        <li className="flex justify-center px-5 py-3">
                            <Link href="/sostenibilidad" onClick={() => setToggleMenu(false)} className="text-[#4ec437] hover:text-gray-800 text-2xl">
                                <p className="antialiased">SOSTENIBILIDAD</p>
                            </Link>
                        </li>
                        <li className="flex justify-center px-5 py-3">
                            <Link href="/blog" onClick={() => setToggleMenu(false)} className="text-white hover:text-blue-400 text-2xl">
                                <p className="antialiased">BLOG</p>
                            </Link>
                        </li>
                        <li className="flex justify-center items-center gap-2 px-5 py-3 opacity-50">
                            <p className="antialiased text-gray-400 text-2xl cursor-not-allowed select-none">MEMBERSHIP</p>
                            <span className="text-[10px] font-bold uppercase bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full tracking-wide">Pronto</span>
                        </li>
                    </ul>
                )}
                {
                    showLinks.telas && (
                        <div className="transition-opacity h-full duration-500 opacity-100 animate-slideInFromLeft">
                            <div className="flex flex-col sm:flex-row justify-center items-start gap-y-2 pb-12 mt-4">
                                <MobileBackButton handleButtonClick={handleButtonClick} />
                                <div className="flex flex-col h-full mt-20 w-full px-2">
                                    <div className="bg-primary text-white text-center w-full mb-3 px-4 py-1 rounded-md shadow-md">
                                        <h3 className="font-semibold text-lg">Telas Nacionales</h3>
                                    </div>
                                    <ul className={`pl-5 flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 w-full`}>
                                        {
                                            telas.filter(tela => tela.categoria_slug === "telas-nacionales").map((tela) => (
                                                <MobileLink key={tela.slug} path={`telas/${tela.categoria_slug}`} slug={tela.slug} label={tela.nombre} handleItemClick={handleItemClick} />
                                            ))
                                        }
                                    </ul>
                                </div>
                                <div className="flex flex-col h-full mt-6 md:mt-0  w-full px-2">
                                    <div className="bg-primary text-white text-center w-full mb-3 px-4 py-1 rounded-md shadow-md">
                                        <h3 className="font-semibold text-lg ">Telas Importadas</h3>
                                    </div>
                                    <ul className={`pl-5 flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 w-full mb-40`}>
                                        {
                                            telas.filter(tela => tela.categoria_slug === "telas-importadas").map((tela) => (
                                                <MobileLink key={tela.slug} path={`telas/${tela.categoria_slug}`} slug={tela.slug} label={tela.nombre} handleItemClick={handleItemClick} />
                                            ))
                                        }
                                    </ul>
                                </div>
                                {/* <div className="flex flex-col h-full mt-6 md:mt-0 pb-24 w-full px-2">
                                    <div className="bg-primary text-white text-center w-full mb-3 px-4 py-1 rounded-md shadow-md">
                                        <h3 className="font-semibold text-lg ">Telas Especiales</h3>
                                    </div>
                                    <ul className={`pl-5 flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 w-full`}>
                                        {
                                            telas.filter(tela => tela.categoria_slug === "telas-especiales").map((tela) => (
                                                <MobileLink key={tela.slug} path={`telas/${tela.categoria_slug}`} slug={tela.slug} label={tela.nombre} handleItemClick={handleItemClick} />
                                            ))
                                        }
                                    </ul>
                                </div> */}
                            </div>
                            <Scroll />
                        </div>
                    )
                }
                {
                    showLinks.eco && (
                        <div className="transition-opacity h-full duration-500 opacity-100 animate-slideInFromLeft">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 pb-12">
                                <MobileBackButton handleButtonClick={handleButtonClick} />
                                <div className="flex flex-col h-full mt-20 w-full px-2">
                                    <div className="bg-primary text-white text-center mb-3 px-4 py-1 rounded-md shadow-md w-full">
                                        <h3 className="font-semibold text-lg">Telas Ecológicas</h3>
                                    </div>
                                    <ul className={`pl-5 flex flex-col items-start justify-start content-start gap-x-20 gap-y-2 `}>
                                        {
                                            telas.filter(tela => tela.categoria_slug === "telas-ecologicas").map((tela) => (
                                                <MobileLink key={tela.slug} path={`telas/${tela.categoria_slug}`} slug={tela.slug} label={tela.nombre} handleItemClick={handleItemClick} />
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
                {
                    showLinks.servicios && (
                        <div className="transition-opacity h-full duration-500 opacity-100 animate-slideInFromLeft">
                            <div className="flex flex-col sm:flex-row justify-center items-center gap-y-2 pb-12">
                                <MobileBackButton handleButtonClick={handleButtonClick} />
                                <div className="flex flex-col h-full mt-20">
                                    <div className="bg-primary text-white text-center mb-3 px-4 py-1 rounded-md shadow-md w-full">
                                        <h3 className="font-semibold text-lg">Servicios</h3>
                                    </div>
                                    <ul className={`flex flex-col items-start justify-start content-start gap-x-20 gap-y-2`}>
                                        {
                                            servicios.filter(s => s.visible !== false).map((servicio) => (
                                                <MobileLink key={servicio.slug} path={`servicios`} slug={servicio.slug} label={servicio.title} handleItemClick={handleItemClick} />
                                            ))
                                        }
                                        <li className="flex items-center gap-1.5 px-4 py-1">
                                            <span className="text-gray-400 cursor-not-allowed select-none text-sm">Servicio de Costura</span>
                                            <span className="text-[9px] font-bold uppercase bg-gray-200 text-gray-400 px-1.5 py-0.5 rounded-full tracking-wide">Pronto</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* <div className={`bg-primary w-full mt-12 flex justify-center items-center transition-opacity duration-300 ${toggleMenu ? "opacity-100":"opacity-0 h-full"}`}>
                    <div className="">
                        <Image src="/assets/logo-sublink-marca-de-agua.png" alt="logo de sublink en marca de agua" width={45} height={45} />
                    </div>
                </div> */}
        </div>
    )
}

