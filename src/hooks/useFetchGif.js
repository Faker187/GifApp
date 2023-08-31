import { useEffect, useState } from "react";
import { GetGifs } from "../helpers/getGifs"

export const useFetchGif = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    const GetImages = async () =>{
        const newImages = await GetGifs( category );
        setImages( newImages );
        setIsLoading(false)
    }

    useEffect(() => {
        GetImages();
    }, [ ])

    return {
        images, 
        isLoading
    }
    
}
