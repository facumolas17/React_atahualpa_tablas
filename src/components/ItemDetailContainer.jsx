import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getSingleItem } from '../contenedores/productos';
function ItemDetailContainer() {

  const [prod, setProd] = useState({});

  useEffect( () =>{
    getSingleItem()
    .then( (Singleitem) =>{
      setProd(Singleitem);
    })
  }, {})

  return (
    <div>
        <ItemDetail prod={prod} />
    </div>
  )
}

export default ItemDetailContainer;