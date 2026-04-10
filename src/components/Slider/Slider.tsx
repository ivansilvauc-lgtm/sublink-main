"use client"
import { Carousel } from "flowbite-react/lib/esm/components/Carousel/Carousel";
import { InteractiveImage } from "../InteractiveImage/InteractiveImage";

export const Slider = () => {
    return (
        
        <Carousel pauseOnHover slideInterval={5000}
        className='[&>*:first-child]:rounded-none h-auto w-full mt-14 [&>div]:!static [&>div]:!h-auto'
        indicators={true}
        >
            <InteractiveImage />
        </Carousel>
    )
}


/* <div key={"slider1"} className="w-full h-full top-0 translate-y-0 relative">
    <Image
        src={banner.acf['imagen-desktop']}
        alt={banner.acf['imagen-desktop']}
        width={1920}
        height={830}
        className="w-full h-auto rounded-none object-contain" />
</div> */