import React, { useState } from 'react';
import '../css/itemCount.css';

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
    <div className='container_count'>
        <div className="info_producto">
            <button disabled={cont <= 1} onClick={decrementarCant}>-</button>
            <div>{cont}</div>
            <button disabled={cont >= stock} onClick={incrementarCant} >+</button>
        </div>
        <button className='add_carrito' disabled={stock <= 0 } >Agregar al carrito</button>
        
    </div>
  )
}

export default ItemCount;