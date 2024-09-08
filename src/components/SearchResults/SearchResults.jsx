import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import RecipeList from "../RecipeList/RecipeList";
import { RecipeContext } from "../context/DataRecipeProvider";

export default function SearchResults(){
    const {recipes, loading, error} = useContext(RecipeContext)
    const {query} = useParams()

    if (loading) return <p>Loading...</p>

    return (
        <main>
            <RecipeList items={recipes} title={`Recipes: ${query}`}/>
        </main>
    )
}