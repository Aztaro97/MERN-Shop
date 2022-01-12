import React, { useState } from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";
import { Image, Modal } from "antd";
import ModalContent from "../products/modalProduct";
import { GrView } from "react-icons/gr";

import "./ProductItem.css";

const empty_pc = "/img/ecommerce/empty.jpg";

function Product({ product }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <Card>
      <div className="img_card">
        <Image
          src={product.imageUrl.length > 0 ? product.imageUrl[0].url : empty_pc}
          alt=""
          preview={true}
        />
      </div>
      <div className="card_body">
        <h2 className="card_name">{product.name}</h2>
        {/* <TextTruncate
          line={1}
          element="p"
          text={product.description}
          truncateText="…"
          className="card_desc"
        />
        <hr /> */}
        <div className="card_price">
          <div className="price">
            <span>{product.price}</span> AED
          </div>
          <div className="compare_price">
            <span>{product.compareAtPrice}</span> AED
          </div>
        </div>
        <Button type="button" onClick={() => setShowModal(true)}>
          <GrView className="icon" /> view
        </Button>
        <Modal
          centered
          visible={showModal}
          onOk={() => setShowModal(false)}
          onCancel={() => setShowModal(false)}
          width={1000}
          footer={null}
          style={{ padding: "0px !important" }}
          // wrapClassName="modal"
        >
          <ModalContent product={product} setShowModal={setShowModal} />
        </Modal>
      </div>
    </Card>
  );
}

const Card = styled.div`
  box-shadow: var(--box-shadow-value);
  background: var(--black-color);
  padding: 10px;
  border-radius: 10px;
  width: 100%;
  /* width: 300px; */
  & .img_card {
    & .ant-image {
      width: 100%;
      & .ant-image-img {
        height: 150px;
        object-fit: cover;
        @media only screen and (max-width: 500px) {
          height: 100px;
        }
      }
    }
  }

  & .card_body {
    text-align: center;
    padding: 0.9rem 0;

    & .card_name {
      font-weight: 700;
      text-transform: uppercase;
      margin: 5px 0;
      font-size: 1rem;
      color: var(--silver-color);
      display: block;
      width: 100%;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    & .card_desc {
      color: var(--silver-color);
      font-size: 0.9rem;
      overflow-wrap: break-word !important;
      /* height:300px; */
    }
    & hr {
      outline: none;
      border: none;
      height: 1px;
      background: var(--border-color);
      margin: 0.4rem 0;
    }
    & .card_price {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      gap: 5px;
      & .price {
        color: var(--orange-color);
        margin: 0;
        padding: 0;
        margin-bottom: 0.6rem;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 700;
      }
      & .compare_price {
        text-decoration: line-through;
        margin: 0;
        padding: 0;
        margin-bottom: 0.6rem;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--silver-color);
      }
    }
  }
  @media only screen and (max-width: 500px) {
    & .card_body {
      padding: 0.1rem 0;
    }
    & .card_price {
      padding: 0.1rem 0 !important;
    }
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: var(--orange-color);
  color: var(--white-color);
  text-transform: capitalize;
  text-align: center;
  border-radius: 10px;
  padding: 0.4rem 0;
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  letter-spacing: 1px;
  & .icon {
    fill: #fff !important;
    color: #fff !important;
  }
  &:hover {
    background: var(--orange-color);
    color: #fff;
  }
`;

export default Product;
