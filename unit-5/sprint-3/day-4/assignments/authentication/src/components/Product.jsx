
import "./Product.css";

import { useContext, useState } from "react";

import { BasketContext } from "../contexts/BasketContext";

export const Product = ({id, title, image, price, rating }) =>{

    const { handleBasket } = useContext(BasketContext)

    return (
        <div className="product">
            <div className="product__info">
                <p>{title}</p>
                <p className="product__price">
                    <small>₹ </small>
                    <strong> {price}</strong>
                </p>
                <div className="product__rating">
                    {Array(rating).fill().map((_,i) =>{
                        return (
                            <p>🌟</p>
                        )
                    })}
                </div>
            </div>
            <img className="product__img" src={image} alt="" />
            <button onClick={() =>{
                handleBasket(id,title,image,price,rating)
            }}>Add To Basket</button>
        </div>
    )
}