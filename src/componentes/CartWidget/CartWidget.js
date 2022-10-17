import {FaShoppingCart} from "@react-icons/all-files/fa/FaShoppingCart"
import { Link } from "react-router-dom";
import "../../App.css"
import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";



 const CartWidget = () => {
  const { totalIconoCarrito} = useContext(CartContext)
  return (
    
    <div className="iconoCarrito">
    <Link to="/carrito">
    <FaShoppingCart style={{fontSize: '22px', color:'gray'}}/>
    {
      totalIconoCarrito() > 0 ?
      <p >{totalIconoCarrito()}</p>
      :
      null
    }
    </Link>
    </div>
  )
}

export default CartWidget;
