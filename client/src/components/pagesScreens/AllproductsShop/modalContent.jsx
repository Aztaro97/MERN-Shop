import React, { useState, useEffect } from "react";
import { Radio } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTumblr,
  FaSnapchatGhost,
} from "react-icons/fa";
import { addToCart } from "../../../flux/actions/cartAction";
import { warningMessage } from "../../message";

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

const GalleryImg = ({ product }) => {
  const [currentImg, setCurrentImg] = useState("");

  const hanleClick = (e) => {
    console.log(e.target.src);
    setCurrentImg(e.target.src);
  };

  useEffect(() => {
    if (product.imageUrl.length > 0) {
      setCurrentImg(product.imageUrl[0].url);
    }
  }, []);

  return (
    <GallerieContent>
      <img
        className="current-img"
        src={product.imageUrl.length > 0 ? currentImg : picture1}
        alt=""
      />
      <div className="aside-img">
        {product.imageUrl.slice(1, 5).map((image, index) => (
          <img key={index} src={image.url} alt="" onClick={hanleClick} />
        ))}
      </div>
    </GallerieContent>
  );
};

const Contente = ({ product, setShowModal }) => {
  const [qtyNumber, setQtyNumber] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("");

  const handleSizeSelected = (e) => {
    setSizeSelected(e.target.value);
    console.log(e.target.value);
  };

  const dispatch = useDispatch();

  const addToCartHandler = (id, qty, size) => {
    if (!sizeSelected) {
      warningMessage("Select the size to add to cart", 10);
    } else {
      dispatch(addToCart(id, qty, size));
      setShowModal(false);
    }
  };

  const sharingUrl = window.location.href

  return (
    <ContenteContainer>
      <Row>
        <h1>{product.name}</h1>
        <p style={{ marginBottom: "10px" }}>{product.description}</p>
        <h5 className="merchant_name">
          Product Selling by : <span>{product.user.company.name}</span>{" "}
        </h5>
      </Row>
      <Row>
        <div className="productDetail">
          {product.variantSize.length > 0 && (
            <div className="size">
              <h2>size</h2>
              <div className="select-size">
                <Radio.Group
                  defaultValue={sizeSelected}
                  buttonStyle="solid"
                  onChange={handleSizeSelected}
                >
                  {product.variantSize.map((size, index) => (
                    <RadioButton
                      value={size}
                      key={index}
                      className="radio-group-container"
                    >
                      {size}
                    </RadioButton>
                  ))}
                </Radio.Group>
              </div>
            </div>
          )}
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
            // disabled={!sizeSelected && true}
            onClick={() =>
              addToCartHandler(product._id, qtyNumber, sizeSelected)
            }
          >
            add to cart
          </button>

          <hr />

          <div className="social-media">
            <p>Share:</p>
            <div className="link-list">
              <a className="media-link" href="#/" target="_blank">
                <FaTumblr className="icon" />
              </a>
              <a className="media-link" href={`whatsapp://send?text=${sharingUrl}`} target="_blank"  rel="noreferrer" >
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
              <a className="media-link" href={`https://www.facebook.com/sharer/sharer.php?u=${sharingUrl}`} target="_blank"  rel="noreferrer">
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
    object-fit: contain;
    @media only screen and (max-width: 500px) {
      height: 300px;
    }
  }

  & .aside-img {
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    width: 30%;

    & img {
      width: 100px;
      height: 100px;
      object-fit: cover;
      margin-left: 15px;
      border-radius: 10px;
      border: 4px solid #c68787;
      cursor: pointer;
      margin-bottom: 4px;
      @media only screen and (max-width: 500px) {
        height: 70px;
        margin-left: 5px;
      }
    }
  }
`;

const Container = styled.div`
  /* padding:1.5rem; */
  @media only screen and (max-width: 500px) {
    padding: 1rem 0;
  }
`;
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media only screen and (max-width: 750px) {
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
    font-size: 0.9rem;
  }

  & .merchant_name {
    font-size: 1rem;
    font-weight: 700;
    & span {
      color: var(--jungle-color);
      text-transform: uppercase;
    }
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
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      & .select-size {
        display: flex;
        justify-content: space-between;

        & .radio-group-container {
          & .ant-radio-button-wrapper {
            margin-right: 1rem;
            margin-bottom: 0.5rem;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            line-height: 40px;
            padding: 0 0.7rem;

            & > * {
              display: flex;
              align-items: center;
              width: 100%;
            }
            &:hover {
              color: var(--orange-color);
            }
            &:not(:first-child):before {
              display: none;
            }
            &.ant-radio-button-wrapper-checked {
              background-color: var(--orange-color);
              border-color: var(--orange-color);
              &:hover {
                color: #fff;
              }
            }
          }
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
      padding: 0.4rem;
      cursor: pointer;

      &:hover {
        opacity: 0.9;
      }
    }

    & hr {
      outline: none;
      border: none;
      height: 0.1px;
      background: #cecece;
      margin-top: 0.3rem;
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

          & .icon {
            font-size: 2.3rem;
            padding: 0.3rem;
            background: #92a4b3;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;

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
  padding: 1rem;
`;

const RadioButton = styled(Radio.Button)`
  border-color: var(--orange-color) !important ;
  &:hover {
    color: #111 !important
  }
  & .ant-radio-button-checked  {
    background: var(--orange-color);
  }
  & .ant-radio-button-checked .ant-radio-button-inner:after {
    background-color: var(--orange-color);
  }
  & .ant-radio-button:hover .ant-radio-button-inner {
    border-color: var(--orange-color);
    color: #fff;
  }
`;

export default ModalContent;
