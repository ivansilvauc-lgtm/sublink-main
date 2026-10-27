import Image from 'next/image';
import Link from 'next/link';

export const InteractiveImage = () => {

    return (
        <div className="w-full m-auto">
            <div className="relative w-full h-full top-0 hidden md:block">
                <Image src="/img/imagen-interactiva-final.webp" width={1920} height={830} alt="Imagen de chica en una sala con objectos flotantes y la playa de fondo" className="w-full h-auto" sizes="100vw" />
                {/* Overlay texto -- arriba centrado */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-[2.5cm] z-20 pointer-events-none">
                    <span className="inline-block bg-[#157ec2]/10 text-[#157ec2] text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full"
                        style={{ textShadow: 'none', backdropFilter: 'blur(2px)', background: 'rgba(255,255,255,0.7)' }}>
                        Telas Interactivas
                    </span>
                </div>
                <div className="item cojin z-50" style={{ top: '75%', left: '30%' }}>
                    <Link href="/telas/telas-ecologicas/toalla-microfibra">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela de Toalla</p>
                        </div>
                    </Link>
                </div>
                <div className="item cojin" style={{ top: '64%', left: '25%' }}>
                    <Link href="/telas/telas-importadas/lycra-lafayette">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela traje de bano</p>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '30%', left: '90%' }}>
                    <Link href="/telas/telas-nacionales/microfibra-nacional">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela cortina</p>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '77%', left: '68%' }}>
                    <Link href="/telas/telas-importadas/loneta-soft">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela para muebles</p>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="relative max-w-full h-full top-0 block md:hidden">
                <Image src="/img/imagen-interactiva-final-mobile.webp" width={950} height={980} alt="Imagen de sala con objectos flotantes" sizes="100vw" priority />
                {/* Overlay texto -- arriba centrado -- mobile */}
                <div className="absolute inset-0 flex flex-col items-center justify-start pt-[1.5cm] z-20 pointer-events-none">
                    <span className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full"
                        style={{ background: 'rgba(255,255,255,0.7)', color: '#157ec2' }}>
                        Telas Interactivas
                    </span>
                </div>
                <div className="item cojin z-40" style={{ top: '54%', left: '48%' }}>
                    <Link href="/telas/telas-ecologicas/toalla-microfibra">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela de Toalla</p>
                        </div>
                    </Link>
                </div>
                <div className="item cojin" style={{ top: '45%', left: '43%' }}>
                    <Link href="/telas/telas-importadas/lycra-lafayette">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela traje de bano</p>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '30%', left: '80%' }}>
                    <Link href="/telas/telas-nacionales/microfibra-nacional">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela cortina</p>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '62%', left: '68%' }}>
                    <Link href="/telas/telas-importadas/loneta-soft">
                        <div className="icon w-[25px] h-[25px] rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <p className="text-primary">Tela para muebles</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
};
