import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    body {
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.gray};
    font-family: ${props => props.theme.fontFamily};
    box-sizing: border-box;
    margin: 0;
    padding: 1rem 2rem;
    }
`

export default GlobalStyle