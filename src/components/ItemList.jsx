import React from 'react';
import Item from './Item';

function ItemList({data}) {
  return (
    <div>
        {
            data.map((item)=>{
                return(
                    <Item
                        key={item.key}
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