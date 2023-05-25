import React from 'react';
import '../css/item.css';
function Item({nombre, precio, descripcion, imagen}) {
  return (
    
        <div className="card">
            <div className="imagen">
                <img src={imagen} />
            </div>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <h3>$ {precio}</h3>
                <a href="#">Leer más</a>
            </div>
        </div>
    
  )
}

export default Item;