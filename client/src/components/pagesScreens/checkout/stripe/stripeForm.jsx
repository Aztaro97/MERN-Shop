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
import { payOrder, createOrder } from "../../../../flux/actions/orderAction";
import { CART_CLEAR_ITEMS } from "../../../../flux/constants/cartConstants";
import LoaderComponent from "../../../loader";

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
  const [numbercard, setnumbercar] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const history = useHistory();

  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  const { order, loading, error } = useSelector((state) => state.orderCreate);

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
    if (!stripe || !elements) {
      return;
    }

    // ///  Check the payment valid
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
      billing_details: shippingAddress,
    });

    //  Create payment intent on the server
    if (!error) {
      try {
        const { id } = paymentMethod;

        const response = await axios.post("/api/payment", {
          amount: totalPrice,
          id,
          payment_method: "pm_card_visa",
        });

        if (response.data.paymentSuccess) {
          console.log("Successful payment");
          setPaymentSuccess(true);
          payOrder(response.data);
          payOrder(order._id, {
            id: response.data.payment.id,
            status: response.data.payment.status,
            email_address: response.data.payment.receipt_email,
          });
          dispatch({ type: CART_CLEAR_ITEMS });

          history.push("/thank");
          history.push("/thank");
        }
      } catch (error) {
        console.log("Error", error);
      }

    } else {
      console.log(error.message);
      console.log("error");
    }
  };

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {!paymentSuccess ? (
            <Form onSubmit={(e) => handleSubmit(e)}>
              <Row>
                <CardNumberElement
                  className="input_card"
                  options={CARD_OPTIONS}
                />
              </Row>

              <Row>
                <CardExpiryElement
                  className="input_card"
                  options={CARD_OPTIONS}
                />
              </Row>

              <Row>
                <CardCvcElement className="input_card" options={CARD_OPTIONS} />
              </Row>
              <button type="submit" disabled={!stripe}>
                Pay {order.totalPrice} AED
              </button>
            </Form>
          ) : (
            <div>
              <h2>
                You just bought a sweet spatula congrats this is the best
                decision of you're life
              </h2>
            </div>
          )}
        </>
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
    /* height: 2.9725rem; */
    /* line-height: 2.9725rem; */
    @media only screen and (max-width: 768px) {
      height: 3.5rem;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;

  & button {
    outline: none;
    border: 1px solid var(--background-color);
    border-radius: 10px;
    background: var(--orange-color);
    color: #fff;
    padding: 6px;
    font-weight: 700;
  }
`;
