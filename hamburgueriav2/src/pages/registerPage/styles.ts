
import styled from "styled-components";


const RegisterPageStyles = styled.div`
    height: 100vh;
    width: 100%;
    

    .registerPageMain{
        display: flex;
        align-items: center;
        flex-direction: column;
        gap: 1rem;
    }

    .logoLosChapasDiv{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 1rem;
    }

    .logoLosChapas{
        width: 14.875rem;
    }

    .registerSection{
        width: 35%;
        padding: 2% 1%;
        margin: 0 auto;
        
        
        background-color: var(--grey-5);
        
        border: 0.06rem solid var(--grey-5);
        border-radius: 0.25rem;

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        gap: 3rem;
    }

    .registerAreaTitle{
        color: var(--white);
    }

    .backToSite{
        color: var(--brand);
        text-decoration: underline;
    }

    @media (max-width: 768px){

        .registerSection{
            width: 50%;
        }
    }
    @media (max-width: 468px){

        .registerSection{
            width: 70%;
        }
    }
    @media (max-width: 400px){

        .registerSection{
            width: 80%;
        }
    }
    @media (min-width: 900px){
        .registerPageMain{
            gap: 1rem;
        }
    }

`

export default RegisterPageStyles