import ProductsCardStyles from "./styles"
import burgerImg from "../../assets/chapasburger.png"

const ProductsList = () => {

return(
    <ProductsCardStyles>
        <div className="productImgDiv">
            <img src={burgerImg} alt="" className="productImg"/>
        </div>
        <main className="cardMain">
            <p className="productName">Hambúrguer</p>
            <p className="productPrice">R$ 30,00</p>
            <button className="addToCartBttn">Adicionar ao carrinho</button>
        </main>
    </ProductsCardStyles>
)

}

export default ProductsList