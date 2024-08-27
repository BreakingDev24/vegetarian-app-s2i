import { useState, useEffect } from "react";
import Recipe from "./components/Recipe";
import Navbar from "./components/Navbar";
import SearchForm from "./components/SearchForm";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails";
import SearchResults from "./components/SearchResults";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";

export default function App() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");

  const apiKey = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&addRecipeInformation=true&apiKey=${apiKey}`;
    const response = await fetch(url);
    const data = await response.json();
    setRecipes(data.results);
    console.log(recipes);
  };


  return (
    <>

    <BrowserRouter>
      <Navbar></Navbar>
      <SearchForm setQuery={setQuery}></SearchForm>
      <Routes>
        <Route path="/" element={<Home items={recipes}/>}></Route>
        <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
        <Route path="/search/:query" element={<SearchResults getRecipes={getRecipes} recipes={recipes}/>}></Route>
      </Routes>

      </BrowserRouter>
    </>
  );
}
