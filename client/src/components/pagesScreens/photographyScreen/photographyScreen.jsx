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
        <Row gutter={[40, 20]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Space size={[5, 3]} wrap={false} align="center">
              <Image
                src={imageUrl}
                alt=""
                style={{ height: "100% !important" }}
              />
              <Image src={imageUrl} alt="" />
            </Space>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 12 }}
          >
            <Row gutter={[5, 5]}>
              <Col xs={{ span: 12 }}>
                <Image src={imageUrl} alt="" />
              </Col>
              <Col xs={{ span: 12 }}>
                <Image src={imageUrl} alt="" />
              </Col>
              <Col xs={{ span: 12 }}>
                <Image src={imageUrl} alt="" />
              </Col>
              <Col xs={{ span: 12 }}>
                <Image src={imageUrl} alt="" />
              </Col>
            </Row>
          </Col>
          <Col xs={{ span: 24 }}>
            <img
              src={imageUrl}
              alt=""
              style={{ width: "100% !important", height: "200px" }}
            />
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
  padding: 20px 0;
  & .title {
    color: var(--orange-color);
    text-transform: capitalize;
  }
  & .img {
    width: 100%;
    height: 100%;
  }
`;

export default PhotographyScreen;
