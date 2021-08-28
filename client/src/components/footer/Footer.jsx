import React, { useEffect } from "react";
import styled from "styled-components";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";
import { Link } from "react-router-dom";

function FooterScrren() {
  const currentPage = document.location.pathname;

  console.log(currentPage);

  return (
    <Footer currentPage={currentPage}>
      <Container>
        <Header>
          <p>Get connected with us on socials networks !</p>
          <Social>
            <a href="#/" className="link" target="_blank">
              <FaFacebook className="icon" />
            </a>
            <a href="#/" className="link" target="_blank">
              <FaTwitter className="icon" />
            </a>
            <a href="#/" className="link" target="_blank">
              <FaLinkedinIn className="icon" />
            </a>
            <a href="#/" className="link" target="_blank">
              <FaInstagram className="icon" />
            </a>
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
        <p className="copyright">
          Copyright &copy; 2021. <span>au79code.</span> All Rights Reserved{" "}
        </p>
      </Container>
    </Footer>
  );
}

const Footer = styled.footer`

  

  width: 100%;
  color: #fff;
  background: var(--dark-color);
  margin-top: 2rem;
  display: ${({ currentPage }) => (currentPage === "/" ? "none" : "block")}  };

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
  
  
`;

const Header = styled.div`
  color: #fff;
  padding: .8rem 0;
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

  & .link {
    text-decoration: none;
  color: #fff;
  transition: all 0.3s ease-in-out;
  padding: .4rem;
  & .icon {
    /* padding: .1rem; */
    font-size: 1.6rem;
  }
  &:hover {
    transform: translateY(-10px);
    color: #fff;
    opacity: 0.9;
  }
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
  color: #fff;
  display: block;
  font-size: 1rem;
  &:hover {
    opacity: 0.9;
    text-decoration: none;
    color: var(--orange-color);
  }
`;

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem 0;

  & .copyright {
    text-align: center;
    & span {
      font-weight: 700;
      text-transform: uppercase;
    }
  }
  & hr {
    margin-bottom: 1rem;
    height: 0.1px;
    border: none;
    outline: none;
    background-color:#ffffff58;
  }
`;

export default FooterScrren;
