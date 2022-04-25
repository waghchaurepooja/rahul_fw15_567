
import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({children}) =>{
    const [Cart, setCart] = useState(0);

    const handleChange = (value) =>{
        setCart(Cart + value);
    }
    
    return (

        <CartContext.Provider value= {{ Cart, handleChange }}>{children}</CartContext.Provider>

    )

}