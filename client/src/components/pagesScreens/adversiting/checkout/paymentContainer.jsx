import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";

import PaymentForm from "./paymentForm";

const stripePromise = loadStripe("pk_test_51JJfI4Bx9NV9CAAsuru5nAfIu9rF8RK6yxAf52TPNFMD7G0wnXlmH9r3MzKIlPO5kXBwkRGR8D9fK4xBod44lmRq00mT5OQdVM");

const paymentContainer = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default paymentContainer;
