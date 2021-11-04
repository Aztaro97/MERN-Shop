import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import { Modal, Image, Select, Menu, Dropdown, Button } from "antd";
import {
  ExclamationCircleOutlined,
  DownOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { MdDelete, AiOutlineCheck, FaTimes } from "react-icons/all";
import Loader from "../../loader";
import {
  listProductsAdmin,
  deleteProduct,
  setProductAllow,
} from "../../../flux/actions/productAction";
import MainContainer from "../../MainContainer";
import Pagination from "../../pagination";

const { confirm } = Modal;
const { Option } = Select;

function ProductsListScreen({ match }) {
  const { t } = useTranslation();
  const pageNumber = match.params.pageNumber || 1;

  const dispatch = useDispatch();
  const history = useHistory();

  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = useSelector((state) => state.productDelete);

  const { userInfo } = useSelector((state) => state.userLogin);

  const showConfirm = (id) => {
    confirm({
      title: "Do you Want to delete this product ?",
      icon: <ExclamationCircleOutlined />,
      okText: "Yes, I'm",
      className: "modal_container",
      onOk() {
        dispatch(deleteProduct(id));
      },
      onCancel() {
        console.log("Cancel");
      },
    });
  };
  if (successDelete) {
    dispatch(listProductsAdmin("", pageNumber));
  }

  const handleSetAllow = async (id) => {
    dispatch(setProductAllow(id, true));
  };

  const handleSetNotAllow = async (id) => {
    dispatch(setProductAllow(id, false));
  };

  function handleMenuClick(e, productId) {
    if (e.key === "accept") {
      dispatch(setProductAllow(productId, true));
    }
    if (e.key === "refuse") {
      dispatch(setProductAllow(productId, false));
    }
  }

  // const menu =;

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    dispatch(listProductsAdmin("", pageNumber));
  }, [dispatch, history, userInfo, pageNumber]);

  return (
    <MainContainer>
      <ProductContainer>
        <Row>
          <h3>{t("product_list.title")}</h3>
        </Row>
        <Row>
          {loadingDelete && <Loader />}

          {loading ? (
            <Loader />
          ) : error ? (
            <h1>Error : {error}</h1>
          ) : (
            <Table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>price</th>
                  <th>images</th>
                  <th>brand</th>
                  <th>Company Name / Personnel</th>
                  <th>Email</th>
                  <th>status</th>
                  <th>Action</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product.name}</td>
                    <td>{product.price} dirham</td>
                    <td>
                      <div className="images_lists">
                        {product.imageUrl.map((img) => (
                          <Image className="img" src={img.url} />
                        ))}
                      </div>
                    </td>
                    <td>{product.brand}</td>
                    <td>{product.user.company.name}</td>
                    <td>
                      <a
                        style={{
                          fontSize: ".7rem",
                          textTransform: "lowercase",
                        }}
                        href={`mailto:${product.user.email}`}
                      >
                        {product.user.email}
                      </a>
                    </td>
                    <td className="status">
                      {product.allow && (
                        <p>
                          Accepted
                          <AiOutlineCheck className="allow_btn_accept" />{" "}
                        </p>
                      )}
                      {!product.allow && (
                        <p>
                          Refused
                          <FaTimes className="allow_btn_refuse" />
                        </p>
                      )}
                    </td>
                    <td>
                      <Dropdown
                        overlay={
                          <Menu
                            onClick={(e) => handleMenuClick(e, product._id)}
                          >
                            <Menu.Item key="accept">accept</Menu.Item>
                            <Menu.Item key="refuse">refuse</Menu.Item>
                          </Menu>
                        }
                        trigger={["click"]}
                      >
                        <a
                          href="#/"
                          className="action_btn"
                          onClick={(e) => e.preventDefault()}
                        >
                          select
                          <DownOutlined style={{ paddingLeft: 2 }} />
                        </a>
                      </Dropdown>
                      ,
                    </td>
                    <td>
                      <button
                        type="button"
                        className="delete_btn"
                        onClick={() => showConfirm(product._id)}
                      >
                        <MdDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          )}
        </Row>
        <Pagination page={page} pages={pages} isAdmin={true} />
      </ProductContainer>
    </MainContainer>
  );
}

const ProductContainer = styled.div`
  padding: 0 10px;

  & h3 {
    text-align: center;
    text-transform: uppercase;
  }
`;

const Row = styled.div`
  margin-bottom: 10px;
`;

const Table = styled.table`
  width: 100%;
  & thead {
    & tr {
      background: var(--orange-color);
      & th {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        font-weight: 700;
        color: #fff;
        font-size: 0.8rem;
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      & td {
        border: 1px solid rgba(0, 0, 0, 0.05);
        padding: 10px;
        text-transform: uppercase;
        font-size: 0.8rem;
        & .delete_btn {
          outline: none;
          background: #eb4d4b;
          color: #fff;
          border: none;
          padding: 1px 12px;
          font-size: 1.2rem;
        }
        & .images_lists {
          display: flex;
          justify-content: center;
          align-items: center;
          & .img {
            height: 70px;
            width: 70px;
            margin: 0 5px;
          }
        }
        & .action_btn {
          display: flex;
          align-items: center;
          color: #111;
          position: relative;
          top: 11px;
          &:hover {
            text-decoration: none;
            opacity: 0.9;
          }
        }
      }
      & .status {
        & p {
          display: flex;
          text-transform: capitalize;
          background: transparent;
          margin-bottom: 0;
          & .allow_btn_accept {
            color: green;
            font-size: 1rem;
            margin-left: 2px;
          }
          & .allow_btn_refuse {
            color: red;
            font-size: 1rem;
            margin-left: 2px;
          }
        }
      }
    }
  }
`;

export default ProductsListScreen;
