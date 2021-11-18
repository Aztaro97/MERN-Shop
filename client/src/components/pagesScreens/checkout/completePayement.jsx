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

function CompletePayement() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { id: paramId } = useParams();

  const { loading: loadingOrder, success, error, order } = useSelector(
    (state) => state.orderDetails
  );

  const cartItems = order?.cartItems

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

  useEffect(() => {
    if (!userInfo) {
      history.push("/auth");
    }
    if (order?._id !== paramId) dispatch(getOrderDetails(paramId));
  }, [dispatch, history, paramId, order, userInfo]);

  return (
    <>
      {loadingPay || loadingOrder ? (
        <LoaderComponent />
      ) : (
        <MainContainer>
          <Header>
            <Link className="link" onClick={() => history.goBack()}>
              Back
            </Link>
            <h2>COMPLETE PAYEMENT</h2>
          </Header>
          <Row>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <SectionLeft>
                <div>
                  <h4>Card Information</h4>
                  <StripePayment totalPrice={totalPrice} />
                </div>
              </SectionLeft>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <ContainerCart>
                {cartItems?.length > 0 &&
                  cartItems.map((item) => (
                    <Card key={item._id}>
                      <div class="card__image">
                        <img src={item.image} alt="" />
                        <p className="quantity">{item.qty}</p>
                      </div>
                      <div class="card__details">
                        <h1 class="card__title">{item.name}</h1>
                        <h1 class="card__price">{item.price} AED</h1>
                      </div>
                    </Card>
                  ))}

                <hr />
                <div className="solde">
                  <h1>subtotal</h1>
                  <h1>
                    aed{" "}
                    {cartItems?.reduce((acc, item) => acc + item.qty * item.price, 0)
                      .toFixed(2)}{" "}
                  </h1>
                </div>
                <div className="solde">
                  <h1>shipping</h1>
                  <h1>aed {shippingPrice}</h1>
                </div>
                <hr />
                <div className="solde">
                  <h1>subtotal</h1>
                  <h1>aed {totalPrice}</h1>
                </div>
              </ContainerCart>
            </Col>
          </Row>
        </MainContainer>
      )}
    </>
  );
}

const SectionLeft = styled.div`
  padding: 2rem;
  border: 1px solid #ececec;

  & h1 {
    color: var(--orange-color);
    text-transform: uppercase;
  }
  & p {
    color: var(--silver-color);
    margin-bottom: 0;
  }
  & .btn {
    position: relative;
    top: 3rem;
  }
  & .row {
    display: flex;
    /* justify-content: center; */
    align-items: center;

    & .link {
      color: var(--orange-color);
      /* margin-left: 2rem; */
    }

    & .link_back {
      color: var(--orange-color);
      margin-left: 2rem;
      text-transform: uppercase;
      font-weight: 700;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
    grid-row-start: 2;
  }
`;

const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & .link {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 1.4rem;
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
  background: var(--orange-color);
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
    }
    & h1:nth-child(2) {
      color: #fff;
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
