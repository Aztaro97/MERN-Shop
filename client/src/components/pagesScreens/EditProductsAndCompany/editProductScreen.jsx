import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainContainer from "../../MainContainer";
import { Upload } from "antd";
import { FaPlus, AiFillDelete, GoPlus } from "react-icons/all";
import axios from "axios";
import { listProductDetails } from "../../../flux/actions/productAction";

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
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import InputCheck from "../../CheckBoxComponent";
import LoaderComponent from "../../Loader";

function EditProductScreen({ match }) {
  const [body, setBody] = useState({
    code: "",
    typeService: "",
    shippingFrom: "",
    shippingTo: [],
    rateShipping: [{}],
    name: "",
    description: "",
    imageUrl: [],
    variantColor: [],
    variantSize: [],
    variantFinish: [],
    variantMaterial: [],
    variantStyle: [],
    united: [],
    size: "",
    price: null,
    compareAtPrice: null,
  });

  const { loading, error, product } = useSelector(
    (state) => state.productDetails
  );

  const dispatch = useDispatch();
  const { userInfo } = useSelector((state) => state.userLogin);

  const history = useHistory();

  const handleProductCreate = (e) => {
    e.preventDefault();
    console.log(body);
  };

  if (!userInfo) {
    history.push("/auth");
  }

  useEffect(() => {
    if (!product._id || product._id !== match.params.id) {
      dispatch(listProductDetails(match.params.id));
    } else {
      // console.log(product)
      setBody({
        code: product.code,
        typeService: product.typeService,
        shippingFrom: product.shippingFrom,
        shippingTo: product.shippingTo,
        rateShipping: product.rateShipping,
        name: product.name,
        description: product.description,
        imageUrl: product.imageUrl,
        variantColor: product.variantColor,
        variantSize: product.variantSize,
        variantFinish: product.variantFinish,
        variantMaterial: product.variantMaterial,
        variantStyle: product.variantStyle,
        united: product.united,
        size: product.size,
        price: product.price,
        compareAtPrice: product.compareAtPrice,
      });
    }
    // setName(product.name)
    // console.log(body);
  }, [dispatch, match, product]);

  return (
    <MainContainer>
      <Header>
        <a href="#/" onClick={() => history.goBack()}>
          Back
        </a>
        <h2>Add your products</h2>
      </Header>
      {loading ? (
        <LoaderComponent />
      ) : error ? (
        <h1>Error {error}</h1>
      ) : (
        <MainProductForm>
          <Col>
            <ProductSection1 body={body} setBody={setBody} product={product} />
            <ShippingSection body={body} setBody={setBody} />
            <RateSection setBody={setBody} body={body} />
          </Col>

          {/* ////////////////////////   COLLUMN RIGHT   /////////// */}
          <Col>
            <FormRight
              handleProductCreate={handleProductCreate}
              setBody={setBody}
              body={body}
            />
          </Col>
        </MainProductForm>
      )}
    </MainContainer>
  );
}

const FormRight = ({ handleProductCreate, product, setBody, body }) => {
  const [showInput, setShowInput] = useState(true);
  const [showInput0, setShowInput0] = useState(true);
  const [showInput1, setShowInput1] = useState(true);
  const [showInput2, setShowInput2] = useState(true);
  const [showInput3, setShowInput3] = useState(true);
  const [showInput4, setShowInput4] = useState(true);

  // const [isModalVisible, setIsModalVisible] = useState(false);
  const [fileList, setFileList] = useState([]);

  // Color State
  const [color, setColor] = useState("");
  const [Listcolor, listSetColor] = useState(body.variantColor);

  // Variant Size State
  const [variantSizeValue, setVariantSizeValue] = useState(Number);
  const [ListVariantSize, listSetVariantSize] = useState(body.variantSize);

  // Finish State
  const [finish, setFinish] = useState("");
  const [ListFinish, setListFinish] = useState(body.variantFinish);

  // Material State
  const [material, setMaterial] = useState("");
  const [ListMaterial, setListMaterial] = useState(body.variantMaterial);

  // Styling State
  const [styling, setStyling] = useState("");
  const [ListStyling, setListStyling] = useState(body.variantStyle);

  // ANOTHER VALUE State
  const [sizeValue, setSizeValue] = useState("");
  const [ListSizeValue, setListSizeValue] = useState(body.united);

  //  Color function
  const addColor = (e) => {
    e.preventDefault();
    Listcolor.push(color);
    console.log(Listcolor);
    setBody({ variantColor: Listcolor });
    setColor("");
  };
  const deleteColor = (itemIndex) => {
    const newListColor = body.variantColor.filter(
      (_, index) => index !== itemIndex
    );
    listSetColor(newListColor);
    setBody({ variantColor: newListColor });
    console.log(newListColor);
  };

  //  Variant Size function
  const addVariantSize = (e) => {
    e.preventDefault();
    ListVariantSize.push(variantSizeValue);
    console.log(ListVariantSize);
    setBody({ variantSize: ListVariantSize });
    setVariantSizeValue("");
  };
  const deleteVariantSize = (itemIndex) => {
    const newListVariantSize = body.variantSize.filter(
      (_, index) => index !== itemIndex
    );
    listSetVariantSize(newListVariantSize);
    setBody({ variantSize: newListVariantSize });
    console.log(newListVariantSize);
  };

  //  Finish function
  const addFinish = (e) => {
    e.preventDefault();
    ListFinish.push(finish);
    console.log(ListFinish);
    setBody({ variantFinish: ListFinish });
    setFinish("");
  };
  const deleteFinish = (itemIndex) => {
    const newListFinish = body.variantFinish.filter(
      (_, index) => index !== itemIndex
    );
    setListFinish(newListFinish);
    setBody({ variantFinish: newListFinish });
    console.log(newListFinish);
  };

  //  Material function
  const addMaterial = (e) => {
    e.preventDefault();
    ListMaterial.push(material);
    console.log(ListMaterial);
    setBody({ variantMaterial: ListMaterial });
    setMaterial("");
  };
  const deleteMaterial = (itemIndex) => {
    const newListMaterial = body.variantMaterial.filter(
      (_, index) => index !== itemIndex
    );
    setListMaterial(newListMaterial);
    setBody({ variantMaterial: newListMaterial });
    console.log(newListMaterial);
  };

  //  Styling function
  const addStyling = (e) => {
    e.preventDefault();
    ListStyling.push(styling);
    console.log(ListStyling);
    setBody({ variantStyle: ListStyling });
    setStyling("");
  };
  const deleteStyling = (itemIndex) => {
    const newListStyling = body.variantStyle.filter(
      (_, index) => index !== itemIndex
    );
    setListStyling(newListStyling);
    setBody({ variantStyle: newListStyling });
    console.log(newListStyling);
  };

  //  SizeValue function
  const addSizeValue = (e) => {
    e.preventDefault();
    ListSizeValue.push(sizeValue);
    setBody({ united: ListSizeValue });
    console.log(ListSizeValue);
    setSizeValue("");
  };
  const deleteSizeValue = (itemIndex) => {
    const newListSizeValue = body.united.filter(
      (_, index) => index !== itemIndex
    );
    setListSizeValue(newListSizeValue);
    setBody({ size: newListSizeValue });
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
      formData.append("imgfiles", fileList[0].originFileObj);

      const res = await axios.post("/api/upload", formData);

      console.log(res);
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
          value={body.name}
          onChange={(e) => setBody({ name: e.target.value })}
        />
      </Row>
      <Row>
        <TextArea
          type="text"
          name="descript"
          id="descript"
          name="descript"
          placeholder="Describe your Product"
          value={body.description}
          onChange={(e) => setBody({ description: e.target.target })}
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
                  <button className="add_btn" onClick={addColor}>
                    add
                  </button>
                </div>
                <Ul>
                  {body.variantColor
                    ? body.variantColor.map((item, index) => (
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
                  <button className="add_btn" onClick={addVariantSize}>
                    add
                  </button>
                </div>
                <Ul>
                  {body.variantSize
                    ? body.variantSize.map((item, index) => (
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
                  <button className="add_btn" onClick={addFinish}>
                    add
                  </button>
                </div>
                <Ul>
                  {body.variantFinish
                    ? body.variantFinish.map((item, index) => (
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
                  <button className="add_btn" onClick={addMaterial}>
                    add
                  </button>
                </div>
                <Ul>
                  {body.variantMaterial
                    ? body.variantMaterial.map((item, index) => (
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
                  <button className="add_btn" onClick={addStyling}>
                    add
                  </button>
                </div>
                <Ul>
                  {body.variantStyle
                    ? body.variantStyle.map((item, index) => (
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
                    <button className="add_btn" onClick={addSizeValue}>
                      add
                    </button>
                  </div>
                  <Ul>
                    {body.united
                      ? body.united.map((item, index) => (
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
            value={body.size}
            onChange={(e) => setBody({ size: e.target.value })}
          />
          <Column>
            <div>
              <Label style={{ color: "#000" }}>price</Label>
              <InputC
                type="number"
                placeholder="AED 25.00"
                value={body.price}
                onChange={(e) => setBody({ price: e.target.value })}
              />
            </div>
            <div>
              <Label style={{ color: "#000" }}>compare at price</Label>
              <InputC
                type="number"
                placeholder="AED 30.00"
                value={body.compareAtPrice}
                onChange={(e) => setBody({ compareAtPrice: e.target.value })}
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
        Update
      </ButtonC>
      <Link href="/myproducts">Cancel</Link>
    </div>
  );
};

const ProductSection1 = ({ setBody, body }) => {
  return (
    <>
      <Row>
        <Label>Creat code</Label>
        <InputC
          type="text"
          name=""
          id=""
          value={body.code}
          onChange={(e) => setBody({ code: e.target.value })}
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
  const handleSunmit = () => {};
  return (
    <>
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
    </>
  );
};

const ShippingSection = ({ body, setShippingTo, setBody }) => {
  // const [shippingFrom, setShippingFrom] = useState("");
  const [inputValu, setInputValu] = useState("");
  const [ListShippingTo, setListShippingTo] = useState([]);

  const handleClick = (e) => {
    e.preventDefault();
    ListShippingTo.push(inputValu);
    setShippingTo(ListShippingTo);
    setInputValu("");

    // console.log(ListShippingTo);
  };
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
            value={body.shippingFrom}
            onChange={(e) => setBody({ shippingFrom: e.target.value })}
          />
        </Row>
        <Row>
          <Label for="ShippingTo">Shipping To</Label>
          <InputC
            type="text"
            name="ShippingTo"
            id="ShippingTo"
            name="ShippingTo"
            value={body.ShippingTo}
            onChange={(e) => setBody({ shippingTo: e.target.value })}
          />
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

export default EditProductScreen;
