import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import {
  IoRestaurantSharp,
  IoIosConstruct,
  BiBuildingHouse,
  AiOutlineShop,
} from "react-icons/all";
import { categoryAdversiting } from "../../../utils/advertisingData";
// import MainContainer from "../../MainContainer";

function AdversitingScreen() {
  return (
    <main>
      <LandingSlider />
      <Container>
        <AdvertisingNavgation />
        <SliderSection />
        <IntroSection />
        <JoiningUsSection />
        <PartnerSection />
      </Container>
    </main>
  );
}

const LandingSlider = () => {
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

const Landing = () => {
  return (
    <LandingStyling>
      <div>
        <div className="landing_overlay">
          <h1>
            <span>Blind</span>Text Generator.
          </h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <Link className="link1" to="#/">
            Quote here
          </Link>
        </div>
      </div>
    </LandingStyling>
  );
};

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
    dotsClass: "dots__bar",
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
    dotsClass: "dots__bar",
    centerPadding: "0px",
    arrows: false,
  };
  return (
    <IntroStyling>
      <h1 className="title">lorem ipsum</h1>
      <hr />
      <div className="row py-lg-5">
        <div className="col-lg-6">
          <div className="slide_bg">
            <Slider {...settings} className="slider-container">
              <div>
                <img src="./img/advertising/bg-images.jpeg" alt="" />
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
                <img src="./img/advertising/bg-images.jpeg" alt="" />
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
                <img src="./img/advertising/bg-images.jpeg" alt="" />
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
                <img src="./img/advertising/bg-images.jpeg" alt="" />
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
const AdvertisingNavgation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 350,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <NavStyling>
      <Slider {...settings}>
        <div>
          <div className="card_container">
            <div className="card_body">
              <IoRestaurantSharp className="icon" />
              <p>restaurants</p>
            </div>
            <div className="card_footer">
              <a href="#/">contact us</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card_container">
            <div className="card_body">
              <IoIosConstruct className="icon" />
              <p>construction</p>
            </div>
            <div className="card_footer">
              <a href="#/">contact us</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card_container">
            <div className="card_body">
              <BiBuildingHouse className="icon" />
              <p>reals estates</p>
            </div>
            <div className="card_footer">
              <a href="#/">contact us</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card_container">
            <div className="card_body">
              <AiOutlineShop className="icon" />
              <p>marketing</p>
            </div>
            <div className="card_footer">
              <a href="#/">contact us</a>
            </div>
          </div>
        </div>
        <div>
          <div className="card_container">
            <div className="card_body">
              <IoRestaurantSharp className="icon" />
              <p>restaurants</p>
            </div>
            <div className="card_footer">
              <a href="#/" alt="">
                contact us
              </a>
            </div>
          </div>
        </div>
        <div>
          <div className="card_container">
            <div className="card_body">
              <IoRestaurantSharp className="icon" />
              <p>restaurants</p>
            </div>
            <div className="card_footer">
              <a href="#/" alt="">
                contact us
              </a>
            </div>
          </div>
        </div>
      </Slider>
    </NavStyling>
  );
};

const JoiningUsSection = () => {
  return (
    <JoiningUsStyling>
      <h1 className="title">
        Join us <br /> Be a part of the our story{" "}
      </h1>
      <hr />
      <div className="row">
        <div className="col-lg-3">
          <img src="/img/advertising/union.jpg" alt="" />
        </div>
        <div className="col-lg-9">
          <h1 className="content">
            Become a partner <br /> Reach more customers and <br /> achieve
            growth with us
          </h1>
          <div className="link">
            <a href="#/" alt="">
              Lets go
            </a>
          </div>
        </div>
      </div>
    </JoiningUsStyling>
  );
};

const PartnerSection = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 7,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <PartnerStyling>
      <h1 className="title">our partner</h1>
      <hr />
      <Slider {...settings}>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
        <div>
          <div className="logo-box">
            <img src="/img/logo11.png" alt="" />
          </div>
        </div>
      </Slider>
    </PartnerStyling>
  );
};

const PartnerStyling = styled.section`
  margin: 4rem;
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--orange-color);
    font-size: 2rem;
  }
  & hr {
    height: 1px;
    background: var(--background-color);
    width: 200px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 3rem;
    @media only screen and (max-width: 768px) {
      width: 100px;
    }
  }
  & .logo-box {
    width: 100px;
    height: 100px;
    background: #0a3068;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 auto;
    & img {
      width: 70%;
      height: 70%;
      object-fit: contain;
      background: transparent;
    }
    @media only screen and (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  }
  /* ////////////   Slick Button next and previous   ///////////// */
  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    opacity: 0.75;
    color: #000;
  }
`;

const JoiningUsStyling = styled.section`
  padding: 0 7rem;
  & .title {
    text-align: center;
    letter-spacing: 3px;
    color: var(--silver-color);
    margin-bottom: 1.5rem;
    font-size: 2rem;
  }
  & hr {
    height: 1px;
    background: var(--background-color);
    width: 200px;
    margin: 1rem auto;
    @media only screen and (max-width: 768px) {
      width: 100px;
      
    }
  }
  & img {
    width: 100%;
    border-radius: 80px;
    object-fit:cover;
    
    @media only screen and (max-width: 1000px) {
      height: 600px;
    }
    @media only screen and (max-width: 768px) {
      height: 300px;
    }
  }
  & .content {
    text-align: center;
    letter-spacing: 3px;
    color: var(--silver-color);
    margin: 3rem auto 4rem auto;
    font-size: 2rem;
    
  }
  .link {
    text-align: center;
    & a {
      text-align: center;
      font-size: 1.4rem;
      letter-spacing: 2px;
      background: #bf4f53;
      color: #fff;
      padding: 10px 3rem;
      border-radius: 30px;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const NavStyling = styled.div`
  padding: 1rem;
  margin: 2rem auto;
  width: 100%;
  /* height: 500px; */
  & .card_container {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 200px; */
    margin: 0 10px;
    & .card_body {
      height: 150px;
      width: 100%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      & .icon {
        font-size: 2.3rem;
        color: var(--orange-color);
        margin-bottom: 0.7rem;
      }
      & p {
        color: var(--orange-color);
        text-transform: capitalize;
        font-size: 1.2rem;
        margin-bottom: 0;
      }
    }
    & .card_footer {
      text-align: center;
      margin-top: 1rem;
      display: none;
      & a {
        text-decoration: none;
        color: #fff;
        text-transform: uppercase;
        background-color: var(--orange-color);
        padding: 7px 20px;
        border-radius: 20px;
        font-size: 0.9rem;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  /* ////////////   Slick Button next and previous   ///////////// */
  .slick-prev:before,
  .slick-next:before {
    font-size: 20px;
    opacity: 0.75;
    color: #000;
  }
`;

const LandingStyling = styled.div`
  & .landing_overlay {
    /* background-image: ,
      url("./img/advertising/bg-images.jpeg"); */

    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    color: #fff;
    padding-bottom: 3rem;

    & img {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.37298669467787116) 0%
      );
      height: 700px;
      width: 100%;
      @media only screen and (max-width:768px) {
        height: 400px;
      }
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
        font-size: .9em;
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
    @media only screen and (max-width:768px) {
      font-size: 30px;
      }
      @media only screen and (max-width:540px) {
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

const Container = styled.div`
  padding: 0rem 1rem;
  max-width: 1400px;
  margin: 0 auto;
  /* & .real-state-bg {
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
  } */
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
    cursor: pointer;
    /* margin: 0 10px; */
    transition: all 0.3s ease-in-out;
    &:hover {
      padding: 0;
    }
    &:hover .box-container h4 {
      color: var(--orange-color);
    }

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
        transition: all 0.3s ease-in-out;
      }
    }
  }
`;

const IntroStyling = styled.section`
  padding: 3rem 0;
  margin-top: 3rem;
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
      @media only screen and (max-width: 992px) {
        margin-top: 2rem;
        position: static;
      }

      & div {
        height: 100%;
        margin-bottom: 7px;
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
          @media only screen and (max-width: 992px) {
            width: 300px;
          }

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
      /* ///////  Slider Dits  /////// */
      & .slick-dots {
        width: 90%;
      }
    }
  }
  & .description {
    padding-left: 3rem;
    padding-top: 1rem;
    @media only screen and (max-width: 992px) {
      margin-top: 2rem;
    }
  }
`;

export default AdversitingScreen;
