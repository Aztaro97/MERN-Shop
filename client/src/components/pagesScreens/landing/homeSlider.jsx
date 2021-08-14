import React, { useState } from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bg_landing1 from "../../../img/bg_landing.png";

const HomeSection = () => {
  const [currentSlide, setCurrentSlide] = useState(null);
  const testSettings = {
    backgroundColor: "#000",
    outline: "0",
  };
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "button__bar",
    beforeChange: (prev, next) => {
      setCurrentSlide(next);
    },
    appendDots: (dots) => {
      return (
        <div>
          <ul>
            {dots.map((item, index) => {
              return <li key={index}>{item.props.children}</li>;
            })}
          </ul>
        </div>
      );
    },
    customPaging: (index) => {
      return (
        <button style={index === currentSlide ? testSettings : null}>
          {index + 1}
        </button>
      );
    },
  
  };
  return (
    <div>
      <Slider {...settings}>
        <Slide>
          <div className="bg_image bg1">
            <SlideOverlay>
              <div>
                <h1>
                  <span>We</span>are the best e-marketing companies in dubai,
                  uae.
                </h1>
                <p>
                  Our marketing strategies for getting your website publicized
                  give effective results, there are no excuses, It's that simple
                </p>
                <Link to="/register" className="link1">
                  Get Your Commercial page Free
                </Link>
              </div>
            </SlideOverlay>
          </div>
        </Slide>
        <Slide>
          {/* <img
            src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            alt=""
          /> */}
          <div className="bg_image bg2">
            <SlideOverlay>
              <div className="btn_link">
                <Link to="/register" className="link2">
                  register
                </Link>
              </div>
            </SlideOverlay>
          </div>
        </Slide>
      </Slider>
    </div>
  );
};

const Slide = styled.div`
  & .bg1 {
    background-image: url(${bg_landing1}),  linear-gradient(#1a0313, #070404);
    
  }

  & .bg2 {
    background-image: url("https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80");
  }

  & .bg_image {
    height: 1000px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    

    display: flex;
    align-items: flex-end;
    @media only screen and (max-width:768px) {
      height: 400px;
    }
  }
`;

const SlideOverlay = styled.div`
  /* position: absolute;
  top: 50%;
  right: 50%; */
  margin-left: 2rem;
  /* width: 100%; */

  & div {
    position: relative;
    bottom: 6rem;
    padding-right: 9rem;
    z-index: 99999999;
    & h1 {
      color: #49c4d3;
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 2rem;

      & span {
        color: #c68787;
        display: block;
        text-transform: capitalize;
        /* font-weight: 700; */
        font-size: 3rem;
        font-family: weFont, sans-serif;
      }
    }
    & p {
      color: #fff;
      margin-bottom: 0;
      font-size: 1.3em;
    }
    & .link1 {
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 30px;
      padding: 0.8rem 2rem;
      background: var(--orange-color);
      text-transform: uppercase;
      color: #fff;
      position: relative;
      top: 1rem;
      font-size: 1rem;
      cursor: pointer;
      z-index: 99999;
      &:hover {
        opacity: 0.9;
      }
    }

    @media only screen and (max-width:768px) {
      bottom: 6rem;
      padding-right: 1rem;
      & h1 {
        font-size: 1.4rem;
      }
      & p {
        font-size: .8rem;
      }
      & .link1 {
        font-size: .8rem;
      }
    }
  }

  & .btn_link {
    display: flex;
    justify-content: center;
    width: 100%;
    & .link2 {
      text-decoration: none;
      background: var(--orange-color);
      border-radius: 30px;
      padding: 0.8rem 2rem;
      text-transform: uppercase;
      color: #fff;
      text-align: center;
      font-size: 1rem;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export default HomeSection;
