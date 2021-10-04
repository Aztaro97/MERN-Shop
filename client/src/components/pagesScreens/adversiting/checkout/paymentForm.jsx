import React, { useEffect, useState } from "react";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import Button from "../../../ButtonComponeent";
import InputComponents from "../../../InputComponents";
import { Col, Row } from "antd";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {
  clearCardImage,
  AddOrderCardImage,
  PremiumSubscription,
} from "../../../../flux/actions/advertisingAction/advertisingAction";
import axios from "axios";

const PaymentForm = () => {
  const [data, setData] = useState([]);

  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const stripe = useStripe();
  const elements = useElements();
  const dispatch = useDispatch();

  const { service } = useSelector((state) => state.advertising);

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const totalPrice = data.reduce((acc, item) => acc + item.total, 0);
  console.log(totalPrice);

  const history = useHistory();

  useEffect(() => {
    const CartItems = JSON.parse(localStorage.getItem("cardDataImage"));
    if (CartItems) {
      setData(CartItems);
    } else {
      history.push("/advertising/cart");
    }
  }, [history]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const cardElement = elements?.getElement(CardElement);

    if (!stripe || !elements || !cardElement) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (!error) {
      try {
        const { id } = paymentMethod;
        const body = {
          productsOrdered: data,
          service,
          totalPrice,
        };

        const config = {
          headers: {
            "Content-Type": "application/json",
            // Authorization: `Bearer ${process.env.REACT_APP_STRIPE_SECRET_KEY} ${process.env.REACT_APP_STRIPE_API_KEY}`,
          },
        };

        const response = await axios.post(
          "/create-checkout-session/advertising",
          {
            amount: totalPrice,
            id,
            customer_email: email,
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
          // dispatch(AddOrderCardImage())
          dispatch(PremiumSubscription(body));
          dispatch(clearCardImage());
          history.push("/thank");
        }
      } catch (error) {
        console.log("Error", error);
      }
    } else {
      console.log(error);
    }
  };

  return (
    <FormStyling onSubmit={handleSubmit}>
      <Row gutter={10}>
        <Col
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 24 }}
          className="gutter-row"
        >
          <InputComponents
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Col>
        <Col
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 24 }}
          className="gutter-row"
        >
          <InputComponents
            type="tel"
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </Col>
        <Col
          lg={{ span: 8 }}
          md={{ span: 8 }}
          sm={{ span: 8 }}
          xs={{ span: 24 }}
          className="gutter-row"
        >
          <InputComponents
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>

      <CardElementStyling className="my-2" />

      <ButtonStyling
        className="mt-4 mx-auto"
        type="submit"
        disabled={!stripe || !elements}
      >
        Pay {addDecimals(totalPrice)} AED
      </ButtonStyling>
    </FormStyling>
  );
};

const FormStyling = styled.form`
  @media only screen and (max-width: 565px) {
    & .gutter-row {
      margin-bottom: 0.7rem;
    }
  }
`;

const CardElementStyling = styled(CardElement)`
  padding: 10px;
  background-color: #fff;
  border: 2px solid var(--background-color);
`;

const ButtonStyling = styled(Button)`
  margin-top: 0 !important;
  font-weight: 400;
  font-size: 1.1rem;
`;

export default PaymentForm;
