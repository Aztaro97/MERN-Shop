import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Alert } from "antd";
import InputComponents from "../../InputComponents";
import ButtonComponeent from "../../ButtonComponeent";
import { useFormik } from "formik";
import { register } from "../../../flux/actions/userAction";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

function Register() {
  const { t } = useTranslation();

  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email est requis";
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
        <Row>
          <InputComponents
            type="email"
            name="email"
            id="email"
            placeholder={t("email_placeholder")}
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Row>
        {formik.errors.email ? (
          <div className="alert_danger">{formik.errors.email}</div>
        ) : null}
        <Row>
          <InputComponents
            type="password"
            name="password"
            id="password"
            placeholder={t("password_placeholder")}
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Row>

        <Row>
          <InputComponents
            type="password"
            name="password2"
            id="password2"
            onChange={formik.handleChange}
            value={formik.values.password2}
            placeholder={t("retype_placeholder")}
          />
        </Row>
        {formik.errors.password ? (
          <Alert
            message={formik.errors.password}
            type="error"
            showIcon
            className="mb-1"
          />
        ) : null}
        {formik.errors.password2 ? (
          <Alert message={formik.errors.password2} type="error" showIcon />
        ) : null}

        <Row>
          <ButtonComponeent type="submit">register</ButtonComponeent>
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

const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default Register;
