import { createContext, useState } from "react";
import { iProducts } from "../ProductsContext";

import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
interface iCartValues{
    modalOpen: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
    addToCart: (product: iProducts) => void;
    cart: iProducts[];
    setCart: React.Dispatch<React.SetStateAction<iProducts[]>>;
    cartToastify: (result: string) => void;
}

export const CartContext = createContext({} as iCartValues)

interface iCartProps{
    children: React.ReactNode
}

export const CartProvider = ({children}: iCartProps) => {

    const [modalOpen, setModalOpen] = useState(false)
    const [cart, setCart] = useState([] as iProducts[])

    function cartToastify(result: string){
        if(result === "readyAdded"){
            toast.warn("Você já adicionou esse produto no carrinho!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }else if(result === "submitCart"){
            toast.success("A sua compra foi efetuada, obrigado!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }

    }

    function addToCart(product: iProducts){

        const cartChecker = cart.find(onCart => onCart.id === product.id)

        const attCart = [...cart, product]

        if(cartChecker === undefined){
            setCart(attCart)
        }else{
            cartToastify("readyAdded")
        }
    }

return(
    <CartContext.Provider value={{
        modalOpen,
        setModalOpen,
        addToCart,
        cart,
        setCart,
        cartToastify
    }}>
        { children }
    </CartContext.Provider>
)

}