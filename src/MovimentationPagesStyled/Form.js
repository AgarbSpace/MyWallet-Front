import styled from "styled-components";

const Form = styled.form `
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 13px;

    input{
        width: 100%;
        height: 58px;

        display: flex;
        align-items: center;

        padding-left: 15px;

        border: none;
        border-radius: 5px;

        ::placeholder{
            font-family: Raleway;
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 23px;
            letter-spacing: 0em;
            text-align: left;
            color: #000000;

        }
    }

    button{
        width: 100%;
        height: 46px;

        display: flex;
        align-items: center;
        justify-content: center;

        border: none;
        border-radius: 5px;

        font-family: Raleway;
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
        background-color: #A328D6;

    }

`

export default Form;