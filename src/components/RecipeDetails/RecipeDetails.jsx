import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"


export default function RecipeDetails(){
    const {id} = useParams();
    const [recipe, setRecipe] = useState(null)

    
    useEffect(() => {
        const fetchRecipeDetails = async ()=>{
            const apiKey = import.meta.env.VITE_API_KEY
            const url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${apiKey}`;
            const response = await fetch(url)
            const data = await response.json()
            setRecipe(data)
            console.log(data)
        };
        fetchRecipeDetails()
    }, [id])

    return(
        <>
            {recipe ? (

                <div>
                <h2>{recipe.title}</h2>
                <img src={recipe.image} alt={recipe.title} />
                <p dangerouslySetInnerHTML={{__html: recipe.summary}}></p>
            </div>
            ) : (<p>Loading</p>
            )}
        </>
    )
}