import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTimesCircle, FcPaid, GiPlainCircle } from "react-icons/all";
import MainContainer from "../../MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../../../flux/actions/orderAction";
import LoaderComponent from "../../loader";
import { useHistory } from "react-router";
import moment from "moment";
import ErrorServerPage from "../ErrorServerPage";
import { Link } from "react-router-dom";
import { Col, Row } from "antd";

const emptyImg = "/img/ecommerce/empty.jpg";

function OrdersScreen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error, orders } = useSelector((state) => state.orderListMy);
  const { userInfo } = useSelector((state) => state.userLogin);

  if (!userInfo) {
    history.push("/auth");
  }

  // const orderItems = orders && orders.orderItems;

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  console.log(orders);
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <MainContainer>
          <Container>
            <h3 className="title">My Order History</h3>

            {orders.map((order) => (
              <div className="_card" key={order._id}>
                {order.isDelivered ? (
                  <div className="_status">
                    <GiPlainCircle className="icon delivery" />{" "}
                    <span>
                      Delivery on{" "}
                      {moment(order.deliveredAt).format("DD.MM.YYYY, h:mm a")}{" "}
                    </span>
                  </div>
                ) : (
                  <div className="_status">
                    <GiPlainCircle className="icon" /> <span>dispatched</span>
                  </div>
                )}
                <Row className="_card_item" gutter={[40, 20]}>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    {order.orderItems.map((item, index) => (
                      <div className="_product_row" key={index}>
                        <div>
                          <img
                            src={
                              item.image.length > 0
                                ? item.image[0].url
                                : emptyImg
                            }
                            alt=""
                            className="product_img"
                          />
                        </div>
                        <div>
                          <p className="product_name">{item.name}</p>
                        </div>
                      </div>
                    ))}
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 12 }}>
                    <Link to={`/order/${order._id}`} className="_link">
                      view order details
                    </Link>
                  </Col>
                </Row>
              </div>
            ))}
          </Container>
          {/* <OrderContainer>
            <h3>My Order</h3>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
                  <th>date</th>
                  <th>total</th>
                  <th>paid</th>
                  <th>delivered</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {orders.map((order) => (
                  <tr key={order._id}>
                    <td className="orderId">{order._id}</td>
                    <td className="date">
                      {moment(order.createdAt).format("MMM DD, YYYY")}
                    </td>
                    <td>{order.totalPrice} dh</td>

                    <td>
                      {order.isPaid ? (
                        <>
                          {" "}
                          <FcPaid size={20} style={{ color: "green" }} />{" "}
                          {order.paidAt.substring(0, 10)}{" "}
                        </>
                      ) : (
                        <FaTimesCircle style={{ color: "#ff7979" }} />
                      )}
                    </td>
                    <td>
                      {order.isDelivered ? (
                        moment(order.deliveredAt).format("DD.MM.YYYY, h:mm a")
                      ) : (
                        <FaTimesCircle style={{ color: "#ff7979" }} />
                      )}
                    </td>
                    <LinkStyling to={`/order/${order._id}`}>
                      details
                    </LinkStyling>
                  </tr>
                ))}
              </tbody>
            </Table>
            {orders.length === 0 && (
              <div className="Empty_content">
                <h4>You have not placed any orders !!!</h4>
              </div>
            )}
          </OrderContainer> */}
        </MainContainer>
      )}
    </>
  );
}

const Container = styled.div`
  padding: 2rem;

  & .title {
    color: var(--orange-color);
    text-align: center;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  & ._card {
    padding: 10px;
    margin-bottom: 2rem;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    & ._status {
      display: flex;
      align-items: center;
      gap: 0.5em;
      padding: 10px 0;
      color: var(--silver-color);
      & .icon {
        color: var(--orange-color);
      }
      & .icon.delivery {
        color: var(--silver-color);
      }
    }
    & ._card_item {
      & ._product_row {
        border-bottom: 1px solid #ffffff22;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 10px;
        padding: 10px !important;
        background: var(--bg-color);
      }

      & .product_name {
        font-size: 1.2rem;
        font-weight: 700;
        color: var(--silver-color);
        text-align: center;
      }
      & ._link {
        border: 1px solid var(--silver-color);
        padding: 8px 2rem 0.5rem;
        color: var(--silver-color);
        text-decoration: none;
        letter-spacing: 1px;
        display: inline-block;
        &:hover {
          opacity: 0.9;
        }
      }
    }
    & .product_img {
      width: 100px;
      height: 100%;
    }
  }
`;

const OrderContainer = styled.div`
  padding: 0 1rem;
  & h3 {
    text-align: center;
    text-transform: uppercase;
  }
`;

const Table = styled.table`
  width: 100%;
  & thead {
    & tr {
      background: var(--orange-color);
      padding: 10px 0;
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px auto;
        text-transform: capitalize;
        /* font-weight: 700; */
        color: #fff;
        font-size: 1rem;
        text-align: center;
        border-right: 1px solid #ececec9d;
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
        font-size: 1rem;
        text-align: center;
      }
      & td.orderId {
        /* font-size: 1rem; */
      }
      & td.date {
        text-transform: capitalize;
      }
    }
  }

  & .Empty_content {
    text-align: center;
    width: 100%;
    padding: 2rem 0;
    display: flex;
    justify-content: center;
    & h4 {
      margin-top: 25px;
      font-size: 1rem;
      text-align: center;
    }
  }
`;

const LinkStyling = styled(Link)`
  color: #333;
  background-color: #ececec;
  text-decoration: none;
  text-transform: capitalize;
  padding: 5px 10px;
  display: inline-block;
  margin: auto;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #333;
    color: #fff;
  }
`;

export default OrdersScreen;
