import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cookies from "js-cookie";
import { useTranslation } from "react-i18next";
import { firstBannerData } from "../../../../utils/advertisingData";
import { LandingStyling } from "./BannerStyling";

const FirstLandingSlider = () => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: currentLang === "ar" ? true : false,
    nextArrow: (
      <div>
        <div className="next-slick-arrow">
          {" "}
          {currentLang === "en" ? ">" : "<"}{" "}
        </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow">
          {currentLang === "en" ? "<" : ">"}{" "}
        </div>
      </div>
    ),
  };
  return (
    <LandingStyling currentLang={currentLang}>
      <Slider {...settings}>
        {firstBannerData.map((data) => (
          <a
            key={data.profileId}
            href={`/advertising/profile/${data.profileId}`}
          >
            <div className="landing_overlay">
              <img src={data.imgUrl} alt="" />
            </div>
          </a>
        ))}
      </Slider>
    </LandingStyling>
  );
};

export default FirstLandingSlider;
