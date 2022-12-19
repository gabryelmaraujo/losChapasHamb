import * as yup from "yup"
import { SubmitHandler, useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import LoginFormStyles from "./styles"
import { yupResolver } from "@hookform/resolvers/yup"
import instance from "../../services/api"
import { useNavigate } from "react-router-dom";
import { useState, useContext } from "react"
import { iLoggedUser, UserContext } from "../../contexts/UserContext"
import { ProductsContext } from "../../contexts/ProductsContext"

interface iLoginFormValues{
    email: string;
    password: string;
}

  
const LoginForm = () => {

    
    const { setIsLogged, setLoggedUser } = useContext(UserContext)
    const { getProducts } = useContext(ProductsContext)

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

            const response = await instance.post<iLoggedUser>("/login", data)

            if(response.status === 200){

                const loggedToken = response.data.accessToken

                setIsLogged(true)
                setLoggedUser(response.data)

                getProducts(loggedToken)

                setTimeout(()=>{
                    navigate("/main")
                }, 2500)
                
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
        </LoginFormStyles>
    )

}

export default LoginForm