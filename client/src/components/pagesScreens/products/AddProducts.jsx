import React, { useState } from "react";
import styled from "styled-components";
import MainContainer from "./../../MainContainer";
// import ImagesUploader from "react-images-uploader";
// import "react-images-uploader/styles.css";
// import "react-images-uploader/font.css";
import { Collapse, Upload, Modal } from "antd";
import { useFormik } from "formik";
import { FaPlus } from "react-icons/fa";
import {GoPlus} from "react-icons/go"
import ImgCrop from "antd-img-crop";
import axios from "axios";
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import InputCheck from "../../CheckBoxComponent";

import { useDispatch, useSelector } from "react-redux";

const { Panel } = Collapse;
// import SelectItem from "./SelectItem"

const Todo = () => {
  function callback(key) {
    console.log(key);
  }
  return (
    <Collapse onChange={callback}>
      <Panel header="This is panel" key="1">
        {/* <SelectItem /> */}
      </Panel>
    </Collapse>
  );
};

const FormRight = () => {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList)
  };

  const handleUpload = async (e) => {
    // e.preventDefault();

    try {
      let formData = new FormData();
    // add one or more of your files in FormData
    // again, the original file is located at the `originFileObj` key
    formData.append("image-files", fileList[0].originFileObj);

    const res = await axios.post("/api/upload/", formData);

    console.log(res)
      
    } catch (error) {
      console.log(error)
    }

  
    
  };

  const handlePreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
      console.log(fileList);
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const handleSubmit = (event) => {
    
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <InputC
          type="text"
          name="productName"
          id="productName"
          name="productName"
          placeholder="PRODUCT NAME"
        />
      </Row>
      <Row>
        <TextArea
          type="text"
          name="descript"
          id="descript"
          name="descript"
          placeholder="Describe your Product"
        />
      </Row>
      <Row>
        <Label>Add Photo for your Product</Label>

        <Upload
          // action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
          listType="picture-card"
          fileList={fileList}
          onPreview={handlePreview}
          onChange={handleUpload}
          onRemove={() => console.log("Image remove")}
          name="imgfiles"
        >
        {fileList.length < 5 && <UploadIcon><GoPlus size={30} /></UploadIcon>}

        </Upload>
      
        {/* <ImgCrop rotate>
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            onChange={handleUpload}
            onPreview={handlePreview}
            onRemove={() => console.log("Image remove")}
            fileList={fileList}
            name="imgfiles"
          >
            {fileList.length < 5 && <UploadIcon><GoPlus size={30} /></UploadIcon>}
          </Upload>
        </ImgCrop> */}
      </Row>

      <Row>
        <Label>variants</Label>
        <h5
          style={{
            color: "#aaaaac",
            marginBottom: "1rem",
            textTransform: "uppercase",
          }}
        >
          Add variant if this product comes in multiple versions like different
          sizes or colors
        </h5>
        <Card style={{ border: ".8px solid #c58787" }}>
          {/* <Todo>
              <p>color</p>
              <FaPlus className="icons" />
            </Todo> */}
          <Drop>
            <p>size</p>
            <FaPlus className="icons" />
          </Drop>
          <Drop>
            <p>finish</p>
            <FaPlus className="icons" />
          </Drop>
          <Drop>
            <p>material</p>
            <FaPlus className="icons" />
          </Drop>
          <Drop>
            <p>style</p>
            <FaPlus className="icons" />
          </Drop>
        </Card>
      </Row>

      <Card>
        <Row>
          <Label>Add value for size</Label>
          <Card style={{ border: ".8px solid #c58787" }}>
            <Drop>
              <p>add another value</p>
              <FaPlus className="icons" />
            </Drop>
          </Card>
        </Row>
        <Row>
          <Label>size</Label>
          <InputC type="number" placeholder="500 GRAM" />
          <Column>
            <div>
              <Label>price</Label>
              <InputC type="number" placeholder="AED 25.00" />
            </div>
            <div>
              <Label>compare at price</Label>
              <InputC type="number" placeholder="AED 30.00" />
            </div>
          </Column>
        </Row>
      </Card>
      <ButtonC type="submit" style={{ margin: "1.3rem auto 0" }}>
        save & share
      </ButtonC>
      <Link href="#">ADD ANOTHER PRODUCT</Link>
    </Form>
  );
};

const FormShipping = () => {
  return (
    <Form>
      <Row>
        <Label>Creat code</Label>
        <InputC type="text" name="" id="" />
      </Row>
      <Row>
        <Label type="text" name="" id="">
          Selectservice
        </Label>
        <Card>
          <RowCheck>
            <InputCheck
              type="checkbox"
              id="sellbyAU79CODE"
              name="sellbyAU79CODE"
            >
              sell by <span className="span">AU79CODE</span>
            </InputCheck>
            {/* <LabelCheck for="sellbyAU79CODE">
                    
                  </LabelCheck> */}
          </RowCheck>
          <RowCheck>
            <InputCheck
              type="checkbox"
              id="DeliverywithAU79CODE"
              name="DeliverywithAU79CODE"
            >
              Delivery with <span className="span">AU79CODE</span>
            </InputCheck>
          </RowCheck>
        </Card>
      </Row>
      <Row>
        <Label>Creat zone</Label>
      </Row>
      <Card>
        <Row>
          <Label for="RateName">Shipping From</Label>
          <InputC type="text" name="RateName" id="RateName" name="RateName" />
        </Row>
        <Row>
          <Label for="ShippingTo">Shipping To</Label>
          <InputC
            type="text"
            name="ShippingTo"
            id="ShippingTo"
            name="ShippingTo"
          />
        </Row>
        <Row>
          <RowCheck>
            <InputCheck
              type="checkbox"
              id="United emirates"
              name="United emirates"
            >
              United emirates
            </InputCheck>
          </RowCheck>
          <RowCheck>
            <InputCheck
              type="checkbox"
              id="nameofemirate1"
              name="nameofemirate1"
            >
              name of emirate
            </InputCheck>
          </RowCheck>
          <RowCheck>
            <InputCheck
              type="checkbox"
              id="nameofemirate2"
              name="nameofemirate2"
            >
              name of emirate
            </InputCheck>
          </RowCheck>
          <RowCheck>
            <InputCheck
              type="checkbox"
              id="nameofemirate3"
              name="nameofemirate3"
            >
              name of emirate
            </InputCheck>
          </RowCheck>
          <RowCheck>
            <InputCheck type="checkbox" id="other" name="other">
              ITALY
            </InputCheck>
          </RowCheck>
        </Row>
        <ButtonC style={{ margin:"0 auto"}}>save</ButtonC>
      </Card>
    </Form>
  );
};

const FormRate = () => {
  return (
    <Form>
      <Row>
        <Label style={{ marginTop: "1.4rem" }}>Add Rate</Label>
      </Row>
      <Card>
        <Row>
          <Label for="RateName">Rate Name</Label>
          <InputC type="text" name="RateName" id="RateName" name="RateName" />
        </Row>
        <Row>
          <Label for="">Shipping To</Label>
          <GridRow>
            <p className="title">name of city</p>
            <p className="title">price</p>
            <p className="title">condition</p>
          </GridRow>
          <hr style={{ background: "#aaaaac", marginBottom: ".7rem" }} />
          <GridRow>
            <p>Dubai</p>
            <p>free</p>
            <p>ad 50.00</p>
          </GridRow>
          <GridRow>
            <p>al sharqa</p>
            <p>20</p>
            <p>add condition</p>
          </GridRow>
          <GridRow>
            <p>al fougera</p>
            <p>20</p>
            <p>add condition</p>
          </GridRow>
          <GridRow>
            <p>al ain</p>
            <p>0</p>
            <p>add condition</p>
          </GridRow>
        </Row>

        <ButtonC style={{ margin:"0 auto"}}>save</ButtonC>
      </Card>
    </Form>
  );
};

function AddProduct() {
  return (
    <MainContainer>
      <Header>
        <a href="#/">Back</a>
        <h2>Add your products</h2>
      </Header>
      <BodyProduct>
        <Col>
          <FormShipping />
          <FormRate />
        </Col>

        {/* ////////////////////////   COLLUMN RIGHT   /////////// */}
        <Col>
          <FormRight />
        </Col>
      </BodyProduct>
    </MainContainer>
  );
}




const Header = styled.div`
  height: 5rem;
  width: 100%;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 2rem;
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    font-weight: 700;
    margin-bottom: 0;
  }
`;
const BodyProduct = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media only screen and (max-width: 768px) {
    display: block;

    & div:nth-child(1) {
      margin-bottom: 1.3rem;
    }
  }
`;
const Col = styled.div`
border: 1px solid #cccbcb;
  border-radius: 10px;
  padding: 1.25rem;
`;
const Card = styled.div`
  border: 1px solid #cccbcb;
  border-radius: 10px;
  padding: 1.25rem;
`;

const Row = styled.div`
  margin-bottom: 1rem;
`;
const Label = styled.label`
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: block;
  margin-bottom: 5px;
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #c58787;
  outline: none;
  height: 5rem;
  width: 100%;
  padding-left: 0.4rem;
  padding-top: 0.5rem;
  color: #aaaaac;

  &:focus {
    color: #000;
    box-shadow: 0 0 0 2px #c58787;
    border-color: #c58787;
  }
`;
const RowCheck = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
`;

const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & .title {
    /* font-weight: 700; */
    color: #000;
  }
  & p {
    color: #aaaaac;
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
`;
const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 1rem;
  color: #aaaaac;
`;
const Link = styled.a`
  text-decoration: none;
  color: #aaaaac;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 0.8rem;
  margin-top: 0.7rem;
`;
const Drop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaaaac;
  text-transform: uppercase;
  font-size: 0.9rem;

  & .icons {
    color: #c58787;
    cursor: pointer;
  }
`;

const Form = styled.form`
  
`;


const UploadIcon = styled.div`
width: 100%;
height: 100%;
color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--orange-color);
`

export default AddProduct;
