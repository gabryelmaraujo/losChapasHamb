import RegisterFormStyles from "./styles"


const RegisterForm = () => {

return(
    <RegisterFormStyles noValidate autoComplete="off">
        <label htmlFor="registerName" className="labelRegisterName">
            <input type="text" name="registerName" id="registerName" />
            <span className="registerNameSpan">Nome</span>
        </label>
        <label htmlFor="registerEmail" className="labelRegisterEmail">
            <input type="email" name="registerEmail" id="registerEmail" />
            <span className="registerEmailSpan">Email</span>
        </label>
        <label htmlFor="registerPassword" className="labelRegisterPassword">
            <input type="password" name="registerPassword" id="registerPassword" />
            <span className="registerPasswordSpan">Senha</span>
        </label>
        <div className="submitDiv">
            <button type="submit" className="registerSubmitBttn">Cadastrar</button>
        </div>

    </RegisterFormStyles>
)

}

export default RegisterForm