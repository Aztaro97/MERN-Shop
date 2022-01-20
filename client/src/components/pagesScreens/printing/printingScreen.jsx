import React from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Link } from "react-router-dom";
import { Card, Col, Image, Row, Space, Typography } from "antd";
import Button from "../../ButtonComponeent";
import Slider from "react-slick";
import "./printing.css";
import { Fade } from "react-reveal";

const { Title, Paragraph } = Typography;
const { Meta } = Card;

function PrintingScreen() {
  return (
    <MainContainer>
      <Container>
        <Banner>
          <div className="content">
            <Title level={2}>
              Shaping the future with <br /> Heat-Free Technology printers
            </Title>
            <Link to="/contact-us" className="link">
              contact us
            </Link>
          </div>
        </Banner>
        <section className="service_provider">
          <Fade bottom>
            <Title level={2} className="title">
              services we provide
            </Title>
            <Row gutter={[10, 10]} justify="space-between">
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="s1">
                  <p>digital print</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="s2">
                  <p>offset printing</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="s1">
                  <p>Packaging</p>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }}>
                <div className="s1">
                  <p>silk screen printing</p>
                </div>
              </Col>
            </Row>
          </Fade>
        </section>
        <ProductSelling />
        <CardProductList />
        <section className="contact_section">
          <Fade bottom>
            <h4 className="title">Get in touch with us</h4>
            <Link to="/contact-us" className="link">
              <Button className="button">contact us</Button>
            </Link>
          </Fade>
        </section>
      </Container>
    </MainContainer>
  );
}

const ProductSelling = () => {
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
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <ProductStyling>
      <Fade bottom>
        <Title level={2} className="title">
          best selling products
        </Title>
        <Slider {...settings} className="slider">
          <div>
            <img src="https://via.placeholder.com/500" alt="" />
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <div>
            <img src="https://via.placeholder.com/500" alt="" />
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
          <div>
            <img src="https://via.placeholder.com/300" alt="" />
          </div>
        </Slider>
      </Fade>
    </ProductStyling>
  );
};

const CardProductList = () => {
  return (
    <ProductListStyling>
      <Fade bottom>
        <Title level={2} className="title">
          Related products
        </Title>
        <Row gutter={[10, 40]} justify="center">
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              className="product_card"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                  height="200px"
                />
              }
            >
              <Meta
                title="Product Name"
                description="lorem upsum description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              className="product_card"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1513521773210-0cc22dfee8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
              }
            >
              <Meta
                title="Product Name"
                description="lorem upsum description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              className="product_card"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                />
              }
            >
              <Meta
                title="Product Name"
                description="lorem upsum description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              className="product_card"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1513521773210-0cc22dfee8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
              }
            >
              <Meta
                title="Product Name"
                description="lorem upsum description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              className="product_card"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1568649929103-28ffbefaca1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
                />
              }
            >
              <Meta
                title="Product Name"
                description="lorem upsum description"
              />
            </Card>
          </Col>
          <Col xs={{ span: 12 }} md={{ span: 8 }}>
            <Card
              hoverable
              className="product_card"
              cover={
                <img
                  alt="example"
                  src="https://images.unsplash.com/photo-1513521773210-0cc22dfee8db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                />
              }
            >
              <Meta
                title="Product Name"
                description="lorem upsum description"
              />
            </Card>
          </Col>
        </Row>
      </Fade>
    </ProductListStyling>
  );
};

const Container = styled.div`
  & section {
    padding: 4rem 2rem;
    overflow-y: hidden;
    @media only screen and (max-width: 768px) {
      padding: 2rem 1rem;
    }
  }

  & .service_provider {
    & .title {
      text-transform: uppercase;
      text-align: center;
      color: var(--silver-color);
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }
    & .s1,
    .s2,
    .s3,
    .s4 {
      width: 100%;
      height: 150px;
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: auto;
      box-shadow: rgba(0, 0, 0, 0.09) 0px 0px 0px 1px,
        rgb(209, 213, 219) 0px 0px 0px 1px inset;
      /* object-fit: contain; */
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      object-fit:cover;
      & p {
        margin: 0;
        font-size: 1.2rem;
        text-transform: capitalize;
        font-weight: 700;
      }
    }
    & .s1 {
      background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 0.623) 100%,
          rgba(51, 51, 51, 1) 100%
        ),
        url("/img/printing/printingcard.jpg");
    }
    & .s2 {
      background: linear-gradient(
          90deg,
          rgba(2, 0, 36, 0.623) 100%,
          rgba(51, 51, 51, 1) 100%
        ),
        url("/img/printing/printingcard.jpg");
    }
  }

  /* & .portfolio {
      margin: 20px 0;
      background: linear-gradient(to bottom, #11111176 0%, #00000099 100%),
        url("https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80");
      padding: 20px;
      display: flex;
      align-items: center;
      height: 200px;
      & > * {
        color: #fff;
      }
      & .button {
        border-radius: 50px;
        color: var(--orange-color);
        padding: 20px auto !important;
        background: #fff;
      }
      & h4 {
        font-weight: 700;
        font-size: 1.6rem;
        margin-bottom: 0;
        padding: 10px;
        text-transform: capitalize;
        letter-spacing: 1px;
      }
      @media only screen and (max-width: 600px) {
        & .button {
          font-size: 0.8rem;
        }
        & h4 {
          font-size: 1.2rem;
        }
      }
    } */
  & .contact_section {
    margin: 20px 0;
    background: linear-gradient(to bottom, #11111176 0%, #00000099 100%),
      url("https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80");
    padding: 20px;
    display: flex;
    align-items: center;
    height: 200px;
    & .title {
      color: #fff;
    }
    & .link {
      text-decoration: none;
    }
    & .button {
      border-radius: 10px;
      color: var(--orange-color);
      padding: 20px auto !important;
      background: #fff;
    }
    & h4 {
      font-weight: 700;
      font-size: 1.6rem;
      margin-bottom: 0;
      padding: 10px;
    }
    @media only screen and (max-width: 600px) {
      & .button {
        font-size: 0.8rem;
      }
      & h4 {
        font-size: 1.2rem;
      }
    }
  }
`;

const ProductListStyling = styled.section`
  & .title {
    color: var(--silver-color);
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  & .product_card {
    max-width: 240px;
    margin: 0 auto;
  }
  & img {
    height: 200px;
    width: 100%;
    object-fit: cover;
  }
`;

const ProductStyling = styled.section`
  padding: 4rem 2rem;
  & .title {
    text-transform: uppercase;
    text-align: center;
    color: var(--silver-color);
    font-size: 1.8rem;
    margin-bottom: 2rem;
  }
  & .slider {
    width: 100%;
    & div {
      & img {
        width: 200px;
        height: 200px;
        margin: auto;
        object-fit: contain;
        @media only screen and (max-width: 425px) {
          width: 140px;
          height: 140px;
        }
      }
    }
  }
`;

const Banner = styled.section`
  padding: 4rem 2rem;
  background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.6699054621848739) 100%,
      rgba(33, 33, 33, 0.6446953781512605) 100%
    ),
    url("/img/printing/banner-images.jpg");
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
    padding: 2rem;

    margin: 0 auto;
    & > * {
      color: var(--silver-color);
    }
    & .para {
      max-width: 400px;
      text-align: center;
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
      max-width: 140px;
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
      & .para {
        margin-bottom: 5px;
      }
    }
  }
`;

export default PrintingScreen;
