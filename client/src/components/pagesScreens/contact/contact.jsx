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

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const {loading} = useSelector((state) => state.contactForm)

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
              <div className="row">
                <div className="col-12 col-md-6  col-lg-5 p-3 pl-5 order-12 order-md-1">
                  {/* <h3 className="secColor weight-500 mediumTitle">Visit us</h3>
              <p className="grayBlueColor weight-400 normalText">
                If you want to visit us <br /> talk about a project or <br />{" "}
                just have a coffee
              </p>
              <p className="grayBlueColor weight-500 mediumText mt-3">
                Near 41B Street
                <br /> Al Rashidiya - Dubai
              </p>
              <p className="grayBlueColor weight-500 mediumText mt-3 mb-0">
                +97142839983
              </p>
              <p className="grayBlueColor weight-500 mediumText ">+971504366696</p>
              <!-- follow us div  --> */}
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
                        href="https://api.whatsapp.com/send?phone=+971567957775"
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
                        rows="10"
                        placeholder="MESSAGE"
                        onChange={(e) => setMessage(e.target.value)}
                      ></textarea>
                      <button type="submit">send</button>
                    </form>
                  </div>
                </div>
                <div className="col-12 col-md-6  col-lg-7  order-1 order-md-12">
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
                </div>
              </div>
            </div>
          </section>
        </MainContainer>
      )}
    </>
  );
}

export default Contact;
