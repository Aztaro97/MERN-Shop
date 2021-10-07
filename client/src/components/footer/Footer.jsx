import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaWhatsapp,
  FaTumblr,
  FaSnapchatGhost,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

import "./footer.css";
import MapImg from "../../img/pictures/map.png";
import { Col, Row } from "antd";

function FooterScrren() {
  const currentPage = document.location.pathname;

  console.log(currentPage);

  return (
    <Footer currentPage={currentPage}>
      {/* <!-- contact us section  --> */}
      <section>
        <div style={{ width: "100%" }} className="homeContact page ">
          {/* <!-- <div className="homeTitle">
                    <h2 className="largeTitle text-uppercase weight-600 primaryColor">Contact Us</h2>
                </div> --> */}
          <Row style={{ width: "100%" }}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <h3 className="secColor weight-500 mediumTitle">To visit us</h3>
              <p className="grayBlueColor weight-400 normalText">
                If you want to visit us <br /> talk about a project or <br />{" "}
                just have a coffee
              </p>
              <p className="grayBlueColor weight-500 mediumText mt-3 mb-2">
                Near 41B Street
                <br /> Al Rashidiya - Dubai
              </p>
              <a
                href="tel:+97142839983"
                className="grayBlueColor weight-500 mediumText mt-3 mb-0 phoneNumer"
              >
                +97142839983
              </a>{" "}
              <br />
              <a
                href="tel:+971502022251"
                className="grayBlueColor weight-500 mediumText phoneNumer "
              >
                +971502022251
              </a>
              {/* <!-- follow us div  --> */}
              <div className="followUs mt-4">
                <h3 className="secColor weight-500 mediumTitle">Follow us</h3>
                <div className="group">
                  {/* <!-- Repeating link  --> */}
                  {/* <a href="" className="btn media_link">
                    <FaTumblr className="icon" />
                  </a> */}
                  {/* <!-- Repeating link  --> */}
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
                <h3 className="secColor weight-500 mediumTitle">Contact US</h3>
                <p className="grayBlueColor weight-400 normalText">
                  You Have a question
                  <br /> a request for information, a project{" "}
                </p>
                <a href="/contact-us" className="btn sec-outline-btn">
                  WRITE US
                </a>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              {/* <!-- link for going to external map  --> */}
              <a
                className="mapContent"
                href="https://goo.gl/maps/eKtFdn7NEEZSxoty8"
                target="_blank"
                rel="noreferrer"
              >
                {/* <!-- png square img  (preferred 737 * 737 px) --> */}
                {/* <img className="mapImg" src={MapImg} alt="" /> */}
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
        <div className="bottom-footer">
          <div className="contract-link">
            <a href="/terms">Terms</a>
            <a href="/private-policy">Privacy policy</a>
          </div>
          <div className="copyRights">AU79CODE &copy; All rights reserved</div>
        </div>
      </section>
    </Footer>
  );
}

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  color: #fff;
  background: var(--dark-color);
  /* margin-top: 2rem; */
  /* display: ${({ currentPage }) =>
    currentPage === "/" ? "none" : "block"}  }; */

  & h4 {
    text-align: center;
    padding-bottom: 1rem;
    color: #fff;
    letter-spacing: 1px;
  }
  & h4 span {
    color: #fff;
    font-weight: 700;
    text-transform: uppercase;
  }

  & .media_link {
    & .icon {
      color: #111;
      background: #93a3b3;
      padding: 4px;
      font-size: 2rem;
      transition: all 0.3s ease-in-out;
      &:hover {
        background: #fff;
        transform: scale(1.3);
      }
    }
  }

  @media only screen and (max-width: 1040px) {
    padding: 0 2rem;
  }
`;

export default FooterScrren;
