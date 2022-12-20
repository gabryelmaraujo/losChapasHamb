import styled from "styled-components";


const CartListStyles = styled.ul`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1.3rem;
    padding: 0.3rem;

    @media (max-width: 329px){
        height: 100%;
        flex-direction: row;
        overflow-x: scroll;
        overflow-y: hidden;
    }

`

export default CartListStyles