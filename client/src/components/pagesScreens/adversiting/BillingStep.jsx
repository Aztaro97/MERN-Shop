import { Radio, Space } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import PaymentContainer from "./checkout/paymentContainer";

const BillingStep = () => {
  return (
    <Container>
      <h2>Payment</h2>
      <p>All transactions are secure and encrypted.</p>
      <PaymentContainer />
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 12rem auto 0;
  background-color: #ecececec;
  padding: 3rem;
  position: relative;
  bottom: 5rem;

  .border {
    border: 3px solid var(--background-color);
    padding: 1rem 1rem;
    border-radius: 10px;
    margin-bottom: 2rem;
    background: #fff;
  }
`;

const RadioB = styled(Radio)`
  padding-left: 1rem;
  color: var(--silver-color);

  & span:nth-child(2) {
    /* color: var(--orange-color); */
    font-weight: 700;
  }

  & .ant-radio {
    & .ant-radio-inner {
      border-color: var(--orange-color);
      width: 1.4rem;
      height: 1.4rem;
      border: 1px solid var(--orange-color);

      &:after {
        background-color: var(--orange-color);
        width: 0.9rem;
        height: 0.9rem;
      }
    }
  }

  & .ant-space {
    gap: 0;

    & .ant-radio-checked {
      border-color: var(--orange-color);
    }
  }
`;

export default BillingStep;
