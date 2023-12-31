import { useState, useEffect } from "react";
import { GifItem } from "./GifItem";
import { useFetchGif } from "../hooks/useFetchGif";

export const GifCard = ({ category }) => {

    const {images, isLoading } = useFetchGif( category )

    return (
        <>
            <h3>{ category }</h3>
            {
                isLoading && <h2>Cargando...</h2>
            }
            <div className="card-grid">
            { 
                images.map( (image) => (
                    <GifItem 
                        key={ image.id }
                        { ...image }
                    />
                ))
            }
            </div>
        </>
    )
}
