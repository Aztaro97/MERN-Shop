import { Col, InputNumbInputNumber, er, Row, InputNumber } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Select } from "antd";
import { BsWhatsapp } from "react-icons/bs";
import { getArticleById } from "../../../flux/actions/articleAction";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import { WhatsappShareButton } from "react-share";
import LoaderComponent from "../../loader";
import "./production.css";

const { Option } = Select;

function ItemProduction() {
  const [qtyNumber, setQtyNumber] = useState(1);
  const [type, setType] = useState([]);
  const [capacity, setCapacity] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const params = useParams();
  const articleId = params.id;

  const { loading, article, error } = useSelector(
    (state) => state.articleDetails
  );

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "dots__bar",
    // rtl: currentLang === "ar" ? true : false,
  };

  const sharingUrl = window.location.href;

  const whatsappMessage = `Product Name: ${article?.name}, Price: ${
    article?.price
  } AED,  ${article?.type && `Type: ${type}`}, ${article?.capacity &&
    `Capacity: ${article?.capacity && capacity}`}, 
    Quantity : ${qtyNumber}
  `;

  const whatsappLink = `https://wa.me/${`00971524655728`}?text=${whatsappMessage}`;

  const dispatch = useDispatch();
  useEffect(() => {
    if (article && article._id !== articleId) {
      dispatch(getArticleById(articleId));
    }
  }, [dispatch, articleId, article]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <div>{error}</div>
      ) : (
        <Container>
          <Row gutter={[40, 20]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <Slider {...settings} arrows={false} >
                {article.imgUrl?.map((img, index) => (
                  <div key={index}>
                    <img src={img.url} alt="" className="slide_image" />
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
              <h3 className="product_name">{article.name}</h3>
              <h4 className="product_price">{article.price} AED</h4>
              <p className="product_description">{article.description}</p>

              <Row gutter={[20, 20]}>
                {article.type?.length > 0 && (
                  <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <div className="product_type">
                      <h4>Type</h4>
                      <Select
                        defaultValue={article.type?.[0]}
                        style={{ width: 120 }}
                        onChange={(value) => setType(value)}
                        className="select_type"
                      >
                        {article.type?.map((item, index) => (
                          <Option key={index} value={item}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </Col>
                )}

                {article.capacity?.length > 0 && (
                  <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    <div className="product_capacity">
                      <h4>Capacity</h4>
                      <Select
                        defaultValue={article.capacity?.[0]}
                        style={{ width: 120 }}
                        onChange={(value) => setCapacity(value)}
                        className="select_type"
                      >
                        {article.capacity?.map((item, index) => (
                          <Option key={index} value={index}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </Col>
                )}

                {article.size?.length > 0 && (
                  <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    {" "}
                    <div className="product_size">
                      <h4>Size</h4>
                      <Select
                        defaultValue={article.size?.[0]}
                        style={{ width: 120 }}
                        onChange={(value) => setSize(value)}
                        className="select_type"
                      >
                        {article.size?.map((item, index) => (
                          <Option key={index} value={index}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </Col>
                )}

                {article.color?.length > 0 && (
                  <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                    {" "}
                    <div className="product_color">
                      <h4>Color</h4>
                      <Select
                        defaultValue={article.color?.[0]}
                        style={{ width: 120 }}
                        onChange={(value) => setColor(value)}
                        className="select_type"
                      >
                        {article.color?.map((item, index) => (
                          <Option key={index} value={index}>
                            {item}
                          </Option>
                        ))}
                      </Select>
                    </div>
                  </Col>
                )}

                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <div className="product_qty">
                    <h4>Quantity</h4>
                    <div className="btn_container">
                      <InputNumber
                        //   type="number"
                        defaultValue={qtyNumber}
                        onChange={(e) => setQtyNumber(e)}
                        className="qty_input"
                        min={1}
                      />
                    </div>
                  </div>
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <div className="product_share">
                    <h4>Order :</h4>
                    <a href={whatsappLink} className="btn_share">
                      <BsWhatsapp className="icon" /> order now via whatsapp{" "}
                    </a>
                    {/* <WhatsappShareButton
                      className="btn_share"
                      url={sharingUrl}
                      quote={"CampersTribe - World is yours to explore"}
                      hashtag="#au79code"
                    >
                      <BsWhatsapp className="icon" />{" "}
                      <span>order now via whatsapp</span>
                    </WhatsappShareButton> */}
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div`
  background-color: var(--dark-light-color);
  padding: 3rem 2rem;
  min-height: 50vh;

  & .slide_image {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }

  & .product_name {
    color: var(--silver-color);
  }
  & .product_price {
    color: var(--silver-color);
    font-weight: 700;
  }
  & .product_description {
    color: var(--silver-color);
  }

  & .product_type,
  & .product_capacity,
  & .product_size,
  & .product_color {
    & h4 {
      color: var(--orange-color);
      text-transform: uppercase;
      font-size: 1.1rem;
    }
    & .select_type {
      background: transparent;
      width: 100% !important;
    }
    & .ant-select-selector {
      background: transparent;
      color: var(--silver-color);
    }
    & .anticon {
      color: var(--silver-color);
    }
  }

  & .product_qty {
    & h4 {
      color: var(--orange-color);
    }
    & .btn_container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      & .qty_input {
        background: transparent;
        outline: none;
        text-align: center;
        color: var(--silver-color);
      }
    }
  }

  & .product_share {
    & h4 {
      color: var(--orange-color);
    }
    & .btn_share {
      background: green !important;
      outline: none;
      border: none;
      padding: 8px 10px !important;
      text-decoration: none;
      color: #fff;
      & .icon {
        font-size: 1.5rem;
        margin-right: 10px;
      }
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

export default ItemProduction;
