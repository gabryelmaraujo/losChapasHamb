import styled from "styled-components";
import background from "../../assets/backgroundhomepage.jpg"

const HomePageStyles = styled.div`
    height: 100vh;
    width: 100%;
    background-image: url(${background});
    background-size: cover;

    display: flex;
    justify-content: center;
    align-items: center;

    .homePageMain{
        margin: 0 auto;
        display: flex;
    }
    .bannerImg{
        width: 35rem;
    }
    .descriptionSection{
        width: 27rem;
        height: 27rem;

        display: flex;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
    .losChapasLogo{
        width: 25rem;
        margin-bottom: 0.25rem;
    }
    .bestBurgerDiv{
        width: 100%;
        color: var(--brand);
        margin-bottom: 2rem;
        text-align: center;
    }
    .goToSiteBttn{
        color: var(--brand);
        background-color: unset;
        border: 1px solid var(--brand);
        padding: 0 1rem;
        height: 2rem;
        cursor: pointer;
        transition: all 0.5s;
    }
    .goToSiteBttn:hover{
        color: var(--white);
        background-color: var(--brand);
    }

    @media (max-width: 1030px){
        .homePageMain{
            align-items: center;
            flex-direction: column;
        }
        .descriptionSection{
            height: 100vh;
            background-color: rgba(0, 0, 0, 0.75);
            position: absolute;
            top: 0;
            width: 100%;
        }
    }

    @media (max-width: 570px){
        .bannerImg{
            width: 25rem;
        }
    }

    @media (max-width: 415px){
        .bannerImg{
            width: 19rem;
        }
        .losChapasLogo{
            width: 19rem;
        }
    }

`

export default HomePageStyles