import styled from "styled-components";


const MainPageStyles = styled.div`


    width: 100%;
    height: 100vh;
    background-size: cover;

    .mainPageHeader{
        background-color: var(--grey-5);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10%;
        height: 3rem;
        box-shadow: 0px 2px 5px 0px rgba(231, 169, 84, 0.4);
    }

    .logoLosChapasDiv{
        width: 10%;
    }

    .logoLosChapas{
        width: 9.625rem;
    }
    .utilitiesDiv{
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .toLoginButton{
        color: var(--brand);
        background-color: unset;
        border: 0;
    }

    .headerCartDiv{
        position: relative;
    }

    .contadorItensCarrinhoDiv{
        position: absolute;
        top: 0;
        left: 75%;
        border: 1px solid var(--brand);
        border-radius: 100%;
        padding: 0 4px;

        background-color: var(--brand);
    }

    .contadorItens{
        color: var(--grey5);
    }

    .openCartButton{
        width: 2rem;
        background-color: unset;
        border: none;
        cursor: pointer;
    }
    
    .cartImg{
        width: 100%;
    }

    .mainContainer{
        padding: 2rem  10%;
        height: 100%;
        margin-bottom: 5rem;
    }

    .mainPageMain{
        height: 100%;
        width: 100%;
    }

    .searchDiv{
        height: 3rem;
        margin-bottom: 3rem;
    }

    .mainPageFooter{
        background-color: var(--grey-5);
        display: flex;
        gap: 4rem;
        padding: 2rem;
    }

    .igIcon{
        width: 1.625rem;
    }

    h2{
        color: var(--white);
        font-size: var(--title-3);
        margin-bottom: 0.8rem;
    }

    .mainPageFooter p{
        font-size: var(--text-2);
        color: var(--brand);
    }

    .contactDiv{
        width: 30%;
    }

    .addresDiv{
        width: 30%;
        padding: 0 2rem;
    }

    .openingHoursDiv{
        width: 30%;
    }

@media (max-width: 1200px){
    .productsListDiv{
        max-height: 31.25rem;
        overflow-y: scroll;
        overflow-x: hidden;
        padding: 2rem;
    }

    .mainContainer{
        height: 38.5rem;
        margin-bottom: 0;
    }

    .searchDiv{
        margin-bottom: 0;
    }
}

@media (max-width: 900px){

    .searchDiv{
        margin-bottom: 1rem;
    }

    .mainContainer{
        height: 29.5rem;
    }

    .productsListDiv{
        max-height: 22.25rem;
    }
}

@media (max-width: 650px){
    
    .mainContainer{
        height: 29.5rem;
    }
    
    .productsListDiv{
        overflow-x: scroll;
    }
}

@media (max-width: 475px){

    .mainContainer{
        height: 27.5rem;
    }

    .mainPageFooter{
        flex-direction: column;
    }

    .contactDiv, .addresDiv, .openingHoursDiv{
        width: 100%;
    }

}

`
export default MainPageStyles