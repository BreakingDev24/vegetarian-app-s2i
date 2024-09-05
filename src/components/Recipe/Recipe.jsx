import {Link} from "react-router-dom";
import style from './Recipe.module.css'

export default function Recipe ({item}) {
    const {title, image, id, summary, readyInMinutes} = item
        return(
               
                <div className={style['recipe-card']}>
                    <img src={image} alt={title} />
                    <div className={style['recipe-info']}>
                        <Link to={`/recipe/${id}`} className={style['recipe-title']}>
                            <h2>{title}</h2>
                        </Link>

                        <p dangerouslySetInnerHTML={{__html: summary}} className={style.summary}>
                            
                        </p>

                        <div className={style['recipe-bottom']}>
                            <p className={style['recipe-time']}><span><i className="bi bi-clock"></i></span> {readyInMinutes} min</p>
                            <Link to={`/recipe/${id}`} className={style['show-details']}>
                                <span>Details</span>
                                <span><i className="bi bi-caret-right"></i></span>
                            </Link>
                        </div>
                    </div>
                </div>
       
        )
}

