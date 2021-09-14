import React from "react";
import {
  Elements
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

import StripeForme from "./stripeForm";


// const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_API_KEY);
const stripePromise = loadStripe("pk_test_51JJfI4Bx9NV9CAAsTnpUzgnSYM4JyQLcpqSX0Zv9FmUMKEHWnOazlmqWKAPToNeKQlL1ZBsw2uPGuJYbYvmk0vi100DrzhVwzL");

function stripeContainer() {
  return (
    <Elements stripe={stripePromise}>
      <StripeForme />
    </Elements>
  );
}

export default stripeContainer;
