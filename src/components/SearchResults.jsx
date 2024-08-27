import { useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "./RecipeList";

export default function SearchResults(props){
    const {getRecipes, recipes} = props
    const {query} = useParams()

    useEffect(()=>{
        getRecipes(query)
    }, [query])

    return (
        <main>
            <RecipeList items={recipes} title={`Recipes: ${query}`}/>
        </main>
    )
}