import React from 'react'
import { useState } from 'react'

const ItemCount = ({stock, inicial, agregar}) => {
    const [count, setCount] = useState(inicial)

    const restar = ()=>{
        if (count>1){
            setCount (count -1)
        }
    }
    const sumar = ()=>{
        if (count< stock){
            setCount (count + 1)
        }
    }
  return (
        <div className='contadorContainer'>

      <div>
        <p>Stock: {stock}</p>
      <div className='botonesContenedor'>
        <button disabled={stock===0} onClick={restar} className='boton'>-</button>
        <p className='cantidad'>{count}</p>
        <button disabled={stock===0} onClick={sumar} className='boton'>+</button>
      </div>
      <button disabled={stock===0} class="btn btn-primary" onClick={ ()=>(agregar) (count)}>Agregar al carrito</button>
    </div>
    </div>
  )
}

export default ItemCount
