import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal, Space } from "antd";
import ButtonC from "../../ButtonComponeent";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { saveShippingAddress } from "../../../flux/actions/cartAction";
import InputRadio from "../../InputRadioComponent";
import Loader from "../../Loader";

import piture from "../../../img/card_pic.png";
import InputComponents from "../../InputComponents";
import CheckBoxComponent from "../../CheckBoxComponent";
import SelectC from "../../SelectComponents";
import MapComponent from "../checkout/map/getCurrentPosition";
import StripePaymentContainer from "./stripe/stripeContainer";

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

const gouvList = [
  {
    title: "Abou dhabi",
    value: "abu dhabi",
  },
  {
    title: "Ajman",
    value: "ajman",
  },
  {
    title: "Dubai",
    value: "dubai",
  },
];
const countryList = [
  {
    title: "uae",
    value: "uae",
  },
  {
    title: "usa",
    value: "usa",
  },
  {
    title: "saudia",
    value: "saudia",
  },
];

function Payment() {
  const [creditMethod, setCreditMethod] = useState("credit");
  const [sameShipping, setSameShipping] = useState("sameAdress");
  const [subTotal, setSubTotal] = useState(Number);

  const history = useHistory();
  const dispatch = useDispatch();
  const { loading, shippingAddress, cartItems } = useSelector(
    (state) => state.cart
  );
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleCompleteOrder = () => {
    history.push("/thank");
  };

  useEffect(() => {
    if (!userInfo) {
      history.push("/auth");
    }
  }, [userInfo, shippingAddress]);

  const onChangeRadiGroup = (e) => {
    console.log("radio checked", e.target.value);
    setCreditMethod(e.target.value);
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
            <SectionLeft>
              <Border>
                <div className="row">
                  <div>
                    <h2>contact</h2>
                    <p>{shippingAddress.email}</p>
                  </div>
                  <Link className="link" to="/shipping">
                    Change
                  </Link>
                </div>
                <hr />
                <div className="row">
                  <div>
                    <h2>address</h2>
                    <p>{shippingAddress.address}</p>
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
                      value={creditMethod}
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

              {creditMethod === "credit" ? (
                <div className="section_payment_info">
                  <h2>payment information</h2>
                  <StripePaymentContainer subTotal={subTotal} />
                  {/* <InputComponents type="text" placeholder="Card Number" />
              <InputComponents type="text" placeholder="Full Name" />
              <InputComponents type="text" placeholder="MM/YY" />
              <InputComponents type="text" placeholder="CVC" />
              <CheckBoxComponent>
                save this information for the next time
              </CheckBoxComponent> */}
                </div>
              ) : null}

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
                <SectionShippingAddress />
              ) : null}
            </SectionLeft>
            <SectionRight cartItems={cartItems} />
          </Grid>
          <div className="submition_btn">
            <ButtonC className="btn" onClick={handleCompleteOrder}>
              Complete order
            </ButtonC>
            <Link to="/products" className="link_back">
              back to information
            </Link>
          </div>
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

const SectionShippingAddress = () => {
  const [visible, setVisible] = useState(false);
  const [check, setCheck] = useState(false);
  const [localistion, setLocalistion] = useState({
    city: "",
    address: "",
    cuntry: "",
  });

  const dispatch = useDispatch();

  const handleSaveCheck = () => {
    if (check) {
      dispatch(saveShippingAddress());
    }
  };
  return (
    <div className="section_shippindAdress">
      <div className="inputRow">
        <InputComponents
          style={{ marginRight: ".3rem" }}
          name="email"
          id="email"
          placeholder="FIRST NAME"
        />
        <InputComponents
          style={{ marginLeft: ".3rem" }}
          name="email"
          id="email"
          placeholder="LAST NAME"
        />
      </div>
      <InputComponents name="email" id="email" placeholder="ADRESS" />
      <InputComponents name="email" id="email" placeholder="APPARTMENT NO" />
      <div className="grid_input">
        <InputComponents type="text" name="city" id="city" placeholder="CITY" />
        <SelectC
          className="gouvSelect"
          options={gouvList}
          placeholder="gouvernmate"
        />
        <SelectC options={countryList} placeholder="country" />
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
        type="number"
        name="number"
        id="number"
        placeholder="PHONE NUMBER"
      />
      <CheckBoxComponent>
        save this information for the next time
      </CheckBoxComponent>
    </div>
  );
};

export default Payment;
