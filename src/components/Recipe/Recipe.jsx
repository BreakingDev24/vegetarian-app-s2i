import {Link} from "react-router-dom"


export default function Recipe ({item}) {
    const {title, image, id, readyInMinutes} = item
        return(
               
                <div className="recipe-card">
                    <img src={image} alt={title} />
                    <div className="recipe-info">
                    <Link to={`/recipe/${id}`} className="recipe-title">
                        <h2>{title}</h2>
                    </Link>
                        <p className="recipe-time"><span><i className="bi bi-clock"></i></span> {readyInMinutes} min</p>
                    <Link to={`/recipe/${id}`} className="show-details">
                        <span>Details</span>
                        <span><i class="bi bi-caret-right"></i></span>
                    </Link>
                    </div>
                </div>
       
        )
}

