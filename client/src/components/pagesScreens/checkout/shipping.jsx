import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { useFormik } from "formik";
import { Link, useHistory, Redirect } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector, useDispatch } from "react-redux";
import InputC from "../../InputComponents";
import CheckBoxC from "../../CheckBoxComponent";
import SelectC from "../../SelectComponents";
import ButtonC from "../../ButtonComponeent";
import { registerShippingInfo } from "../../../flux/actions/userAction";
import { saveShippingAddress } from "../../../flux/actions/cartAction";

// import MapComponent from "./map/getCurrentPosition";
import MapComponent from "./googleMap/mapScreen";

import piture from "../../../img/card_pic.png";

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

function Checkout({ history }) {
  const [saveShippingCheck, setSaveShippingCheck] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [appartment, setAppartment] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [visible, setVisible] = useState(false);
  const [localistion, setLocalistion] = useState({
    city: "",
    address: "",
    cuntry: "",
  });

  const dispatch = useDispatch();

  const shipping = {
    firstName,
    lastName,
    address,
    appartment,
    city,
    country,
    region,
    phoneNumber,
    email
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    if (saveShippingCheck) {
      dispatch(registerShippingInfo(shipping));
    }
    dispatch(saveShippingAddress(shipping));
    history.push("/payment");
    // window.location.assign = "/payment";
    console.log(shipping);

  }

  // const history = useHistory();
  const { shippingAddress } = useSelector((state) => state.cart);

  if (shippingAddress !== null) {
    // history.push("/payment");
  }
 

  return (
    <Container>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>
          Back
        </a>
        <h2>CHECK OUT</h2>
      </Header>
      <Grid>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Label htmlFor="email">Contact information</Label>
          </Row>
          <Row>
            <InputC
              required
              style={{ marginBottom: ".5rem" }}
              name="email"
              id="email"
              placeholder="EMAIL OR PHONE NUMBER"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </Row>
          <Row>
            <CheckBox>keep up to date on news and offers</CheckBox>
          </Row>
          <Row>
            <Label name="address" id="address" placeholder="">
              Shipping address{" "}
            </Label>
          </Row>
          <Row>
            <div className="inputRow">
              <InputC
                required
                style={{ marginRight: ".3rem" }}
                name="firstName"
                id="firstName"
                placeholder="FIRST NAME"
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <InputC
                required
                style={{ marginLeft: ".3rem" }}
                name="lastName"
                id="lastName"
                placeholder="LAST NAME"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </Row>
          <Row>
            <InputC
              required
              name="address"
              id="address"
              placeholder="ADRESS"
              value={address}
              onChange={e => setAddress(e.target.value)}
            />
          </Row>
          <Row>
            <InputC
              required
              name="appartment"
              id="appartment"
              placeholder="APPARTMENT NO"
              value={appartment}
              onChange={e => setAppartment(e.target.value)}
            />
          </Row>
          <Row>
            <div className="grid_input">
              <InputC
                required
                type="text"
                name="city"
                id="city"
                placeholder="CITY"
                value={city}
                onChange={e => setCity(e.target.value)}
              />
              <CountryDropdownCustom
                required
                name="country"
                value={country}
                onChange={(val) => setCountry( val)}
              />
              <RegionDropdownCustom
                required
                name="region"
                country={country}
                value={region}
                onChange={(val) => setRegion(val)}
              />
            </div>
          </Row>
          <Row>
            <ButtonC
              type="button"
              style={{ width: "100%" }}
              onClick={() => setVisible(true)}
            >
              Select your localisation on map
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
          </Row>

          <Row>
            <InputC
              required
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="PHONE NUMBER"
              value={phoneNumber}
              onChange={e => setPhoneNumber(e.target.value)}
            />
          </Row>
          <Row>
            <CheckBox
              style={{ marginBottom: "1rem" }}
              onChange={(e) => setSaveShippingCheck(e.target.checked)}
            >
              Save this information for next time
            </CheckBox>
          </Row>
          <Row>
            <ButtonC type="submit">continue to payment</ButtonC>
            <Link
              className="link"
              to="/cart"
              style={{ textDecoration: "none" }}
            >
              Back To Cart
            </Link>
          </Row>
        </Form>
        <SectionRight />
        {/* <MapComponent /> */}
      </Grid>
    </Container>
  );
}

const SectionRight = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <ContainerCart>
      {cartItems.length > 0 &&
        cartItems.map((item) => (
          <Card key={item._id}>
            <div class="card__image">
              <img src={item.image} alt="" />
              <p className="quantity">{item.qty}</p>
            </div>
            <div class="card__details">
              <h1 class="card__title">{item.name}</h1>
              <h1 class="card__price">{item.price} AED</h1>
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
        <h1>aed 200.00</h1>
      </div>
      <div className="solde">
        <h1>shipping</h1>
        <h1>aed 0.00</h1>
      </div>
      <hr />
      <div className="solde">
        <h1>subtotal</h1>
        <h1>aed 400.00</h1>
      </div>
    </ContainerCart>
  );
};

const Container = styled.div`
  max-width: var(--max-width);
  margin: 3rem auto 0;
  padding: 3rem 0;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  border: 1px solid #ececec;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
`;

const Row = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  align-items: center;

  & .grid_input {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 10px;
    @media only screen and (max-width: 768px) {
      grid-template-columns: 1fr;
    }
  }

  & .inputRow {
    display: flex;
    justify-content: space-between;
  }

  & .link {
    color: var(--orange-color);
    text-transform: uppercase;
    font-weight: 700;
    &:hover {
      opacity: 0.8;
    }
    @media only screen and (max-width: 900px) {
      position: relative;
      top: 0.7rem;
    }
  }

  @media only screen and (max-width: 900px) {
    display: block;
  }
`;

const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 1.4rem;
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

const Form = styled.form`
  padding: 2rem;
`;
const Label = styled.label`
  font-weight: 700;
`;
const CheckBox = styled(CheckBoxC)`
  /* font-weight: 700; */
  color: var(--orange-color);
  margin: 1rem;
`;

const ContainerCart = styled.div`
  background: var(--background-color);
  padding: 2rem;
  & hr {
    border: none;
    outline: none;
    height: 0.7px;
    background: #fff;
  }
  & form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5px;
    margin: 1.4rem 0;

    & input {
      border: 1px solid #fff;
      outline: none;
      background: transparent;
      color: #fff;
      border-radius: 5px;
      padding: 0.3rem 1rem;
      min-width: 100px;
      height: 3rem;
    }
  }
  & .solde {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    & h1 {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    & h1:nth-child(2) {
      color: #fff;
    }
  }
`;
const Card = styled.div`
  display: flex;

  & .card__image {
    & img {
      width: 130px;
      height: 140px;
      border-radius: 10px;
      border: 1px solid var(--orange-color);
    }
    & .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      color: #fff;
      border-radius: 50%;
      background: #9fa1a1;
      margin: 0;
      max-width: 40px;
      height: 40px;
      position: relative;
      bottom: 9.7rem;
      left: 6.6rem;
      object-fit: cover;
      @media only screen and (max-width: 768px) {
        bottom: 11rem;
        left: 7.5rem;
      }
    }
  }

  & .card__details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    padding-left: 1.7rem;

    & h1 {
      font-size: 0.8rem;
      font-weight: 700;
    }
    & h1:nth-child(1) {
      /* margin-left: 1.7rem; */
    }
    & h1:nth-child(2) {
      color: #fff;
    }
    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }
`;

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

export default Checkout;
