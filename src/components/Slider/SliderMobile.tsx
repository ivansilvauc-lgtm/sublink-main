"use client"
import { Carousel } from "flowbite-react/lib/esm/components/Carousel/Carousel";
import { InteractiveImage } from "../InteractiveImage/InteractiveImage";

export const Slider = () => {
    return (
        
        <Carousel pauseOnHover slideInterval={5000} 
        className='[&>*:first-child]:rounded-none h-full w-full mt-20'
        indicators={true}      
        >
            <InteractiveImage />
        </Carousel>
    )
}