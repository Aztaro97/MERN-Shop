import React, { useEffect } from "react";
import styled from "styled-components";
import { Slider, Image, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
import SelectC from "../../SelectComponents";
import {
  listProducts,
  filterAllProducts,
} from "../../../flux/actions/productAction";
import CardProduct from "./CardProduct";
import Loader from "../../Loader";
import Paginate from "../../pagination"
import MainContainer from "../../MainContainer"

const Brand = () => {
  const OptionList = ["Iphone", "Samsumg", "Nokia"];
  return <SelectC placeholder="Brand">{OptionList}</SelectC>;
};

const ViewProducts = ({match}) => {

  // const keyword = match.params.keyword

  const pageNumber = match.params.pageNumber || 1


  const formik = useFormik({
    initialValues: {
      brand: "",
      color: "",
      size: Number,
      price: "",
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

  const brandList = [
    { title: "-- Select Brand --", value: "" },
    { title: "Electronic", value: "electronic" },
    { title: "Cloth", value: "cloth" },
    { title: "Sample brand", value: "Sample brand" },
  ];
  const colorList = [
    { title: "-- Select color --", value: "" },
    { title: "Red", value: "red" },
    { title: "Blue", value: "blue" },
    { title: "White", value: "white" },
    { title: "Color1", value: "Color1" },
  ];
  const sizeList = [
    { title: "-- Select size --", value: Number },
    { title: "20", value: "20" },
    { title: "25", value: "25" },
    { title: "30", value: "30" },
    { title: "40", value: "40" },
  ];

  useEffect(() => {
    dispatch(listProducts(pageNumber));
  }, [dispatch, pageNumber]);

  const handleChangeSlider = (value) => {
    formik.setFieldValue("price", value);
  };


  return (
    <MainContainer>
      <Container>
        <Row>
          <h3 className="title">Products Shop :</h3>
        </Row>
      <Row>
        <FilterForm onSubmit={formik.handleSubmit}>
          <SelectC
            className="form_select"
            placeholder="Brand"
            name="formik.brand"
            options={brandList}
            value={formik.values.brand}
            onChange={(e) => formik.setFieldValue("brand", e.target.value)}
          />
          <SelectC
            className="form_select"
            name="formik.color"
            placeholder="Color"
            options={colorList}
            value={formik.values.color}
            onChange={(e) => formik.setFieldValue("color", e.target.value)}
          />
          <SelectC
            className="form_select"
            name="formik.size"
            placeholder="Size"
            options={sizeList}
            value={formik.values.size}
            onChange={(e) => formik.setFieldValue("size", parseInt(e.target.value))}
          />
          <div className="form_select slider">
            <p>Price Less than Aed 500</p>
            <SliderE defaultValue={30} onChange={handleChangeSlider} max={500} min={2} />
          </div>
          <button type="submit" className="btn">
            Clear
          </button>
        </FilterForm>
      </Row>
      <Row>
        <>
          {loading ? (
            <Loader />
          ) : error ? (
            <h1>Errorrrr du chargement {error} .....</h1>
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
                <h1>No matches found for your search</h1>
              )}
            </>
          )}
        </>
      </Row>
      <Row style={{marginTop:"1rem"}}>
      <Paginate
            pages={pages}
            page={page}
            // keyword={keyword ? keyword : ''}
          />
      </Row>
      </Container>
    </MainContainer>
  );
};

const Container = styled.div`
margin-top: 2rem;
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
const Row = styled.div`
  display: block;
  width: 100%;

  & .title {
    font-weight: 700;
    letter-spacing:1px;
    text-decoration: underline;
  }
`;

const FilterForm = styled.form`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height: 6rem;

  & .form_select {
    margin: 0 8px;
    width: 400px;
  }

  & .slider {
    display: flex;
    flex-direction: column;

    & p {
      margin-bottom: 0;
    }
  }

  & .btn {
    outline: none;
    border: none;
    background: var(--orange-color);
    color: #fff;
    &:hover {
      opacity: 0.9;
    }
  }

  @media only screen and (max-width: 768px) {
    display: block;
    height: 100%;
    & > .form_select {
      margin-bottom: 1rem;
    }
  }
`;
const SliderE = styled(Slider)`
  /* background: red; */
  width: 200px;

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
