import React, { useEffect } from "react";
import styled from "styled-components";
import LandingPage from "./banner/bannerComponent";
import TextTruncate from "react-text-truncate";
import MainContainer from "../../MainContainer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Fade, Slide, Zoom  } from "react-reveal";
import {
  getCompanyList,
  getCraftmanList,
} from "../../../flux/actions/userAction";
import Loader from "../../loader";
import ErrorServerPage from "../ErrorServerPage";
// import "./ecommerce.css";

import svg1 from "../../../img/svg1.svg";
import { Col, Row } from "antd";

const empty_pic = "/img/advertising/empty.jpg";

function HomeECommerce() {
  const dispatch = useDispatch();

  const { loading, company, error: errorCompany } = useSelector(
    (state) => state.companyList
  );
  const { loading: loadingCraft, craftman, error: errorCraftman } = useSelector(
    (state) => state.craftmanList
  );

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

          <Section1>
            <Fade top>
              <h3>Share your company with</h3>
              <h1>our E-Commerce service</h1>
              <hr />
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </Fade>

            <Slide left cascade>
              <div className="content">
                <div className="svg_img">
                  <img src={svg1} alt="" />
                </div>
                <div className="content_para">
                  <p>
                    is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry's standard dummy
                    text ever since the 1500s, when an unknown printer took a
                    galley of type and scrambled it to make a type specimen book
                  </p>
                </div>
              </div>
            </Slide>
          </Section1>

          <CardSection>
            <h4>companies for you</h4>
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
                        <Zoom  right cascade>
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
                              <TextTruncate
                                line={3}
                                element="span"
                                text={user.company.about}
                                truncateText="…"
                              />
                              <hr />
                              <Link className="link" to={`profile/${user._id}`}>
                                see more
                              </Link>
                            </div>
                          </Card>
                        </Zoom >
                      </Col>
                    ))}
                  </>
                )}
              </Row>
            )}
            <Link className="link" to="/companies">
              see more
            </Link>
          </CardSection>

          <CardSection>
            <h4>craftman for you</h4>
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
                        <Zoom  left cascade>
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
                              <TextTruncate
                                line={3}
                                element="span"
                                text={user.company.about}
                                truncateText="…"
                              />
                              <hr />
                              <Link className="link" to={`profile/${user._id}`}>
                                see more
                              </Link>
                            </div>
                          </Card>
                        </Zoom >
                      </Col>
                    ))}
                  </>
                )}
              </Row>
            )}
            <Link className="link" to="/companies">
              see more
            </Link>
          </CardSection>
        </>
      )}
    </MainContainer>
  );
}

const Section1 = styled.section`
  max-width: var(--max-width);
  margin: 1rem auto 0;
  padding: 0rem 6rem 2rem;
  text-align: center;

  & h3 {
    color: var(--jungle-color);
    text-transform: uppercase;
    margin-bottom: 0.7rem;
    font-size: 1rem;
    font-weight: bold;
  }
  & h1 {
    font-weight: 700;
    text-transform: uppercase;
    margin-bottom: 0;
    font-size: 1.6rem;
  }
  & hr {
    width: 100px;
    border: none;
    outline: none;
    background-color: var(--jungle-color);
    height: 1px;
    margin: 1rem auto;
  }
  & p {
    color: var(--silver-color);
    font-size: 1rem;
  }

  & .content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    /* max-width: 1000px; */
    margin: 1rem auto;

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
    & .content_para {
      display: flex;
      align-items: center;
      text-align: start;
      @media only screen and (max-width: 1000px) {
        text-align: center;
      }
    }
  }

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

const CardSection = styled.div`
  margin: 4rem auto;
  max-width: var(--max-width);
  padding: 0 1.5rem;

  & h4 {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--orange-color);
  }
  & hr {
    width: 100px;
    margin: 0 auto;
    height: 2px;
    background-color: var(--orange-color);
  }
  & .link {
    text-decoration: none;
    text-align: center;
    display: block;
    color: #fff;
    background: #92a4b3;
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
