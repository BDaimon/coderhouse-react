import Item from "../Item/Item";
import '../../App.css'

const ItemList = ({ item }) => {
  return (
    <div className="contenedor-lista">
{
  item.map(producto =>(
    <Item key={producto.id} item={producto} />
  ))
}
     
    
    </div>
      );
};

export default ItemList;
