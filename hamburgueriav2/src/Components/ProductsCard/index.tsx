import ProductsCardStyles from "./styles"

import { iProducts } from "../../contexts/ProductsContext"
import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"

const ProductsList = ({id, name, category, price, img}: iProducts) => {

    const { addToCart } = useContext(CartContext)

return(
    <ProductsCardStyles id={id.toString()}>
        <div className="productImgDiv">
            <img src={img} alt="" className="productImg"/>
        </div>
        <main className="cardMain">
            <p className="productName">{name}</p>
            <p className="productPrice">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <button className="addToCartBttn" onClick={()=>{ console.log(id) }}>Adicionar ao carrinho</button>
        </main>
    </ProductsCardStyles>
)

}

export default ProductsList