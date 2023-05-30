import React from 'react';
import Item from './Item';
import "../css/itemList.css";


function ItemList({data}) {

  return (
    <div className='container'>
        {
            data.map((item)=>{
                return(
                    <Item
                        key={item.id}
                        id={item.id}
                        nombre={item.nombre}
                        precio={item.precio}
                        descripcion={item.descripcion}
                        imagen={item.imagen}
                        stock={item.stock}
                        categoria={item.categoria}

                    />
                )
            })
        }
    </div>
  )
}

export default ItemList;