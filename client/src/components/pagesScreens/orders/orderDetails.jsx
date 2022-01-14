import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, Image, Row, Col } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { AiOutlinePicture } from "react-icons/ai";
import Loader from "../../loader";
import {
  listProductsAdmin,
  deleteProduct,
  setProductAllow,
} from "../../../flux/actions/productAction";
import {
  getOrderDetails,
  deleteOrderDetails,
} from "../../../flux/actions/orderAction";
import MainContainer from "../../MainContainer";
import Pagination from "../../pagination";

const { confirm } = Modal;

function OrderDetailsScreen({ match }) {
  const [isModalVisible, setIsModalVisible] = useState(false);

  const { t } = useTranslation();
  const orderId = match.params.orderId || 1;

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, order, error } = useSelector((state) => state.orderDetails);

  const { userInfo } = useSelector((state) => state.userLogin);

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
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/auth");
    }

    dispatch(getOrderDetails(orderId));
  }, [dispatch, history, userInfo, orderId]);

  return (
    <MainContainer>
      <ProductContainer>
        {/* {loadingDelete && <Loader />} */}

        {loading ? (
          <Loader />
        ) : (
          <Row className="row_container" gutter={[40, 10]}>
            <Col xs={{ span: 24 }}>
              <h2 className="id_title">
                Order Id : <span>{order._id}</span>{" "}
              </h2>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 14 }}>
              <div>
                <h1 className="title">Customer Details</h1>
                <p>
                  Name: {order.shippingAddress.firstName}{" "}
                  {order.shippingAddress.lastName}
                </p>

                <p>
                  Phone Number:{" "}
                  <a href={`tel:${order.shippingAddress.phoneNumber}`}>
                    {order.shippingAddress.phoneNumber}
                  </a>{" "}
                </p>
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
                <h1 className="title">Payment</h1>
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
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 10 }}>
              <div>
                <h1 className="title">ORDER ITEMS</h1>
                <div className="order_list">
                  {order.orderItems.map((item, index) => (
                    <div key={index} className="order_item">
                      <p className="view_item" onClick={showModal}>
                        <AiOutlinePicture /> {item.name}
                      </p>
                      <p>
                        Price: {item.qty} x {item.price} AED
                      </p>
                      <p>Merchant Name : {item.merchant.name}</p>
                      <p>
                        Merchant Tel :
                        <a href={`tel:${item.merchant.phoneNumber}`}>
                          {item.merchant.phoneNumber}
                        </a>{" "}
                      </p>
                      <p>
                        Merchant Email :
                        <a href={`mailTo:${item.merchant.email}`}>
                          {item.merchant.email}
                        </a>{" "}
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
                    </div>
                  ))}
                </div>
              </div>

              <div style={{ marginTop: 20 }}>
                <h1 className="title">TOTAL ITEMS PRICE</h1>
                <p>Total: {order.totalPrice}</p>
                {/* <p>Total: {order.totalPrice}</p> */}
              </div>
            </Col>
          </Row>
        )}
      </ProductContainer>
    </MainContainer>
  );
}

const ProductContainer = styled.div`
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
  & a {
      color: var(--silver-color);
      text-decoration: none;
      margin: 0 5px;
    }
  & .row_container {
    padding: 20px;

    & .status_paid {
      background: var(--orange-700-color);
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
    & .order_item {
      border-top: 1px solid var(--silver-color);
      border-bottom: 1px solid var(--silver-color);
    }
    & p {
      margin: 10px 0;
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

export default OrderDetailsScreen;
