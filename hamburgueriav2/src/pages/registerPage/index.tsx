import RegisterPageStyles from "./styles"
import losChapasLogo from "../../assets/loschapaslogo.png"
import RegisterForm from "../../Components/RegisterForm"
import {Link} from "react-router-dom"


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
                    <Link to={"/login"}>
                            <div className="backToSite">Voltar para o login</div>
                    </Link>
                </section>
            </main>
        </RegisterPageStyles>
    )

}

export default RegisterPage