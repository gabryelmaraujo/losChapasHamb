import CartList from "../CartList"
import CartModalStyles from "./styles"


const CartModal = () => {

return(
    <CartModalStyles className="CartModalSection">
        <section className="cartContainer">
            <header className="cartHeader">
                <h2 className="cartTitle">Carrinho de compras</h2>
                <button className="closeModal">X</button>
            </header>
            <main className="cartMain">
                <div className="cartListDiv">
                    <CartList />
                </div>
            </main>
            <footer className="buyProducts">
                <p className="totalPrice">R$ 000,00</p>
                <button className="buyProductsBttn">Finalizar compra</button>
            </footer>
        </section>
    </CartModalStyles>
)

}

export default CartModal