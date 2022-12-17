import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import LoginFormStyles from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import instance from "../../services/api"
import { useNavigate } from "react-router-dom";

interface iLoginFormValues{
    email: string;
    password: string;
}

const LoginForm = () => {

    const navigate = useNavigate()

    const loginSchema = yup.object().shape({
        email: yup.string().required("É necessário um email para logar!").email("O email não é valido!"),
        password: yup.string().required("É necessário digitar a senha!")
    })

    const { register, handleSubmit, formState: {errors} } = useForm<iLoginFormValues>({
        resolver: yupResolver(loginSchema)
    })

    const submitLogin: SubmitHandler<iLoginFormValues> = async (data) => {
        try{

            const response = await instance.post("/login", data)

            if(response.status === 200){
                navigate("/main")
            }

        }catch(error){
            console.log(error)
        }
    }

    return(
        <LoginFormStyles onSubmit={handleSubmit(submitLogin)}
        noValidate
        autoComplete="off">
                <label htmlFor="input-email" className="email-label">
                    <input type="email" id="input-email" className="input-email" {...register("email")} />
                    {errors.email?.message && <p aria-label="error" className="inputError">{errors.email?.message}</p>}
                    <span className="email-label-span">Email</span>
                </label>
                
                <label htmlFor="input-password" className="password-label"  >
                    <input type="password" id="input-password" {...register("password")}/>
                    {errors.password?.message && <p aria-label="error" className="inputError">{errors.password?.message}</p>}
                    <span className="password-label-span">Senha</span>
                </label>

                <button type="submit" id="login-button">Login</button>
                {/* <div className="goRegisterDiv">
                    <span>Ainda não tem uma conta?</span>
                    <Link to={"/register"} className="toRegisterAnchor">Cadastre-se</Link>
                </div> */}


        </LoginFormStyles>
    )

}

export default LoginForm