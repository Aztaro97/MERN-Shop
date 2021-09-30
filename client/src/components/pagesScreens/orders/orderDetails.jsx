import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, Image } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { MdDelete, AiOutlineCheck, FaTimes } from "react-icons/all";
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
  const { t } = useTranslation();
  const orderId = match.params.orderId || 1;

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, order } = useSelector((state) => state.orderDetails);

  const { userInfo } = useSelector((state) => state.userLogin);

  const showConfirm = (id) => {
    confirm({
      title: "Are you sure to delete this order ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, I'm",
      className: "modal_container",
      onOk() {
        dispatch(deleteOrderDetails(id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  const handleSetAllow = async (id) => {
    dispatch(setProductAllow(id, true));
  };

  const handleSetNotAllow = async (id) => {
    dispatch(setProductAllow(id, false));
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
          <>
            <Row>
              <h3>Order ID {order._id}</h3>
              <button onClick={() => showConfirm(order._id)}>
                {" "}
                delete
                <MdDelete  />
              </button>
            </Row>
            <Row>
              <Card>
                <h4>Customer</h4>
                <ul>
                  <li>
                    {" "}
                    <span>first name:</span> {order.shippingAddress.firstName}
                  </li>
                  <li>
                    {" "}
                    <span>last name:</span> {order.shippingAddress.lastName}
                  </li>
                  <li>
                    {" "}
                    <span>address:</span> {order.shippingAddress.address}{" "}
                  </li>
                  <li>
                    {" "}
                    <span>appartment Number:</span>{" "}
                    {order.shippingAddress.appartNumber}{" "}
                  </li>
                  <li>
                    {" "}
                    <span>city:</span> {order.shippingAddress.city}{" "}
                  </li>
                  <li>
                    {" "}
                    <span>phone:</span> {order.shippingAddress.phoneNumber}{" "}
                  </li>
                  <li>
                    {" "}
                    <span>region:</span> {order.shippingAddress.city}{" "}
                  </li>
                  <li>
                    {" "}
                    <span>country:</span> {order.shippingAddress.country}{" "}
                  </li>
                </ul>
              </Card>

              <Table>
                <thead>
                  <tr>
                    <th>items</th>
                    <th>quantity</th>
                    <th>price</th>
                    <th>total price</th>
                    <th>Merchant</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {order.orderItems.map((item) => (
                    <tr key={item._id}>
                      <td>
                        <div className="order_item">
                          <img src={item.image[0]} alt="" />
                          <p>{item.name}</p>
                        </div>
                      </td>
                      <td>{item.qty}x</td>
                      <td>{item.price} dh</td>
                      <td>{item.price * item.qty} dh</td>
                      <td>
                        <ul className="order_merchant">
                          <li>
                            {" "}
                            <span>name:</span> {item.merchant.name}{" "}
                          </li>
                          <li>
                            {" "}
                            <span>email:</span> {item.merchant.email}{" "}
                          </li>
                          <li>
                            {" "}
                            <span>phone:</span> {item.merchant.phoneNumber}{" "}
                          </li>
                        </ul>
                      </td>
                      {/* <td>
                      <div className="images_lists">
                        {item.image.map((img) => (
                          <Image className="img" src={img.url} />
                        ))}
                      </div>
                    </td>
                    <td>{item.brand}</td>
                    <td>{item.user.company.name}</td>
                    <td>
                      <a
                        style={{
                          fontSize: ".7rem",
                          textTransform: "lowercase",
                        }}
                        href={`mailto:${item.user.email}`}
                      >
                        {item.user.email}
                      </a>
                    </td>
                    <td className="allow_btn">
                      {item.allow && (
                        <button onClick={() => handleSetNotAllow(item._id)}>
                          <AiOutlineCheck className="allow_btn_accept" /> Accept
                        </button>
                      )}
                      {!item.allow && (
                        <button onClick={() => handleSetAllow(item._id)}>
                          <FaTimes className="allow_btn_refuse" /> Refuse
                        </button>
                      )}
                    </td>
                      */}
                      {/* <td>
                        <button
                          type="button"
                          className="delete_btn"
                          onClick={() => showConfirm(item._id)}
                        >
                          <MdDelete />
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </Row>
          </>
        )}
      </ProductContainer>
    </MainContainer>
  );
}

const ProductContainer = styled.div`
  padding: 0 10px;

  & h3 {
    text-align: center;
    text-transform: uppercase;
  }
`;

const Row = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  & button {
    border: none;
    background: var(--orange-color);
    color: #fff;
    padding:4px 10px;
    text-transform: uppercase;
  }

`;

const Table = styled.table`
  width: 100%;
  & thead {
    & tr {
      background: var(--orange-color);
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        font-weight: 700;
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        font-size: 0.8rem;
        & .delete_btn {
          outline: none;
          background: #eb4d4b;
          color: #fff;
          border: none;
          padding: 1px 12px;
          font-size: 1.2rem;
        }
        & .order_item {
          display: flex;
          & img {
            width: 100px;
            height: 100px;
          }
          & p {
            margin-left: 5px;
            font-weight: 700;
          }
        }
        & .order_merchant {
          text-transform: capitalize;
          list-style-type: none;
          & span {
            font-weight: 500;
          }
        }
      }
      & .allow_btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & button {
          outline: none;
          border: none;
          background: transparent;
          & .allow_btn_accept {
            color: green;
          }
          & .allow_btn_refuse {
            color: red;
          }
        }
      }
    }
  }
`;

const Card = styled.div`
  /* border: 1px solid #ececec; */
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;

  padding: 0.5em;
  & h4 {
    font-size: 1rem;
    color: var(--orange-color);
  }
  & ul {
    list-style: none;
    text-transform: capitalize;
    & li {
      font-size: 0.9rem;
      & span {
        font-weight: 700;
      }
    }
  }
`;

export default OrderDetailsScreen;
