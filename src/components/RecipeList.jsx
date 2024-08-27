import Recipe from "./Recipe";

export default function RecipeList(props){
    const {items, title} = props
    return(
        <>
            <section>
                <div className="title-container">
                    <h2>{title}</h2>
                </div>
                <div className="recipes-container">
                    {items.map((item) => (
                        <Recipe key={item.id} item={item}/>
                    ))}
                </div>
            </section>

        </>
    )
}