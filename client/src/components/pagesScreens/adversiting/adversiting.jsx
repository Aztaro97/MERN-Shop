import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { Link, useHistory, Route } from "react-router-dom";
import Slider from "react-slick";
import {
  categoryAdversiting,
  listPartnerLogo,
  BusinessList,
  VideoData,
  servicePicture,
  companyProducts,
} from "../../../utils/advertisingData";
import FirstLandingSlider from "./Banner/firstLanding";
import MainContainer from "../../MainContainer";
import { Col, Input, Row } from "antd";
import Meta from "../../helmet";
import { Video, Transformation } from "cloudinary-react";
import { Fade } from "react-reveal";
import "./advertising.css";
import SearchBox from "../../searchBox";
import { scopeData } from "../../../utils/ecommerceData";
import { brandList } from "../../../utils/listItems";

function AdversitingScreen() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language;
  console.log(lang);
  return (
    <MainContainer>
      <Meta title="Welcome to Adversiting" />
      <FirstLandingSlider />
      <Container>
        <AdvertisingNavgation lang={lang} />
        <CompanyShop lang={lang} />
        <IntroVideoSection lang={lang} />
        <TypeBusinessSection lang={lang} />
        <JoiningUsSection />
        <PartnerSectionLogo lang={lang} />
        <ServicesSlider lang={lang} />
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

const CompanyShop = ({ lang }) => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 1,
    rtl: lang === "ar" ? true : false,
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
          slidesToShow: 1,
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
    nextArrow: (
      <div>
        <div className="shop_next_arrow">
          {currentLang === "en" ? ">" : "<"}{" "}
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="shop_prev_arrow">
          {currentLang === "en" ? "<" : ">"}{" "}
        </div>
      </div>
    ),
  };
  const history = useHistory();

  return (
    <section>
      <Fade bottom>
        <Slider {...settings} className="company_shop_slider">
          {companyProducts.map((data) => (
            <CardShopStyling
              key={data.profileId}
              onClick={() => history.push(`/profile/${data.profileId}`)}
            >
              <div
                className="box"
                style={{ backgroundImage: `url(${data.image})` }}
              >
                {/* <div className="box-container">
                  <h4>{data.title}</h4>
                </div> */}
              </div>
            </CardShopStyling>
          ))}
        </Slider>
      </Fade>
    </section>
  );
};

const TypeBusinessSection = ({ lang }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 2,
    rtl: lang === "ar" ? true : false,
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
    <section>
      <Fade bottom>
        <Slider {...settings}>
          {categoryAdversiting.map((data) => (
            <CardItemStyling
              key={data.profileId}
              onClick={() =>
                history.push(`/advertising/profile/${data.profileId}`)
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
      </Fade>
    </section>
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

const CardShopStyling = styled.div`
  & .box {
    height: 300px;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding: 1.5rem;
    margin-bottom: 10px;
    margin-left: 5px;
    margin-right: 5px;
    object-fit: cover;
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
  @media only screen and (max-width: 768px) {
    & .box {
      height: 200px;
    }
  }
`;

const IntroVideoSection = ({ lang }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 60000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: lang === "ar" ? true : false,
    dotsClass: "dots__bar",
    centerPadding: "100px",
    arrows: false,
  };

  const { t } = useTranslation();

  return (
    <IntroVideoStyling>
      <Fade bottom>
        <h1 className="title">Ad Video</h1>
        <hr />
        <Slider {...settings} className="slider-container">
          {VideoData.map((data) => (
            <div className="box-wrapper" key={data.profileId}>
              <Row gutter={[20, 20]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                >
                  <Video
                    cloudName="tarositeweb"
                    controls="true"
                    fallback="Cannot display video"
                    publicId={data.publicId}
                    width="100%"
                  />
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                >
                  <div className="description">
                    <p>{data.description}</p>
                    <Link
                      to={`/advertising/profile/${data.profileId}`}
                      className="link"
                    >
                      {t("contact_us")}
                    </Link>
                  </div>
                </Col>
              </Row>
            </div>
          ))}
        </Slider>
      </Fade>
    </IntroVideoStyling>
  );
};
const AdvertisingNavgation = ({ lang }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplaySpeed: 1800,
    autoplay: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    rtl: lang === "ar" ? true : false,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 4,
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

  const { t } = useTranslation();
  const history = useHistory();

  return (
    <NavStyling>
      {/* <Row justify="end" className="_row">
        <Col>
          <Route render={({ history }) => <SearchBox history={history} />} />
        </Col>
      </Row> */}
      <Fade bottom>
        <Slider {...settings} arrows={false}>
          {brandList.map((data, index) => (
            <div key={index}>
              <div
                onClick={() =>
                  history.push(`/categories/${data.value}`, {
                    type: data.title,
                  })
                }
                className="card_container"
              >
                <div className="card_body">
                  {/* <i className="icon">{data.icon}</i> */}
                  <img src={data.icon} alt="" className="icon" />
                  <p className="title">{data.title}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </Fade>
    </NavStyling>
  );
};

const JoiningUsSection = () => {
  return (
    <JoiningUsStyling>
      <Fade bottom>
        <h1 className="title">
          Join us <br /> Be a part of the our story{" "}
        </h1>
        <hr />
        <Row gutter={[10, 10]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <img src="/img/advertising/union.jpg" loading="lazy" alt="" />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <div className="content">
              <h1>
                Become a partner <br /> Reach more customers and <br /> achieve
                growth with us
              </h1>
              <div className="link">
                <Link to="/advertising/register" alt="">
                  Add your ad Now
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Fade>
    </JoiningUsStyling>
  );
};

const PartnerSectionLogo = ({ lang }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 7,
    rtl: lang === "ar" ? true : false,
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
      <Fade bottom>
        <h1 className="title">our partner</h1>
        <hr />
        <Slider {...settings}>
          {listPartnerLogo.map((item) => (
            <div key={item.profileId} className="logo-box">
              <Link to={`/advertising/profile/${item.profileId}`}>
                <img src={item.logoUrl} alt={item.companyName} loading="lazy" />
              </Link>
            </div>
          ))}
        </Slider>
      </Fade>
    </PartnerLogoStyling>
  );
};

const ServicesSlider = ({ lang }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    dotsClass: "dots__bar",
    rtl: lang === "ar" ? true : false,
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
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ServiceStyling>
      <Fade bottom>
        <h1 className="title">services</h1>
        <hr />
        <Slider {...settings} className="slider">
          {servicePicture.map((data) => (
            <div className="box" key={data.profileId}>
              <Link
                to={`/advertising/profile/${data.profileId}`}
                className="link"
                alt=""
              >
                <img src={data.imgUrl} alt="" loading="lazy" />
              </Link>
            </div>
          ))}
        </Slider>
      </Fade>
    </ServiceStyling>
  );
};

const ServiceStyling = styled.section`
  padding: 0 1rem;
  background: var(--dark-light-color);
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 1.6rem;
  }
  & hr {
    width: 100px;
    background: var(--white-color);
    height: 3px;
    margin: 0 auto 1.8rem;
    @media only screen and (max-width: 768px) {
      width: 100px;
    }
    @media only screen and (max-width: 500px) {
      width: 70px;
    }
  }
  & .slider .box {
    /* margin: 0 10px; */
    /* width: 90%; */
  }

  & .link {
    margin: 0 auto;
    width: 90% !important;

    & img {
      width: 90%;
      height: 200px;
      margin: 0 auto;
      object-fit: cover;
      @media only screen and (max-width: 768px) {
        height: 100px;
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

const PartnerLogoStyling = styled.section`
  padding: 0 1rem;
  background: var(--dark-color);
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 1.6rem;
  }
  & hr {
    width: 150px;
    background: var(--white-color);
    height: 3px;
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
  background: var(--dark-light-color);
  & .title {
    text-align: center;
    /* letter-spacing: 3px; */
    color: var(--white-color);
    margin-bottom: 1rem;
    font-size: 1.6rem;
  }
  & hr {
    width: 150px;
    background: var(--white-color);
    height: 3px;
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
      border-radius: 60px;
    }
    @media only screen and (max-width: 768px) {
      height: 170px;
      border-radius: 30px;
    }
  }
  & .content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    & h1 {
      text-align: center;
      letter-spacing: 3px;
      color: var(--silver-color);
      font-size: 1rem;
      margin-bottom: 2rem;
    }
  }
  .link {
    text-align: center;
    /* height: 100%; */
    & a {
      text-align: center;
      font-size: 1.1rem;
      letter-spacing: 2px;
      background: var(--orange-color);
      color: #fff;
      padding: 5px 2rem;
      border-radius: 5px;
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 0 2rem;
  }
`;

const NavStyling = styled.section`
  padding: 1rem;
  margin: 0 auto;
  /* margin-top: 1rem; */
  width: 100%;
  background: var(--dark-light-color);
  & ._row {
    margin-bottom: 2rem;
    & .search-input {
      width: 100%;
      background: red !important;
      &:focus {
        outline: none;
      }
    }
  }

  & .card_container {
    height: 140px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    margin: 0 10px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;

    @media only screen and (max-width: 768px) {
      height: 120px;
    }

    &:hover {
      transform: scale(1.1);
      & .card_body {
        background: var(--dark-color);
        & .icon {
          color: var(--white-color);
          filter: brightness(0) saturate(100%) invert(74%) sepia(7%)
            saturate(77%) hue-rotate(182deg) brightness(87%) contrast(81%);
        }
      }

      & .title {
        color: var(--silver-color) !important;
      }
    }

    & .card_body {
      /* height: 150px; */
      width: 100%;
      box-shadow: rgba(9, 30, 66, 0.25) 0px 1px 1px,
        rgba(9, 30, 66, 0.13) 0px 0px 1px 1px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      background: var(--dark-color);
      transition: background 0.2s ease-in;
      padding: 40px 10px;
      & .icon {
        font-size: 2.3rem;
        color: var(--orange-color);
        margin-bottom: 0.7rem;
        transition: color 0.3s ease-in-out;
        width: 70px;
        height: 70px;
        filter: brightness(0) saturate(100%) invert(71%) sepia(84%)
          saturate(5063%) hue-rotate(20deg) brightness(88%) contrast(85%);
        @media only screen and (max-width: 768px) {
          width: 50px;
          height: 50px;
        }
      }
      & .title {
        color: var(--orange-color);
        text-transform: capitalize;
        font-size: 1rem;
        transition: color 0.1s ease-in-out;
        text-align: center;
        margin: 0;
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
  max-width: 1400px;
  margin: 0 auto;

  & section {
    padding: 4rem 2rem;
    overflow-y: hidden;
    @media only screen and (max-width: 768px) {
      padding: 2rem 1rem;
    }
  }
`;

const IntroVideoStyling = styled.section`
  background: var(--dark-light-color);
  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--white-color);
    font-size: 1.6rem;
    /* margin-bottom: 0; */
  }
  & hr {
    width: 150px;
    background: var(--white-color);
    height: 3px;
    margin: 0 auto 1.8rem;
  }

  & .slider-container {
    height: 100%;

    @media only screen and (max-width: 992px) {
      margin-top: 2rem;
      position: static;
    }
    & .box-wrapper {
      margin: 0;
      margin-bottom: 15px;
    }
  }
  & .description {
    /* padding-left: 3rem; */
    height: 100%;
    padding-top: 1rem;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    & p {
      color: var(--silver-color);
      letter-spacing: 1px;
    }
    & .link {
      text-decoration: none;
      color: #fff;
      background-color: var(--orange-color);
      padding: 6px 12px;
      text-transform: capitalize;
      font-size: 1rem;
      /* margin: auto; */
      border-radius: 5px;
    }
    @media only screen and (max-width: 992px) {
      padding-top: 0.1rem;
      margin-bottom: 10px;
    }
  }
  /* ///////  Slider Dits  /////// */
  & .slick-dots {
    width: 90%;
    /* margin-top: 10px; */
  }
`;

export default AdversitingScreen;
