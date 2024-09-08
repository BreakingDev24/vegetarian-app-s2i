import { createContext, useEffect, useState, useCallback } from "react";
import { useFetch } from "../hook/useFetch";
import { useNavigate } from "react-router-dom";

export const RecipeContext = createContext();

export function RecipeProvider({ children }) {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const apiKey = import.meta.env.VITE_API_KEY;
  const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&addRecipeInformation=true&apiKey=${apiKey}`;

  const { data: recipes, loading, error } = useFetch(url, navigate);

  //   useEffect(() => {
  //     if (error) {
  //       navigate("/error", { state: { message: error } });
  //     }
  //   }, [error, navigate]);

  const resetQuery = () => {
    setQuery("");
  };

  return (
    <RecipeContext.Provider
      value={{ recipes, loading, error, setQuery, resetQuery }}
    >
      {children}
    </RecipeContext.Provider>
  );
}
