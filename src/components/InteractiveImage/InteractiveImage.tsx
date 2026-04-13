import Image from 'next/image';
import Link from 'next/link';

export const InteractiveImage = () => {

    return (
        <div className="w-full m-auto">
            <div className="relative max-w-full h-full top-0 hidden md:block">
                <Image src="/img/imagen-interactiva-final.webp" width={1920} height={830} alt="Imagen de chica en una sala con objectos flotantes y la playa de fondo" />
                {/* Overlay texto -- arriba centrado */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-[2.5cm] z-20 pointer-events-none">
                    <span className="inline-block bg-[#157ec2]/10 text-[#157ec2] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3"
                        style={{ textShadow: 'none', backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.7)' }}>
                        Telas Interactivas
                    </span>
                    <p className="text-center font-bold text-4xl sm:text-5xl text-[#157ec2] tracking-tight px-4 leading-tight"
                        style={{ textShadow: '0 2px 16px rgba(255,255,255,0.98), 0 0 30px rgba(255,255,255,0.9)' }}>
                        ¿Haz click en las telas<br />de las imágenes?
                    </p>
                    <svg className="w-10 h-10 mt-4 text-[#157ec2] animate-bounce"
                        style={{ filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.9))' }}
                        fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="item cojin z-50" style={{ top: '75%', left: '30%' }}>
                    <Link href="/telas/telas-ecologicas/toalla-microfibra">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela de Toalla</h3>
                        </div>
                    </Link>
                </div>
                <div className="item cojin" style={{ top: '64%', left: '25%' }}>
                    <Link href="/telas/telas-importadas/lycra-lafayette">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela traje de bano</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '30%', left: '90%' }}>
                    <Link href="/telas/telas-nacionales/microfibra-nacional">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela cortina</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '77%', left: '68%' }}>
                    <Link href="/telas/telas-importadas/loneta-soft">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela para muebles</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="relative max-w-full h-full top-0 block md:hidden">
                <Image src="/img/imagen-interactiva-final-mobile.webp" width={950} height={980} alt="Imagen de sala con objectos flotantes" priority />
                {/* Overlay texto -- arriba centrado -- mobile */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-[1.5cm] z-20 pointer-events-none">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-2"
                        style={{ background: 'rgba(255,255,255,0.7)', color: '#157ec2' }}>
                        Telas Interactivas
                    </span>
                    <p className="text-center font-bold text-2xl text-[#157ec2] tracking-tight px-4 leading-tight"
                        style={{ textShadow: '0 2px 16px rgba(255,255,255,0.98), 0 0 30px rgba(255,255,255,0.9)' }}>
                        ¿Haz click en las telas<br />de las imágenes?
                    </p>
                    <svg className="w-8 h-8 mt-2 text-[#157ec2] animate-bounce"
                        style={{ filter: 'drop-shadow(0 2px 8px rgba(255,255,255,0.9))' }}
                        fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                </div>
                <div className="item cojin z-40" style={{ top: '54%', left: '48%' }}>
                    <Link href="/telas/telas-ecologicas/toalla-microfibra">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela de Toalla</h3>
                        </div>
                    </Link>
                </div>
                <div className="item cojin" style={{ top: '45%', left: '43%' }}>
                    <Link href="/telas/telas-importadas/lycra-lafayette">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela traje de bano</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '30%', left: '80%' }}>
                    <Link href="/telas/telas-nacionales/microfibra-nacional">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela cortina</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '62%', left: '68%' }}>
                    <Link href="/telas/telas-importadas/loneta-soft">
                        <div className="icon w-5 h-5 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela para muebles</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
