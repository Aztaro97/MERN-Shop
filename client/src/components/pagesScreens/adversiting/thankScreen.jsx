import React, { useEffect, useState } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useHistory, useLocation } from "react-router";
import styled from "styled-components";
import MainContainer from "../../MainContainer";

const ThankScreen = () => {
  const [name, setName] = useState("");
  const location = useLocation();

  const history = useHistory();

  useEffect(() => {
    // const data = location.state.data;
    if (!location.state) {
      history.push("/");
    }
    setName(location.state.data);
  }, [history, location]);
  return (
    <MainContainer>
      <Container>
        <HiOutlineBadgeCheck className="icon" />
        <h3 className="title">Thanks for registering Mr {name}!</h3>
        <p className="message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          minima nisi ut sit enim quasi molestias natus expedita quos id. Est
          dolorem quisquam qui consectetur ipsum iure magnam iste maxime.
        </p>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  height: calc(40vh);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 5rem 0;
  text-align: center;
  & .icon {
    font-size: 8rem;
    color: var(--orange-color);
  }
  & .title {
    letter-spacing: 1px;
  }
  & .message {
    padding: 0 3rem;
  }
`;

export default ThankScreen;
