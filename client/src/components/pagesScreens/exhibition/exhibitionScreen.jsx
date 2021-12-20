import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";



function ExhibitionScreen() {
  const [index, setIndex] = useState(0);
  const TEXTS = ["Forest", "Building", "Tree", "Color"];
  // useEffect(() => {
  //   const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
  //   return () => clearTimeout(intervalId);
  // }, []);

  return (
    <MainContainer>
      <Container>
        <div className="contente">
          <h1>how to start an exhibition & event management business</h1>
          {/* <h1>
            <TextTransition
              text={TEXTS[index % TEXTS.length]}
              springConfig={presets.wobbly}
            />
          </h1> */}
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
  /* justify-content: center; */

  & .contente {
    max-width: 500px;
    padding: 3rem 2rem;
    /* background: var(--dark-color); * /
    background: #000000b2;
    & h1 {
      color: var(--silver-color);
      text-align: center;
      text-transform: uppercase;
      font-size: 1.4rem;
    }
  }
`;

export default ExhibitionScreen;
