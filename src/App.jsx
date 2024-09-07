import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import Recipe from "./components/Recipe/Recipe";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./components/SearchForm/SearchForm";
import Home from "./components/Home/Home";
import RecipeDetails from "./components/RecipeDetails/RecipeDetails";
import SearchResults from "./components/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./components/errorPage/errorPage";
import "./App.css";

function AppContent() {
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const navigate = useNavigate()
  const location = useLocation()
  const apiKey = import.meta.env.VITE_API_KEY;
  
  useEffect(() => {
    getRecipes();
  }, [query]);
  
  const getRecipes = async () => {
    try {

      // throw new Error('404: resource not found')

      const url = `https://api.spoonacular.com/recipes/complexSearch?query=${query}&diet=vegetarian&addRecipeInformation=true&apiKey=${apiKey}`;
      const response = await fetch(url);
      if (!response.ok) {
        let errorMessage = ''
        switch(response.status){
          case 404:
            errorMessage = "404: Recipes not found. Try looking for something else.";
              break;
          case 402:
            errorMessage = "402: Too many requests for today. Try again tomorrow";
              break;
          case 401:
            errorMessage = "401: Invalid API key. Check your API key configuration";
              break;
          case 500:
            errorMessage = "500: Server error. Please try again later.";
              break;
          default:
            errorMessage = `Errore sconosciuto! Status: ${response.status}`;
              break;
                      
        }
        throw new Error(errorMessage)
      }

      const data = await response.json();
      // console.log(data)
      // if(data.status === "failure"){
      //   throw new Error(data.message);
      // }
      setRecipes(data.results);

    } catch (err) {
      console.log(err.message)
      navigate(`/error/${encodeURIComponent(err.message)}`, { state: { errorMessage: err.message || err}})
    }
  };

  const isErrorPage = location.pathname.startsWith("/error");
  return (
    <>
      <Layout>
        {
          !isErrorPage && (
          <>

            <Navbar></Navbar>
            <SearchForm setQuery={setQuery}></SearchForm>
          
          </>
          )
        }
        <Routes>
          <Route path="/" element={<Home items={recipes} setQuery={setQuery}/>}></Route>
          <Route path="/recipe/:id" element={<RecipeDetails />}></Route>
          <Route path="/search/:query" element={<SearchResults getRecipes={getRecipes} recipes={recipes}/>}></Route>
          <Route path="/error/:errorMessage" element={<ErrorPage />} />
        </Routes>
      </Layout>

     {!isErrorPage && <Footer/>}
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent/>
    </BrowserRouter>
  )
}
