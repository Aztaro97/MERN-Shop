import React, {useEffect} from "react";

import "./landing.css";

import HomeSlider from "./homeSlider"




function LandingPage() {

  return (
    <HomeSlider />
    // <div className="LandinghomePages">
    //   <div class="navDiv" id="navpoints">
    //     <a href="#/" class="active">
    //       <p class="mainColor  ">Home</p>
    //       <div class="point">
    //         <span></span>
    //       </div>
    //     </a>
    //     <a href="#/">
    //       <p class="mainColor  ">Services</p>
    //       <div class="point">
    //         <span></span>
    //       </div>
    //     </a>
    //     <a href="#/">
    //       <p class="mainColor  ">About US</p>
    //       <div class="point">
    //         <span></span>
    //       </div>
    //     </a>
    //     <a href="#/">
    //       <p class="mainColor  ">Contact US</p>
    //       <div class="point">
    //         <span></span>
    //       </div>
    //     </a>
    //   </div>

    //   <section class="introSlider page">
    //     <HomeSlider />
    //   </section>
    //   <section class="homeServices page">
    //     <HomeSlider />
    //   </section>
    //   <section class="homeAbout page">
    //     <HomeSlider />
    //   </section>
    //   <section class="homeContact page">
    //     <HomeSlider />
    //   </section>
    // </div>
  );
}

export default LandingPage;
