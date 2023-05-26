import React from 'react';

function ItemDetail({prod}) {
  return (
    
        <div className="card">
            <div className="imagen">
                <img src={prod.imagen} />
            </div>
            <div className="contenido">
                <h3>{prod.nombre}</h3>
                <h3>$ {prod.precio}</h3>
                <a href="#">Agregar al carrito</a>
            </div>
        </div>
    
  )
}

export default ItemDetail;