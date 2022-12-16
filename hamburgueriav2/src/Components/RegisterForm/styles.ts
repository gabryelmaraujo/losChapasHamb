import styled from "styled-components";


const RegisterFormStyles = styled.form`

    width: 90%;
    padding: 0 2%;

    display: flex;
    flex-direction: column;



    input{
        height: 2rem;
        width: 95%;
        padding: 2%;
        background-color: unset;
        border: 0.06rem solid var(--brand);
        border-radius: 0.25rem;
        margin-bottom: 2rem;
        color: var(--brand);
    }

    .labelRegisterName, .labelRegisterEmail, .labelRegisterPassword{
        position: relative;
    }

    .registerNameSpan, .registerEmailSpan, .registerPasswordSpan{
        color: var(--brand);
        background-color: var(--grey-5);
        position: absolute;
        left: 1rem;
        top: -0.625rem;
        width: 4rem;
        text-align: center;
    }
    
    .submitDiv{
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .registerSubmitBttn{
        height: 3rem;
        width: 50%;
        color: var(--white);
        background-color: var(--brand);
        border: 0.06rem solid var(--brand);
        border-radius: 0.25rem;
        cursor: pointer;
    }

`

export default RegisterFormStyles