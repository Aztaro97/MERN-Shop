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
          <Title level={2} className="title">
            Get inspired by beautiful design !
          </Title>
          <Link to="contact-us" className="link">
            contact us
          </Link>
        </div>
      </Banner>
      <FirstServiceStyling>
        <Fade bottom>
          {/* <p className="small_title">lorem ip lorem</p> */}
          <h1 className="title">Our design services</h1>
          <Row gutter={[40, 10]} justify="center">
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">Logo & Branding</h5>
                {/* <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p> */}
                <ul className="service_group">
                  <li>Logo & Business Card Design</li>
                  {/* <li>Logo Design</li> */}
                  <li>Business ID design</li>
                  <li>Billboard Design</li>
                  <li>Car Wrap Design</li>
                  <li>Signage Design</li>
                </ul>
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
                <h5 className="service_card_title">Print design</h5>
                <ul className="service_group">
                  <li>Poster & Postcard Design</li>
                  <li>Flyer & Brochure Design</li>
                  <li>Catalogue & Menu Design</li>
                  <li>Sticker Design</li>
                  <li>Advertisement Design</li>
                </ul>
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
                <h5 className="service_card_title">Graphic Design</h5>
                <ul className="service_group">
                  <li>3D design </li>
                  <li>Photoshop design</li>
                  <li>Icon & vector design</li>
                  <li>Book cover design</li>
                  <li>Calendar & CD design</li>
                </ul>
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
                <h5 className="service_card_title">
                  Product & Merchandise Design{" "}
                </h5>
                <ul className="service_group">
                  <li>Label Design</li>
                  <li>Car Wrap Design</li>
                  <li>T-shirt design </li>
                  <li>packaging designs</li>
                  <li>apparel designs</li>
                </ul>
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
                <h5 className="service_card_title">Web Design</h5>
                <ul className="service_group">
                  <li>App design </li>
                  <li>landing page design</li>
                  <li>wordpress design </li>
                  <li>icon design</li>
                  <li>email marketing design</li>
                  <li>e-commerce design</li>
                </ul>
              </div>
            </Col>
            {/* <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BiPaint className="service_card_icon" />
                <h5 className="service_card_title">Video Design</h5>
                <ul className="service_group">
                  <li>Shooting & editing</li>
                  <li>sous servie 1</li>
                  <li>sous servie 1</li>
                  <li>sous servie 1</li>
                  <li>sous servie 1</li>
                </ul>
              </div>
            </Col> */}
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
                {/* <p> lorem Ipsum</p> */}
                <h1>Need creative support?</h1>
                <p>Get the perfect custom design, every time</p>
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
      </SecondServiceStyling>
      <ThirstServiceStyling>
        <Fade bottom>
          <Row gutter={[40, 10]}>
            <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              <div className="contenteContainer">
                {/* <p> lorem Ipsum</p> */}
                <h1>you just need to choose the best !</h1>
                <p>
                  Our custom design starts at a low price with options to meet
                  any budget.
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
                  <h1>More creativity</h1>
                  <p>
                    With our designers across the globe competing on your
                    project, you'll receive heaps of design ideas.{" "}
                  </p>
                </div>
                <div className="contente">
                  <h1>A world of design</h1>
                  <p>
                    Our Professional Designers Ready To Create You The Perfect
                    Logo, Website, Business Card & More!{" "}
                  </p>
                </div>
                <div className="contente">
                  <h1>Money back guarantee</h1>
                  <p>
                    If you're not satisfied with the designs and don't get the
                    perfect design for your business, get your money back{" "}
                  </p>
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
              <h1>Let's get started</h1>
              <div className="contact_container">
                <Link to="/contact-us">
                  <button className="button">Contact us</button>
                </Link>
              </div>
            </Col>
            {/* <Col xs={{ span: 24 }} lg={{ span: 12 }}>
              
            </Col> */}
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
    /* height: 100%;
    display: flex;
    align-items: center;
    justify-content: center; */
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
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
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
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
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
        font-size: 1rem;
        font-weight: 700;
        text-transform: capitalize;
      }
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
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
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
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
    min-height: 280px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--box-shadow-value);
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
      letter-spacing: 1px;
    }
    & .service_group {
      list-style-type: "✓ ";
      text-align: start;
      /* padding: 0; */
      text-transform: capitalize;
      & li {
        color: var(--silver-color);
        letter-spacing: 1px;
      }
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
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
    & .service_card {
      min-height: 240px;
      &:hover {
        transform: none;
      }
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
    padding-left: 2rem;

    margin: 0 auto;
    & > * {
      color: #fff;
    }

    & .title {
      color: var(--silver-color);
      letter-spacing:1px;
        }
    & .link {
      text-decoration: none;
      font-size: 1.2rem;
      display: block;
      padding: 6px 10px;
      text-transform: uppercase;
      background: transparent;
      border: 1px solid var(--silver-color);
      color: var(--silver-color);
      text-align: center;
      max-width: 160px;
      margin-top: 10px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  @media screen and (max-width: 678px) {
    height: 400px;
    & .content {
      justify-content: end;
      padding-bottom: 20px;
      padding-left: 1rem;
      & > * {
        margin: 0;
      }
    }
  }
`;

export default DesignScreen;
