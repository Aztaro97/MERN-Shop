import Slider from "@ant-design/react-slick";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ThirdBannerData } from "../../../../utils/advertisingData";
import { LandingStyling } from "./BannerStyling";
import { useTranslation } from "react-i18next";

const ThirsdBannerSlider = ({ profile }) => {
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
        {/* {profile.serviceUrl ? (
          <>
            {profile.serviceUrl.map((data) => (
              <a key={data.public_id} href={`/advertising/profile/${data.url}`}>
                <div className="landing_overlay">
                  <img src={data.urld} alt="" />
                </div>
              </a>
            ))}
          </>
        ) : (
          <>
            {ThirdBannerData.map((data) => (
              <a
                key={data.profileId}
                href={`/advertising/profile/${data.profileId}`}
              >
                <div className="landing_overlay">
                  <img src={data.imgUrl} alt="" />
                </div>
              </a>
            ))}
          </>
        )} */}
        {profile.serviceUrl.map((data) => (
          <div className="landing_overlay" key={data.public_id}>
            <img src={data.url} alt="" />
          </div>
        ))}
      </Slider>
    </LandingStyling>
  );
};

export default ThirsdBannerSlider;
