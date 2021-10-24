import { Card, Col, Modal, Row } from "antd";
import React, { useEffect } from "react";
import { MdDelete } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  deleteAdService,
  getUserAdsService,
} from "../../../flux/actions/advertisingAction/advertisingAction";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";

const { Meta } = Card;

function MyAdsScreen() {
  const { userInfo } = useSelector((state) => state.userLogin);

  const { loading, listAdService, error } = useSelector(
    (state) => state.advertising
  );

  const history = useHistory();
  const dispatch = useDispatch();

  const showModal = (id) =>
    Modal.confirm({
      title: "Are you sure you want to delete",
      //   icon: <ExclamationCircleOutlined />,
      content: "When you delete your ads we'll not be show in website",
      okText: "Yes",
      cancelText: "Cancel",
      onOk: () => dispatch(deleteAdService(id)),
    });

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    } else {
      dispatch(getUserAdsService(userInfo._id));
    }
  }, [userInfo, history, dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Container>
          <div className="header">
            <div>
              <h2 className="title">My Ads</h2>
              <hr />
            </div>
            <Link to="/advertising/register" className="add_link">
              Add new ads
            </Link>
          </div>
          <Row gutter={[10, 10]}>
            {listAdService.map((ad) => (
              <Col
                xs={{ span: 12 }}
                md={{ span: 8 }}
                lg={{ span: 6 }}
                key={ad._id}
              >
                <CardStyling bordered={true} hoverable>
                  <button
                    className="btn_delete"
                    onClick={() => showModal(ad._id)}
                  >
                    <MdDelete className="icon" />
                  </button>
                  <img
                    width="100%"
                    height="150"
                    src={
                      ad.serviceUrl.length > 0
                        ? ad.serviceUrl[0].url
                        : "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                    }
                    alt=""
                  />

                  <p className="description">
                    Categorie: <span>{ad.typeBusiness}</span>
                  </p>
                </CardStyling>
              </Col>
            ))}
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div`
  padding-top: 20px;
  & .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 20px;
    padding: 0 20px;
    & .title {
      color: var(--orange-color);
      margin: 0;
    }
    & hr {
      height: 7px;
      background-color: var(--orange-color);
      outline: none;
      width: 100%;
      margin: 0;
    }
    & .add_link {
      text-transform: capitalize;
      color: #fff;
      background: var(--orange-color);
      padding: 4px 10px;
      text-decoration: none;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const CardStyling = styled(Card)`
  & .btn_delete {
    border: none;
    outline: none;
    position: absolute;
    background: none;
    right: 10px;
    top: 8px;
    background-color: #e2e2e2;
    border-radius: 50%;
    padding: 4px;
    & .icon {
      font-size: 1.8rem;
      color: var(--orange-color);
    }
  }
  & .description {
    padding-top: 10px;
    margin: 0;
    text-transform: capitalize;
    font-weight: 700;
    & span {
      color: #d35400;
    }
  }
`;

export default MyAdsScreen;
