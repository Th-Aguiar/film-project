import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />

            <footer>
                <p>Desenvolvido por Thiago Aguiar</p>
            </footer>
        </>
    );
}

export default Layout;