import styled from "styled-components";


const LoginPageStyles = styled.div`

    height: 100vh;
    width: 100%;


h1{
    color: var(--white);
    margin-bottom: 3rem;
}

.loginPageMain{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;

    height: 100%;
}

.loginSection{

    border: 0.06rem solid var(--grey-4);
    border-radius: 0.25rem;

    width: 25%;
    height: 21.875rem;
    padding: 1.5%;

    background-color: var(--grey-5);

}
.bannerSection{
    border: 0.06rem solid var(--grey-4);
    border-radius: 0.25rem;

    width: 25%;
    height: 21.875rem;
    padding: 1.5%;

    background-color: var(--grey-5);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.5rem;
}

.losChapasLogo{
    width: 100%;
}

.descriptionDiv{
    height: 6rem;
    
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;

}

.burgerIconDiv{
    width: 5rem;
    border: 0.06rem solid var(--grey-4);
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
}

.burgerIcon{
    width: 80%;
}

.descriptionParag{
    color: var(--brand);
    font-size: var(--text-3);
}


.goRegister{ 
    padding: 0.5rem 3rem;
    border: 0.06rem solid var(--brand);
    border-radius: 0.25rem;
    transition: all 0.8s;
    color: var(--brand);
}
.goRegister:hover{
    background-color: var(--brand);
    color: white;
}

@media (max-width: 830px){
    .bannerSection{
        width: 35%;
    }
}
@media (max-width: 610px){
    .bannerSection{
        display: none;
    }
    .loginSection{
        width: 45%;
    }
}
@media (max-width: 610px){
    .loginSection{
        width: 65%;
    }
}

`

export default LoginPageStyles