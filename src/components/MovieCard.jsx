import { Link } from "react-router-dom";

import {FaStar} from "react-icons/fa";

const imgUrl = import.meta.env.VITE_IMG;

const MovieCard = ({movie, showLink = true}) => {
    return ( 
        <div className="flex justify-items-center items-center flex-col bg-stone-700 text-center text-white p-3">
            <img className="p-5" src={imgUrl + movie.poster_path} alt={movie.title} />
            <h2 className="text-2xl font-bold">{movie.title}</h2>
            <p className="flex justify-items-center items-center content-center gap-3 py-2 ">
                <FaStar className="text-yellow-300"/> {movie.vote_average}
            </p>
            {showLink && <Link className="m-auto p-2 w-1/4 bg-orange-300 rounded-md hover:bg-orange-400 hover:text-orange-100" to={`/movie/${movie.id}`}>Detalhes</Link> }
        </div>
    );
}
 
export default MovieCard;