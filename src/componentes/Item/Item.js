import { Link } from "react-router-dom";
import '../../App.css'

const Item = ({item}) => {
  return (
    <div>
    <div className="contenido-producto">


      <div>
        <img className="imagenProducto" src={item.imagen} alt={item.nombre}/>
        <div>
          <h5 style={{color:"blue"}}>{item.nombre}</h5>
          <p>{item.descripcion}</p>
          <p> $ {item.precio}</p>
        </div>
        <Link to={`/item/${item.id}`}>
          <button class="btn btn-primary">Ver detalle</button>
        </Link> 
      </div>
   </div>
  </div>
  );
};


export default Item;
