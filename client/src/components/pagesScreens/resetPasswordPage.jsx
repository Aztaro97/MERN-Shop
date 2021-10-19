import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import MainContainer from "../MainContainer";

import Input from "../InputComponents";
import Button from "../ButtonComponeent";
import { resetPassword } from "../../flux/actions/userAction";

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
          <h1>Reset Password</h1>
          <Input
            required
            className="input"
            type="email"
            placeholder="EMAIL"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button className="submit_btn" type="submit">
            reset my password
          </Button>
          <Link to="auth" className="link">
            Go To Sign in
          </Link>
        </FormStyling>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
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
  }
  & .input {
    margin-bottom: 1.5rem;
  }
  & .submit_btn {
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 10px;
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
