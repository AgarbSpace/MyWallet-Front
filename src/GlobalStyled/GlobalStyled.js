import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyled = createGlobalStyle`
  ${reset}
  *{
        box-sizing: border-box;
    }

    body{
        width: 100%;
        height: 100vh;

        background-color: #8C11BE;
    }
`

export default GlobalStyled;