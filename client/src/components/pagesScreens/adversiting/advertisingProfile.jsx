import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import { Col, Image, Row } from "antd";
import { Video, Transformation } from "cloudinary-react";
import { useParams, useHistory } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import "./advertising.css";
import { useDispatch, useSelector } from "react-redux";
import { getAdvertisingProfileByID } from "../../../flux/actions/advertisingAction/advertisingAction";
import LoaderComponent from "../../loader";
import ErrorServerPage from "../ErrorServerPage"
import TextAreaComponent from "../../TextAreaComponent";
import axios from "axios";
import { successMessage } from "../../message";
import ThirsdBannerSlider from "./Banner/thirdBanner";
import MainContainer from "../../MainContainer";
import PageNotFund from "../pageNotFund";
import {
  SEND_CONTACT_FORM_REQUEST,
  SEND_CONTACT_FORM_SUCCESS,
} from "../../../flux/constants/userConstants";
import { useTranslation } from "react-i18next";
import Meta from "../../helmet";
import ReactPlayer from "react-player";
import { AD_PROFILE_RESET } from "../../../flux/constants/advertising";

const emptyImg = "/img/advertising/empty.jpg";

function AdvertisingProfileScreen() {
  const params = useParams();
  const profileID = params.id;

  const { profile, loading, error } = useSelector((state) => state.advertising);

  const dispatch = useDispatch();
  const history = useHistory();
  const { t, i18n } = useTranslation();
  const lang = i18n.language;

  // if (error) {
  //   history.push("")
  // }

  useEffect(() => {
    if (profileID) {
      dispatch(getAdvertisingProfileByID(profileID));
    }
  }, [profileID, dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error === "Profile not fund" ? (
        <PageNotFund />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <>
          {profile._id && (
            <>
              <Meta
                title={
                  lang === "en" ? profile.companyName : profile.companyName_ar
                }
              />
              <ThirsdBannerSlider profile={profile} />
              <ContainerStyling className="container my-5">
                <section className="introduction">
                  {lang === "en" && (
                    <h1 className="title">{profile.companyName}</h1>
                  )}
                  {lang === "ar" && (
                    <h1 className="title">{profile.companyName_ar}</h1>
                  )}
                  <img
                    src={
                      profile.logoUrl.length ? profile.logoUrl[0].url : emptyImg
                    }
                    alt=""
                  />
                </section>
                <section className="about">
                  <h1 className="title">{t("about_company")}</h1>
                  {lang === "en" && <p>{profile.about}</p>}
                  {lang === "ar" && <p>{profile.about_ar}</p>}
                </section>
                {profile.serviceUrl && (
                  <section className="service_two">
                    <h1 className="title">{t("pictures")}</h1>
                    <div className="grid">
                      {profile.serviceUrl.map((data) => (
                        <div className="card">
                          <Image
                            src={data.url}
                            alt=""
                            className="card-image"
                            preview={{ mask: <span></span> }}
                          />
                        </div>
                      ))}
                    </div>
                  </section>
                )}

                {profile.videoUrl && (
                  <section className="portfolio">
                    <h1 className="title">{t("videos")}</h1>
                    <PortfolioSlider
                      profile={profile}
                      className="slider_container"
                    />
                  </section>
                )}
                <section className="contact">
                  <h1 className="title">{t("contact")}</h1>
                  <ContactForm profile={profile} />
                </section>
              </ContainerStyling>
            </>
          )}
        </>
      )}
    </MainContainer>
  );
}

const PortfolioSlider = ({ profile }) => {
  const settings = {
    dots: true,
    infinite: true,
    // fade: true,
    speed: 700,
    autoplay: true,
    autoplaySpeed: 60000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesPerRow: 0,
    dotsClass: "dots__bar",
    // centerPadding: "0px",
    // arrows: false,
  };
  return (
    <Row justify="center">
      <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 12 }}>
        {profile.videoUrl.length > 0 && (
          <Slider {...settings} className="slider_container">
            {profile.videoUrl.map((url, index) => (
              <PlayerWrapper k={index}>
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  url={url}
                  controls
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 },
                    },
                    facebook: {
                      appId: "12345",
                    },
                    file: {
                      autoplay: "false",
                      height: "200px",
                      src: url,
                    },
                  }}
                />
              </PlayerWrapper>
            ))}
          </Slider>
        )}
      </Col>
    </Row>
  );
};

const ContactForm = ({ profile }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [message, setMessage] = useState("");

  const body = {
    firstName,
    lastName,
    address,
    email,
    phoneNumber,
    city,
    country,
    region,
    message,
    companyId: profile._id,
    companyName: profile.companyName,
    companyTelephone: profile.telephone,
  };
  const dispatch = useDispatch();
  const { loading } = useSelector((state) => state.contactForm);

  const { t } = useTranslation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({
      type: SEND_CONTACT_FORM_REQUEST,
    });
    const config = {
      headers: { "Content-Type": "application/json" },
    };
    const res = await axios.post("/api/advertising/message", body, config);
    if (res.data) {
      setFirstName("");
      setLastName("");
      setEmail("");
      setPhoneNumber("");
      setCity("");
      setCountry("");
      setMessage("");
      dispatch({
        type: SEND_CONTACT_FORM_SUCCESS,
      });
      successMessage(res.data.msg, 10, 7);
    }
  };
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <FormStyling onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-lg-6">
              <InputC
                required
                name="firstName"
                id="firstName"
                placeholder={t("first_name__placeholder")}
                className="input"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <InputC
                required
                name="lastName"
                id="lastName"
                placeholder={t("last_name__placeholder")}
                className="input"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <InputC
                required
                name="email"
                id="email"
                placeholder={t("email_placeholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <InputC
                required
                type="tel"
                name="phoneNumber"
                id="phoneNumber"
                placeholder={t("phone_number_placeholder")}
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-6">
              <InputC
                required
                name="address"
                id="address"
                placeholder={t("address__placeholder")}
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="col-lg-6">
              <InputC
                required
                type="text"
                name="city"
                id="city"
                placeholder={t("city__placeholder")}
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <CountryDropdownCustom
                required
                name="country"
                value={country}
                defaultOptionLabel={t("select_country__placeholder")}
                onChange={(val) => setCountry(val)}
              />
            </div>
            <div className="col-lg-6">
              <RegionDropdownCustom
                required
                name="region"
                country={country}
                value={region}
                defaultOptionLabel={t("select_region__placeholder")}
                onChange={(val) => setRegion(val)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12">
              <TextAreaComponent
                style={{ width: "100%" }}
                rows="5"
                required
                name="message"
                id="message"
                placeholder={t("message__placeholder")}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
          </div>

          <ButtonC
            type="submit"
            className="btn_submit"
            style={{ textTransform: "capitalize", letterSpacing: "1px" }}
          >
            {t("submit")}
          </ButtonC>
        </FormStyling>
      )}
    </>
  );
};

const FormStyling = styled.form`
  padding: 2rem;
  border: 1px solid #ececec81;

  & .row {
    margin-bottom: 0.6rem;
    & .col-lg-6:first-child {
      @media only screen and (max-width: 992px) {
        margin-bottom: 0.6rem;
      }
    }
  }

  & .btn_submit {
    margin-top: 1rem;
    margin-left: auto;
  }

  /* border-radius: 10px; */
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    grid-row-start: 2;
  }
`;

const ContainerStyling = styled.div`
  & section {
    margin-bottom: 3rem;
  }
  & .title {
    text-transform: capitalize;
    font-size: 1.5rem;
    margin-bottom: 1.2rem;
    color: var(--silver-color);
    letter-spacing: 1px;
    font-weight: 700;
  }
  & .introduction {
    text-align: center;
    & .title {
      text-transform: capitalize;
      font-weight: 700;
      letter-spacing: 1px;
      margin-bottom: 0;
    }

    & img {
      max-width: 150px;
      height: 150px;
      margin-left: auto;
      margin-right: auto;
      /* box-shadow: rgba(9, 30, 66, 0.25) 0px 4px 8px -2px,
        rgba(9, 30, 66, 0.08) 0px 0px 0px 1px; */
      border-radius: 50%;
      padding: 0.7rem;
      object-fit: cover;
      margin-top: 0.5rem;
      @media only screen and (max-width: 768px) {
        width: 100px;
        height: 100px;
      }
    }
  }

  & .about {
    p {
      color: var(--silver-color);
      letter-spacing: 1px;
      font-size: 1rem;
    }
  }
  & .portfolio {
    & .slider_container {
      & .slide {
        max-width: 500px;
        height: 300px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        @media only screen and (max-width: 768px) {
          height: 200px;
        }
      }
      video {
        width: 100%;
        height: 100%;
        padding-bottom: 15px;
      }
    }
  }

  & .contact {
    & .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }

      & ul {
        list-style: none;
        & li {
          text-transform: capitalize;
        }
      }
      & a {
        color: #111;
        text-decoration: none;
        text-transform: lowercase;
        &:hover {
          color: var(--orange-color);
        }
      }

      & input,
      textarea {
        border: 1px solid var(--orange-color);
        outline: none;
        padding: 4px 10px;
        margin-bottom: 10px;
        width: 100%;
        display: block;
      }
      & textarea {
        width: 100%;
        resize: none;
      }
      & .btn_submit {
        display: block;
        /* border: 1px solid var(--orange-color); */
        background: var(--orange-color);
        color: #fff;
        text-transform: lowercase;
        padding: 0.2rem 2rem;
        margin-left: auto;
        &:hover {
          opacity: 0.9;
        }
      }

      & .maps {
        height: 100%;
        border: none;
        width: 100%;
      }
    }
  }

  /* ////////////////  SERVICE SECTION   //////////////// */
  & .service .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    & .box {
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 1.5rem;
      /* margin-bottom: 10px;
      margin-left: 5px; */
      /* margin-right: 5px; */
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        padding: 0;
      }
      &:hover .box-container h4 {
        color: var(--orange-color);
      }

      & .box-container {
        width: 100%;
        height: 100%;
        background: #00000068;
        display: flex;
        align-items: center;
        justify-content: center;

        & h4 {
          color: #ffff;
          text-transform: uppercase;
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 520px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }

  /*  //////////   service two exemple  ///////////// */
  & .service_two {
    & .grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-gap: 10px;
      & .card-image {
        height: 200px;
      }
      & p {
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: 2px;
        margin: 0;
      }
      @media only screen and (max-width: 1000px) {
        grid-template-columns: repeat(3, 1fr);
      }
      @media only screen and (max-width: 768px) {
        & .card-image {
          height: 100px;
        }
      }

      @media only screen and (max-width: 520px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }
`;

const LandingStyling = styled.div`
  & .landing_overlay {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.37298669467787116) 0%
      ),
      url("/img/advertising/bg-images.jpeg");
    height: 700px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;

    & h1 {
      color: #fff;
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    & .link1 {
      display: block;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 40px;
      padding: 0.5rem;
      background: #fff;
      width: 160px;
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
      margin-left: 2rem !important;
      font-size: 1.3rem;
      cursor: pointer;
      background: var(--orange-color);

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const CountryDropdownCustom = styled(CountryDropdown)`
  /* border: 1px solid var(--silver-color); */
  color: var(--slider-color);
  padding-left: 0.4rem;
  width: 100%;
  height: 2.5rem;
  background:  var(--dark-color);
  &:focus-visible {
    /* border: 3px solid var(--background-color); */
    background: var(--dark-color);
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 2.5rem;
  }
  @media only screen and (max-width: 330px) {
    width: 100%;
  }
`;

const RegionDropdownCustom = styled(RegionDropdown)`
  border: 1px solid var(--silver-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  width: 100%;
  height: 2.5rem;
  background:  var(--dark-color);
  &:focus {
    border: 1px solid var(--silver-color);
  }
  &:focus-visible {
    border: 3px solid var(--background-color);
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 2.5rem;
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export default AdvertisingProfileScreen;
