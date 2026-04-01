import Image from 'next/image';
import Link from 'next/link';

export const InteractiveImage = () => {

    return (
        <div className="w-full m-auto">
            <div className="relative max-w-full h-full top-0 hidden md:block">
                <Image src="/img/imagen-interactiva-final.webp" width={1920} height={830} alt="Imagen de chica en una sala con objectos flotantes y la playa de fondo" />
                <div className="item cojin z-50" style={{ top: '75%', left: '30%' }}>
                    <Link href="/telas/telas-ecologicas/toalla-microfibra">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela de Toalla</h3>
                        </div>
                    </Link>
                </div>
                <div className="item cojin" style={{ top: '64%', left: '25%' }}>
                    <Link href="/telas/telas-importadas/lycra-lafayette">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela traje de baño</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '30%', left: '90%' }}>
                    <Link href="/telas/telas-nacionales/microfibra-nacional">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela cortina</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '77%', left: '68%' }}>
                    <Link href="/telas/telas-importadas/loneta-soft">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela para muebles</h3>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="relative max-w-full h-full top-0 block md:hidden">
                <Image src="/img/imagen-interactiva-final-mobile.webp" width={950} height={980} alt="Imagen de sala con objectos flotantes" />
                <div className="item cojin z-40" style={{ top: '54%', left: '48%' }}>
                    <Link href="/telas/telas-ecologicas/toalla-microfibra">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela de Toalla</h3>
                        </div>
                    </Link>
                </div>
                <div className="item cojin" style={{ top: '45%', left: '43%' }}>
                    <Link href="/telas/telas-importadas/lycra-lafayette">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela traje de baño</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo" style={{ top: '30%', left: '80%' }}>
                    <Link href="/telas/telas-nacionales/microfibra-nacional">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela cortina</h3>
                        </div>
                    </Link>
                </div>
                <div className="item trapo z-50" style={{ top: '77%', left: '68%' }}>
                    <Link href="/telas/telas-importadas/loneta-soft">
                        <div className="icon w-8 h-8 rounded-full opacity-70 border-2 border-zinc-50" />
                        <div className="tooltip text-lg">
                            <h3 className="text-primary">Tela para muebles</h3>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
