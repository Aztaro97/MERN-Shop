import React, { useEffect } from "react";
import styled from "styled-components";
import { Slider, Image, Modal, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import { useParams } from "react-router-dom";
import SelectC from "../../../SelectComponents";
import {
  getProductUserById,
  filterProductsById,
} from "../../../../flux/actions/productAction";
import CardProduct from "./cardProducts";
import Loader from "../../../loader";
import Paginate from "../../../pagination";
import { brandList, colorList, sizeList } from "../../../../utils/listItems";
import ErrorServerPage from "../../ErrorServerPage";

const Brand = () => {
  const OptionList = ["Iphone", "Samsumg", "Nokia"];
  return <SelectC placeholder="Brand">{OptionList}</SelectC>;
};

const ViewProducts = () => {
  const params = useParams();

  const userId = params.id;

  const pageNumber = params.pageNumber || 1;

  const formik = useFormik({
    initialValues: {
      brand: null,
      color: null,
      size: null,
      price: 1,
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(filterProductsById(body, userId));
      console.log(body);
    },
  });

  const dispatch = useDispatch();
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(getProductUserById(userId, pageNumber));
  }, [dispatch, userId, pageNumber]);

  const handleChangeSlider = (value) => {
    formik.setFieldValue("price", value);
  };

  return (
    <Container>
      <RowCustom>
        <FilterForm onSubmit={formik.handleSubmit}>
          <Row gutter={[15, 10]} justify="end">
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 5 }}>
              <SelectC
                className="form_select"
                placeholder="Brand"
                name="formik.brand"
                options={brandList}
                value={formik.values.brand}
                onChange={(e) => formik.setFieldValue("brand", e.target.value)}
              />
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 5 }}>
              <SelectC
                className="form_select"
                name="formik.color"
                placeholder="Color"
                options={colorList}
                value={formik.values.color}
                onChange={(e) => formik.setFieldValue("color", e.target.value)}
              />
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 5 }}>
              {" "}
              <SelectC
                className="form_select"
                name="formik.size"
                placeholder="Size"
                options={sizeList}
                value={formik.values.size}
                onChange={(e) => formik.setFieldValue("size", e.target.value)}
              />
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 5 }}>
              {" "}
              <div className="form_select slider">
                <p>Price Less than Aed 500</p>
                <SliderE
                  defaultValue={30}
                  onChange={handleChangeSlider}
                  max={500}
                  min={2}
                />
              </div>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
              {" "}
              <button type="submit" className="btn">
                Clear
              </button>
            </Col>
          </Row>
        </FilterForm>
      </RowCustom>
      <RowCustom className="products_items">
        <>
          {loading ? (
            <Loader />
          ) : error === "Product User not found" ? (
            <h1>Errorrrr du chargement {error} .....</h1>
          ) : error === "Request failed with status code 500" ? (
            <ErrorServerPage />
          ) : (
            <>
              {products.length ? (
                <Grid>
                  {products.map((product, index) => (
                    <div key={index} style={{ width: "100%" }}>
                      <CardProduct product={product} />
                    </div>
                  ))}
                </Grid>
              ) : (
                <div className="cart_empty">
                  <h1>No matches found for your search</h1>
                  <button onClick={() => dispatch(getProductUserById(userId))}>
                    click to show all products
                  </button>
                </div>
              )}
            </>
          )}
        </>
      </RowCustom>
      <RowCustom>
        <Paginate
          pages={pages}
          page={page}
          // keyword={keyword ? keyword : ''}
        />
      </RowCustom>
    </Container>
  );
};

const Container = styled.div`
  margin-top:20px;
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
const RowCustom = styled.div`
  display: block;
  width: 100%;
  /* flex-direction: column; */

  &.products_items {
    margin-top: 4rem;
  }

  & .cart_empty {
    & button {
      background: var(--orange-color);
      color: #fff;
      border: none;
      padding: 4px 1rem;
      cursor: pointer;
      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const FilterForm = styled.form`
  & .form_select {
    width: 100%;
  }

  & .slider {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p {
      margin-bottom: 5px;
      font-size: 0.8rem;
    }
  }

  & .btn {
    outline: none;
    border: none;
    background: var(--orange-color);
    color: #fff;
    width: 100%;
    &:hover {
      opacity: 0.9;
    }
  }

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0.3rem;
    height: 100%;
    & .form_select {
      margin-bottom: 0.5rem;
      width: 100%;
    }
    & .slider {
      & p {
        margin-bottom: 0;
        font-size: 0.8rem;
      }
    }
  }
`;
const SliderE = styled(Slider)`
  width: 100%;
  margin: auto 0;

  & .ant-slider-rail {
    background: var(--silver-color);
  }

  & .ant-slider-handle:hover {
    border-color: var(--orange-color);
  }

  & .ant-slider-track {
    background: var(--orange-color) !important;
  }
  & .ant-slider-handle {
    border: solid 2px var(--orange-color);
  }
  @media only screen and (max-width: 1000px) {
    width: 100%;
    font-size: 0.7rem;
    margin: auto 0;
  }
`;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.5rem;

  @media only screen and (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media only screen and (max-width: 637px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export default ViewProducts;
