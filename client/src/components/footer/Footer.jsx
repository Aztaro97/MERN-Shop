import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaSnapchatSquare,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { FooterContainer } from "./footerStyling";

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
                <FaMapMarkerAlt /> Al Rashidya, Dubai
              </a>
            </li>
            <li className="footer-item">
              <a href="tel:+971524655728" className="link">
                <FaPhoneAlt /> +971 53 0000 000
              </a>
            </li>
            <li className="footer-item">
              <a href="tel:+971524655728" className="link">
                <FaPhoneAlt /> +971 52 0000 000
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
          <h3 className="footer-heading">E-Shop</h3>
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
            Copyright @ aztaro97.com 2021, All Rights Reserved.
          </p>
        </Col>
      </Row>
    </FooterContainer>
  );
}

export default FooterScrren;
