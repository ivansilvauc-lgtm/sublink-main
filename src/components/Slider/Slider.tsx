import { InteractiveImage } from "../InteractiveImage/InteractiveImage";

// Carousel eliminado — solo hay 1 slide, no tiene sentido cargar la librería de flowbite.
// Si se agregan más slides en el futuro, restaurar el <Carousel> wrapper.
export const Slider = () => {
    return (
        <div className="w-full mt-14">
            <InteractiveImage />
        </div>
    );
}


/* <div key={"slider1"} className="w-full h-full top-0 translate-y-0 relative">
    <Image
        src={banner.acf['imagen-desktop']}
        alt={banner.acf['imagen-desktop']}
        width={1920}
        height={830}
        className="w-full h-auto rounded-none object-contain" />
</div> */