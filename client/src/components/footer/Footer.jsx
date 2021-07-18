import React from "react";
import MainContainer from "../MainContainer";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <FooterContent>
      <MainContainer>
        <Header>
          <p>Get connected with us on socials networks !</p>
          <Social>
            <LinkM href="#">
              <FaFacebook className="icon" />
            </LinkM>
            <LinkM href="#">
              <FaTwitter className="icon" />
            </LinkM>
            <LinkM href="#">
              <FaLinkedinIn className="icon" />
            </LinkM>
            <LinkM href="#">
              <FaInstagram className="icon" />
            </LinkM>
          </Social>
        </Header>
        <hr />
        <Grid>
          <Col>
            <h1>Sitemap</h1>
            <LinkR to="/">Home</LinkR>
            <LinkR to="/shop">Shop</LinkR>
            <LinkR to="/contact">Contact</LinkR>
          </Col>
          <Col>
            <h1>Informations</h1>
            <LinkR to="/about">About</LinkR>
            <LinkR to="/shop">Shop</LinkR>
            {/* <LinkR to="/">Contact</LinkR> */}
          </Col>
          <Col>
            <h1>Your Account</h1>
            <LinkR to="/register">Register</LinkR>
            <LinkR to="/login">Login</LinkR>
            <LinkR to="/shopping">Shopping Details</LinkR>
          </Col>
        </Grid>
        <hr />
        <h4 style={{margin:0}}>
          Copyright &copy; 2021. <span>au79code.</span> All Rights Reserved{" "}
        </h4>
      </MainContainer>
    </FooterContent>
  );
}

const FooterContent = styled.footer`
  /* position:absolute;
    bottom:0; */
  width: 100%;
  background: var(--background-color);

  & h4 {
    text-align: center;
    padding-bottom: 1rem;
    color: #7f8c8d;
    letter-spacing: 1px;
  }
  & h4 span {
    /* color: #000; */
    font-weight: 700;
    text-transform: uppercase;
  }
  & hr {
    margin-bottom: 1rem;
    background: #777777;
    height: 0.1px;
    border: none;
    outline: none;
  }
`;

const Header = styled.div`
  color: #000;
  padding: 1.5rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & p {
    margin-bottom: 0;
    font-size: 1rem;
  }
`;

const Social = styled.div`
  display: flex;
  align-items: center;
`;
const LinkM = styled.a`
  text-decoration: none;
  color: #000;
  transition: all 0.3s ease-in-out;
  & .icon {
    margin-left: 1.3rem;
    font-size: 1.6rem;
  }
  &:hover {
    transform: scale(1.3);
    color: #000;
    opacity: 0.9;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 1.7rem;

  @media only screen and (max-width: 990px) {
    display: block;
  }
`;
const Col = styled.div`
  /* display:flex; 
     flex-direction: column; */

  & h1 {
    margin-bottom: 0.4rem;
    font-weight: 700;
    font-size: 1.3rem;
  }
  @media only screen and (max-width: 990px) {
    margin-bottom: 1rem;
  }
`;
const LinkR = styled(Link)`
  text-decoration: none;
  color: #7f8c8d;
  display: block;
  font-size: 1rem;
  &:hover {
    color: #000;
  }
`;

export default Footer;
