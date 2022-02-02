import styled from "styled-components";

const Footer = styled.footer `
    width: 100%;
    height: 114px;

    display: flex;
    justify-content: space-between;

    button{
        width: 47.5%;
        height: 100%;

        display: flex;
        flex-direction: column;
        justify-content: space-between;

        padding-left: 11.56px;
        padding-top: 10.56px;
        padding-bottom: 9px;

        background-color: #A328D6;

        border: none;
        border-radius: 5px;

        span{
            width: 64px;

            font-family: 'Raleway';
            font-size: 17px;
            font-style: normal;
            font-weight: 700;
            line-height: 20px;
            letter-spacing: 0em;
            text-align: left;
            color: #FFFFFF
        }

        ion-icon{
            width: 27px;
            height: 27px;
            color: #FFFFFF;
        }
    }

`

export default Footer;