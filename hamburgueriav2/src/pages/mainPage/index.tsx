import MainPageStyles from "./styles"
import cartImg from "../../assets/carrinhoIcon.png"
import igIcon from "../../assets/igpng.png"
import logoLosChapas from "../../assets/loschapaslogo.png"
import SearchForm from "../../Components/SearchForm"
import ProductsList from "../../Components/ProductsList"
import { Link } from "react-router-dom"

const MainPage = () => {

return(
    <MainPageStyles>
        <header className="mainPageHeader">
            <div className="logoLosChapasDiv">
                <Link to={"/home"}>
                <img src={logoLosChapas} alt="" className="logoLosChapas"/>
                </Link>
            </div>
            <div className="utilitiesDiv">
                <Link to={"/login"}>
                    <div className="toLoginAnchor">Sair</div>
                </Link>
                <button className="openCartButton">
                    <img src={cartImg} alt="" className="cartImg" />
                </button>
            </div>
        </header>
        <section className="mainContainer">
            <main className="mainPageMain">
                <div className="searchDiv">
                    <SearchForm/>
                </div>
                <div className="productsListDiv">
                    <ProductsList/>
                </div>
            </main>
        </section>
        <footer className="mainPageFooter">
            <div className="contactDiv">
                <h2>Contatos</h2>
                <a href="https://www.instagram.com/loschapas/" className="instagramAnchor" target="_blank" rel="noreferrer">
                    <img src={igIcon} alt="" className="igIcon"/>
                </a>
                <p className="wppNumber">+55 (53) 999999999</p>
            </div>
            <div className="addressDiv">
                <h2>Endereço</h2>
                <p className="addresParag">R. Gonçalves Chaves, 3939 - Centro, Pelotas - RS, 96015-560</p>
            </div>
            <div className="openingHoursDiv">
                <h2>Horário de funcionamento</h2>
                <p className="openingHoursParag">Das 18:30 às 23:30h</p>
            </div>
        </footer>
    </MainPageStyles>
)

}

export default MainPage