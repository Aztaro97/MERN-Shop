import React from "react";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import Button from "../ButtonComponeent";
import { useHistory } from "react-router";

function PageNotFund() {
  const history = useHistory();
  return (
    <MainContainer>
      <Container>
        <h1 className="number">404</h1>
        <h1 className="text">Sorry, the page you visited does not exist</h1>
        <Button style={{ marginTop: 20 }} onClick={() => history.push("/")}>
          Back to home
        </Button>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  height: 40vh;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  & .number {
    font-size: 12rem;
    letter-spacing: 7px;
    margin: 0;
    color: var(--silver-color);
  }
  & .text {
    color: var(--silver-color);
    font-size: 1.2rem;
  }
  /* display: flex; */
`;

export default PageNotFund;
