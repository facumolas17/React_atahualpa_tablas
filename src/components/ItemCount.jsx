import React, { useState } from 'react';

function ItemCount({ initial, stock}) {

    const [cont, setCont] = useState(initial);

    const incrementarCant = () => {
        if(cont < stock){
            setCont(cont +1);
        }
    }

    const decrementarCant = () => {
        if(cont > initial){
            setCont(cont -1);
        }
    }

  return (
    <div>
        <button disabled={cont <= 1} onClick={decrementarCant}>-</button>
        <div>{cont}</div>
        <button disabled={cont >= stock} onClick={incrementarCant} >+</button>
        <button disabled={stock <= 0 } >Agregar al carrito</button>
    </div>
  )
}

export default ItemCount;