import RegisterPageStyles from "./styles"
import losChapasLogo from "../../assets/loschapaslogo.png"
import RegisterForm from "../../Components/RegisterForm"

const RegisterPage  = () => {

return(
    <RegisterPageStyles>
        <main className="registerPageMain">
            <section className="logoLosChapasDiv">
                <img src={losChapasLogo} alt="" className="logoLosChapas" />
            </section>
            <section className="registerSection">
                <h1 className="registerAreaTitle">Área de cadastro</h1>
                <RegisterForm />
                <a href="/" className="backToSite">Voltar para o site</a>
            </section>
        </main>
    </RegisterPageStyles>
)

}

export default RegisterPage