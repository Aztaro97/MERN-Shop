import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import MainContainer from "../../MainContainer";
import { Upload, Modal } from "antd";
import { FaPlus, AiFillDelete, GoPlus } from "react-icons/all";
import axios from "axios";
import {
  CountryDropdown,
  RegionDropdown,
} from "react-country-region-selector";
import {
  listProductDetails,
  updateProduct,
  // createProduct,
} from "../../../flux/actions/productAction";

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
} from "../products/styledCreateProduct";

// import Modal from "./Modal"
import InputRadio from "../../InputRadioComponent";
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import InputCheck from "../../CheckBoxComponent";
import LoaderComponent from "../../loader";

function EditProductScreen() {
  const params = useParams();
  const productId = params.id;

  const [selling, setSelling] = useState(false);
  const [delivery, setDelivery] = useState(false);

  const [fileList, setFileList] = useState([]);

  const [code, setCode] = useState("");
  const [shippingFrom, setShippingFrom] = useState("");
  const [shippingTo, setShippingTo] = useState([]);
  const [rateShipping, setrateShipping] = useState([{}]);
  const [productName, setProductName] = useState("");
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

  const [zone, setZone] = useState({});
  const [arrayZone, setArrayZone] = useState([]);
  // const arrayZone = []

  const body = {
    _id: productId,
    code,
    typeService: { selling: selling, delivery: delivery },
    shippingFrom,
    shippingTo: arrayZone,
    rateShipping: arrayZone,
    name: productName,
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
  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const history = useHistory();

  const handleProductCreate = async (e) => {
    try {
      e.preventDefault();
      console.log(body);
      dispatch(updateProduct(body));
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      let formdata = new FormData();
      for (var i = 0; i < fileList.length; i++) {
        formdata.append("imgfiles", fileList[i].originFileObj);
      }
      const res = await axios.post(
        `/api/upload/product/${product._id}`,
        formdata,
        config
      );
      console.log(res);
      if (res) {
        history.push("/myproducts");
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  if (!userInfo) {
    history.push("/auth");
  }

  useEffect(() => {
    if (!product._id || product._id !== params.id) {
      dispatch(listProductDetails(params.id));
    } else {
      setCode(product.code);
      setProductName(product.name);
      setDescription(product.description);
      setFileList(product.imageUrl);
      setSize(product.size);
      setCompareAtPrice(product.compareAtPrice);
      setPrice(product.price);
      setShippingFrom(product.shippingFrom);
      setSelling(product.typeService.selling);
      setDelivery(product.typeService.delivery);
      setVariantColor(product.variantColor);
      setVariantSize(product.variantSize);
      setVariantFinish(product.variantFinish);
      setVariantMaterial(product.variantMaterial);
      setVariantStyle(product.variantStyle);
      setUnited(product.united);
      setArrayZone(product.shippingTo);
      // console.log(product)
      // setBody({
      //   code: product.code,
      //   typeService: product.typeService,
      //   shippingFrom: product.shippingFrom,
      //   shippingTo: product.shippingTo,
      //   rateShipping: product.rateShipping,
      //   name: product.name,
      //   description: product.description,
      //   imageUrl: product.imageUrl,
      //   variantColor: product.variantColor,
      //   variantSize: product.variantSize,
      //   variantFinish: product.variantFinish,
      //   variantMaterial: product.variantMaterial,
      //   variantStyle: product.variantStyle,
      //   united: product.united,
      //   size: product.size,
      //   price: product.price,
      //   compareAtPrice: product.compareAtPrice,
      // });
    }
    // setName(product.name)
    // console.log(body);
  }, [dispatch, params, product]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h5>Error: {error}</h5>
      ) : (
        <>
          <Header>
            <a href="#/" onClick={() => history.goBack()}>
              Back
            </a>
            <h2>Edit product</h2>
          </Header>
          <MainProductForm onSubmit={handleProductCreate}>
            <Col>
              <ProductSection1
                code={code}
                selling={selling}
                delivery={delivery}
                setCode={setCode}
                setSelling={setSelling}
                setDelivery={setDelivery}
              />
              <ShippingSection
                shippingFrom={shippingFrom}
                setShippingFrom={setShippingFrom}
                setShippingTo={setShippingTo}
                shippingTo={shippingTo}
                zone={zone}
                setZone={setZone}
                setArrayZone={setArrayZone}
                arrayZone={arrayZone}
              />
              <RateSection arrayZone={arrayZone} setArrayZone={setArrayZone} />
            </Col>

            {/* ////////////////////////   COLLUMN RIGHT   /////////// */}
            <Col>
              <FormRight
                handleProductCreate={handleProductCreate}
                productName={productName}
                setProductName={setProductName}
                description={description}
                setDescription={setDescription}
                setPrice={setPrice}
                setSize={setSize}
                size={size}
                setCompareAtPrice={setCompareAtPrice}
                setVariantColor={setVariantColor}
                setVariantSize={setVariantSize}
                setVariantFinish={setVariantFinish}
                setVariantMaterial={setVariantMaterial}
                setVariantStyle={setVariantStyle}
                setUnited={setUnited}
                fileList={fileList}
                setFileList={setFileList}
                compareAtPrice={compareAtPrice}
                price={price}
                variantStyle={variantStyle}
              />
            </Col>
          </MainProductForm>
        </>
      )}
    </MainContainer>
  );
}

const FormRight = ({
  handleProductCreate,
  productName,
  setProductName,
  setDescription,
  description,
  setSize,
  size,
  setPrice,
  setCompareAtPrice,
  setVariantColor,
  setVariantSize,
  setVariantFinish,
  setVariantMaterial,
  setVariantStyle,
  variantStyle,
  setUnited,
  fileList,
  setFileList,
  compareAtPrice,
  price,
}) => {
  const [showInput, setShowInput] = useState(false);
  const [showInput0, setShowInput0] = useState(false);
  const [showInput1, setShowInput1] = useState(false);
  const [showInput2, setShowInput2] = useState(false);
  const [showInput3, setShowInput3] = useState(false);
  const [showInput4, setShowInput4] = useState(false);

  // Color State
  const [color, setColor] = useState("");
  const [Listcolor, listSetColor] = useState([]);

  // Variant Size State
  const [variantSizeValue, setVariantSizeValue] = useState("");
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

  // const handleUpload = async (e) => {
  //   try {
  //     const config = {
  //       headers: {
  //         "content-type": "multipart/form-data",
  //         // Authorization: `Bearer ${userInfo.token}`,
  //       },
  //     };

  //     let formdata = new FormData();
  //     for (var i = 0; i < fileList.length; i++) {
  //       formdata.append("imgfiles", fileList[i].originFileObj);
  //     }

  //     const res = await axios.post(
  //       "/api/upload/company-images",
  //       formdata,
  //       config
  //     );

  //     console.log(res.data);
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // };

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

  const history = useHistory();

  const {
    loading,
    error,
    success,
    product: createdProduct,
  } = useSelector((state) => state.productCreate);

  const dispatch = useDispatch();

  useEffect(() => {
    if (success) {
      window.location.href = `/add-product/${createdProduct._id}`;
    }

    if (variantStyle.lenght) {
      setVariantStyle(variantStyle);
    }
  }, [success, history, createdProduct]);

  return (
    <div>
      <Row>
        <InputC
          required
          type="text"
          name="productName"
          id="productName"
          value={productName}
          placeholder="PRODUCT NAME"
          onChange={(e) => setProductName(e.target.value)}
        />
      </Row>
      <Row>
        <TextArea
          required
          type="text"
          name="descript"
          id="descript"
          placeholder="Describe your Product"
          value={description}
          rows="5"
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
                    type="text"
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
                    type="currency"
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
            type="currency"
            placeholder="0.00 GRAM"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
          <Column>
            <div>
              <Label style={{ color: "#000" }}>price</Label>
              <InputC
                required
                type="currency"
                placeholder="AED 0.00"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <Label style={{ color: "#000" }}>compare at price</Label>
              <InputC
                type="currency"
                placeholder="AED 0.00"
                value={compareAtPrice}
                onChange={(e) => setCompareAtPrice(e.target.value)}
              />
            </div>
          </Column>
        </Row>
      </Card>
      <ButtonC
        type="submit"
        style={{ margin: "1.3rem auto 0" }}
        // onClick={}
      >
        update
      </ButtonC>
      {/* <Link onClick={() => dispatch(createProduct())}>ADD ANOTHER PRODUCT</Link> */}
    </div>
  );
};

const ProductSection1 = ({
  code,
  selling,
  delivery,
  setCode,
  setSelling,
  setDelivery,
}) => {
  return (
    <>
      <Row>
        <Label>Creat code ( optional ) </Label>
        <InputC
          type="text"
          name="code"
          value={code}
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
              checked={selling && true}
              onChange={(e) => setSelling(e.target.checked)}
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
              checked={delivery && true}
              onChange={(e) => setDelivery(e.target.checked)}
            >
              Delivery with <span className="span">AU79CODE</span>
            </InputCheck>
          </RowCheck>
        </Card>
      </Row>
    </>
  );
};

const RateSection = ({ arrayZone, setArrayZone }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [amount, setAmount] = useState(null);
  const [orderBased, setOrderBased] = useState("");

  const [indexarray, setIndexArray] = useState(null);

  const [rateName, setRateName] = useState("");

  const showModal = (index) => {
    setIsModalVisible(true);
    setIndexArray(index);
    console.log(index);
  };

  const handleAdd = () => {
    // listAddress.push(rateName);
  };
  const onSaveCondition = (index) => {
    console.log(index);
    const newArray = [...arrayZone];

    newArray[index].amount = amount;
    newArray[index].minprice = min;
    newArray[index].maxprice = max;
    newArray[index].orderBased = orderBased;
    setArrayZone(newArray);
    setIsModalVisible(false);
    setMin(null);
    setMax(null);
    setAmount(null);
    setOrderBased("");

    console.log(arrayZone);
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
            value={rateName}
            // onChange={(e) => setAddress({ name: e.target.value })}
            onChange={(e) => setRateName(e.target.value)}
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
          {arrayZone.length > 0 &&
            arrayZone.map((item, index) => (
              <GridRow key={index} className={`Key number ${index}`}>
                <p style={{ color: "var(--orange-color)" }}>
                  {item.city.join(" / ")}
                </p>
                <p style={{ fontSize: ".7rem" }}>
                  {!item.amount || item.amount === null
                    ? "Free shipping"
                    : item.amount}
                </p>
                <p>
                  <span
                    onClick={() => showModal(index)}
                    style={{ cursor: "pointer" }}
                  >
                    {!item.minprice ? (
                      "Add condition"
                    ) : (
                      <>
                        {" "}
                        {item.minprice}{" "}
                        {item.orderBased === "price" ? "AED" : "kg"}
                      </>
                    )}
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
                          required
                          type="currency"
                          name="minprice"
                          id="minprice"
                          min="0.00"
                          placeholder="MINIMUN"
                          value={min}
                          onChange={(e) => setMin(e.target.value)}
                        />
                        <input
                          type="currency"
                          name="maxprice"
                          id="maxprice"
                          min="0.00"
                          placeholder="MAXMUN"
                          value={max}
                          onChange={(e) => setMax(e.target.value)}
                        />
                        <input
                          required
                          type="currency"
                          name="amount"
                          id="amount"
                          placeholder="AMOUNT"
                          value={amount}
                          min="0.00"
                          onChange={(e) => setAmount(e.target.value)}
                        />
                      </div>
                      <hr />
                      <div className="modal_radio">
                        <div>
                          <InputRadio
                            required
                            name="orderBased"
                            id="itemWeight"
                            value="weight"
                            onChange={(e) => setOrderBased(e.target.value)}
                          />
                          <label htmlFor="itemWeight">
                            based on item weight ( kg )
                          </label>
                        </div>
                        <div>
                          <InputRadio
                            required
                            name="orderBased"
                            id="orderPrice"
                            value="price"
                            onChange={(e) => setOrderBased(e.target.value)}
                            // onChange={(e) => setBased(e.target.value)}
                          />
                          <label htmlFor="orderPrice">
                            based on order price
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="save_btn">
                        <button
                          disabled={(!min || !orderBased || !amount) && true}
                          type="button"
                          onClick={() => onSaveCondition(indexarray)}
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
          disabled={!rateName && true}
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
  setZone,
  zone,
  setArrayZone,
  arrayZone,
}) => {
  // const [shippingFrom, setShippingFrom] = useState("");
  const [inputValu, setInputValu] = useState("");
  const [ListShippingTo, setListShippingTo] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [arraryRegionSelected, setArraryRegionSelected] = useState([]);

  // const arrayAllZone = []
  // const listRegion = []

  const handleCreateZone = (e) => {
    e.preventDefault();
    ListShippingTo.push(inputValu);
    setShippingTo(ListShippingTo);
    setInputValu("");

    //   Zone Created
    setZone({ country, city: arraryRegionSelected });
    setArrayZone([
      ...arrayZone,
      {
        country,
        city: arraryRegionSelected,
        name: "",
        amount: null,
        minprice: null,
        maxprice: null,
        orderBased: "",
      },
    ]);
    setCountry("");
    setArraryRegionSelected([]);
  };

  const onChangeCountry = (val) => {
    setCountry(val);
  };

  const handleSelectRegion = (val) => {
    setRegion(val);
    setArraryRegionSelected([...arraryRegionSelected, val]);
  };

  useEffect(() => {
    if (shippingTo.length > 0) {
      setListShippingTo(shippingTo);
    }
  }, []);

  return (
    <>
      <Row>
        <Label>Creat zone</Label>
      </Row>
      <Card>
        <Row>
          <Label for="RateName">Shipping From</Label>
          <InputC
            required
            type="text"
            name="RateName"
            id="RateName"
            value={shippingFrom}
            onChange={(e) => setShippingFrom(e.target.value)}
          />
        </Row>
        <Row>
          <Label for="ShippingTo">Shipping To</Label>
          <div>
            <CountryDropdownCustomer
              value={country}
              onChange={(val) => onChangeCountry(val)}
            />
            <RegionDropdownCustomer
              country={country}
              value={region}
              onChange={handleSelectRegion}
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
          {arraryRegionSelected &&
            arraryRegionSelected.map((item, index) => (
              <RowCheck key={index}>
                <InputCheck type="checkbox" id={item} name={item}>
                  {item}
                </InputCheck>
              </RowCheck>
            ))}
        </Row>
        <ButtonC style={{ margin: "0 auto" }} onClick={handleCreateZone}>
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
  padding: 10px;
  display: block;
  &:focus {
    outline: none;
    border: 1px solid var(--orange-color);
  }
`;

export default EditProductScreen;
