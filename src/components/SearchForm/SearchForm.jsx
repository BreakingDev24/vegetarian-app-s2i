import { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from './SearchForm.module.css'

export default function SearchForm({setQuery}){
    const [search, setSearch] = useState("")
    const navigate = useNavigate()

    const getSearch = (e) => {
        e.preventDefault();
        setQuery(search)
        setSearch("")

        navigate(`/search/${search}`)
    }

    return (
        <>
            <section>
                <form className={style["search-form"]} onSubmit={getSearch}>
                    <input
                    className={style["search-input"]}
                    type="text"
                    placeholder="ingredients"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                    <button className={style["search-btn"]} type="submit">
                    Search
                    </button>
                </form>
            </section>
        </>
    )
}