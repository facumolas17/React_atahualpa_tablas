import React, { useEffect, useState } from 'react';
import ItemDetail from './ItemDetail';
import { getSingleItem } from '../contenedores/productos';
import { useParams } from 'react-router-dom';
import '../css/itemDetailContainer.css';

function ItemDetailContainer() {

  const [prod, setProd] = useState({});
  const [error, setError] = useState();
  const { id } = useParams();

  useEffect( () =>{
    getSingleItem(id)
    .then( (Singleitem) =>{
      setProd(Singleitem);
    })
    .catch((errorMsg) => {
      setError(errorMsg.message);
    })
  }, [id]);

  if(!prod.id) {
    return ( 
    <>
      {
        error ? (
          <div>
            <h2>Error obteniendo los datos</h2>
            <p>{error}</p>
          </div>
        ) : ( <h2>Cargando . . .</h2> )
      }
    </>
    )
  }

  return (
    <div className='container_detail'>
        <ItemDetail prod={prod} />
    </div>
  )
}

export default ItemDetailContainer;