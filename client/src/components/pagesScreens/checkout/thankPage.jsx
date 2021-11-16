import React from "react";
import styled from "styled-components";
import { useHistory, Link } from "react-router-dom";

import MainContainer from "../../MainContainer";

import { Col, Row } from "antd";

function ThankPage() {
  return (
    <MainContainer>
      <Row style={{ marginTop: 20 }}>
        <Col xs={{ span: 24 }} lg={{ span: 12 }}>
          <Container>
            <h1>thank you </h1>
            <p>Your order is confirmed</p>
            <p>
              You’ll receive a confirmation email with your order number
              shortly.
            </p>
            <Link to="/products" className="_btn">
              Continue Shopping
            </Link>
          </Container>
        </Col>
      </Row>
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 2rem;

  & h1 {
    color: var(--orange-color);
    text-transform: uppercase;
    font-size: 2rem;
  }
  & p {
    color: var(--silver-color);
    margin-bottom: 0;
  }
  & ._btn {
    background-color: var(--orange-color);
    color: #fff;
    text-decoration: none;
    padding: 5px 20px;
    margin-top: 10px;
    display: inline-block;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export default ThankPage;
