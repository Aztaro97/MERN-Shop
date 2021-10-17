import React, { useEffect } from "react";
import { FaRegCheckCircle } from "react-icons/fa";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { clearCardAd } from "../../../flux/actions/advertisingAction/advertisingAction";
import MainContainer from "../../MainContainer";

const ThankScreen = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const { service } = useSelector((state) => state.advertising);

  useEffect(() => {
    if (!service.fullName) {
      history.push("/");
    }
  }, [history, service]);
  return (
    <MainContainer>
      <Container>
        <HiOutlineBadgeCheck className="icon" />
        <h3 className="title">Thanks for registering Mr {service.fullName}!</h3>
        <p className="message">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis
          minima nisi ut sit enim quasi molestias natus expedita quos id. Est
          dolorem quisquam qui consectetur ipsum iure magnam iste maxime.
        </p>
        <LinkStyling to="/" onClick={() => dispatch(clearCardAd())}>
          continue to home
        </LinkStyling>
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

const LinkStyling = styled(Link)`
  color: #fff;
  background: var(--orange-color);
  padding: 5px 2rem;
  text-transform: capitalize;
  &:hover {
    text-decoration: none;
    color: #fff;
    opacity: 0.9;
  }
`;

export default ThankScreen;
