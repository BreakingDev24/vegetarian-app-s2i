import {Link} from "react-router-dom"


export default function Recipe ({item}) {
    const {title, image, id, summary} = item
        return(
            <Link to={`/recipe/${id}`}>
                    
                <div>
                    <h2>{title}</h2>
                    <img src={image} alt={title} />
                    <button>Details</button>
                </div>
            </Link>
        )
}

