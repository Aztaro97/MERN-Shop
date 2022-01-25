import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Select } from "antd";
import {
  FaTimesCircle,
  ImCreditCard,
  GrView,
  GrDeliver,
  FaMoneyBillAlt,
} from "react-icons/all";
import { useTranslation } from "react-i18next";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { listOrders, deliverOrder } from "../../../flux/actions/orderAction";
// import MainContainer from "../../MainContainer";
import Loader from "../../loader";
import MainContainer from "../../MainContainer";

const { Option } = Select;

function OrdersListScreen() {
  const [actionValue, setActionValue] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  const { t } = useTranslation();

  const { userInfo } = useSelector((state) => state.userLogin);
  const { success } = useSelector((state) => state.orderDeliver);
  const { loading, error, orders } = useSelector((state) => state.orderList);

  const handleAction = ({ value }, { order }) => {
    setActionValue(value);
    // dispatch(deliverOrder(order))
    if (value === "accept") {
      dispatch(deliverOrder(order));
      if (success) {
        dispatch(listOrders());
      }
    }
  };

  useEffect(() => {
    if (userInfo && userInfo.isAdmin) {
      dispatch(listOrders());
    } else {
      history.push("/auth");
    }
  }, [dispatch, history, userInfo]);
  return (
    <MainContainer>
      <OrderContainer>
        <h3>{t("all_orders_lists")}</h3>
        {loading ? (
          <Loader />
        ) : error ? (
          <h3>Error: {error}</h3>
        ) : (
          <Table>
            <thead>
              <tr>
                {/* <th>{t("order_number")}</th> */}
                <th>{t("custom_name")}</th>
                <th>{t("date")}</th>
                <th>{t("total")}</th>
                <th>{t("paid")}</th>
                {/* <th>{t("payment_method")}</th> */}
                <th>{t("status_order")}</th>
                <th>{t("detail")}</th>
                <th>{t("actions")}</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  {/* <td>{order._id}</td> */}
                  <td>
                    {order.shippingAddress &&
                      order.shippingAddress.firstName +
                        " " +
                        order.shippingAddress.lastName}
                  </td>
                  <td>{order.createdAt.substring(0, 10)}</td>
                  <td>{order.totalPrice} dh</td>
                  <td>
                    {order.isPaid ? (
                      <>
                        {/* {" "}
                        <FcPaid size={20} style={{ color: "green" }} />{" "}
                        {order.paidAt.substring(0, 10)}{" "} */}
                        <div className="order_status_devd">
                          <p>{t("paid")}</p>
                        </div>
                      </>
                    ) : (
                      <FaTimesCircle style={{ color: "#ff7979" }} />
                    )}
                  </td>

                  {/* <td>
                    {order.paymentMethod === "credit" ? (
                      <div className="payment_credit">
                        <span>{t("credit_card")}</span> <ImCreditCard />
                      </div>
                    ) : (
                      <div className="payment_cash">
                        <span>{t("cash_on_delivery")}</span> <FaMoneyBillAlt />
                      </div>

                    )}
                  </td> */}

                  <td>
                    {order.isDelivered ? (
                      // order.deliveredAt.substring(0, 10)
                      <div className="order_status_devd">
                        <p>{t("delivered")}</p>
                      </div>
                    ) : (
                      <div className="order_status_new">
                        <p>{t("new_order")}</p>
                      </div>
                      // <FaTimesCircle style={{ color: "#ff7979" }} />
                    )}
                  </td>
                  <td>
                    <Link
                      to={`/admin/order/${order._id}`}
                      className="view_link"
                    >
                      <span>{t("view")}</span> <GrView className="icon" />
                    </Link>
                  </td>
                  <td>
                    <SelectCustom
                      defaultValue={t("select")}
                      style={{ width: 120 }}
                      onChange={(e) =>
                        handleAction({ value: e }, { order: order })
                      }
                    >
                      <Option value="accept">
                        {t("delivered")}{" "}
                        <GrDeliver style={{ color: "#00b894 !impotant" }} />
                      </Option>
                      {/* <Option value="reject">Reject</Option> */}
                      <Option value="delete">{t("delete")}</Option>
                    </SelectCustom>
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
  max-width: 2000px;
  padding: 2rem 1rem;
  min-height: 50vh;
  & h3 {
    text-align: center;
    text-transform: uppercase;
    color: var(--silver-color);
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 2rem;
  }
`;

const Table = styled.table`
  width: 100%;
  & thead {
    & tr {
      border-bottom: 2px solid var(--silver-color);
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        color: var(--silver-color);
        font-size: 1rem;
        letter-spacing: 1px;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    padding: 20px 0;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        font-size: 1rem;
        color: var(--silver-color);
      }
    }
  }

  & .order_status_new,
  .order_status_devd,
  .payment_cash,
  .payment_credit {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;

    & p {
      margin-bottom: 0;
      text-transform: capitalize;
      padding: 4px 10px;
      font-size: 0.8rem;
    }
  }
  & .order_status_devd {
    background: #7dd8be94;
    & p {
      color: #058d8b;
      color: #222;
    }
  }
  & .order_status_new {
    background: #fab1a0;
    & p {
      color: #111;
    }
  }
  .payment_cash {
    background: #b2bec3;
    padding: 4px;
    & span {
      color: #222;
      text-transform: uppercase;
    }
  }
  .payment_credit {
    background: #2d3436;
    padding: 4px;
    color: #fff;
    & span {
      color: #fff;
      text-transform: uppercase;
    }
  }

  & .view_link {
    text-decoration: none;
    color: var(--silver-color);
    & span {
    }
  }
`;

const SelectCustom = styled(Select)`
  & .ant-select-selector {
    background: transparent !important;
    color: #fff !important;
    border: 1px solid var(--silver-color) !important;
  }
`;

export default OrdersListScreen;
