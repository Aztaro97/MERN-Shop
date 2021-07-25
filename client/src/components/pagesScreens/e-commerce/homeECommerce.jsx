import React, {useEffect} from "react";
import styled from "styled-components";
import LandingPage from "../landing/LandingPage";

import svg1 from "../../../img/svg1.svg";
import bg_rounded from "../../../img/bg_rounded.svg";
import content_img from "../../../img/social_media_content.png";
import svg_right from "../../../img/social_img.png";

function HomeECommerce() {

  
  return (
    <>
      <LandingPage />
      <Container>
        <Section1>
          <h3>Share your company with</h3>
          <h1>our E-Commerce service</h1>
          <hr />
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </p>

          <div className="content">
            <div className="svg_img">
              <img src={svg1} alt="" />
            </div>
            <div className="contete_para">
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </Section1>
        <SocialSection>
          <div className="grid">
            <img src={content_img} alt="" className="svg_left" />
            <img src={svg_right} alt="" className="svg_right" />
          </div>
        </SocialSection>
      </Container>
    </>
  );
}

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`
const Section1 = styled.section`
  margin-top: 2rem;
  padding: 2rem 6rem;
  text-align: center;

  & h3 {
    color: var(--jungle-color);
    text-transform: uppercase;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: bold;
  }
  & h1 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 1.6rem;
  }
  & hr {
    width: 100px;
    border: none;
    outline: none;
    background-color: var(--jungle-color);
    height: 1px;
    margin: 1rem auto;
  }
  & p {
    color: var(--silver-color);
    font-size: 1rem;
  }

  & .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    /* max-width: 1000px; */
    margin: 1rem auto;

    @media only screen and (max-width: 1000px) {
      display: block;
    }

    & .svg_img {
      display: flex;
      justify-content: flex-end;
      @media only screen and (max-width: 1000px) {
        justify-content: center;
        margin: 1rem 0;
      }
      & img {
        width: 500px;
        @media only screen and (max-width: 768px) {
          width: 12.5rem;
        }
      }
    }
    & .contete_para {
      display: flex;
      align-items: center;
      text-align: start;
      @media only screen and (max-width: 1000px) {
        text-align: center;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    margin-top:0;
    padding: 2rem 2rem;
    & h3 {
      font-size: .9rem;
      letter-spacing: 1px;
    }
    & h1 {
      font-size: 1.4rem;
    }
    & p {
      font-size: .9rem;
    }
  }
`;

const SocialSection = styled.section`
  background-image: url(${bg_rounded});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: content-box;
  width: 100%;
  height: 31.25rem;
  margin-top: 5rem;

  & .grid {
    display: flex;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

    & .svg_left {
      width: 28.125rem;
      height: auto;
      position: relative;
      bottom: 2rem;

      @media only screen and (max-width: 768px) {
        width: 20rem;
      }
    }
    & .svg_right {
      width: 20rem;
      height: 20rem;
      position: relative;
      right: 4rem;
      top: 5rem;
      @media only screen and (max-width: 768px) {
        width: 15rem;
        height: 15rem;
        right: -8rem;
        top: -2rem;
      }
    }
    @media only screen and (max-width: 640px) {
    display: block;
  }
  }

  @media only screen and (max-width: 768px) {
    height: 35rem;
    background-position:inherit;
  }
`;

export default HomeECommerce;
