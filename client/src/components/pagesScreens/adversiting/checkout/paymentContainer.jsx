import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import PaymentForm from "./paymentForm";

const stripePromise = loadStripe("pk_test_51JJfI4Bx9NV9CAAshXbuRHvvy0RZGWdkGS5wa2I2Pn11xCvtSgshiDWqenxopl4Ol0h0W6JGcSN35lGAeyxLwoxO00XgLDjgJS");

const paymentContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default paymentContainer;
