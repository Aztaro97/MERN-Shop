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

  const { loading: loadingUpdate, success: successUpdate } = useSelector(
    (state) => state.productUpdate
  );

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

  function handleMenuClick(e, productId) {
    if (e.key === "accept") {
      dispatch(setProductAllow(productId, true));
      if (successUpdate) {
        dispatch(listProductsAdmin("", pageNumber));
      }
    }
    if (e.key === "refuse") {
      dispatch(setProductAllow(productId, false));
      if (successUpdate) {
        dispatch(listProductsAdmin("", pageNumber));
      }
    }
  }

  // const menu =;
  if (!userInfo || !userInfo.isAdmin) {
    history.push("/auth");
  }

  useEffect(() => {
    dispatch(listProductsAdmin("", pageNumber));
  }, [dispatch, pageNumber, successDelete, successUpdate]);

  return (
    <MainContainer>
      <ProductContainer>
        {(loadingDelete || loadingUpdate) && <Loader />}

        {loading ? (
          <Loader />
        ) : error ? (
          <h1>Error : {error}</h1>
        ) : (
          <>
            <h3 className="title">{t("product_list.title")}</h3>
            <Table>
              <thead>
                <tr>
                  <th>name</th>
                  <th>price</th>
                  <th>images</th>
                  <th>brand</th>
                  <th>Company Name</th>
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
                    <td>{product.price} AED</td>
                    <td>
                      <div className="images_lists">
                        <Image.PreviewGroup>
                          {product.imageUrl.map((img, index) => (
                            <Image key={index} className="img" src={img.url} />
                          ))}
                        </Image.PreviewGroup>
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
                        className="user_email"
                      >
                        {product.user.email}
                      </a>
                    </td>
                    <td className="status">
                      {product.allow && <p className="para_accept">Accepted</p>}
                      {!product.allow && <p className="para_refuse">Refused</p>}
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
            {!products.length && (
              <div className="no_product">
                <h1>Any products exist in DataBase</h1>
              </div>
            )}
          </>
        )}
        <Pagination page={page} pages={pages} isAdmin={true} />
      </ProductContainer>
    </MainContainer>
  );
}

const ProductContainer = styled.div`
  padding: 0 10px;

  & .title {
    text-align: center;
    text-transform: uppercase;
    color: var(--silver-color);
    font-weight: 700;
    letter-spacing: 1px;
    margin: 20px 0;
  }
`;

const Table = styled.table`
  width: 100%;
  & thead {
    & tr {
      border-bottom: 1px solid #ececec61;
      & th {
        padding: 1rem 0;
        text-transform: uppercase;
        font-weight: 700;
        color: var(--silver-color);
        font-size: 0.8rem;
        /* text-align: center; */
      }
    }
  }
  & tbody {
    margin-top: 1rem;
    & tr {
      border-bottom: 1px solid #ececec61;
      & td {
        padding: 1rem 0;
        text-transform: uppercase;
        font-size: 0.8rem;
        color: var(--silver-color);
        /* background: #ececec; */
        & .delete_btn {
          outline: none;
          background: var(--orange-color);
          color: #fff;
          border: none;
          padding: 1px 12px;
          font-size: 1.2rem;
        }
        & .images_lists {
          display: flex;
          justify-content: start;
          align-items: center;

          max-width: 200px;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          /* flex-wrap: wrap; */

          & .img {
            height: 40px;
            width: 50px;
            margin: 0 5px;
          }
        }
        & .action_btn {
          display: flex;
          align-items: center;
          color: var(--silver-color);
          padding: 0 10px;
          /* position: relative;
          top: 11px; */
          &:hover {
            text-decoration: none;
            opacity: 0.9;
          }
        }
      }
      & .user_email {
        color: var(--silver-color);
      }
      & .status {
        & .para_accept,
        & .para_refuse {
          display: flex;
          text-transform: capitalize;
          background: transparent;
          margin-bottom: 0;
          padding: 4px 10px;
        }
        & .para_refuse {
          background: #34495e;
          color: #fff;
        }
        & .para_accept {
          background: #1abc9c;
          color: #fff;
        }
      }
    }
  }

  & .no_product {
    & h1 {
      text-align: "center";
    }
  }
`;

export default ProductsListScreen;
