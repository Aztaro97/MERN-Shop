import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "./sliderStyling.css";

import MainContainer from "../../MainContainer";
import { Col, Row } from "antd";
import { IoCartSharp } from "react-icons/io5";
import {MdOutlineAddAPhoto} from "react-icons/md"

function HomeComponents() {
  return (
    <MainContainer>
      <Banner />
      <NavStyling>
        <h1 className="title">our services</h1>
        <Row gutter={[10, 30]} justify="center">
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">design</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">photography</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">printing press</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">exhibition management</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">programming</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">marketing</h4>
            </div>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 6 }}>
            <div className="nav_item">
              <IoCartSharp className="nav_icon" />
              <h4 className="nav_title">products</h4>
            </div>
          </Col>
        </Row>
      </NavStyling>
      <Container>
        <h1>Home Deee ddd</h1>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div``;

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
    dotsClass: "dots__bar",
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow">
    //       {" "}
    //       {currentLang === "en" ? ">" : "<"}{" "}
    //     </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow">
    //       {currentLang === "en" ? "<" : ">"}{" "}
    //     </div>
    //   </div>
    // ),
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
  padding: 40px 10px;
  background: #ececec;
  & .title {
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
  & .nav_item {
    max-width: 200px;
    height: 200px;
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
      font-size: 50px;
      color: var(--orange-color);
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
