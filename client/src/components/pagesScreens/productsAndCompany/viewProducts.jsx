import React, { useState } from "react";
import styled from "styled-components";
import { Slider, Image, Modal } from "antd";
import SelectC from "../../SelectComponents";
import ModalContent from "./modalContent";

import productImg from "../../../img/productimg.png";

const Brand = () => {
  const OptionList = ["Iphone", "Samsumg", "Nokia"];
  return <SelectC placeholder="Brand">{OptionList}</SelectC>;
};

const ViewProducts = () => {
  const [visible, setVisible] = useState(false);

  const brandList = [{title:"Electronic", value:"electronic"}, {title:"Cloth", value:"cloth"}, {title:"Food", value:"food"}];
  const colorList = [{title:"Red", value:"red"}, {title:"Blue", value:"blue"}, {title:"White", value:"white"}];
  const sizeList = [{title:"20", value:"20"}, {title:"30", value:"30"}, {title:"40", value:"40"}];

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
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button" onClick={() => setVisible(true)}>
                add to cart
              </Button>
              <Modal
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
                footer={null}
              >
                <ModalContent />
              </Modal>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button" onClick={() => setVisible(true)}>
                add to cart
              </Button>
              <Modal
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1300}
                footer={null}
              >
                <ModalContent />
              </Modal>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button>add to cart</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button>add to cart</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button>add to cart</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button>add to cart</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button>add to cart</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">add to cart</Button>
            </div>
          </Card>
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

const Card = styled.div`
  border: 1px solid var(--border-color);
  border-radius: 10px;
  & img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }

  & .card-body {
    text-align: center;
    padding: 0.9rem 0.7rem;

    & h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0rem;
      font-size: 1.2rem;
    }
    & p {
      color: var(--silver-color);
    }
    & hr {
      outline: none;
      border: none;
      height: 1px;
      background: var(--border-color);
      margin-bottom: 0.7rem;
    }
    & .price {
      color: #49c4d3;
      margin-bottom: 0.6rem;
    }
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  font-weight: 700;
  background: #e7eaea;
  color: #000;
  text-transform: uppercase;
  text-align: center;
  border-radius: 1rem;
  padding: 0.5rem 0;
  display: block;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 1rem;

  &:hover {
    background: var(--orange-color);
    color: #fff;
  }
`;
export default ViewProducts;
