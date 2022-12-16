import LoginForm from "../../Components/LoginForm"
import LoginPageStyles from "./styles"


import burgerIcon from "../../assets/burgericon.png"
import losChapasLogo from "../../assets/loschapaslogo.png"

const LoginPage = () => {

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
                    <a href="/" className="backToSite">Voltar para o site</a>
                </div>
            </section>

        </main>
    </LoginPageStyles>
)

}

export default LoginPage