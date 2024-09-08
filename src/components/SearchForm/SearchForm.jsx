import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import style from './SearchForm.module.css'
import { RecipeContext } from "../context/DataRecipeProvider";

export default function SearchForm(){
    const { setQuery } = useContext(RecipeContext)
    const [inputValue, setInputValue] = useState("")
    const navigate = useNavigate()

    const getSearch = (e) => {
        e.preventDefault();

        const trimmedInput = inputValue.trim()

        setQuery(trimmedInput)
        setInputValue("")

        navigate(`/search/${trimmedInput}`)
    }

    return (
        <>
            <section>
                <form className={style["search-form"]} onSubmit={getSearch}>
                    <input
                    className={style["search-input"]}
                    type="text"
                    placeholder="ingredients"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <button className={style["search-btn"]} type="submit">
                    Search
                    </button>
                </form>
            </section>
        </>
    )
}