import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainContainer from "../MainContainer";

import Button from "../ButtonComponeent";
import { resetPassword } from "../../flux/actions/userAction";
import { Col, Input, Row } from "antd";

const ResetPasswordPage = () => {
  const [email, setEmail] = useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(resetPassword(email));
    console.log(email);
  };

  return (
    <MainContainer>
      <Container>
        <FormStyling onSubmit={handleSubmit}>
          <Row gutter={[10, 10]}>
            <Col xs={{ span: 24 }}>
              <h1>Reset Password</h1>
            </Col>
            <Col xs={{ span: 24 }}>
              <Input
                required
                type="email"
                placeholder="EMAIL"
                className="input"
                // value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <Button className="submit_btn" type="submit">
                reset my password
              </Button>
            </Col>
            <Col xs={{ span: 24 }}>
              {" "}
              <Link to="auth" className="link">
                Go To Sign in
              </Link>
            </Col>
          </Row>
        </FormStyling>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  top: 40px;
`;

const FormStyling = styled.form`
  padding: 3rem 2rem;
  margin-top: 1rem;
  max-width: 500px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 0px 1px;

  & h1 {
    font-size: 2rem;
    text-align: center;
    font-weight: 700;
    color: var(--silver-color);
  }
  & .input {
    margin-bottom: 1rem;
    background: var(--black-color);
    border: none;
    padding: 1rem 0.5rem;
    color: var(--silver-color);
  }
  & .submit_btn {
    width: 100%;
    padding: 6px;
    &:hover {
      color: #fff;
    }
  }
  & .link {
    color: var(--silver-color);

    &:hover {
      color: var(--orange-color);
      text-decoration: none;
    }
  }
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

export default ResetPasswordPage;
