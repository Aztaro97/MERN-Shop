import React, { useState, useRef } from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaTumblr,
  FaSnapchatGhost,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import MainContainer from "../../MainContainer";
import { Typography } from "antd";

import { useDispatch, useSelector } from "react-redux";
import { sendContactFormMessage } from "../../../flux/actions/userAction";
import LoaderComponent from "../../loader";
import Input from "../../InputComponents";
import TextArea from "../../TextAreaComponent";
import Button from "../../ButtonComponeent";
import { Col, Row } from "antd";
import { Link } from "react-router-dom";
import { SyncOutlined } from "@ant-design/icons";
import emailjs from "emailjs-com";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sended, setSended] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAIL_USER_ID_;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        userId
      );
      if (res.text) {
        setSended(true);
        setLoading(false);
        console.log(res);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <MainContainer>
        <ContactContainer>
          {sended ? (
            <div className="success_container">
              <img src="/img/contact/confirmationMessage.png" alt="" />
              <h1>Thank you ! Your Message has been sent !</h1>
              <Link to="/" className="link">
                Go Home
              </Link>
            </div>
          ) : (
            <Row gutter={[40, 40]}>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <div className="followUs">
                  <Typography.Title level={3} className="title">
                    Follow us
                  </Typography.Title>
                  <div className="lint_container">
                    <a
                      href="https://api.whatsapp.com/send?phone=+971502022251"
                      className="media_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaWhatsapp className="icon" />
                    </a>

                    <a
                      href="https://www.instagram.com/au_79_code/"
                      className="media_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaInstagram className="icon" />
                    </a>

                    <a
                      href="https://twitter.com/79_code"
                      className="media_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaTwitter className="icon" />
                    </a>

                    <a
                      href="https://www.snapchat.com/add/au79code"
                      className="media_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaSnapchatGhost className="icon" />
                    </a>

                    <a
                      href="https://www.facebook.com/pages/category/Marketing-Agency/AU-79-CODE-103505425005079/"
                      className="media_link"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <FaFacebookF className="icon" />
                    </a>
                  </div>
                </div>
                <div>
                  <Typography.Title level={3} className="title">
                    Contact US
                  </Typography.Title>
                  <p className="para">
                    You Have a question
                    <br /> a request for information, a project{" "}
                  </p>
                  {/* <a href="#/" className="btn sec-outline-btn">
                  WRITE US
                </a> */}
                  <form
                    ref={form}
                    className="form_contact"
                    onSubmit={handleSubmit}
                  >
                    <Row gutter={[10, 10]}>
                      <Col xs={{ span: 24 }}>
                        <Input
                          type="text"
                          name="user_name"
                          id="name"
                          value={name}
                          placeholder="FULL NAME"
                          onChange={(e) => setName(e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={{ span: 24 }}>
                        <Input
                          type="mail"
                          name="user_email"
                          id="email"
                          value={email}
                          placeholder="EMAIL"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </Col>
                      <Col xs={{ span: 24 }}>
                        <TextArea
                          style={{ width: "100%" }}
                          name="message"
                          id=""
                          cols="30"
                          rows="5"
                          placeholder="MESSAGE"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></TextArea>
                      </Col>
                    </Row>

                    <ButtonStyling type="submit">
                      {loading ? (
                        <>
                          <SyncOutlined spin />{" "}
                          <span style={{ paddingLeft: 4 }}> Sending...</span>
                        </>
                      ) : (
                        <span>send</span>
                      )}
                    </ButtonStyling>
                  </form>
                </div>
              </Col>
              <Col
                xs={{ span: 0 }}
                sm={{ span: 0 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
                className=""
              >
                <a
                  className="map"
                  href="https://goo.gl/maps/YApX2Y5EJPLkzmgA6"
                  target="_blank"
                  alt=""
                  rel="noreferrer"
                >
                  <iframe
                    title="AU79CODE Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.432955814597!2d55.385108200000005!3d25.229632700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sae!4v1629292534309!5m2!1sen!2sae"
                    // width="600"
                    // height="450"
                    allowfullscreen=""
                    loading="lazy"
                  ></iframe>
                </a>
              </Col>
            </Row>
          )}
        </ContactContainer>
      </MainContainer>
    </>
  );
}

const ButtonStyling = styled(Button)`
  letter-spacing: 1px;
  font-size: 1rem;
  font-weight: 400;
  padding: 5px 40px;
`;

const ContactContainer = styled.section`
  background: var(--black-color);
  height: 100% !important;
  padding: 4rem 2rem 6rem;
  /* margin-top: 4rem; */
  & .title {
    color: var(--white-color);
    font-weight: 500;
    margin-bottom: 7px;
    display: block;
    text-transform: capitalize;
  }
  & .para {
    color: var(--silver-color);
  }
  .followUs {
    margin-bottom: 20px;
    padding: 5px 0;
    & .lint_container {
      display: flex;
      height: 100%;
      & .media_link {
        color: #fff;
        /* background: var(--orange-color); */
        border: 1px solid var(--silver-color);
        transition: all 0.3s ease-in-out;
        padding: 7px;
        margin-right: 10px;
        &:hover {
          transform: scale(1.2);
        }
        & .icon {
          font-size: 22px;
        }
      }
    }
  }

  & .map {
    & iframe {
      width: 100%;
      height: 100%;
      border: 2px solid var(--orange-color);
    }
  }
  & .success_container {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
    & h1 {
      color: #333;
      font-size: 1.4rem;
      font-weight: 700;
      padding: 10px 0;
    }
    & img {
      width: 50%;
    }
    & .link {
      background: var(--orange-color);
      color: #fff;
      text-decoration: none;
      padding: 10px 20px;
    }
  }
  @media only screen and (max-width: 768px) {
    margin: 0;
  }
`;

export default Contact;
