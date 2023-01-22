import React, { useEffect, useState } from "react";
import styled from "styled-components";
import LandingPage from "./banner/bannerComponent";
import TextTruncate from "react-text-truncate";
import MainContainer from "../../MainContainer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Fade } from "react-reveal";
import {
  getCompanyList,
  getCraftmanList,
} from "../../../flux/actions/userAction";
import Loader from "../../loader";
import ErrorServerPage from "../ErrorServerPage";
// import "./ecommerce.css";

import svg1 from "../../../img/svg1.svg";
import { Col, Row } from "antd";
import Slider from "react-slick";

const empty_pic = "/img/advertising/empty.jpg";

function HomeECommerce() {
  const [currentSlide, setcurrentSlide] = useState(null);
  const dispatch = useDispatch();

  const { loading, company, error: errorCompany } = useSelector(
    (state) => state.companyList
  );
  const { loading: loadingCraft, craftman, error: errorCraftman } = useSelector(
    (state) => state.craftmanList
  );

  const settings = {
    dots: false,
    className: "center",
    // centerMode: true,
    infinite: true,
    // centerPadding: "100px",
    slidesToShow: 1,
    autoplay: true,
    // fade: true,
    // vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,
    speed: 500,
    nextArrow: <></>,
    prevArrow: <></>,
    beforeChange: function(current, nextSlide) {
      console.log("before change", current, nextSlide);
      setcurrentSlide(currentSlide);
    },
  };

  const imageData = [
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1639592396001-5f5017b960a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80",
    },
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80",
    },
    {
      id: 0,
      url:
        "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
    },
  ];

  useEffect(() => {
    dispatch(getCompanyList());
    dispatch(getCraftmanList());
  }, [dispatch]);

  return (
    <MainContainer>
      {errorCompany === "Request failed with status code 500" ||
      errorCraftman === "Request failed with status code 500" ? (
        <>
          <ErrorServerPage />
        </>
      ) : (
        <>
          <LandingPage />

          <Section1 current={currentSlide} data={imageData}>
            <Fade bottom>
              <h3>Share your company with</h3>
              <h1>our E-Commerce service</h1>
              <hr />
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>

              <Row gutter={[40, 10]}>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <Slider {...settings} className="slider_container">
                    {imageData.map((data) => (
                      <div key={data.id}>
                        <img
                          src={data.url}
                          alt=""
                          className={`img-${data.id}`}
                        />
                      </div>
                    ))}
                    {/* <div>
                      <img
                        src="https://images.unsplash.com/photo-1639592396001-5f5017b960a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80"
                        alt=""
                      />
                    </div>
                    <div>
                      <img
                        src="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                        alt=""
                      />
                    </div> */}
                  </Slider>
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                  <div className="content">
                    <p className="para">
                      is simply dummy text of the printing and typesetting
                      industry. Lorem Ipsum has been the industry's standard
                      dummy text ever since the 1500s, when an unknown printer
                      took a galley of type and scrambled it to make a type
                      specimen book
                    </p>
                  </div>
                </Col>
              </Row>
            </Fade>
          </Section1>

          <CardSectionStyling style={{ backgroundColor: "var(--dark-color)" }}>
            <Fade bottom>
              <h4 className="title">companies for you</h4>
              <hr />
              {loading ? (
                <h2>Loading ...</h2>
              ) : (
                <Row gutter={[10, 10]}>
                  {company.users !== null && (
                    <>
                      {company.users.slice(0, 4).map((user, index) => (
                        <Col
                          key={index}
                          xs={{ span: 12 }}
                          sm={{ span: 12 }}
                          md={{ span: 8 }}
                          lg={{ span: 6 }}
                        >
                          <Card>
                            <img
                              className="card_img"
                              src={
                                user.company.urlImg.length !== 0
                                  ? user.company.urlImg[0].url
                                  : empty_pic
                              }
                              alt=""
                            />
                            <div className="card_body">
                              <h3>{user.company.name}</h3>
                              {/* <TextTruncate
                                line={3}
                                element="span"
                                text={user.company.about}
                                truncateText="…"
                              /> */}
                              <hr />
                              <Link className="link" to={`profile/${user._id}`}>
                                see more
                              </Link>
                            </div>
                          </Card>
                        </Col>
                      ))}
                    </>
                  )}
                </Row>
              )}
              <Link className="link" to="/companies">
                see more
              </Link>
            </Fade>
          </CardSectionStyling>

          <CardSectionStyling>
            <Fade bottom>
              <h4 className="title">craftman for you</h4>
              <hr />
              {loadingCraft ? (
                <h2>Loading ...</h2>
              ) : (
                <Row gutter={[10, 10]}>
                  {craftman.users !== null && (
                    <>
                      {craftman.users.slice(0, 4).map((user, index) => (
                        <Col
                          key={index}
                          xs={{ span: 12 }}
                          sm={{ span: 12 }}
                          md={{ span: 8 }}
                          lg={{ span: 6 }}
                        >
                          {" "}
                          <Fade bottom>
                            <Card>
                              <img
                                className="card_img"
                                src={
                                  user.company.urlImg.length !== 0
                                    ? user.company.urlImg[0].url
                                    : empty_pic
                                }
                                alt=""
                              />
                              <div className="card_body">
                                <h3>{user.company.name}</h3>
                                {/* <TextTruncate
                                  line={3}
                                  element="span"
                                  text={user.company.about}
                                  truncateText="…"
                                /> */}
                                <hr />
                                <Link
                                  className="link"
                                  to={`profile/${user._id}`}
                                >
                                  see more
                                </Link>
                              </div>
                            </Card>
                          </Fade>
                        </Col>
                      ))}
                    </>
                  )}
                </Row>
              )}
              <Link className="link" to="/companies">
                see more
              </Link>
            </Fade>
          </CardSectionStyling>
        </>
      )}
    </MainContainer>
  );
}

const Section1 = styled.section`
  max-width: var(--max-width);
  padding: 4rem 2rem;
  text-align: center;

  & h3 {
    color: var(--orange-color);
    text-transform: uppercase;
    margin-bottom: 1rem;
    font-size: 1rem;
    font-weight: bold;
  }
  & h1 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 1.2rem;
    font-size: 1.6rem;
    color: var(--white-color);
  }
  & hr {
    width: 100px;
    border: none;
    outline: none;
    background-color: var(--white-color);
    height: 1px;
    margin: 1rem auto;
  }
  & p {
    color: var(--silver-color);
    font-size: 1rem;
    padding: 1rem 2rem;
  }
  & .content {
    display: flex;
    align-items: center;
    height: 100%;
    & .para {
      padding: 2rem;
    }
  }

  & .slider_container {
    padding: 2rem 0;
    & img {
      /* width: 100%; */
      max-height: 400px;
      object-fit: cover;
    }
    & .img-0,
    & .img-1,
    & .img-2 {
      width: ${({ current, data }) => (current === data.id ? "50px" : "900px")};
    }
  }

  /* & .content {
    @media only screen and (max-width: 1000px) {
      display: block;
    }

    & .svg_img {
      display: flex;
      justify-content: flex-end;
      @media only screen and (max-width: 1000px) {
        justify-content: center;
        margin: 1rem 0;
      }
      & img {
        width: 500px;
        @media only screen and (max-width: 768px) {
          width: 12.5rem;
        }
      }
    }
   
  } */

  @media only screen and (max-width: 768px) {
    margin-top: 0;
    padding: 2rem 2rem;
    & h3 {
      font-size: 0.9rem;
      letter-spacing: 1px;
    }
    & h1 {
      font-size: 1.4rem;
    }
    & p {
      font-size: 0.9rem;
    }
  }
`;

const CardSectionStyling = styled.div`
  overflow-y: hidden;
  padding: 4rem 2rem;
  max-width: var(--max-width);

  & .title {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--silver-color);
    margin-bottom: 1rem;
  }
  & hr {
    width: 100px;
    margin: 0 auto;
    height: 2px;
    background-color: var(--silver-color);
    margin-bottom: 1rem;
  }
  & .link {
    text-decoration: none;
    text-align: center;
    display: block;
    color: var(--white-color);
    background: var(--orange-color);
    margin: 2rem auto 0 auto;
    width: 200px;
    padding: 5px;
    text-transform: capitalize;
    border-radius: 5px;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const Card = styled.div`
  margin: 20px 0;
  box-shadow: var(--box-shadow-value);
  padding: 10px;
  & .card_img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    object-position: center;
    /* border-radius: 1rem 1rem 0 0; */
    @media only screen and (max-width: 768px) {
      height: 150px;
    }
  }

  & .card_body {
    padding: 1rem;
    text-align: center;

    & h3 {
      margin-bottom: 0;
      text-transform: uppercase;
      font-size: 1rem;
      font-weight: 700;
      color: var(--white-color);
    }
    & p {
      color: var(--silver-color);
      font-size: 0.8rem;
      margin: 0.5rem 0;
    }
    & hr {
      border: none;
      background: #ececec;
      height: 1px;
      outline: none;
    }
    & .link {
      text-decoration: none;
      width: 100%;
      padding: 0.6rem 0;
      text-align: center;
      text-transform: uppercase;
      border-radius: 10px;
      background: var(--orange-color);
      display: block;
      color: #fff;
      margin-top: 0.5rem;

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export default HomeECommerce;
