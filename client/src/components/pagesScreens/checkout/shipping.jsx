import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col, Modal, Row } from "antd";
import { useFormik } from "formik";
import { Link, useHistory, Redirect } from "react-router-dom";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useSelector, useDispatch } from "react-redux";
import InputC from "../../InputComponents";
import CheckBoxC from "../../CheckBoxComponent";
import SelectC from "../../SelectComponents";
import ButtonC from "../../ButtonComponeent";
import {
  getUserDetails,
  registerShippingInfo,
} from "../../../flux/actions/userAction";
import { saveShippingAddress } from "../../../flux/actions/cartAction";
import MainContainer from "../../MainContainer";

// import MapComponent from "./map/getCurrentPosition";
import MapComponent from "./googleMap/mapScreen";
import LoaderComponent from "../../loader";

function Checkout() {
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
    email,
  };

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (saveShippingCheck) {
      dispatch(registerShippingInfo(shipping));
    }
    dispatch(saveShippingAddress(shipping));
    history.push("/payment");
  };

  const { shippingAddress } = useSelector((state) => state.cart);

  if (shippingAddress !== null) {
    // history.push("/payment");
  }

  const {
    loading,
    user: { shippingAddress: userAddress },
    error,
  } = useSelector((state) => state.userDetails);
  const { userInfo } = useSelector((state) => state.userLogin);

  // const userAddress = user?.shippingAddress;
  if (!userAddress) {
    console.log(userAddress);
  }

  useEffect(() => {
    if (!userInfo) {
      history.push("/auth");
    } else {
      if (!userAddress) {
        dispatch(getUserDetails(userInfo._id));
      } else {
        setFirstName(userAddress.firstName);
        setLastName(userAddress.lastName);
        setAddress(userAddress.address);
        setAppartment(userAddress.appartment);
        setCity(userAddress.city);
        setCountry(userAddress.country);
        setRegion(userAddress.region);
        setPhoneNumber(userAddress.phoneNumber);
        setEmail(userAddress.email);
      }
    }
  }, [dispatch, userAddress, history, userInfo]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <Container>
          <Header>
            <a href="#/" onClick={() => history.goBack()}>
              Back
            </a>
            <h2>CHECK OUT</h2>
          </Header>
          <Row gutter={[10, 40]}>
            <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
              <Form onSubmit={handleSubmit}>
                <Row gutter={[10, 10]}>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <Label htmlFor="email">Contact information</Label>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <InputC
                      required
                      style={{ marginBottom: ".5rem" }}
                      name="email"
                      id="email"
                      placeholder="EMAIL OR PHONE NUMBER"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <CheckBox>keep up to date on news and offers</CheckBox>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <Label name="address" id="address" placeholder="">
                      Shipping address{" "}
                    </Label>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                    <InputC
                      required
                      style={{ marginRight: ".3rem" }}
                      name="firstName"
                      id="firstName"
                      placeholder="FIRST NAME"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                    <InputC
                      required
                      style={{ marginLeft: ".3rem" }}
                      name="lastName"
                      id="lastName"
                      placeholder="LAST NAME"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <InputC
                      required
                      name="address"
                      id="address"
                      placeholder="ADRESS"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <InputC
                      required
                      name="appartment"
                      id="appartment"
                      placeholder="APPARTMENT NO"
                      value={appartment}
                      onChange={(e) => setAppartment(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
                    <InputC
                      required
                      type="text"
                      name="city"
                      id="city"
                      placeholder="CITY"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
                    {" "}
                    <CountryDropdownCustom
                      required
                      name="country"
                      value={country}
                      onChange={(val) => setCountry(val)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 8 }}>
                    {" "}
                    <RegionDropdownCustom
                      required
                      name="region"
                      country={country}
                      value={region}
                      onChange={(val) => setRegion(val)}
                    />
                  </Col>
                  {/* <Col>
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
              </Col> */}

                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <InputC
                      required
                      type="tel"
                      name="phoneNumber"
                      id="phoneNumber"
                      placeholder="PHONE NUMBER"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <CheckBox
                      style={{ marginBottom: "1rem" }}
                      onChange={(e) => setSaveShippingCheck(e.target.checked)}
                    >
                      Save this information for next time
                    </CheckBox>
                  </Col>
                  <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                    <Row justify="space-between">
                      <Col>
                        <ButtonC type="submit">continue to payment</ButtonC>
                      </Col>
                      <Col>
                        <Link
                          className="link"
                          to="/cart"
                          style={{ textDecoration: "none" }}
                        >
                          Back To Cart
                        </Link>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Form>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
              <SectionRight className="section_right" />
            </Col>
            {/* <MapComponent /> */}
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const SectionRight = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const addDecimal = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };
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
      {/* <hr />
      <div className="solde">
        <h1>subtotal</h1>
        <h1>aed 200.00</h1>
      </div> */}
      <hr />
      <div className="solde">
        <h1>Total</h1>
        <h1>
          {" "}
          aed{" "}
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}{" "}
        </h1>
      </div>
    </ContainerCart>
  );
};

const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & a {
    text-decoration: none;
    color: var(--silver-color);
    padding: 5px 10px;
    border: 1px solid var(--silver-color);
    font-weight: 700;
    position: relative;
    top: 1.4rem;
    &:hover {
      opacity: 0.8;
    }
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;

const Form = styled.form`
  padding: 2rem;
  border: 1px solid #ececec58;

  /* border-radius: 10px; */
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    grid-row-start: 2;
  }
`;
const Label = styled.label`
  font-weight: 700;
  letter-spacing: 1px;
  color: var(--silver-color);
  margin-top: 1rem;
`;
const CheckBox = styled(CheckBoxC)`
  /* font-weight: 700; */
  color: var(--orange-color);
  margin: 1rem;
`;

const ContainerCart = styled.div`
  background: var(--dark-color);
  padding: 2rem;
  height: 100%;
  & hr {
    border: none;
    outline: none;
    height: 0.7px;
    background: var(--silver-color);
  }
  & form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5px;
    margin: 1.4rem 0;

    & input {
      border: 1px solid var(--silver-color);
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
      color: var(--silver-color);
    }
    & h1:nth-child(2) {
      color: var(--silver-color);
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
      border: 1px solid var(--silver-color);
    }
    & .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      color: var(--dark-color);
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

    & .card__title {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--silver-color);
    }

    & .card__price {
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--silver-color) !important;
    }

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
  color: var(--slider-color);
  padding: 5px 11px;
  border: 1px solid #ffffff34;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: var(--dark-color);
  letter-spacing: 2px;
  width: 100%;
  height: 2.5rem;
  &:focus {
    outline: none;
    background: var(--dark-color);
    color: var(--white-color);
  }
  &:focus-visible {
    outline: none;
    background: var(--dark-color);
    color: var(--silver-color);
  }
  @media only screen and (max-width: 768px) {
    /* height: 2.5rem; */
  }
  @media only screen and (max-width: 330px) {
    width: 100%;
  }
`;

const RegionDropdownCustom = styled(RegionDropdown)`
  color: var(--slider-color);
  padding: 5px 11px;
  border: 1px solid #ffffff34;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: var(--dark-color);
  letter-spacing: 2px;
  width: 100%;
  height: 2.5rem;
  &:focus {
    outline: none;
    background: var(--dark-color);
    color: var(--silver-color);
  }
  &:focus-visible {
    border: 3px solid var(--background-color);
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 2.5rem;
  }
`;

const Container = styled.div`
  margin: 2rem 0;

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

export default Checkout;
