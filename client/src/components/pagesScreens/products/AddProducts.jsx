import React, { useState } from "react";
import styled from "styled-components";
import {useHistory} from "react-router-dom"
import MainContainer from "./../../MainContainer";
// import ImagesUploader from "react-images-uploader";
// import "react-images-uploader/styles.css";
// import "react-images-uploader/font.css";
import { Collapse, Upload, Modal, InputNumber  } from "antd";
import { useFormik } from "formik";
import { FaPlus, AiFillDelete, GoPlus } from "react-icons/all";
import ImgCrop from "antd-img-crop";
import axios from "axios";

// import Modal from "./Modal"
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
  const [showInput, setShowInput] = useState(false);
  const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [showInput4, setShowInput4] = useState(false);

  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  // Color State
  const [color, setColor] = useState("");
  const [Listcolor, listSetColor] = useState([]);

  // Finish State
  const [finish, setFinish] = useState("");
  const [ListFinish, setListFinish] = useState([]);

  // Material State
  const [material, setMaterial] = useState("");
  const [ListMaterial, setListMaterial] = useState([]);

  // Styling State
  const [styling, setStyling] = useState("");
  const [ListStyling, setListStyling] = useState([]);

  // ANOTHER VALUE State
  const [sizeValue, setSizeValue] = useState("");
  const [ListSizeValue, setListSizeValue] = useState([]);

  //  Color function
  const addColor = (e) => {
    e.preventDefault();
    Listcolor.push(color);
    console.log(Listcolor);
    setColor("");
  };
  const deleteColor = (itemIndex) => {
    const newListColor = Listcolor.filter((_, index) => index !== itemIndex);
    listSetColor(newListColor);
    console.log(newListColor);
  };

  //  Finish function
  const addFinish = (e) => {
    e.preventDefault();
    ListFinish.push(finish);
    console.log(ListFinish);
    setFinish("");
  };
  const deleteFinish = (itemIndex) => {
    const newListFinish = ListFinish.filter((_, index) => index !== itemIndex);
    setListFinish(newListFinish);
    console.log(newListFinish);
  };

    //  Material function
    const addMaterial = (e) => {
      e.preventDefault();
      ListMaterial.push(material);
      console.log(ListMaterial);
      setMaterial("");
    };
    const deleteMaterial = (itemIndex) => {
      const newListMaterial = ListMaterial.filter((_, index) => index !== itemIndex);
      setListMaterial(newListMaterial);
      console.log(newListMaterial);
    };

    //  Styling function
    const addStyling = (e) => {
      e.preventDefault();
      ListStyling.push(styling);
      console.log(ListStyling);
      setStyling("");
    };
    const deleteStyling = (itemIndex) => {
      const newListStyling = ListStyling.filter((_, index) => index !== itemIndex);
      setListStyling(newListStyling);
      console.log(newListStyling);
    };

    //  SizeValue function
    const addSizeValue = (e) => {
      e.preventDefault();
      ListSizeValue.push(sizeValue);
      console.log(ListSizeValue);
      setSizeValue("");
    };
    const deleteSizeValue = (itemIndex) => {
      const newListSizeValue = ListSizeValue.filter((_, index) => index !== itemIndex);
      setListSizeValue(newListSizeValue);
      console.log(newListSizeValue);
    };


  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
  };

  const handleUpload = async (e) => {
    // e.preventDefault();

    try {
      let formData = new FormData();
      // add one or more of your files in FormData
      // again, the original file is located at the `originFileObj` key
      formData.append("image-files", fileList[0].originFileObj);

      const res = await axios.post("/api/upload/", formData);

      console.log(res);
    } catch (error) {
      console.log(error);
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

  const handleSubmit = (event) => {};

  return (
    <div onSubmit={handleSubmit}>
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
          {fileList.length < 5 && (
            <UploadIcon>
              <GoPlus size={30} />
            </UploadIcon>
          )}
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
        <p
          style={{
            color: "#aaaaac",
            marginBottom: "1rem",
            textTransform: "uppercase",
            fontSize:".7rem"
          }}
        >
          Add variant if this product comes in multiple versions like different
          sizes or colors
        </p>
        <Card style={{ border: ".8px solid #c58787" }}>
          {/* <Todo>
              <p>color</p>
              <FaPlus className="icons" />
            </Todo> */}
          <form onSubmit={addColor}>
            <Drop>
              <p>size</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput(!showInput)}
              />
            </Drop>
            {showInput ? (
              <>
                <div className="variant_add">
                  <input 
                    type="number"
                    className="input"
                    placeholder="Enter size"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                  <button className="add_btn" type="submit">
                    add
                  </button>
                </div>
                <Ul>
                  {Listcolor.length > 0
                    ? Listcolor.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <AiFillDelete
                            className="delete_icon"
                            onClick={() => deleteColor(index)}
                          />
                        </li>
                      ))
                    : null}
                </Ul>
              </>
            ) : null}
          </form>

          <form onSubmit={addFinish}>
            <Drop>
              <p>finish</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput1(!showInput1)}
              />
            </Drop>
            {showInput1 ? (
              <>
                <div className="variant_add">
                  <input 
                    type="number"
                    className="input"
                    placeholder="Enter finish"
                    value={finish}
                    onChange={(e) => setFinish(e.target.value)}
                  />
                  <button className="add_btn" type="submit">
                    add
                  </button>
                </div>
                <Ul>
                  {ListFinish.length > 0
                    ? ListFinish.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <AiFillDelete
                            className="delete_icon"
                            onClick={() => deleteFinish(index)}
                          />
                        </li>
                      ))
                    : null}
                </Ul>
              </>
            ) : null}
          </form>


          <form onSubmit={addMaterial}>
            <Drop>
              <p>Material</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput2(!showInput2)}
              />
            </Drop>
            {showInput2 ? (
              <>
                <div className="variant_add">
                  <input 
                    type="text"
                    className="input"
                    placeholder="Enter Material"
                    value={material}
                    onChange={(e) => setMaterial(e.target.value)}
                  />
                  <button className="add_btn" type="submit">
                    add
                  </button>
                </div>
                <Ul>
                  {ListMaterial.length > 0
                    ? ListMaterial.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <AiFillDelete
                            className="delete_icon"
                            onClick={() => deleteMaterial(index)}
                          />
                        </li>
                      ))
                    : null}
                </Ul>
              </>
            ) : null}
          </form>

          <form onSubmit={addStyling}>
            <Drop>
              <p>Style</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput3(!showInput3)}
              />
            </Drop>
            {showInput3 ? (
              <>
                <div className="variant_add">
                  <input 
                    type="text"
                    className="input"
                    placeholder="Enter style"
                    value={styling}
                    onChange={(e) => setStyling(e.target.value)}
                  />
                  <button className="add_btn" type="submit">
                    add
                  </button>
                </div>
                <Ul>
                  {ListStyling.length > 0
                    ? ListStyling.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <AiFillDelete
                            className="delete_icon"
                            onClick={() => deleteStyling(index)}
                          />
                        </li>
                      ))
                    : null}
                </Ul>
              </>
            ) : null}
          </form>
        </Card>
      </Row>

      <Card>
        <Row>
          <Label>Add value for size</Label>
          <Card style={{ border: ".8px solid #c58787" }}>
          <form onSubmit={addSizeValue}>
            <Drop>
              <p>add another value</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput4(!showInput4)}
              />
            </Drop>
            {showInput4 ? (
              <>
                <div className="variant_add">
                  <input 
                    type="text"
                    className="input"
                    placeholder="Enter avlue for size"
                    value={sizeValue}
                    onChange={(e) => setSizeValue(e.target.value)}
                  />
                  <button className="add_btn" type="submit">
                    add
                  </button>
                </div>
                <Ul>
                  {ListSizeValue.length > 0
                    ? ListSizeValue.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <AiFillDelete
                            className="delete_icon"
                            onClick={() => deleteSizeValue(index)}
                          />
                        </li>
                      ))
                    : null}
                </Ul>
              </>
            ) : null}
          </form>
          </Card>
        </Row>
        <Row>
          <Label style={{color:"#000"}}>size</Label>
          <InputC type="number" placeholder="500 GRAM" />
          <Column>
            <div>
              <Label style={{color:"#000"}}>price</Label>
              <InputC type="number" placeholder="AED 25.00" />
            </div>
            <div>
              <Label style={{color:"#000"}}>compare at price</Label>
              <InputC type="number" placeholder="AED 30.00" />
            </div>
          </Column>
        </Row>
      </Card>
      <ButtonC type="submit" style={{ margin: "1.3rem auto 0" }}>
        save & share
      </ButtonC>
      <Link href="/add-product">ADD ANOTHER PRODUCT</Link>
    </div>
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
    </Form>
  );
};

const FormRate = () => {
  const handleSunmit = () => {};
  return (
    <Form onSubmit={handleSunmit}>
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

        <ButtonC style={{ margin: "0 auto" }}>save</ButtonC>
      </Card>
    </Form>
  );
};

function AddProduct() {

  const history = useHistory();

  return (
    <MainContainer>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>Back</a>
        <h2>Add your products</h2>
      </Header>
      <BodyProduct>
        <Col>
          <FormShipping />
          <ShippingComponent />
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

const ShippingComponent = () => {
  const [shippingFrom, setShippingFrom] = useState("");
  const [shippingTo, setShippingTo] = useState("");
  const [ListShippingTo, setListShippingTo] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    ListShippingTo.push(shippingTo);
    setShippingTo("");

    console.log(ListShippingTo);
  };
  return (
    <form onSubmit={handleSubmit}>
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
            value={shippingFrom}
            onChange={(e) => setShippingFrom(e.target.value)}
          />
        </Row>
        <Row>
          <Label for="ShippingTo">Shipping To</Label>
          <InputC
            type="text"
            name="ShippingTo"
            id="ShippingTo"
            name="ShippingTo"
            value={shippingTo}
            onChange={(e) => setShippingTo(e.target.value)}
          />
        </Row>
        <Row>
          {ListShippingTo.map((item, index) => (
            <RowCheck key={index}>
              <InputCheck type="checkbox" id={item} name={item}>
                {item}
              </InputCheck>
            </RowCheck>
          ))}
        </Row>
        <ButtonC type="submit" style={{ margin: "0 auto" }}>
          save
        </ButtonC>
      </Card>
    </form>
  );
};

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

  & .variant_add {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    & .input {
    color: var(--silver-color);
    list-style: none;
    width: 200px;
    min-width: 0;
    padding: 6px 11px;
    color: var(--silver-color);
    font-size: .8rem;
    height: 2rem;
    border: 3px solid var(--background-color);
    outline: none;
    border-radius: 10px 0 0 10px;
    transition: all 0.3s;
    background: #fff;
      /* width: 100%; */
    }
    & .add_btn {
      font-size:.9rem;
      border: none;
      background: var(--orange-color);
      color: #fff;
      outline: none;
      padding: 5px 1rem;
      border-radius:0 10px 10px 0;
      text-transform: uppercase;
    }
  }
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
  font-weight: 700;
  color: #aaaaac;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 0.8rem;
  margin-top: 0.7rem;
  &:hover {
    color:var(--orange-color);
  }
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

const UploadIcon = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--orange-color);
`;

const Ul = styled.ul`
  list-style: none;
  padding-top: 1rem;
  padding-left: .7rem;

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & p {
      text-transform: uppercase;
      color: var(--silver-color);
      font-weight: 700;
      margin-bottom: 0;
    }

    & .delete_icon {
      color: var(--silver-color);
      cursor: pointer;
      &:hover {
        color: #9c1717;
      }
    }
  }
`;

export default AddProduct;
