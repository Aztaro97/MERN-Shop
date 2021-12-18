import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useParams, useHistory } from "react-router-dom";
import { filterBusiness } from "../../../flux/actions/advertisingAction/advertisingAction";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../loader";
import ErrorServerPage from "../ErrorServerPage";
import SecondeLandingSlider from "./Banner/secondeLanding";
import MainContainer from "../../MainContainer";
import { Col, Row } from "antd";
import Meta from "../../helmet";

function AllBrandScreen() {
  const params = useParams();
  const dispatch = useDispatch();
  const type = params.typeBusiness;

  const { loading, listAdService, error } = useSelector(
    (state) => state.advertising
  );

  useEffect(() => {
    dispatch(filterBusiness(type));
  }, [dispatch, type]);
  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <>
          <Meta title={`All ${type}`} />
          <SecondeLandingSlider />
          <DataSection
            listAdService={listAdService}
            error={error}
            type={type}
          />
        </>
      )}
    </MainContainer>
  );
}

// const Landing = () => {
//   return (
//     <LandingStyling>
//       <div>
//         <div className="landing_overlay">
//           <h1>all restaurants</h1>
//           <Link className="link1" to="/advertising/profile/:id">
//             Let's go
//           </Link>
//         </div>
//       </div>
//     </LandingStyling>
//   );
// };

const DataSection = ({ listAdService, type }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const defaultImage =
    "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png";
  return (
    <DataStyling>
      <h3 className="title">all {type}</h3>
      <hr />
      {/* <>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <>
           
          </>
        )}
      </> */}
      {listAdService.length ? (
        <Row gutter={[10, 10]}>
          {listAdService.map((data) => (
            <Col
              lg={{ span: 6 }}
              md={{ span: 8 }}
              sm={{ span: 12 }}
              xs={{ span: 24 }}
            >
              <div className="data_item" key={data._id}>
                {data.serviceUrl.length > 0 ? (
                  <img src={data.serviceUrl[0].url} alt="" />
                ) : (
                  <img src={defaultImage} alt="" />
                )}
                <div className="content">
                  <h5>{data.companyName}</h5>
                  <hr />
                  <p>Curabitur arcu erat, accumsan id imperdiet et</p>
                  <Link
                    onClick={() =>
                      history.push(`/advertising/profile/${data._id}`)
                    }
                    alt=""
                  >
                    {t("explore")}
                  </Link>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      ) : (
        <div className="empty_container">
          <h5>
            {" "}
            <span>Sorry !</span> we couldn't find any results matching "{type}"
          </h5>
          <Link to="/advertising" className="link">
            Back home
          </Link>
        </div>
      )}
    </DataStyling>
  );
};

const DataStyling = styled.section`
  text-align: center;
  height: 100%;
  margin-bottom: 20px;
  & .title {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
    margin-top: 20px;
    color: var(--white-color);
  }
  & hr {
    width: 100px;
    height: 2px;
    background: var(--white-color);
    margin: 10px auto;
  }
  & .data_item {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    border: 1px solid #999;
    border-radius: 0 30px 30px 0;
    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    & .content {
      padding: 10px;
      & h5 {
        text-transform: capitalize;
        letter-spacing: 0px;
        font-weight: 700;
        font-size: 0.9rem;
      }
      & hr {
        width: 80px;
        margin-left: auto;
        margin-right: auto;
      }
      & p {
        font-size: 0.9rem;
      }
      & a {
        color: #fff;
        background: var(--orange-color);
        padding: 7px 1.5rem;
        border-radius: 30px;
        text-decoration: none;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  & .empty_container {
    /* margin: 20px 0 25px 0; */
    height: 100%;
    & h5 {
      color: var(--white-color);
      & span {
        font-size: 1.4rem;
        font-weight: 700;
      }
    }
    & .link {
      color: #fff;
      background: var(--orange-color);
      padding: 5px 15px;
      &:hover {
        text-decoration: none;
        opacity: 0.9;
      }
    }
  }
`;

export default AllBrandScreen;
