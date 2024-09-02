import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import DetailCSS from './RecipeDetails.module.css'

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

    if(!recipe) return <p>Loading...</p>

    const {title, summary, image, extendedIngredients, analyzedInstructions} = recipe

    return(
        <>
           
            <main>
                <h2 className={DetailCSS['recipe-title']}>{title}</h2>
                <p dangerouslySetInnerHTML={{__html: summary}} className={DetailCSS['recipe-description']}></p>
                <div className={DetailCSS['details-container']}>
                    <div className={DetailCSS['recipe-img-container']}>
                        <img className={DetailCSS['recipe-img']} src={image} alt={title} />
                    </div>
                    <div className={DetailCSS['ingredients-container']}>
                        <h3>Ingredients</h3>
                        <ul className={DetailCSS['ingredients-list']}>
                            {
                                extendedIngredients.map(({original}, index) => {
                                    return <li key={index} className={DetailCSS.ingredient}>{original}</li>
                                    
                                })
                            }
                        </ul>
                    </div>
                </div>

                <div className={DetailCSS['istructions-container']}>
                    <h3>Instructions</h3>
                    <ol className={DetailCSS['istructions-list']}>
                    {analyzedInstructions[0]?.steps.map(({ step }, index) => (
                <li key={index}>{step}</li>
            ))}
                    </ol>
                </div>
            </main>
    </>
    )
}