import React, { useState } from "react";
import {
  CardElement,
  useElements,
  useStripe,
  CardNumberElement,
  CardCvcElement,
  CardExpiryElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { errorMessage } from "../../../message";
import { payOrder, createOrder } from "../../../../flux/actions/orderAction";

const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#000",
      color: "#9E9FA1",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      letterSpacing: "2px",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#000" },
      "::placeholder": { color: "#9E9FA1" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#e74c3c",
    },
  },
};

export default function PaymentForm() {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const history = useHistory();

  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  const { loading, success, order } = useSelector((state) => state.orderCreate);

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));

  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: shippingAddress,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const config = {
          headers: {
            Authorization: `Bearer auth`,
          }
        }

        const response = await axios.post("/api/payment", {
          amount: totalPrice,
          id
        }, config);

        if (response.data.paymentSuccess) {
          console.log("Successful payment");
          setPaymentSuccess(true);
          payOrder(response.data);
          dispatch(
            createOrder({
              orderItems: cartItems,
              shippingAddress: shippingAddress,
              paymentMethod: paymentMethod,
              itemsPrice: itemsPrice,
              shippingPrice: shippingPrice,
              taxPrice: taxPrice,
              totalPrice: totalPrice,
            })
          );
          history.push("/thank");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
      errorMessage(error.message, 500);
    }
  };

  return (
    <>
      {!paymentSuccess ? (
        <Form onSubmit={handleSubmit}>
          <Row>
            <CardNumberElement className="input_card" options={CARD_OPTIONS} />
          </Row>

          <Row>
            <CardExpiryElement className="input_card" options={CARD_OPTIONS} />
          </Row>

          <Row>
            <CardCvcElement className="input_card" options={CARD_OPTIONS} />
          </Row>
          <button type="submit" disabled={!stripe}>
            Pay {totalPrice}
          </button>
        </Form>
      ) : (
        <div>
          <h2>
            You just bought a sweet spatula congrats this is the best decision
            of you're life
          </h2>
        </div>
      )}
    </>
  );
}

const Row = styled.div`
  margin: 5px 0;
  & .input_card {
    margin: 0;
    color: var(--silver-color);
    width: 100%;
    min-width: 0;
    padding: 0.7rem 11px;
    border: 3px solid var(--background-color);
    border-radius: 10px;
    transition: all 0.3s;
    background: #fff;
    letter-spacing: 2px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & button {
    outline: none;
    border: 1px solid var(--background-color);
    background: var(--orange-color);
    color: #fff;
    padding: 4px;
    font-weight: 700;
  }
`;
