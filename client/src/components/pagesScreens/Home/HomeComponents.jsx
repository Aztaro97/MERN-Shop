import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "./sliderStyling.css";

import MainContainer from "../../MainContainer";
import { Col, Row, Image } from "antd";
import { IoCartSharp } from "react-icons/io5";
import { MdOutlineAddAPhoto } from "react-icons/md";

function HomeComponents() {
  return (
    <MainContainer>
      <Banner />
      <NavStyling>
        <h1 className="title">our services</h1>
        <Row gutter={[10, 30]} justify="center">
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">design</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">photography</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">printing press</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">exhibition management</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">programming</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">marketing</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">products</h4>
            </div>
          </Col>
        </Row>
      </NavStyling>
      <DesignStyling>
        <h1 className="title">design</h1>
        <h3 className="sub_title">
          Want to know what your audiences thinks of your brand ?
        </h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              Are you wondering why other companies do less and benefit more
              from their brand presence in the market? Well here at AU 79 CODE,
              we've made a recipe for exactly that! We welcome your challenges
              and offer you an open feast of beautifully crafted solutions to
              complex problems. Whatever your business, we have our heart and
              passion in it, using the right channels and methods to reach the
              right customers at the right time by designing and building your
              brand identity.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="second_row">
          <Col xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
            <div className="card_large_container">
              <h1 className="large_title">design</h1>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
            <Row className="card_container" gutter={[20, 10]}>
              <Col xs={{ span: 9 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="medium_container">
                  <Image
                    className="medium_img"
                    src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                  <Image
                    className="medium_img"
                    src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={{ span: 9 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>

              <Col xs={{ span: 9 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 6 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 9 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </DesignStyling>
    </MainContainer>
  );
}

const Banner = () => {
  const { t, i18n } = useTranslation();

  const data = [
    {
      url:
        "https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1531498352491-042fbae4cf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80",
    },
  ];
  const currentLang = i18n.language;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: currentLang === "ar" ? true : false,
    dotsClass: "dots_bar",
  };
  return (
    <BannerStyling data={data}>
      <Slider {...settings}>
        <div>
          <div className="landing_overlay bg_img1">
            <div className="content_overlay">
              <h1>your partner in growth</h1>

              <p>
                Our marketing strategies for getting your website publicized
                give effective results
              </p>

              <Link className="btn_register" to="/e-commerce">
                contact us
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img2">
            <div className="content_overlay">
              <Link className="btn_register" to="/register">
                create your company
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img3">
            <div className="content_overlay">
              <Link className="btn_register" to="/register">
                create your company
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img4">
            <div className="content_overlay">
              <Link className="btn_register" to="/register">
                create your company
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </BannerStyling>
  );
};

const NavStyling = styled.section`
  /* margin: 20px 0; */
  padding: 40px 40px;
  background: #ececec;
  & .title {
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  & .nav_item {
    max-width: 180px;
    height: 180px;
    background: #fff;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    }
    & .nav_icon {
      font-size: 2.5rem;
      color: var(--orange-color);
      margin-bottom: 10px;
    }
    & .nav_title {
      color: var(--orange-color);
      text-transform: uppercase;
      margin: 0;
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 700;
      text-align: center;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 40px 10px;
  }
`;

const DesignStyling = styled.section`
  padding: 40px 40px;
  & .title {
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 20px;
  }
  & .sub_title {
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
  }
  & .para {
    margin: auto;
    padding: 10px 0;
    letter-spacing: 1px;
  }
  & .circle {
    width: 350px;
    height: 350px;
    margin-left: auto;
    background: var(--orange-color);
    border-radius: 50%;
    @media only screen and (max-width: 500px) {
      width: 300px;
      height: 300px;
      & img {
        /* display: none; */
      }
    }
    & img {
      /* width: 100%; */
      height: 300px;
      position: relative;
    }
  }

  /* //////////////////  /////////////// */
  & .second_row {
    background: var(--orange-color);
    display: flex;
    align-items: center;
    justify-content: center;
    & .card_large_container {
      height: 100%;
      & .large_title {
        color: #ecececc3;
        transform: rotate(180deg);
        /* padding: 30px 10px; */
        font-size: 3rem;
        writing-mode: vertical-rl;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
        margin: auto;
      }
    }
    & .card_container {
      background: #ececec;
      padding: 30px;
      & .large_img {
        width: 100%;
        height: 400px;
        object-fit: cover;
      }
      & .medium_container {
        height: 100%;
        & .medium_img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }
      }
      & .small_img {
        width: 100% !important;
        height: 100px;
        object-fit: cover;
      }
    }
  }

  @media only screen and (max-width: 500px) {
    padding: 40px 10px;
  }
`;

const BannerStyling = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  & .landing_overlay {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    color: #fff;
    height: 400px;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    background-origin: content-box !important;
    width: 100%;
    &.bg_img1 {
      background: ${({ data }) =>
        data
          ? `linear-gradient(0deg, #00000073 0%, rgba(0, 0, 0, 0.459) 0%),
        url(${data[0].url})`
          : null};
    }
    &.bg_img2 {
      background: ${({ data }) =>
        data
          ? `linear-gradient(0deg, #00000073 0%, rgba(0, 0, 0, 0.459) 0%),
        url(${data[1].url})`
          : null};
    }
    &.bg_img3 {
      background: ${({ data }) =>
        data
          ? `linear-gradient(0deg, #00000073 0%, rgba(0, 0, 0, 0.459) 0%),
        url(${data[2].url})`
          : null};
    }
    &.bg_img4 {
      background: ${({ data }) =>
        data
          ? `linear-gradient(0deg, #00000073 0%, rgba(0, 0, 0, 0.459) 0%),
        url(${data[3].url})`
          : null};
    }
    @media only screen and (max-width: 768px) {
      height: 300px;
    }

    & .content_overlay {
      max-width: 500px;
      padding: 20px;
      & h1 {
        color: #fff;
        margin: 0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.3rem;
        word-wrap: break-word;
      }

      & p {
        color: #fff;
        margin: 5px 0;
        font-size: 1em;
      }

      & .btn_register {
        display: block;
        text-decoration: none;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 5px 20px;
        background: var(--orange-color);
        text-transform: capitalize;
        color: #fff;
        text-align: center;
        letter-spacing: 1px;
        margin: 10px 0;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  /* //////////  Slider Customer Arrows */

  .slick-prev {
    z-index: 2 !important;
  }

  .slick-next:before,
  .slick-prev:before {
    content: "" !important;
    position: relative;
  }
  .slick-next .next-slick-arrow,
  .prev-slick-arrow {
    color: #fff;
    font-size: 30px;
    position: absolute;
    background: #8585859e !important;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
      width: 40px;
      height: 40px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
  .slick-next .next-slick-arrow {
    right: ${({ currentLang }) =>
      currentLang === "en" ? "1rem" : "-4rem"} !important;
  }
  .prev-slick-arrow {
    left: ${({ currentLang }) =>
      currentLang === "en" ? "3rem" : "-4rem"} !important;
  }

  .slick-next {
    right: ${({ currentLang }) => (currentLang === "en" ? "0" : "0")};
    left: ${({ currentLang }) => (currentLang === "en" ? "auto" : "0")};
  }
`;

export default HomeComponents;
