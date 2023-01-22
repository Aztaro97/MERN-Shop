import React from "react";
import styled from "styled-components";
import MainContainer from "../MainContainer";
import Button from "../ButtonComponeent";
import { useHistory } from "react-router";

function ErrorServerPage() {
  const history = useHistory();
  return (
    <MainContainer>
      <Container>
        <h1 className="title">internal server error</h1>
        <h1 className="number">500</h1>
        <h1 className="text">
          The server has been deserted for a while. <br /> Please be patient or
          try again later.
        </h1>
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
  & .title {
    color: var(--silver-color);
    font-size: 3rem;
    text-transform: capitalize;
    margin: 0;
  }
  /* display: flex; */
`;

export default ErrorServerPage;
