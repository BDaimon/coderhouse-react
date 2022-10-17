import { useState, useEffect } from 'react'
import productos from '../ItemListContainer/Mock-data'
import ItemDetalle from '../ItemDetalle/ItemDetalle'
import { useParams } from 'react-router-dom'



const ItemDetalleContainer = () => {
    const {productoId} = useParams();
    const [items, setItems ] = useState({});

    const getItems = (id) =>{
        return new Promise((resolve, reject) => {
            const product = productos.find(items => items.id === parseInt(id));
            resolve(product)
        })
    }

    useEffect( () => {
        const getProductos = async () =>{
            const producto = await getItems(productoId);
            setItems(producto)
        }
        getProductos();
    },[productoId])
  return (
    <div className='itemdetalle'>
      <ItemDetalle  item={items}/>
    </div>
  )
}

export default ItemDetalleContainer;
