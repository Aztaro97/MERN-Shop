import React from "react";
import styled from "styled-components";

function MainContainer({ children, style }) {
  return <Container style={style} >{children}</Container>;
}

const Container = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0;
  min-height: 51vh;
  display: block;
  overflow-x: hidden;
  overflow-y: hidden;
`;

export default MainContainer;
