import { Col, InputNumber, Radio, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import {
  FacebookShareButton,
  WhatsappShareButton,
  TumblrShareButton,
  TwitterShareButton,
  InstapaperShareButton,
} from "react-share";
import {
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaFacebookF,
  FaTumblr,
  FaSnapchatGhost,
} from "react-icons/fa";
import { listProductDetails } from "../../../flux/actions/productAction";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";

import { baseUrl } from "./config.js";
import { warningMessage } from "../../message";
import { addToCart } from "../../../flux/actions/cartAction";

function ProductDetailsScreen() {
  const [qtyNumber, setQtyNumber] = useState(1);
  const [sizeSelected, setSizeSelected] = useState("");
  const [colorSelected, setColorSelected] = useState("");

  const params = useParams();
  const productId = params.id;

  const sharingUrl = window.location.href;

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();

  const addToCartHandler = (id, qty, size, color, merchant) => {
    if (!sizeSelected && product.variantSize.length > 0) {
      warningMessage("Select the size to add to cart", 10);
    } else if (!colorSelected && product.variantColor.length > 0) {
      warningMessage("Select the color to add to cart", 10);
    } else {
      dispatch(addToCart(id, qty, size, color, merchant));
    }
  };

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

  const handleAddCard = (
    productId,
    qty,
    sizeSelected,
    colorSelected,
    companyInfo
  ) => {
    addToCartHandler(productId, qty, sizeSelected, colorSelected, companyInfo);
    // Event("product", "Product added to cart", productId);
  };

  useEffect(() => {
    if (!product._id || product._id !== productId) {
      dispatch(listProductDetails(productId));
    }
  }, [dispatch, product, productId]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Container>
          <Row gutter={[40, 70]}>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Slider {...settings} arrows={false}>
                {product.imageUrl &&
                  product.imageUrl.map((img, index) => (
                    <div key={index}>
                      <img src={img.url} alt="" />
                    </div>
                  ))}
              </Slider>
            </Col>
            <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <h2 className="product_name">{product.name}</h2>
              <div className="price_container">
                <p className="price">
                  AED <span>{product.price}</span>{" "}
                </p>
                <p className="old_price">
                  AED <span>{product.compareAtPrice}</span>{" "}
                </p>
              </div>
              <p className="product_description">{product.description}</p>
              {product.variantSize?.length > 0 && (
                <div className="variant_container">
                  <h5>size</h5>
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
              {product.variantColor?.length > 0 && (
                <div className="variant_container">
                  <h5>color</h5>
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

              {/* **********   SELECT QUANTITY ******** */}
              <SelectNumber>
                <h5>Quality</h5>
                <div className="input_wrapper">
                  <button
                    onClick={() =>
                      qtyNumber > 1 ? setQtyNumber(qtyNumber - 1) : qtyNumber
                    }
                  >
                    -
                  </button>
                  <p>{qtyNumber}</p>
                  <button onClick={() => setQtyNumber(qtyNumber + 1)}>+</button>
                </div>
              </SelectNumber>

              <p className="merchant_name">
                Product Selling by <span>{product.user?.company.name}</span>{" "}
              </p>

              <button
                type="button"
                className="_btn_add_cart"
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

              {/* ******    SOCIAL MEDIA  SHARE   ******8 */}
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
            </Col>
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 4rem 2rem;
  background: var(--dark-light-color);
  & .product_name {
    color: var(--silver-color);
    text-transform: capitalize;
    letter-spacing: 1px;
    margin-bottom: 1rem;
  }
  & .price_container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & .price {
      color: var(--orange-color);
      font-size: 1.4rem;
      font-weight: 700;
    }
    & .old_price {
      color: var(--silver-color);
      text-decoration-line: line-through;
    }
  }
  & .product_description {
    color: var(--silver-color);
    letter-spacing: 1px;
  }
  & .merchant_name {
    letter-spacing: 1px;
    margin: 1rem 0;
    color: var(--silver-color);
    & span {
      color: var(--orange-color);
      text-transform: capitalize;
    }
  }

  /*  ***********    */
  & .variant_container {
    margin-bottom: 1rem;
    & h5 {
      color: var(--orange-color);
      text-transform: capitalize;
    }
  }

  /* ***************  SOCIAL MEDIA STYLING   ********** */

  & .social-media {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    margin-top: 1rem;

    & p {
      margin: 0;
      font-size: 1.4rem;
      color: var(--orange-color);
    }

    & .link-list {
      & .media-link {
        text-decoration: none;
        color: #fff;
        margin-left: 5px;

        & .icon {
          font-size: 1.8rem;
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

  /* ****  BUTTON STYLING   ******************************** */
  & ._btn_add_cart {
    background-color: var(--orange-600-color);
    color: var(--dark-color);
    margin: 1rem 0;
    padding: 0.9rem 0;
    width: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
    border: none !important;
    &:hover {
      opacity: 0.9;
    }
  }
  /* ***********    */
  & .slick-slider img {
    width: 100%;
  }
  & .slick-dots li {
    width: 50px !important;
    @media only screen and (max-width: 500px) {
      width: 40px !important;
    }
  }
  & .slick-slider .slick-dots.slick-thumb img {
    width: 100% !important;
    object-fit: cover;
  }
`;

const RadioButton = styled(Radio.Button)`
  border-color: var(--silver-color) !important ;
  border-left: 1px solid var(--silver-color) !important ;
  background-color: transparent !important;
  color: var(--silver-color) !important;
  &:hover {
    background: var(--orange-600-color) !important;
    color: var(--dark-color) !important;
  }
  & .ant-radio-button-checked {
    background: var(--orange-color);
    color: var(--dark-color) !important;
  }
  & .ant-radio-button-checked .ant-radio-button-inner:after {
    background-color: var(--orange-color);
  }
  & .ant-radio-button:hover .ant-radio-button-inner {
    border-color: var(--orange-color);
    color: #fff;
  }
`;

const SelectNumber = styled.div`
  margin: 10px 0;
  & h5 {
    color: var(--orange-color);
    text-transform: capitalize;
  }

  & .input_wrapper {
    border: 1px solid var(--silver-color);
    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 300px;
  }

  & p {
    margin: 0 1.3rem;
    display: inline;
    /* padding: 0 8rem; */
    font-size: 1rem;
    color: var(--silver-color);
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

export default ProductDetailsScreen;
