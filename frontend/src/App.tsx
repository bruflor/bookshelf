import {BrowserRouter} from "react-router-dom";
import {Router} from "./Router.tsx";
import styled, {ThemeProvider} from "styled-components";
import {defaultTheme} from "./styles/defaultTheme.ts";

const Container = styled.div`
    background: ${(props) => props.theme.colors.primary};
`; // styled-container
function App() {
  return (
    <BrowserRouter >
        <ThemeProvider theme={defaultTheme}>
            <Container>
                <Router />
            </Container>
        </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
