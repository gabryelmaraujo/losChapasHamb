import { createContext, useState } from "react";

interface iUserProviderValues{
    loggedUser: any;
    isLogged: boolean;
    setLoggedUser: React.Dispatch<React.SetStateAction<iUserData | any>>
    setIsLogged: React.Dispatch<React.SetStateAction<boolean>>
}

export const UserContext = createContext({} as iUserProviderValues)

export interface iUserData {
    accessToken: string;
    user: {
        email: string
        name: string
        id: number
    };
  }
  
export interface iLoggedUser {
    loggedUser: any;
    setLoggedUser: React.Dispatch<React.SetStateAction<iUserData>>;
  }

interface iUserProviderProps{
    children: React.ReactNode;
}


export const UserProvider = ({children}: iUserProviderProps) => {

    const [loggedUser, setLoggedUser] = useState<iLoggedUser | any>({})
    const [isLogged, setIsLogged] = useState(false)

return(
    <UserContext.Provider value={{
        loggedUser,
        setLoggedUser,
        isLogged,
        setIsLogged
    }}>
        {children}
    </UserContext.Provider>
)

}
