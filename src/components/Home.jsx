import RecipeList
 from "./RecipeList"
export default function Home(props){
    const {items} = props
    
    return(
    <>
      <main>
        <RecipeList items={items} title="Popular"/>
      </main>
        </>
    )
}