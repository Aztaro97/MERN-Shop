import React from "react";
import styled from "styled-components";

function MainContainer({ children, style }) {
  return <Container style={style} >{children}</Container>;
}

const Container = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  min-height: 51vh;
  display: block;
  overflow-x: hidden;
  overflow-y: hidden;


  @media only screen and (max-width: 1040px) {
    padding: 0 0.5rem;
  }
`;

export default MainContainer;
