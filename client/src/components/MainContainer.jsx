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
    margin: 7rem auto 0;
    padding-bottom: 2.5rem;


`

export default MainContainer;
