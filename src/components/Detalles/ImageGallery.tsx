"use client"
import { Dispatch, SetStateAction, useMemo, useState } from 'react';
import Image from 'next/image';
import ImageEffect from './ImageEffect';

function imageFiller(imagen_zoom: string, images: string[]) {
    return Array.from({ length: 5 }, (_, i) => i + 1).map((item) => {
        if (item === 1) return imagen_zoom;
        return images[item - 2] || "/img/telas/placeholder-tela.png";
    });
}

const ImageWithFallback = (props: { position: number, [x: string]: any; src: any; fallbackSrc: any; setSelectedImage: Dispatch<SetStateAction<number>>; }) => {
    const { position, src, fallbackSrc, setSelectedImage, ...rest } = props;
    const [imgSrc, setImgSrc] = useState(src);

    return (
        <Image
            width={150}
            height={150}
            className="w-full h-full cursor-pointer object-cover rounded-md sm:min-w-[75px]"
            src={imgSrc}
            alt="Foto de Tela"
            onError={() => {
                setImgSrc(fallbackSrc);
            }}
            onClick={() => {
                if(imgSrc !== fallbackSrc) setSelectedImage(position);
            }}
        />
    );
};
export const ImageGallery = ({ imagen_zoom = "/img/telas/placeholder-tela.png", images = [], isEco, isEstampar }: { imagen_zoom?: string, images?: string[], isEco: "Si" | "No", isEstampar: "Si" | "No" }) => {

    const [selectedImage, setSelectedImage] = useState(0);

    const imageList = useMemo(() => {
        return imageFiller(imagen_zoom, images);
    }, [imagen_zoom, images]);

    return (
        <div className="flex flex-col-reverse sm:flex-row gap-2 w-[375px] sm:w-full lg:max-w-lg h-full lg:h-[450px] px-0 sm:px-10 lg:px-0">
            <div className="flex flex-row sm:flex-col gap-1 basis-1/5 h-full px-2 sm:px-0">
                {
                    imageList.map((image, index) => (
                        <div key={index}
                            className={`relative ${index === 0 && "lupa"} w-full ${selectedImage === index ? " rounded-lg outline outline-2 outline-primary" : "p-0"}`}>
                            <ImageWithFallback
                                key={index}
                                position={index}
                                src={image}
                                fallbackSrc={"/img/telas/placeholder-tela.png"}
                                setSelectedImage={setSelectedImage}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="basis-full px-2 sm:px-0">
                <ImageEffect imgSrc={imageList[selectedImage]} selectedImage={selectedImage} isEco={isEco} isEstampar={isEstampar}/>
            </div>
        </div>
    );
};
