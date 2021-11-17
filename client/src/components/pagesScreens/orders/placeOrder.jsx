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
    if (order?._id !== paramId) dispatch(getOrderDetails(paramId));
  }, [paramId, order, dispatch]);

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
                      <ModalStyling
                        cancelText="close"
                        visible={isModalVisible}
                        onOk={handleOk}
                        onCancel={handleCancel}
                        className="modal_container"
                      >
                        <Row gutter={[10, 10]}>
                          {item.image.map((url, index) => (
                            <Col xs={{ span: 8 }} md={{ span: 6 }} key={index}>
                              <img src={url} alt="" />
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
              <div className="card_summary">
                <h1 className="title">Order Summary</h1>
                <p>Total Items: {itemsPrice}</p>
                <p>Shipping: {shippingCost} AED</p>
                <p>Total Price: {SubTotalPrice} AED</p>
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

const ModalStyling = styled(Modal)`
  & .ant-modal-footer {
    /* STYLING BTN CLOSE  */
    & > button.ant-btn {
      display: block;
      margin-left: auto;
      border: 1px solid #ececec;
      color: #333;
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
`;

export default PlaceOrder;
