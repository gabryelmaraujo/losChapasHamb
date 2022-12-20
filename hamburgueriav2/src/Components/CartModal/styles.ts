import styled from "styled-components";

const CartModalStyles = styled.section`

    height: 151%;
    width: 100%;

    position: absolute;
    top: 0;
    left: 0;
    z-index: 3000;
    
    background-color: rgba(0,0,0,0.3);

    display: flex;
    justify-content: center;

    .cartContainer{
        width: 25rem;
        height: 25rem;
        background-color: var(--grey-5);

        position: absolute;
        top: 10%;
        
        border: 0.06rem solid var(--grey-5);
        border-radius: 0.25rem;

        box-shadow: 0rem 0rem 0.625rem 0rem rgba(231, 169, 84, 0.4);

        padding: 2rem;
    }

    @media (max-width: 520px){
        .cartContainer{
            width: 20rem;
        }
    }

    @media (max-width: 410px){
        .cartContainer{
            width: 16rem;
        }
    }

    @media (max-width: 330px){
        .cartContainer{
            width: 13rem;
        }
    }

    .cartHeader{
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 0.8rem;
    }

    .cartTitle{
        color: var(--brand);
    }
    
    .closeModal{

        border: 0rem;

        height: 2rem;
        width: 2rem;

        background-color: var(--grey-5);
        color: var(--brand);

        cursor: pointer;
    }

    .cartMain{
        width: 25rem;
        height: 20rem;
        margin-bottom: 0.625rem;
    }

    @media (max-width: 520px) {
        .cartMain{
            width: 20rem;
        }
    }
    @media (max-width: 410px) {
        .cartMain{
            width: 16rem;
        }
    }
    @media (max-width: 329px) {
        .cartMain{
            width: 13rem;
            height: 19rem;
        }
    }

    .cartListDiv{
        width: 100%;
        height: 100%;
        
        overflow-y: scroll;
        overflow-x: hidden;
    }

    .cartListDiv::-webkit-scrollbar {
        width: 0rem;
    }

    .buyProducts{
        width: 100%;
        height: 3rem;

        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    .totalPrice{
        color: var(--brand);
    }

    .buyProductsBttn{
        height: 1.8rem;
        padding: 0 0.5rem;
        background-color: var(--brand);
        color: var(--white);

        border: 0.06rem solid var(--brand);
        border-radius: 0.25rem;

        cursor: pointer;
    }

`

export default CartModalStyles