import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Col, Modal, Row } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import SelectC from "../../SelectComponents";
import ModalContent from "./modalContent";
import {
  getMyProducts,
  deleteProduct,
  destroyImages,
  createProduct,
} from "../../../flux/actions/productAction";
import Loader from "../../loader";
import "./modal.css";

import TextTruncate from "react-text-truncate";
import ErrorServerPage from "../ErrorServerPage";

const { confirm } = Modal;
const empty_pic = "/img/ecommerce/empty.jpg";

const ViewProducts = () => {
  // const [visible, setVisible] = useState(false);
  // const [productSelect, setProductSelect] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error, products } = useSelector(
    (state) => state.myProductDetails
  );

  const { loading: loadingDelete, success: successDelete } = useSelector(
    (state) => state.productDelete
  );

  const showConfirm = (productID, images) => {
    confirm({
      title: "Do you Want to delete this product ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, I'm",
      className: "modal_container",
      onOk() {
        dispatch(deleteProduct(productID));
        dispatch(destroyImages(images));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  useEffect(() => {
    dispatch(getMyProducts());
  }, [dispatch, successDelete, history]);

  return (
    <>
      {loadingDelete && <Loader />}
      {loading ? (
        <Loader />
      ) : error === "Request failed with status code 500" ? (
        <ErrorServerPage />
      ) : (
        <Container>
          <Row gutter={[10, 20]}>
            {products.length > 0 ? (
              products.map((product, index) => (
                <Col
                  key={index}
                  xs={{ span: 12 }}
                  sm={{ span: 12 }}
                  md={{ span: 8 }}
                  lg={{ span: 6 }}
                >
                  <Card>
                    <img
                      src={
                        product.imageUrl.length > 0
                          ? product.imageUrl[0].url
                          : empty_pic
                      }
                      alt=""
                    />
                    <RiDeleteBin5Fill
                      className="delete_icon"
                      onClick={() => showConfirm(product._id, product.imageUrl)}
                    />
                    <div className="card-body">
                      <h2>{product.name}</h2>
                      {/* <p className="desc">{product.description}</p> */}
                      <TextTruncate
                        line={2}
                        element="p"
                        text={product.description}
                        truncateText="…"
                        className="card_desc"
                      />
                      <hr />
                      <h2 className="price">
                        <span>{product.price}</span> dr
                      </h2>
                      <Button
                        type="button"
                        onClick={() => history.push(`/product/${product._id}`)}
                      >
                        edit
                      </Button>
                    </div>
                  </Card>
                </Col>
              ))
            ) : (
              <Col xs={{ span: 24 }}>
                <Empty>
                  <h1>You don't have any products</h1>
                  <Link
                    className="_btn"
                    onClick={() => dispatch(createProduct())}
                  >
                    Create new product
                  </Link>
                </Empty>
              </Col>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  margin-top: 20px;
  padding: 20px 0;
  & .save_btn {
    display: block;
    width: 200px;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: auto;
    margin-left: auto;
  }

  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;

const Card = styled.div`
  box-shadow: var(--box-shadow-value);
  border-radius: 10px;
  width: 100%;
  & img {
    display: block;
    width: 100%;
    height: 150px;
    object-fit: cover;
    z-index: 1;
  }

  & .card-body {
    text-align: center;
    padding: 1rem;

    & h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin: 0.3rem 0;
      font-size: 1rem;
    }
    & p {
      color: var(--silver-color);
      margin-bottom: 0;
    }
    & hr {
      outline: none;
      border: none;
      height: 1px;
      background: var(--border-color);
      margin: 0.3rem;
    }
    & .price {
      color: #49c4d3;
      margin-bottom: 0.6rem;
    }
  }

  & .delete_icon {
    font-size: 1.5rem;
    color: var(--orange-color);
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  color: #fff;
  background: var(--orange-color);
  text-transform: uppercase;
  text-align: center;
  border-radius: 0.7rem;
  padding: 0.3rem 0;
  display: block;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }
`;

const Empty = styled.div`
  text-align: center;
  & h1 {
    font-size: 1.5rem;
  }
  & ._btn {
    text-decoration: none;
    color: #fff;
    background: var(--orange-color);
    padding: 5px 1rem;
    margin-left: 0.4rem;
    text-transform: capitalize;
    font-weight: 400;
    font-size: 1.2rem;
    letter-spacing: 1px;
    margin: 5px 0;
    display: inline-block;
    &:hover {
      opacity: 0.9;
    }
  }
`;
export default ViewProducts;
