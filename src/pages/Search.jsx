import {useState, useEffect} from "react";
import { useSearchParams } from "react-router-dom";

import MovieCard from "../components/MovieCard";

const searchUrl = import.meta.env.VITE_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;


const Search = () => {
    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getSearchMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data.results);
        setMovies(data.results);

    }
    
    useEffect(() => {
        const search = `${searchUrl}?query=${query}&${apiKey}`;
        getSearchMovie(search)
    }, [query]);

    return(
        <main className="h-full w-full bg-stone-600 grid grid-cols-2 md:grid-cols-4 gap-10 p-10">
            {movies.map((movie) => <MovieCard key={movie.id} movie={movie}/>)}
        </main>
    );
}

export default Search;