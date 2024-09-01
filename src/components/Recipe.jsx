import {Link} from "react-router-dom"


export default function Recipe ({item}) {
    const {title, image, id, readyInMinutes} = item
        return(
            <Link to={`/recipe/${id}`}>
                    
                <div className="recipe-card">
                    <img src={image} alt={title} />
                    <div className="recipe-info">
                        <h2>{title}</h2>
                        <p><span><i className="bi bi-clock"></i></span> {readyInMinutes} min</p>
                        <button>Details</button>
                    </div>
                </div>
            </Link>
        )
}

