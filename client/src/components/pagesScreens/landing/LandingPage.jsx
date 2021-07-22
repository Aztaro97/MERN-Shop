import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "./landing.css";

import bg_landing1 from "../../../img/bg_landing.png"

const Slide = styled.div`
  height: 700px;

  & img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  

  & h1 {
    color:#fff;
    width: 100%;
    height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99999;
  }


`;

const HomeSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
      autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: dots => <ul style={{width:"50px", height:"50px",background:"red"}}>1</ul>,
    customPaging: i => (
      <div className="ft-slick__dots--custom" style={{width:"50px", height:"50px",background:"red"}}>
        <div className="loading" />
      </div>
    )
  };
  return (
    <div>
      <Slider {...settings}>
        <Slide>
          <img src={bg_landing1} alt="" />
          <h1>Home</h1>
        </Slide>
        <Slide>
          <img src="https://images.unsplash.com/photo-1529460608-bc455fccd5a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1190&q=80" alt="" />
          <h1>Pays</h1>
        </Slide>
      </Slider>
    </div>
  );
};

function LandingPage() {
  return (
    <div className="homePages">
      <div class="navDiv" id="navpoints">
        <a href="#/" class="active">
          <p class="mainColor  ">Home</p>
          <div class="point">
            <span></span>
          </div>
        </a>
        <a href="#/">
          <p class="mainColor  ">Services</p>
          <div class="point">
            <span></span>
          </div>
        </a>
        <a href="#/">
          <p class="mainColor  ">About US</p>
          <div class="point">
            <span></span>
          </div>
        </a>
        <a href="#/">
          <p class="mainColor  ">Contact US</p>
          <div class="point">
            <span></span>
          </div>
        </a>
      </div>

      <section class="introSlider page">
      <HomeSection />
      </section>

      {/* <section class="introSlider page">
        <div class="container">
          <div class="sliders">
            <div class="inner" id="introSliders" timer="6000">
              <div class="slider active">
                <img alt="" src="img/1.png" />
                <div class="myImg"></div>
                <div class="caption animate__animated">
                  <h2 class="largestTitle thirdColor">
                    <span class="mainColor weSpan">We</span>PROFESSIONAL
                  </h2>
                  <h3 class="largeTitle mainColor">
                    Technology, Digital Software and Applications Company
                  </h3>
                  <p class="grayColor normalText">
                    We believe that we succeed when our clients succeed
                    <br />
                    Which is why we never stop working on being better
                  </p>
                </div>
                <div class="arrow"></div>
              </div>
              <div class="slider">
                <img alt="" src="img/2.png" />
                <div class="myImg"> </div>
                <div class="caption animate__animated ">
                  <h2 class="largestTitle thirdColor">
                    <span class="mainColor weSpan">We</span>GTREAT
                  </h2>
                  <h3 class="largeTitle mainColor">
                    Responsive & Strong Competitive People
                  </h3>
                  <p class="grayColor normalText">
                    Some hardworking People are Working Day and Night to provide
                    you highly scalable product
                  </p>
                </div>
                <div class="arrow"></div>
              </div>
              <div class="slider">
                <img alt="" src="img/3.png" />
                <div class="myImg"> </div>
                <div class="caption animate__animated ">
                  <h2 class="largestTitle thirdColor">
                    <span class="mainColor weSpan">We</span>
                    <p class="grayColor normalText">Are More Than An</p>
                    Agency
                  </h2>
                  <h3 class="largeTitle mainColor">
                    ,Print, outdoor advertising & online, <br /> unique designs,
                    fresh ideas .. etc
                  </h3>
                </div>
                <div class="arrow"></div>
              </div>
            </div>
            <div class="pagers" id="introSlidersPagers">
              <div class="pager active">
                <span></span>
              </div>
              <div class="pager">
                <span></span>
              </div>
              <div class="pager">
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default LandingPage;
