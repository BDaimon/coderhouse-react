import '../componentes/navbar.css'
import logo from '../imagenes/logo.svg'

const NavBar = ()=>{
    return(
        <div>
            <div className="barra">
                <img className='logo' src={logo} alt='logo' />
                <div className='menu'>
                    <ul>
                        <li>
                            <a href='#' >Inicio</a>
                        </li>
                        <li>
                            <a href='#'>Nosotros</a>
                        </li>
                        <li>
                            <a href='#'>Contacto</a>
                        </li>
                    </ul>
                </div>
                <div className='content-boton-login'>
                    <button className='boton-login'>Login</button>
                </div>
            </div>

        </div>
    )
}
export default NavBar;