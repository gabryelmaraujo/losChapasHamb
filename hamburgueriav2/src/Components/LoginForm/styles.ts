import styled from "styled-components";


const LoginFormStyles = styled.form`

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

    .email-label, .password-label{
        position: relative;
    }

    .email-label-span, .password-label-span{
        color: var(--brand);
        background-color: var(--grey-5);
        position: absolute;
        left: 1rem;
        top: -0.625rem;
        width: 4rem;
        text-align: center;
    }

    #login-button{
        height: 2.5rem;
        color: var(--white);
        background-color: var(--brand);
        
        border: 0.06px solid var(--brand);
        border-radius: 0.25rem;

        cursor: pointer;
        width: 70%;
        margin: 0 auto;
    }

    .goRegisterDiv{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        color: white;

        margin-top: 1rem;
    }
    .toRegisterAnchor{
        margin-top: 1rem;
        color: var(--brand);
        text-decoration: underline;
        cursor: pointer;
    }


`

export default LoginFormStyles