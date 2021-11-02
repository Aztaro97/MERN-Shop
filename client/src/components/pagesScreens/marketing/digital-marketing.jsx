import React from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Col, Image, Row, Space, Typography } from "antd";
import Slider from "react-slick";
import {
  MdOutlineScreenSearchDesktop,
  SiGoogleclassroom,
} from "react-icons/all";
import "./DigitalMarketing.css";
// import { MdAdsClick } from "react-icons/all";

const { Title, Paragraph } = Typography;

function DigitalMarketingScreen() {
  return (
    <MainContainer>
      <Banner>
        <div className="content">
          <Title level={2}>Blind</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            cupiditate dolore earum perferendis asperiores culpa id esse laborum
            quaerat
          </Paragraph>
        </div>
      </Banner>
      <Container>
        <Title level={2} className="title">
          Digital Marketing
        </Title>
        <Paragraph level={1} className="description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus
          aperiam sapiente maxime dolor, eos aut eaque error pariatur soluta
          officia voluptatum dicta laboriosam minima velit sequi illum!
          Praesentium, nesciunt laborum.
        </Paragraph>
        <MarketingService />
        <Row gutter={[10, 10]} style={{ padding: "30px 0" }}>
          <Col xs={{ span: 24 }} md={{ spam: 24 }} lg={{ span: 12 }}>
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
        breakpoint: 700,
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
    <ServiceContainer>
      <Title level={2} className="title">
        Our service
      </Title>
      <Slider {...settings}>
        <div>
          <div className="card_body">
            <Title level={4} className="card_title">
              seo
            </Title>
            <SiGoogleclassroom className="icon" />
          </div>
        </div>
        <div>
          <div className="card_body">
            <Title level={4} className="card_title">
              Ads
            </Title>
            <SiGoogleclassroom className="icon" />
          </div>
        </div>
        <div>
          <div className="card_body">
            <Title level={4} className="card_title">
              social media
            </Title>
            <SiGoogleclassroom className="icon" />
          </div>
        </div>
        <div>
          <div className="card_body">
            <Title level={4} className="card_title">
              seo
            </Title>
            <SiGoogleclassroom className="icon" />
          </div>
        </div>
        <div>
          <div className="card_body">
            <Title level={4} className="card_title">
              seo
            </Title>
            <SiGoogleclassroom className="icon" />
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
      <Slider {...settings}>
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

const ServiceContainer = styled.div`
  padding: 20px 0;
  & .card_body {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    font-size: 1.5rem;
    font-weight: bold;
    border-radius: 30px;
    border: 1px solid #f0f0f0;
    color: var(--orange-color);
    width: 200px;
    height: 150px;
    margin: 0 auto 10px;

    & .card_title {
      color: var(--orange-color);
      text-transform: uppercase;
      font-size: 1rem;
    }
    & .icon {
      font-size: 2.5rem;
    }
  }
  /* ///////  Slider Dits  /////// */
  & .slick-dots {
    width: 90%;
    /* margin-top: 10px; */
  }
`;
const Banner = styled.div`
  background: url("https://images.unsplash.com/photo-1563126153-74b8e04c1070?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80");
  position: relative;
  height: 400px;
  object-fit: cover;
  background-position: center center;
  background-size: cover;
  & .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    & > * {
      color: #fff;
    }
  }
  @media screen and (max-width: 678px) {
    height: 200px;
  }
`;

const Container = styled.div`
  padding: 40px 0;
  & .title {
    color: var(--orange-color);
    text-align: center;
  }
  & .description {
    text-align: center;
    letter-spacing: 1px;
    padding: 0 20px;
  }

  & .pk_para {
    color: var(--orange-color);
    letter-spacing: 1px;
    text-align: center;
  }
`;

const TestimonialStyling = styled.section`
  padding: 20px 0;
  & .tm_card {
    border: 1px solid #ececec;
    margin: 0 20px 20px 20px;
    padding: 20px;
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
      }
      & h4 {
        color: var(--orange-color);
      }
    }
    & .tm_card_body {
      padding: 10px 0;
    }
  }
`;

export default DigitalMarketingScreen;
