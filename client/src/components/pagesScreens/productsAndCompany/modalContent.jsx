import React, { useState } from "react";
import { Modal } from "antd";
import {useDispatch} from "react-redux"
import styled from "styled-components";
import { FaWhatsapp, FaInstagram, FaTwitter, FaFacebookF, FaTumblr, FaSnapchatGhost } from "react-icons/fa"
import {addToCart} from "../../../flux/actions/cartAction"

import picture from "../../../img/Background.png";
import picture1 from "../../../img/productimg.png";


const ModalContent = ({ product, setShowModal }) => {
  return (
    <Container>
      <Grid>
        <GalleryImg product={product} />
        <Contente product={product} setShowModal={setShowModal} />
      </Grid>
    </Container>
  );
};


const GalleryImg = ({product}) => {
  const [currentImg, setCurrentImg] = useState(picture);

  const hanleClick = (e) => {
    console.log(e.target.src);
    setCurrentImg(e.target.src);
  };
  return (
    <GallerieContent>
      <img className="current-img" src={currentImg} alt="" />
      <div className="aside-img">
        <img src={picture1} alt="" onClick={hanleClick} />
        <img src={picture} alt="" onClick={hanleClick} />
        <img src={picture} alt="" onClick={hanleClick} />
        <img src={picture} alt="" onClick={hanleClick} />
      </div>
    </GallerieContent>
  );
};

const Contente = ({product, setShowModal}) => {
  const [qtyNumber, setQtyNumber] = useState(1);
  const [size, setSize] = useState(null);

  const handleClickSize = (e) => {
    const number = parseInt(e.target.innerText);
    setSize(number)
    console.log(size)
  }

  const dispatch = useDispatch();
  
  const addToCartHandler = (id, qty) => {
    dispatch(addToCart(id,qty))
    setShowModal(false)
  }

  return (
    <ContenteContainer>
      <Row>
        <h1>{product.name}</h1>
        <p>{product.description}</p>
      </Row>
      <Row>
        <div className="productDetail">
          <div className="size">
            <h2>size</h2>
            <div className="select-size">
              <p onClick={(e) => handleClickSize(e)}>13</p>
              <p onClick={(e) => handleClickSize(e)}>14</p>
              <p onClick={(e) => handleClickSize(e)}>15</p>
              <p onClick={(e) => handleClickSize(e)}>16</p>
            </div>
          </div>
          <h1 className="price">
            {" "}
            <span>{product.price}</span> DR{" "}
          </h1>
          <Btn>
            <button
              onClick={() =>
                qtyNumber > 1 ? setQtyNumber(qtyNumber - 1) : qtyNumber
              }
            >
              -
            </button>
            <p>{qtyNumber}</p>
            <button onClick={() => setQtyNumber(qtyNumber + 1)}>+</button>
          </Btn>

          <button 
          type="button"
          className="btn" 
          onClick={() => addToCartHandler(product._id, qtyNumber )} 
          >
            add to cart
          </button>

          <hr />
            
            <div className="social-media">
              <p>Share:</p>
              <div className="link-list">
                <a className="media-link" href="#/">
                  <FaTumblr className="icon" />
                </a>
                <a className="media-link" href="#/">
                  <FaWhatsapp className="icon" />
                </a>
                <a className="media-link" href="#/">
                  <FaInstagram className="icon" />
                </a>
                <a className="media-link" href="#/">
                  <FaTwitter className="icon" />
                </a>
                <a className="media-link" href="#/">
                  <FaSnapchatGhost className="icon" />
                </a>
                <a className="media-link" href="#/">
                  <FaFacebookF className="icon" />
                </a>
              </div>
            </div>

        </div>
      </Row>
    </ContenteContainer>
  );
};



const GallerieContent = styled.div`
  display: flex;
  padding: 1rem;

  & .current-img {
    border: 4px solid #c68787;
    border-radius: 10px;
    max-height: 100%;
    width: 70%;
    height: 460px;
    object-fit: cover;
    @media only screen and (max-width:500px) {
        height: 300px;
      }
  }

  & .aside-img {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30%;

    & img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-left: 15px;
      border-radius: 10px;
      border: 4px solid #c68787;
      cursor: pointer;
      @media only screen and (max-width:500px) {
        height: 70px;
        margin-left: 5px;
      }
    }
  }
`;

const Container = styled.div`
  /* padding:1.5rem; */
  @media only screen and (max-width:500px) {
    padding: 1rem 0;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width:750px) {
    grid-template-columns: 1fr;
  }
`;

const Row = styled.div`
  & h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 2rem;
  }
  & p {
    color: var(--silver-color);
    margin: 0;
    font-size: .9rem;
  }

  & .price {
    color: var(--jungle-color);
    font-size: 1.3rem;
    font-weight: 700;
  }

  & .productDetail {
    max-width: 20rem;

    & .size {
      margin: 1rem 0;
      & h2 {
        color: var(--orange-color);
        /* font-weight: 700; */
      }
      & .select-size {
        display: flex;
        justify-content: space-between;

        & p {
          display: flex;
        justify-content: center;
        align-items: center;
          color: var(--orange-color);
          font-size: 1.2rem;
          margin: 0;
          padding: .4rem;
          border-radius: 50%;
          border: 1px solid var(--silver-color);
          cursor: pointer;
        }
      }
    }

    & .btn {
      outline: none;
      text-transform: uppercase;
      text-align: center;
      width: 100%;
      margin: 1rem 0;
      border: none;
      border-radius: 10px;
      background: var(--orange-color);
      color: #fff;
      padding: .4rem;
      cursor: pointer;
      
      &:hover {
        opacity: .9;
      }
    }

    & hr {
      outline: none;
        border: none;
        height:.1px;
        background: #cecece;
        margin-top: .3rem;
    }

    & .social-media {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 1rem;

      & p {
        margin: 0;
        font-size: 1.2rem;
      }
    

      & .link-list {
        

        & .media-link {
          text-decoration: none;
          color: #fff;
          margin-left: 5px;

          & .icon  {
            font-size: 2.3rem;
            padding: .3rem;
            background: #92a4b3;
            border-radius: 5px;
            transition: all .2s ease-in-out;

            &:hover { 
              background: var(--orange-color);
            }
          }
        }
      }
    }

  }
`;

const Btn = styled.div`
  border: 1px solid var(--silver-color);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  & p {
    margin: 0 1.3rem;
    display: inline;
    /* padding: 0 8rem; */
    font-size: 1.4rem;
    /* height:2rem */
  }

  & button {
    /* width: 2.5rem; */
    /* height: 1.8rem; */
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0 1.7rem;
    font-size: 1.4rem;

    &:nth-child(1) {
      border-right: 1px solid var(--silver-color);
    }
    &:nth-child(3) {
      border-left: 1px solid var(--silver-color);
    }
  }
`;

const ContenteContainer = styled.div`
  padding:1rem;
`

export default ModalContent;
