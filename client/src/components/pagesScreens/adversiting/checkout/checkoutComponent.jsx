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

const CheckoutComponent = ({ totalPrice, cardData }) => {
  const [stripeToken, setStripeToken] = useState(null);

  const stripe_api_key =
    "pk_test_51JJfI4Bx9NV9CAAsuru5nAfIu9rF8RK6yxAf52TPNFMD7G0wnXlmH9r3MzKIlPO5kXBwkRGR8D9fK4xBod44lmRq00mT5OQdVM";

  const { service: userField } = useSelector((state) => state.advertising);

  const history = useHistory();
  const dispatch = useDispatch();

  const onToken = (token) => {
    setStripeToken(token);
  };

  if (userField == null) {
    history.push("/advertising/register");
  }

  const body = {
    companyName: userField.companyName,
    about: userField.about,
    typeBusiness: userField.typeBusiness,
    fullName: userField.fullName,
    telephone: userField.telephone,
    email: userField.email,
    city: userField.city,
    country: userField.country,
    region: userField.region,
    productsOrdered: cardData,
    totalPrice,
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post("/checkout/advertising", {
          tokenId: stripeToken.id,
          amount: totalPrice * 100,
          description: `Ordered  ${cardData} `,
        });
        if (res.data.success) {
          dispatch(PremiumSubscription(body));
          dispatch(clearCardAd());
          history.push("/advertising/thank", { data: body });
        }
      } catch {}
    };
    stripeToken && makeRequest();
  }, [stripeToken, totalPrice, history, dispatch, body]);

  return (
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
      <Button disabled={totalPrice < 0 && true } className="ml-auto">
        CHECKOUT NOW{" "}
      </Button>
    </StripeCheckout>
  );
};

export default CheckoutComponent;
