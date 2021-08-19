import React, {useEffect} from "react";

import "./landing.css";

import HomeSlider from "./homeSlider"




function LandingPage() {

  useEffect(()=> {

  }, [HomeSlider])
  return (
    <div className="LandinghomePages">
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
        <HomeSlider />
      </section>
      <section class="homeServices page">
        <HomeSlider />
      </section>
      <section class="homeAbout page">
        <HomeSlider />
      </section>
      <section class="homeContact page">
        <HomeSlider />
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
