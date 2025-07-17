import React, { useState } from "react";
import { createContext } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {

    const [Cartitem, setCartitem] = useState([]);

    const addToCart = (item) => {

        setCartitem((prev) => [...prev, item]);
    }


    return <CartContext.Provider value={{ Cartitem, addToCart }} >
        {children}
    </CartContext.Provider>
}