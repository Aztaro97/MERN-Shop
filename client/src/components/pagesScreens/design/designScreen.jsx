import React, { useState } from "react";
import MainComponent from "../../MainContainer";
import { Card, Col, Image, Row, Space, Typography } from "antd";
import Button from "../../ButtonComponeent";
import styled from "styled-components";
import { BiPaint } from "react-icons/bi";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import ButtonComponent from "../../ButtonComponeent";

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

function DesignScreen() {
  return (
    <MainComponent>
      <Banner>
        <div className="content">
          <Title level={2}>The Prefect Templat for Freshers or Senpais</Title>
          <Paragraph className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            cupiditate dolore
          </Paragraph>
          <Button type="button" className="link">
            contact us
          </Button>
        </div>
      </Banner>
      <FirstServiceStyling>
        <Fade bottom>
          <p className="small_title">lorem ip lorem</p>
          <h1 className="title">provides feature</h1>
          <Row gutter={[40, 10]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">service 1</h5>
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
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">service 2</h5>
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
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">service 3</h5>
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
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">service 4</h5>
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
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">service 5</h5>
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
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">service 6</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
          </Row>
        </Fade>
      </FirstServiceStyling>
      <SecondServiceStyling>
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
                <p> lorem Ipsum</p>
                <h1>we are the leader in web design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam iure dolore, vitae porro eum ullam esse, cumque sit
                  sapiente vero ut sint maiores est error enim et mollitia
                  soluta illum!
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
                  <h4>project</h4>
                </div>
                <div>
                  <NumberConter
                    className="number"
                    duration={3}
                    end={120}
                    delay={1}
                  />
                  <h4>project</h4>
                </div>
                <div>
                  <NumberConter
                    className="number"
                    duration={3}
                    end={85}
                    delay={1}
                  />
                  <h4>project</h4>
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
      </SecondServiceStyling>
      <ThirstServiceStyling>
        <Fade bottom>
          <Row gutter={[40, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="contenteContainer">
                <p> lorem Ipsum</p>
                <h1>we are the leader in web design</h1>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Veniam iure dolore, vitae porro eum ullam esse, cumque sit
                  sapiente vero ut sint maiores est error enim et mollitia
                  soluta illum!
                </p>
              </div>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <img
                src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="image_down"
              />
            </Col>
          </Row>
        </Fade>
      </ThirstServiceStyling>
      <FifthServiceStyling>
        <Fade bottom>
          <Row gutter={[40, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <img
                src="https://images.unsplash.com/photo-1461344577544-4e5dc9487184?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
                className="image_down"
              />
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="contenteContainer">
                <div className="contente">
                  <h1>lorem Ipsum</h1>
                  <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="contente">
                  <h1>lorem Ipsum</h1>
                  <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
                <div className="contente">
                  <h1>lorem Ipsum</h1>
                  <p>Lorem ipsum dolor sit amet consectetur </p>
                </div>
              </div>
            </Col>
          </Row>
        </Fade>
      </FifthServiceStyling>

      <ContactService>
        <Fade bottom>
          <Row gutter={[40, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <h1>lorem ipsum</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Mollitia non beatae sint possimus ipsa ducimus vero, neque, qui
                nulla
              </p>
            </Col>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="contact_container">
                <Link to="/contact-us">
                  <button className="button">Contact us</button>
                </Link>
              </div>
            </Col>
          </Row>
        </Fade>
      </ContactService>
    </MainComponent>
  );
}

const ContactService = styled.section`
  background: var(--black-color);
  padding: 4rem 2rem;
  & h1 {
    color: var(--white-color);
  }
  & p {
    color: var(--silver-color);
  }

  & .contact_container {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    & .button {
      margin: auto;
      background: #fff;
      border: none;
      outline: none;
      color: #333;
      padding: 10px;
      transition: 0.3s ease-in;
      &:hover {
        background: var(--orange-color);
        color: #fff;
      }
    }
  }
`;

const FifthServiceStyling = styled.div`
  padding: 4rem 2rem;
  & .contenteContainer {
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    height: 100%;
    & .contente {
      padding: 10px 0;
      color: var(--silver-color);
      & h1 {
        font-size: 1.3rem;
        text-transform: capitalize;
        font-weight: 700;
        color: var(--white-color);
      }
    }
  }
  .image_down {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

const ThirstServiceStyling = styled.section`
  padding: 4rem 2rem;
  background: var(--black-color);
  & .image_down,
  .image_up {
    width: 100%;
    height: 400px;
    object-fit: cover;
  }
  & .image_up {
    position: absolute;
    left: 0;
  }

  & .contenteContainer {
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
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
    align-items: center;
    padding: 20px;
    & {
      & .number {
        font-size: 2rem;
        font-weight: bold;
        color: var(--orange-color);
        letter-spacing: 2px;
      }
      & h4 {
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
      }
    }
  }
`;

const SecondServiceStyling = styled.section`
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
    align-items: center;
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
        font-size: 20px;
        font-weight: 700;
        text-transform: capitalize;
        color: var(--orange-color);
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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    background: var(--dark-light-color);
    cursor: pointer;
    transition: all 0.3s ease;
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
    &:hover {
      transform: translateY(-7px);
    }
  }
`;

const Banner = styled.section`
  background: linear-gradient(
      225deg,
      rgba(2, 0, 36, 0.5606617647058824) 5%,
      rgba(0, 0, 0, 0.7035189075630253) 70%
    ),
    url("https://images.unsplash.com/photo-1587440871875-191322ee64b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80");
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
    justify-content: center;
    /* align-items: center; */
    max-width: 500px;
    padding-left: 20px;

    margin: 0 auto;
    & > * {
      color: #fff;
    }
    & .para {
      max-width: 400px;
      /* text-align: center; */
    }
    & .link {
      padding: 10px;
      background: #fff;
      color: #333;
      max-width: 200px;
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

export default DesignScreen;
