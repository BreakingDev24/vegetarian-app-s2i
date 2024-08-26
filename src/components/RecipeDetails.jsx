import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function RecipeDetails(){
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null)

    const apiKey = import.meta.env.VITE_API_KEY
    const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;

    useEffect(() => {
        const fetchRecipeDetails = async ()=>{
            const response = await fetch(url)
            const data = await response.json()
            setRecipe(data)
            // console.log(recipe)
        };
        fetchRecipeDetails()
    }, [id])

    return(
        <>
            {recipe ? (

                <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <p>{recipe.summary}</p>
            </div>
            ) : (<p>Loading</p>
            )}
        </>
    )
}