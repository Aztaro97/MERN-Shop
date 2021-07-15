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

  return (
    <div>
      <Row>
        <Brand />
        <SliderE defaultValue={30} onChange={(value) => console.log(value)} />
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
                title="Modal 1000px width"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={2000}
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
    </div>
  );
};

const Row = styled.div`
  display: block;
  /* flex-direction: column; */

  & img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
`;

const SliderE = styled(Slider)`
  /* background: red; */

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

  & .card-body {
    text-align: center;
    padding: 0.9rem 0.7rem;

    & h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0rem;
    }
    & p {
      margin-bottom: 0.5rem;
      color: var(--silver-color);
    }
    & hr {
      outline: none;
      border: none;
      height: 2px;
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
  font-size: 1.1rem;

  &:hover {
    background: var(--orange-color);
    color: #fff;
  }
`;
export default ViewProducts;
