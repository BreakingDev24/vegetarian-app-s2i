import Recipe from "../Recipe/Recipe";

export default function RecipeList(props){
    const {items, title} = props
    if(!items) {
        return <p>nessuna ricetta</p>
    }

    return(
        <>
            <section>

                <div className="title-container">
                    <h2>{title}</h2>
                </div>
                <div className="recipes-container">
                    {items.results.map((item) => (
                        <Recipe key={item.id} item={item}/>
                    ))}
                </div>
            </section>

        </>
    )
}