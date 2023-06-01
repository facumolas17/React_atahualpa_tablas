import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getSingleItem } from '../contenedores/productos';
import { useParams } from 'react-router-dom';
import '../css/itemDetailContainer.css';

function ItemDetailContainer() {

  const [prod, setProd] = useState({});
  const { id } = useParams();

  useEffect( () =>{
    getSingleItem(id)
    .then( (Singleitem) =>{
      setProd(Singleitem);
    })
  }, [id])

  return (
    <div className='container_detail'>
        <ItemDetail prod={prod} />
    </div>
  )
}

export default ItemDetailContainer;