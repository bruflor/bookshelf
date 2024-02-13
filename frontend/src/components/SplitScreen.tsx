import styled from "styled-components";
import React from "react";

const Container = styled.div`
    display:flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }
`;

const Panel = styled.div`
    flex: 1;
`
export const SplitScreen = ({children}:{children: {left: React.ReactNode, right: React.ReactNode}}) => {
    const {left, right} = children
    return(
        <Container>
            <Panel>
                {left}
            </Panel>
            <Panel>
                {right}
            </Panel>
        </Container>
    )
}