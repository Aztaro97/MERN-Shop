import React from "react";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaTumblr,
  FaSnapchatGhost,
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaChevronLeft,
  FaChevronRight
} from "react-icons/fa";

// import OwlCarousel from 'react-owl-carousel';
// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';

import "./css/style.css";
import "./css/bootstrap.min.css";
import "./css/owl.carousel.min.css";
import "./css/owl.theme.default.min.css";
import "./css/animate.min.css";

// import "./js/main"
// import "./js/jquery-3.5.1.slim.min.js"
// import "./js/bootstrap.min.js"
// import "./js/owl.carousel.min.js"
// import "./js/popper.min.js"

function HomeComponents() {
  return (
    <>
      <MainStyling>
        <div className="homePages">
          {/* <!-- points for change internal home pages  --> */}
          <div className="navDiv" id="navpoints">
            <a href="#/" className="active">
              <p className="mainColor  ">Home</p>
              <div className="point">
                <span></span>
              </div>
            </a>
            <a href="#/">
              <p className="mainColor  ">Services</p>
              <div className="point">
                <span></span>
              </div>
            </a>
            <a href="#/">
              <p className="mainColor  ">About US</p>
              <div className="point">
                <span></span>
              </div>
            </a>
            <a href="#/">
              <p className="mainColor  ">Contact US</p>
              <div className="point">
                <span></span>
              </div>
            </a>
          </div>

          {/* <!-- Next button  --> */}
          <div className="moveBtns">
            <a
              href="#/"
              id="prevButton"
              onClick="clickPrev()"
              className="nextBtn mainColor mediumText d-none d-md-none"
            >
              PREV
            </a>
            <a
              href="#/"
              id="nextButton"
              onClick="clickNext()"
              className="nextBtn mainColor mediumText"
            >
              NEXT
            </a>
          </div>
          {/* <!-- intro slider with catting imgs  static 3 imgs --> */}
          <section className="introSlider page">
            <div className="container">
              <div className="sliders">
                <div className="inner" id="introSliders" timer="6000">
                  {/* <!-- slider repeating for using programing language --> */}
                  {/* <!-- slider repeating  --> */}
                  <div className="slider active">
                    <img alt="" src="img/1.png" />
                    <div className="myImg"></div>
                    <div className="caption animate__animated">
                      <h2 className="largestTitle thirdColor">
                        <span className="weSpan">We</span>PROFESSIONAL
                      </h2>
                      <h3 className="largeTitle mainColor">
                        Technology, Digital Software and Applications Company
                      </h3>
                      <p className="grayColor normalText">
                        We believe that we succeed when our clients succeed
                        <br />
                        Which is why we never stop working on being better
                      </p>
                    </div>
                    {/* <!-- line shape is appearing when active slide  --> */}
                    <div className="arrow"></div>
                  </div>
                  {/* <!-- slider repeating  --> */}
                  <div className="slider">
                    <img alt="" src="img/2.png" />
                    <div className="myImg"> </div>
                    <div className="caption animate__animated ">
                      <h2 className="largestTitle thirdColor">
                        <span className="weSpan">We</span>GTREAT
                      </h2>
                      <h3 className="largeTitle mainColor">
                        Responsive & Strong Competitive People
                      </h3>
                      <p className="grayColor normalText">
                        Some hardworking People are Working Day and Night to
                        provide you highly scalable product
                      </p>
                    </div>
                    <div className="arrow"></div>
                  </div>
                  {/* <!-- slider repeating  --> */}
                  <div className="slider">
                    <img alt="" src="img/3.png" />
                    <div className="myImg"> </div>
                    <div className="caption animate__animated ">
                      <h2 className="largestTitle thirdColor">
                        <span className="weSpan">We</span>
                        <p className="grayColor normalText">Are More Than An</p>
                        Agency
                      </h2>
                      <h3 className="largeTitle">
                        ,Print, outdoor advertising & online, <br /> unique
                        designs, fresh ideas .. etc
                      </h3>
                    </div>
                    <div className="arrow"></div>
                  </div>
                </div>
                {/* <!-- clicking points equal slider number  --> */}
                {/* <div className="pagers" id="introSlidersPagers">
                  <div className="pager active">
                    <span></span>
                  </div>
                  <div className="pager">
                    <span></span>
                  </div>
                  <div className="pager">
                    <span></span>
                  </div>
                </div> */}
              </div>
            </div>
          </section>
          {/* <!-- services section   --> */}
          <section className="homeServices page ">
            <div className="container">
              <div className="homeTitle">
                <h2 className="largeTitle text-uppercase weight-600 whiteColor">
                  Services And Programs
                </h2>
              </div>
              {/* <!-- carousel for service items  --> */}
              <div
                id="servicesCarousel"
                className="carousel slide"
                data-ride="carousel"
                data-touch="true"
              >
                <div className="carousel-inner">
                  {/* <!--  repeating carousel item  --> */}
                  <div className="carousel-item active">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/myadd.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">01</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          Advertising
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/marketing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">02</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          Marketing
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/e-commerce.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">03</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          E-Commerce
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <a className="imgCover" href="pos.html">
                        <img alt="" src="./img/pos.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">04</div>
                      </a>
                      <a className="carousel-caption" href="pos.html">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          POS
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </a>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/printing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">05</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          Printing
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/photography.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">06</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          Photography
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/designing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">07</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          designing
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/delivery.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">08</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          delivery
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div className="carousel-item ">
                    <div className="minContent">
                      <div className="imgCover">
                        <img alt="" src="./img/programing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div className="carousalNumber">09</div>
                      </div>
                      <div className="carousel-caption">
                        <h3 className="mediumTitle secColor text-uppercase weight-500">
                          programing
                        </h3>
                        <p className="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                {/* // <!-- arrows for change carousel  --> */}
                <a
                  className="arrow carousel-control-prev"
                  href="#servicesCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span>
                    {/* <i className="fas fa-chevron-left"></i> */}
                    <FaChevronLeft  />
                  </span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="arrow carousel-control-next"
                  href="#servicesCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span>
                    {/* <i className="fas fa-chevron-right"></i>o */}
                    <FaChevronRight />

                  </span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
              {/* // <!-- <div className="noise"></div> --> */}
            </div>
          </section>
          {/* // <!-- About Us Section  --> */}
          <section className="homeAbout page">
            <div className="container">
              <div className="homeTitle">
                <h2 className="largeTitle text-uppercase weight-600 mainColor">
                  About US
                </h2>
              </div>

              <div className="container">
                {/* <!-- owl carousel  --> */}
                <div id="about-slider" className="owl-carousel">
                  {/* <!--  repeating carousel item  --> */}
                  <div className="slide">
                    <div className="inner">
                      {/* <!-- using two img (dark and white) --> */}
                      {/* <!-- dark img  --> */}
                      <img alt="" className="primryImg" src="./img/check.png" />
                      {/* <!-- white img  --> */}
                      <img alt="" className="secImg" src="./img/check2.png" />
                      <div className="slideText">
                        <h3 className="mediumTitle weight-500 secColor">
                          Profile3
                        </h3>
                        <p className="grayColor normalText weight-400">
                          We believe that we succeed when our clients succeed
                          <br />
                          Which is why we never stop working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  repeating carousel item  --> */}
                  <div className="slide">
                    <div className="inner">
                      <img alt="" className="primryImg" src="./img/profile.png" />
                      <img alt="" className="secImg" src="./img/profile2.png" />
                      <div className="slideText">
                        <h3 className="mediumTitle weight-500 secColor">
                          Profile1
                        </h3>
                        <p className="grayColor normalText weight-400">
                          We believe that we succeed when our clients succeed
                          <br />
                          Which is why we never stop working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  repeating carousel item  --> */}
                  <div className="slide">
                    <div className="inner">
                      <img alt="" className="primryImg" src="./img/help.png" />
                      <img alt="" className="secImg" src="./img/help2.png" />
                      <div className="slideText">
                        <h3 className="mediumTitle weight-500 secColor">
                          Profile2
                        </h3>
                        <p className="grayColor normalText weight-400">
                          We believe that we succeed when our clients succeed
                          <br />
                          Which is why we never stop working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* // <!-- contact us section  --> */}
          <section className="homeContact page ">
            <div className="container">
              {/* <!-- <div className="homeTitle">
                            <h2 className="largeTitle text-uppercase weight-600 primaryColor">Contact Us</h2>
                        </div> --> */}
              <div className="row">
                <div className="col-12 col-md-6  col-lg-5 p-3 pl-5 order-12 order-md-1">
                  <h3 className="secColor weight-500 mediumTitle">To visit us</h3>
                  <p className="grayBlueColor weight-400 normalText">
                    If you want to visit us <br /> talk about a project or{" "}
                    <br /> just have a coffee
                  </p>
                  <p className="grayBlueColor weight-500 mediumText mt-3">
                    Near 41B Street
                    <br /> Al Rashidiya - Dubai
                  </p>
                  <p className="grayBlueColor weight-500 mediumText mt-3 mb-0">
                    +97142839983
                  </p>
                  <p className="grayBlueColor weight-500 mediumText ">
                    +971504366696
                  </p>
                  {/* <!-- follow us div  --> */}
                  <div className="followUs mt-4">
                    <h3 className="secColor weight-500 mediumTitle">Follow us</h3>
                    <div className="group">
                      {/* <!-- Repeating link  --> */}
                  <a href="#/" className="btn media_link">
                    <FaTumblr className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="#/" className="btn media_link">
                    <FaWhatsapp className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="#/" className="btn media_link">
                    <FaInstagram className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="#/" className="btn media_link">
                    <FaTwitter className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="#/" className="btn media_link">
                    <FaSnapchatGhost className="icon" />
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a href="#/" className="btn media_link">
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
                    <a href="#/" className="btn sec-outline-btn">
                      WRITE US
                    </a>
                  </div>
                </div>
                <div className="col-12 col-md-6  col-lg-7  order-1 order-md-12">
                  {/* <!-- link for going to external map  --> */}
                  <a className="mapContent" href="#/">
                    {/* <!-- png square img  (preferred 737 * 737 px) --> */}
                    <img alt="" className="mapImg" src="./img/map.png" />
                    <div className="corners">
                      <div className="corner"></div>
                      <div className="corner"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </MainStyling>
    </>
  );
}

const MainStyling = styled.div`
  & section.page {
    & .largestTitle {
      /* font-size: 14px; */
      font-weight: 500 !important;
      & .weSpan {
        color: #0b1b34;
        font-family: weFont;
        font-size: 115px;
        line-height: 75px;
        & span {
          color: var(--jungle-color) !important;
        }
      }
    }
  }
`;

export default HomeComponents;
