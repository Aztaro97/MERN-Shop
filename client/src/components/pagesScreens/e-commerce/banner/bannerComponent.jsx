import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { firstBannerData } from "../../../../utils/advertisingData";
import { LandingStyling } from "./bannerStyling";

const FirstLandingSlider = () => {
  const { t, i18n } = useTranslation();

  const data = [
    { url: "/img/ecommerce/bg_landing.png" },
    { url: "/img/ecommerce/bg_landing2.png" },
  ];

  const currentLang = i18n.language;

  const settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: currentLang === "ar" ? true : false,
    // nextArrow: (
    //   <div>
    //     <div className="next-slick-arrow">
    //       {" "}
    //       {currentLang === "en" ? ">" : "<"}{" "}
    //     </div>
    //   </div>
    // ),
    // prevArrow: (
    //   <div>
    //     <div className="prev-slick-arrow">
    //       {currentLang === "en" ? "<" : ">"}{" "}
    //     </div>
    //   </div>
    // ),
  };
  return (
    <LandingStyling currentLang={currentLang}>
      <Slider {...settings}>
        <div>
          <div className="landing_overlay bg_img1">
            <div className="content_overlay">
              <h1>
                <span>We</span>are the best e-commerce companies in dubai, uae.
              </h1>

              <p>
                Our marketing strategies for getting your website publicized
                give effective results
              </p>

              <Link className="btn_register" to="/register">
                Get Your Commercial page Free
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img2">
            <div className="content_overlay">
              <Link className="btn_register" to="/register">
                create your company
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </LandingStyling>
  );
};

export default FirstLandingSlider;
