"use client"
import Image from "next/image"

export const Footer = () => {
    return (
        <footer className="footer-bg w-full px-2 sm:px-10 py-10">
            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center sm:justify-between gap-10 lg:gap-0">
                <ul className="text-base sm:text-xs md:text-sm xl:text-base text-zinc-50 flex flex-col sm:flex-row lg:flex-col justify-between w-full lg:w-fit">
                    <li className="flex flex-row justify-center sm:justify-start items-start gap-2">
                        <Image src="/assets/localization.svg" width={45} height={45} alt="Icono de localizacion" className="w-8 xl:w-10"/>
                        <div>
                            <p>Av. 137, CC IMPERIAL II 3-08</p>
                            <p>PISO 3 (frente al CC Galeria)</p>
                            <p>Valencia, Carabobo, Venezuela</p>
                            <p>+58 424-4067274</p>
                        </div>
                    </li>
                </ul>
                <div className="flex flex-col items-center gap-3">
                <h3 className="text-zinc-50 text-4xl text-center font-semibold">SUBLINK COMPANY</h3>
                <span className="text-zinc-300 text-2xl cursor-default">Quiénes Somos</span>
                </div>
                <div className="w-full lg:w-fit">
                <ul className="text-zinc-50 text-sm lg:text-lg flex flex-col sm:flex-row lg:flex-col gap-2 lg:gap-5 items-center sm:items-start w-full justify-center sm:justify-between">
                    <li className="flex flex-row items-center gap-2">
                        <Image src="/assets/email.svg" width={40} height={45} alt="Icono de email" className="w-5 sm:w-6 xl:w-10"/>
                        <h4>sublinkve@gmail.com</h4>
                    </li>
                    <li className="flex flex-row items-center gap-2">
                            <Image src="/assets/instagram.svg" width={42} height={45} alt="Icono de email" className="w-5 sm:w-6 xl:w-10"/>
                        <a href="https://www.instagram.com/sublink.ve">
                            <h4>sublink.ve</h4>
                        </a>
                    </li>
                    <li className="flex flex-row items-start gap-2">
                        <Image src="/assets/horario.svg" width={45} height={45} alt="Icono de horario" className="w-5 sm:w-6 xl:w-10"/>
                        <div >
                            <h4>We are open from:</h4>
                            <p className="text-xs sm:text-sm">MON - FRI</p>
                            <p className="text-xs sm:text-sm">8:30 am - 4:30 pm</p>
                        </div>
                    </li>
                </ul>
                </div>
            </div>
        </footer>
    )
}