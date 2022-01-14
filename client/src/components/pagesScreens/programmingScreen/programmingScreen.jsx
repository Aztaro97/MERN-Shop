import React, { useState } from "react";
import MainContainer from "../../MainContainer";
import { Card, Col, Image, Row, Space, Typography } from "antd";
import Button from "../../ButtonComponeent";
import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { Fade } from "react-reveal";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import VideoPlayer from "react-background-video-player";
import { Link } from "react-router-dom";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

const NumberConter = ({ className, ...rest }) => {
  const [viewPortEntered, setViewPortEntered] = useState(false);
  return (
    <CountUp {...rest} start={viewPortEntered ? null : 0}>
      {({ countUpRef }) => {
        return (
          <VisibilitySensor
            active={!viewPortEntered}
            onChange={(isVisible) => {
              if (isVisible) {
                setViewPortEntered(true);
              }
            }}
            delayedCall
          >
            <h4 className={className} ref={countUpRef} />
          </VisibilitySensor>
        );
      }}
    </CountUp>
  );
};

function ProgrammingScreen() {
  return (
    <MainContainer>
      {/* <Banner>
        <div className="content">
          <Title level={2} className="title">
            The right consultation partner for your business
          </Title>
          <Paragraph className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            cupiditate
          </Paragraph>
          <Button type="button" className="link">
            contact us
          </Button>
        </div>
      </Banner> */}
      <BannerSeconde>
        <VideoPlayer
          className="video"
          src={"/videos/matrixe_video.mp4"}
          autoPlay={true}
          muted={true}
        />
        <div className="content">
          <Title level={2} className="title">
            top-rated web design company in uae
          </Title>
          <Link to="/contact-us" className="link">
            contact us
          </Link>
        </div>
      </BannerSeconde>
      <FirstServiceStyling>
        <Fade bottom>
          <h1 className="title">our services</h1>
          <Row gutter={[40, 10]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card first_card">
                <h5 className="service_card_title">Website Development</h5>
                <p>
                  We're the best web development company in UEA that turns your
                  idea into reality. With experience in web development and
                  digital marketing, we offer robust services. Our team of
                  developers has years of experience in offering quality web
                  development.
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">Mobile App Development</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">E-Commerce Development</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">WordPress Development</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">Website Redesigning</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">CMS Development</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
          </Row>
        </Fade>
      </FirstServiceStyling>
      <ThirsdSection>
        <Fade bottom>
          <Row gutter={[40, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <img
                src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="image_down"
              />
              {/* <img
            src="https://images.unsplash.com/photo-1475669698648-2f144fcaaeb1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt=""
            className="image_up"
            /> */}
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }} style={{ margin: "auto" }}>
              <div className="contenteContainer">
                {/* <p> lorem Ipsum</p> */}
                <h1>Discover the Best Ways to Design Your Website</h1>
                <p>
                  More than a website design company, we create websites that
                  address your business needs & delight your audience.
                </p>
              </div>
              <div className="numberContainer">
                <div>
                  <NumberConter
                    className="number"
                    duration={2}
                    end={36}
                    delay={1}
                  />
                  <h4>clients</h4>
                </div>
                <div>
                  <NumberConter
                    className="number"
                    duration={3}
                    end={120}
                    delay={1}
                  />
                  <h4>designs per project</h4>
                </div>
                <div>
                  <NumberConter
                    className="number"
                    duration={3}
                    end={85}
                    delay={1}
                  />
                  <h4>completed projects</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
      </ThirsdSection>
      <SecondServiceStyling>
        <Fade bottom>
          <Row gutter={[30, 60]}>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }}>
              <Title level={2} className="title">
                Providing Solutions Of Every Kind
              </Title>
              <Paragraph className="para">
                We are in the era of modern technology, where digital solutions
                and software replace an old style, and those who are interested
                in the development of their business and gain more success and
                progress to reap a lot of profits have to resort to searching
                for modern technological ways to improve the results of your
                business in the commercial market, from the furniture you are
                wondering now, to take over Responsibility for developing my
                business? If you are looking for programming companies in Dubai
                and you are tired of the many options and do not know what to
                do? We are one of the programming companies where we provide you
                with all the programming services you need
              </Paragraph>
            </Col>
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }}>
              <div className="rectangle"></div>
              <img
                src="/img/programming/colaboration.png"
                alt=""
                className="picture"
              />
            </Col>
          </Row>
          <Fade bottom>
            <Row gutter={[40, 10]} className="_row_container">
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <Title level={2} className="title_level_2">
                  Discover the Best Ways to Design Your Website
                </Title>
                <div className="contact_card">
                  <img src="/img/programming/colaboration.png" alt="" />
                  <div className="contact_card_body">
                    <Row gutter={[30, 10]}></Row>
                  </div>
                </div>
              </Col>
              <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                <div className="content">
                  <p>
                    More than a website design company, we create websites that
                    address your business needs & delight your audience.
                  </p>
                  <Link to="/contact-us" className="_link">
                    contact us
                  </Link>
                </div>
              </Col>
            </Row>
          </Fade>
        </Fade>
      </SecondServiceStyling>
    </MainContainer>
  );
}

const BannerSeconde = styled.div`
  height: 400px !important;
  overflow: hidden;
  width: 100%;
  & .video {
    position: static !important;
    & video {
      position: static !important;
      object-fit: cover;
      height: 100% !important;
    }
  }
  & .content {
    position: absolute;
    top: 20%;
    left: 0;
    right: 0;
    /* bottom: 0; */
    padding: 10px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    text-align: center;
    & > * {
      color: var(--silver-color);
    }
    & .title {
      letter-spacing: 1px;
      text-transform: uppercase;
    }
    & .para {
      max-width: 400px;
      /* text-align: center; */
    }
    & .link {
      padding: 10px 2rem;
      background: var(--orange-color);
      color: #fff;
      font-weight: 400;
      text-decoration: none;
      text-transform: uppercase;
      border-radius: 50px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const Banner = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80");
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
    max-width: 500px;
    padding: 10px;
    padding-left: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;

    margin: 0 auto;
    & > * {
      color: #fff;
    }
    & .title {
      letter-spacing: 1px;
    }
    & .para {
      max-width: 400px;
      /* text-align: center; */
    }
    & .link {
      padding: 10px;
      background: #fff;
      color: #333;
      font-weight: 400;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  @media screen and (max-width: 678px) {
    height: 300px;
    & .content {
      & > * {
        margin: 0;
      }
      & .para {
        margin-bottom: 5px;
      }
    }
  }
`;

const FirstServiceStyling = styled.section`
  padding: 4rem 2rem;
  background: var(--black-color);
  & .small_title {
    font-size: 0.7rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 0;
    letter-spacing: 1px;
    color: var(--orange-color);
  }
  & .title {
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
    color: var(--white-color);
  }
  & .service_card {
    padding: 20px;
    border-radius: 10px;
    background-color: var(--dark-light-color);
    box-shadow: var(--silver-color) 0px 0px 3px;
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    height: 200px;
    transition: all 0.3s ease;
    /* border: 1px solid var(--silver-color); */
    & .service_card_icon {
      font-size: 40px;
      color: var(--silver-color);
      margin-bottom: 10px;
    }
    & .service_card_title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: capitalize;
      color: var(--silver-color);
    }
    & p {
      font-size: 14px;
      line-height: 1.5;
      color: var(--silver-color);
    }

    &.first_card {
      text-align: start;
      box-shadow: none !important;
      box-shadow: var(--silver-color) 0px 0px 3px;
      & .service_card_title {
        color: var(--silver-color);
        letter-spacing: 1px;
      }
    }
    &:hover {
      transform: translateY(-7px);
    }
  }
  @media screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const SecondServiceStyling = styled.section`
  padding: 4rem 2rem;
  margin-top: 3rem;
  & .title {
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: 700;
    margin-bottom: 1rem;
    color: var(--white-color);
  }
  & .para {
    font-size: 1rem;
    color: var(--silver-color);
  }

  & .rectangle {
    width: 200px;
    height: 250px;
    border: 20px solid var(--silver-color);
    position: absolute;
    right: 30%;
    bottom: -18px;
    transform: rotate(45deg);
    z-index: -1;
  }
  & .picture {
    max-width: 350px;
    height: 200px;
    object-fit: cover;
    z-index: 99;
  }

  & ._row_container {
    margin-top: 5rem;
    & img {
      width: 100%;
    }
    display: flex;
    & .title_level_2 {
      color: var(--silver-color);
    }
    & .content {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      height: 100%;
      & p {
        color: var(--silver-color);
      }
      & ._link {
        padding: 5px 2rem;
        background: transparent;
        color: var(--silver-color);
        text-decoration: none;
        border: 1px solid var(--silver-color);
        transition: all 0.3s ease;
        &:hover {
          color: #ffff;
          background: var(--orange-color);
        }
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const ThirsdSection = styled.section`
  padding: 4rem 2rem;
  & .image_down,
  .image_up {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  & .image_up {
    position: absolute;
    /* bottom: 200px; */
    left: 0;
  }

  & .contenteContainer {
    & p:first-child {
      color: var(--orange-color);
      margin-bottom: 0;
    }
    & h1 {
      font-weight: 700;
      text-transform: capitalize;
      color: var(--white-color);
    }
    & p {
      color: var(--silver-color);
    }
  }

  & .numberContainer {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
    & div {
      width: 100%;
      text-align: center;
      margin-top: 20px;
      &:nth-child(2) {
        border-right: 1px solid #333;
        border-left: 1px solid #333;
      }
    }
    & {
      & .number {
        font-size: 2rem;
        font-weight: bold;
        color: var(--orange-color);
        letter-spacing: 2px;
      }
      & h4 {
        font-size: 1.2rem;
        font-weight: 700;
        text-transform: capitalize;
        color: var(--silver-color);
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export default ProgrammingScreen;
