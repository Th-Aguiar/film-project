import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

const Navbar = () => {
    return (
        <nav id="navbar">
            <h2 className="text-3xl flex items-center">
                <Link to="/"> <BiCameraMovie/> <p className=" hover:bg-violet-600" >FilmesLibs</p> </Link>
            </h2>

            <form>
                <input type="text" placeholder="Busque o filme desejado" />
                <button type="submit">
                </button>
            </form>
        </nav>
    );
}

export default Navbar;