import "./navbar.css";
import logo from "../imagenes/logo-modified.png";
import {Link, NavLink} from 'react-router-dom'
import CartWidget from "./CartWidget/CartWidget";


const NavBar = () => {
  return (
    <nav className="barra">
      <div className="container-titulo">
        <div>
        <Link to='/'><img className="logo" src={logo} alt="logo" /></Link> 
        </div>
        <h4 className="titulo">Dulce Mascota</h4>
        <p className="sub-titulo">Food Pets</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <NavLink className={({isActive})=>isActive ? 'claseActive': 'claseInactive'} to="/">Inicio</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? 'claseActive': 'claseInactive'} to="/productos">Productos</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? 'claseActive': 'claseInactive'} to="/productos/perro">Para Perros</NavLink>
          </li>
          
          <li>
            <NavLink className={({isActive})=>isActive ? 'claseActive': 'claseInactive'} to="/productos/gato">Para Gatos</NavLink>
          </li>
          <li>
            <NavLink className={({isActive})=>isActive ? 'claseActive': 'claseInactive'} to="/contacto">Contacto</NavLink>
          </li>
          <li>
            <CartWidget/>
          </li>
            
        </ul>
      </div>
    </nav>

  );
};
export default NavBar;
