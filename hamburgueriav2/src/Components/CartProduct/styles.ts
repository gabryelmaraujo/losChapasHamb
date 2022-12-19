import styled from "styled-components";


const CartProductStyles = styled.li`

    box-shadow: 0rem 0rem 0.625rem 0rem rgba(231, 169, 84, 0.4);

    height: 5rem;
    width: 100%;

    display: flex;

    border: 0.06rem solid var(--grey-5);
    border-radius: 0.25rem;

    .productImgDiv{
        height: 100%;
        width: 5.625rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .productImg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .productInfosDiv{
        height: 100%;
        width: 15rem;
        padding: 0 1rem;
        color: var(--brand);
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
    }

    .productRemoveDiv{
        height: 100%;
        width: 4rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .productRemoveBttn{
        width: 80%;
        height: 60%;
        border: 0;
        background-color: var(--grey-5);
        color: var(--brand);
        cursor: pointer;
    }

`
export default CartProductStyles