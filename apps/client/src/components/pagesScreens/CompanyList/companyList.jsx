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
import CardComponent from "./cardComponent";

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
          <Row gutter={[10, 10]} style={{ margin: 0 }}>
            {company.users && (
              <>
                {company.users.map((user) => (
                  <Col
                    xs={{ span: 12 }}
                    sm={{ span: 12 }}
                    md={{ span: 6 }}
                    lg={{ span: 4 }}
                    key={user._id}
                  >
                    <CardComponent user={user} />
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
  padding:2rem 0;
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

export default CompanyList;
