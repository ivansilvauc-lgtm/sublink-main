"use client"
import { useInView } from "framer-motion"
import { useRef } from "react"
import CountUp from "react-countup"

export const Counter = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    return (
        <section ref={ref} className="w-full py-5 bg-primary">
            <div className="flex flex-col sm:flex-row items-center sm:items-end justify-evenly space-y-4 sm:space-y-0">
                <div className="flex flex-col items-center justify-center sm:w-[15ch] md:w-[30ch]">
                    <p className="text-2xl lg:text-4xl text-zinc-50 font-bold ">
                        {isInView ? <CountUp end={15} duration={2.75} prefix="+ " suffix=" años" /> : 0}
                    </p>
                    <p className="text-zinc-50">Experiencia</p>
                </div>
                <div className="flex flex-col items-center justify-center sm:w-[20ch] md:w-[30ch]">
                    <p className="text-zinc-50">Estampamos</p>
                    <p className="text-2xl lg:text-4xl text-zinc-50 font-bold">
                        {isInView ? <CountUp end={60000} duration={2.75} suffix=" mts" /> : '0 mt'}
                    </p>
                    <p className="text-zinc-50">Telas al Año</p>
                </div>
                <div className="flex flex-col items-center justify-center sm:w-[20ch] md:w-[30ch]">
                    <p className="text-zinc-50">Más de</p>
                    <p className="text-2xl lg:text-4xl text-zinc-50 font-bold">
                        {isInView ? <CountUp end={25} duration={2.75} /> : '0'}
                    </p>
                    <p className="text-zinc-50">Telas Blancas</p>
                </div>
            </div>
        </section>
    )
}