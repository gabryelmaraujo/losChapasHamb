import styled from "styled-components";

const SearchFormStyles = styled.form`
    width: 60%;
    margin: 0 auto;

    @media (max-width: 650px){
        width: 100%;
    }

input{
    width: 100%;
    height: 2.5rem;
    padding: 0 2%;

    background-color: var(--grey-5);
    color: var(--grey-3);

    border: 0.06rem solid var(--grey-4);
    border-radius: 0.25rem;
}

`

export default SearchFormStyles