import React, { useState } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import ReactPlayer from "react-player";
import Slider from "react-slick";
import {
  categoryAdversiting,
  listPartnerLogo,
  BusinessList,
  VideoData,
  servicePicture,
} from "../../../utils/advertisingData";
import FirstLandingSlider from "./Banner/firstLanding";
import { config } from "dotenv";
import MainContainer from "../../MainContainer";
import { Col, Row } from "antd";
import ButtonComponeent from "../../ButtonComponeent";
// import MainContainer from "../../MainContainer";

function AdversitingScreen() {
  return (
    <MainContainer>
      <FirstLandingSlider />
      <Container>
        <AdvertisingNavgation />
        <TypeBusinessSection />
        {/* <IntroVideoSection /> */}
        <JoiningUsSection />
        <PartnerSectionLogo />
        <ServicesSlider />
      </Container>
    </MainContainer>
  );
}

// const Landing = () => {
//   return (
//     <LandingStyling>
//       <div>
//         <div className="landing_overlay">
//           <h1>
//             <span>Blind</span>Text Generator.
//           </h1>
//           <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
//           <Link className="link1" to="#/">
//             Quote here
//           </Link>
//         </div>
//       </div>
//     </LandingStyling>
//   );
// };

const TypeBusinessSection = () => {
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
  const history = useHistory();
  return (
    <Slider {...settings}>
      {categoryAdversiting.map((data) => (
        <CardItemStyling
          key={data.profileId}
          onClick={() =>
            (window.location.href = `/advertising/profile/${data.profileId}`)
          }
        >
          <div
            className="box"
            style={{ backgroundImage: `url(${data.image})` }}
          >
            <div className="box-container">
              <h4>{data.title}</h4>
            </div>
          </div>
        </CardItemStyling>
      ))}
    </Slider>
  );
};

const CardItemStyling = styled.div`
  & .box {
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1.5rem;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    cursor: pointer;
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

const IntroVideoSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 7000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesPerRow: 0,
    dotsClass: "dots__bar",
    centerPadding: "0px",
    arrows: false,
  };

  return (
    <IntroVideoStyling>
      <h1 className="title">lorem ipsum</h1>
      <hr />
      <Slider {...settings} className="slider-container">
        {VideoData.map((data) => (
          <div className="box-wrapper" key={data.profileId}>
            <Row>
              <Col span="12">
                <ReactPlayer
                  className="video-player"
                  url={data.videoUrl}
                  height="100%"
                  width="100%"
                  // playing
                  muted
                  volume="0.0"
                  controls
                  config={{
                    Files: {
                      autoplay: true,
                    },
                  }}
                />
              </Col>
              <Col span="12">
                <div className="description">
                  <p>
                   {data.description}
                  </p>
              <Link to={`/advertising/profile/${data.profileId}`} className="link">
                    contact us
                  </Link>
                </div>
              </Col>
            </Row>
          </div>
        ))}
      </Slider>
    </IntroVideoStyling>
  );
};
const AdvertisingNavgation = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  return (
    <NavStyling>
      <Slider {...settings}>
        {BusinessList.map((data, index) => (
          <div key={index}>
            <a
              href={`/advertising/type/${data.value}`}
              className="card_container"
              // onClick={() => history.push(`/advertising/type/${data.value}`)}
            >
              <div className="card_body">
                <i className="icon">{data.icon}</i>
                <span>{data.title}</span>
              </div>
            </a>
          </div>
        ))}
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
        <div className="col-lg-4">
          <img src="/img/advertising/union.jpg" alt="" />
        </div>
        <div className="col-lg-8">
          <h1 className="content">
            Become a partner <br /> Reach more customers and <br /> achieve
            growth with us
          </h1>
          <div className="link">
            <a href="/advertising/register" alt="">
              Lets go
            </a>
          </div>
        </div>
      </div>
    </JoiningUsStyling>
  );
};

const PartnerSectionLogo = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
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
    <PartnerLogoStyling>
      <h1 className="title">our partner</h1>
      <hr />
      <Slider {...settings}>
        {listPartnerLogo.map((item) => (
          <div key={item.profileId} className="logo-box">
            <a href={`/advertising/profile/${item.profileId}`}>
              <img src={item.logoUrl} alt={item.companyName} />
            </a>
          </div>
        ))}
      </Slider>
    </PartnerLogoStyling>
  );
};

const ServicesSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 977,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <ServiceStyling>
      <h1 className="title">services</h1>
      <hr />
      <Slider {...settings}>
        {servicePicture.map((data) => (
          <div>
            <a
              href={`/advertising/profile/${data.profileId}`}
              className="link"
              alt=""
            >
              <img src={data.imgUrl} alt="" />
            </a>
          </div>
        ))}
      </Slider>
    </ServiceStyling>
  );
};

const ServiceStyling = styled.section`
  margin: 4rem;
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--orange-color);
    font-size: 1.6rem;
  }
  & hr {
    width: 100px;
    background: var(--orange-color);
    height: 1px;
    margin: 0 auto 1.8rem;
    @media only screen and (max-width: 768px) {
      width: 100px;
    }
  }
  & .link {
    & img {
      max-width: 200px;
      height: 200px;
      margin: 0 auto;
      object-fit: cover;
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

const PartnerLogoStyling = styled.section`
  margin: 4rem;
  margin-bottom: 8rem;
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--orange-color);
    font-size: 1.6rem;
  }
  & hr {
    width: 150px;
    background: var(--orange-color);
    height: 1px;
    margin: 0 auto 1.8rem;
    @media only screen and (max-width: 768px) {
      width: 100px;
    }
  }
  & .logo-box {
    width: 100%;
    height: 120px;
    margin: auto;

    & a {
      display: flex;
      align-items: center;
      height: 100%;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px;
      margin: 5px;
    }
    & img {
      object-fit: contain;
      background: transparent;
      padding: 20px;
      width: 100%;
      height: 100%;
    }
    @media only screen and (max-width: 768px) {
      /* width: 80px;
      height: 80px; */
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
  /* padding: 0 7rem; */
  margin-bottom: 8rem;
  & .title {
    text-align: center;
    letter-spacing: 3px;
    color: var(--silver-color);
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
  & hr {
    width: 150px;
    background: var(--orange-color);
    height: 1px;
    margin: 0 auto 1.8rem;
    @media only screen and (max-width: 768px) {
      width: 100px;
    }
  }
  & img {
    width: 100%;
    border-radius: 40px;
    object-fit: cover;
    height: 250px;

    @media only screen and (max-width: 1000px) {
      height: 600px;
      border-radius: 60px;
    }
    @media only screen and (max-width: 768px) {
      height: 250px;
      border-radius: 30px;
    }
  }
  & .content {
    text-align: center;
    letter-spacing: 3px;
    color: var(--silver-color);
    margin: 1rem auto 2rem auto;
    font-size: 1.4rem;
  }
  .link {
    text-align: center;
    height: 100%;
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
    height: 170px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    margin: 0 10px;

    &:hover {
      & .card_body {
        background: var(--orange-color);
      }
      & .icon > * {
        color: #fff;
      }
      & span {
        color: #fff !important;
      }
    }

    & .card_body {
      height: 150px;
      width: 100%;
      box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
        rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: #fff;
      transition: background 0.2s ease-in;
      & .icon {
        font-size: 2.3rem;
        color: var(--orange-color);
        margin-bottom: 0.7rem;
        transition: color 0.3s ease-in-out;
      }
      & span {
        color: var(--orange-color);
        text-transform: capitalize;
        font-size: 1.2rem;
        transition: color 0.1s ease-in-out;
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
`;

const IntroVideoStyling = styled.section`
  padding: 3rem 0;
  margin-top: 3rem;
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--orange-color);
    font-size: 1.6rem;
    /* margin-bottom: 0; */
  }
  & hr {
    width: 150px;
    background: var(--orange-color);
    height: 1px;
    margin: 0 auto 1.8rem;
  }

  & .slider-container {
    height: 100%;

    @media only screen and (max-width: 992px) {
      margin-top: 2rem;
      position: static;
    }
    & .box-wrapper {
      margin: 0 10px;
    }
  }
  & .description {
    padding-left: 3rem;
    padding-top: 1rem;
    & p {
      color: var(--silver-color);
      letter-spacing: 1px;
    }
    & .link {
      text-decoration: none;
      color: #fff;
      background-color: var(--orange-color);
      padding: 4px 10px;
      text-transform: capitalize;
      font-size: 1rem;
    }
    @media only screen and (max-width: 992px) {
      margin-top: 2rem;
    }
  }
  /* ///////  Slider Dits  /////// */
  & .slick-dots {
    width: 90%;
  }
`;

export default AdversitingScreen;
