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
import { TiShoppingCart } from "react-icons/ti";

function PlaceOrder() {
  const [items, setItems] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const history = useHistory();

  const { id: paramId } = useParams();
  const dispatch = useDispatch();

  const { loading, success, error, order } = useSelector(
    (state) => state.orderDetails
  );

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    order &&
      order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );

  const shippingCost = order && order.shippingPrice.toFixed(2);

  const SubTotalPrice = (Number(itemsPrice) + Number(shippingCost)).toFixed(2);

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
  }, [paramId,  dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Container>
          <HeaderOrder>
            <Link className="link" onClick={() => history.goBack()}>
              Back
            </Link>
          </HeaderOrder>
          <Row className="row_container" gutter={[40, 10]}>
            <Col xs={{ span: 24 }}>
              <h2 className="id_title">
                Order Id : <span>{order._id}</span>{" "}
              </h2>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 14 }}>
              <div>
                <h1 className="title">shipping address</h1>
                <p>
                  Name: {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </p>

                <p>Phone Number: {order.shippingAddress.phoneNumber}</p>
                <p>Address: {order.shippingAddress.address}</p>
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
                <h1 className="title">shipping Details</h1>
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
                      <ModalStyling
                        cancelText="close"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        className="modal_container"
                      >
                        <Row gutter={[10, 10]}>
                          {item.image.map((img, index) => (
                            <Col xs={{ span: 8 }} md={{ span: 6 }} key={index}>
                              <img src={img.url} alt="" className="img" />
                            </Col>
                          ))}
                        </Row>
                      </ModalStyling>
                    </li>
                  ))}
                </ul>
              </div>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
              <div>
                <div className="card_summary">
                  <h1 className="title">Order Summary</h1>
                  <p>Total Items: {itemsPrice}</p>
                  <p>Shipping: {shippingCost} AED</p>
                  <p>Total Price: {SubTotalPrice} AED</p>
                </div>
                {!order.isPaid && (
                  <div className="checkout">
                    <Link className="link" to={`/checkout/${order._id}`}>
                      <span>checkout</span> <TiShoppingCart className="icon" />
                    </Link>
                  </div>
                )}
              </div>
            </Col>
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const HeaderOrder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2px 20px;
  & .link {
    border: 1px solid var(--silver-color);
    color: var(--silver-color);
    padding: 8px 20px;
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
    font-weight: 700;
    color: var(--orange-color);
    margin: 10px 0;
    letter-spacing: 1px;
    & span {
      color: var(--silver-color);
    }
  }

  & .title {
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--orange-color);
    letter-spacing: 1px;
  }
  & p {
    color: var(--silver-color);
    letter-spacing: 1px;
  }
  & .row_container {
    padding: 20px;

    & .status_paid {
      background: var(--orange-900-color);
      padding: 2px 20px;
      color: var(--dark-color);
      margin: 0 5px;
      letter-spacing: 1px;
    }
    & .status_not_paid {
      background: var(--orange-600-color);
      color: var(--dark-color);
      padding: 2px 20px;
      margin: 0 5px;
      letter-spacing: 1px;
    }
  }

  & .card_summary {
    background: var(--bg-color);
    color: #fff;
    padding: 20px;
    & .title {
      color: var(--orange-color);
      text-transform: uppercase;
    }
    & p {
      color: var(--silver-color);
    }
  }

  & .checkout {
    text-align: center;

    & .link {
      background: var(--orange-600-color);
      text-align: center;
      padding: 10px 20px;
      color: var(--dark-color);
      font-size: 1.4rem;
      text-decoration: none;
      text-transform: capitalize;
      letter-spacing: 1px;
      margin: 10px 0;
      display: inline-block;
      & .icon {
        font-size: 2rem;
      }
      &:hover {
        opacity: 0.9;
      }
    }
  }

  & .order_list {
    padding: 0;
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

  & .img {
    width: 100% !important;
  }
`;

const ModalStyling = styled(Modal)`
  & .ant-modal-body {
    background: var(--dark-light-color) !important;
  }
  & .ant-modal-footer {
    /* STYLING BTN CLOSE  */
    background: var(--dark-light-color) !important;
    border-top: none !important;
    & > button.ant-btn {
      display: block;
      margin-left: auto;
      border: 1px solid var(--silver-color);
      color: var(--silver-color);
      background: transparent;
      letter-spacing: 1px;
      &:hover {
        background: #333;
        border: none;
        color: #fff;
        border: 1px solid #ececec;
      }
    }

    /*   HIDE CLOSE BTN   */
    & > button.ant-btn.ant-btn-primary {
      display: none;
    }
  }

  & .img {
    width: 100% !important;
    height: 100px;
    object-fit: cover;
  }
`;

export default PlaceOrder;
