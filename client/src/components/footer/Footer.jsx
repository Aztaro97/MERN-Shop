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
              <Link to="/#" className="link">
                Design
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                Photography
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                Printing Press
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                Exhibition Management
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                Programming
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                Marketing
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                Production
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/#" className="link">
                POS
              </Link>
            </li>
          </ul>
        </div>
        <div className="collumn">
          <h3 className="footer-heading">Contact us</h3>
          <ul className="footer-group">
            <li className="footer-item">
              <a
                href="https://goo.gl/maps/QaBPZq6wBvabyXYA9"
                className="link"
                target="_blank"
                rel="noreferrer"
              >
                <FaMapMarkerAlt /> Al Rashidya, 20b street, 21 villa
              </a>
            </li>
            <li className="footer-item">
              <a href="tel:+971524655728" className="link">
                <FaPhoneAlt /> +971 52 4655728
              </a>
            </li>
            <li className="footer-item">
              <a href="tel:+971524655728" className="link">
                <FaPhoneAlt /> +971 52 4655728
              </a>
            </li>
            <li className="footer-item">
              <a href="mailTo:aztaro97@gmail.com" className="link">
                <BiEnvelope /> aztaro97@gmail.com
              </a>
            </li>
          </ul>
        </div>
        <div className="collumn">
          <h3 className="footer-heading">Kassoua</h3>
          <ul className="footer-group">
            <li className="footer-item">
              <Link to="/" className="link">
                Home
              </Link>
            </li>

            <li className="footer-item">
              <Link to="/products" className="link">
                Shop
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/companies" className="link">
                Companies
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/contact-us" className="link">
                Contact us
              </Link>
            </li>


            <li className="footer-item">
              <Link to="/private-policy" className="link">
                Privacy Policy
              </Link>
            </li>
            <li className="footer-item">
              <Link to="/terms" className="link">
                Term & Conditions
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
          <p className="text_coypright">
            Copyright @ au79code.com 2021, All Rights Reserved.
          </p>
        </Col>
      </Row>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  margin: 0 auto;
  background: radial-gradient(
      circle,
      rgba(41, 41, 41, 0.863) 0%,
      rgba(0, 0, 0, 0.9) 0%
    ),
    url("/img/footer/footer.jpg");
  background-size: cover;
  background-position: center;
  padding: 2rem;
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
        /* text-transform: capitalize; */
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

  & .text_coypright {
    color: #fff;
  }

  @media only screen and (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export default FooterScrren;
