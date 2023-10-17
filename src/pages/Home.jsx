import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";

//Importando os dados do .env
const movieURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;

const Home = () => {
    const [topMovies, setTopMovies] = useState([]);
    
    //Função para pegar os melhores filmes da api
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data.results);
        setTopMovies(data.results);
    }

    useEffect(() => {
        //URL de busca dos melhores filmes
        const topRatedUrl = `${movieURL}top_rated?${apiKey}`
        
        getTopRatedMovies(topRatedUrl);
    }, []);

    return (
        <main className="h-full w-full bg-stone-600 grid grid-cols-2 md:grid-cols-4 gap-10 p-10">

            {topMovies && topMovies.map( (movie) => <MovieCard key={movie.id} movie={movie}/>) }

        </main>
        
    );
}

export default Home;