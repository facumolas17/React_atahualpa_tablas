import "../css/navBar.css";
import CartWidget from "./CartWidget";

function NavBar(){
    return(
    <nav className="nav">

        <img className="logo" src="/assets/images/Logo.png" alt="logo empresarial" />
        
        <ul className="menu">
            <li className="">
                <a className="underline" href="#">Inicio</a>
            </li>
            <li className="">
                <a className="underline" href="pages/nosotros.html">Nosotros</a>
            </li>
            <li className="">
                <a className="underline" href="#tentate">Productos</a>
            </li>
            <li className="">
                <a className="underline" href="pages/contacto.html">Contacto</a>
            </li>
        </ul>

        <CartWidget/>
        
    </nav>
)}

export default NavBar;