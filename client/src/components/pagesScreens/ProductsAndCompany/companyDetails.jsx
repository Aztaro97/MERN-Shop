import React, { useEffect } from "react";
import styled from "styled-components";
import { Col, Image, Row } from "antd";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import Slider from "react-slick";
import { MdMail } from "react-icons/md";

import ButtonC from "../../ButtonComponeent";
import { Link, Redirect } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyDetails } from "../../../flux/actions/userAction";
import LoaderComponent from "../../loader";
import ErrorServerPage from "../ErrorServerPage";

const emptyImg = "/img/advertising/empty.jpg";

// const dispatch = useDispatch();
function CompanyDetails() {
  const { t } = useTranslation();

  // const {products} = useSelector((state => state.products))

  const { loading, error, user } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);
  const dispatch = useDispatch();

  const company = user?.company;

  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img
            src={company && company.urlImg[i].url}
            alt=""
            className="img_slid"
          />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(getCompanyDetails());
  }, [dispatch]);

  if (!userInfo) {
    return <Redirect to="/auth" />;
  }
  return (
    <Container>
      {loading ? (
        <LoaderComponent />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <>
          {company && (
            <>
              <Row gutter={[40, 50]}>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <div>
                    <div>
                      <h1 className="title" style={{marginTop:"0px !important"}} >{company.name}</h1>
                      <p>{company.scopeBusiness}</p>
                      <hr />F
                    </div>
                    <div>
                      <h1 className="title">about us</h1>
                      <p>{company.about}</p>
                      <hr />
                    </div>
                    <div>
                      <h1 className="title">Our Services</h1>
                      <p>{company.services}</p>
                      <hr />
                    </div>
                    <div>
                      <h1 className="title">Contact us</h1>
                      <div className="info">
                        <FaPhoneAlt className="info-icon" />
                        <p>{company.phoneNumber.join(" / ")}</p>
                      </div>
                      <div className="info">
                        <FaMapMarkerAlt className="info-icon" />
                        <p>freedom Street</p>
                      </div>
                      <div className="info">
                        <MdMail className="info-icon" />
                        <p>{company.email}</p>
                      </div>
                      <hr />
                    </div>
                    {company.mediaLink && (
                      <div>
                        <h1 className="title">Find us on</h1>
                        <div className="social-media">
                          {company.mediaLink.facebook && (
                            <a
                              href={company.mediaLink.facebook}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaFacebookF className="facebook" />
                            </a>
                          )}
                          {company.mediaLink.insta && (
                            <a
                              href={company.mediaLink.insta}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaInstagram className="insta" />
                            </a>
                          )}
                          {company.mediaLink.twitter && (
                            <a
                              href={company.mediaLink.twitter}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <FaTwitter className="twitter" />
                            </a>
                          )}
                          {company.mediaLink.whatsapp && (
                            <a
                              href={company.mediaLink.twitter}
                              target="_blank"
                              rel="noreferrer"
                              alt=""
                            >
                              <FaTwitter className="twitter" />
                            </a>
                          )}
                        </div>
                        <hr />
                      </div>
                    )}
                    <div>
                      <h1 className="title">Work hours</h1>
                      <p>
                        From {company.workHours[0]} to {company.workHours[1]}
                      </p>
                      <p>Holiday on {company.holidays}</p>
                      <hr />
                    </div>
                    {company.videoLink && (
                      <div>
                        <a
                          href={company.videoLink}
                          className="video_link"
                          target="_blank"
                          rel="noreferrer"
                        >
                          Check video
                        </a>
                      </div>
                    )}
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <Slider {...settings} arrows={false}>
                    {company.urlImg &&
                      company.urlImg.map((img, index) => (
                        <div key={index}>
                          <img src={img.url} alt="" className="img_slider" />
                        </div>
                      ))}
                  </Slider>
                </Col>
                <Col xs={{span: 24}}>
                  <div
                    className="edit_btn"
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      margin: "2rem 0",
                    }}
                  >
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <ButtonC
                        style={{ padding: ".5rem 4rem", letterSpacing: "2px" }}
                      >
                        edit my profil
                      </ButtonC>
                    </Link>
                  </div>
                </Col>
              </Row>
            </>
          )}
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
  & img {
    max-height: 38rem;
    margin-bottom: 10px;
  }

  & img {
    width: 100%;
    object-fit: cover;
  }

  & .bg_right {
    height: 400px;
    border-radius: 10px;
    object-fit: cover;
    @media only screen and (max-width: 1080px) {
      height: 500px;
    }
    @media only screen and (max-width: 768px) {
      height: 300px;
    }
  }

  margin-bottom: 0.7rem;

  & .title {
    font-weight: 700;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin: 1rem 0 10px;
    color: var(--silver-color);
  }

  & p {
    color: #92a4b3;
  }
  & hr {
    background: #e9e6e6;
    height: 1px;
    outline: none;
    border: none;
  }

  & .info {
    display: flex;
    align-items: center;
    margin-bottom: 0.6rem;

    & .info-icon {
      color: var(--orange-color) !important;
      margin-right: 0.8rem;
    }

    & p {
      margin: 0;
      color: #92a4b3;
    }
  }

  & .social-media {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
    max-width: 130px;
    & a {
      text-decoration: none;
      color: inherit;
      /* margin-left: 0.6rem; */
      /* color: in; */
      & .facebook {
        border-radius: 50%;
        padding: 7px;
        font-size: 2.4rem;
        background: #3b5998;
      }
      & .insta {
        border-radius: 50%;
        padding: 7px;
        font-size: 2.4rem;
        background: #6a453b;
      }
      & .twitter {
        border-radius: 50%;
        padding: 7px;
        font-size: 2.4rem;
        background: #55acee;
      }
    }
  }
  & .video_link {
    color: #fff;
    text-decoration: none;
    background: var(--orange-color);
    padding: 0.5rem 3rem;
    &:hover {
      opacity: 0.9;
    }
  }
`;

export default CompanyDetails;
