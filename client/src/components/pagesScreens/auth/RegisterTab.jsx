import React from "react";
import styled from "styled-components";
import InputComponents from "../../InputComponents";
import ButtonComponeent from "../../ButtonComponeent";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import axios from "axios";

function Register() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    onSubmit:async (values) => {
      const body = JSON.stringify(values, null, 2);
      console.log(body);
      const config = {
        headers: {
          "Content-Type": "application/json"
        }
      }
      axios.post("/api/users", body, config)
      .then(res => {
        console.log("sucees")
      })
      .catch(err => {
        console.log(err)
      } )

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
