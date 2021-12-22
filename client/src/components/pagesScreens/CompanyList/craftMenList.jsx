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
import { Col, Row } from "antd";
import CardComponent from "./cardComponent";

const empty_pic = "/img/advertising/empty.jpg";

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
          <Row gutter={[10, 10]} style={{ margin: 0 }}>
            <>
              {craftman.users !== null && (
                <>
                  {craftman.users.map((user, index) => (
                    <Col
                      xs={{ span: 12 }}
                      sm={{ span: 12 }}
                      md={{ span: 8 }}
                      lg={{ span: 6 }}
                      key={index}
                    >
                      <CardComponent user={user} />
                    </Col>
                  ))}
                </>
              )}
            </>
          </Row>
        </Container>
      )}
    </>
  );
}

const Container = styled.div`
  margin-bottom: 20px;
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

const Card = styled.div`
  box-shadow: var(--box-shadow-value);
  background: var(--black-color);
  padding: 10px;
  & .card_img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    padding: 10px;
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
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--silver-color);
      margin-bottom: 10px;
    }
    & p {
      color: var(--silver-color);
      margin-bottom: 10px;
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
`;

export default CraftManList;
