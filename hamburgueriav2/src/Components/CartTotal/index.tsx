import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"



const CartTotal = () => {

    const { cart } = useContext(CartContext)

    const pricesArr = cart.map(product => product.price);
    const finalPrice = pricesArr.reduce((accumulator, currentValue) => accumulator + currentValue,0).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})

return (
    <p className="totalPrice">{
        finalPrice
    }</p>
)

}

export default CartTotal