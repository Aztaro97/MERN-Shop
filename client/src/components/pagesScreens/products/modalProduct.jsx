import React, { useState, useEffect } from "react";
import { Col, Radio, Row } from "antd";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import Slider from "react-slick";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTumblr,
  FaSnapchatGhost,
} from "react-icons/fa";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TumblrShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import { addToCart } from "../../../flux/actions/cartAction";
import { warningMessage } from "../../message";
import { Event } from "../../Tracking/tracking";

import "./ProductItem.css";

const empty_pc = "/img/ecommerce/empty.jpg";

const ModalContent = ({ product, setShowModal }) => {
  const settings = {
    customPaging: function(i) {
      return (
        <a>
          <img src={product && product.imageUrl[i].url} alt="" />
        </a>
      );
    },
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Container>
      <Row gutter={[40, 70]}>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <Slider {...settings} arrows={false}>
            {product.imageUrl &&
              product.imageUrl.map((img, index) => (
                <div key={index}>
                  <img src={img.url} alt="" />
                </div>
              ))}
          </Slider>
        </Col>
        <Col
          xs={{ span: 24 }}
          sm={{ span: 24 }}
          md={{ span: 12 }}
          lg={{ span: 12 }}
        >
          <ProductDetails product={product} setShowModal={setShowModal} />
        </Col>
      </Row>
    </Container>
  );
};

const ProductDetails = ({ product, setShowModal }) => {
  const [qtyNumber, setQtyNumber] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");

  const dispatch = useDispatch();

  const addToCartHandler = (id, qty, size, color, merchant) => {
    if (!sizeSelected && product.variantSize.length > 0) {
      warningMessage("Select the size to add to cart", 10);
    } else if (!colorSelected && product.variantColor.length > 0) {
      warningMessage("Select the color to add to cart", 10);
    } else {
      dispatch(addToCart(id, qty, size, color, merchant));
      setShowModal(false);
    }
  };

  const sharingUrl = `http://au79code.herokuapp.com/product/${product?._id}`;

  const handleAddCard = (
    productId,
    qty,
    sizeSelected,
    colorSelected,
    companyInfo
  ) => {
    addToCartHandler(productId, qty, sizeSelected, colorSelected, companyInfo);
  };

  return (
    <ContenteStyling>
      <h1>{product.name}</h1>
      <p style={{ marginBottom: "10px" }}>{product.description}</p>
      <h5 className="merchant_name">
        Product Selling by : <span>{product.user.company.name}</span>{" "}
      </h5>
      <Wrapper>
        <div className="productDetail">
          {/* ////////////////   Product Size  ////////////// */}
          {product.variantSize.length > 0 && (
            <div className="variant_container">
              <h2>size</h2>
              <div className="select-variant">
                <Radio.Group
                  defaultValue={sizeSelected}
                  buttonStyle="solid"
                  onChange={(e) => setSizeSelected(e.target.value)}
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
          {/* ////////////////   Product Color  ////////////// */}
          {product.variantColor.length > 0 && (
            <div className="variant_container">
              <h2>color</h2>
              <div className="select-variant">
                <Radio.Group
                  defaultValue={colorSelected}
                  buttonStyle="solid"
                  onChange={(e) => setColorSelected(e.target.value)}
                >
                  {product.variantColor.map((color, index) => (
                    <RadioButton
                      value={color}
                      key={index}
                      className="radio-group-container"
                    >
                      {color}
                    </RadioButton>
                  ))}
                </Radio.Group>
              </div>
            </div>
          )}
          <div className="price_container">
            <p className="price">
              <span>{product.price}</span> AED
            </p>
            <p className="old_price">
              <span>{product.compareAtPrice}</span> AED
            </p>
          </div>
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
              handleAddCard(
                product._id,
                qtyNumber,
                sizeSelected,
                colorSelected,
                product.user.company
              )
            }
          >
            add to cart
          </button>

          <hr />

          <div className="social-media">
            <p>Share:</p>
            <div className="link-list">
              <TumblrShareButton
                className="media-link"
                url={sharingUrl}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#au79code"
              >
                <FaTumblr className="icon" />
              </TumblrShareButton>
              <WhatsappShareButton
                className="media-link"
                url={sharingUrl}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#au79code"
              >
                <FaWhatsapp className="icon" />
              </WhatsappShareButton>
              <InstapaperShareButton
                className="media-link"
                url={sharingUrl}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#au79code"
              >
                <FaInstagram className="icon" />
              </InstapaperShareButton>
              <TwitterShareButton
                className="media-link"
                url={sharingUrl}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#au79code"
              >
                <FaTwitter className="icon" />
              </TwitterShareButton>
              {/* <a
                className="media-link"
                url={sharingUrl}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#au79code"
              >
                <FaSnapchatGhost className="icon" />
              </a> */}
              <FacebookShareButton
                className="media-link"
                url={sharingUrl}
                quote={"CampersTribe - World is yours to explore"}
                hashtag="#au79code"
              >
                <FaFacebookF className="icon" />
              </FacebookShareButton>
            </div>
          </div>
        </div>
      </Wrapper>
    </ContenteStyling>
  );
};

const Container = styled.div`
  background: var(--dark-light-color);
  padding: 1rem;

  /* ***********    */
  & .slick-slider img {
    width: 100%;
  }
  & .slick-dots li {
    width: 50px !important;
  }
  & .slick-slider .slick-dots.slick-thumb img {
    width: 100% !important;
    object-fit: cover;
  }

  /* padding:1.5rem; */
  @media only screen and (max-width: 500px) {
    padding: 1rem 0;
  }
`;

const Wrapper = styled.div`
  & .productDetail {
    max-width: 20rem;

    & .variant_container {
      margin: 1.3rem 0;
      & h2 {
        color: var(--orange-color);
        font-size: 1rem;
        font-weight: 700;
        letter-spacing: 2px;
        text-transform: uppercase;
      }
      & .select-variant {
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
            background: transparent !important;

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
              background-color: var(--silver-color) !important;
              border-color: var(--orange-color);
              &:hover {
                color: #fff;
              }
            }
          }
          &.ant-radio-button-wrapper
            .ant-radio-group-solid
            .ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):active {
            background-color: var(--orange-color);
          }
          &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled)::before {
            background-color: none !important;
          }
          &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):hover::before {
            background-color: none !important;
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
            background: transparent;
            border-radius: 5px;
            transition: all 0.2s ease-in-out;
            color: var(--silver-color);

            &:hover {
              background: var(--silver-color);
              color: var(--dark-color);
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
    background: transparent;
    outline: none;
    border: none;
    cursor: pointer;
    padding: 0 1.7rem;
    font-size: 1.4rem;
    color: var(--silver-color);
    &:nth-child(1) {
      border-right: 1px solid var(--silver-color);
    }
    &:nth-child(3) {
      border-left: 1px solid var(--silver-color);
    }
  }
`;

const ContenteStyling = styled.div`
  & h1 {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 1.5rem;
    color: var(--silver-color);
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  & p {
    color: var(--silver-color);
    margin: 0;
    font-size: 0.9rem;
  }

  & .price_container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    & .price {
      color: var(--orange-color);
      font-size: 1.3rem;
      font-weight: 700;
    }
    & .old_price {
      color: var(--silver-color);
      font-size: 1.3rem;
      text-decoration: line-through;
    }
  }

  & .merchant_name {
    font-size: 1rem;
    font-weight: 700;
    color: var(--silver-color);
    letter-spacing: 1px;
    & span {
      color: var(--orange-color);
      text-transform: uppercase;
    }
  }
`;

const RadioButton = styled(Radio.Button)`
  border-color: var(--orange-color) !important ;
  &:hover {
    color: #111 !important;
  }
  & .ant-radio-button-checked {
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
