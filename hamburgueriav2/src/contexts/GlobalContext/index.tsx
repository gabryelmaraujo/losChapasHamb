import { createContext } from "react";
import { CartProvider } from "../CartContext";
import { ProductsProvider } from "../ProductsContext";
import { UserProvider } from "../UserContext";


export const GlobalContext = createContext({})

interface iGlobalProps{
    children: React.ReactNode
}

export const GlobalProvider = ({children}: iGlobalProps) => {

    const cartProvider = CartProvider
    const productsProvider = ProductsProvider
    const userProvider = UserProvider

return(
    <GlobalContext.Provider value={{
        cartProvider,
        productsProvider,
        userProvider
    }}>
        {children}
    </GlobalContext.Provider>
)

}