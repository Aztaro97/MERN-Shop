import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Alert, Col, Row } from "antd";
import InputComponents from "../../InputComponents";
import ButtonComponeent from "../../ButtonComponeent";
import { useFormik } from "formik";
import { Input } from "antd";
import { register } from "../../../flux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email is requis !!!";
    if (values.password.length < 6)
      errors.password = "Enter a password longer than 6 characters";
    if (values.password !== values.password2)
      errors.password2 = "Error Please Make sure your passwords match";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validate,
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(register(body));
    },
  });

  return (
    <Containber>
      <Form onSubmit={formik.handleSubmit}>
        <Row gutter={[10, 10]} justify="end">
          <Col xs={{ span: 24 }}>
            <Input
              type="email"
              name="email"
              id="email"
              placeholder={t("email_placeholder")}
              onChange={formik.handleChange}
              value={formik.values.email}
            />
          </Col>
          {formik.errors.email && (
            <Col xs={{ span: 24 }}>
              <Alert message={formik.errors.email} type="error" showIcon>
                {formik.errors.email}
              </Alert>
            </Col>
          )}
          <Col xs={{ span: 24 }}>
            <Input.Password
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
              type="password"
              name="password2"
              id="password2"
              onChange={formik.handleChange}
              value={formik.values.password2}
              placeholder={t("retype_placeholder")}
            />
          </Col>{" "}
          {formik.errors.password && (
            <Col xs={{ span: 24 }}>
              <Alert
                message={formik.errors.password}
                type="error"
                showIcon
                className="mb-1"
              />
            </Col>
          )}
          {formik.errors.password2 && (
            <Col xs={{ span: 24 }}>
              <Alert message={formik.errors.password2} type="error" showIcon />
            </Col>
          )}
          <Col xs={{ span: 24 }}>
            <ButtonComponeent type="submit">register</ButtonComponeent>
          </Col>
        </Row>
      </Form>
    </Containber>
  );
}

const Containber = styled.div`
  width: 500px;
  padding: 2rem;

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
const Form = styled.form`
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 2rem;
`;

// const Row = styled.div`
//   margin-bottom: 10px;
//   display: flex;
//   align-items: center;
//   justify-content: flex-end;
// `;

export default Register;
