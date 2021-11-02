import React from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Col, Image, Row, Space, Typography } from "antd";

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
            cupiditate dolore earum perferendis asperiores culpa id esse laborum
            quaerat
          </Paragraph>
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
                  <Image src={imageUrl} alt="" className="height-image" />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
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
                  <Image src={imageUrl} alt="" className="height-image" />
                </Col>
                <Col xs={{ span: 12 }}>
                  <Image
                    src="https://images.unsplash.com/photo-1544961371-516024f8e267?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=774&q=80"
                    alt=""
                    className="height-image"
                  />
                </Col>
              </Row>
            </Image.PreviewGroup>
          </Col>
        </Row>
      </GalleryContainer>
    </MainContainer>
  );
}

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
    height: 410px;
    object-fit: cover;
  }
`;

export default PhotographyScreen;
