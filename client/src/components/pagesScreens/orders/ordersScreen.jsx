import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTimesCircle, FcPaid } from "react-icons/all";
import MainContainer from "../../MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../../../flux/actions/orderAction";
import LoaderComponent from "../../loader";
import { useHistory } from "react-router";
import moment from "moment";

function OrdersScreen() {
  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error, orders } = useSelector((state) => state.orderListMy);
  const { userInfo } = useSelector((state) => state.userLogin);

  if (!userInfo) {
    history.push("/auth");
  }

  useEffect(() => {
    dispatch(listMyOrders());
  }, [dispatch]);

  console.log(orders);
  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h5>Error : {error}</h5>
      ) : (
        <MainContainer>
          <OrderContainer>
            <h3>My Order</h3>
            <Table>
              <thead>
                <tr>
                  <th>id</th>
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
                    <td>
                      {moment(order.createdAt).format("DD-MM-YYYY")}
                    </td>
                    <td>{order.totalPrice} dh</td>
                    {/* <td>{order.user && order.user.name}</td> */}

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
                        // order.deliveredAt.substring(0, 10)
                        moment(order.deliveredAt).format("DD-MM-YYYY, h:mm a")
                      ) : (
                        <FaTimesCircle style={{ color: "#ff7979" }} />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {orders.length === 0 && (
              <div className="Empty_content">
                <h4>You have not placed any orders !!!</h4>
              </div>
            )}
          </OrderContainer>
        </MainContainer>
      )}
    </>
  );
}

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

export default OrdersScreen;
