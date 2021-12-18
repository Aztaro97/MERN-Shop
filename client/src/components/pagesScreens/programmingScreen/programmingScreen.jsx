import React from "react";
import MainContainer from "../../MainContainer";
import { Card, Col, Image, Row, Space, Typography } from "antd";
import Button from "../../ButtonComponeent";
import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

function ProgrammingScreen() {
  return (
    <MainContainer>
      <Banner>
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
      </Banner>
      <FirstServiceStyling>
        <p className="small_title">lorem ip lorem</p>
        <h1 className="title">provides feature</h1>
        <Row gutter={[40, 10]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 12 }}
            md={{ span: 12 }}
            lg={{ span: 8 }}
          >
            <div className="service_card first_card">
              {/* <BsCodeSlash className="service_card_icon" /> */}
              <h5 className="service_card_title">
                Providing solutions of every kind
              </h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, minus corrupti. Porro adipisicing elit. Molestiae,
                minus corrupti. Porro
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
              <BsCodeSlash className="service_card_icon" />
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
              <BsCodeSlash className="service_card_icon" />
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
              <BsCodeSlash className="service_card_icon" />
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
              <BsCodeSlash className="service_card_icon" />
              <h5 className="service_card_title">service 6</h5>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae, minus corrupti. Porro
              </p>
            </div>
          </Col>
        </Row>
      </FirstServiceStyling>
      <SecondServiceStyling>
        <Row gutter={[10, 60]}>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 12 }}>
            <Title level={2} className="title">
              Providing Solutions Of Every Kind
            </Title>
            <Paragraph className="para">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              dolor omnis perferendis aliquam? Expedita id, asperiores aliquam
              accusantium, excepturi ratione assumenda facere dolor, recusandae
              provident exercitationem doloribus nam inventore necessitatibus!
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
          <Col xs={{ span: 24 }}>
            <div className="contact_container">
              <Row gutter={[10, 10]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Title level={5}>Lorem Ipsum</Title>
                  <Title level={2}>Lorem Ipsum</Title>
                  <div className="contact_card">
                    <img src="/img/programming/colaboration.png" alt="" />
                    <div className="contact_card_body">
                      <Row gutter={[30, 10]}>
                        <Col xs={{ spaN: 12 }} lg={{ span: 12 }}>
                          <h3>Providing Solutions Of Every Kind</h3>
                          <p>
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Alias voluptas
                          </p>
                        </Col>
                        <Col xs={{ spaN: 12 }} lg={{ span: 12 }}>
                          <button type="button" className="button">
                            contact us
                          </button>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div className="content_right">
                    <div>
                      <img src="/img/programming/colaboration.png" alt="" />
                      <h5>Lorem upsum</h5>
                    </div>
                    <div>
                      <img src="/img/programming/colaboration.png" alt="" />
                      <h5>Lorem upsum</h5>
                    </div>
                    <div>
                      <img src="/img/programming/colaboration.png" alt="" />
                      <h5>Lorem upsum</h5>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </SecondServiceStyling>
    </MainContainer>
  );
}

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
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    height: 200px;
    transition: all 0.3s ease;
    border: 1px solid var(--silver-color);
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
    padding: 20px 10px;
  }
`;

const SecondServiceStyling = styled.section`
  padding: 20px 0;
  & .title {
    font-size: 1.8rem;
    text-transform: capitalize;
    font-weight: 700;
    margin-bottom: 0;
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

  & .contact_container {
    max-width: calc((var(--max-width) - 150px));
    margin-left: auto;
    background: var(--black-color);
    padding: 30px;
    & .contact_card {
      & img {
        width: 100%;
      }
      & .contact_card_body {
        padding: 20px;
        background: var(--dark-light-color);
        & h3 {
          color: var(--white-color);
          font-size: 1.1rem;
          font-weight: 700;
          letter-spacing: 1px;
        }
        & .button {
          /* max-width: 190px; */
          padding: auto 5px !important;
          background: var(--orange-color);
          border: none;
          color: #fff;
          padding: 5px 10px;
          position: relative;
          top: 50px;
        }
      }
    }

    & .content_right {
      background: var(--dark-light-color);
      padding: 20px;
      & div {
        display: flex;
        align-items: center;
        margin: 15px 0;
        & img {
          max-width: 200px;
        }
        & h5 {
          padding: 20px 10px;
          color: var(--silver-color)
        }
        @media screen and (max-width: 500px) {
          flex-direction: column;
          & img {
            max-width: 100%;
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    padding: 20px 10px;
  }
`;

export default ProgrammingScreen;
