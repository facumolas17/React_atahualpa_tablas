import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getItems } from '../contenedores/productos';

function ItemListContainer() {

  const [data,setData] = useState([]);

  useEffect(() =>{
    getItems()
      .then((respuestaDatos) =>{
        setData(respuestaDatos);
        
      })
  }, [])

  return (
    <div > 
      
        <ItemList data={data}/>

    </div>
  )
}

export default ItemListContainer;