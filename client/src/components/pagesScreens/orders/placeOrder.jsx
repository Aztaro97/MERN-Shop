import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { AiOutlinePicture } from "react-icons/ai";
import { GrView } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import { getOrderDetails } from "../../../flux/actions/orderAction";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";
import { Modal, Button } from "antd";

function PlaceOrder() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const { id: paramId } = useParams();
  const dispatch = useDispatch();

  const { paymentMethod } = useSelector((state) => state.cart);

  const { loading, success, error, order } = useSelector(
    (state) => state.orderDetails
  );

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  useEffect(() => {
    dispatch(getOrderDetails(paramId));
  }, [paramId, dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Container>
          <h2 className="id_title">Order Id : {order._id}</h2>
          <Row className="row_container" gutter={[20, 10]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 14 }}>
              <div>
                <h1 className="title">shipping address</h1>
                <p>
                  Name: {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </p>

                <p>Phone Number: {order.shippingAddress.phoneNumber}</p>
                <p>Address: {order.shippingAddress.Adress}</p>
                <p>City: {order.shippingAddress.city}</p>
                <p>
                  Country: {order.shippingAddress.country} / Region:{" "}
                  {order.shippingAddress.region}{" "}
                </p>
                <p>
                  Status:
                  {order.isPaid ? (
                    <span className="status_paid">Paid</span>
                  ) : (
                    <span className="status_not_paid">Not Paid</span>
                  )}{" "}
                </p>
              </div>
              <hr />
              <div>
                <h1 className="title">shipping address</h1>
                <p>
                  Payment Method:{" "}
                  {order.paymentMethod === "credit"
                    ? "Credit Card"
                    : "Cash on delivered"}
                </p>
                <p>
                  Status:{" "}
                  {order.isDelivered ? (
                    <span className="status_paid">Delivered</span>
                  ) : (
                    <span className="status_not_paid">Not Delivered</span>
                  )}{" "}
                </p>
              </div>
              <hr />
              <div>
                <h1 className="title">ORDER ITEMS</h1>
                <ul className="order_list">
                  {order.orderItems.map((item, index) => (
                    <li key={index}>
                      <p className="view_item" onClick={showModal}>
                        <AiOutlinePicture /> {item.name}
                      </p>
                      <p>
                        Price: {item.qty} x {item.price} AED
                      </p>
                      <Modal
                        // title="Basic Modal"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                      >
                        <Row gutter={[10, 10]}>
                          {item.image.map((url, index) => (
                            <Col xs={{ span: 8 }} md={{ span: 6 }} key={index}>
                              <img src={url} alt="" />
                            </Col>
                          ))}
                        </Row>
                      </Modal>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
              <div className="card_summary">
                <h1 className="title">Order Summary</h1>
                <p>Items: $0</p>
                <p>Shipping: {order.shippingPrice} AED</p>
                <p>Total Price: {order.totalPrice} AED</p>
              </div>
            </Col>
          </Row>
          <FooterOrder>
            <Link className="link" onClick={() => history.goBack()}>
              Back
            </Link>
          </FooterOrder>
        </Container>
      )}
    </MainContainer>
  );
}

const FooterOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px;
  & .link {
    color: #333;
    background: #ececec;
    padding: 10px 20px;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ececec;
      background: #333;
    }
  }
`;

const Container = styled.div`
  padding: 30px 0;
  & .id_title {
    font-size: 1.4rem;
    font-weight: 400;
    text-transform: uppercase;
  }

  & .title {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: #333333da;
  }
  & p {
    color: #333;
  }
  & .row_container {
    padding: 20px;

    & .status_paid {
      background: #22a6b3;
      padding: 2px 20px;
      color: #fff;
      margin: 0 5px;
    }
    & .status_not_paid {
      background: #ff7f50;
      padding: 2px 20px;
      margin: 0 5px;
    }
  }

  & .card_summary {
    background: #ececec;
    color: #fff;
    padding: 20px;
    & .title {
      color: #333;
      text-transform: uppercase;
    }
    & p {
      color: #333;
    }
  }

  & .order_list {
    & li {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & .view_item {
      cursor: pointer;
      &:hover {
        color: var(--orange-color);
      }
    }
  }
`;

export default PlaceOrder;
