import styled from "styled-components";
import {SplitScreen} from "../components/SplitScreen.tsx";


const Container = styled.div`
background-color: #535bf2;
`
const Image = styled.img.attrs(props => ({src: props.src, alt: props.alt}))`
    height: 60vh;
    width: auto;
    align-self: end;
`
const CreateAccount = () => {

    const image = <Image src={"/reader.png"} alt="woman reading a book abd drinking tea"/>
    const form = <CreateAccountForm/>
    return (
        <SplitScreen children={{left: form, right: image}}/>
    )
}

const CreateAccountForm = () => {
    return (
        <Container>
        <h1>Create Account</h1>
        </Container>
    )
}
export default CreateAccount