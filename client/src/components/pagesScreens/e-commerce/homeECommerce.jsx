import React, { useEffect } from "react";
import styled from "styled-components";
import LandingPage from "../landing/LandingPage";
import TextTruncate from "react-text-truncate";
import MainContainer from "../../MainContainer";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { Fade, Slide } from "react-reveal";
import {
  getCompanyList,
  getCraftmanList,
} from "../../../flux/actions/userAction";
import Loader from "../../loader";
import "./ecommerce.css";

import svg1 from "../../../img/svg1.svg";
import bg_rounded from "../../../img/bg_rounded.svg";

import compayn_pic from "../../../img/company_pic2.png";

function HomeECommerce() {
  const dispatch = useDispatch();

  const { loading, company } = useSelector((state) => state.companyList);
  const { loading: loadingCraft, craftman } = useSelector(
    (state) => state.craftmanList
  );

  useEffect(() => {
    dispatch(getCompanyList());
    dispatch(getCraftmanList());
  }, [dispatch]);

  console.log(company == null && "vide");

  return (
    <>
      <LandingPage />

      <Section1>
        <Fade top>
          <h3>Share your company with</h3>
          <h1>our E-Commerce service</h1>
          <hr />
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </p>
        </Fade>

        <Slide left cascade>
          <div className="content">
            <div className="svg_img">
              <img src={svg1} alt="" />
            </div>
            <div className="contete_para">
              <p>
                is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book
              </p>
            </div>
          </div>
        </Slide>
      </Section1>

      {/* <!-- Social Media container  --> */}
      <div className="socialMedia" id="socialMediaContent">
        <div className="bgGrediant">
          <div className="row no-gutters">
            <div className="col-lg-5 col-md-12 col-sm-12">
              <div className="socialText">
                <img src="./img/shape1.png" className="shape" alt="" />
                <div className="contente">
                  <p className="thirdColor mediumText weight-400 text-uppercase mb-0 mb-lg-1">
                    Be The Attentionence
                  </p>
                  <h2 className="secColor largestTitle weight-600  text-uppercase mb-0 mb-lg-2">
                    Social Media
                  </h2>
                  <div className="customBorder"></div>
                  <p className="weight-400 normalText grayBlueColor">
                    Increase your company's monthly leads by 327% with our
                    expert on social media promotion
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-sm-12">
              <div className="popSocial">
                <p className="largeText weight-500 thirdColor text-uppercase ">
                  how
                </p>
                <p className="largeTitle weight-600 whiteColor text-uppercase">
                  to make your ad
                </p>
                <a
                  className="btn text-uppercase social_btn_center"
                  type="button"
                  href="#/"
                  style={{ width: "auto" }}
                >
                  easy and fast
                </a>
                <div className="socials">
                  <div className="item">
                    <a href="/#" className="btn" type="button">
                      <img src="./img/share.png" alt="" width="10" />
                      <span className="social_btn">share</span>
                    </a>
                  </div>
                  <div className="item">
                    <a href="/register" className="btn" type="button">
                      <img src="./img/profile3.png" alt="" />
                      <span className="social_btn">register</span>
                    </a>
                  </div>

                  <div className="item">
                    <a href="/#" className="btn" type="button">
                      <img src="./img/file.png" alt="" />
                      <span className="social_btn">file data</span>
                    </a>
                  </div>
                  {/* <div className="item">
                  <a href="/#" className="btn" type="button">
                    <img src="./img/s4.png" alt="" />
                  </a>
                </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <SocialSection>
        <div className="grid">
          <img src={content_img} alt="" className="svg_left" />
          <img src={svg_right} alt="" className="svg_right" />
        </div>
      </SocialSection> */}
      <CardSection>
        <h4>companies for you</h4>
        <hr />
        {loading ? (
          <Loader />
        ) : (
          <GridCard>
            {company.users !== null && (
              <>
                {company.users.slice(0, 4).map((user) => (
                  <Fade right cascade>
                    <Card>
                      <img
                        className="card_img"
                        src={
                          user.company.urlImg.length !== 0
                            ? user.company.urlImg[0].url
                            : compayn_pic
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
                  </Fade>
                ))}
              </>
            )}
          </GridCard>
        )}
        <Link className="link" to="/companies">
          see more
        </Link>
      </CardSection>

      <CardSection>
        <h4>craftman for you</h4>
        <hr />
        {loadingCraft ? (
          <Loader />
        ) : (
          <GridCard>
            {craftman.users !== null && (
              <>
                {craftman.users.slice(0, 4).map((user) => (
                  <Fade left cascade>
                    <Card>
                      <img
                        className="card_img"
                        src={
                          user.company.urlImg.length !== 0
                            ? user.company.urlImg[0].url
                            : compayn_pic
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
                  </Fade>
                ))}
              </>
            )}
          </GridCard>
        )}
        <Link className="link" to="/companies">
          see more
        </Link>
      </CardSection>
    </>
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
    & .contete_para {
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

const SocialSection = styled.section`
  background: linear-gradient(
    to bottom,
    rgba(91, 185, 198, 1) 0%,
    rgba(91, 185, 198, 1) 1%,
    rgba(33, 127, 140, 1) 28%,
    rgba(29, 24, 74, 1) 99%,
    rgba(29, 24, 74, 1) 100%
  );
  /* background-image: url(${bg_rounded}); */
  /* border-radius: 30%; */
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: content-box;
  width: 100%;
  margin-top: 5rem;
  padding: 1rem 0;

  & .grid {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* grid-template-columns: 1fr 1fr;
    grid-gap: 2rem; */

    & .svg_left {
      width: 28.125rem;
      height: auto;
      position: relative;
      bottom: 2rem;

      @media only screen and (max-width: 768px) {
        width: 20rem;
      }
    }
    & .svg_right {
      height: 20rem;
      display: block;
      text-align: end;
      @media only screen and (max-width: 655px) {
        width: 15rem;
        height: 15rem;
        /* right: -8rem;
        top: -2rem; */
      }
    }
    @media only screen and (max-width: 640px) {
      grid-template-columns: 1fr;
    }
  }

  @media only screen and (max-width: 768px) {
    background-position: inherit;
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
  margin-bottom: 0.9rem;
  box-shadow: var(--box-shadow-value);
  & .card_img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
    object-position: center;
    /* border-radius: 1rem 1rem 0 0; */
    @media only screen and (max-width: 768px) {
      height: 17rem;
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

const GridCard = styled.div`
  margin: 2rem 0 3rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 15px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default HomeECommerce;
