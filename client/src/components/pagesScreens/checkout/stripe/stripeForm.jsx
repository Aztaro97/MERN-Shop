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
import styled from "styled-components";
import { useSelector } from "react-redux";
import { errorMessage } from "../../../message";

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
  const [success, setSuccess] = useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const { shippingAddress, cartItems } = useSelector((state) => state.cart);

  const totalPrice = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

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
            "Content-Type": "application/json",
            // Authorization: `Bearer ${PUBLICK_API_KEY}`,
          },
        };

        const response = await axios.post("/api/payment", {
          amount: 1000,
          id,
        });

        if (response.data.success) {
          console.log("Successful payment");
          setSuccess(true);
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
      {!success ? (
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
