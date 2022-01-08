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
import { Col, Row } from "antd";

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

export default function PaymentForm({ totalPrice }) {
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [numbercard, setnumbercar] = useState("");
  const stripe = useStripe();
  const elements = useElements();

  const dispatch = useDispatch();
  const history = useHistory();

  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  // const { order, loading, error } = useSelector((state) => state.orderCreate);

  const { order: orderDetails, loading, error } = useSelector(
    (state) => state.orderDetails
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(process.env.REACT_APP_STRIPE_SECRET_KEY)
    if (!stripe || !elements) {
      return;
    }

    //  Check the payment valid
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement),
    });

    //  Create payment intent on the server
    if (!error) {
      try {
        const { id } = paymentMethod;

        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY} ${process.env.REACT_APP_STRIPE_API_KEY}`,
          },
        };

        const response = await axios.post(
          "/create-checkout-session",
          {
            amount: totalPrice,
            id,
            payment: {
              gateway: "stripe",
              stripe: {
                payment_method_id: id,
              },
            },
          },
          config
        );

        if (response.data.paymentSuccess) {
          setPaymentSuccess(true);
          payOrder(response.data);
          payOrder(orderDetails._id, {
            id: response.data.payment.id,
            status: response.data.payment.status,
            email_address: response.data.payment.receipt_email,
          });
          dispatch({ type: CART_CLEAR_ITEMS });

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
              <h4>Card Information</h4>
              <Row gutter={[10, 10]}>
                <Col xs={{ span: 24 }}>
                  <CardNumberElement
                    className="input_card"
                    options={CARD_OPTIONS}
                  />
                </Col>
                <Col xs={{ span: 24 }}>
                  <CardExpiryElement
                    className="input_card"
                    options={CARD_OPTIONS}
                  />
                </Col>
                <Col xs={{ span: 24 }}>
                  <CardCvcElement
                    className="input_card"
                    options={CARD_OPTIONS}
                  />
                </Col>

                <Col xs={{ span: 24 }}>
                  <button type="submit" disabled={!stripe}>
                    Pay {orderDetails.totalPrice} AED
                  </button>
                </Col>
              </Row>
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

const Form = styled.form`
  & h4 {
    color: var(--silver-color);
    margin-bottom: 20px;
  }
  & .input_card {
    margin: 0;
    color: var(--silver-color);
    width: 100%;
    min-width: 0;
    padding: 0.7rem 11px;
    border: 1px solid var(--silver-color);
    border-radius: 5px;
    transition: all 0.3s;
    background: transparent;
    letter-spacing: 2px;
    /* height: 2.9725rem; */
    /* line-height: 2.9725rem; */
    @media only screen and (max-width: 768px) {
      height: 3.5rem;
    }
  }

  & button {
    outline: none;
    /* border: 1px solid var(--silver-color); */
    border-radius: 5px;
    background: var(--orange-color);
    color: var(--white-color);
    padding: 6px 0;
    width: 100%;
    letter-spacing: 2px;
    &:hover {
      opacity: 0.9;
    }
  }
`;
