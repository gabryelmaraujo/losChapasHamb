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
        width: 100%;
    }
    .utilitiesDiv{
        display: flex;
        gap: 1.5rem;
        align-items: center;
    }

    .toLoginAnchor{
        color: var(--brand);
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
        width: 5%;
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

`
export default MainPageStyles