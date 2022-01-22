import React from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Col, Image, Row, Space, Typography } from "antd";
import Slider from "react-slick";
import {
  MdOutlineScreenSearchDesktop,
  SiGoogleclassroom,
  GoMegaphone,
  ImRss,
} from "react-icons/all";
import { Link } from "react-router-dom";
import "./DigitalMarketing.css";
import ButtonComponeent from "../../ButtonComponeent";
// import { MdAdsClick } from "react-icons/all";
import Button from "../../ButtonComponeent";

const { Title, Paragraph } = Typography;

function DigitalMarketingScreen() {
  return (
    <MainContainer>
      <Banner>
        {/* <img src="/img/marketing/banner2.jpg" alt="" className="banner_img" /> */}
        <div>
          <h2 className="title">
            Gain A 360° View Of Where Your Marketing Stands
          </h2>
          <p className="para">
            We take the time to learn the dynamics of your business, enabling us
            to develop unique strategies to your Company.
          </p>
          <Link to="/contact-us" className="link">
            contact today
          </Link>
        </div>
      </Banner>
      <Container>
        <MarketingService />
        <Row gutter={[10, 10]} style={{ padding: "30px 0" }}>
          <Col
            xs={{ span: 24 }}
            md={{ spam: 24 }}
            lg={{ span: 12 }}
            style={{ margin: "auto" }}
          >
            <Title level={2} className="title">
              Our package
            </Title>
            <Paragraph className="pk_para">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Accusamus corrupti error officiis maiores, laboriosam deleniti
              fugit. Tempora, quaerat cupiditate voluptate nulla, mollitia ipsa
              asperiores veniam ullam distinctio, illo aut corporis?
            </Paragraph>
          </Col>
          <Col xs={{ span: 24 }} md={{ spam: 24 }} lg={{ span: 12 }}>
            <img
              src="https://images.unsplash.com/photo-1562577309-4932fdd64cd1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80"
              alt=""
              width="100%"
              loading="lazy"
            />
          </Col>
        </Row>
        <AboutDigitalSection />
        <TestimonialComponent />
      </Container>
    </MainContainer>
  );
}
const MarketingService = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 4,
    // rtl: lang === "ar" ? true : false,
    slidesToScroll: 1,
    dotsClass: "dots__bar",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 3,
        },
      },
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
    ],
  };
  return (
    <ServiceContainer>
      <Title level={2} className="title">
        Digital Marketing
      </Title>
      <Paragraph level={1} className="description">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus aperiam
        sapiente maxime dolor, eos aut eaque error pariatur soluta officia
        voluptatum dicta laboriosam minima velit sequi illum! Praesentium,
        nesciunt laborum.
      </Paragraph>
      <Title level={4} className="title">
        provide awesome services <br /> with our tools
      </Title>
      <Slider {...settings}>
        <div>
          <div className="card_body">
            <MdOutlineScreenSearchDesktop className="icon" />
            <Title level={4} className="card_title">
              seo
            </Title>
          </div>
        </div>
        <div>
          <div className="card_body">
            <GoMegaphone className="icon" />
            <Title level={4} className="card_title">
              Ads
            </Title>
          </div>
        </div>
        <div>
          <div className="card_body">
            <ImRss className="icon" />
            <Title level={4} className="card_title">
              social media
            </Title>
          </div>
        </div>
        <div>
          <div className="card_body">
            <SiGoogleclassroom className="icon" />
            <Title level={4} className="card_title">
              seo
            </Title>
          </div>
        </div>
        <div>
          <div className="card_body">
            <SiGoogleclassroom className="icon" />
            <Title level={4} className="card_title">
              seo
            </Title>
          </div>
        </div>
      </Slider>
    </ServiceContainer>
  );
};

const TestimonialComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    autoplay: true,
    slidesToShow: 2,
    // rtl: lang === "ar" ? true : false,
    slidesToScroll: 1,
    dotsClass: "dots__bar",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <TestimonialStyling>
      <Title level={2} className="title">
        Testimonials
      </Title>
      <Slider {...settings} arrows={false}>
        <div>
          <div className="tm_card">
            <div className="tm_card_header">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="profile"
              />
              <div>
                <h4>name</h4>
                <h6>designation</h6>
                <p>location</p>
              </div>
            </div>
            <div className="tm_card_body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cupiditate dolore earum perferendis asperiores culpa id
                esse laborum quaerat Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Suscipit cupiditate dolore earum perferendis
                asperiores culpa id esse laborum quaerat
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="tm_card">
            <div className="tm_card_header">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="profile"
              />
              <div>
                <h4>name</h4>
                <h6>designation</h6>
                <p>location</p>
              </div>
            </div>
            <div className="tm_card_body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cupiditate dolore earum perferendis asperiores culpa id
                esse laborum quaerat Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Suscipit cupiditate dolore earum perferendis
                asperiores culpa id esse laborum quaerat
              </p>
            </div>
          </div>
        </div>
        <div>
          <div className="tm_card">
            <div className="tm_card_header">
              <img
                src="https://via.placeholder.com/150"
                alt=""
                className="profile"
              />
              <div>
                <h4>name</h4>
                <h6>designation</h6>
                <p>location</p>
              </div>
            </div>
            <div className="tm_card_body">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit cupiditate dolore earum perferendis asperiores culpa id
                esse laborum quaerat Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Suscipit cupiditate dolore earum perferendis
                asperiores culpa id esse laborum quaerat
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </TestimonialStyling>
  );
};

const AboutDigitalSection = () => {
  return (
    <AboutStyling>
      <div className="ontente">
        <h1>Booster Your website traffic !</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Praesentium
          natus sit officiis quisquam necessitatibus. Totam atque reprehenderit
          molestias molestiae esse, velit quis inventore quidem perferendis
          repellat illum provident facilis at? natus sit officiis quisquam
          necessitatibus. Totam atque reprehenderit molestias molestiae esse,
          velit quis inventore quidem perferendis repellat illum provident
          facilis at?
        </p>
      </div>
    </AboutStyling>
  );
};

const AboutStyling = styled.section`
  background: linear-gradient(to bottom, #111111cf 0%, #000000c3 100%),
    url("https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 40px 30px;
  color: var(--silver-color);
  text-align: center;
  & h1 {
    color: var(--silver-color);
  }
`;

const ServiceContainer = styled.div`
  padding: 2rem 0;
  background: var(--dark-light-color);
  & .title {
    max-width: 400px;
    margin: 0 auto 15px;
    text-transform: capitalize;
    color: var(--silver-color) !important;
    letter-spacing: 1px;
  }
  & .description {
    color: var(--silver-color) !important;
    text-align: start;
  }
  & .card_body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 10px;
    border: 1px solid var(--silver-color);
    /* border: 1px solid #f0f0f0; */
    /* background: #ececec; */
    max-width: 200px;
    height: 150px;
    margin: 0 auto 20px;
    padding: 10px;
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;

    & .card_title {
      text-transform: uppercase;
      font-size: 1.2rem;
      font-weight: bold;
      color: var(--silver-color);
    }
    & .icon {
      font-size: 2.5rem;
      color: var(--silver-color);
      margin-bottom: 20px;
    }
  }
  /* ///////  Slider Dits  /////// */
  & .slick-dots {
    width: 90%;
    /* margin-top: 10px; */
  }
  @media only screen and (max-width: 768px) {
    & .card_body {
      width: 150px;
      height: 150px;
    }
  }
`;
const Banner = styled.section`
  background: linear-gradient(90deg, #000000bc 0%, #00000099 0%),
    url("/img/marketing/banner2.jpg");
  position: relative;
  height: 400px;
  object-fit: cover;
  background-position: center center;
  background-size: cover;
  padding: 2rem;
  /* padding: 10px; */
  /* text-align: end; */
  & div {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    height: 100%;
    max-width: 400px;
    & .title {
      color: var(--silver-color);
      font-size: 2rem;
      letter-spacing: 1px;
      font-weight: 700;
    }
    & .para {
      color: var(--silver-color);
    }
    & .link {
      text-align: center;
      padding: 10px 20px;
      border-radius: 5px !important;
      text-decoration: none;
      color: #fff;
      background: var(--orange-color);
      text-transform: uppercase;
    }
  }
  & .banner_img {
    position: absolute;
    top: 0;
    bottom: 0;
    /* right: 0; */
    opacity: 0.7;
    /* position: relative; */
    /* height: 100%; */
    /* width: 600px; */
    /* right: 0; */
    float: right;
    object-fit: cover;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Container = styled.div`
  overflow: hidden;

  & section {
    padding: 4rem 2rem !important;
  }
  & .title {
    color: var(--silver-color);
    text-align: center;
  }
  & .description {
    text-align: center;
    letter-spacing: 1px;
    padding: 0 20px;
  }

  & .pk_para {
    color: var(--silver-color);
    letter-spacing: 1px;
    text-align: center;
  }
  @media only screen and (max-width: 768px) {
    & section {
      padding: 2rem 1rem;
    }
  }
`;

const TestimonialStyling = styled.section`
  background: transparent !important;
  padding: 20px 0;
  & .tm_card {
    /* border: 1px solid #ececec; */
    margin: 0 20px 20px 20px;
    padding: 20px;
    background: var(--dark-light-color);
    & .tm_card_header {
      display: flex;
      align-items: center;
      /* justify-content: space-between; */

      & img {
        width: 100px;
        border-radius: 50%;
      }
      & h4,
      h6,
      p {
        text-transform: capitalize;
        margin-bottom: 0;
        margin-left: 10px;
        color: var(--silver-color);
      }
      & h4 {
        color: var(--orange-color);
      }
    }
    & .tm_card_body {
      padding: 10px 0;
      color: var(--silver-color);
    }
  }
`;

export default DigitalMarketingScreen;
