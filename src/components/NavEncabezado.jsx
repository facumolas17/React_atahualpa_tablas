import "../css/NavEncabezado.css";

function NavEncabezado(){
    return(
        <div className="nav_encabezado">
            <div className="info_empresarial">         
                <h6 className=""><i class="far fa-envelope pr-2 blanco"></i>info@atahualpatablas.com</h6>
                <h6 className="">|</h6>
                <h6 className=""><i class="fas fa-mobile-alt pr-2 blanco"></i>0351-156548531</h6>    
            </div>
            <div className="redes">
                <a href=""><i class="fa-brands fa-facebook"></i></a>
                <a href=""><i class="fa-brands fa-instagram"></i></a>
            </div>
        </div>
    )}

    export default NavEncabezado;