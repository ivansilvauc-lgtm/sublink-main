"use client"
import { useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"

export const Counter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="w-full py-6 sm:py-5 bg-primary">
            <div className="flex flex-row items-center justify-evenly gap-2 px-2">
                <div className="flex flex-col items-center justify-center">
                    <p className="text-xl sm:text-2xl lg:text-4xl text-zinc-50 font-bold leading-tight">
                        {isInView ? <CountUp end={15} duration={2.75} prefix="+ " suffix=" años" /> : 0}
                    </p>
                    <p className="text-zinc-50 text-xs sm:text-base text-center">Experiencia</p>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="flex flex-col items-center justify-center">
                    <p className="text-zinc-50 text-xs sm:text-base">Estampamos</p>
                    <p className="text-xl sm:text-2xl lg:text-4xl text-zinc-50 font-bold leading-tight">
                        {isInView ? <CountUp end={60000} duration={2.75} suffix=" mts" /> : '0 mt'}
                    </p>
                    <p className="text-zinc-50 text-xs sm:text-base">al Año</p>
                </div>
                <div className="w-px h-12 bg-white/30" />
                <div className="flex flex-col items-center justify-center">
                    <p className="text-zinc-50 text-xs sm:text-base">Más de</p>
                    <p className="text-xl sm:text-2xl lg:text-4xl text-zinc-50 font-bold leading-tight">
                        {isInView ? <CountUp end={25} duration={2.75} /> : '0'}
                    </p>
                    <p className="text-zinc-50 text-xs sm:text-base text-center">Telas Blancas</p>
                </div>
            </div>
        </section>
    )
}