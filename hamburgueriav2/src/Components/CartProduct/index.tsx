import { useContext } from "react"

import CartProductStyles from "./styles"

import { iProducts } from "../../contexts/ProductsContext"
import { CartContext } from "../../contexts/CartContext"

const CartProduct = ({id, name, price, img}: iProducts) => {

    const { cart, setCart } = useContext(CartContext)

    function removeProduct(id: number){

        const onCart = [...cart]

        const filteredCart = onCart.filter(product => product.id !== id)

        setCart(filteredCart)

    }

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
            <button className="productRemoveBttn" onClick={()=>{
                removeProduct(id)
            }} >X</button>
        </div>
    </CartProductStyles>
)

}

export default CartProduct