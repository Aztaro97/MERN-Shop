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
import MapImg from "../../img/pictures/map.png"

function FooterScrren() {
  const currentPage = document.location.pathname;

  console.log(currentPage);

  return (
    <Footer currentPage={currentPage}>
      {/* <!-- contact us section  --> */}
      <section className="homeContact page ">
        <div className="container">
          {/* <!-- <div className="homeTitle">
                    <h2 className="largeTitle text-uppercase weight-600 primaryColor">Contact Us</h2>
                </div> --> */}
          <div className="row">
            <div className="col-12 col-md-6  col-lg-5 p-3 pl-5 order-12 order-md-1">
              <h3 className="secColor weight-500 mediumTitle">To visit us</h3>
              <p className="grayBlueColor weight-400 normalText">
                If you want to visit us <br /> talk about a project or <br />{" "}
                just have a coffee
              </p>
              <p className="grayBlueColor weight-500 mediumText mt-3 mb-2">
                Near 41B Street
                <br /> Al Rashidiya - Dubai
              </p>
              <a href="tel:+97142839983" className="grayBlueColor weight-500 mediumText mt-3 mb-0">
                +97142839983
              </a> <br />
              <a href="tel:+971504366696" className="grayBlueColor weight-500 mediumText ">
                +971504366696
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
                  <a href="https://api.whatsapp.com/send?phone=+971567957775" className="btn media_link" target="_blank" rel="noreferrer">
                    <FaWhatsapp className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="https://www.instagram.com/au_79_code/" className="btn media_link" target="_blank" rel="noreferrer">
                    <FaInstagram className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="https://twitter.com/79_code" className="btn media_link" target="_blank" rel="noreferrer">
                    <FaTwitter className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="https://www.snapchat.com/add/au79code" className="btn media_link" target="_blank" rel="noreferrer">
                    <FaSnapchatGhost className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="https://www.facebook.com/pages/category/Marketing-Agency/AU-79-CODE-103505425005079/" className="btn media_link" target="_blank" rel="noreferrer">
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
            </div>
            <div className="col-12 col-md-6  col-lg-7  order-1 order-md-12">
              {/* <!-- link for going to external map  --> */}
              <a className="mapContent" href="https://goo.gl/maps/eKtFdn7NEEZSxoty8" target="_blank"  rel="noreferrer" >
                {/* <!-- png square img  (preferred 737 * 737 px) --> */}
                <img className="mapImg" src={MapImg} alt="" />
                <div className="corners">
                  <div className="corner"></div>
                  <div className="corner"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="copyRights">AU79CODE &copy; All rights reserved</div>
    </Footer>
  );
}

const Footer = styled.footer`
position: absolute;
  width: 100%;
  color: #fff;
  background: var(--dark-color);
  /* margin-top: 2rem; */
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

  & .media_link {

    & .icon {
    color: #111;
    background: #93a3b3 ;
    padding: 4px;
    font-size: 2rem;
    transition: all .3s ease-in-out;
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
