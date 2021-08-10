import React, { useState, useEffect } from "react";
import { Carousel, Image } from "antd";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { AiOutlineClose } from "react-icons/ai";
import { Link, useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../../../flux/actions/cartAction";
import ButtonC from "../../ButtonComponeent";
// import {} from ""

import picture from "../../../img/productimg.png";

function CartComponent({ location }) {
  const { cartItems, error } = useSelector((state) => state.cart);
  const history = useHistory();

  const dispatch = useDispatch();
  const handleRemoveCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleCheckOut = () => {
    history.push("/auth?redirect=shipping");
  };

  // useEffect(() => {
  //   if (user)
  // }, [redirect]);

  return (
    <Container>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>
          Back
        </a>
        <h2>Shoping Cart</h2>
      </Header>
      {error && <h1>Error : {error}</h1>}
      <CartContent>
        {cartItems.length === 0 ? (
          <EmptyCart>
            <h5>Your Cart item is currently Empty</h5>
            <Link className="link" to="/products">
              Go Shopping <span className="arrow">&#8594;</span>
            </Link>{" "}
          </EmptyCart>
        ) : (
          <>
            {cartItems.map((item, index) => (
              <>
                <Row>
                  <GridTop>
                    <p>product</p>
                    <p>price</p>
                    <p>quantity</p>
                    <p>total</p>
                  </GridTop>
                  <hr />
                </Row>

                <Row key={index}>
                  <Grid>
                    <div className="cart">
                      <img src={picture} alt="" />
                      <div className="cart-name">
                        <h3>{item.name}</h3>
                        {item.sizeSelected && (
                          <h3 className="cart_size">
                            Size : <span>{item.sizeSelected}</span>{" "}
                          </h3>
                        )}
                        <button
                          type="button"
                          onClick={() => handleRemoveCart(item.product)}
                        >
                          <AiOutlineClose size={20} /> remove
                        </button>
                      </div>
                    </div>
                    <p className="price">
                      {" "}
                      <span className="mobile_view">Price: </span> {item.price}{" "}
                      AED
                    </p>
                    <Btn className="qty_btn">
                      <button
                        onClick={() =>
                          dispatch(addToCart(item.product, item.qty - 1))
                        }
                      >
                        -
                      </button>
                      <p>{item.qty}</p>
                      <button
                        onClick={() =>
                          dispatch(addToCart(item.product, item.qty + 1))
                        }
                      >
                        +
                      </button>
                    </Btn>
                    <p>
                      {" "}
                      <span className="mobile_view">Total: </span>
                      {item.price * item.qty} AED
                    </p>
                  </Grid>
                  <hr />
                </Row>
              </>
            ))}
          </>
        )}

        {cartItems.length !== 0 && (
          <>
            <Row>
              <div className="suptotal">
                <p>suptotal</p>
                <p>
                  {cartItems
                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                    .toFixed(2)}{" "}
                  AED
                </p>
              </div>
            </Row>
            <Row>
              <div className="btn-checkout">
                <ButtonC type="button" onClick={handleCheckOut}>
                  check out
                </ButtonC>
                <Link className="link" to="/products">
                  continue shopping
                </Link>
              </div>
            </Row>
          </>
        )}
      </CartContent>
    </Container>
  );
}

const Container = styled.div`
  max-width: var(--max-width);
  margin: 7rem auto 0;
  @media only screen and (max-width: 1100px) {
    padding: 0 2rem;
  }
`;

const Row = styled.div`
  & hr {
    outline: none;
    border: none;
    height: 0.1px;
    background: #cecece;
    margin-top: 0.3rem;
  }

  & .suptotal {
    display: flex;
    justify-content: space-between;
    text-transform: uppercase;
    margin-top: 1.3rem;

    & P {
      font-weight: 700;
      &:nth-child(1) {
        color: var(--orange-color);
      }
    }
  }

  & .btn-checkout {
    text-align: center;
    margin-top: 1rem;
    margin-bottom: 4rem;
  }

  & .link {
    display: block;
    text-decoration: none;
    color: var(--orange-color);
    margin-top: 1rem;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 0.9rem;
    &:hover {
      opacity: 0.9;
    }
  }
`;

const Header = styled.div`
  height: 5rem;
  width: 100%;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 2rem;
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    font-weight: 700;
    margin-bottom: 0;
  }
`;

const CartContent = styled.div`
  padding: 1rem 0 3rem 0;
`;

const GridTop = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10rem 14rem 10rem;

  & p {
    color: var(--orange-color);
    text-transform: uppercase;
    font-weight: 700;
    margin: 0;
  }
  @media only screen and (max-width: 900px) {
    display: none;
  }
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 10rem 14rem 10rem;
  margin-top: 2rem;

  & .cart {
    display: flex;

    & img {
      width: 12.5rem;
      height: 9.4rem;
      border-radius: 10px;
      border: 1px solid var(--background-color);
      object-fit: cover;
      position: relative;
      bottom: 1rem;
    }
    & .cart-name {
      display: flex;
      flex-direction: column;
      margin-left: 1rem;

      & h3 {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 0.9rem;
        letter-spacing: 1px;
      }
      & .cart_size {
        color: var(--orange-color);
        font-weight: 700;
        margin-bottom: 0.9rem;
        &.cart_size span {
          /* color: #000 !important; */
          font-weight: 700;
        }
      }

      & button {
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        background: transparent;
        cursor: pointer;
        color: var(--orange-color);
        text-transform: uppercase;
        font-size: 0.9rem;
        transition: all 0.3s ease-in-out;

        &:hover {
          font-weight: 700;
        }

        & > * {
          margin-right: 0.6rem;
        }
      }
    }
  }

  & p {
    color: #aaaaac;
    font-weight: 700;
    & .mobile_view {
      display: none;
      color: var(--orange-color);
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;

    & p,
    .qty_btn {
      margin-top: 1rem;
      & .mobile_view {
        display: inline;
      }
    }
  }
`;

const Btn = styled.div`
  /* display: flex; */

  & p {
    margin: 0 1.3rem;
    display: inline;
  }

  & button {
    padding: 0 1rem;
    background: transparent;
    outline: none;
    border-radius: 10px;
    border: 1px solid var(--silver-color);
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

const EmptyCart = styled.div`
  text-align: center;
  position: relative;
  top: 2rem;

  & .link {
    color: #fff;
    background: var(--orange-color);
    padding: 5px 3rem;
    text-decoration: none;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 700;
    &:hover {
      opacity: 0.9;
    }
    & .arrow {
      font-size: 1.5rem;
      padding-left: 1rem;
    }
  }
`;

export default CartComponent;
