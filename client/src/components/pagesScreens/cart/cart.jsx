import React, { useState } from "react";
import { Carousel, Image } from "antd";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { AiOutlineClose } from "react-icons/ai";
import {Link} from "react-router-dom"
import ButtonC from "../../ButtonComponeent";

import picture from "../../../img/productimg.png";

// const CarouselImage = () => {
//   const contentStyle = {
//     height: "160px",
//     color: "#fff",
//     lineHeight: "160px",
//     textAlign: "center",
//     background: "#364d79",
//     width: "10px",
//   };
//   return (
//     <Carousel autoplay effect="fade">
//       <Image src={picture} width={100} />
//       <Image src={picture} width={100} />
//       <div>
//         <h3 style={contentStyle}>3</h3>
//       </div>
//       <div>
//         <h3 style={contentStyle}>4</h3>
//       </div>
//     </Carousel>
//   );
// };

function CartComponent() {
  const [qty, setQty] = useState(1);
  return (
    <MainContainer>
      <Header>
        <a href="#/">Back</a>
        <h2>Shoping Cart</h2>
      </Header>
      <CartContent>
        <Row>
          <GridTop>
            <p>product</p>
            <p>price</p>
            <p>quantity</p>
            <p>total</p>
          </GridTop>
          <hr />
        </Row>
        <Row>
          <Grid>
            <div className="cart">
              <img src={picture} />
              <div className="cart-name">
                <h3>name of the product</h3>
                <button>
                  <AiOutlineClose size={20} /> remove
                </button>
              </div>
            </div>
            <p className="price">50.00 AED</p>
            <Btn>
              <button onClick={() => (qty > 1 ? setQty(qty - 1) : qty)}>
                -
              </button>
              <p>{qty}</p>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </Btn>
            <p>100.00 AED</p>
          </Grid>
          <hr />
        </Row>
        <Row>
          <Grid>
            <div className="cart">
              <img src={picture} />
              <div className="cart-name">
                <h3>name of the product</h3>
                <button>
                  <AiOutlineClose size={20} /> remove
                </button>
              </div>
            </div>
            <p className="price">50.00 AED</p>
            <Btn>
              <button onClick={() => (qty > 1 ? setQty(qty - 1) : qty)}>
                -
              </button>
              <p>{qty}</p>
              <button onClick={() => setQty(qty + 1)}>+</button>
            </Btn>
            <p>100.00 AED</p>
          </Grid>
          <hr />
        </Row>
        <Row>
            <div className="suptotal">
                <p>suptotal</p>
                <p>aed 2000.00</p>
            </div>
        </Row>
        <Row>
            <div className="btn-checkout">
            <ButtonC>check out</ButtonC>
            <Link className="link" to="/">continue shopping</Link>
            </div>
        </Row>
      </CartContent>
    </MainContainer>
  );
}

const Container = styled.div`
  max-width: var(--max-width);
  margin: 0 auto;
`


const Row = styled.div`
    & hr {
        outline: none;
        border: none;
        height:.1px;
        background: #cecece;
        margin-top: .3rem;
    }

    & .suptotal {
        display: flex;
        justify-content: space-between;
        text-transform: uppercase;
        font-weight: 700;
        margin-top: 1.3rem;
    }

    & .btn-checkout {
        text-align: center;
        margin-top: 1rem;
        margin-bottom: 4rem;
    }

    & .link {
        display:block;
        text-decoration: none;
        color: var(--orange-color);
        margin-top: 1rem;
        text-transform: uppercase;
        font-weight: 700;
        font-size: .9rem;
        &:hover {
            opacity:.9
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
          margin-right: .6rem;
        }
      }
    }
  }

  & p {
    color: #aaaaac;
    font-weight: 700;
  }
`;

const Btn = styled.div`
  /* display: flex; */

  & p {
    margin: 0 1.3rem;
    display: inline;
  }

  & button {
    padding:0 1rem;
    background: transparent;
    outline: none;
    border-radius: 10px;
    border: 1px solid var(--silver-color);
    cursor: pointer;
    font-size: 1.2rem;
  }
`;

export default CartComponent;
