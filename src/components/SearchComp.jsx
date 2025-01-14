import { useState } from "react";
import axios from "axios";

export default function SearchComp() {
    const [query, setQuery] = useState(""); // Cambiato il nome dello stato per maggiore chiarezza
    const [movies, setMovies] = useState([]);

    function getData() {
        axios
            .get(
                `https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=${query}`
            )
            .then((res) => {
                console.log(res);
                setMovies(res.data.results);
            })
            .catch((err) => console.log(err));
    }

    function handleFetchMovies(e) {
        e.preventDefault(); // Impedisce il refresh della pagina
        getData();
    }

    return (
        <form className="d-flex ms-3" onSubmit={handleFetchMovies}>
            <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-danger" type="submit">
                Search
            </button>
        </form>
    );
}
