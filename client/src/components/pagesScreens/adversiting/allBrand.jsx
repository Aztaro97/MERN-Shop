import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import { useParams, useHistory } from "react-router-dom";
import { filterBusiness } from "../../../flux/actions/advertisingAction/advertisingAction";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../loader";
import SecondeLandingSlider from "./Banner/secondeLanding";
import MainContainer from "../../MainContainer";
import ButtonComponeent from "../../ButtonComponeent";
import { Col, Row } from "antd";

function AllBrandScreen() {
  const params = useParams();
  const dispatch = useDispatch();
  const type = params.typeBusiness;

  const { loading, listAdService, error } = useSelector(
    (state) => state.advertising
  );

  const history = useHistory();
  useEffect(() => {
    dispatch(filterBusiness(type));
  }, [dispatch, type]);
  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          <SecondeLandingSlider />
          <div className="container my-5">
            <DataSection
              listAdService={listAdService}
              error={error}
              type={type}
            />
          </div>
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

const DataSection = ({ listAdService, error, type }) => {
  const { t } = useTranslation();
  const history = useHistory();
  const defaultImage = "https://socialistmodernism.com/wp-content/uploads/2017/07/placeholder-image.png";
  return (
    <DataStyling>
      <h3 className="title">all {type}</h3>
      <hr />
      <>
        {error ? (
          <h1>{error}</h1>
        ) : (
          <>
            {listAdService.length ? (
              <Row gutter={[10, 10]}>
                {listAdService.map((data) => (
                  <Col
                    lg={{ span: 6 }}
                    xs={{ span: 24 }}
                    sm={{ span: 12 }}
                    md={{ span: 8 }}
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
                        <Link to={`/advertising/profile/${data._id}`} alt="">
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
                  <span>Sorry !</span> we couldn't find any results matching "
                  {type}"
                </h5>
                <Link to="/" className="link">
                  Back home
                </Link>
              </div>
            )}
          </>
        )}
      </>
    </DataStyling>
  );
};

const DataStyling = styled.section`
  text-align: center;
  margin-bottom: 4rem;
  & .title {
    font-size: 1.5rem;
    text-transform: capitalize;
    font-weight: 700;
  }
  & hr {
    width: 100px;
    height: 1px;
    background: var(--orange-color);
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
    margin: 20px 0 25px 0;
    & h5 {
      & span {
        font-size: 1.4rem;
        color: var(--orange-color);
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

const LandingStyling = styled.div`
  & .landing_overlay {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.37298669467787116) 0%
      ),
      url("/img/advertising/bg-images.jpeg");
    height: 700px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-bottom: 3rem;

    & h1 {
      color: #fff;
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    & .link1 {
      display: block;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 40px;
      padding: 0.5rem;
      background: #fff;
      width: 160px;
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
      margin-left: 2rem !important;
      font-size: 1.3rem;
      cursor: pointer;
      background: var(--orange-color);

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export default AllBrandScreen;
