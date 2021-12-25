import React, { useState } from "react";
import styled from "styled-components";
import TextTruncate from "react-text-truncate";
import { Image, Modal } from "antd";
import ModalContent from "./modalContent";
import { GrView } from "react-icons/gr";

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
      <div className="card-body">
        <TextTruncate
          line={1}
          element="span"
          text={product.name}
          truncateText="…"
          className="card_name"
        />
        <TextTruncate
          line={1}
          element="p"
          text={product.description}
          truncateText="…"
          className="card_desc"
        />
        <hr />
        <div className="card_price">
          <h2 className="price">
            <span>{product.price}</span> dr
          </h2>
          <h2 className="compare_price">
            <span>{product.compareAtPrice}</span> dr
          </h2>
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
        height: 200px;
        object-fit: cover;
      }
    }
  }

  & .card-body {
    text-align: center;
    padding: 0.9rem 0.7rem;

    & .card_name {
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0;
      font-size: 1rem;
      color: var(--silver-color);
      display: block;
      width: 100%;
    }
    & .card_desc {
      color: var(--silver-color);
      font-size: 0.9rem;
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
      & .price {
        color: #49c4d3;
        margin-bottom: 0.6rem;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 700;
      }
      & .compare_price {
        text-decoration: line-through;
        margin-bottom: 0.6rem;
        font-size: 1rem;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--silver-color);
      }
    }
  }

  & .modal {
    /* padding: 0;
    z-index:9999; */
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  background: var(--orange-color);
  color: var(--white-color);
  text-transform: capitalize;
  text-align: center;
  border-radius: 1rem;
  padding: 0.4rem 0;
  /* display: block; */
  width: 100%;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  font-size: 1rem;
  letter-spacing: 1px;
  & .icon {
    fill: #fff !important;
  }
  &:hover {
    background: var(--orange-color);
    color: #fff;
  }
`;

export default Product;
