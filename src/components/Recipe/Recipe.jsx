import {Link} from "react-router-dom";
import RecipeCSS from './Recipe.module.css'

export default function Recipe ({item}) {
    const {title, image, id, readyInMinutes} = item
        return(
               
                <div className={RecipeCSS['recipe-card']}>
                    <img src={image} alt={title} />
                    <div className={RecipeCSS['recipe-info']}>
                    <Link to={`/recipe/${id}`} className={RecipeCSS['recipe-title']}>
                        <h2>{title}</h2>
                    </Link>
                        <p className={RecipeCSS['recipe-time']}><span><i className="bi bi-clock"></i></span> {readyInMinutes} min</p>
                    <Link to={`/recipe/${id}`} className={RecipeCSS['show-details']}>
                        <span>Details</span>
                        <span><i className="bi bi-caret-right"></i></span>
                    </Link>
                    </div>
                </div>
       
        )
}

