import { createGlobalStyle } from "styled-components";
import background from "./assets/backgroundhomepage.jpg"

const GlobalStyles = createGlobalStyle`
body{
    background-image: url(${background});
    background-size: cover;
}

.inputError{
    color: red;
    position: absolute;
    top: 3rem;
    font-size: 0.75rem;
}

@media (max-width: 650px){
    .inputError{
    color: red;
    position: absolute;
    top: 42.875rem;
    font-size: 0.75rem;
    }
}

*{
    list-style: none;
    text-decoration: none;
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;

}

:root{

    --brand: #E7A954;
    --brand-focus: #E2962E;
    
    --white: #FFFFFF;
    --grey-1: #F5F5F5;
    --grey-2: #E0E0E0;
    --grey-3: #828282;
    --grey-4: #333333;
    --grey-5: #101010; //escuro
    
    --title-1: 1.625rem; /* 26px */
    --title-2: 1.375rem; /* 22px */
    --title-3: 1.125rem; /* 18px */

    --text-1: 1rem; /* 16px */
    --text-2: 0.875rem; /* 14px */
    --text-3: 0.75rem; /* 12px */

    --font-w-1: 700;
    --font-w-2: 600;
    --font-w-3: 500;
    --font-w-4: 400;

    --toastify-text-color-dark: #E7A954;
    --toastify-color-progress-dark: #E7A954;

    --toastify-icon-color-success: #E7A954;
    --toastify-color-progress-success: #E7A954;

    --toastify-icon-color-warning: #E7A954;
    --toastify-color-progress-warning: #E7A954;

}

`
export default GlobalStyles