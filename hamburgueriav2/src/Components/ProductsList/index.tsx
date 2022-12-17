import { useState, useContext } from "react"
import instance from "../../services/api"
import ProductsCard from "../ProductsCard"
import ProductsListStyles from "./styles"
import axios from "axios";
import { iProducts, ProductsContext } from "../../contexts/ProductsContext";


const ProductsList = () => {

    const { products } = useContext(ProductsContext)

return(
    <ProductsListStyles>
		{
			products.map<any>(({id, name, category, price, img}: iProducts)=>{
				return <ProductsCard key={id} id={id} name={name} category={category} price={price} img={img} />
			})
		}
    </ProductsListStyles>
)

}

export default ProductsList