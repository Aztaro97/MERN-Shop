import React, { useEffect } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "antd";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";
import { MdDelete } from "react-icons/md";
import Loader from "../../Loader";
import {
  listProducts,
  deleteProduct,
} from "../../../flux/actions/productAction";
import MainContainer from "../../MainContainer";

const { confirm } = Modal;

function ProductsListScreen({ match }) {
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

  useEffect(() => {
    if (!userInfo || !userInfo.isAdmin) {
      history.push("/login");
    }

    dispatch(listProducts("", pageNumber));
  }, [dispatch, history, userInfo, , pageNumber]);

  return (
    <MainContainer>
      <ProductContainer>
        <Row>
          <h3>all products lists</h3>
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
                  <th>id</th>
                  <th>name</th>
                  <th>price</th>
                  <th>brand</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product._id}>
                    <td>{product._id}</td>
                    <td>{product.name}</td>
                    <td>{product.price} dirham</td>
                    <td>{product.brand}</td>
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
        & .delete_btn {
          outline: none;
          background: #eb4d4b;
          color: #fff;
          border: none;
          padding: 1px 12px;
          font-size: 1.2rem;
        }
      }
    }
  }
`;

export default ProductsListScreen;
