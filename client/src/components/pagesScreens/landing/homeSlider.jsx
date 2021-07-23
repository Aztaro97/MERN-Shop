import React, {useState} from "react";
import Slider from "react-slick";
import styled from "styled-components";
import { Link } from "react-router-dom";

import bg_landing1 from "../../../img/bg_landing.png";

const HomeSection = () => {
    const [currentSlide, setCurrentSlide] = useState(null)
    const testSettings = {
        backgroundColor: "#000",
        outline: '0'
    }
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
    appendDots: dots => {
        return (
          <div>
            <ul>
              {dots.map((item, index) => {
                return (
                  <li key={index}>{item.props.children}</li>
                );
              })}
            </ul>
          </div>
        )
      },
      customPaging: index => {
        return (
          <button style={index === currentSlide ? testSettings : null}>
            {index + 1}
          </button>
        )
      }
    // appendDots: dots => (<div style={{ width: "20px", height: "20px", background: "black" }}>{dots}</div>),
    // customPaging: i => (<div style={{ width: "20px", height: "20px", background: "red" }}>{i}</div>)
    // appendDots: (dots) => (
    //   <ul style={{ width: "50px", height: "50px", background: "red" }}>15</ul>
    // ),
    // customPaging: (i) => (
    //   <ul style={{ width: "50px", height: "50px", background: "red" }}>23</ul>
    // ),
  };
  return (
    <div>
      <Slider {...settings}>
        <Slide>
          <img src={bg_landing1} alt="" />
          <SlideOverlay>
            <h1>
              <span>We</span>are the best e-marketing companies in dubai, uae.
            </h1>
            <p>
              Our marketing strategies for getting your website publicized give
              effective results, there are no excuses, It's that simple
            </p>
            <button>Get Your Commercial page Free</button>
          </SlideOverlay>
        </Slide>
        <Slide>
          <img
            src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
            alt=""
          />
          <SlideOverlay>
            <Link to="/register" className="link">
              register
            </Link>
          </SlideOverlay>
        </Slide>
      </Slider>
    </div>
  );
};

const Slide = styled.div`
  height: 700px;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SlideOverlay = styled.div`
  position: absolute;
  top: 50%;
  right: 50%;
  margin-left: 2rem;
  /* width: 100%; */

  & h1 {
    color: #49c4d3;
    margin: 0;
    font-weight: 700;
    text-transform: uppercase;

    & span {
      color: #c68787;
      display: block;
      text-transform: capitalize;
      /* font-weight: 700; */
      font-size: 4rem;
      font-family: weFont, sans-serif;
    }
  }
  & p {
    color: #fff;
    margin-bottom: 0;
  }
  & button {
    outline: none;
    border: none;
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    background: var(--orange-color);
    text-transform: uppercase;
    color: #fff;
    margin-top: 1rem;
  }

  & .link {
    text-align: center;
    background: var(--orange-color);
    border-radius: 30px;
    padding: 0.5rem 1.5rem;
    text-transform: uppercase;
    color: #fff;
    position: relative;
    top: 14rem;
    left: 6rem;
    text-align: center;

    &:hover {
      opacity: 0.9;
    }
  }
`;

export default HomeSection;
