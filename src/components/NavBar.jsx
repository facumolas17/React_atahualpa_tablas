import "../css/navBar.css";
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
function NavBar(){
    return(
    <nav className="nav">

        <img className="logo" src="/assets/images/Logo.png" alt="logo empresarial" />
        
        <ul className="menu">
            <li className="">
                <Link className="underline" to="/">Inicio</Link>
            </li>
            <li className="">
                <Link className="underline" to="categoria/tablas">Tablas</Link>
            </li>
            <li className="">
                <Link className="underline" to="categoria/bebidas">Bebidas</Link>
            </li>
            <li className="">
                <Link className="underline" to="categoria/combos">Combos</Link>
            </li>
            <li className="">
                <Link className="underline" to="#">Contacto</Link>
            </li>
        </ul>

        <CartWidget/>
        
    </nav>
)}

export default NavBar;