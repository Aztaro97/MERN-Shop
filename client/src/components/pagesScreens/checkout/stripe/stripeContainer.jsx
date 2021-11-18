import React from "react";
import {
  Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeForme from "./stripeForm";


// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

function stripeContainer({totalPrice}) {
  return (
    <Elements stripe={stripePromise}>
      <StripeForme totalPrice={totalPrice} />
    </Elements>
  );
}

export default stripeContainer;
