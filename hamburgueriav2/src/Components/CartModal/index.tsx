import { useContext } from "react"
import { CartContext } from "../../contexts/CartContext"
import CartList from "../CartList"
import CartTotal from "../CartTotal"
import CartModalStyles from "./styles"


const CartModal = () => {

    const { setModalOpen } = useContext(CartContext)

return(
    <CartModalStyles className="CartModalSection">
        <section className="cartContainer">
            <header className="cartHeader">
                <h2 className="cartTitle">Carrinho de compras</h2>
                <button className="closeModal" onClick={()=>{
                    setModalOpen(false)
                }}>X</button>
            </header>
            <main className="cartMain">
                <div className="cartListDiv">
                    <CartList />
                </div>
            </main>
            <footer className="buyProducts">
                <CartTotal/>
                <button className="buyProductsBttn">Finalizar compra</button>
            </footer>
        </section>
    </CartModalStyles>
)

}

export default CartModal