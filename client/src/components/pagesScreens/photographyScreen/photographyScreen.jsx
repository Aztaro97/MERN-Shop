import React from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Col, Image, Row, Space, Typography } from "antd";
import Button from "../../ButtonComponeent";
const { Title, Paragraph } = Typography;

function PhotographyScreen() {
  const imageUrl =
    "https://images.unsplash.com/photo-1630575130374-8bc3f71a3e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80";
  return (
    <MainContainer>
      <Banner>
        <div className="content">
          <Title level={2}>Blind</Title>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            cupiditate dolore 
          </Paragraph>
          <Button type="button" className="link">
            contact today
          </Button>
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
        <Button className="button">contact us</Button>
        <h4>Lorem ipsum dolor sit amet consectetur</h4>
      </ContactSection>
    </MainContainer>
  );
}

const ContactSection = styled.section`
  margin-bottom: 20px;
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
    min-width:120px;
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
`;

const Banner = styled.div`
  background: linear-gradient(
      90deg,
      #33333365 0%,
      rgba(2, 0, 36, 0) 0%
    ),
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
    max-width: 400px;
    & > * {
      color: #fff;
    }
    & .link {
      padding: 10px 0;
    }
  }
  @media screen and (max-width: 678px) {
    height: 300px;
  }
`;

const GalleryContainer = styled.div`
  padding: 40px 0;
  & .title {
    color: var(--orange-color);
    text-transform: capitalize;
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
  }
`;

export default PhotographyScreen;
