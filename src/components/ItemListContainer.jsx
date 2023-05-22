import React from 'react';
import '../css/itemListContainer.css';
import Card from './Card';
import ItemCount from './ItemCount';

function ItemListContainer() {
  return (
    <div className='container' >
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <ItemCount initial={1} stock={5} />
    </div>
  )
}

export default ItemListContainer;