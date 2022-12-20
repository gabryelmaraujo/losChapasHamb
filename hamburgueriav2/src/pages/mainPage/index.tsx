import MainPageStyles from "./styles"
import cartImg from "../../assets/carrinhoIcon.png"
import igIcon from "../../assets/igpng.png"
import logoLosChapas from "../../assets/loschapaslogo.png"
import SearchForm from "../../Components/SearchForm"
import ProductsList from "../../Components/ProductsList"
import { Link, useNavigate } from "react-router-dom"
import CartModal from "../../Components/CartModal"
import { useContext, useEffect } from "react"
import { CartContext } from "../../contexts/CartContext"
import { UserContext, iLoggedUser } from "../../contexts/UserContext"
import { ProductsContext } from "../../contexts/ProductsContext"

const MainPage = () => {

    const { getProducts } = useContext(ProductsContext)
    const { modalOpen, setModalOpen, cart } = useContext(CartContext)
    const {loggedToken, setLoggedUser} = useContext(UserContext)


    const navigate = useNavigate()

    useEffect(()=>{

        if(loggedToken){
            getProducts(loggedToken)
        }else{
            navigate("/")
        }

    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    

return(
    <MainPageStyles>
        <header className="mainPageHeader">
            <div className="logoLosChapasDiv">
                <Link to={"/home"}>
                <img src={logoLosChapas} alt="" className="logoLosChapas"/>
                </Link>
            </div>
            <div className="utilitiesDiv">
                    <button className="toLoginButton" onClick={()=>{
                        localStorage.removeItem("@LosChapas/token")
                        setLoggedUser({} as iLoggedUser)

                        navigate("/")

                    }}>Sair</button>
                <div className="headerCartDiv">
                    <button className="openCartButton" onClick={()=>
                         setModalOpen(true) 
                    }>
                        <img src={cartImg} alt="" className="cartImg" />
                    </button>
                    <div className="contadorItensCarrinhoDiv">
                        <p className="contadorItens">{cart.length}</p>
                    </div>
                </div>
            </div>
        </header>
        {
            modalOpen ? <CartModal/> : null
        }
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