import { createContext, useState, useContext } from "react";
import instance from "../../services/api";
import { UserContext } from "../UserContext";

interface iProductsValues{
    products: iProducts[];
    setProducts: React.Dispatch<React.SetStateAction<iProducts[]>>;
    getProducts: (token:string) => void;
}

export const ProductsContext = createContext({} as iProductsValues)

interface iProductsProps{
    children: React.ReactNode;
}

export interface iProducts {
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}

export const ProductsProvider = ({children}: iProductsProps) => {

    const [products, setProducts] = useState([] as iProducts[])
    
    const getProducts = async (token: string) => {
            try{

                const response = await instance.get("/products", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                })

                setProducts(response.data)
    
            }catch(error){
                console.log(error)
            }
        
    }


return(
    <ProductsContext.Provider value={{
        products,
        setProducts,
        getProducts
    }}>
        {children}
    </ProductsContext.Provider>
)

}