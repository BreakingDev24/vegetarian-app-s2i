import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
            </section>
        </>
    )
}