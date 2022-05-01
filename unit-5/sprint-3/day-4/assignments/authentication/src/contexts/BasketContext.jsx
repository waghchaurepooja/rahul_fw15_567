
import { createContext, useState } from "react";

// Prepares the dataLayer
export const BasketContext = createContext();

// Wrap our aap and provide the data layer
export const BasketContextProvider = ({children}) =>{

    const [Basket, setBasket] = useState([]);
    
    const handleItemRemove = (id) =>{
        // console.log('id:', id)
        
        const basket = Basket.filter((element) =>{
                return element.id !== id   
        })
            
        // console.log('basket:', basket)
        setBasket(basket);
    }
    
    const handleBasket = (id,title,image,price,rating) =>{
        
        // console.log('rating:', rating)
        // console.log('price:', price)
        // console.log('image:', image)
        // console.log('title:', title)
        // console.log('id:', id)

        const payload = {
            id : id,
            title : title,
            image : image,
            price : price,
            rating : rating
        }

        setBasket([...Basket, payload])
    }
    console.log('Basket:', Basket)
    
    return (

        <BasketContext.Provider value = {{Basket, handleBasket, handleItemRemove}}>{ children }</BasketContext.Provider>
    )

}

// Pull information from the data layer