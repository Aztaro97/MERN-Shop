import React, {useEffect} from  "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import {useDispatch, useSelector } from "react-redux"
import {listMyOrders} from "../../../flux/actions/orderAction"

function OrdersScreen() {

  const dispatch = useDispatch();

  const { loading: loadingOrders, error: errorOrders, orders } = useSelector((state) => state.orderListMy)

  useEffect(() => {
    dispatch(listMyOrders())
  }, [dispatch])
  return (
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
            <tr>
              <td>6598974554</td>
              <td>01/05/2012</td>
              <td>10500</td>
              <td>yes</td>
              <td>yes</td>
            </tr>
          </tbody>
        </Table>
      </OrderContainer>
    </MainContainer>
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
