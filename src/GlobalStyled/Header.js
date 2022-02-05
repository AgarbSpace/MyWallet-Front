import styled from "styled-components";

const Header = styled.header `
    width: 100%;
    height: 31px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 22px;

    h1{
        font-family: Raleway;
        font-size: 26px;
        font-style: normal;
        font-weight: 700;
        line-height: 31px;
        letter-spacing: 0em;
        text-align: left;
        color: #FFFFFF;
    }

    ion-icon{
        width: 30px;
        height: 30px;

        color: #FFFFFF;
    }

    button{
        background-color: inherit;
        border: none
    }

    button:hover{
        opacity: 0.8;
    }
    
    button:active{
        opacity: 0.8;
    }

`

export default Header;