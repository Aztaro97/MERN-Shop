import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { RiDeleteBin5Fill } from "react-icons/ri";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import SelectC from "../../SelectComponents";
import ModalContent from "./modalContent";
import {
  getMyProducts,
  deleteProduct,
} from "../../../flux/actions/productAction";
import Loader from "../../Loader";
import "./modal.css";

import productImg from "../../../img/productimg.png";

const { confirm } = Modal;

const ViewProducts = () => {
  const [visible, setVisible] = useState(false);
  const [productSelect, setProductSelect] = useState("");

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, products } = useSelector((state) => state.myProductDetails);

  console.log(products);

  useEffect(() => {
    dispatch(getMyProducts());
  }, [dispatch, getMyProducts]);

  const showConfirm = (productID) => {
    confirm({
      title: "Do you Want to delete this product ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, I'm",
      className: "modal_container",
      onOk() {
        dispatch(deleteProduct(productID));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Row>
            {products.length === 0 ? (
              <Empty>
                <h1>You don't have any products</h1>
                <p>
                  To create a new product, please click on this{" "}
                  <Link to="/add-product" className="btn">
                    button
                  </Link>
                </p>
              </Empty>
            ) : (
              <Grid>
                {products.map((product, index) => (
                  <>
                    <Card key={index}>
                      <img src={productImg} alt="" />
                      <RiDeleteBin5Fill
                        className="delete_icon"
                        onClick={() => showConfirm(product._id)}
                      />
                      <div className="card-body">
                        <h2>{product.name}</h2>
                        <p className="desc">description</p>
                        <hr />
                        <h2 className="price">
                          <span>{product.price}</span> dr
                        </h2>
                        <Button
                          type="button"
                          onClick={() =>
                            history.push(`/product/${product._id}`)
                          }
                        >
                          edit
                        </Button>
                      </div>
                    </Card>
                  </>
                ))}
              </Grid>
            )}
          </Row>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
const Row = styled.div`
  display: block;
  width: 100%;
  /* flex-direction: column; */
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
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.1rem;

  @media only screen and (max-width: 1056px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 637px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const Card = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 10px;
  width: 230px;
  & img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    z-index: 1;
  }

  & .card-body {
    text-align: center;
    padding: 0 0.9rem;
    position: relative;
    bottom: 1rem;

    & h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0rem;
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
    position: relative;
    bottom: 12rem;
    left: 11.5rem;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }

    @media only screen and (max-width: 770px) {
      bottom: 13.5rem;
    }
    @media only screen and (max-width: 637px) {
      left: 13.5rem;
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
  & p {
    font-size: 1.2rem;
    & .btn {
      text-decoration: none;
      color: #fff;
      background: var(--orange-color);
      padding: 0.2rem 1rem;
      margin-left: 0.4rem;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;
export default ViewProducts;
