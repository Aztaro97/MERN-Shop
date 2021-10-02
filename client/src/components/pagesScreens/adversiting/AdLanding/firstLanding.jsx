import Slider from "@ant-design/react-slick";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const FirstLandingSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  };
  return (
    <LandingStyling>
      <Slider {...settings}>
        <div>
          <div className="landing_overlay">
            <img src="/img/advertising/bg-images.jpeg" alt="" />
            <div className="contente_overlay">
              <h1>
                <span>Blind</span>Text Generator.
              </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <Link className="link1" to="#/">
                Quote here
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay">
            <img src="/img/advertising/bg-images.jpeg" alt="" />
            <div className="contente_overlay">
              <h1>
                <span>Blind</span>Text Generator.
              </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <Link className="link1" to="#/">
                Quote here
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </LandingStyling>
  );
};

const LandingStyling = styled.div`
  & .landing_overlay {
    /* background-image: ,
      url("./img/advertising/bg-images.jpeg"); */

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    color: #fff;
    padding-bottom: 3rem;
    height: 700px;
    @media only screen and (max-width: 768px) {
      height: 400px;
    }

    & img {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.37298669467787116) 0%
      );
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-origin: content-box;
      object-fit: cover;
      height: 100%;
      width: 100%;
    }

    & .contente_overlay {
      position: absolute;
      margin-left: 3rem;

      & h1 {
        color: #fff;
        margin: 0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 2rem;

        & span {
          /* color: #c68787; */
          display: block;
          text-transform: capitalize;
          font-size: 7.8rem;
          font-family: weFont, sans-serif;
        }
      }
      & p {
        margin-top: 5px;
        margin-bottom: 5px;
        font-size: 0.9em;
      }
      & .link1 {
        display: block;
        text-decoration: none;
        outline: none;
        border: none;
        border-radius: 30px;
        padding: 0.8rem 2rem;
        background: #fff;
        text-transform: uppercase;
        color: #000;
        width: 200px;
        text-align: center;
        margin-bottom: 2rem;
        font-size: 1rem;
        cursor: pointer;
        /* z-index: 99999; */
        margin-left: 1rem;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  /* //////////  Slider Customer Arrows */
  .slick-prev {
    left: -52px !important;
    z-index: 2 !important;
  }

  .slick-next:before,
  .slick-prev:before {
    content: "" !important;
  }
  .next-slick-arrow,
  .prev-slick-arrow {
    color: #fff;
    font-size: 48px;
    position: relative;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
  .next-slick-arrow {
    right: 5rem;
    z-index: 2;
  }
  .prev-slick-arrow {
    position: relative;
    left: 5rem;
    color: #fff;
  }
`;

export default FirstLandingSlider;
