import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Select } from "antd";
import { FaTimesCircle, ImCreditCard, GrView, GrDeliver, FaMoneyBillAlt } from "react-icons/all";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listOrders, deliverOrder } from "../../../flux/actions/orderAction";
import MainContainer from "../../MainContainer";
import Loader from "../../Loader";

const { Option } = Select;

function OrdersListScreen() {
  const [actionValue, setActionValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, orders } = useSelector((state) => state.orderList);

  const handleAction = ({ value }, { order }) => {
    setActionValue(value);
    console.log(value);
    // dispatch(deliverOrder(order))
    if (value === "accept") {
      dispatch(deliverOrder(order));
    }
  };

  const handleSetDelivered = (id) => {
    console.log(id);
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo, listOrders]);
  return (
    <MainContainer>
      <OrderContainer>
        <h3>all orders lists</h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>Error: {error}</h3>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>order number</th>
                <th>user</th>
                <th>date</th>
                <th>total</th>
                <th>paid</th>
                <th>Payment Method</th>
                <th>Status order</th>
                <th>Details</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.user && order.user.name}</td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice} dh</td>
                  <td>
                    {order.isPaid ? (
                      <>
                        {/* {" "}
                        <FcPaid size={20} style={{ color: "green" }} />{" "}
                        {order.paidAt.substring(0, 10)}{" "} */}
                        <div className="order_status_devd">
                          <p>Paid</p>
                        </div>
                      </>
                    ) : (
                      <FaTimesCircle style={{ color: "#ff7979" }} />
                    )}
                  </td>

                  <td>
                    {order.paymentMethod === "credit" ? (
                      // order.deliveredAt.substring(0, 10)
                      <div className="order_status_devd">
                        cash <ImCreditCard />
                      </div>
                    ) : (
                      <div className="order_status_devd">
                      card <FaMoneyBillAlt />
                    </div>
                      // <FaTimesCircle style={{ color: "#ff7979" }} />
                    )}
                  </td>


                  <td>
                    {order.isDelivered ? (
                      // order.deliveredAt.substring(0, 10)
                      <div className="order_status_devd">
                        <p>Delivered</p>
                      </div>
                    ) : (
                      <div className="order_status_new">
                        <p>new order</p>
                      </div>
                      // <FaTimesCircle style={{ color: "#ff7979" }} />
                    )}
                  </td>
                  <td>
                    <Link to="#" className="view_link">
                      <GrView className="icon" />
                    </Link>
                  </td>
                  <td>
                    <Select
                      defaultValue="Select"
                      style={{ width: 120 }}
                      // allowClear
                      onChange={(e) =>
                        handleAction({ value: e }, { order: order })
                      }
                    >
                      <Option value="accept">
                        Delivered{" "}
                        <GrDeliver style={{ color: "#00b894 !impotant" }} />
                      </Option>
                      {/* <Option value="reject">Reject</Option> */}
                      <Option value="delete">Delete</Option>
                    </Select>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </OrderContainer>
    </MainContainer>
  );
}

const OrderContainer = styled.div`
  padding: 0 10px;
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
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        /* font-weight: 700; */
        color: #fff;
        font-size: .8rem;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        font-size: .8rem;
        /* text-transform: uppercase; */
      }
    }
  }

  & .order_status_new,
  .order_status_devd {
    background: #fab1a0;
    display: flex;
    align-items: center;
    justify-content: center;

    & p {
      margin-bottom: 0;
      text-transform: capitalize;
      padding: 4px 10px;
      color: #222;
      font-size: .8rem;
    }
  }
  & .order_status_devd {
    background: #7dd8be94;
    & p {
      color: #058d8b;
    }
  }

  & .view_link .icon {
    &:hover {
      color: var(--orange-color);
    }
  }
`;

export default OrdersListScreen;
