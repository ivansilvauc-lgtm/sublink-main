"use client"
import { useState } from 'react';
import Image from 'next/image';

export const Calculadora = ({ precio, nombreTela }: { precio: number, nombreTela: string }) => {

    const [total, setTotal] = useState(precio);
    const [metrosTela, setMetrosTela] = useState("");

    const handleTotal = (metros: string) => {
        setMetrosTela(metros);
        setTotal(Number(metros) * precio);
    }
    return (
        <div className="flex flex-col gap-2 mt-10 sm:mt-0 lg:mt-10 w-full ">
            <h2 className="text-[#363636] font-semibold text-xl">Calculadora de precios</h2>
            <div className="flex bg-[#0082c9] text-white p-3 rounded-lg items-start justify-between w-full gap-x-1">
                <div className="self-end">
                    <Image src="/assets/calculadora-simbolo.png" width={20} height={20} alt="Icono de calculadora" />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-xs sm:text-[10px] lg:text-xs">Metros</p>
                    <input type="number" defaultValue={1} min={0} className="w-20 h-8 bg-[#a6f6ff] rounded-lg text-center border-transparent text-zinc-800 font-semibold"
                        onChange={(e) => handleTotal(e.target.value)} />
                </div>
                <div className="flex flex-col items-center justify-center gap-1">
                    <p className="text-xs sm:text-[10px] lg:text-xs">Precio por metros</p>
                    <p className="text-base font-semibold mt-1">${precio}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 w-20">
                    <p className="text-xs sm:text-[10px] lg:text-xs">Monto*</p>
                    <p className="text-base font-semibold mt-1">${total.toLocaleString('en')}</p>
                </div>
            </div>
            <div className="flex flex-row justify-between items-start mt-5 gap-3">
                <p className="text-xs">*Precio basado en el tiempo de producción</p>
                <a href={`https://api.whatsapp.com/send/?phone=584244067274&text=${encodeURIComponent(`¡Hola! Me gustaría comprar ${metrosTela ? `${metrosTela}mts de tela`:"" }: ${nombreTela}`)}&type=phone_number&app_absent=0`} target="_blank" rel="noopener" className="bg-[#0082c9] text-white py-1 px-10 rounded-lg font-semibold">Comprar</a>
            </div>
        </div>
    )
}