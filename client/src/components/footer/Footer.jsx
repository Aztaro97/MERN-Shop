import React from "react";
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

// import "./footer.css";
import { Col, Row } from "antd";
import { useTranslation } from "react-i18next";

function FooterScrren() {
  const currentPage = document.location.pathname;

  const { t } = useTranslation();

  console.log(currentPage);

  return (
    <Footer currentPage={currentPage}>
      <section>
        <div style={{ width: "100%" }}>
          <Row style={{ width: "100%" }} gutter={[0, 20]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <h3 className="title"> {t("footer.to_visite_us")} </h3>
              <p className="para">
                {t("footer.desc_1")} <br /> {t("footer.desc_2")} <br />{" "}
                {t("footer.desc_3")}
              </p>
              <p className="para">
                {t("footer.street")}
                <br /> {t("footer.address")}
              </p>
              <a href="tel:+97142839983" className="para phoneNumer">
                0097142839983
              </a>{" "}
              <br />
              <a href="tel:+971502022251" className="para phoneNumer ">
                00971502022251
              </a>
              {/* <!-- follow us div  --> */}
              <div className="followUs mt-4">
                <h3 className="title">{t("footer.follow")}</h3>
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
                <h3 className="title">{t("footer.contact_us")}</h3>
                <p className="para">
                  {t("footer.question")}
                  <br /> {t("footer.request")}{" "}
                </p>
                <Link to="/contact-us" className="btn write_us">
                  {t("footer.write")}
                </Link>
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
                  // width="600"
                  // height="450"
                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
              </a>
            </Col>
          </Row>
        </div>
        <div className="bottom-footer">
          <div className="contract-link">
            <Link to="/terms" className="link">
              {" "}
              {t("footer.terms")}
            </Link>
            <Link to="/private-policy" className="link">
              {" "}
              {t("footer.privacy")}
            </Link>
          </div>
          <p className="copyRights">AU79CODE &copy; All rights reserved</p>
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
  padding: 20px;
  & section {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 20px 0;
  }
  & .title {
    color: var(--orange-color);
    font-size: 1.1rem;
  }
  & .para {
    color: var(--gray-color);
  }

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

  .write_us {
    border: 1px solid var(--gray-color);
    border-radius: 10px;
    color: var(--gray-color);
    width: 100%;
    max-width: 400px;
    transition: all 0.3 ease-in-out;
    &:hover {
      background: var(--orange-color);
      color: #fff;
    }
  }
  & .phoneNumer:hover {
    text-decoration: none !important;
    color: var(--orange-color) !important;
  }

  & .bottom-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #93a3b3;
    max-width: var(--max-width);
    margin: auto;
    margin-top: 20px;
    & .contract-link .link {
      text-decoration: none;
      color: #93a3b3;
      margin-right: 10px;
      text-transform: capitalize;
      font-size: 1rem;
      @media only screen and (max-width: 600px) {
        display: block;
      }
    }
    & .contract-link .link:hover {
      color: var(--orange-color);
      text-decoration: none;
    }
    & .copyRights {
      margin-bottom: 0;
    }
  }

  & .mapContent {
    width: 150px;
    height: 150px;
    margin-left: auto;
    margin-right: auto;
    & iframe {
      width: 100%;
      height: 100%;
    }
  }

  @media only screen and (max-width: 1040px) {
    padding: 0 2rem;
  }
`;

export default FooterScrren;
