import React, { createContext, useState } from "react";

const cartCtx = createContext();

export default function CartContextProvider({children}){

    const [cart, setCart] = useState([]);

    function addItem(item, cont){

       if(isInCart(item.id)){
        let newCart = cart.map((itemMapeo) => {
            if(itemMapeo.id === item.id){
                itemMapeo.cont +=cont;
                return itemMapeo;
            }else{
                return itemMapeo;
            }
        })
        setCart(newCart);
       }
       else{
            let newCart = cart.map((item) => item);
            newCart.push({ ...item, cont });
            setCart(newCart);
           
       }
    }

    function isInCart(id) {
        let found = cart.some((item) => item.id === id); 
        return found;
      }

    function emptyCart() {
        return setCart([]);
      }  
    
    function deleteItem(id) {
        return setCart(cart.filter((item) => item.id !== id));
    }

    function getItemQty() {
        return cart.reduce((acc, x) => (acc += x.cont), 0);
    }
    
    function getItemPrice() {
        return cart.reduce((acc, x) => (acc += x.precio * x.cont), 0);
    }

    function getTotalPrice() {
        return cart.reduce((acc, x) => (acc += x.cont * x.precio), 0);
    }

    return(
        <cartCtx.Provider value={{
            cart,
            addItem,
            isInCart,
            emptyCart,
            deleteItem,
            getItemQty,
            getItemPrice,
            getTotalPrice

        }}>
            {children}
        </cartCtx.Provider>
    )
}

export {cartCtx};