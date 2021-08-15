import React from "react";
import {
  Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeForme from "./stripeForm";

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);

function stripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <StripeForme />
    </Elements>
  );
}

export default stripeContainer;
