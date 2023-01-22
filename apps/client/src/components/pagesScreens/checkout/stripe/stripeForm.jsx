import React, { useEffect, useState } from "react";
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
import { LoadingOutlined } from "@ant-design/icons";

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
  const [submited, setSubmited] = useState(false);
  const [paymentResult, setPaymentResult] = useState({
    id: "",
    status: "",
    email_address: "",
    paymentMethod: "",
  });
  const stripe = useStripe();
  const elements = useElements();

  const toCent = (amount) => amount * 100;

  const dispatch = useDispatch();
  const history = useHistory();

  const { shippingAddress, cartItems } = useSelector((state) => state.cart);
  // const { order, loading, error } = useSelector((state) => state.orderCreate);

  const { order: orderDetails, loading, error } = useSelector(
    (state) => state.orderDetails
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmited(true);
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

        const { data } = await axios.post(
          "/api/checkout",
          {
            amount: toCent(orderDetails.totalPrice),
            clientId: id,
            lineItem: orderDetails.cartItems,
          },
          config
        );

        console.log(data);
        if (data) {
          setPaymentResult((preState) => ({
            ...preState,
            id: data.client_reference_id,
            status: data.payment_status,
            email_address: data.receipt_email,
            paymentMethod: data.payment_method_types,
          }));
          setPaymentSuccess(true);
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error.message);
      setSubmited(false);
    }
  };

  useEffect(() => {
    if (paymentSuccess) {
      dispatch(payOrder(orderDetails._id, paymentResult));
      dispatch({ type: CART_CLEAR_ITEMS });
      history.push("/thank");
    }
  }, [paymentSuccess, dispatch, orderDetails, paymentResult, history]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <>
          {!paymentSuccess && (
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
                    {!submited ? (
                      `Pay ${orderDetails?.totalPrice} AED`
                    ) : (
                      <LoadingOutlined className="icon" />
                    )}
                  </button>
                </Col>
              </Row>
            </Form>
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
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40px;
    border-radius: 5px;
    background: var(--orange-color);
    color: var(--white-color);
    width: 100%;
    letter-spacing: 2px;
    &:hover {
      opacity: 0.9;
    }

    & .icon {
      color: var(--white-color);
      padding: 8px 0;
    }
  }
`;
