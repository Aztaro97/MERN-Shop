import React from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Col, Image, Row, Space, Typography } from "antd";
import Button from "../../ButtonComponeent";
import { Link } from "react-router-dom";
const { Title, Paragraph } = Typography;

function PhotographyScreen() {
  const imageUrl =
    "https://images.unsplash.com/photo-1630575130374-8bc3f71a3e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
  return (
    <MainContainer>
      <Banner>
        <div className="content">
          <Title level={2}>The future of work !</Title>
          <Paragraph>
            Our team are creative, fresh-thinking graduates, fully vetted with
            solid writing experience. For great photos and videos
          </Paragraph>
          <Link to="/contact-us" className="link">
            get in touch now
          </Link>
        </div>
      </Banner>
      <GalleryContainer>
        <Row justify="center">
          <Col>
            <Title level={2} className="title">
              our gallery
            </Title>
          </Col>
        </Row>
        <Row gutter={[50, 20]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Image.PreviewGroup>
              <Row gutter={[5, 0]} align="center">
                <Col xs={{ span: 12 }}>
                  <Image
                    src={imageUrl}
                    alt=""
                    width="100%"
                    className="height-image"
                  />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    width="100%"
                    className="height-image"
                  />
                </Col>
              </Row>
            </Image.PreviewGroup>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Image.PreviewGroup>
              <Row gutter={[5, 0]}>
                <Col xs={{ span: 12 }}>
                  <Image src={imageUrl} alt="" width="100%" className="image" />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1588866054175-c8347662ec72?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80"
                    alt=""
                    width="100%"
                    className="image"
                  />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image src={imageUrl} alt="" width="100%" className="image" />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    width="100%"
                    className="image"
                  />
                </Col>
              </Row>
            </Image.PreviewGroup>
          </Col>
          <Col xs={{ span: 24 }}>
            <Image
              className="image-full"
              height="200px"
              width="100%"
              src={imageUrl}
              alt=""
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Image.PreviewGroup>
              <Row gutter={[5, 0]}>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://via.placeholder.com/200"
                    alt=""
                    width="100%"
                    className="image"
                  />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://via.placeholder.com/200"
                    alt=""
                    width="100%"
                    className="image"
                  />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://via.placeholder.com/200"
                    alt=""
                    width="100%"
                    className="image"
                  />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://via.placeholder.com/200"
                    alt=""
                    width="100%"
                    className="image"
                  />
                </Col>
              </Row>
            </Image.PreviewGroup>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Image.PreviewGroup>
              <Row gutter={[5, 0]} align="center">
                <Col xs={{ span: 12 }}>
                  <Image
                    src={imageUrl}
                    alt=""
                    width="100%"
                    className="height-image"
                  />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    width="100%"
                    className="height-image"
                  />
                </Col>
              </Row>
            </Image.PreviewGroup>
          </Col>
        </Row>
      </GalleryContainer>
      <ContactSection className="contact_section">
        <h4>Need creative support ?</h4>
        <Link to="/contact-us" className="_link">
          contact us
        </Link>
      </ContactSection>
    </MainContainer>
  );
}

const ContactSection = styled.section`
  background: linear-gradient(to bottom, #11111176 0%, #00000099 100%),
    url("https://images.unsplash.com/photo-1633114128814-11fac33f707b?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80");
  padding: 2rem;
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  height: 200px;
  & > * {
    color: #fff;
  }
  & ._link {
    display: inline-block;
    border-radius: 10px;
    color: var(--orange-color);
    background: #fff;
    text-decoration: none;
    padding: 5px 20px;
  }
  & h4 {
    font-weight: 700;
    font-size: 1.6rem;
    margin-bottom: 0;
  }
  @media only screen and (max-width: 600px) {
    & .button {
      font-size: 0.8rem;
    }
    & h4 {
      font-size: 1.2rem;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Banner = styled.div`
  background: linear-gradient(90deg, #000000bc 0%, #00000099 0%),
    url("/img/photography/bannerPhotography.png");
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
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    letter-spacing: 1px;
    max-width: 400px;
    & > * {
      color: var(--silver-color);
    }
    & .link {
      padding: 8px 2rem;
      text-decoration: none;
      text-transform: capitalize;
      background: transparent;
      letter-spacing: 1px;
      border: 1px solid var(--silver-color);
      transition: all 0.3s ease;
      text-align: center;
      border-radius: 5px;
      &:hover {
        background: var(--orange-color);
        border: 1px solid var(--orange-color);
        color: #fff;
      }
    }
  }
  @media screen and (max-width: 678px) {
    & .content {
      -moz-justify-content: end;
      -webkit-justify-content: end;
      -ms-justify-content: end;
      justify-content: end;
      padding-bottom: 20px;
      padding-left: 1rem;
    }
    height: 400px;
  }
`;

const GalleryContainer = styled.section`
  padding: 4rem 2rem;
  & .title {
    text-transform: uppercase;
    color: var(--white-color);
    margin-bottom: 2rem;
  }
  & .image {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  & .image-full {
    width: 100% !important;
    object-fit: cover;
  }
  & .height-image {
    width: 100% !important;
    height: 410px;
    object-fit: cover;
    @media only screen and (max-width: 768px) {
      height: 300px;
    }
    @media only screen and (max-width: 528px) {
      height: 200px;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export default PhotographyScreen;
