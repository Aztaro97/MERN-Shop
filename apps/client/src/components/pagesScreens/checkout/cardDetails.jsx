import React from 'react'
import {
    Container,
    Header,
    Form,
    Border,
    Grid,
    ContainerCart,
    Card,
    RadioB,
  } from "./StyledPayment";

const CardItemDetails = ({ cartItems, ShippingCost }) => {
    //  Calculate function
    const addDecimal = (num) => {
      return (Math.round(num * 100) / 100).toFixed(2);
    };
    return (
      <ContainerCart>
        {cartItems.map((item, index) => (
          <Card key={index}>
            <div class="card__image">
              <img src={item.image.length > 0 && item.image[0].url} alt="" />
              <p className="quantity">{item.qty}</p>
            </div>
            <div class="card__details">
              <h1 class="card__title">{item.name}</h1>
              <h1 class="card__price">{addDecimal(item.price)} AED</h1>
            </div>
          </Card>
        ))}
  
        {/* <hr />
        <form action="">
          <input type="text" placeholder="DISCOUNT CODE" />
          <ButtonC>apply</ButtonC>
        </form> */}
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
          <h1>aed {ShippingCost.toFixed(2)}</h1>
        </div>
        <hr />
        <div className="solde">
          <h1>total</h1>
          <h1>
            aed{" "}
            {(
              cartItems.reduce((acc, item) => acc + item.qty * item.price, 0) +
              ShippingCost
            ).toFixed(2)}{" "}
          </h1>
        </div>
      </ContainerCart>
    );
  };

export default CardItemDetails
