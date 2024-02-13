import styled from "styled-components";

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid aquamarine;
  color: aquamarine;
  margin: 0 1em;
  padding: 0.25em 1em;
`
export const CreateAccount = () => {
    return (
        <div>
            <h1>Create Account</h1>
            <Button>Create</Button>
        </div>
    )   
}