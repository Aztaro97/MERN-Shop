import React, {useState} from "react";
import styled from "styled-components";
import {Modal} from "antd"
import ButtonC from "../../ButtonComponeent";
import { Link, useHistory } from "react-router-dom";
import InputRadio from "../../InputRadioComponent";

import piture from "../../../img/card_pic.png";
import InputComponents from "../../InputComponents";
import CheckBoxComponent from "../../CheckBoxComponent";
import SelectC from "../../SelectComponents"
import MapComponent from "../checkout/map/getCurrentPosition";


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
  const [visible, setVisible] = useState(false);
  const [localistion, setLocalistion] = useState({
    city:"",
    address:"",
    cuntry:""
  })

  const history = useHistory();

  return (
    <Container>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>Back</a>
        <h2>PAYEMENT</h2>
      </Header>
      <Grid>
        <SectionLeft>
          <Border>
            <div className="row">
              <div>
                <h2>contact</h2>
                <p>rana@aucode.com</p>
              </div>
              <Link className="link">Change</Link>
            </div>
            <hr />
            <div className="row">
              <div>
                <h2>address</h2>
                <p>
                  15 Salah El Dien Street ,Sisis MArket , Egypt15 Salah El Dien
                  Street ,Sisis MArket , Egypt
                </p>
              </div>
              <Link className="link">Change</Link>
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
                <div className="radio">
                  <InputRadio
                    value="credit"
                    name="typePayment"
                    id="credit"
                    checked
                    // onChange={handleClickRadio}
                    //   onClick={handleClickRadio}
                  />
                  <label htmlFor="credit">Credit Card</label>
                </div>
                <hr />
                <div className="radio">
                  <InputRadio
                    value="cash"
                    name="typePayment"
                    id="cash"
                    // onChange={handleClickRadio}
                    //   onClick={handleClickRadio}
                  />
                  <label htmlFor="cash">Cash on delivery</label>
                </div>
              </div>
            </Border>
          </div>

          <div className="section_payment_info">
            <h2>payment information</h2>
            <InputComponents type="text" placeholder="Card Number" />
            <InputComponents type="text" placeholder="Full Name" />
            <InputComponents type="text" placeholder="MM/YY" />
            <InputComponents type="text" placeholder="CVC" />
            <CheckBoxComponent>save this information for the next time</CheckBoxComponent>
          </div>

          <div className="section_billing">
            <h2>Billing Address</h2>
            <p>Select the address that matches your card or payment method.</p>
            <Border style={{ padding: "1rem 0px" }}>
              <div className="radio-button">
                <div className="radio">
                  <InputRadio
                    value="sameAdress"
                    name="checkAddress"
                    id="sameAdress"
                    checked
                    // onChange={handleClickRadio}
                    //   onClick={handleClickRadio}
                  />
                  <label htmlFor="sameAdress">Same as shipping address</label>
                </div>
                <hr />
                <div className="radio">
                  <InputRadio
                    value="diffAdress"
                    name="checkAddress"
                    id="diffAdress"
                    // onChange={handleClickRadio}
                    //   onClick={handleClickRadio}
                  />
                  <label htmlFor="diffAdress">Use a different billing address</label>
                </div>
              </div>
            </Border>
          </div>

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
              <SelectC
               options={countryList} 
               placeholder="country" />
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
              <MapComponent setLocalistion={setLocalistion} setVisible={setVisible} />
            </Modal>
            </div>
            <InputComponents
              type="number"
              name="number"
              id="number"
              placeholder="PHONE NUMBER"
            />
            <CheckBoxComponent>save this information for the next time</CheckBoxComponent>
          </div>

          
        </SectionLeft>
        <SectionRight />
      </Grid>
      <div className="submition_btn">
            <ButtonC className="btn">Complete  order</ButtonC>
            <Link to="/products" className="link_back">
              back to information
            </Link>
          </div>
    </Container>
  );
}

const Border = styled.div`
  border: 3px solid var(--background-color);
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;

  & hr {
    margin: 0.7rem 0;
    border: none;
    background: var(--silver-color);
    height: 1px;
  }

  & .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .price {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & p {
        text-transform: uppercase;
        font-weight: 700;
      }
    }
    @media only screen and (max-width: 453px) {
      display: block;
    }

    & div {
      display: flex;
      align-items: center;
      & h2 {
        color: var(--orange-color);
        margin: 0;
        margin-right: 1rem;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
      }
      & p {
        display: flex;
        margin: 0;
        max-width: 300px;
      }
    }
    & .link {
      margin-left: auto;
      outline: none;
      border: none;
      background: transparent;
      color: var(--orange-color);
      &:hover {
        opacity: 0.9;
      }
    }
  }

  & .radio-button {
    & .radio {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      & label {
        margin-bottom: 0;
        cursor: pointer;
        margin-left: 0.7rem;
        color: var(--silver-color);
      }
    }
  }
`;

const SectionLeft = styled.div`
  padding: 2rem;

  & .section_shippindAdress {
    & > * {
      margin-bottom: .6rem;
    }
    & .inputRow {
      display: flex;
    }
    & .grid_input {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: .4rem;
    }
  }

  & .section_billing {
    margin-top: 1rem;
  }

  & .section_Type_Payment, & .section_billing {
    & h2 {
      font-size: 1.2rem;
      color: var(--silver-color);
      text-transform: uppercase;
      font-weight: 700;
      /* margin-bottom: 0; */
    }
    & p {
      color: var(--silver-color);
      margin-bottom: 0.7rem;
    }
  }
  & .section_payment_info {
    & > * {
      margin-bottom: .6rem;
    }
    & h2 {
      font-size: 1.2rem;
      color: var(--silver-color);
      text-transform: uppercase;
      font-weight: 700;
      /* margin-bottom: 0; */
    }
  }

  & h1 {
    color: var(--orange-color);
    text-transform: uppercase;
  }
  & p {
    color: var(--silver-color);
    margin-bottom: 0;
  }
  & .btn {
    position: relative;
    top: 3rem;
  }
  & .row {
    display: flex;
    /* justify-content: center; */
    align-items: center;

    & .link {
      color: var(--orange-color);
      /* margin-left: 2rem; */
    }

    
  }
`;

const SectionRight = () => {
  return (
    <ContainerCart>
      <Card>
        <div class="card__image">
          <img src={piture} alt="" />
          <p className="quantity">2</p>
        </div>
        <div class="card__details">
          <h1 class="card__title">Name of the Product</h1>
          <h1 class="card__price">100.00 AED</h1>
        </div>
      </Card>
      <Card>
        <div class="card__image">
          <img src={piture} alt="" />
          <p className="quantity">2</p>
        </div>
        <div class="card__details">
          <h1 class="card__title">Name of the Product</h1>
          <h1 class="card__price">100.00 AED</h1>
        </div>
      </Card>
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
  margin: 0 auto;
  padding: 5rem 0 3rem 0;

  & .submition_btn{
    /* margin-top: 2rem; */
    padding:2rem .5rem;
    display: flex;
    align-items: center;
    & .btn {
      padding:.5rem .6rem;
    }
    @media only screen and (max-width: 768px) {
      padding:2rem .5rem;
    }
  }

  & .link_back {
      color: var(--orange-color);
      margin-left: 2rem;
      text-transform: uppercase;
      font-weight: 700;
      @media only screen and (max-width: 768px) {
        margin-left: 1rem;
    }
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

const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  border: 1px solid #ececec;
  border-radius: 10px;
  @media only screen and (max-width: 768px) {
    display: block;
  }
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

export default Payment;
