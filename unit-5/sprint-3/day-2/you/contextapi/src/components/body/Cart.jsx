
import { CartContext } from "../../Contexts/CartContext";

import { LanguageContext} from "../../Contexts/LanguageContext"

import { useContext } from "react";
const Card = () =>{
    const { handleChange } = useContext(CartContext);
    const { handleLanguage } = useContext(LanguageContext);
    return (
        <div style={{
            width: "300px",
            height: "300px",
            padding: "10px",
            background: "teal",
        }}>
            <button onClick={() =>{
                handleChange(1);
            }}>Add To Cart</button>
            <br />

            <button onClick={() =>{
                handleLanguage();
            }}>Change Language</button>
        </div>
    )
}

export { Card }