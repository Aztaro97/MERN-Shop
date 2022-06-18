import React, { useEffect } from "react";
import styled from "styled-components";
import ButtonC from "../../ButtonComponeent";
import { Link, useHistory, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getOrderDetails } from "../../../flux/actions/orderAction";
import {
  ORDER_PAY_RESET,
  ORDER_DELIVER_RESET,
} from "../../../flux/constants/orderConstants";
import MainContainer from "../../MainContainer";
import StripePayment from "../checkout/stripe/stripeContainer";

import piture from "../../../img/card_pic.png";
import LoaderComponent from "../../loader";
import { Col, Row } from "antd";
import CardItemDetails from "./cardDetails";

function CompletePayement() {
  let ShippingCost = 45;

  const history = useHistory();
  const dispatch = useDispatch();

  const { id: paramId } = useParams();

  const { loading: loadingOrder, success, error, order } = useSelector(
    (state) => state.orderDetails
  );

  const cartItems = order?.orderItems;

  // const { loading: loadingShipping, shippingAddress, cartItems } = useSelector(
  //   (state) => state.cart
  // );
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay
  );

  const { userInfo } = useSelector((state) => state.userLogin);

  // COST CALCULATE  ///////////////////////////////
  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    cartItems?.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = addDecimals(itemsPrice < 100 ? 50 : 100);

  const totalPrice = (Number(itemsPrice) + Number(shippingPrice)).toFixed(2);

  //  Check if item is paid
  if (order && order.isPaid) {
    history.push(`/order/${order?._id}`);
  }

  useEffect(() => {
    dispatch(getOrderDetails(paramId));
    if (!userInfo) {
      history.push("/auth");
    }
  }, [dispatch, history, paramId, userInfo]);

  return (
    <>
      {loadingPay || loadingOrder ? (
        <LoaderComponent />
      ) : (
        <MainContainer>
          <Container>
            <Header>
              <a href="#/" onClick={() => history.goBack()}>
                Back
              </a>
              <h2>COMPLETE PAYEMENT</h2>
            </Header>
            <Row gutter={[50, 10]} style={{ padding: "0 10px" }}>
              <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                <StripePayment totalPrice={totalPrice} />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
                <CardItemDetails
                  cartItems={cartItems}
                  ShippingCost={ShippingCost}
                  totalPrice={totalPrice}
                />
              </Col>
            </Row>
          </Container>
        </MainContainer>
      )}
    </>
  );
}

const Container = styled.div`
  margin-top: 2rem;
`;

const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & a {
    text-decoration: none;
    color: var(--silver-color);
    padding: 5px 10px;
    border: 1px solid var(--silver-color);
    font-weight: 700;
    position: relative;
    top: 1.4rem;
    &:hover {
      opacity: 0.8;
    }
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const ContainerCart = styled.div`
  background: transparent;
  padding: 2rem;
  & hr {
    border: none;
    outline: none;
    height: 0.7px;
    background: #fff;
  }
  & form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5px;
    margin: 1.4rem 0;

    & input {
      border: 1px solid #fff;
      outline: none;
      background: transparent;
      color: #fff;
      border-radius: 5px;
      padding: 0.3rem 1rem;
      min-width: 100px;
      height: 3rem;
    }
  }
  & .solde {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    & h1 {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
      color: var(--silver-color);
    }
    & h1:nth-child(2) {
      color: var(--silver-color);
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

const Card = styled.div`
  display: flex;

  & .card__image {
    & img {
      width: 130px;
      height: 140px;
      border-radius: 10px;
      border: 1px solid var(--orange-color);
    }
    & .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      color: #fff;
      border-radius: 50%;
      background: #9fa1a1;
      margin: 0;
      max-width: 40px;
      height: 40px;
      position: relative;
      bottom: 9.7rem;
      left: 6.6rem;
      object-fit: cover;
      @media only screen and (max-width: 768px) {
        bottom: 11rem;
        left: 7.5rem;
      }
      @media only screen and (max-width: 430px) {
        bottom: 13rem;
        left: 9rem;
      }
    }
  }

  & .card__details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    padding-left: 1.7rem;

    & h1 {
      font-size: 0.8rem;
      font-weight: 700;
    }
    & h1:nth-child(1) {
      /* margin-left: 1.7rem; */
    }
    & h1:nth-child(2) {
      color: #fff;
    }
    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }
`;

export default CompletePayement;
