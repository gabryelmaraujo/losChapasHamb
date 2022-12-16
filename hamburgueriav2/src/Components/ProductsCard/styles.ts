import styled from "styled-components"


const ProductsCardStyles = styled.li`

    border: 0.06rem solid rgba(0, 0, 0, 0);
    border-radius: 0.5rem;
    box-shadow: 0px 0px 10px 0px rgba(231, 169, 84, 0.4);
    width: 12.5rem;

    .productImgDiv{
        width: 100%;
        height: 10rem;
        background-color: rgba(0, 0, 0, 1);
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 0.5rem 0.5rem 0 0;
    }

    .productImg{
        width: 80%;
        object-fit: cover;
    }

    .cardMain{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 1rem;
        padding: 0.5rem;
        border-radius: 0 0 0.5rem 0.5rem;

        background-color: var(--grey-5);
    }

    .productName{
        color: var(--brand);
    }

    .productPrice{
        color: var(--brand);
    }

    .addToCartBttn{
        height: 2rem;

        color: var(--white);
        background-color: var(--brand);
        font-weight: var(--font-w-3);

        border: 0.06rem solid var(--brand);
        border-radius: 0.25rem;

        padding: 0 0.5rem;

        transition: all 0.8s;

        cursor: pointer;

        margin-bottom: 0.6rem;
    }


`

export default ProductsCardStyles