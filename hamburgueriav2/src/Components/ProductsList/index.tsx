import { useState } from "react"
import instance from "../../services/api"
import ProductsCard from "../ProductsCard"
import ProductsListStyles from "./styles"
import axios from "axios";

interface iProducts{
	id: number,
	name: string,
	category: string,
	price: number,
	img: string
}

const ProductsList = () => {

    const [ products, setProducts ] = useState([] as iProducts[])


return(
    <ProductsListStyles>
        <ProductsCard/>
    </ProductsListStyles>
)

}

export default ProductsList