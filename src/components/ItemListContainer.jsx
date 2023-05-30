import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { getItems, getItemsByCategory } from '../contenedores/productos';
import { useParams } from 'react-router-dom';
function ItemListContainer() {

  const [data,setData] = useState([]);
  const {cat} = useParams();
  
  useEffect(() =>{

    if(cat===undefined){

      getItems().then((respuestaDatos) =>{
          setData(respuestaDatos);
          })
    }
    else{
      getItemsByCategory(cat).then( (respuesta) =>{
        setData(respuesta);
      })
    }
  }, [cat])

  return (
    <div > 
      
        <ItemList data={data}/>

    </div>
  )
}

export default ItemListContainer;