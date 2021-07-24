import React from 'react';
import styled from 'styled-components';

function MainContainer({children, style}) {
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}

const Container = styled.div`
    max-width:var(--max-width);
    margin: 7rem auto 0;
    /* @media only screen and (max-width:2500px) {
        padding: 0 4rem;
    }
    @media only screen and (max-width:890px) {
        padding: 0 1rem;
    } */
`

export default MainContainer;
