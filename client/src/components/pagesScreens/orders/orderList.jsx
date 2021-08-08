import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTimesCircle } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listOrders } from "../../../flux/actions/orderAction";
import MainContainer from "../../MainContainer";
import Loader from "../../Loader";

function OrdersListScreen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, error, orders } = useSelector((state) => state.orderList);

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/login");
    }
  }, [dispatch, history, userInfo]);
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
                <th>id</th>
                <th>user</th>
                <th>date</th>
                <th>total</th>
                <th>paid</th>
                <th>delivered</th>
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
                      order.paidAt.substring(0, 10)
                    ) : (
                      <FaTimesCircle style={{ color: "#ff7979" }} />
                    )}
                  </td>
                  <td>
                  {order.isDelivered ? (
                    order.deliveredAt.substring(0, 10)
                  ) : (
                    <FaTimesCircle style={{ color: "#ff7979" }} />
                  )}
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
        font-weight: 700;
        color: #fff;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        /* text-transform: uppercase; */
      }
    }
  }
`;

export default OrdersListScreen;
