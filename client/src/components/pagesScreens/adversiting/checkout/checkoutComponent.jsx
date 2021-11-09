import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import StripeCheckout from "react-stripe-checkout";
import {
  clearCardAd,
  PremiumSubscription,
} from "../../../../flux/actions/advertisingAction/advertisingAction";
import Button from "../../../ButtonComponeent";
import LoaderComponent from "../../../loader";

const CheckoutComponent = ({ totalPrice, cardData }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [stripeToken, setStripeToken] = useState(null);
  const [successPayment, setSuccessPayment] = useState(false);

  const stripe_api_key =
    "pk_test_51JJfI4Bx9NV9CAAsuru5nAfIu9rF8RK6yxAf52TPNFMD7G0wnXlmH9r3MzKIlPO5kXBwkRGR8D9fK4xBod44lmRq00mT5OQdVM";

  const { service } = useSelector((state) => state.advertising);

  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  if (service == null) {
    history.push("/advertising/register");
  }

  const cartData = {
    productsOrdered: cardData,
    totalPrice,
  };

  const makeRequest = async () => {
    try {
      const res = await axios.post("/checkout/advertising", {
        tokenId: stripeToken.id,
        amount: totalPrice * 100,
        description: `Ordered  ${JSON.stringify(cardData)} `,
      });
      if (res.data.success) {
        setSuccessPayment(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  if (successPayment) {
    dispatch(PremiumSubscription(service._id, cartData));
    history.push({ pathname: "/advertising/thank", state: { data: service } });
  }

  useEffect(() => {
    if (stripeToken) {
      setIsLoading(true);
    }
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <>
      {isLoading ? (
        <LoaderComponent />
      ) : (
        <StripeCheckout
          name="AU 97 CODE Advertising"
          image="https://res.cloudinary.com/tarositeweb/image/upload/v1633424746/recipes/logo_png_wlukid.png"
          billingAddress
          // shippingAddress
          description={`Your total is `}
          currency="aed"
          amount={totalPrice * 100}
          token={onToken}
          stripeKey={stripe_api_key}
          zipCode={false}
        >
          <Button
            disabled={totalPrice === 0 ? true : false}
            className="ml-auto"
          >
            CHECKOUT NOW{" "}
          </Button>
        </StripeCheckout>
      )}
    </>
  );
};

export default CheckoutComponent;
