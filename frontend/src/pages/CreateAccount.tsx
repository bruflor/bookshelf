import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.theme.colors.primary};
  border-radius: 3px;
  border: 2px solid ${(props) => props.theme.colors.purple};
  color: aquamarine;
  margin: 0 1em;
  padding: 0.25em 1em;
`
const CreateAccount = () => {
    return (
        <div>
            <h1>Create Account</h1>
            <Button>Create</Button>
        </div>
    )   
}

export default CreateAccount