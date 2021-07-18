import React, { useState } from "react";
import styled from "styled-components";
// import ImagesUploader from "react-images-uploader";
// import "react-images-uploader/styles.css";
// import "react-images-uploader/font.css";
import { Collapse, Upload } from "antd";
import { FaPlus } from "react-icons/fa";
import ImgCrop from "antd-img-crop";
import axios from "axios";
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import InputCheck from "../../CheckBoxComponent"

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
  const [fileList, setFileList] = useState([{}]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
  };

  const onPreview = async (file) => {
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
    event.preventDefault();

    let formData = new FormData();
    // add one or more of your files in FormData
    // again, the original file is located at the `originFileObj` key
    formData.append("image-files", fileList[0].originFileObj);

    axios
      .post("/api/upload", formData)
      .then((res) => {
        console.log("res", res);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Card>
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
          <ImgCrop rotate>
            <Upload
              listType="picture-card"
              beforeUpload={() => false}
              onChange={onChange}
              onPreview={onPreview}
              fileList={fileList}
              name="image-files"
            >
              {fileList.length < 5 && "+ Upload"}
            </Upload>
          </ImgCrop>
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
            Add variant if this product comes in multiple versions like
            different sizes or colors
          </h5>
          <Card style={{ border: ".8px solid #c58787" }}>
            <Todo>
              <p>color</p>
              <FaPlus className="icons" />
            </Todo>
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
        <ButtonC type="submit" style={{ marginTop: "1.3rem" }}>
          save & share
        </ButtonC>
        <Link href="#">ADD ANOTHER PRODUCT</Link>
      </Card>
    </Form>
  );
};

function AddProduct() {
  return (
    <Container>
      <Header>
        <a href="#/">Back</a>
        <h2>Add your products</h2>
      </Header>
      <BodyProduct>
        <ColLeft>
          <Card>
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
                <InputC
                  type="text"
                  name="RateName"
                  id="RateName"
                  name="RateName"
                />
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
              <ButtonC>save</ButtonC>
            </Card>

            {/* Lst One */}
            <Row>
              <Label style={{ marginTop: "1.4rem" }}>Add Rate</Label>
            </Row>
            <Card>
              <Row>
                <Label for="RateName">Rate Name</Label>
                <InputC
                  type="text"
                  name="RateName"
                  id="RateName"
                  name="RateName"
                />
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

              <ButtonC>save</ButtonC>
            </Card>
          </Card>
        </ColLeft>

        {/* ////////////////////////   COLLUMN RIGHT   /////////// */}
        <ColRight>
          <FormRight />
        </ColRight>
      </BodyProduct>
    </Container>
  );
}

const Container = styled.div`
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

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
  grid-gap: 1.5rem;

  @media only screen and (max-width: 768px) {
    display: block;

    & div:nth-child(1) {
      margin-bottom: 1.3rem;
    }
  }
`;
const ColLeft = styled.div``;
const ColRight = styled.div``;
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

const Form = styled.form``;

export default AddProduct;
