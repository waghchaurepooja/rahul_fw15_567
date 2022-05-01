
import "./Subtotal.css";

import { useContext, useState } from "react"

import { BasketContext } from "../contexts/BasketContext";

// npm install react-currency-format

import CurrencyFormat from "react-currency-format";

export const Subtotal = () =>{

    const { Basket }  = useContext(BasketContext);

    
    var BasketTotal = Basket?.reduce((amount, item) =>{
        return (
            item.price + amount
            )
    },0)
        
    console.log('BasketTotal:', BasketTotal)
    return (
        <div className="subtotal">
            <CurrencyFormat 
            
                renderText={() =>{
                    return (
                        <>
                            <p>
                                Subtotal ({Basket.length} items) : <strong>{BasketTotal}</strong>
                            </p>
                            <small className="subtotal__gift">
                                <input type="checkbox" />
                                This order contains a gift
                            </small>
                        </>
                    )
                }}
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"₹"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}