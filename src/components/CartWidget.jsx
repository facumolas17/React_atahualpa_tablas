import React, { useState, useContext } from 'react';
import { cartCtx } from '../context/CartContext';
import "../css/cartWidget.css";



function CartWidget() {

  const {cart} = useContext(cartCtx);

  return (
    <div className="shopping">
        <a href=""><i className="fa-solid fa-cart-shopping">{cart.length}</i></a>
    </div>
  )
}

export default CartWidget;