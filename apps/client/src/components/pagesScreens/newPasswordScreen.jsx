import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import { Formik, useFormik } from "formik";
import { newPassword } from "../../flux/actions/userAction";
import MainContainer from "../MainContainer";
import ButtonComponeent from "../ButtonComponeent";
import InputComponents from "../InputComponents";
import { useTranslation } from "react-i18next";
import { Alert, Col, Row, Input } from "antd";

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
      const password = formik.values.password;
      dispatch(newPassword(token, password));
    },
  });

  const { userInfo } = useSelector((state) => state.userLogin);

  const history = useHistory();

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  return (
    <MainContainer>
      <Container>
        <FormStyling onSubmit={formik.handleSubmit}>
          <Row gutter={[10, 10]}>
            <Col xs={{ span: 24 }}>
              <h1>New Password</h1>
            </Col>
            <Col xs={{ span: 24 }}>
              <Input.Password
                required
                type="password"
                name="password"
                id="password"
                placeholder={t("password_placeholder")}
                onChange={formik.handleChange}
                value={formik.values.password}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <Input.Password
                required
                type="password"
                name="password2"
                id="password2"
                onChange={formik.handleChange}
                value={formik.values.password2}
                placeholder={t("retype_placeholder")}
              />
            </Col>
            {formik.errors.password && (
              <Col xs={{ span: 24 }}>
                <Alert message={formik.errors.password} type="error" showIcon />
              </Col>
            )}
            {formik.errors.password2 && (
              <Col xs={{ span: 24 }}>
                <Alert
                  message={formik.errors.password2}
                  type="error"
                  showIcon
                />
              </Col>
            )}
            <Col xs={{ span: 24 }}>
              <ButtonComponeent  type="submit">
                update
              </ButtonComponeent>
            </Col>
            <Col xs={{ span: 24 }}>
              <Link to="/auth" className="link">
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
  }
  & .input {
    margin-bottom: 1.5rem;
  }
  /* & .btn {
    width: 100%;
    padding: 8px 0;
    text-transform: capitalize;
    font-weight: 400;
    letter-spacing: 1px;
    &:hover {
      color: #fff;
    }
  } */
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
