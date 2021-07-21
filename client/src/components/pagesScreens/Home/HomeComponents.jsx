import React from "react";

// import OwlCarousel from 'react-owl-carousel';  
// import 'owl.carousel/dist/assets/owl.carousel.css';  
// import 'owl.carousel/dist/assets/owl.theme.default.css';  


// import "../../css/style.css"
// import "../../css/bootstrap.min.css";
// import "../../css/owl.carousel.min.css";
// import "../../css/owl.theme.default.min.css";
// import "../../css/animate.min.css";

// import "../../js/main"
// import "../../js/jquery-3.5.1.slim.min.js"
// import "../../js/bootstrap.min.js"
// import "../../js/owl.carousel.min.js"
// import "../../js/popper.min.js"


function HomeComponents() {
  return (
    <>
      <main>
        <div class="homePages">
          {/* <!-- points for change internal home pages  --> */}
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

          {/* <!-- Next button  --> */}
          <div class="moveBtns">
            <a
              href="#/"
              id="prevButton"
              onClick="clickPrev()"
              class="nextBtn mainColor mediumText d-none d-md-none"
            >
              PREV
            </a>
            <a
              href="#/"
              id="nextButton"
              onClick="clickNext()"
              class="nextBtn mainColor mediumText"
            >
              NEXT
            </a>
          </div>
          {/* <!-- intro slider with catting imgs  static 3 imgs --> */}
          <section class="introSlider page">
            <div class="container">
              <div class="sliders">
                <div class="inner" id="introSliders" timer="6000">
                  {/* <!-- slider repeating for using programing language --> */}
                  {/* <!-- slider repeating  --> */}
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
                    {/* <!-- line shape is appearing when active slide  --> */}
                    <div class="arrow"></div>
                  </div>
                  {/* <!-- slider repeating  --> */}
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
                        Some hardworking People are Working Day and Night to
                        provide you highly scalable product
                      </p>
                    </div>
                    <div class="arrow"></div>
                  </div>
                  {/* <!-- slider repeating  --> */}
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
                        ,Print, outdoor advertising & online, <br /> unique
                        designs, fresh ideas .. etc
                      </h3>
                    </div>
                    <div class="arrow"></div>
                  </div>
                </div>
                {/* <!-- clicking points equal slider number  --> */}
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
          </section>
          {/* <!-- services section   --> */}
          <section class="homeServices page ">
            <div class="container">
              <div class="homeTitle">
                <h2 class="largeTitle text-uppercase weight-600 whiteColor">
                  Services And Programs
                </h2>
              </div>
              {/* <!-- carousel for service items  --> */}
              <div
                id="servicesCarousel"
                class="carousel slide"
                data-ride="carousel"
                data-touch="true"
              >
                <div class="carousel-inner">
                  {/* <!--  repeating carousel item  --> */}
                  <div class="carousel-item active">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/myadd.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">01</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          Advertising
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/marketing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">02</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          Marketing
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/e-commerce.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">03</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          E-Commerce
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <a class="imgCover" href="pos.html">
                        <img alt="" src="./img/pos.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">04</div>
                      </a>
                      <a class="carousel-caption" href="pos.html">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          POS
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </a>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/printing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">05</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          Printing
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/photography.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">06</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          Photography
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/designing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">07</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          designing
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/delivery.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">08</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          delivery
                        </h3>
                        <p class="normalText grayColor weight-400">
                          We believe that we succeed <br />
                          when our clients succeed <br /> Which is why we never
                          stop <br /> working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* // <!--  repeating carousel item  --> */}
                  <div class="carousel-item ">
                    <div class="minContent">
                      <div class="imgCover">
                        <img alt="" src="./img/programing.png" />
                        {/* <!-- carousel number from 2 digits number  --> */}
                        <div class="carousalNumber">09</div>
                      </div>
                      <div class="carousel-caption">
                        <h3 class="mediumTitle secColor text-uppercase weight-500">
                          programing
                        </h3>
                        <p class="normalText grayColor weight-400">
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
                  class="arrow carousel-control-prev"
                  href="#servicesCarousel"
                  role="button"
                  data-slide="prev"
                >
                  <span>
                    <i class="fas fa-chevron-left"></i>
                  </span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="arrow carousel-control-next"
                  href="#servicesCarousel"
                  role="button"
                  data-slide="next"
                >
                  <span>
                    <i class="fas fa-chevron-right"></i>
                  </span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
              {/* // <!-- <div class="noise"></div> --> */}
            </div>
          </section>
          {/* // <!-- About Us Section  --> */}
          <section class="homeAbout page">
            <div class="container">
              <div class="homeTitle">
                <h2 class="largeTitle text-uppercase weight-600 mainColor">
                  About US
                </h2>
              </div>

              <div class="container">
                {/* <!-- owl carousel  --> */}
                <div id="about-slider" class="owl-carousel">
                  {/* <!--  repeating carousel item  --> */}
                  <div class="slide">
                    <div class="inner">
                      {/* <!-- using two img (dark and white) --> */}
                      {/* <!-- dark img  --> */}
                      <img alt="" class="primryImg" src="./img/check.png" />
                      {/* <!-- white img  --> */}
                      <img alt="" class="secImg" src="./img/check2.png" />
                      <div class="slideText">
                        <h3 class="mediumTitle weight-500 secColor">
                          Profile3
                        </h3>
                        <p class="grayColor normalText weight-400">
                          We believe that we succeed when our clients succeed
                          <br />
                          Which is why we never stop working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  repeating carousel item  --> */}
                  <div class="slide">
                    <div class="inner">
                      <img alt="" class="primryImg" src="./img/profile.png" />
                      <img alt="" class="secImg" src="./img/profile2.png" />
                      <div class="slideText">
                        <h3 class="mediumTitle weight-500 secColor">
                          Profile1
                        </h3>
                        <p class="grayColor normalText weight-400">
                          We believe that we succeed when our clients succeed
                          <br />
                          Which is why we never stop working on being better
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* <!--  repeating carousel item  --> */}
                  <div class="slide">
                    <div class="inner">
                      <img alt="" class="primryImg" src="./img/help.png" />
                      <img alt="" class="secImg" src="./img/help2.png" />
                      <div class="slideText">
                        <h3 class="mediumTitle weight-500 secColor">
                          Profile2
                        </h3>
                        <p class="grayColor normalText weight-400">
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
          <section class="homeContact page ">
            <div class="container">
              {/* <!-- <div class="homeTitle">
                            <h2 class="largeTitle text-uppercase weight-600 primaryColor">Contact Us</h2>
                        </div> --> */}
              <div class="row">
                <div class="col-12 col-md-6  col-lg-5 p-3 pl-5 order-12 order-md-1">
                  <h3 class="secColor weight-500 mediumTitle">To visit us</h3>
                  <p class="grayBlueColor weight-400 normalText">
                    If you want to visit us <br /> talk about a project or{" "}
                    <br /> just have a coffee
                  </p>
                  <p class="grayBlueColor weight-500 mediumText mt-3">
                    Near 41B Street
                    <br /> Al Rashidiya - Dubai
                  </p>
                  <p class="grayBlueColor weight-500 mediumText mt-3 mb-0">
                    +97142839983
                  </p>
                  <p class="grayBlueColor weight-500 mediumText ">
                    +971504366696
                  </p>
                  {/* <!-- follow us div  --> */}
                  <div class="followUs mt-4">
                    <h3 class="secColor weight-500 mediumTitle">Follow us</h3>
                    <div class="group">
                      {/* <!-- Repeating link  --> */}
                      <a href="#/" class="btn">
                        <i class="fab fa-tumblr-square grayBlueColor"></i>
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a href="#/" class="btn">
                        <i class="fab fa-whatsapp-square grayBlueColor"></i>
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a href="#/" class="btn">
                        <i class="fab fa-instagram-square grayBlueColor"></i>
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a href="#/" class="btn">
                        <i class="fab fa-twitter-square grayBlueColor"></i>
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a href="#/" class="btn">
                        <i class="fab fa-snapchat-square grayBlueColor"></i>
                      </a>
                      {/* <!-- Repeating link  --> */}
                      <a href="#/" class="btn">
                        <i class="fab fa-facebook-square grayBlueColor"></i>
                      </a>
                    </div>
                  </div>
                  <div class="mt-4">
                    <h3 class="secColor weight-500 mediumTitle">Contact US</h3>
                    <p class="grayBlueColor weight-400 normalText">
                      You Have a question
                      <br /> a request for information, a project{" "}
                    </p>
                    <a href="#/" class="btn sec-outline-btn">
                      WRITE US
                    </a>
                  </div>
                </div>
                <div class="col-12 col-md-6  col-lg-7  order-1 order-md-12">
                  {/* <!-- link for going to external map  --> */}
                  <a class="mapContent" href="#/">
                    {/* <!-- png square img  (preferred 737 * 737 px) --> */}
                    <img alt="" class="mapImg" src="./img/map.png" />
                    <div class="corners">
                      <div class="corner"></div>
                      <div class="corner"></div>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}

export default HomeComponents;
