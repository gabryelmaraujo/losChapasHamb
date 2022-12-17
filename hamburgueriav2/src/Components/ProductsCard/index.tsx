import ProductsCardStyles from "./styles"

import { iProducts } from "../../contexts/ProductsContext"

const ProductsList = ({id: identificator, name, category, price, img}: iProducts) => {

return(
    <ProductsCardStyles id={identificator.toString()}>
        <div className="productImgDiv">
            <img src={img} alt="" className="productImg"/>
        </div>
        <main className="cardMain">
            <p className="productName">{name}</p>
            <p className="productPrice">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            <button className="addToCartBttn">Adicionar ao carrinho</button>
        </main>
    </ProductsCardStyles>
)

}

export default ProductsList