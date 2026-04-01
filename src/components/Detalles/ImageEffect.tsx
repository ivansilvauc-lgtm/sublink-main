"use client"

// Import dependencies
import { MouseEvent, TouchEventHandler, useEffect, useState } from 'react';
import Image from 'next/image';

// Constants for magnifier size and zoom level
const MAGNIFIER_SIZE = 180;
const ZOOM_LEVEL = 3;

const BigImageWithFallback = ({ src }: { src: string }) => {
    const [imgSrc, setImgSrc] = useState(src);

    useEffect(() => {
        setImgSrc(src);
    }, [src]);

    return (
        <Image
            width={1200}
            height={1200}
            className="w-full h-full object-cover"
            src={imgSrc}
            alt="Foto de Tela"
            onError={() => {
                setImgSrc("/img/telas/placeholder-tela.png");
            }}
        />
    );
};

const ImageEffect = ({ imgSrc, selectedImage, isEco, isEstampar }: { imgSrc: string, selectedImage: number, isEco: string, isEstampar: string }) => {
    // State variables
    const [zoomable, setZoomable] = useState(true);
    const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
    const [position, setPosition] = useState({ x: 100, y: 100, mouseX: 0, mouseY: 0 });

    const handleMouseEnter = (e: MouseEvent | TouchEvent) => {
        let element = e.currentTarget as Element;
        let { width, height } = element?.getBoundingClientRect();
        setImageSize({ width, height });
        setZoomable(true);
        updatePosition(e);
    };


    const handleMouseLeave = (e: MouseEvent | TouchEvent) => {
        setZoomable(false);
        updatePosition(e);
    };
    const handleTouchMove = (event: TouchEvent) => {
        event.preventDefault();
        event.stopPropagation();
        updatePosition(event);
    };

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
        updatePosition(e);
    };

    const updatePosition = (e: MouseEvent | TouchEvent) => {
        e.preventDefault();
        const { left, top } = (e?.currentTarget as Element)?.getBoundingClientRect();
        let x, y;
        if (e instanceof TouchEvent) {
            x = e.touches[0].clientX - left - MAGNIFIER_SIZE / 2;
            y = e.touches[0].clientY - top - MAGNIFIER_SIZE / 2;
        } else {
            x = e.clientX - left - MAGNIFIER_SIZE / 2;
            y = e.clientY - top - MAGNIFIER_SIZE / 2;
        }
        setPosition({
            x: -x * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            y: -y * ZOOM_LEVEL + (MAGNIFIER_SIZE / 2),
            mouseX: x,
            mouseY: y
        });
    };

    // Render method
    return (
        <div className='flex justify-center items-center w-full h-full relative'>
            <div
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter}
                onMouseMove={handleMouseMove}
                onTouchStart={handleMouseEnter as unknown as TouchEventHandler<HTMLDivElement>}
                onTouchMove={handleTouchMove as unknown as TouchEventHandler<HTMLDivElement>}
                className='w-full h-full relative overflow-hidden'>
                <BigImageWithFallback src={imgSrc} />
                {
                    selectedImage === 0 && (
                        <div
                            style={{
                                backgroundPosition: `${position.x - 280}px ${position.y - 280}px`,
                                backgroundImage: `url("${imgSrc}")`,
                                backgroundSize: `${imageSize.width * ZOOM_LEVEL}px ${imageSize.height * ZOOM_LEVEL}px`,
                                backgroundRepeat: 'no-repeat',
                                display: zoomable ? 'block' : 'none',
                                zIndex: 2,
                                top: `${position.mouseY}px`,
                                left: `${position.mouseX}px`,
                                width: `${MAGNIFIER_SIZE}px`,
                                height: `${MAGNIFIER_SIZE}px`,
                            }}
                            className={`z-50 border-4 rounded-full pointer-events-none absolute border-gray-400 drop-shadow-xl`}
                        />
                    )
                }
            </div>
            <div className="absolute top-4 right-4">
                <Image src="/assets/iconos-textiles/tela-ecologica.webp" width={150} height={150} alt="Icono de reciclaje" className={`${isEco === "Si" ? "block" : "hidden"} w-20`} />
                <Image src="/assets/iconos-textiles/estampar.webp" width={150} height={150} alt="Icono de reciclaje" className={`${isEstampar === "Si" ? "block" : "hidden"} w-20 mt-2`} />
            </div>
        </div>
    );
};

export default ImageEffect;