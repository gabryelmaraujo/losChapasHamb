import { Routes, Route, Navigate } from "react-router-dom"
import HomePage from "../pages/homePage"
import LoginPage from "../pages/loginPage"
import MainPage from "../pages/mainPage"
import RegisterPage from "../pages/registerPage"


const AppRoutes = () => {

return(
    <Routes>
        <Route path="/home" element={ <HomePage/> } />
        <Route path="/main" element={ <MainPage/> } />
        <Route path="/login" element={ <LoginPage/> } />
        <Route path="/register" element={ <RegisterPage/> } />

        <Route path="*" element={<Navigate to={"/home"} />} />
    </Routes>
)

}

export default AppRoutes
