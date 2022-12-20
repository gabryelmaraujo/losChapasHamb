import styled from "styled-components"


const ProductsListStyles = styled.ul`

    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 3rem;

    @media (max-width: 650px){
        min-width: 91rem;
    }

`

export default ProductsListStyles