
import LoginFormStyles from "./styles"

const LoginForm = () => {

return(
    <LoginFormStyles noValidate
        autoComplete="off">
            <label htmlFor="input-email" className="email-label">
                <input type="email" name="input-email" id="input-email" className="input-email"/>
                <span className="email-label-span">Email</span>
            </label>
            
            <label htmlFor="input-password" className="password-label">
                <input type="password" name="input-password" id="input-password" />
                <span className="password-label-span">Senha</span>
            </label>

            <button type="submit" id="login-button">Login</button>
            <div className="goRegisterDiv">
                <span>Ainda não tem uma conta?</span>
                <a href="/" className="toRegisterAnchor">Cadastre-se</a>
            </div>


    </LoginFormStyles>
)

}

export default LoginForm