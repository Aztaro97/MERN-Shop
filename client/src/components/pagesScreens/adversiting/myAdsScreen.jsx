import { Card, Col, Row } from "antd";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import MainContainer from "../../MainContainer";

const { Meta } = Card;

function MyAdsScreen() {
  const { userInfo } = useSelector((state) => state.userLogin);
  const history = useHistory();
  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
  }, [userInfo, history]);

  return (
    <MainContainer>
      <Container>
        <h1 className="title">My Ads</h1>
        <hr />
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <CardStyling bordered={true} style={{ width: 200 }} hoverable>
              <button className="btn_delete" href="#/">
                <MdDelete className="icon" />
              </button>
              <img
                width="100%"
                height="100%"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                alt=""
              />

              <p className="description">
                Cras ultricies ligula sed magna dictum porta.
              </p>
            </CardStyling>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <CardStyling bordered={true} style={{ width: 200 }} hoverable>
              <button className="btn_delete" href="#/">
                <MdDelete className="icon" />
              </button>
              <img
                width="100%"
                height="100%"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                alt=""
              />

              <p className="description">
                Cras ultricies ligula sed magna dictum porta.
              </p>
            </CardStyling>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <CardStyling bordered={true} style={{ width: 200 }} hoverable>
              <button className="btn_delete" href="#/">
                <MdDelete className="icon" />
              </button>
              <img
                width="100%"
                height="100%"
                src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                alt=""
              />

              <p className="description">
                Cras ultricies ligula sed magna dictum porta.
              </p>
            </CardStyling>
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  padding-top: 20px;
  & .title {
    text-align: center;
    color: var(--orange-color);
    margin: 0;
  }
  & hr {
    height: 4px;
    background-color: var(--orange-color);
    outline: none;
    width: 100px;
    margin:0 auto 20px;
  }
`;

const CardStyling = styled(Card)`
  & .btn_delete {
    border: none;
    outline: none;
    position: absolute;
    background: none;
    right: 10px;
    top: 8px;
    background-color: #e2e2e2;
    border-radius: 50%;
    padding: 4px;
    & .icon {
      font-size: 1.8rem;
      color: var(--orange-color);
    }
  }
  & .description {
    padding-top: 4px;
    margin: 0;
  }
`;

export default MyAdsScreen;
