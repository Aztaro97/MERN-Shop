import React from 'react';
import styled from 'styled-components';

function MainContainer({children}) {
    return (
        <Container>
            {children}
        </Container>
    )
}

const Container = styled.div`
    /* max-width:1300px; */
    margin: 0 auto;
    /* @media only screen and (max-width:2500px) {
        padding: 0 4rem;
    }
    @media only screen and (max-width:890px) {
        padding: 0 1rem;
    } */
`

export default MainContainer;
