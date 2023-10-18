import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi";

const Navbar = () => {
    //Lidará com as mudanças no input com o onChange
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    //Lidar com o submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(search);

        //Vamos redirecionar a navegação para a pagina de search passando a query de busca
        navigate(`/search?q=${search}`)
        setSearch("");
    }

    return (
        <nav className="flex justify-between bg-stone-950 p-3">
            <h2 className="text-orange-200 hover:text-orange-400 ml-5 hover: cursor-pointer" >
                <Link className="text-3xl flex items-center" to="/">
                    <BiCameraMovie /> 
                    <p>FilmesLibs</p> 
                </Link>
            </h2>

            <form className="flex justify-items-center mr-5" onSubmit={handleSubmit}>
                <input className="rounded-md p-2" type="text" placeholder="Busque o filme desejado" onChange={(e) => setSearch(e.target.value)} value={search} />
                <button className=" text-orange-200 p-2" type="submit">
                    <BiSearchAlt2/>
                </button>
            </form>
        </nav>
    );
}

export default Navbar;