import React, { useState } from "react";
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

import "./contact.css";
import { useDispatch, useSelector } from "react-redux";
import { sendContactFormMessage } from "../../../flux/actions/userAction";
import LoaderComponent from "../../loader";
import { Col, Row } from "antd";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { loading } = useSelector((state) => state.contactForm);

  const dispatch = useDispatch();

  const body = {
    name,
    email,
    message,
  };

  const handleSubmit = () => {
    dispatch(sendContactFormMessage(body));
  };
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <MainContainer>
          <section className="homeContact">
            <div className="container">
              <Row gutter={[10, 10]}>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  className=""
                >
                  <div className="followUs mt-4">
                    <h3 className="secColor weight-500 mediumTitle">
                      Follow us
                    </h3>
                    <div className="group">
                      {/* <!-- Repeating link  --> */}
                      {/* <a href="#/" className="btn media_link">
                    <FaTumblr className="icon" />
                  </a> */}
                      <a
                        href="https://api.whatsapp.com/send?phone=+971502022251"
                        className="btn media_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaWhatsapp className="icon" />
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a
                        href="https://www.instagram.com/au_79_code/"
                        className="btn media_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaInstagram className="icon" />
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a
                        href="https://twitter.com/79_code"
                        className="btn media_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaTwitter className="icon" />
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a
                        href="https://www.snapchat.com/add/au79code"
                        className="btn media_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaSnapchatGhost className="icon" />
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a
                        href="https://www.facebook.com/pages/category/Marketing-Agency/AU-79-CODE-103505425005079/"
                        className="btn media_link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FaFacebookF className="icon" />
                      </a>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h3 className="secColor weight-500 mediumTitle">
                      Contact US
                    </h3>
                    <p className="grayBlueColor weight-400 normalText">
                      You Have a question
                      <br /> a request for information, a project{" "}
                    </p>
                    {/* <a href="#/" className="btn sec-outline-btn">
                  WRITE US
                </a> */}
                    <form className="form_contact" onSubmit={handleSubmit}>
                      <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="FULL NAME"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                      <input
                        type="mail"
                        name="email"
                        id="email"
                        placeholder="EMAIL"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <textarea
                        name="message"
                        id=""
                        cols="30"
                        rows="5"
                        placeholder="MESSAGE"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <button type="submit">send</button>
                    </form>
                  </div>
                </Col>
                <Col
                  xs={{ span: 24 }}
                  sm={{ span: 24 }}
                  md={{ span: 12 }}
                  lg={{ span: 12 }}
                  className=""
                >
                  {/* <!-- link for going to external map  --> */}

                  <a
                    className="mapContent"
                    href="https://goo.gl/maps/YApX2Y5EJPLkzmgA6"
                    target="_blank"
                    alt=""
                    rel="noreferrer"
                  >
                    {/* <img className="mapImg" src="./img/map.png" /> */}
                    <iframe
                      title="AU79CODE Location"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.432955814597!2d55.385108200000005!3d25.229632700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sae!4v1629292534309!5m2!1sen!2sae"
                      width="600"
                      height="450"
                      allowfullscreen=""
                      loading="lazy"
                    ></iframe>
                    <div className="corners">
                      <div className="corner"></div>
                      <div className="corner"></div>
                    </div>
                  </a>
                </Col>
              </Row>
            </div>
          </section>
        </MainContainer>
      )}
    </>
  );
}

export default Contact;
