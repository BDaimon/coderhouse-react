import { useState, useContext } from 'react';
import '../../App.css'
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';




const ItemDetalle = ({item}) => {
  const {agregarItem} = useContext(CartContext)
  const [contador, setContador] = useState(0)

  const agregar = (dato) =>{
    setContador(dato)
    agregarItem(item, dato)
  }
  return (
    <div className='contenedor-detalle'>
      <div className="contenido-producto">

<div>
  <img className="imagenProducto" src={item.imagen} alt={item.nombre}/>
  <div>
    <h5>{item.nombre}</h5>
    <p>{item.descripcion}</p>
    <p> $ {item.precio}</p>
  </div>
</div>
</div>
<div>
<ItemCount stock={100} inicial={1} agregar={agregar}/>
</div>
<div>
  {
    contador > 0 && 
    <Link to="/carrito">
    <button type="button" class="btn btn-warning">Ir al carrito</button>
    </Link>
    
      
  }
</div>
    </div>
  
  )
}

export default ItemDetalle;