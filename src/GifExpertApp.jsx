import { useState } from "react";
import { AddCategory, GifCard } from "./components";


export const GifExpertApp = () => {

    const [categories, setCategories] = useState(["One piece"])

    const onAddCategory = ( NewCategory ) => {
        
        if( categories.includes( NewCategory ) ) return;

        setCategories( [NewCategory, ...categories] );
    }

    return (
        <>
            <h1>Search Gif App</h1>

            <AddCategory 
                onNewCategory = { event =>  onAddCategory(event) }
            />

            { 
                categories.map( (category) => (
                    <GifCard 
                        key={ category } 
                        category={category} />
                ) ) 
            }
        </>
    )
}
