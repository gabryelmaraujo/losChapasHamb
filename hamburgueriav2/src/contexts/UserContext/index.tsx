import { createContext, useState} from "react";


interface iUserProviderValues{
    loggedUser: iLoggedUser;
    isLogged: boolean;
    setLoggedUser: React.Dispatch<React.SetStateAction<iLoggedUser>>;
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>;
    loggedToken: string | null;
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

return(
    <UserContext.Provider value={{
        loggedUser,
        setLoggedUser,
        isLogged,
        setIsLogged,
        loggedToken
    }}>
        {children}
    </UserContext.Provider>
)

}
