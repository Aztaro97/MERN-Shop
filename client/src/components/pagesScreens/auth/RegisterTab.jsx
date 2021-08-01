import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Alert } from "antd";
import InputComponents from "../../InputComponents";
import ButtonComponeent from "../../ButtonComponeent";
import { useFormik } from "formik";
import { register } from "../../../flux/actions/userAction";
import { successMessage, errorMessage } from "../../message";
import { useDispatch, useSelector } from "react-redux";

function Register() {
  const [errorPwd, setErrorPwd] = useState(false);

  const dispatch = useDispatch();


  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email est requis";
    if (values.password.length < 6) errors.password = "Enter a password longer than 6 characters";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validate,
    onSubmit: async (values) => {
      try {
        const body = JSON.stringify(values, null, 2);
      if (formik.values.password !== formik.values.password2) {
        setErrorPwd(true);
        console.log("errr");
      } else {
        dispatch(register(body));
        successMessage("Registration Successfull");
      }
        
      } catch (error) {
        console.log(error.err)
      }
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
            placeholder="EMAIL"
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
            placeholder="PASSWORD "
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Row>
        {formik.errors.password ? (
          <div style={{color: "#ff7875"}}>{formik.errors.password}</div>
        ) : null}
        <Row>
          <InputComponents
            type="password"
            name="password2"
            id="password2"
            onChange={formik.handleChange}
            value={formik.values.password2}
            placeholder="RETYPE PASSWORD"
          />
        </Row>
        {errorPwd ? (
          <Alert
            message="Error Please Make sure your passwords match"
            type="error"
            showIcon
          />
        ) : null}
        <Row>
          <ButtonComponeent type="submit">register</ButtonComponeent>
        </Row>
      </Form>
    </Containber>
  );
}

const Containber = styled.div`
  border: 01px solid #ddd;
  border-radius: 10px;
  padding: 3rem;
  width: 550px;

  @media only screen and (max-width: 651px) {
    width: auto;
    padding: 2rem;
  }
`;
const Form = styled.form``;

const Row = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export default Register;
