import { useEffect, useContext } from "react";
import Spinner from "../../components/Spinner/Spinner";
import RecipeList from "../../components/RecipeList/RecipeList";
import { RecipeContext } from "../../components/context/DataRecipeProvider";

export default function Home(props) {
  const { recipes, loading, error } = useContext(RecipeContext);

  if (loading) return <Spinner />;

  return (
    <>
      <main>
        <RecipeList items={recipes} title="Popular" />
      </main>
    </>
  );
}
