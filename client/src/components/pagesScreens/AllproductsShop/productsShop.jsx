import React, { useEffect } from "react";
import styled from "styled-components";
import { Slider, Image, Modal, Row, Col } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import SelectC from "../../SelectComponents";
import {
  listProducts,
  filterAllProducts,
} from "../../../flux/actions/productAction";
import ProductItems from "./ProductItem";
import Loader from "../../loader";
import Paginate from "../../pagination";
import MainContainer from "../../MainContainer";
import { brandList, colorList, sizeList } from "../../../utils/listItems";
import ErrorServerPage from "../ErrorServerPage";

const ViewProducts = ({ match }) => {
  // const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1;

  const formik = useFormik({
    initialValues: {
      brand: null,
      color: null,
      size: null,
      price: 1,
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(filterAllProducts(body));
      console.log(body);
    },
  });

  const dispatch = useDispatch();
  const { loading, error, products, page, pages } = useSelector(
    (state) => state.productList
  );

  useEffect(() => {
    dispatch(listProducts(pageNumber));
  }, [dispatch, pageNumber]);

  const handleChangeSlider = (value) => {
    formik.setFieldValue("price", value);
  };

  return (
    <MainContainer>
      <Container>
        <FilterForm onSubmit={formik.handleSubmit}>
          <h3 className="title">Products Shop :</h3>
          <Row gutter={[15,10]} justify="end">
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
              <SelectC
                className="form_select"
                name="formik.size"
                placeholder="Size"
                options={sizeList}
                value={formik.values.size}
                onChange={(e) =>
                  formik.setFieldValue("size", parseInt(e.target.value))
                }
              />
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 5 }}>
              {" "}
              <div className="form_select slider">
                <p>Price Less than Aed 2000</p>
                <SliderE
                  value={formik.values.price}
                  onChange={handleChangeSlider}
                  max={2000}
                  min={2}
                />
              </div>
            </Col>
            <Col xs={{ span: 12 }} md={{ span: 8 }} lg={{ span: 4 }}>
              <button type="submit" className="btn">
                Clear
              </button>
            </Col>
          </Row>
        </FilterForm>
        <RowCustom className="products_items">
          <>
            {loading ? (
              <Loader />
            ) : error === "Request failed with status code 500" ? (
              <ErrorServerPage />
            ) : (
              <>
                {products.length ? (
                  <Grid>
                    {products.map((product, index) => (
                      <div key={index} style={{ width: "100%" }}>
                        <ProductItems product={product} />
                      </div>
                    ))}
                  </Grid>
                ) : (
                  <div className="cart_empty">
                    <h1>No matches found for your search</h1>
                    <button onClick={() => dispatch(listProducts())}>
                      click to show all products
                    </button>
                  </div>
                )}
              </>
            )}
          </>
        </RowCustom>
        <RowCustom style={{ marginTop: "1rem" }}>
          <Paginate
            pages={pages}
            page={page}
            // keyword={keyword ? keyword : ''}
          />
        </RowCustom>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
  margin-top: 2rem;

  & .cart_empty {
    margin-bottom: 50px;
    text-align: center;
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

  @media only screen and (max-width: 1000px) {
    padding: 0 .5rem;
  }
`;
const RowCustom = styled.div`
  display: block;
  width: 100%;

  &.products_items {
    margin-top: 4rem;
  }
`;

const FilterForm = styled.form`
  & .title {
    font-weight: 700;
    letter-spacing: 1px;
    /* text-decoration: underline; */
  }

  & .form_select {
    width: 100%;
  }

  & .slider {
    display: flex;
    flex-direction: column;
    justify-content:space-between;
    align-items: space-between;
    & p {
      margin-bottom: 0;
      font-size: 0.9rem;
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
        margin-bottom: 5px;
        font-size: 0.8rem;
      }
    }
  }
`;
const SliderE = styled(Slider)`
  /* background: red; */
  width: 100%;
  margin:auto 0;

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
    margin:auto 0;
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
