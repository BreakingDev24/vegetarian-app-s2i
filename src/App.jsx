import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("apple");

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&apiKey=${apiKey}`;

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.results);
    console.log(recipes);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  return (
    <>
      <header>
        <nav>
          <form className="search-form" onSubmit={getSearch}>
            <input
              className="search-input"
              type="text"
              placeholder="ingredients"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </form>
        </nav>
      </header>

      <main>
        {recipes.map((recipe) => (
          <Recipe key={recipe.id} title={recipe.title} img={recipe.image} />
        ))}
      </main>
    </>
  );
}
