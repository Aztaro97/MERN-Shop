import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import { useSelector, useDispatch } from "react-redux";
import { createProduct } from "../../../flux/actions/productAction";
import styled from "styled-components";
import { Zoom } from "react-reveal";
import { Link, useHistory } from "react-router-dom";

const bg_landing1 = "/img/ecommerce/bg_landing.png";

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

  useEffect(() => {}, []);
  return (
    <div>
      <Slider {...settings}>
        <Slide>
          <div className="bg_image bg1">
            <SlideOverlay>
              <div>
                <Zoom>
                  <h1>
                    <span>We</span>are the best e-commerce companies in dubai,
                    uae.
                  </h1>

                  <p>
                    Our marketing strategies for getting your website publicized
                    give effective results
                  </p>
                </Zoom>
                <Link className="link1" to="/register">
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
                <Link className="link2" to="/register">
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
  height: 400px;
  width: 100%;
  & .bg1 {
    background-image: linear-gradient(
        90deg,
        rgba(55, 55, 55, 0.6306897759103641) 100%,
        rgba(191, 191, 191, 0.6558998599439776) 100%
      ),
      url(${bg_landing1});
  }

  & .bg2 {
    background-image: linear-gradient(
        90deg,
        #333333a4 0%,
        rgba(2, 0, 36, 0.5) 0%
      ),
      url("/img/ecommerce/bg_landing2.png");
  }

  & .bg_image {
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;

    display: flex;
    align-items: flex-end;
  }
  @media only screen and (max-width: 768px) {
    height: 300px;
  }
`;

const SlideOverlay = styled.div`
  margin-left: 2rem;

  & div {
    position: relative;
    bottom: 4rem;
    /* padding-right: 9rem; */
    width: 80%;
    z-index: 99999999;
    & h1 {
      color: #49c4d3;
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.8rem;

      & span {
        color: #c68787;
        display: block;
        text-transform: capitalize;
        font-size: 4.8rem;
        font-family: weFont, sans-serif;
      }
    }
    & p {
      color: #fff;
      /* margin-bottom: 0; */
      margin: 5px 0;
      font-size: 1em;
    }
    & .link1 {
      display: block;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 30px;
      padding: 0.5rem 0.5rem;
      background: var(--orange-color);
      text-transform: uppercase;
      color: #fff;
      width: 400px;
      text-align: center;
      margin: 10px 0;
      font-size: 1rem;
      cursor: pointer;
      z-index: 99999;
      &:hover {
        opacity: 0.9;
      }
    }

    @media only screen and (max-width: 768px) {
      bottom: 0.6rem;
      padding-right: 1rem;
      width: 100%;
      & h1 {
        font-size: 1rem;
        margin: 0;
        & span {
          font-size: 2rem;
        }
      }
      & p {
        font-size: 0.9rem;
      }
      & .link1 {
        font-size: 0.8rem;
        width: 260px;
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
      padding: 0.5rem 1rem;
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
