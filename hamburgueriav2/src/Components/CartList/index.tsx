import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartProduct from "../CartProduct"
import CartListStyles from "./styles"


const CartList = () => {

    const { cart } = useContext(CartContext)

return(
    <CartListStyles>
        {
            cart.map(product => <CartProduct 
                key={product.id} id={product.id} name={product.name} price={product.price} img={product.img} category={product.category} />)
        }
    </CartListStyles>
)

}

export default CartList
