import React, { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import catZZZ from "../../imagenes/gatito.png";
import { db } from "../../utils/firebase";
import { collection, addDoc, updateDoc, doc } from "firebase/firestore";

export const CartContainer = () => {
  const { listaProductos, removerProducto, vaciarCarrito, precioTotal } =
    useContext(CartContext);
  const [idOrden, setIdOrder] = useState("");

  const enviarOrden = (event) => {
    event.preventDefault();

    const orden = {
      comprador: {
        nombre: event.target[0].value,
        telefono: event.target[1].value,
        email: event.target[2].value,
      },
      items: listaProductos,
      total: precioTotal(),
    };
    console.log("orden", orden);
    // crear la orden en firebase
    const queryRef = collection(db, "ordenes")
    //crear el documento
    addDoc(queryRef, orden).then(response => {
      console.log("orden creada", response)
      setIdOrder(response.id)
    })
  }
    const updateOrden = ()=>{
      //crear la referencia
      const queryRef = doc (db, "ordenes", "HAk8Q1TX40PTULOsS4wB");
      //actualizar el ducumento
      updateDoc(queryRef,{ 
        comprador:{
          nombre: "Andres",
          telefono: "22222222",
          email: "jaff@gmail.com",
        },
        items:[{
          cantidad: 1,
          categoria:"gato",
          descripcion:"Alimento para gatos sabor carne.",
          id: 1,
          imagen:"/static/media/latacat.7946c6f5b5e5aa6f8494.jpeg",
          nombre:"Master Cat",
          precio: 10000
        }],
         total: 10000
          
       }).then(response=> console.log("orden actualizada", response))
    };
  
  
  return (
    <div>
      <div>
        <button onClick={updateOrden}>Actualizar orden</button>
        {idOrden && <p>su orden fue creada con exito, id: {idOrden}</p>
      }
        </div>
      <div className="cartContainer">

        {listaProductos.length > 0 ? (
          <div>
            {listaProductos.map((item) => (
              <div className="contenidoaCarrito">
                <img
                  className="imagenEnCarrito"
                  src={item.imagen}
                  alt={item.nombre}
                />
                <p style={{ color: "blue", fontSize: "20px" }}>{item.nombre}</p>
                <p>{item.descripcion}</p>
                <p> Cantidad: {item.cantidad} </p>
                <p> Precio unidad: $ {item.precio} </p>
                <p> Precio productos: {item.precioXcantidad} </p>
                <button
                  type="button"
                  class="btn btn-info"
                  onClick={() => removerProducto(item.id)}
                >
                  Eliminar producto
                </button>
              </div>
            ))}
            <div></div>
            <p>Precio total: {precioTotal()}</p>
            <div onClick={vaciarCarrito} className="botonVaciar">
              <button type="button" class="btn btn-danger">
                Vaciar carrito
              </button>
            </div>

            <form onSubmit={enviarOrden}>
              <div class="form-group">
                <label for="exampleInputEmail1">Nombre</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa tu nombre "
                />
              </div>
              <div>
                <label for="exampleInputEmail1">Telefono</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ingresa tu telefono"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputEmail1">Email address</label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  placeholder="Ingresa tu Email"
                />
              </div>
              <div class="form-check">
                <small class="form-text text-muted">
                  Nunca compartiremos sus datos con nadie.
                </small>
              </div>
              <button type="submit" class="btn btn-primary">
                Enviar
              </button>
            </form>
          </div>
        ) : (
          <div className="carritoVacio">
            <h4>El carrito esta vacio</h4>
            <img className="imgcard" src={catZZZ} alt="gatito" />
            <Link to="/productos">
              <button type="button" class="btn btn-success">
                Ir a productos
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};
export default CartContainer;

