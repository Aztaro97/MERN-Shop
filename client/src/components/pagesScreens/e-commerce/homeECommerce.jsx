import React, { useEffect } from "react";
import styled from "styled-components";
import LandingPage from "../landing/LandingPage";
import MainContainer from "../../MainContainer"
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import {
  getCompanyList,
  getCraftmanList,
} from "../../../flux/actions/userAction";
import Loader from "../../Loader";

import svg1 from "../../../img/svg1.svg";
import bg_rounded from "../../../img/bg_rounded.svg";
import content_img from "../../../img/social_media_content.png";
import svg_right from "../../../img/social_img.png";

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
      <MainContainer>
        <Section1>
          <h3>Share your company with</h3>
          <h1>our E-Commerce service</h1>
          <hr />
          <p>
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley of type and scrambled
            it to make a type specimen book
          </p>

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
        </Section1>
        <SocialSection>
          <div className="grid">
            <img src={content_img} alt="" className="svg_left" />
            <img src={svg_right} alt="" className="svg_right" />
          </div>
        </SocialSection>
        <CardSection>
          <h4>companies for you</h4>
          {loading ? (
            <Loader />
          ) : (
            <GridCard>
              {company.users !== null && (
                <>
                  {company.users.slice(0, 4).map((user) => (
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
                        <p>{user.company.about}</p>
                        <hr />
                        <Link className="link" to={`profile/${user._id}`}>
                          see more
                        </Link>
                      </div>
                    </Card>
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
          {loadingCraft ? (
            <Loader />
          ) : (
            <GridCard>
              {craftman.users !== null && (
                <>
                  {craftman.users.slice(0, 4).map((user) => (
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
                        <p>{user.company.about}</p>
                        <hr />
                        <Link className="link" to={`profile/${user._id}`}>
                          see more
                        </Link>
                      </div>
                    </Card>
                  ))}
                </>
              )}
            </GridCard>
          )}
          <Link className="link" to="/companies">
            see more
          </Link>
        </CardSection>
      </MainContainer>
    </>
  );
}

const Container = styled.div`
  margin: 0;
  padding: 0;
`;
const Section1 = styled.section`
  margin-top: 2rem;
  padding: 2rem 6rem;
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
  border-radius: 30%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: content-box;
  width: 100%;
  height: 31.25rem;
  margin-top: 5rem;

  & .grid {
    display: flex;
    justify-content: space-between;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;

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
      width: 20rem;
      height: 20rem;
      position: relative;
      right: 4rem;
      top: 5rem;
      @media only screen and (max-width: 768px) {
        width: 15rem;
        height: 15rem;
        right: -8rem;
        top: -2rem;
      }
    }
    @media only screen and (max-width: 640px) {
      display: block;
    }
  }

  @media only screen and (max-width: 768px) {
    height: 35rem;
    background-position: inherit;
    border-radius: 0;
  }
`;

const CardSection = styled.div`
  margin: 4rem auto;
  max-width: 1000px;

  & h4 {
    font-size: 1.4rem;
    text-align: center;
    font-weight: 700;
    text-transform: uppercase;
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
    height:12.5rem;
    object-fit: cover;
    /* border-radius: 1rem 1rem 0 0; */
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
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 10px;
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 450px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default HomeECommerce;
