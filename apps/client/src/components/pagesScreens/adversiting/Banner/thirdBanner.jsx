import Slider from "@ant-design/react-slick";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThirdBannerData } from "../../../../utils/advertisingData";
import { LandingStyling } from "./BannerStyling";
import { useTranslation } from "react-i18next";

const data = [
  {
    url: "/img/advertising/ad1.jpeg",
  },
  {
    url: "/img/advertising/ad2.jpeg",
  },
  {
    url: "/img/advertising/ad3.jpeg",
  },
];

const ThirsdBannerSlider = ({ profile }) => {
  const { t, i18n } = useTranslation();

  const currentLang = i18n.language;
  const settings = {
    dots: false,
    infinite: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 5000,
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
        {profile.bannerUrl.length
          ? profile.bannerUrl.map((data) => (
              <div className="landing_overlay" key={data.public_id}>
                <img src={data.url} alt="" />
              </div>
            ))
          : data.map((item, index) => (
              <div className="landing_overlay" key={index}>
                <img src={item.url} alt="" />
              </div>
            ))}
      </Slider>
    </LandingStyling>
  );
};

export default ThirsdBannerSlider;
