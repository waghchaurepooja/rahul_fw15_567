
import "./Checkout.css";

import { Subtotal } from "./Subtotal";

import { useContext, useState } from "react"

import { BasketContext } from "../contexts/BasketContext";

import { CheckoutProduct } from "../components/CheckoutProduct";

export const Checkout = () =>{

    const { Basket } = useContext(BasketContext)

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/SingleTitle/BachanPandey/400x39-SWM_179._CB623270002_.jpg" alt="" className="checkout__ad" />

                <div>
                    <h2 className="checkout__title">
                        Your Shopping Basket
                    </h2>
                    {/* BasketItem */}
                    {Basket.map((element) =>{
                        return (
                            <CheckoutProduct id = {element.id} image = {element.image} rating = {element.rating} price = {element.price} title = {element.title} />
                        )
                    })}
                </div>
            </div>

            <div className="checkout__right">
                {/* Subtotal */}
                <Subtotal />
            </div>
        </div>
    )
}