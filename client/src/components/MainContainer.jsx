import React from 'react';
import styled from 'styled-components';

function MainContainer({children, style}) {
    return (
        <Container style={style}>
            {children}
        </Container>
    )
}

const Container = styled.main`
    max-width:var(--max-width);
    margin: 7rem auto 4rem;
    padding-bottom: 2.5rem;
    height: 100%;
    display: block;

    @media only screen and (max-width: 1040px) {
    padding: 0 2rem;
  }


`

export default MainContainer;
