import { Col, InputNumbInputNumber, er, Row, InputNumber } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Select } from "antd";
import { BsWhatsapp } from "react-icons/bs";

const { Option } = Select;

function ItemProduction() {
  const [qtyNumber, setQtyNumber] = useState(1);
  return (
    <MainContainer>
      <Container>
        <Row gutter={[20, 20]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <img
              src="https://via.placeholder.com/150"
              alt=""
              className="firs_image"
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <h3 className="product_name">Product name</h3>
            <h4 className="product_price">7555 Dir</h4>
            <p className="product_description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Deleniti, totam commodi corrupti eligendi eaque tempore voluptatem
              dicta placeat porro est, esse cumque! Corrupti eos dicta quo
              eveniet ea exercitationem commodi! Lorem, ipsum dolor sit amet
              consectetur adipisicing elit. Deleniti, totam commodi corrupti
              eligendi eaque tempore voluptatem dicta placeat porro est, esse
              cumque! Corrupti eos dicta quo eveniet ea exercitationem commodi!
            </p>

            <Row gutter={[20, 20]}>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="product_type">
                  <h4>Type</h4>
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={() => {}}
                    className="select_type"
                  >
                    <Option value="jack">type 1</Option>
                    <Option value="lucy">type 2</Option>
                    <Option value="disabled">type 3</Option>
                    <Option value="Yiminghe">type 4</Option>
                  </Select>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="product_capacity">
                  <h4>Capacity</h4>
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={() => {}}
                    className="select_type"
                  >
                    <Option value="jack">type 1</Option>
                    <Option value="lucy">type 2</Option>
                    <Option value="disabled">type 3</Option>
                    <Option value="Yiminghe">type 4</Option>
                  </Select>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                {" "}
                <div className="product_size">
                  <h4>Size</h4>
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={() => {}}
                    className="select_type"
                  >
                    <Option value="jack">type 1</Option>
                    <Option value="lucy">type 2</Option>
                    <Option value="disabled">type 3</Option>
                    <Option value="Yiminghe">type 4</Option>
                  </Select>
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                {" "}
                <div className="product_color">
                  <h4>Color</h4>
                  <Select
                    defaultValue="lucy"
                    style={{ width: 120 }}
                    onChange={() => {}}
                    className="select_type"
                  >
                    <Option value="jack">type 1</Option>
                    <Option value="lucy">type 2</Option>
                    <Option value="disabled">type 3</Option>
                    <Option value="Yiminghe">type 4</Option>
                  </Select>
                </div>
              </Col>
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
                  <button>
                    <BsWhatsapp className="icon" /> order now via whatsapp{" "}
                  </button>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </MainContainer>
  );
}

const Container = styled.div`
  background-color: var(--dark-light-color);
  padding: 3rem 2rem;

  & .firs_image {
    width: 100%;
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
    & button {
      background: green;
      outline: none;
      border: none;
      padding: 8px 10px;
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
