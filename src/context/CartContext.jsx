import React, { createContext } from "react";

const cartCtx = createContext();

export default function CartContextProvider(children){
    return(
        <cartCtx.Provider value={{

        }} >
            {children}
        </cartCtx.Provider>
    )
}

export {cartCtx};