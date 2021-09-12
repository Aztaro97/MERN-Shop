import React, { useEffect } from "react";
import styled from "styled-components";
import ButtonC from "../../ButtonComponeent";
import { Link, useHistory } from "react-router-dom";
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

function CompletePayement() {
  const history = useHistory();
  const dispatch = useDispatch();

  const { loading: loadingShipping, shippingAddress } = useSelector(
    (state) => state.cart
  );
  // const {shippingAddress} = useSelector(state => state.cart)
  const { loading: loadingPay, success: successPay } = useSelector(
    (state) => state.orderPay
  );
  const { loading: loadingDeliver, success: successDeliver } = useSelector(
    (state) => state.orderDeliver
  );
  const { order, loading, error } = useSelector((state) => state.orderCreate);
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/auth");
    }
    // if (!order || successPay || successDeliver) {
    //   dispatch({ type: ORDER_PAY_RESET });
    //   dispatch({ type: ORDER_DELIVER_RESET });
    // dispatch(getOrderDetails(order._id));
    // }
  }, [dispatch, userInfo]);

  return (
    <>
      {loadingShipping || loading ? (
        <LoaderComponent />
      ) : (
        <MainContainer>
          <Header>
            <a href="#/" onClick={() => history.goBack()}>
              Back
            </a>
            <h2>COMPLETE PAYEMENT</h2>
          </Header>
          <Grid>
            <SectionLeft>
              <Border>
                <div className="row">
                  <div>
                    <h2>contact</h2>
                    <p>{shippingAddress.email}</p>
                  </div>
                </div>
                <hr />
                <div className="row">
                  <div>
                    <h2>address</h2>
                    <p>
                      {shippingAddress.address}, {shippingAddress.city},
                      {shippingAddress.country}
                    </p>
                  </div>
                </div>
              </Border>
              <Border>
                <div className="price">
                  <h2>shipping cost</h2>
                  {/* <p>aed {order.shippingPrice}</p> */}
                </div>
              </Border>
              <Border>
                <div className="price">
                  <h2>Total price</h2>
                  <p>aed {order.totalPrice}</p>
                </div>
              </Border>

              <div>
                <h4>Card Information</h4>
                <StripePayment />
              </div>
            </SectionLeft>
            <SectionRight />
          </Grid>
        </MainContainer>
      )}
    </>
  );
}

const Border = styled.div`
  border: 1px solid var(--orange-color);
  padding: 1rem 2rem;
  border-radius: 20px;
  margin-bottom: 2rem;

  & hr {
    margin: 0.7rem 0;
    border: none;
    background: var(--silver-color);
    height: 1px;
  }

  & .row {
    display: flex;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 453px) {
      display: block;
    }

    & div {
      display: flex;
      align-items: center;
      & h2 {
        color: var(--orange-color);
        margin: 0;
        margin-right: 1rem;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
      }
      & p {
        display: flex;
        margin: 0;
        max-width: 300px;
      }
    }
    & .link {
      margin-left: auto;
      outline: none;
      border: none;
      background: transparent;
      color: var(--orange-color);
      &:hover {
        opacity: 0.9;
      }
    }
  }
  .price {
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-transform: uppercase;

    & h2 {
      margin: 0;
      color: var(--orange-color);
      font-size: 1rem;
      font-weight: 700;
    }
  }
`;

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

const SectionRight = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const { order, loading, error } = useSelector((state) => state.orderCreate);
  return (
    <ContainerCart>
      {cartItems.length > 0 &&
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
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}{" "}
        </h1>
      </div>
      <div className="solde">
        <h1>shipping</h1>
        <h1>aed {order.shippingPrice}</h1>
      </div>
      <hr />
      <div className="solde">
        <h1>subtotal</h1>
        <h1>aed {order.totalPrice}</h1>
      </div>
    </ContainerCart>
  );
};


const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & a {
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 3rem;

  @media only screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ContainerCart = styled.div`
  background: var(--background-color);
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
