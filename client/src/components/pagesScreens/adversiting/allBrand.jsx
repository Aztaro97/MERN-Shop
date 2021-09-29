import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import { filterByTypeBusiness } from "../../../flux/actions/advertisingAction/advertisingAction";
import { useDispatch, useSelector } from "react-redux";
import LoaderComponent from "../../loader";

function AllBrandScreen() {
  return (
    <main>
      <Landing />
      <div className="container my-5">
        <DataSection />
      </div>
    </main>
  );
}

const Landing = () => {
  return (
    <LandingStyling>
      <div>
        <div className="landing_overlay">
          <h1>all restaurants</h1>
          <Link className="link1" to="/advertising/profile/:id">
            Let's go
          </Link>
        </div>
      </div>
    </LandingStyling>
  );
};

const DataSection = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const type = params.typeBusiness;

  const { loading, listAdService, error } = useSelector(
    (state) => state.advertising
  );

  useEffect(() => {
    dispatch(filterByTypeBusiness(type));
  }, []);
  return (
    <DataStyling>
      <h3 className="title">all {type}</h3>
      <hr />
      <div className="grid">
        {loading ? (
          <LoaderComponent />
        ) : error ? (
          <h1>{error}</h1>
        ) : (
          listAdService.map((data, index) => (
            <div className="data_item" key={data._id}>
              <img src="/img/advertising/bg-images.jpeg" alt="" />
              <div className="content">
                <h5>{data.companyName}</h5>
                <hr />
                <p>
                  Curabitur arcu erat, accumsan id imperdiet et, porttitor at
                  sem. Lorem .
                </p>
                <a href={`/advertising/profile/${data._id}`} alt="">
                  explore
                </a>
              </div>
            </div>
          ))
        )}

        {/* <div className="data_item">
          <img src="/img/advertising/bg-images.jpeg" alt="" />
          <div className="content">
            <h5>restaurants</h5>
            <hr />
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem .
            </p>
            <a href="/advertising-profile" alt="">
              let's go
            </a>
          </div>
        </div>
        <div className="data_item">
          <img src="/img/advertising/bg-images.jpeg" alt="" />
          <div className="content">
            <h5>restaurants</h5>
            <hr />
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem .
            </p>
            <a href="/advertising-profile" alt="">
              let's go
            </a>
          </div>
        </div>
        <div className="data_item">
          <img src="/img/advertising/bg-images.jpeg" alt="" />
          <div className="content">
            <h5>restaurants</h5>
            <hr />
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem .
            </p>
            <a href="/advertising-profile" alt="">
              let's go
            </a>
          </div>
        </div>
        <div className="data_item">
          <img src="/img/advertising/bg-images.jpeg" alt="" />
          <div className="content">
            <h5>restaurants</h5>
            <hr />
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem .
            </p>
            <a href="/advertising-profile" alt="">
              let's go
            </a>
          </div>
        </div>
        <div className="data_item">
          <img src="/img/advertising/bg-images.jpeg" alt="" />
          <div className="content">
            <h5>restaurants</h5>
            <hr />
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem .
            </p>
            <a href="/advertising-profile" alt="">
              let's go
            </a>
          </div>
        </div>
        <div className="data_item">
          <img src="/img/advertising/bg-images.jpeg" alt="" />
          <div className="content">
            <h5>restaurants</h5>
            <hr />
            <p>
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Lorem .
            </p>
            <a href="/advertising-profile" alt="">
              let's go
            </a>
          </div>
        </div> */}
      </div>
    </DataStyling>
  );
};

const DataStyling = styled.section`
  text-align: center;
  & .title {
    font-size: 2rem;
    text-transform: capitalize;
  }
  & hr {
    width: 100px;
    height: 1px;
    background: var(--orange-color);
    margin: 10px auto;
  }
  & .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem;
    margin: 2rem 0;

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
          letter-spacing: 2px;
          font-weight: 700;
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
    @media only screen and (max-width: 1000px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
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
