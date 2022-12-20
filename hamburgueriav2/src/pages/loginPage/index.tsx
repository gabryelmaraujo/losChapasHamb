import LoginForm from "../../Components/LoginForm"
import LoginPageStyles from "./styles"

import { useContext, useEffect } from "react"

import burgerIcon from "../../assets/burgericon.png"
import losChapasLogo from "../../assets/loschapaslogo.png"
import { Link, useNavigate } from "react-router-dom"
import { ProductsContext } from "../../contexts/ProductsContext"
import { CartContext } from "../../contexts/CartContext"
import { UserContext } from "../../contexts/UserContext"

const LoginPage = () => {

    const {loggedToken} = useContext(UserContext)

    const navigate = useNavigate()

    useEffect(()=>{

        if(loggedToken){
            navigate("/main")
        }

    },[loggedToken, navigate])

return(
    <LoginPageStyles>
        <main className="loginPageMain">

            <section className="loginSection">

                <h1>Login</h1>
                <LoginForm/>

            </section>

            <section className="bannerSection">
                <div className="losChapasLogoDiv">
                    <img src={losChapasLogo} alt="" className="losChapasLogo" />
                </div>
                <div className="descriptionDiv">
                    <div className="burgerIconDiv">
                        <img src={burgerIcon} alt="" className="burgerIcon" />
                    </div>
                    <p className="descriptionParag">A vida é como um hambúrger, é preciso recheá-la com os melhores ingredientes.</p>
                </div>
                <div className="backToSiteDiv">
                    <Link to={"/register"}>
                        <div className="goRegister">Faça a sua conta</div>
                    </Link>
                </div>
            </section>

        </main>
    </LoginPageStyles>
)

}

export default LoginPage