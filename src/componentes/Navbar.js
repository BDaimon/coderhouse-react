import "./navbar.css";
import logo from "../imagenes/logo-modified.png";
import CartWidget from "./CartWidget";

const NavBar = () => {
  return (
    <div className="barra">
      <div className="container-titulo">
        <div>
          <img className="logo" src={logo} alt="logo" />
        </div>
        <h4 className="titulo">Dulce Mascota</h4>
        <p className="sub-titulo">Food Pets</p>
      </div>
      <div className="menu">
        <ul>
          <li>
            <a href="#">Inicio</a>
          </li>
          <li>
            <a href="#">Nosotros</a>
          </li>
          <li>
            <a href="#">Contacto</a>
          </li>
          <li></li>
        </ul>
      </div>
      <CartWidget />
      <div className="content-boton-login">
        <button className="boton-login">Login</button>
      </div>
    </div>
  );
};
export default NavBar;
