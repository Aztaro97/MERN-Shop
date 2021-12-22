import React, { useEffect, useState } from "react";
import MainContainer from "../../MainContainer";
import VideoPlayer from "react-background-video-player";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TextTransition, { presets } from "react-text-transition";

function PosScreen() {
  const [index, setIndex] = useState(0);
  const TEXTS = ["Comming soon", "exhibition management"];
  useEffect(() => {
    const intervalId = setInterval(() => setIndex((index) => index + 1), 3000);
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <MainContainer>
      <Container>
        <VideoPlayer
          className="video"
          src={"./videos/pos_video.mp4"}
          autoPlay={true}
          muted={true}
        />
        <div className="contente">
          <div className="contente_container">
            <h1>
              <TextTransition
                text={TEXTS[index % TEXTS.length]}
                springConfig={presets.default}
                className="text"
              />
            </h1>
            <button className="_btn">Go Back</button>
          </div>
        </div>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  & .video {
    position: static !important;
    height: 60vh !important;
    & video {
      position: static !important;
      object-fit: cover;
      /* height: 100% !important; */
    }
  }
  .input {
    border-radius: 15px;
    font-family: "Open Sans", sans-serif;
    font-size: 16px;
    text-align: center;
    border: none;
    height: 6vh;
    width: 40vw;
  }
  .contente {
    position: absolute;
    top: 30%;
    /* left: 12%; */
    width: 100%;
    height: 100%;

    & h1 {
      font-size: 3rem;
    }

    /* right: 0; */
    /* margin-left: auto; */

    & .contente_container {
      background: #000000b2;
      display: inline-block;
      padding: 2rem 4rem;
      & h1 {
        color: var(--silver-color);
        text-transform: uppercase;
      }
    }

    & .text {
      font-size: 2.8rem;
      font-weight: 700;
    }

    & ._btn {
      color: var(--silver-color);
      padding: 0.5rem 2rem;
      text-decoration: none;
      outline: none;
      border: none;
      text-align: center;
      margin: auto;
    }
  }
`;

export default PosScreen;
