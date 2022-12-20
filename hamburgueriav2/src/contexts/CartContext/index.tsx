import { Component, createContext, useState } from "react";
import { iProducts } from "../ProductsContext";

interface iCartValues{
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: (product: iProducts[]) => void;
    cart: iProducts[];
    setCart: React.Dispatch<React.SetStateAction<iProducts[]>>;
}

export const CartContext = createContext({} as iCartValues)

interface iCartProps{
    children: React.ReactNode
}

export const CartProvider = ({children}: iCartProps) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [cart, setCart] = useState([] as iProducts[])

    function addToCart(product: iProducts[]){
        // ...cart, product -> como passar o ...cart dentro desse set state
        setCart(product)
        console.log(cart)

    }

return(
    <CartContext.Provider value={{
        modalOpen,
        setModalOpen,
        addToCart,
        cart,
        setCart
    }}>
        { children }
    </CartContext.Provider>
)

}