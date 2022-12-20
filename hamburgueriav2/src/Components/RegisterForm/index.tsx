import RegisterFormStyles from "./styles"
import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import instance from "../../services/api"
import { SubmitHandler } from "react-hook-form"

interface iRegisterValues{
    name: string;
    email: string;
    password: string;
    confirmPassword: string;
}

const RegisterForm = () => {

    const registerSchema = yup.object().shape({
        name: yup.string().required("É obrigatório um nome!").min(4,"O nome precisa ter no mínimo 4 caracteres.").max(200, "o nome pode ter no máximo 200 caracteres."),
        email: yup.string().required("É necessário um email!").email("Esse email não é válido!"),
        password: yup.string().required("É obrigatório uma senha!").matches(/(?=.*?[A-Z])/, "É necessário, pelo menos uma letra maíuscula").matches(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula.").matches(/(?=.*?[0-9])/, "É necessário, pelo menos um número.").matches(/(?=.*?[#?!@$%^&*-])/, "É necessário pelo menos um caractere special").min(6, "A senha precisa ter no mínimo 6 caracteres."),
        confirmPassword: yup.string().oneOf([yup.ref('password'), null], 'As senhas têm que coincidirem.'),
    })

    const { register, handleSubmit, formState: {errors} } = useForm<iRegisterValues>({
        resolver: yupResolver(registerSchema)
    })

    const registerFunction: SubmitHandler<iRegisterValues> = async (data) => {
        try{

            const response = await instance.post("/users", data)

            console.log(response)

        }catch(error){
            console.log(error)
        }
    }

return(
    <RegisterFormStyles onSubmit={handleSubmit(registerFunction)}
    noValidate 
    autoComplete="off">
        <label htmlFor="registerName" className="labelRegisterName">
            <input type="text" id="registerName" {...register("name")} />
                {errors.name?.message && <p aria-label="error" className="inputError">{errors.name?.message}</p>}
            <span className="registerNameSpan">Nome</span>
        </label>
        <label htmlFor="registerEmail" className="labelRegisterEmail">
            <input type="email" id="registerEmail" {...register("email")} />
                {errors.email?.message && <p aria-label="error" className="inputError">{errors.email?.message}</p>}
            <span className="registerEmailSpan">Email</span>
        </label>
        <label htmlFor="registerPassword" className="labelRegisterPassword">
            <input type="password" id="registerPassword" {...register("password")} />
                {errors.password?.message && <p aria-label="error" className="inputError">{errors.password?.message}</p>}
            <span className="registerPasswordSpan">Senha</span>
        </label>
        <label htmlFor="confirmPassword" className="labelRegisterPassword">
            <input type="password" id="confirmPassword" {...register("confirmPassword")} />
                {errors.confirmPassword?.message && <p aria-label="error" className="inputError">{errors.confirmPassword?.message}</p>}
            <span className="registerPasswordSpan">Confirmar senha</span>
        </label>
        <div className="submitDiv">
            <button type="submit" className="registerSubmitBttn">Cadastrar</button>
        </div>

    </RegisterFormStyles>
)

}

export default RegisterForm