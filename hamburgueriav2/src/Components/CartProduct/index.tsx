import CartProductStyles from "./styles"
import chapasBurger from "../../assets/chapasburger.png"

const CartProduct = () => {

return(
    <CartProductStyles>
        <div className="productImgDiv">
            <img src={chapasBurger} alt="" className="productImg"/>
        </div>
        <div className="productInfosDiv">
            <p className="productName">Hamburguer</p>
            <p className="productPrice">R$ 35,00</p>
        </div>
        <div className="productRemoveDiv">
            <button className="productRemoveBttn">X</button>
        </div>
    </CartProductStyles>
)

}

export default CartProduct