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
                <Link className="underline" to="#">Tablas</Link>
            </li>
            <li className="">
                <Link className="underline" to="/">Bebidas</Link>
            </li>
            <li className="">
                <Link className="underline" to="#">Combos</Link>
            </li>
            <li className="">
                <Link className="underline" to="#">Contacto</Link>
            </li>
        </ul>

        <CartWidget/>
        
    </nav>
)}

export default NavBar;