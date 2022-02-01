import styled from "styled-components";


const InitialPagesContainer = styled.section `
    width: 87%;

    display: flex;
    flex-direction: column;
    justify-content: center;

    h1{
        font-family: 'Saira Stencil One';
        font-size: 32px;
        font-style: normal;
        font-weight: 400;
        line-height: 50px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;

        margin : 0 auto;
        margin-bottom: 24px;
    }

    input{
        width: 100%;
        height: 58px;

        display: flex;
        align-items: center;
        
        margin-bottom: 13px;
        
        border: none;
        border-radius: 5px;
    }

    input::placeholder{
        font-family: 'Raleway';
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;

        padding-left: 15px;
    }

    button{
        width: 100%;
        height: 46px;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: #A328D6;

        font-family: 'Raleway';
        font-size: 20px;
        font-style: normal;
        font-weight: 700;
        line-height: 23px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;

        margin-bottom: 36px;

        border: none;
        border-radius: 5px;
    }

    a{
        font-family: 'Raleway';
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: 18px;
        letter-spacing: 0em;
        text-align: left;
        text-decoration: none;
        color: #FFFFFF;

        margin: 0 auto;
    }

`

export default InitialPagesContainer;