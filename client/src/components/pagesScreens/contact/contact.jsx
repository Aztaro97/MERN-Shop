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

// import "./contact.css";
import { useDispatch, useSelector } from "react-redux";
import { sendContactFormMessage } from "../../../flux/actions/userAction";
import LoaderComponent from "../../loader";
import Input from "../../InputComponents";
import TextArea from "../../TextAreaComponent";
import Button from "../../ButtonComponeent";
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

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(sendContactFormMessage(body));
  };
  return (
    <>
      {loading && <LoaderComponent />}
      <MainContainer>
        <ContactContainer>
          <Row gutter={[40, 40]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <div className="followUs">
                <h3 className="title">Follow us</h3>
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
              <div>
                <h3 className="title">Contact US</h3>
                <p>
                  You Have a question
                  <br /> a request for information, a project{" "}
                </p>
                {/* <a href="#/" className="btn sec-outline-btn">
                  WRITE US
                </a> */}
                <form className="form_contact" onSubmit={handleSubmit}>
                  <Row gutter={[10, 10]}>
                    <Col xs={{ span: 24 }}>
                      <Input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="FULL NAME"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Col>
                    <Col xs={{ span: 24 }}>
                      <Input
                        type="mail"
                        name="email"
                        id="email"
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
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></TextArea>
                    </Col>
                  </Row>

                  <Button type="submit">send</Button>
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
        </ContactContainer>
      </MainContainer>
      }
    </>
  );
}

const ContactContainer = styled.section`
  background: rgba(236, 236, 236, 0.925);
  height: 100% !important;
  padding: 2rem;
  margin-top: 4rem;
  & .title {
    color: #111;
    font-weight: 500;
    margin-bottom: 4px;
  }
  .followUs {
    margin-bottom: 20px;
    & .media_link {
      color: #fff;
      background: var(--orange-color);
      transition: all 0.5s ease-in-out;
      padding: 4px;
      &:hover {
        transform: scale(1.2);
      }
      & .icon {
        font-size: 22px;
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
`;

export default Contact;
