import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

const Navbar = () => {
    return (
        <nav className="flex justify-between bg-stone-950 p-3">
            <h2 className="text-orange-200 hover:text-orange-400 ml-5 hover: cursor-pointer" >
                <Link className="text-3xl flex items-center" to="/">
                    <BiCameraMovie /> 
                    <p>FilmesLibs</p> 
                </Link>
            </h2>

            <form className="flex justify-items-center mr-5">
                <input className="rounded-md p-2" type="text" placeholder="Busque o filme desejado" />
                <button className=" text-orange-200" type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    );
}

export default Navbar;