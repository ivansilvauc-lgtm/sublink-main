"use client"
import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { WhatsAppLink } from '@/components/UI/WhatsAppLink';

export const Calculadora = ({ precio, nombreTela }: { precio: number, nombreTela: string }) => {

    const [total, setTotal] = useState(precio);
    const [metrosTela, setMetrosTela] = useState("");
    const [bsRate, setBsRate] = useState<number | null>(null);
    const [loadingRate, setLoadingRate] = useState(false);

    const fetchBcvRate = useCallback(async () => {
        setLoadingRate(true);
        try {
            // Usa el proxy interno de Vercel para evitar CORS y tener fallback
            const res = await fetch('/api/bcv-rate', { cache: 'no-store' });
            if (!res.ok) throw new Error('proxy down');
            const data = await res.json();
            if (data.rate && data.rate > 0) {
                setBsRate(data.rate);
            } else {
                setBsRate(null);
            }
        } catch {
            setBsRate(null);
        } finally {
            setLoadingRate(false);
        }
    }, []);

    useEffect(() => {
        fetchBcvRate();
    }, [fetchBcvRate]);

    const handleTotal = (metros: string) => {
        setMetrosTela(metros);
        setTotal(Number(metros) * precio);
    }

    const bsTotal = bsRate !== null ? total * bsRate : null;

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
                    <p className="text-xs sm:text-[10px] lg:text-xs">Precio por metro</p>
                    <p className="text-base font-semibold mt-1">€{precio}</p>
                </div>
                <div className="flex flex-col items-center justify-center gap-1 w-20">
                    <p className="text-xs sm:text-[10px] lg:text-xs">Monto*</p>
                    <p className="text-base font-semibold mt-1">€{total.toLocaleString('en')}</p>
                </div>
            </div>

            {/* BCV Euro rate row */}
            <div className="flex items-center justify-between bg-zinc-100 rounded-lg px-3 py-2 mt-1 gap-2">
                <div className="flex items-center gap-2 flex-1">
                    <span className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">Bs (BCV)</span>
                    {bsRate !== null ? (
                        <span className="text-sm font-bold text-zinc-800">
                            Bs {(bsTotal ?? total * bsRate).toLocaleString('es-VE', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}
                        </span>
                    ) : loadingRate ? (
                        <span className="text-xs text-zinc-400 italic">Consultando tasa…</span>
                    ) : (
                        <span className="text-xs text-zinc-400 italic">— tasa no disponible</span>
                    )}
                    {bsRate !== null && (
                        <span className="text-[10px] text-zinc-400">({bsRate.toLocaleString('es-VE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })} Bs/€)</span>
                    )}
                </div>
                <button
                    onClick={fetchBcvRate}
                    disabled={loadingRate}
                    title="Actualizar tasa BCV"
                    className="flex items-center justify-center w-7 h-7 rounded-full bg-[#0082c9] hover:bg-[#006bad] transition-colors disabled:opacity-50 shrink-0"
                    aria-label="Actualizar tasa BCV"
                >
                    <svg
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                        strokeLinecap="round" strokeLinejoin="round"
                        className={`w-3.5 h-3.5 text-white ${loadingRate ? 'animate-spin' : ''}`}
                    >
                        <path d="M23 4v6h-6" />
                        <path d="M1 20v-6h6" />
                        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
                    </svg>
                </button>
            </div>

            <div className="flex flex-row justify-between items-start mt-3 gap-3">
                <p className="text-xs">*Precio basado en el tiempo de producción</p>
                <WhatsAppLink
                    message={`¡Hola! Me gustaría comprar ${metrosTela ? `${metrosTela}mts de tela` : ""}: ${nombreTela}`}
                    source="tela-detalle"
                    className="bg-[#0082c9] text-white py-1 px-10 rounded-lg font-semibold"
                >Comprar</WhatsAppLink>
            </div>
        </div>
    )
}
