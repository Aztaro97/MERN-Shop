import React from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import ButtonC from "../../ButtonComponeent";
import MainContainer from "../../MainContainer"

import piture from "../../../img/card_pic.png";

function ThankPage() {

  const history = useHistory();

  return (
    <MainContainer>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>Back</a>
        <h2>SHOPPING CART</h2>
      </Header>
      <Grid>
        <SectionLeft>
          <h1>thank you rana</h1>
          <p>Your order is confirmed</p>
          <p>
            You’ll receive a confirmation email with your order number shortly.
          </p>
          <ButtonC className="btn">Continue Shopping</ButtonC>
        </SectionLeft>
        <SectionRight />
      </Grid>
    </MainContainer>
  );
}

const SectionLeft = styled.div`
  padding: 2rem;

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


const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding:0 1rem;

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

export default ThankPage;
