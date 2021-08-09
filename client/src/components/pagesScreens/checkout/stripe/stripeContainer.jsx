import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  Elements
} from "@stripe/react-stripe-js";
import StripeForm from "./stripeForm"


const PUBLICK_API_KEY = "pk_test_51JJfI4Bx9NV9CAAs8nb4KtdmyWGLGCwHYvAsWIWQCe8VByksLMERNpJOmFNI3uxQv0qSEDyQ9na6MjBG6EO02Mlw00LADPvhYt"

const stripePromise = loadStripe('pk_test_51JJfI4Bx9NV9CAAs8nb4KtdmyWGLGCwHYvAsWIWQCe8VByksLMERNpJOmFNI3uxQv0qSEDyQ9na6MjBG6EO02Mlw00LADPvhYt');



const StripComponent = () => (
  <Elements stripe={stripePromise}>
    <StripeForm />
  </Elements>
);



export default StripComponent;
