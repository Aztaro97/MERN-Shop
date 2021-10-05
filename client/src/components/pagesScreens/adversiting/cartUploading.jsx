import { Col, Row } from "antd";
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import CheckOut from "./checkout/checkoutComponent";

const CartUploading = () => {
  const [isDesable, setIsDesable] = useState(true);

  // //////////////  first Banner
  const [qtyFirstBanner, setQtyFirstBanner] = useState(0);
  const [priceFirstBanner, setPriceFirstBanner] = useState(45);

  // ///////////   second Banner
  const [qtySecondBanner, setQtySecondBanner] = useState(0);
  const [priceBanner2, setPriceBanner2] = useState(60);

  // ////////   Business Image
  const [qtyBusinessImg, setQtyBusinessImg] = useState(0);
  const [priceBusinesImg, setPriceBusinesImg] = useState(25);

  // ////////////////  Service Images
  const [qtyServiceImg, setQtyServiceImg] = useState(0);
  const [priceService, setPriceService] = useState(15);

  // //////////////  Logo Images
  const [qtyLogoImg, setQtyLogoImg] = useState(0);
  const [priceLogo, setPriceLogo] = useState(8);

  // //////////////  Video
  const [qtyVideo, setQtyVideo] = useState(0);
  const [priceVideo, setVriceVideo] = useState(12);

  const totalPrice1 = priceFirstBanner * qtyFirstBanner;
  const totalPrice2 = priceBanner2 * qtySecondBanner;
  const totalPriceBusiness = priceBusinesImg * qtyBusinessImg;
  const totalPriceService = priceService * qtyServiceImg;
  const totalPriceLogo = priceLogo * qtyLogoImg;
  const totalPriceVideo = priceVideo * qtyVideo;

  const Total =
    totalPrice1 +
    totalPrice2 +
    totalPriceBusiness +
    totalPriceService +
    totalPriceLogo +
    totalPriceVideo;

  const dispatch = useDispatch();

  //   Calculate prices
  const addDecimals = (num) => {
    return (Math.round(num * 100) / 100).toFixed(2);
  };

  const data = [
    {
      name: "first banner",
      qty: qtyFirstBanner,
      total: totalPrice1,
    },
    {
      name: "second banner",
      qty: qtySecondBanner,
      total: totalPrice2,
    },
    {
      name: "Business Image",
      qty: qtyBusinessImg,
      total: totalPriceBusiness,
    },
    {
      name: "Service Image",
      qty: qtyServiceImg,
      total: totalPriceService,
    },
    {
      name: "Logo Image",
      qty: qtyLogoImg,
      total: totalPriceLogo,
    },
    {
      name: "Videos",
      qty: qtyVideo,
      total: totalPriceVideo,
    },
  ];

  useEffect(() => {
    if (Total !== 0) {
      setIsDesable(true);
    } else {
      setIsDesable(false);
    }
  }, [Total]);

  // const handleSaveInfo = (data) => {
  //   dispatch(AddCardImage(data));
  // };
  const HandleSavedCArt = () => {
    localStorage.setItem("cardDataImage", JSON.stringify(data));
  };
  return (
    <Container>
      <div>
        <h1 className="title">Add pictures</h1>
        <Row>
          <Col span={24}>
            <FirstFraction>
              <div className="card-element">
                <div className="content">
                  Add to cart number of your main images
                </div>
                <p className="content-price">45 dirham / image</p>
              </div>
              <div className="card-element-footer">
                <div className="price">aed {totalPrice1}</div>
                <div className="quantity">
                  <button
                    type="button"
                    onClick={() =>
                      qtyFirstBanner > 0
                        ? setQtyFirstBanner(qtyFirstBanner - 1)
                        : qtyFirstBanner
                    }
                  >
                    -
                  </button>
                  <p>{qtyFirstBanner}</p>
                  <button
                    type="button"
                    onClick={() => setQtyFirstBanner(qtyFirstBanner + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </FirstFraction>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <FirstFraction>
              <div className="card-element">
                <div className="content">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae
                </div>
                <p className="content-price">60 dirham / image</p>
              </div>
              <div className="card-element-footer">
                <div className="price">aed {totalPrice2}</div>
                <div className="quantity">
                  <button
                    type="button"
                    onClick={() =>
                      qtySecondBanner > 0
                        ? setQtySecondBanner(qtySecondBanner - 1)
                        : qtySecondBanner
                    }
                  >
                    -
                  </button>
                  <p>{qtySecondBanner}</p>
                  <button
                    type="button"
                    onClick={() => setQtySecondBanner(qtySecondBanner + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </FirstFraction>
          </Col>
        </Row>
        <Row gutter={10}>
          <Col lg={10}>
            <FirstFraction>
              <div className="card-element">
                <div className="content">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere cubilia Curae
                </div>
                <p className="content-price">25 dirham / image</p>
              </div>
              <div className="card-element-footer">
                <div className="price">aed {totalPriceBusiness}</div>
                <div className="quantity">
                  <button
                    type="button"
                    onClick={() =>
                      qtyBusinessImg > 0
                        ? setQtyBusinessImg(qtyBusinessImg - 1)
                        : qtyBusinessImg
                    }
                  >
                    -
                  </button>
                  <p>{qtyBusinessImg}</p>
                  <button
                    type="button"
                    onClick={() => setQtyBusinessImg(qtyBusinessImg + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </FirstFraction>
          </Col>
          <Col lg={7}>
            <FirstFraction>
              <div className="card-element">
                <div className="content">Vestibulum ante ipsum primis 888</div>
                <p className="content-price">15 dirham / image</p>
              </div>
              <div className="card-element-footer">
                <div className="price">aed {totalPriceService}</div>
                <div className="quantity">
                  <button
                    type="button"
                    onClick={() =>
                      qtyServiceImg > 0
                        ? setQtyServiceImg(qtyServiceImg - 1)
                        : qtyServiceImg
                    }
                  >
                    -
                  </button>
                  <p>{qtyServiceImg}</p>
                  <button
                    type="button"
                    onClick={() => setQtyServiceImg(qtyServiceImg + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </FirstFraction>
          </Col>
          <Col lg={7}>
            <FirstFraction>
              <div
                className="card-element"
                style={{ borderRadius: "50%", width: "150px", margin: "auto" }}
              >
                <div className="content">Add number of Logo</div>
                <p className="content-price">8 dirham / image</p>
              </div>
              <div className="card-element-footer">
                <div className="price">aed {totalPriceLogo}</div>
                <div className="quantity">
                  <button
                    type="button"
                    onClick={() =>
                      qtyLogoImg > 0
                        ? setQtyLogoImg(qtyLogoImg - 1)
                        : qtyLogoImg
                    }
                  >
                    -
                  </button>
                  <p>{qtyLogoImg}</p>
                  <button
                    type="button"
                    onClick={() => setQtyLogoImg(qtyLogoImg + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </FirstFraction>
          </Col>
        </Row>
        <Row>
          <Col lg={{ span: 12, offset: 6 }} xs={{ span: 24, offset: 0 }}>
            <FirstFraction>
              <div className="card-element">
                <div className="content">
                  add number of video for advertising
                </div>
                <p className="content-price">12 dirham / image</p>
              </div>
              <div className="card-element-footer">
                <div className="price">aed {totalPriceVideo}</div>
                <div className="quantity">
                  <button
                    type="button"
                    onClick={() =>
                      qtyVideo > 0 ? setQtyVideo(qtyVideo - 1) : qtyVideo
                    }
                  >
                    -
                  </button>
                  <p>{qtyVideo}</p>
                  <button
                    type="button"
                    onClick={() => setQtyVideo(qtyVideo + 1)}
                  >
                    +
                  </button>
                </div>
              </div>
            </FirstFraction>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col span={14}>
            <h4 className="subtotal">
              SubTotal: <span>{addDecimals(Total)} aed</span>
            </h4>
          </Col>
          <Col span={10}>
            <CheckOut totalPrice={Total} cardData={data} />
          </Col>
        </Row>
      </div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 12rem auto 0;
  background-color: #ecececec;
  padding: 3rem;
  position: relative;
  bottom: 5rem;

  & .subtotal {
    margin-top: 4px;
    text-transform: uppercase;
    font-weight: 700;
    font-size: 1.4rem;
    & span {
      color: var(--orange-color);
      text-transform: uppercase;
      font-weight: 700;
    }
  }
`;

const LinkStyling = styled(Link)`
  width: 130px;
  padding: 5px 20px;
  background: var(--orange-color);
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  display: block;
  margin-left: auto;
  text-align: center;
  &:hover {
    text-decoration: none;
    opacity: 0.9;
    color: #fff;
  }
`;

const FirstFraction = styled.div`
  margin-bottom: 1rem;
  & .card-element {
    background: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 150px;

    & .content {
      text-align: center;
    }
    & .content-price {
      color: #fff;
      background: var(--orange-color);
      position: absolute;
      right: 5px;
      bottom: 3.6rem;
      padding: 3px 10px;
      font-size: 0.8rem;
    }
  }
  & .card-element-footer {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .price {
      color: var(--orange-color);
      text-transform: uppercase;
      font-weight: 700;
      margin-right: 10px;
    }
    & .quantity {
      /* display: flex; */
      & button {
        outline: none;
        border: 1px solid var(--orange-color);
        padding: 0px;
        display: inline;
        border-radius: 50%;
        width: 30px;
        line-height: 30px;
        height: 30px;
        color: var(--orange-color);
      }
      & p {
        display: inline;
        margin: 0 7px;
        font-weight: 700;
      }
    }
  }
`;

export default CartUploading;
