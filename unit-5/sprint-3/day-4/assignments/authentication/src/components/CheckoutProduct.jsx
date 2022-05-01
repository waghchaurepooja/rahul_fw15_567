
import "./CheckoutProduct.css";

import { useContext, useState } from "react"

import { BasketContext } from "../contexts/BasketContext";

export const CheckoutProduct = ({id, image, title, rating, price}) =>{

    const { handleItemRemove } = useContext(BasketContext);

    return (
        <div className="checkoutProduct">
            <img className="checkoutProduct__image" src={image} alt="" />

            <div className="checkoutProduct__info">
                <p className="checkoutProduct__title">
                    {title}
                </p>

                <p className="checkoutProduct__price">
                    <small>₹ </small>
                    <strong>{price}</strong>    
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating).fill().map((_, i) =>{
                        return (
                            <p>🌟</p>
                        )
                    })}
                </div>
                <button onClick={() =>{
                    handleItemRemove(id)
                }}>Remove From Basket</button>
            </div> 
        </div>
    )
}