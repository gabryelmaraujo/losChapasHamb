import { createContext, useState} from "react";

import { toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


interface iUserProviderValues{
    loggedUser: iLoggedUser;
    isLogged: boolean;
    setLoggedUser: React.Dispatch<React.SetStateAction<iLoggedUser>>;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    loggedToken: string | null;
    userNotify: (result: string) => void;
}

export const UserContext = createContext({} as iUserProviderValues)

export interface iLoggedUser {
    accessToken: string
    user: iUser
}
  
export interface iUser {
    email: string
    name: string
    id: number
}

interface iUserProviderProps{
    children: React.ReactNode;
}


export const UserProvider = ({children}: iUserProviderProps) => {


    const [loggedUser, setLoggedUser] = useState({} as iLoggedUser)
    const [isLogged, setIsLogged] = useState(false)
    const loggedToken = localStorage.getItem("@LosChapas/token")

    function userNotify(result: string){
        if(result === "registerSuccess"){
            toast.success("A sua conta foi criada com sucesso!", {
                position: toast.POSITION.TOP_RIGHT
              });
        }else if(result === "registerEmailError"){
            toast.error("Esse email já está sendo usado!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
        }else if(result === "loginError"){
            toast.error("Email e/ou senha errados!", {
                position: toast.POSITION.BOTTOM_CENTER
              });
        }
    }

return(
    <UserContext.Provider value={{
        loggedUser,
        setLoggedUser,
        isLogged,
        setIsLogged,
        loggedToken,
        userNotify
    }}>
        {children}
    </UserContext.Provider>
)

}
