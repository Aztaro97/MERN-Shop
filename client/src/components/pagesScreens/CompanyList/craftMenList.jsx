import React, { useEffect } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import TextTruncate from "react-text-truncate";
import { getCraftmanList } from "../../../flux/actions/userAction";
import Loader from "../../loader";
import {
  USER_LIST_RESET,
  CRAFTMAN_LIST_REQUEST,
} from "../../../flux/constants/userConstants";

import company_pic1 from "../../../img/company_pic1.png";
import company_pic2 from "../../../img/company_pic2.png";
import company_pic3 from "../../../img/company_pic3.png";
import company_pic4 from "../../../img/company_pic4.png";

const CarouselButton = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <SliderCarousel {...settings}>
        <div>
          <button>cleaning</button>
        </div>
        <div>
          <button>food</button>
        </div>
        <div>
          <button>real estate</button>
        </div>
        <div>
          <button>cleaning</button>
        </div>
        <div>
          <button>food</button>
        </div>
        <div>
          <button>real estate</button>
        </div>
        <div>
          <button>cleaning</button>
        </div>
        <div>
          <button>food</button>
        </div>
        <div>
          <button>real estate</button>
        </div>
      </SliderCarousel>
    </>
  );
};

function CraftManList() {
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, craftman } = useSelector((state) => state.craftmanList);

  useEffect(() => {
    dispatch({
      type: CRAFTMAN_LIST_REQUEST,
    });
    dispatch(getCraftmanList());

    return () => {
      dispatch({ type: USER_LIST_RESET });
    };
  }, [dispatch]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {/* <hr /> */}
          {/* <CarouselButton /> */}
          <CardContainer>
            <>
              {craftman.users !== null && (
                <>
                  {craftman.users.map((user) => (
                    <div className="card" key={user._id}>
                      <img className="card_img" src={company_pic1} alt="" />
                      <div className="card_body">
                        <h3>{user.company.name}</h3>
                        <TextTruncate
                          line={2}
                          element="p"
                          truncateText="…"
                          text={user.company.about}
                        />
                        <hr />
                        <Link className="link" to={`profile/${user._id}`}>
                          see more
                        </Link>
                      </div>
                    </div>
                  ))}
                </>
              )}
            </>
          </CardContainer>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  /* max-width: 1600px; */
  margin: 0 auto;
`;

const SliderCarousel = styled(Slider)`
  /* display: flex; */
  padding: 0 3rem;
  margin: 4rem 0;
  width: 100%;
  z-index: 999;

  & div {
    text-align: center;
    & button {
      border: 1px solid #ececec;
      text-transform: uppercase;
      color: #000;
      margin: 0 0px;
      padding: 5px 2.3rem;
      border-radius: 20px;
      background: transparent;
      &:hover {
        background: var(--orange-color);
        color: #fff;
      }
    }
  }
  @media only screen and (max-width: 940px) {
    padding: 0 1rem;
    & div {
      & button {
        padding: 5px 1.6rem;
        font-size: 0.7rem;
      }
    }
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;

  .card {
    width: 100%;
    box-shadow: var(--box-shadow-value);
    /* border-radius:1rem; */
    /* @media only screen and (max-width:1020px) {
            padding: 0 4rem;
        } */

    & .card_img {
      width: 100%;
      height: 12.5rem;
      object-fit: cover;
      /* border-radius: 1rem 1rem 0 0; */
    }

    & .card_body {
      padding: 1rem;
      text-align: center;

      & h3 {
        margin-bottom: 0;
        text-transform: uppercase;
        font-size: 1.2rem;
        font-weight: 700;
      }
      & p {
        color: var(--silver-color);
        margin-bottom: 0;
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

        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  @media only screen and (max-width: 1020px) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 1rem;
  }
  @media only screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    /* padding: 0 10rem; */
  }
  @media only screen and (max-width: 500px) {
    grid-template-columns: 1fr;
    /* padding: 0 1rem; */
  }
`;

export default CraftManList;
