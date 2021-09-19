import React, { useState } from "react";

import { Steps, Button, message } from "antd";

import Register from "./partnerRegisterTemplate2";
import styled from "styled-components";
import { ImProfile } from "react-icons/im";

const { Step } = Steps;

const steps = [
  {
    title: "Account",
    content: <Register />,
    icon: <ImProfile />
  },
  {
    title: "Billing",
    content: "Second-content",
    icon: <ImProfile />
  },
  {
    title: "Last",
    content: "Last-content",
  },
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
        <div>
          <h3>Joing with us</h3>
          <h4>register information</h4>
        </div>
        <Steps current={current}>
          {steps.map((item) => (
            <Step key={item.title} title={item.title} icon={item.icon} />
          ))}
        </Steps>
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
  padding: 4rem;
  margin: 7rem auto 0;

  & h3,
  h4 {
    color: #fff;
    text-transform: capitalize;
  }
`;

export default StepsScreen;
