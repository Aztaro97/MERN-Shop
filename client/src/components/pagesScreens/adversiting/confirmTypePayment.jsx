import { Col, Row } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import { clearCardAd } from "../../../flux/actions/advertisingAction/advertisingAction";
import MainContainer from "../../MainContainer";

function ConfirmTypePayment() {
  const location = useLocation();
  const body = location.state.data;

  const dispatch = useDispatch();
  return (
    <MainContainer>
      <Container>
        <h1 className="title">Choose your ad type </h1>
        <Row gutter={{ lg: 20, md: 10, sm: 10 }}>
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div className="_card">
              <h5 className="card_title premium">Premium</h5>
              <div className="card_body">
                <p className="price">
                  {" "}
                  start<span>aed 25</span>{" "}
                </p>
                <ul className="content">
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                </ul>
              </div>
              <div className="card_footer">
                <Link
                  type="submit"
                  className="btn premium"
                  to={{
                    pathname: "/advertising/cart",
                    state: {
                      data: body,
                    },
                  }}
                >
                  Start Now
                </Link>
              </div>
            </div>
          </Col>
          {/* <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div className="_card">
              <h5 className="card_title free">free</h5>
              <div className="card_body">
                <p className="price">
                  {" "}
                  start<span>aed 0</span>{" "}
                </p>
                <ul className="content">
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                </ul>
              </div>
              <div className="card_footer">
                <Link
                  type="submit"
                  className="btn free"
                  to={{
                    pathname: "/advertising/thank",
                    state: {
                      data: body,
                    },
                  }}
                >
                  Start Now
                </Link>
              </div>
            </div>
          </Col> */}
          <Col
            lg={{ span: 12 }}
            md={{ span: 12 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
          >
            <div className="_card">
              <h5 className="card_title free">free</h5>
              <div className="card_body">
                <p className="price">
                  {" "}
                  <span>aed 0</span>{" "}
                </p>
                <ul className="content">
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                  <li>Vivamus magna justo, lacinia eget consectetur</li>
                  <li>Vivamus magna justo, lacinia consectetur</li>
                </ul>
              </div>
              <div className="card_footer">
                <Link
                  type="submit"
                  className="btn free"
                  onClick={() => dispatch(clearCardAd())}
                  to={{
                    pathname: "/advertising/thank",
                    state: {
                      data: body,
                    },
                  }}
                >
                  Complete
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  margin: 4rem 0;
  padding: 20px 40px;
  & .title {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 2rem !important;
    color: var(--white-color);
  }
  & ._card {
    margin-bottom: 13px;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: transparent;
    background-clip: border-box;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
  & .card_title {
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    &.free {
      background: #808e9b;
    }
    &.premium {
      background: var(--orange-color);
    }
  }
  & .card_body {
    text-align: center;
    padding: 0 10px;
    background: transparent;
    & .price {
      color: var(--orange-color);
      margin: 1.3rem 0;
      font-weight: 700;
      font-size: 2rem;
      & span {
        font-size: 3rem;
        color: var(--silver-color);
        text-transform: uppercase;
        margin-left: 10px;
        font-weight: 700;
      }
    }
    & .content {
      list-style-type: none;
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 1rem;
      color: var(--silver-color);
    }
  }
  & .card_footer {
    margin: 2rem 0;
    text-align: center;
    & .btn {
      background: var(--orange-color);
      padding: 5px 40px;
      color: #fff;
      &:hover {
        opacity: 0.9;
      }
      &.free {
        background: #808e9b;
      }
      &.premium {
        background: var(--orange-color);
      }
    }
  }
`;

export default ConfirmTypePayment;
