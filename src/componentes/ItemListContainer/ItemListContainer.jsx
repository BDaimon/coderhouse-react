import productos from "./Mock-data";
import { useState, useEffect } from "react";
import ItemList from "../ItemList/ItemList"; 
import { useParams } from "react-router-dom";
import '../../App.css'





const ItemListContainer = () => {

    const {categoriaId} = useParams();
    const [items, setItems] = useState([]);

    const getData = new Promise ( (resolve, reject)=> {
        setTimeout(() =>{
          resolve(productos)
            
        }, 1500);
    });

    useEffect(() =>{
       getData.then(resolve => {
        if (categoriaId) {
          const filtro = resolve.filter(item => item.categoria === categoriaId)
        setItems(filtro);
        }else{
          setItems(resolve);
        }
        
      });
        
    },
     [categoriaId]);

  return (
    <div>
      
    {
        items.length > 0 ? (
          <ItemList item={items}/>
        ): (
         
            
          <div className="cargando-container">
              <div  class="spinner-border  text-primary "   ></div>
            </div>
          
            
        )
    }
    
    </div>
    );
};

export default ItemListContainer;
