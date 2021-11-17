import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import Slider from "react-slick";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCompanyList } from "../../../flux/actions/userAction";
import Loader from "../../loader";
import TextTruncate from "react-text-truncate";
import ErrorServerPage from "../ErrorServerPage";
import { Col, Row } from "antd";

const empty_pic = "/img/advertising/empty.jpg";

const CarouselButton = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

const CompanyList = () => {
  const params = useParams();
  const dispatch = useDispatch();

  const { loading, company, error } = useSelector((state) => state.companyList);

  useEffect(() => {
    dispatch(getCompanyList());
  }, [dispatch]);
  return (
    <>
      {loading ? (
        <Loader />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <Container>
          {/* <hr /> */}
          {/* <CarouselButton /> */}
          <Row gutter={[10, 10]}>
            {company.users && (
              <>
                {company.users.map((user) => (
                  <Col
                    xs={{ span: 12 }}
                    sm={{ span: 12 }}
                    md={{ span: 8 }}
                    lg={{ span: 6 }}
                    key={user._id}
                  >
                    <Card key={user._id}>
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
                          line={2}
                          element="p"
                          truncateText="…"
                          text={user.company.about}
                          // textTruncateChild={<a href="#">Read on</a>}
                        />
                        {/* <p>{user.company.about}</p> */}
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
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  margin-bottom: 20px;
`;

const SliderCarousel = styled(Slider)`
  /* display: flex; */
  padding: 0 3rem;
  margin: 4rem 0;
  width: 100&;
  margin-right: auto;
  margin-left: auto;
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
  width: 100%;
  box-shadow: var(--box-shadow-value);

  & .card_img {
    width: 100%;
    height: 12.5rem;
    object-fit: cover;
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
`;
export default CompanyList;
