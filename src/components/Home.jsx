import { useEffect } from "react"
import RecipeList
 from "./RecipeList"
export default function Home(props){
    const {items, setQuery} = props
    
    useEffect(()=>{
      setQuery("")
    }, [setQuery])

    return(
    <>
      <main>
        <RecipeList items={items} title="Popular"/>
      </main>
        </>
    )
}