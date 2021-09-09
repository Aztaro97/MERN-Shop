import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { categoryAdversiting } from "../../../utils/advertisingData";
// import MainContainer from "../../MainContainer";

function AdversitingScreen() {
  return (
    <main>
      <LandingTop>
        <div className="contente">
          <h1>
            <span>Blind</span>Text Generator.
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Link className="link1" to="#/">
            Quote here
          </Link>
        </div>
      </LandingTop>
      <Container>
        <SliderSection />
        <IntroSection />
      </Container>
    </main>
  );
}

const SliderSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    // slidesPerRow: 0,
    centerPadding: "0px",
    centerMode: true,
    responsive: [
      {
        breakpoint: 700,
        settings: {
          arrows: false,
          slidesToShow: 2,
          slidesToScroll: 1,
          rows: 0,
        },
      },
      {
        breakpoint: 500,
        settings: {
          arrows: false,
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          arrows: false,
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <Slider {...settings}>
      {categoryAdversiting.map((data) => (
        <div key={data.id}>
          <div
            className="box"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="box-container">
              <h4>{data.title}</h4>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

const IntroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesPerRow: 0,
    centerPadding: "0px",
    arrows: false,
  };
  return (
    <IntroStyling className="intro_section">
      <h1 className="title">lorem ipsum</h1>
      <hr />
      <div className="row mt-5 py-5">
        <div className="col-lg-6">
          <div className="slide_bg">
            <Slider {...settings} className="slider-container">
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
                  alt=""
                />
                <div className="overlay">
                  <h1>lorem ipsum</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eum molestiae repellendus quia at natus rerum
                    voluptatibus dolores explicabo adipisci, repellat numquam
                    sint inventore hic possimus eligendi unde ea omnis.
                  </p>
                  <button>contact us</button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
                  alt=""
                />
                <div className="overlay">
                  <h1>lorem ipsum</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eum molestiae repellendus quia at natus rerum
                    voluptatibus dolores explicabo adipisci, repellat numquam
                    sint inventore hic possimus eligendi unde ea omnis.
                  </p>
                  <button>contact us</button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
                  alt=""
                />
                <div className="overlay">
                  <h1>lorem ipsum</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eum molestiae repellendus quia at natus rerum
                    voluptatibus dolores explicabo adipisci, repellat numquam
                    sint inventore hic possimus eligendi unde ea omnis.
                  </p>
                  <button>contact</button>
                </div>
              </div>
              <div>
                <img
                  src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80"
                  alt=""
                />
                <div className="overlay">
                  <h1>lorem ipsum</h1>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Reiciendis eum molestiae repellendus quia at natus rerum
                    voluptatibus dolores explicabo adipisci, repellat numquam
                    sint inventore hic possimus eligendi unde ea omnis.
                  </p>
                  <button>contact</button>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        <div className="col-lg-6">
          <div className="description">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, fuga officiis reiciendis eaque magni facilis suscipit
              culpa eius recusandae ipsa, incidunt ea sapiente id autem deleniti
              perspiciatis vitae porro soluta?
            </p>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Eligendi, fuga officiis reiciendis eaque magni facilis suscipit
              culpa eius recusandae ipsa, incidunt ea sapiente id autem deleniti
              perspiciatis vitae porro soluta?
            </p>
          </div>
        </div>
      </div>
    </IntroStyling>
  );
};

const LandingTop = styled.div`
  background-image: linear-gradient(
      0deg,
      rgba(244, 244, 244, 0.8827906162464986) 19%,
      rgba(255, 255, 255, 0) 43%
    ),
    url("https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80");
  height: 700px;
  width: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-origin: content-box;
  display: flex;
  align-items: flex-end;

  & .contente {
    /* position: absolute; */
    padding: 0 0 2rem 2rem;
    & h1 {
      color: #49c4d3;
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 2.81rem;

      & span {
        color: #c68787;
        display: block;
        text-transform: capitalize;
        font-size: 7.8rem;
        font-family: weFont, sans-serif;
      }
    }
    & p {
      /* margin-bottom: 0; */
      margin: 5px 0;
      font-size: 1.25em;
    }
    & .link1 {
      display: block;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 30px;
      padding: 0.8rem 2rem;
      background: var(--orange-color);
      text-transform: uppercase;
      color: #fff;
      width: 200px;
      text-align: center;
      margin: 10px 0;
      font-size: 1rem;
      cursor: pointer;
      z-index: 99999;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const Container = styled.div`
  padding: 6rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  & .real-state-bg {
    background-image: url("https://images.unsplash.com/photo-1630980260348-16f484cb6471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80");
  }
  & .restaurant-bg {
    background-image: url("https://images.unsplash.com/photo-1466978913421-dad2ebd01d17?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80");
  }
  & .vehicle-bg {
    background-image: url("https://images.unsplash.com/photo-1549092223-c69273446922?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  }
  & .pharmacy-bg {
    background-image: url("https://images.unsplash.com/photo-1471864190281-a93a3070b6de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80");
  }
  & .box {
    /* background-image: url("https://images.unsplash.com/photo-1630980260348-16f484cb6471?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80"); */
    height: 200px;
    /* width: 300px; */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1.5rem;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    /* margin: 0 10px; */

    & .box-container {
      width: 100%;
      height: 100%;
      background: #00000068;
      display: flex;
      align-items: center;
      justify-content: center;

      & h4 {
        color: #ffff;
        text-transform: uppercase;
        font-size: 1rem;
      }
    }
  }
`;

const IntroStyling = styled.section`
  padding: 3rem 0;
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--orange-color);
    font-size: 2rem;
    /* margin-bottom: 0; */
  }
  & hr {
    width: 150px;
    background: var(--orange-color);
    height: 1px;
    margin: 0 auto;
  }

  & .slide_bg {
    background: #9c9c9c;
    height: 500px;

    & .slider-container {
      height: 100%;
      background: #fff;
      position: relative;
      bottom: 2rem;
      left: 2rem;
      @media only screen and (max-width: 768px) {
        position: static;
      }

      & div {
        height: 100%;
        & img {
          object-fit: cover;
          width: 100%;
          height: 100%;
        }
        & .overlay {
          position: absolute;
          bottom: 0;
          top: 120px;
          width: 400px;

          padding-left: 1rem;
          & h1 {
            display: block;
            color: #fff;
          }
          & p {
            font-size: 0.9rem;
            color: #fff;
          }
          & button {
            border: none;
            background: var(--orange-color);
            color: #fff;
            padding: 4px 1rem;
          }
        }
      }
    }
  }
  & .description {
    padding-left: 3rem;
    padding-top: 1rem;
  }
`;

export default AdversitingScreen;
