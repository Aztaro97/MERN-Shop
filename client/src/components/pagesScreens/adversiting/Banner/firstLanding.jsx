import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import cookies from "js-cookie";
import { firstBannerData } from "../../../../utils/advertisingData";
import { LandingStyling } from "./BannerStyling";

const FirstLandingSlider = () => {
  const currentLang = cookies.get("i18next");
  const [lang, setLang] = useState("");

  useEffect(() => {
    if (currentLang) {
      setLang(currentLang);
    }
  }, [currentLang]);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: lang === "ar" ? true : false,
    nextArrow: (
      <div>
        <div className="next-slick-arrow"> ⫸ </div>
      </div>
    ),
    prevArrow: (
      <div>
        <div className="prev-slick-arrow"> ⫷ </div>
      </div>
    ),
  };
  return (
    <LandingStyling>
      <Slider {...settings}>
        {firstBannerData.map((data) => (
          <div
            key={data.profileId}
            onClick={() =>
              (window.location.href = `/advertising/profile/${data.profileId}`)
            }
          >
            <div className="landing_overlay">
              <img src={data.imgUrl} alt="" />
              {/* <div className="contente_overlay">
              <h1>
                <span>Blind</span>Text Generator.
              </h1>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
              <Link className="link1" to="#/">
                Quote here
              </Link>
            </div> */}
            </div>
          </div>
        ))}
      </Slider>
    </LandingStyling>
  );
};

export default FirstLandingSlider;
