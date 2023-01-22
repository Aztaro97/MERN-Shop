import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import TextTransition, { presets } from "react-text-transition";

function ExhibitionScreen() {
  const [index, setIndex] = useState(0);
  const TEXTS = ["Comming soon", "exhibition management"];
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <MainContainer>
      <Container>
        <div className="contente">
          <h1>how to start an exhibition & event management business</h1>
          <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.default}
              className="text"
            />
          </h1>
        </div>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  height: 60vh;
  background: url("./img/exhibition/exhibition.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  align-items: center;

  & .contente {
    max-width: 800px;
    padding: 3rem 2rem;
    background: #000000b2;
    & h1 {
      color: var(--silver-color);
      text-align: center;
      text-transform: uppercase;
      font-size: 1.2rem;
      margin-bottom:20px;
    }
    & .text {
      font-size: 2.8rem;
      font-weight: 700;
      
    }
  }
`;

export default ExhibitionScreen;
