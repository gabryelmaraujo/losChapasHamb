import ProductsCardStyles from "./styles"

import { useContext } from "react"

import { iProducts } from "../../contexts/ProductsContext"
import { CartContext } from "../../contexts/CartContext"


const ProductsList = ({id, name, category, price, img}: iProducts) => {

    const { addToCart } = useContext(CartContext)

    const product = {
        id: id,
        name: name,
        category: category,
        price: price,
        img: img,
    }

return(
    <ProductsCardStyles id={id.toString()}>
        <div className="productImgDiv">
            <img src={img} alt="" className="productImg"/>
        </div>
        <main className="cardMain">
            <p className="productName">{name}</p>
            <p className="productPrice">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <button className="addToCartBttn" onClick={()=>
                addToCart(product)
                 }>Adicionar ao carrinho</button>
        </main>
    </ProductsCardStyles>
)

}

export default ProductsList