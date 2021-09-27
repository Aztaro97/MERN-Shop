import React, { useState } from "react";

import { Steps, Button, message } from "antd";

import RegisterForm from "./partnerRegisterForm";
import BillingScreen from "./BillingStep"
import styled from "styled-components";
import { ImProfile } from "react-icons/im";

const { Step } = Steps;

const steps = [
  {
    title: "Account",
    content: <RegisterForm />,
    icon: <ImProfile />,
  },
  {
    title: "Billing",
    content: <BillingScreen />,
    icon: <ImProfile />,
  }
];

const StepsScreen = () => {
  const [current, setCurrent] = useState(0);

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <main>
      <LandingTop>
        <div className="container">
          <div>
            <h3>Joing with us</h3>
            <h4>register information</h4>
          </div>
          <Steps current={current}>
            {steps.map((item) => (
              <Step
                key={item.title}
                title={item.title}
                icon={item.icon}
                className="step_container"
              />
            ))}
          </Steps>
        </div>
      </LandingTop>
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </main>
  );
};

const LandingTop = styled.div`
  height: 400px;
  background-color: var(--orange-color);
  padding: 4rem 0;
  margin: 7rem auto 0;
  @media only screen and (max-width: 768px) {
    height: 300px;
  }

  & h3,
  h4 {
    color: #fff;
    text-transform: capitalize;
  }

  & .step_container {
    margin-top: 1rem;
    margin-bottom: 1rem;
    & .ant-steps-icon {
      color: var(--orange-color) !important;
      font-size: 1rem !important;
      background-color: #fff !important;
      padding: 7px;
      border-radius: 50%;
      /* height: 50px !important;
      width: 50px !important;
      line-height: 50px !important; */
      /* height: 500px !important; */
    }
    & .ant-steps-item-title {
      color: #fff !important;
    }
  }
`;

export default StepsScreen;
