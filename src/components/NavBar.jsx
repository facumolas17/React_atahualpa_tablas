import "../css/NavBar.css";

function NavBar(){
    return(
    <nav className="nav">

        <img className="logo" src="#" alt="logo empresarial" />
        
        <ul className="menu">
            <li className="nav-item">
                <a className="nav-link" href="#">Inicio</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/nosotros.html">Nosotros</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#tentate">Productos</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="pages/contacto.html">Contacto</a>
            </li>
        </ul>

        <div className="shopping">
            <a href=""><i class="fa-solid fa-cart-shopping"></i></a>
        </div>

    </nav>
)}

export default NavBar;