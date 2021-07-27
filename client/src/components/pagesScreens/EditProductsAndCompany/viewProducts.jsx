import React, { useState } from "react";
import styled from "styled-components";
import { Slider, Image, Modal } from "antd";
import { RiDeleteBin5Fill } from "react-icons/ri";
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
    <Container>
      <Row>
        <Grid>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
          <Card>
            <Image src={productImg} alt="" preview={false} />
            <RiDeleteBin5Fill className="delete_icon" />
            <div className="card-body">
              <h2>product name</h2>
              <p className="desc">description</p>
              <hr />
              <h2 className="price">
                <span>60.00</span> dr
              </h2>
              <Button type="button">edit</Button>
            </div>
          </Card>
        </Grid>
        <Button className="save_btn" type="button">
          save
        </Button>
      </Row>
    </Container>
  );
};

const Container = styled.div`
  @media only screen and (max-width: 1000px) {
    padding: 0 1rem;
  }
`;
const Row = styled.div`
  display: block;
  width: 100%;
  /* flex-direction: column; */
  & .save_btn {
    display: block;
    width: 200px;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: 700;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: auto;
    margin-left: auto;
  }
`;

// const FilterForm = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   height: 6rem;

//   & .slider {
//     display: flex;
//     flex-direction: column;

//     & p {
//       margin-bottom: 0;
//     }
//   }

//   & .btn {
//     outline: none;
//     border: none;
//     background: var(--orange-color);
//     color: #fff;
//     &:hover {
//       opacity: 0.9;
//     }
//   }

//   @media only screen and (max-width: 768px) {
//     display: block;
//     height: 100%;
//     & > * {
//       margin-bottom: 1rem;
//     }
//   }
// `;
// const SliderE = styled(Slider)`
//   /* background: red; */
//   width: 200px;

//   & .ant-slider-rail {
//     background: var(--silver-color);
//   }

//   & .ant-slider-handle:hover {
//     border-color: var(--orange-color);
//   }

//   & .ant-slider-track {
//     background: var(--orange-color) !important;
//   }
//   & .ant-slider-handle {
//     border: solid 2px var(--orange-color);
//   }
// `;
const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.1rem;

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
    z-index: 1;
  }

  & .card-body {
    text-align: center;
    padding: 0 0.9rem;
    position: relative;
    bottom: 1rem;

    & h2 {
      font-weight: 700;
      text-transform: uppercase;
      margin-bottom: 0rem;
      font-size: 1rem;
    }
    & p {
      color: var(--silver-color);
      margin-bottom: 0;
    }
    & hr {
      outline: none;
      border: none;
      height: 1px;
      background: var(--border-color);
      margin: 0.3rem;
    }
    & .price {
      color: #49c4d3;
      margin-bottom: 0.6rem;
    }
  }

  & .delete_icon {
    font-size: 2rem;
    color: var(--orange-color);
    position: relative;
    bottom: 12rem;
    left: 12rem;
    z-index: 5;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      transform: scale(1.2);
    }
    
    @media only screen and (max-width: 1000px) {
      bottom: 12rem;
      left: 22rem;
    }
    @media only screen and (max-width: 768px) {
      bottom: 13rem;
      left: 22rem;
    }
    @media only screen and (max-width: 425px) {
      left: 24rem;
    }
    @media only screen and (max-width: 375px) {
      left: 21rem;
    }
    @media only screen and (max-width: 320px) {
      bottom: 13rem;
      left: 17rem;
    }
  }
`;

const Button = styled.button`
  outline: none;
  border: none;
  color: #fff;
  background: var(--orange-color);
  text-transform: uppercase;
  text-align: center;
  border-radius: 0.7rem;
  padding: 0.3rem 0;
  display: block;
  width: 100%;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-size: 0.9rem;

  &:hover {
    opacity: 0.8;
    color: #fff;
  }
`;
export default ViewProducts;
