import React, { useEffect } from "react";
import styled from "styled-components";
import { Slider, Image, Modal } from "antd";
import {useSelector, useDispatch} from "react-redux"
import SelectC from "../../SelectComponents";
import {listProducts} from "../../../flux/actions/productAction"
import CardProduct from "./CardProduct";
import Loader from "../../Loader"


const Brand = () => {
  const OptionList = ["Iphone", "Samsumg", "Nokia"];
  return <SelectC placeholder="Brand">{OptionList}</SelectC>;
};

const ViewProducts = () => {

  const dispatch = useDispatch();
  const {loading,error, products} = useSelector(state => state.productList)

  const brandList = [{title:"Electronic", value:"electronic"}, {title:"Cloth", value:"cloth"}, {title:"Food", value:"food"}];
  const colorList = [{title:"Red", value:"red"}, {title:"Blue", value:"blue"}, {title:"White", value:"white"}];
  const sizeList = [{title:"20", value:"20"}, {title:"30", value:"30"}, {title:"40", value:"40"}];


  useEffect(() => {
    dispatch(listProducts());
  }, [dispatch])

  return (
    <Container>
      <Row>
        <FilterForm>
        <SelectC style={{maxWidth:"200px"}} placeholder="Brand" options={brandList} />
        <SelectC style={{maxWidth:"200px"}} placeholder="Color" options={colorList} />
        <SelectC style={{maxWidth:"200px"}} placeholder="Size" options={sizeList} />
        <div className="slider">
          <p>Price Less than Aed 500</p>
          <SliderE defaultValue={30} onChange={(value) => console.log(value)} />
        </div>
        <button className="btn">Clear</button>
        </FilterForm>
      </Row>
      <Row>
        <Grid>
          {loading ?
          (<Loader />) :
          error ? ((<h1>Errorrrr du chargement {error} .....</h1>))
          : (
            <>
            {products.map((product, index) => (
              <div key={index}>
                <CardProduct product={product} />
              </div>
            ))}
            </>
          )
          }
        </Grid>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (max-width:1000px) {
    padding:0 1rem
  }
`;
const Row = styled.div`
  display: block;
  width: 100%;
  /* flex-direction: column; */

  
`;

const FilterForm = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  height:6rem;

  & .slider {
    display: flex;
    flex-direction: column;

    & p{
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

  @media only screen and (max-width:768px) {
    display: block;
    height: 100%;
    & > * {
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
