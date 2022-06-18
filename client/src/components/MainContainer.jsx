import React from "react";
import styled from "styled-components";

function MainContainer({ children, style }) {
  return <Container style={style} >{children}</Container>;
}

const Container = styled.main`
  // max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 2rem;
  min-height: 100vh;
  display: block;
  overflow-x: hidden;
  overflow-y: hidden;
  @media only screen and (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export default MainContainer;
