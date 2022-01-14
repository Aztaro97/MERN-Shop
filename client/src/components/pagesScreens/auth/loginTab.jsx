import React from "react";
import styled from "styled-components";
import ButtonComponeent from "../../ButtonComponeent";
import { Link } from "react-router-dom";
import { Col, Input, Row } from "antd";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";
import { login } from "../../../flux/actions/userAction";

function LoginForm() {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(login(body));
      formik.setFieldValue("password", "");
    },
  });

  return (
    <Containber>
      <Form onSubmit={formik.handleSubmit}>
        <Row gutter={[10, 20]} justify="space-between">
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
          <Col xs={{ span: 24 }}>
            {" "}
            <Input.Password
              type="password"
              name="password"
              id="password"
              placeholder={t("password_placeholder")}
              onChange={formik.handleChange}
              value={formik.values.password}
            />
          </Col>
          <Col>
            <LinkStyling to="/forgot-password">
              {t("forget_password")}
            </LinkStyling>
          </Col>
          <Col>
            <ButtonComponeent className="login_btn" type="submit">
              {t("login")}
            </ButtonComponeent>
          </Col>
        </Row>
      </Form>
    </Containber>
  );
}

const Containber = styled.div`
  width: 500px;
  padding: 1rem;

  & .login_btn {
    @media only screen and (max-width: 768px) {
      padding: 5px 30px;
      height: 100%;
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
const Form = styled.form`
  border: 1px solid var(--silver-color);
  border-radius: 10px;
  padding: 2rem;
`;

const LinkStyling = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  color: var(--silver-color);
  font-size: 1rem;
  font-weight: 400;

  &:hover {
    color: var(--orange-color);
    text-decoration: none;
  }
`;

export default LoginForm;
