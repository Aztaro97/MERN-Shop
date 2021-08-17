import React, { useEffect } from "react";
import styled from "styled-components";
import { FaTimesCircle, FcPaid } from "react-icons/all";
import MainContainer from "../../MainContainer";
import { useDispatch, useSelector } from "react-redux";
import { listMyOrders } from "../../../flux/actions/orderAction";
import LoaderComponent from "../../Loader";

function OrdersScreen() {
  const dispatch = useDispatch();

  const { loading, error, orders } = useSelector((state) => state.orderListMy);

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
                    <td>{order.createdAt.substring(0, 10)}</td>
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
                        order.deliveredAt.substring(0, 10)
                      ) : (
                        <FaTimesCircle style={{ color: "#ff7979" }} />
                      )}
                    </td>
                  </tr>
                ))}
                
              </tbody>
            </Table>
          </OrderContainer>
        </MainContainer>
      )}
    </>
  );
}

const OrderContainer = styled.div`
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
        text-transform: uppercase;
      }
    }
  }
`;

export default OrdersScreen;
