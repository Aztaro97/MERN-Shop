import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Space } from "antd";
import ButtonC from "../../ButtonComponeent";
import { Link, useHistory } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector, useDispatch } from "react-redux";
import {
  saveShippingAddress,
  savePaymentMethod,
} from "../../../flux/actions/cartAction";
import { createOrder } from "../../../flux/actions/orderAction";
import { ORDER_CREATE_RESET } from "../../../flux/constants/orderConstants";
import { CART_CLEAR_ITEMS } from "../../../flux/constants/cartConstants";
import { USER_DETAILS_RESET } from "../../../flux/constants/userConstants";
import { registerShippingInfo } from "../../../flux/actions/userAction";
import InputRadio from "../../InputRadioComponent";
import Loader from "../../Loader";

import piture from "../../../img/card_pic.png";
import InputComponents from "../../InputComponents";
import CheckBoxComponent from "../../CheckBoxComponent";
import SelectC from "../../SelectComponents";
import MapComponent from "../checkout/map/getCurrentPosition";

import {
  Container,
  Header,
  SectionLeft,
  Border,
  Grid,
  ContainerCart,
  Card,
  RadioB,
} from "./StyledPayment";

function Payment() {
  const [saveShippingCheck, setSaveShippingCheck] = useState(false);
  const [index, setIndex] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const shipping = {
    firstName,
    lastName,
    address,
    appartment,
    city,
    country,
    region,
    phoneNumber,
  };

  const [paymentMethod, setPaymentMethod] = useState("credit");
  const [sameShipping, setSameShipping] = useState("sameAdress");
  const [subTotal, setSubTotal] = useState(Number);

  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, shippingAddress, cartItems } = useSelector(
    (state) => state.cart
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  // Calculate Shipping Cost
  const shippingOptions = cartItems[0].shippingOptions;
  
  const ShippingCostCalculate = () => {
    const options =  shippingOptions.map((shipping) => {
      // const shippingDetails = shippingOptions.indexOf( city.map(region => region === shippingAddress.region) );
      // const shippingDetails = shipping.indexOf(city === shippingAddress.region);
      return shipping.city
    });

    const array = [{city:"hell"}, {city:"hhrr"}, {city:"moussa"}]
    const region = array.indexOf({city: "moussa"});
    console.log({Index : region })
  };

  
  if (!loading)  {
    ShippingCostCalculate()
  }

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const itemsPrice = addDecimals(
    cartItems.reduce((acc, item) => acc + item.price * item.qty, 0)
  );
  const shippingPrice = addDecimals(itemsPrice > 100 ? 0 : 100);
  const taxPrice = addDecimals(Number((0.15 * itemsPrice).toFixed(2)));

  const totalPrice = (
    Number(itemsPrice) +
    Number(shippingPrice) +
    Number(taxPrice)
  ).toFixed(2);

  const handlePlaceOrder = () => {
    console.log("heced", saveShippingCheck);
    dispatch(savePaymentMethod(paymentMethod));
    dispatch(saveShippingAddress(shipping));
    if (saveShippingCheck) {
      dispatch(registerShippingInfo(shipping));
    }
    dispatch(
      createOrder({
        orderItems: cartItems,
        shippingAddress:
          sameShipping === "sameAdress" ? shippingAddress : shipping,
        paymentMethod: paymentMethod,
        itemsPrice: itemsPrice,
        shippingPrice: shippingPrice,
        taxPrice: taxPrice,
        totalPrice: totalPrice,
      })
    );

    if (paymentMethod === "credit") {
      history.push("/completepayment");
    } else {
      dispatch({
        type: CART_CLEAR_ITEMS,
        // payload: data,
      });
      localStorage.removeItem("cartItems");
      history.push("/thank");
    }
  };

  const { order, success, error } = useSelector((state) => state.orderCreate);

  useEffect(() => {
    if (!userInfo) {
      history.push("/auth");
    }
    if (success) {
      history.push(`/order/${order._id}`);
      dispatch({ type: USER_DETAILS_RESET });
      dispatch({ type: ORDER_CREATE_RESET });
    }
    // ShippingCostCalculate();
  }, [dispatch, userInfo, shippingAddress, success]);

  const onChangeRadiGroup = (e) => {
    console.log("radio checked", e.target.value);
    setPaymentMethod(e.target.value);
  };

  const handleShipingAddress = (e) => {
    setSameShipping(e.target.value);
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Header>
            <a href="#/" onClick={() => history.goBack()}>
              Back
            </a>
            <h2>PAYEMENT</h2>
          </Header>
          <Grid>
            <SectionLeft onSubmit={handlePlaceOrder}>
              <Border>
                <div className="row">
                  <div>
                    <h2>contact</h2>
                    <p>
                      {shippingAddress.email} , {shippingAddress.phoneNumber}
                    </p>
                  </div>
                  <Link className="link" to="/shipping">
                    Change
                  </Link>
                </div>
                <hr />
                <div className="row">
                  <div>
                    <h2>address</h2>
                    <p>
                      {shippingAddress.address}, {shippingAddress.city} ,
                      {shippingAddress.country}
                    </p>
                  </div>
                  <Link className="link" to="/shipping">
                    Change
                  </Link>
                </div>
                <hr />
                <div className="row">
                  <div className="price">
                    <h2>shipping cost</h2>
                    <p>aed 50.00</p>
                  </div>
                </div>
              </Border>

              <div className="section_Type_Payment">
                <h2>payment</h2>
                <p>All transactions are secure and encrypted.</p>
                <Border style={{ padding: "1rem 0px" }}>
                  <div className="radio-button">
                    <RadioB.Group
                      className="radio-custom"
                      value={paymentMethod}
                      onChange={onChangeRadiGroup}
                    >
                      <Space
                        className="radio-space"
                        direction="vertical"
                        style={{ gap: "0px", width: "100% " }}
                      >
                        <RadioB className="radio-item" value="credit">
                          Credit Card
                        </RadioB>
                        <hr />
                        <RadioB className="radio-item" value="cash">
                          Cash on delivery
                        </RadioB>
                      </Space>
                    </RadioB.Group>
                  </div>
                </Border>
              </div>

              <div className="section_billing">
                <h2>Billing Address</h2>
                <p>
                  Select the address that matches your card or payment method.
                </p>
                <Border style={{ padding: "1rem 0px" }}>
                  <div className="radio-button">
                    <RadioB.Group
                      className="radio-custom"
                      value={sameShipping}
                      onChange={handleShipingAddress}
                    >
                      <Space
                        className="radio-space"
                        direction="vertical"
                        style={{ gap: "0px", width: "100% " }}
                      >
                        <RadioB className="radio-item" value="sameAdress">
                          Same as shipping address
                        </RadioB>
                        <hr />
                        <RadioB className="radio-item" value="diffAdress">
                          Use a different billing address
                        </RadioB>
                      </Space>
                    </RadioB.Group>
                  </div>
                </Border>
              </div>

              {sameShipping !== "sameAdress" ? (
                <SectionShippingAddress
                  shipping={shipping}
                  setFirstName={setFirstName}
                  setLastName={setLastName}
                  setAddress={setAddress}
                  setAppartment={setAppartment}
                  setCity={setCity}
                  setCountry={setCountry}
                  setRegion={setRegion}
                  setPhoneNumber={setPhoneNumber}
                  setSaveShippingCheck={setSaveShippingCheck}
                />
              ) : null}

              <div className="submition_btn">
                <ButtonC type="submit" className="btn">
                  place order
                </ButtonC>
                <Link to="/products" className="link_back">
                  back to information
                </Link>
              </div>
            </SectionLeft>
            <SectionRight cartItems={cartItems} />
          </Grid>
        </Container>
      )}
    </>
  );
}

const SectionRight = ({ cartItems }) => {
  //  Calculate function
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
  return (
    <ContainerCart>
      {cartItems.map((item, index) => (
        <Card key={index}>
          <div class="card__image">
            <img src={piture} alt="" />
            <p className="quantity">{item.qty}</p>
          </div>
          <div class="card__details">
            <h1 class="card__title">{item.name}</h1>
            <h1 class="card__price">{addDecimal(item.price)} AED</h1>
          </div>
        </Card>
      ))}

      <hr />
      <form action="">
        <input type="text" placeholder="DISCOUNT CODE" />
        <ButtonC>apply</ButtonC>
      </form>
      <hr />
      <div className="solde">
        <h1>subtotal</h1>
        <h1>
          aed{" "}
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}{" "}
        </h1>
      </div>
      <div className="solde">
        <h1>shipping</h1>
        <h1>aed 0.00</h1>
      </div>
      <hr />
      <div className="solde">
        <h1>subtotal</h1>
        <h1>
          aed{" "}
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}{" "}
        </h1>
      </div>
    </ContainerCart>
  );
};

const SectionShippingAddress = ({
  shipping,
  setFirstName,
  setAddress,
  setLastName,
  setAppartment,
  setCity,
  setCountry,
  setRegion,
  setPhoneNumber,
  setSaveShippingCheck,
}) => {
  const [visible, setVisible] = useState(false);
  const [localistion, setLocalistion] = useState({
    city: "",
    address: "",
    cuntry: "",
  });

  return (
    <div className="section_shippindAdress">
      <div className="inputRow">
        <InputComponents
          required
          type="text"
          style={{ marginRight: ".3rem" }}
          name="firstName"
          id="firstName"
          value={shipping.firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="FIRST NAME"
        />
        <InputComponents
          required
          type="text"
          style={{ marginLeft: ".3rem" }}
          name="lastName"
          id="lastName"
          placeholder="LAST NAME"
          value={shipping.lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <InputComponents
        required
        type="text"
        name="address"
        id="address"
        placeholder="ADRESS"
        value={shipping.address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <InputComponents
        required
        type="text"
        name="appartment"
        id="appartment"
        placeholder="APPARTMENT NO"
        value={shipping.appartment}
        onChange={(e) => setAppartment(e.target.value)}
      />
      <div className="grid_input">
        <InputComponents
          required
          type="text"
          name="city"
          id="city"
          placeholder="CITY"
          value={shipping.city}
          onChange={(e) => setCity(e.target.value)}
        />
        <CountryDropdownCustom
          required
          value={shipping.country}
          onChange={(val) => setCountry(val)}
        />
        <RegionDropdownCustom
          required
          country={shipping.country}
          value={shipping.region}
          onChange={(val) => setRegion(val)}
        />
      </div>
      <div className="map_container">
        <ButtonC
          type="button"
          style={{ width: "100%" }}
          onClick={() => setVisible(true)}
        >
          Select ur localisation on map
        </ButtonC>
        <Modal
          centered
          visible={visible}
          onOk={() => setVisible(false)}
          onCancel={() => setVisible(false)}
          width={1000}
          footer={null}
        >
          <MapComponent
            setLocalistion={setLocalistion}
            setVisible={setVisible}
          />
        </Modal>
      </div>
      <InputComponents
        required
        type="tel"
        name="number"
        id="number"
        placeholder="PHONE NUMBER"
        value={shipping.phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <CheckBoxComponent
        onClick={(e) => setSaveShippingCheck(e.target.checked)}
      >
        save this information for the next time
      </CheckBoxComponent>
    </div>
  );
};

const CountryDropdownCustom = styled(CountryDropdown)`
  border: 3px solid var(--background-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  max-width: 230px;
  &:focus {
    border: 3px solid var(--background-color);
  }
  &:focus-visible {
    border: 3px solid var(--background-color);
    outline: none;
  }
`;

const RegionDropdownCustom = styled(RegionDropdown)`
  border: 3px solid var(--background-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  max-width: 230px;
  &:focus {
    border: 3px solid var(--background-color);
  }
  &:focus-visible {
    border: 3px solid var(--background-color);
    outline: none;
  }
`;

export default Payment;
