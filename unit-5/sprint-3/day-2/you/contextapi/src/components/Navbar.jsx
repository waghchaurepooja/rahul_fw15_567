
import { CartContext } from "../Contexts/CartContext";

import { LanguageContext } from "../Contexts/LanguageContext";

import { useContext } from "react";
const Navbar = () =>{
    
    const { Cart } = useContext(CartContext);
    const { Language } = useContext(LanguageContext); 
    return (

        <div style={{
            display: "flex",
            justifyContent : "end",
            padding : "15px",
            fontSize: "28px",
            border: "1px solid red",
            margin : "10px",
        }}>

            {Language === "en" ? "Cart" : "Thella"} : { Cart }
            {/* { Cart }; */}

        </div>

    )
}

export { Navbar }