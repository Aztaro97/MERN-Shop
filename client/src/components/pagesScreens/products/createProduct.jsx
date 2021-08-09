import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "../../MainContainer";
import { Upload, Modal } from "antd";
import { FaPlus, AiFillDelete, GoPlus } from "react-icons/all";
import axios from "axios";
import { createProduct } from "../../../flux/actions/productAction";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";

import {
  Card,
  Header,
  MainProductForm,
  Col,
  Row,
  Label,
  TextArea,
  RowCheck,
  GridRow,
  Column,
  Link,
  Drop,
  UploadIcon,
  Ul,
} from "./styledCreateProduct";

// import Modal from "./Modal"
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import InputCheck from "../../CheckBoxComponent";
import InputRadio from "../../InputRadioComponent";

function AddProductScreen() {
  const [code, setCode] = useState("");
  const [typeService, setTypeService] = useState("");
  const [shippingFrom, setShippingFrom] = useState("");
  const [shippingTo, setShippingTo] = useState([]);
  const [rateShipping, setrateShipping] = useState([{}]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [variantColor, setVariantColor] = useState([]);
  const [variantSize, setVariantSize] = useState([]);
  const [variantFinish, setVariantFinish] = useState([]);
  const [variantMaterial, setVariantMaterial] = useState("");
  const [variantStyle, setVariantStyle] = useState([]);
  const [united, setUnited] = useState([]);
  const [size, setSize] = useState(Number);
  const [price, setPrice] = useState("");
  const [compareAtPrice, setCompareAtPrice] = useState("");

  const body = {
    code,
    typeService,
    shippingFrom,
    shippingTo,
    rateShipping,
    name,
    description,
    imageUrl,
    variantColor,
    variantSize,
    variantFinish,
    variantMaterial,
    variantStyle,
    united,
    size,
    price,
    compareAtPrice,
  };

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const history = useHistory();

  const handleProductCreate = (e) => {
    e.preventDefault();
    console.log(body);
    dispatch(createProduct(body));
  };

  if (!userInfo) {
    history.push("/auth");
  }

  // useEffect(() => {

  // }, [userInfo])

  return (
    <MainContainer>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>
          Back
        </a>
        <h2>Add your products</h2>
      </Header>
      <MainProductForm>
        <Col>
          <ProductSection1 setCode={setCode} />
          <ShippingSection
            shippingFrom={shippingFrom}
            setShippingFrom={setShippingFrom}
            setShippingTo={setShippingTo}
            shippingTo={shippingTo}
          />
          <RateSection />
        </Col>

        {/* ////////////////////////   COLLUMN RIGHT   /////////// */}
        <Col>
          <FormRight
            handleProductCreate={handleProductCreate}
            setName={setName}
            setDescription={setDescription}
            setPrice={setPrice}
            setSize={setSize}
            setCompareAtPrice={setCompareAtPrice}
            setVariantColor={setVariantColor}
            setVariantSize={setVariantSize}
            setVariantFinish={setVariantFinish}
            setVariantMaterial={setVariantMaterial}
            setVariantStyle={setVariantStyle}
            setUnited={setUnited}
          />
        </Col>
      </MainProductForm>
    </MainContainer>
  );
}

const FormRight = ({
  handleProductCreate,
  setName,
  setDescription,
  setSize,
  setPrice,
  setCompareAtPrice,
  setVariantColor,
  setVariantSize,
  setVariantFinish,
  setVariantMaterial,
  setVariantStyle,
  setUnited,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [showInput0, setShowInput0] = useState(false);
  const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [showInput4, setShowInput4] = useState(false);

  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  // Color State
  const [color, setColor] = useState("");
  const [Listcolor, listSetColor] = useState([]);

  // Variant Size State
  const [variantSizeValue, setVariantSizeValue] = useState(Number);
  const [ListVariantSize, listSetVariantSize] = useState([]);

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
    setVariantColor(Listcolor);
    setColor("");
  };
  const deleteColor = (itemIndex) => {
    const newListColor = Listcolor.filter((_, index) => index !== itemIndex);
    listSetColor(newListColor);
    setVariantColor(newListColor);
    console.log(newListColor);
  };

  //  Variant Size function
  const addVariantSize = (e) => {
    e.preventDefault();
    ListVariantSize.push(variantSizeValue);
    console.log(ListVariantSize);
    setVariantSize(ListVariantSize);
    setVariantSizeValue("");
  };
  const deleteVariantSize = (itemIndex) => {
    const newListVariantSize = ListVariantSize.filter(
      (_, index) => index !== itemIndex
    );
    listSetVariantSize(newListVariantSize);
    setVariantSize(newListVariantSize);
    console.log(newListVariantSize);
  };

  //  Finish function
  const addFinish = (e) => {
    e.preventDefault();
    ListFinish.push(finish);
    console.log(ListFinish);
    setVariantFinish(ListFinish);
    setFinish("");
  };
  const deleteFinish = (itemIndex) => {
    const newListFinish = ListFinish.filter((_, index) => index !== itemIndex);
    setListFinish(newListFinish);
    setVariantFinish(newListFinish);
    console.log(newListFinish);
  };

  //  Material function
  const addMaterial = (e) => {
    e.preventDefault();
    ListMaterial.push(material);
    console.log(ListMaterial);
    setVariantMaterial(ListMaterial);
    setMaterial("");
  };
  const deleteMaterial = (itemIndex) => {
    const newListMaterial = ListMaterial.filter(
      (_, index) => index !== itemIndex
    );
    setListMaterial(newListMaterial);
    setVariantMaterial(newListMaterial);
    console.log(newListMaterial);
  };

  //  Styling function
  const addStyling = (e) => {
    e.preventDefault();
    ListStyling.push(styling);
    console.log(ListStyling);
    setVariantStyle = ListStyling;
    setStyling("");
  };
  const deleteStyling = (itemIndex) => {
    const newListStyling = ListStyling.filter(
      (_, index) => index !== itemIndex
    );
    setListStyling(newListStyling);
    setVariantStyle(newListStyling);
    console.log(newListStyling);
  };

  //  SizeValue function
  const addSizeValue = (e) => {
    e.preventDefault();
    ListSizeValue.push(sizeValue);
    setUnited(ListSizeValue);
    console.log(ListSizeValue);
    setSizeValue("");
  };
  const deleteSizeValue = (itemIndex) => {
    const newListSizeValue = ListSizeValue.filter(
      (_, index) => index !== itemIndex
    );
    setListSizeValue(newListSizeValue);
    setUnited(newListSizeValue);
    console.log(newListSizeValue);
  };

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
  };

  const handleUpload = async (e) => {
    try {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          // Authorization: `Bearer ${userInfo.token}`,
        },
      };

      let formdata = new FormData();
      for (var i = 0; i < fileList.length; i++) {
        formdata.append("imgfiles", fileList[i].originFileObj);
      }

      const res = await axios.post(
        "/api/upload/company-images",
        formdata,
        config
      );

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
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
          onChange={(e) => setName(e.target.value)}
        />
      </Row>
      <Row>
        <TextArea
          type="text"
          name="descript"
          id="descript"
          name="descript"
          placeholder="Describe your Product"
          onChange={(e) => setDescription(e.target.value)}
        />
      </Row>
      <Row>
        <Label>Add Photo for your Product</Label>

        <Upload
          listType="picture-card"
          beforeUpload={() => false}
          onChange={handleChange}
          onPreview={handlePreview}
          fileList={fileList}
          name="imgfiles"
          accept="image/png, image/jpeg, image/jpg"
          multiple
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
            fontSize: ".7rem",
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
          <div>
            <Drop>
              <p>color</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput(!showInput)}
              />
            </Drop>
            {showInput ? (
              <>
                <div className="variant_add">
                  <input
                    type="text"
                    className="input"
                    placeholder="Enter color name"
                    value={color}
                    onChange={(e) => setColor(e.target.value)}
                  />
                  <button
                    className="add_btn"
                    onClick={addColor}
                    disabled={!color && true}
                  >
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
          </div>

          <div>
            <Drop>
              <p>size</p>
              <FaPlus
                className="icons"
                onClick={() => setShowInput0(!showInput0)}
              />
            </Drop>
            {showInput0 ? (
              <>
                <div className="variant_add">
                  <input
                    type="number"
                    className="input"
                    placeholder="Enter size"
                    value={variantSizeValue}
                    onChange={(e) => setVariantSizeValue(e.target.value)}
                  />
                  <button
                    className="add_btn"
                    disabled={!variantSizeValue && true}
                    onClick={addVariantSize}
                  >
                    add
                  </button>
                </div>
                <Ul>
                  {ListVariantSize.length > 0
                    ? ListVariantSize.map((item, index) => (
                        <li key={index}>
                          <p>{item}</p>
                          <AiFillDelete
                            className="delete_icon"
                            onClick={() => deleteVariantSize(index)}
                          />
                        </li>
                      ))
                    : null}
                </Ul>
              </>
            ) : null}
          </div>

          <div>
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
                  <button
                    className="add_btn"
                    disabled={!finish && true}
                    onClick={addFinish}
                  >
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
          </div>

          <div>
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
                  <button
                    className="add_btn"
                    onClick={addMaterial}
                    disabled={!material && true}
                  >
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
          </div>

          <div>
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
                  <button
                    className="add_btn"
                    onClick={addStyling}
                    disabled={!styling && true}
                  >
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
          </div>
        </Card>
      </Row>

      <Card>
        <Row>
          <Label>Add value for size</Label>
          <Card style={{ border: ".8px solid #c58787" }}>
            <div>
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
                    <button
                      className="add_btn"
                      disabled={!sizeValue && true}
                      onClick={addSizeValue}
                    >
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
            </div>
          </Card>
        </Row>
        <Row>
          <Label style={{ color: "#000" }}>size</Label>
          <InputC
            type="number"
            placeholder="500 GRAM"
            onChange={(e) => setSize(e.target.value)}
          />
          <Column>
            <div>
              <Label style={{ color: "#000" }}>price</Label>
              <InputC
                type="number"
                placeholder="AED 25.00"
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <Label style={{ color: "#000" }}>compare at price</Label>
              <InputC
                type="number"
                placeholder="AED 30.00"
                onChange={(e) => setCompareAtPrice(e.target.value)}
              />
            </div>
          </Column>
        </Row>
      </Card>
      <ButtonC
        type="submit"
        style={{ margin: "1.3rem auto 0" }}
        onClick={handleProductCreate}
      >
        save & share
      </ButtonC>
      <Link href="/add-product">ADD ANOTHER PRODUCT</Link>
    </div>
  );
};

const ProductSection1 = ({ setCode }) => {
  return (
    <>
      <Row>
        <Label>Creat code</Label>
        <InputC
          type="text"
          name=""
          id=""
          onChange={(e) => setCode(e.target.value)}
        />
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
    </>
  );
};

const RateSection = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [listAddress, setListAddress] = useState([
    { name: "", amount: 0, minprice: 0, maxprice: 0 },
  ]);
  const [address, setAddress] = useState({ name: "" });

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    listAddress.push(address);
    setAddress({ name: "" });
  };
  const onSaveCondition = (item) => {
    console.log(item);
    setIsModalVisible(false);
    console.log(listAddress);
  };
  return (
    <>
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
            value={address.name}
            onChange={(e) => setAddress({ name: e.target.value })}
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
          {listAddress.length > 0 &&
            listAddress.map((item, index) => (
              <GridRow key={index}>
                <p>{item.name}</p>
                <p>
                  {!item.minprice || item.minprice == 0
                    ? "Free"
                    : item.minprice}
                </p>
                <p>
                  <span onClick={showModal} style={{ cursor: "pointer" }}>
                    {!item.amount ? "Add condition" : item.amount}
                  </span>
                  <Modal
                    visible={isModalVisible}
                    onOk={() => setIsModalVisible(false)}
                    onCancel={() => setIsModalVisible(false)}
                    footer={false}
                  >
                    <ShippingModal>
                      <h5>add condition</h5>
                      <hr />
                      <div className="price">
                        <input
                          type="number"
                          name="minprice"
                          id="minprice"
                          placeholder="MINIMUN PRICE"
                          value={item.minprice}
                          onChange={(e) => (item.minprice = e.target.value)}
                        />
                        <input
                          type="number"
                          name="maxprice"
                          id="maxprice"
                          placeholder="MAXMUN PRICE"
                          value={item.maxprice}
                          onChange={(e) => (item.maxprice = e.target.value)}
                        />
                      </div>
                      <hr />
                      <div className="modal_radio">
                        <div>
                          <InputRadio
                            required
                            value="itemWeight"
                            name="based_order"
                            id="itemWeight"
                          />
                          <label htmlFor="itemWeight">
                            based on item weight
                          </label>
                        </div>
                        <div>
                          <InputRadio
                            required
                            value="orderPrice"
                            name="based_order"
                            id="orderPrice"
                          />
                          <label htmlFor="orderPrice">
                            based on item weight
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="save_btn">
                        <button
                          type="button"
                          onClick={() => onSaveCondition(item)}
                        >
                          save
                        </button>
                      </div>
                    </ShippingModal>
                  </Modal>
                </p>
              </GridRow>
            ))}
        </Row>

        <ButtonC
          style={{ margin: "0 auto" }}
          disabled={!address.name && true}
          onClick={handleAdd}
        >
          save
        </ButtonC>
      </Card>
    </>
  );
};

const ShippingSection = ({
  setShippingFrom,
  setShippingTo,
  shippingFrom,
  shippingTo,
}) => {
  // const [shippingFrom, setShippingFrom] = useState("");
  const [inputValu, setInputValu] = useState("");
  const [ListShippingTo, setListShippingTo] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleClick = (e) => {
    e.preventDefault();
    ListShippingTo.push(inputValu);
    setShippingTo(ListShippingTo);
    setInputValu("");

    // console.log(ListShippingTo);
  };

  const onChangeCountry = (val) => {
    setCountry(val)
    console.log(region)
  }
  return (
    <>
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
            // value={shippingFrom}
            onChange={(e) => setShippingFrom(e.target.value)}
          />
        </Row>
        <Row>
          <Label for="ShippingTo">Shipping To</Label>
          <div>
            <CountryDropdownCustomer
              value={country}
              onChange={val => onChangeCountry(val)}
            />
            <RegionDropdownCustomer
              country={country}
              value={region}
              onChange={(val) => setRegion(val)}
              defaultOptionLabel="Choose"
            />
          </div>
          {/* <InputC
            type="text"
            name="ShippingTo"
            id="ShippingTo"
            name="ShippingTo"
            value={inputValu}
            onChange={(e) => setInputValu(e.target.value)}
          /> */}
        </Row>
        <Row>
          {ListShippingTo &&
            ListShippingTo.map((item, index) => (
              <RowCheck key={index}>
                <InputCheck type="checkbox" id={item} name={item}>
                  {item}
                </InputCheck>
              </RowCheck>
            ))}
        </Row>
        <ButtonC style={{ margin: "0 auto" }} onClick={handleClick}>
          save
        </ButtonC>
      </Card>
    </>
  );
};

const ShippingModal = styled.div`
  padding: 0.8rem;

  & h5 {
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 700;
    margin-bottom: 0;
    font-size: 0.9rem;
    color: var(--silver-color);
  }
  & hr {
    outline: none;
    border: none;
    height: 0.5px;
    margin: 4px 0 1rem 0;
    background: var(--orange-color);
  }
  & .price {
    display: flex;
    justify-content: space-between;
    margin: 1.5rem 0 2rem 0;
    & input {
      border: none;
      border-bottom: 1px solid var(--silver-color);
      width: 128px;
      font-size: 0.9rem;
      letter-spacing: 1px;
      &:focus {
        border: none;
        border-bottom: 1px solid var(--silver-color);
        outline: none;
      }
    }
  }
  & .modal_radio {
    margin: 1.5rem 0;
    & div {
      display: flex;
      align-items: center;
      margin-bottom: 8px;
      & label {
        margin-bottom: 0;
        padding-left: 6px;
        text-transform: uppercase;
        letter-spacing: 0px;
        font-weight: 700;
        color: var(--silver-color);
        cursor: pointer;
      }
    }
  }
  & .save_btn {
    margin: 1rem 0;
    text-align: right;
    & button {
      text-align: center;
      outline: none;
      border: none;
      color: #fff;
      background: var(--orange-color);
      padding: 6px 3rem;
      text-transform: uppercase;
      border-radius: 10px;
      font-weight: 700;
    }
  }
`;

const CountryDropdownCustomer = styled(CountryDropdown)`
  border: 1px solid var(--orange-color);
  padding: 10px;
  display: block;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border: 1px solid var(--orange-color);
  }
`;
const RegionDropdownCustomer = styled(RegionDropdown)`
border: 1px solid var(--orange-color);
  padding: 10px ;
  display:block;
  &:focus {
    outline: none;
  border: 1px solid var(--orange-color);
`;

export default AddProductScreen;
