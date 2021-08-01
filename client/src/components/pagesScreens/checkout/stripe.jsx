import React, {useMemo} from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement
} from "@stripe/react-stripe-js";
import styled from "styled-components"

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });

    if (error) {
      console.log('[error]', error);
    } else {
      console.log('[PaymentMethod]', paymentMethod);
    }


  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit" disabled={!stripe || !elements}>
        Pay
      </button>
    </form>
  );
};

const stripePromise = loadStripe(
  "pk_test_51JJfI4Bx9NV9CAAs8nb4KtdmyWGLGCwHYvAsWIWQCe8VByksLMERNpJOmFNI3uxQv0qSEDyQ9na6MjBG6EO02Mlw00LADPvhYt"
);



// const useOptions = () => {
//   // const fontSize = useResponsiveFontSize();
  

//   return CARD_OPTIONS;
// };

const CARD_OPTIONS = {
  // iconStyle: "solid",
  // style: {
  //   base: {
  //     iconColor: "#c4f0ff",
  //     color: "#fff",
  //     fontWeight: 500,
  //     fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
  //     fontSize: "16px",
  //     fontSmoothing: "antialiased",
  //     ":-webkit-autofill": {
  //       color: "#fce883"
  //     },
  //     "::placeholder": {
  //       color: "#87bbfd"
  //     }
  //   },
  //   invalid: {
  //     iconColor: "#ffc7ee",
  //     color: "#ffc7ee"
  //   }
  // }
};

const SplitForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  // const options = useOptions();

  const handleSubmit = async event => {
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    const payload = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardNumberElement)
    });
    console.log("[PaymentMethod]", payload);
  };

  return (
    <Forms onSubmit={handleSubmit}>
      <label>
        Card number
        <CardNumberElement
          options={CARD_OPTIONS}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        Expiration date
        <CardExpiryElement
          options={CARD_OPTIONS}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <label>
        CVC
        <CardCvcElement
          options={CARD_OPTIONS}
          onReady={() => {
            console.log("CardNumberElement [ready]");
          }}
          onChange={event => {
            console.log("CardNumberElement [change]", event);
          }}
          onBlur={() => {
            console.log("CardNumberElement [blur]");
          }}
          onFocus={() => {
            console.log("CardNumberElement [focus]");
          }}
        />
      </label>
      <button type="submit" disabled={!stripe}>
        Pay
      </button>
    </Forms>
  );
};



const StripComponent = () => (
  <Elements stripe={stripePromise}>
    <SplitForm />
  </Elements>
);


const Forms = styled.form`
  /* height: 400px; */
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  & label { 
    font-weight: 700;

    & .StripeElement { 
      /* background: ; */
    }
  }

  & .StripeElement--empty { 
    color: red;
  }

  & button {
    outline: none;
    border: none; 
    font-size: 2rem;
    padding: 1rem;
    background: var(--orange-color);
    color: #fff;
  }
`

const option = styled.div`
`

export default StripComponent;
