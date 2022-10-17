import React from "react";
import { useState } from "react";


export  const CartContext = React.createContext();

export const CartProvider = ({children})=>{
    const [listaProductos, setListaProductos] = useState([]);
    
    const isInCart = (productoId) =>{
        const estaEnCarrito = listaProductos.some(item=> item.id === productoId)
                return estaEnCarrito;
    }

    const agregarItem = (item, cantidad) =>{
        console.log("item",item, "cantidad", cantidad)
        const nuevoProducto ={
            ...item,
            cantidad
        }
        console.log("nuevo producto", nuevoProducto)
        //si esxiste reemplazo cantidad
        if(isInCart(item.id)){
            const productoPosicion = listaProductos.findIndex(producto=>producto.id === item.id)
            const nuevoArreglo = [...listaProductos]
            nuevoArreglo[productoPosicion].cantidad = nuevoArreglo[productoPosicion].cantidad + cantidad;
            nuevoArreglo[productoPosicion].precioXcantidad = nuevoArreglo[productoPosicion].cantidad * nuevoArreglo[productoPosicion].precio
            setListaProductos(nuevoArreglo);
        }else{
            //si no existe, agrego el producto al carrito
            const nuevoArreglo = [...listaProductos]
            nuevoProducto.precioXcantidad = nuevoProducto.cantidad * nuevoProducto.precio
            nuevoArreglo.push(nuevoProducto)
            setListaProductos(nuevoArreglo)
        }

    }

        
    const removerProducto = (itemId) =>{
        console.log( "itemid", itemId)
        const nuevoArreglo = listaProductos.filter(producto=> producto.id !== itemId)
        setListaProductos(nuevoArreglo)
    }

    const vaciarCarrito = ()=>{
        setListaProductos ([]);
    }
    const precioTotal = ()=>{
        const total = listaProductos.reduce((acc, item)=> acc + item.precioXcantidad, 0)
            return total
    }

      const  totalIconoCarrito = ()=>{
            const enCart = listaProductos.reduce((acc, item)=> acc + item.cantidad, 0)
            return enCart
        }
                
        return(
            <CartContext.Provider value={{listaProductos, agregarItem, removerProducto, vaciarCarrito, isInCart, precioTotal, totalIconoCarrito}}>
                {children}
            </CartContext.Provider>
        )
            
    }
    
    




