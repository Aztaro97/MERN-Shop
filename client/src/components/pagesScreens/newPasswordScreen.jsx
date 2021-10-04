import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams , useHistory} from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import { newPassword } from "../../flux/actions/userAction";
import MainContainer from "../MainContainer";
import ButtonComponeent from "../ButtonComponeent";
import InputComponents from "../InputComponents";
import { useTranslation } from "react-i18next";
import { Alert } from "antd";

const NewPasswordScreen = () => {
    const dispatch = useDispatch();
  const params = useParams();

  const token = params.token;

  const { t } = useTranslation();

  const validate = (values) => {
    const errors = {};
    if (values.password.length < 6)
      errors.password = "Enter a password longer than 6 characters";
    if (values.password !== values.password2)
      errors.password2 = "Error Please Make sure your passwords match";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      password: "",
      password2: "",
    },
    validate,
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      const password = body.password;
      dispatch(newPassword(token, password));
    },
  });

  const {userInfo} = useSelector((state => state.userLogin))

  const history = useHistory();

  useEffect(() => {
      if (userInfo) {
        history.push("/")
      }
  }, [history, userInfo])

  

  return (
    <MainContainer>
      <Container>
        <FormStyling onSubmit={formik.handleSubmit}>
          <h1>New Password</h1>
          <InputComponents
            className="mb-3"
            required
            type="password"
            name="password"
            id="password"
            placeholder={t("password_placeholder")}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
          <InputComponents
            className="mb-3"
            required
            type="password"
            name="password2"
            id="password2"
            onChange={formik.handleChange}
            value={formik.values.password2}
            placeholder={t("retype_placeholder")}
          />
          {formik.errors.password ? (
            <Alert
              message={formik.errors.password}
              type="error"
              showIcon
              className="mb-3"
            />
          ) : null}
          {formik.errors.password2 ? (
            <Alert
              message={formik.errors.password2}
              type="error"
              showIcon
              className="mb-3"
            />
          ) : null}
          <ButtonComponeent className="btn" type="submit">
            update
          </ButtonComponeent>
          <Link to="/auth" className="link">
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
  height: calc(70vh - 80px);
  
`;

const FormStyling = styled.form`
  padding: 3rem 2rem;
  margin-top: 1rem;
  width: 500px;
  /* border: 1px solid #ececec; */
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  & h1 {
    font-size: 2rem;
    text-align: center;
  }
  & .input {
    margin-bottom: 1.5rem;
  }
  & .btn {
    width: 100%;
    margin-bottom: 1.5rem;
    padding: 8px 0;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 1px;
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

export default NewPasswordScreen;
