import styled from "styled-components";
import background from "../../assets/backgroundhomepage.jpg"

const LoginPageStyles = styled.div`

    height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-size: cover;

h1{
    color: var(--white);
    margin-bottom: 2rem;
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
    width: 20%;
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


.backToSite{ 
    padding: 0.5rem 2rem;
    width: 50%;
    border: 0.06rem solid var(--brand);
    border-radius: 0.25rem;
    transition: all 0.8s;
    color: var(--brand);
}
.backToSite:hover{
    background-color: var(--brand);
    color: white;
}

`

export default LoginPageStyles