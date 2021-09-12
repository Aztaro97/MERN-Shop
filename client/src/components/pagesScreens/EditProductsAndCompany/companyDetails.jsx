import React, { useEffect } from "react";
import styled from "styled-components";
import { Image } from "antd";
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import { MdMail } from "react-icons/md";

import ButtonC from "../../ButtonComponeent";
import BgImg from "../../../img/Background.png";
import Loader from "../../loader";

// const dispatch = useDispatch();
function CompanyDetails({ loading, company }) {
  // const { loading, user: {company} } = useSelector((state) => state.userDetails);
  // const {company} = user;

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Grid>
            <Col>
              <img src={company.urlImg.length !== 0 ? company.urlImg : BgImg } alt="" />
              <Container>
                <Row>
                  <h1>{company.name}</h1>
                  <p>{company.scopeBusiness}</p>
                  <hr />
                </Row>
                <Row>
                  <h1>about us</h1>
                  <p>{company.about}</p>
                  <hr />
                </Row>
                <Row>
                  <h1>Our Services</h1>
                  <p>{company.services}</p>
                  <hr />
                </Row>
                <Row>
                  <h1>Contact us</h1>
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
                </Row>
                {company.mediaLink && (
                  <Row>
                    <h1>Find us on</h1>
                    <div className="social-media">
                      {company.mediaLink.facebook && (
                        <a href={company.mediaLink.facebook} target="_blank">
                          <FaFacebookF className="facebook" />
                        </a>
                      )}
                      {company.mediaLink.insta && (
                        <a href={company.mediaLink.insta} target="_blank">
                          <FaInstagram className="insta" />
                        </a>
                      )}
                      {company.mediaLink.twitter && (
                        <a href={company.mediaLink.twitter} target="_blank">
                          <FaTwitter className="twitter" />
                        </a>
                      )}
                      {company.mediaLink.whatsapp && (
                        <a href={company.mediaLink.twitter} target="_blank">
                          <FaTwitter className="twitter" />
                        </a>
                      )}
                    </div>
                    <hr />
                  </Row>
                )}
                <Row>
                  <h1>Work hours</h1>
                  <p>Form 7.00 am to 5.00 pm all week day</p>
                  <p>Holiday on {company.holidays}</p>
                  <hr />
                </Row>
               {company.videoLink && (
                  <Row>
                  <a href={company.videoLink} className="video_link" target="_blank">
                    Check video
                  </a>
                </Row>
               )}
              </Container>
            </Col>
            <Col>
              <div className="container">
                <img src={company.urlImg.length !== 0 ? company.urlImg[0].url : BgImg} alt="" className="bg-right" />
                <ImageGallerie>
                  {
                    company.urlImg.map((item,index) => (
                      <ImageA key={index} src={item.url} />
                    ))
                  }
                  {/* <ImageA src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1490&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1551836022-8b2858c9c69b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1606857521015-7f9fcf423740?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                  <ImageA src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" /> */}
                </ImageGallerie>
              </div>
            </Col>
          </Grid>
          <div
            className="edit_btn"
            style={{
              display: "flex",
              justifyContent: "center",
              margin: "2rem 0",
            }}
          >
            <ButtonC style={{ padding: ".5rem 4rem", letterSpacing: "2px" }}>
              edit
            </ButtonC>
          </div>
        </>
      )}
    </>
  );
}

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 1rem 1rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-column-gap: 1rem;

  @media only screen and (max-width: 1080px) {
    grid-template-columns: 1fr;
  }
`;
const Col = styled.div`
  .container {
    /* border: 1px solid #e9e6e6; */
    border-radius: 20px;
    padding: 0 0.7rem;

    & img {
      max-height:38rem;
    }
  }

  & img {
    width: 100%;
    object-fit: cover;
    /* border-radius: 20px; */
  }

  & .bg-right {
    height: 800px;
    border-radius: 10px;
    object-fit: cover;
    @media only screen and (max-width: 1080px) {
      height: 500px;
    }
    @media only screen and (max-width: 768px) {
      height: 300px;
    }
  }
`;
const Row = styled.div`
  margin-bottom: 0.7rem;

  & h1 {
    font-weight: 700;
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.3rem;
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
    color: #fff;

    & a {
      text-decoration: none;
      color: inherit;
      margin-left: 0.6rem;
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

const ImageGallerie = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1rem;
  /* height:30%; */
  padding: 0.4rem 0;
  margin-top: 0.4rem;
  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ImageA = styled(Image)`
  height: 100%;

  @media only screen and (max-width: 768px) {
    border-radius: 10px;
  }
`;

export default CompanyDetails;
