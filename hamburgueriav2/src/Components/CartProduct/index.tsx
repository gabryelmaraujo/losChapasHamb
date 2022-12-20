import CartProductStyles from "./styles"

import { iProducts } from "../../contexts/ProductsContext"

const CartProduct = ({id, name, price, img}: iProducts) => {

return(
    <CartProductStyles>
        <div className="productImgDiv" id={id.toString()}>
            <img src={img} alt="" className="productImg"/>
        </div>
        <div className="productInfosDiv">
            <p className="productName">{name}</p>
            <p className="productPrice">{price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
        </div>
        <div className="productRemoveDiv">
            <button className="productRemoveBttn">X</button>
        </div>
    </CartProductStyles>
)

}

export default CartProduct