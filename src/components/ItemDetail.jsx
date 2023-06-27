import React from 'react';
import '../css/itemDetail.css';
import ItemCount from '../components/ItemCount.jsx';
import { Link } from 'react-router-dom';

function ItemDetail({prod}) {

   const onAddToCart = (count) => {
        alert(`Agregaste al carrito ${count} unidades`);
    }

  return (
    
        <div className="container_detalle">
            
            <div className="contenido_detail">
                <h3>{prod.nombre}</h3>
                <h4>{prod.descripcion}</h4>            
            </div>

            <div>
                <img className='img_detalle' src={prod.imagen} />
            </div>
            <h3>$ {prod.precio}</h3>
            < ItemCount initial={1} stock={prod.stock} onAddToCart={onAddToCart} />
        </div>
    
  )
}

export default ItemDetail;