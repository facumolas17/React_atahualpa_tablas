import React from 'react';
import '../css/item.css';
import { Link } from 'react-router-dom';

function Item({nombre, precio, descripcion, imagen, id}) {

    const urlDetalle=`/producto/${id}`;

  return (

        <div className="card">
            <div className="imagen">
                <img src={imagen} />
            </div>
            <div className="contenido">
                <h3>{nombre}</h3>
                <p>{descripcion}</p>
                <h3>$ {precio}</h3>
                <Link to={urlDetalle}>
                    Leer más
                </Link>
            </div>
        </div>
    
  )
}

export default Item;