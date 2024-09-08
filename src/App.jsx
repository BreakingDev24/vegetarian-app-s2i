import { useState, useEffect, useContext } from "react";
import { BrowserRouter, Routes, Route, Link, useNavigate, useLocation } from "react-router-dom";
import { RecipeContext, RecipeProvider } from "./components/context/DataRecipeProvider";
import Recipe from "./components/Recipe/Recipe";
import Layout from "./components/Layout/Layout";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import SearchForm from "./components/SearchForm/SearchForm";
import RecipeDetails from "./pages/RecipeDetails/RecipeDetails";
import SearchResults from "./pages/SearchResults/SearchResults";
import Footer from "./components/Footer/Footer";
import ErrorPage from "./pages/errorPage/errorPage";
import "./App.css";

function AppContent() {
  const {recipes, setQuery} = useContext(RecipeContext)
  const location = useLocation()

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
          <Route path="/search/:query" element={<SearchResults />}></Route>
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
      <RecipeProvider>
        <AppContent/>

      </RecipeProvider>
    </BrowserRouter>
  )
}
