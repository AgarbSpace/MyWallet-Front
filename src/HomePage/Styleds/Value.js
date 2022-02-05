import styled from "styled-components";

const Value = styled.span `
    font-family: Raleway;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 19px;
    letter-spacing: 0em;
    text-align: right;
    color: ${props => props.type === "deposit" ? "#39AC00" : "#C70900"};

    padding-right: 12px;

`

export default Value;