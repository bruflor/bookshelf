import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router.tsx";
import styled, {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/defaultTheme.ts";
import GlobalStyle from "./styles/GlobalStyle.tsx";

const Container = styled.div`
    background-color: ${props => props.theme.colors.shelf};
    min-height: calc(100vh - 2rem);
    padding: 1rem 2rem;
    border-radius: ${props => props.theme.borderRadius.small};
`

function App() {
  return (
    <BrowserRouter >
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Container>
                <Router />
            </Container>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
