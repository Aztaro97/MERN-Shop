import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import {useTranslation} from "react-i18next"
import { Modal, Image } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { MdDelete, AiOutlineCheck, FaTimes } from "react-icons/all";
import Loader from "../../Loader";
import {
  listProductsAdmin,
  deleteProduct,
  setProductAllow,
} from "../../../flux/actions/productAction";
import MainContainer from "../../MainContainer";
import Pagination from "../../pagination"

const { confirm } = Modal;

function ProductsListScreen({ match }) {
  const {t} = useTranslation()
  const pageNumber = match.params.pageNumber || 1

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

  const handleSetAllow = async (id) => {
    dispatch(setProductAllow(id, true));
  };

  const handleSetNotAllow = async (id) => {
    dispatch(setProductAllow(id, false));
  };

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
                      {product.imageUrl.map( img => (<Image className="img" src={img.url} />) )
                    
                  }
                      </div>
                    </td>
                    <td>{product.brand}</td>
                    <td>{product.user.company.name}</td>
                    <td>

                    <a
                    style={{fontSize:".7rem",textTransform:"lowercase"}}
                      href={`mailto:${product.user.email}`}
                    >
                      {product.user.email}
                    </a>
                    
                    </td>
                    <td className="allow_btn">
                      {product.allow && (
                        <button onClick={() => handleSetNotAllow(product._id)}>
                          <AiOutlineCheck className="allow_btn_accept" />  Accept
                        </button>
                      )}
                      {!product.allow && (
                        <button onClick={() => handleSetAllow(product._id)} >
                          <FaTimes className="allow_btn_refuse" /> Refuse
                        </button>
                      )}
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
        font-size: .8rem;
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
        font-size: .8rem;
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
            height:70px;
            width: 70px;
            margin: 0 5px;
          }

        }
      }
      & .allow_btn {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & button {
          outline: none;
          border: none;
          background: transparent;
          & .allow_btn_accept {
            color: green;
          }
          & .allow_btn_refuse {
            color: red;
          }
        }
      }
    }
  }
`;

export default ProductsListScreen;
