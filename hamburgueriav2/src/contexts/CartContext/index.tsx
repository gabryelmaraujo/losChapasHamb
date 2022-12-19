import { createContext, useState } from "react";
import { iProducts } from "../ProductsContext";

interface iCartValues{
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: (id: number) => void;
}

export const CartContext = createContext({} as iCartValues)

interface iCartProps{
    children: React.ReactNode
}

export const CartProvider = ({children}: iCartProps) => {

    const [modalOpen, setModalOpen] = useState(false)

    function addToCart(id: number){

        console.log(id)

    }

return(
    <CartContext.Provider value={{
        modalOpen,
        setModalOpen,
        addToCart
    }}>
        { children }
    </CartContext.Provider>
)

}