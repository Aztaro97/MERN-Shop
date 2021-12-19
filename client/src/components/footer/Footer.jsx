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
  FaSnapchatSquare,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { Col, Collapse, Row } from "antd";
import { useTranslation } from "react-i18next";
import { GrEdit } from "react-icons/gr";
import { BsInstagram, BsTwitter } from "react-icons/bs";
import { SiGooglemaps } from "react-icons/si";
import { BiEnvelope } from "react-icons/bi";

const { Panel } = Collapse;

function FooterScrren() {
  const currentPage = document.location.pathname;

  const { t } = useTranslation();

  console.log(currentPage);

  return (
    // <Footer currentPage={currentPage}>
    //   <section>
    //     <div style={{ width: "100%" }}>
    //       <Row style={{ width: "100%" }} gutter={[0, 20]}>
    //         <Col
    //           xs={{ span: 24 }}
    //           sm={{ span: 24 }}
    //           md={{ span: 12 }}
    //           lg={{ span: 12 }}
    //         >
    //           <h3 className="title"> {t("footer.to_visite_us")} </h3>
    //           <p className="para">
    //             {t("footer.desc_1")} <br /> {t("footer.desc_2")} <br />{" "}
    //             {t("footer.desc_3")}
    //           </p>
    //           <p className="para">
    //             {t("footer.street")}
    //             <br /> {t("footer.address")}
    //           </p>
    //           <a href="tel:+97142839983" className="para phoneNumer">
    //             0097142839983
    //           </a>{" "}
    //           <br />
    //           <a href="tel:+971502022251" className="para phoneNumer ">
    //             00971502022251
    //           </a>
    //           <div className="follow mt-4">
    //             <h3 className="title">{t("footer.follow")}</h3>
    //             <div className="group">
    //               <a
    //                 href="https://api.whatsapp.com/send?phone=+971502022251"
    //                 className="media_link"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaWhatsapp className="icon" />
    //               </a>
    //               <a
    //                 href="https://www.instagram.com/au_79_code/"
    //                 className="media_link"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaInstagram className="icon" />
    //               </a>
    //               <a
    //                 href="https://twitter.com/79_code"
    //                 className="media_link"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaTwitter className="icon" />
    //               </a>
    //               <a
    //                 href="https://www.snapchat.com/add/au79code"
    //                 className="media_link"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaSnapchatGhost className="icon" />
    //               </a>
    //               <a
    //                 href="https://www.facebook.com/pages/category/Marketing-Agency/AU-79-CODE-103505425005079/"
    //                 className="media_link"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 <FaFacebookF className="icon" />
    //               </a>
    //             </div>
    //           </div>
    //           <div className="mt-4">
    //             <h3 className="title">{t("footer.contact_us")}</h3>
    //             <p className="para">
    //               {t("footer.question")}
    //               <br /> {t("footer.request")}{" "}
    //             </p>
    //             <Link to="/contact-us" className="write_us">
    //               <GrEdit className="icon"/> {t("footer.write")}
    //             </Link>
    //           </div>
    //         </Col>
    //         <Col
    //           xs={{ span: 24 }}
    //           sm={{ span: 24 }}
    //           md={{ span: 12 }}
    //           lg={{ span: 12 }}
    //         >
    //           <div className="mapContainer">
    //             <a
    //               href="https://goo.gl/maps/eKtFdn7NEEZSxoty8"
    //               target="_blank"
    //               rel="noreferrer"
    //             >
    //               <iframe
    //                 title="AU79CODE Location"
    //                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.432955814597!2d55.385108200000005!3d25.229632700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sae!4v1629292534309!5m2!1sen!2sae"
    //                 allowfullscreen=""
    //                 loading="lazy"
    //               ></iframe>
    //             </a>
    //           </div>
    //         </Col>
    //       </Row>
    //     </div>
    //     <hr />
    //     <div className="bottom-footer">
    //       <div className="contract-link">
    //         <Link to="/terms" className="link">
    //           {" "}
    //           {t("footer.terms")}
    //         </Link>
    //         <Link to="/private-policy" className="link">
    //           {" "}
    //           {t("footer.privacy")}
    //         </Link>
    //       </div>
    //       <p className="copyRights">AU79CODE &copy; All rights reserved</p>
    //     </div>
    //   </section>
    // </Footer>
    <FooterContainer>
      <div className="footer-row">
        <div className="collumn">
          {/* <h3 className="footer-heading">
            <Link className="link">advertising</Link>
          </h3>
          <h3 className="footer-heading">
            <Link className="link">ecommerce</Link>
          </h3> */}
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-group">
            <li className="footer-item">
              <Link to="/" className="link">
                Design
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                Photography
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                Printing Press
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                Exhibition Management
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                Programming
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                Marketing
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                Production
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                POS
              </Link>
            </li>
          </ul>
        </div>
        <div className="collumn">
          <h3 className="footer-heading">Contact us</h3>
          <ul className="footer-group">
            <li className="footer-item">
              <Link to="/" className="link">
                <FaMapMarkerAlt /> Google Maps
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                <FaPhoneAlt /> +971 55 555478
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                <FaPhoneAlt /> +971 55 555478
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                <BiEnvelope /> au79code.info@gmail.com
              </Link>
            </li>
          </ul>
        </div>
        <div className="collumn">
          <h3 className="footer-heading">au79code</h3>
          <ul className="footer-group">
            <li className="footer-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                About us
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/private-policy" className="link">
                privacy policy
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/" className="link">
                term & conditions
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <div className="follow-us">
            <ul>
              <li>
                <Link to="/" className="link">
                  <FaFacebookF className="icon" />
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  <BsTwitter className="icon" />
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  <BsInstagram className="icon" />
                </Link>
              </li>
              <li>
                <Link to="/" className="link">
                  <FaSnapchatSquare className="icon" />
                </Link>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
      <hr />
      <Row>
        <Col xs={{ span: 24 }} lg={{ span: 24 }}>
          <p>Copyright @ au79code.com 2021, All Rights Reserved.</p>
        </Col>
      </Row>
    </FooterContainer>
  );
}

const Footer = styled.footer`
  position: absolute;
  width: 100%;
  color: #fff;
  background: var(--dark-color);
  padding: 0 1rem;
  /* padding-bottom: 5rem; */
  & section {
    max-width: var(--max-width);
    margin: 0 auto;
    padding: 20px 0;
  }
  & .title {
    color: var(--orange-color);
    font-size: 1.4rem;
  }
  & .para {
    color: var(--gray-color);
    font-size: 1rem;
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
    display: inline-block;
    background: var(--gray-color);
    border-radius: 10px;
    color: #333;
    padding: 7px 20px !important;
    transition: all 0.3 ease-in-out;
    font-weight: 700;
    letter-spacing: 1px;
    text-decoration: none;
    transition: all 0.3 s ease-in-out;
    &:hover {
      background: var(--orange-color);
      color: #333;
    }
    & .icon {
      color: #fff;
    }
  }
  & .phoneNumer:hover {
    text-decoration: none !important;
    color: var(--orange-color) !important;
  }

  & .bottom-footer {
    display: flex;
    align-items: end;
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
    }
    & .contract-link .link:hover {
      color: var(--orange-color);
      text-decoration: none;
    }
    & .copyRights {
      margin-bottom: 0;
    }
    @media only screen and (max-width: 768px) {
      margin-top: 0px;
      margin-bottom: 20;
      & .contract-link .link {
        display: block;
      }
    }
  }

  & .follow .group {
    /* display: flex; */
    flex-wrap: wrap;
    & .media_link {
      margin: 3px;
    }
  }

  & .mapContainer {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    @media only screen and (max-width: 768px) {
      display: none;
    }
    & a {
      transform: rotate(-45deg);
      transition: all 700ms ease;

      & iframe {
        width: 200px;
        height: 200px;
        border: 2px solid var(--orange-color);
        @media only screen and (max-width: 768px) {
          width: 150px;
          height: 150px;
        }
      }
      &:hover {
        transform: rotate(0deg);
      }
    }
  }
`;

const FooterContainer = styled.footer`
  max-width: var(--max-width);
  margin: 0 auto;
  background: radial-gradient(
      circle,
      rgba(41, 41, 41, 0.863) 0%,
      rgba(0, 0, 0, 0.753) 0%
    ),
    url("/img/footer/footer.jpg");
  background-size: cover;
  background-position: center;
  padding: 20px;
  color: #fff;

  & .footer-row {
    /* padding: 20px 0; */
    /* margin:auto; */
    display: flex;
    justify-content: space-around;
    & .collumn {
      /* padding: 10px; */
    }

    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
  }

  & .footer-group {
    display: flex;
    flex-direction: column;
    list-style: none;
    padding-left: 4px;
    & .footer-item {
      & .link {
        color: #c8d6e5;
        text-decoration: none;
        text-transform: capitalize;
        margin-bottom: 0;
        &:hover {
          color: var(--orange-color);
          transform: translateY(-3px);
          transition: color 0.2s ease-in;
        }
      }
    }
  }

  & .footer-heading {
    font-size: 1.5rem;
    text-transform: capitalize;
    color: #fff;
    font-weight: 700;
    letter-spacing: 1px;
    & .link {
      color: #efefef;
      text-decoration: none;
    }
  }

  & .follow-us {
    text-align: center;
    margin: auto;
    display: flex;
    justify-content: center;
    & ul {
      display: flex;
      list-style: none;
      & li {
        margin: 0 10px;
        & .link {
          color: #fff;
          font-size: 1.3rem;
          padding: 0px;
          transition: all 0.5s ease-in-out;
          &:hover {
            & .icon {
              transform: scale(1.3) !important;
              transition: all 0.3s ease-in-out;
            }
          }
        }
      }
    }
  }
`;

export default FooterScrren;
