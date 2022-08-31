import { FaCartPlus} from "react-icons/fa";
import Contador from "./Contador";



 const CartWidget = () => {
  return (
    <div className="content-widget">
    
    <FaCartPlus style={{fontSize: '22px', color:'gray'}}/>
    <Contador/>
    </div>
  )
}

export default CartWidget;
