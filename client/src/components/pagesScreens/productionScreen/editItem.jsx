import { SyncOutlined, UploadOutlined } from "@ant-design/icons";
import { Button, Col, Row, Select, Upload, Image } from "antd";
import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getArticleById } from "../../../flux/actions/articleAction";
import InputComponents from "../../InputComponents";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";
import TextAreaComponent from "../../TextAreaComponent";

const { Option } = Select;

const SelectComponent = ({ placeholder, data, onChange, value }) => {
  const children = [];

  data.map((item, index) => children.push(<Option key={item}>{item}</Option>));

  return (
    <SelectStyling
      mode="tags"
      style={{ width: "100%" }}
      value={value}
      defaultValue={[]}
      onChange={onChange}
      // tokenSeparators={[","]}
      placeholder={placeholder}
    >
      {children}
    </SelectStyling>
  );
};

function EditItem() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescripton] = useState("");
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [capacity, setCapacity] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [image, setImage] = useState([]);

  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const [error, setError] = useState(false);

  const [fileList, setFileList] = useState([]);

  const { loading: loadingData, article, error: errorData } = useSelector(
    (state) => state.articleDetails
  );

  const params = useParams();
  const articleId = params.id;

  const categoryData = [
    "PAPER PRODUCTS",
    "TISSUE PRODUCTS",
    "PLASTIC PRODUCTS",
    "ALUMINIUM PRODUCTS",
    "FOAM PRODUCTS",
    "HYGIENE & PROTECTION",
  ];
  const typeData = [];
  const capacityData = [];
  const sizeData = ["small", "Medium", "Large"];
  const colorData = [
    "black",
    "white",
    "red",
    "blue",
    "green",
    "purple",
    "brown",
    "orange",
    "yellow",
  ];

  const body = {
    name,
    price,
    description,
    category,
    type,
    capacity,
    size,
    color,
  };

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const res = await axios.put(`/api/articles/${articleId}`, body, config);
    if (res.data) {
      setLoading(false);
      setSended(true);
    }
  };

  const handleCreate = () => {
    setName("");
    setPrice("");
    setDescripton("");
    setCategory([]);
    setType([]);
    setCapacity([]);
    setSize([]);
    setColor([]);
    setFileList([]);

    setSended(false);
    setLoading(false);
    setError(false);
  };

  const dispatch = useDispatch();
  useEffect(() => {
    if (article && article._id !== articleId) {
      dispatch(getArticleById(articleId));
    } else {
      if (article) {
        setName(article.name);
        setPrice(article.price);
        setDescripton(article.description);
        setCategory(article.category);
        setType(article.type[0]);
        setCapacity(article.capacity[0]);
        setSize(article.size[0]);
        setColor(article.color[0]);
        setImage(article.imgUrl);
      }
    }
  }, [dispatch, articleId, article]);

  return (
    <MainContainer>
      {loadingData ? (
        <LoaderComponent />
      ) : errorData ? (
        <div>{errorData}</div>
      ) : (
        <FormContainer onSubmit={handleSubmit} sended={sended}>
          <h2 className="title">Update production Item</h2>
          <Row gutter={[10, 10]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <InputComponents
                required
                placeholder="Product Name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <InputComponents
                required
                placeholder="Price"
                type="number"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <TextAreaComponent
                required
                placeholder="Product Descripton"
                style={{ width: "100%", height: "100%" }}
                rows="10"
                name="description"
                value={description}
                onChange={(e) => setDescripton(e.target.value)}
              />
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 12 }}
              lg={{ span: 12 }}
            >
              <Row gutter={[10, 10]}>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <SelectComponent
                    placeholder="Select Category"
                    data={categoryData}
                    value={category}
                    onChange={(value) => setCategory(value)}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <SelectComponent
                    placeholder="Select Type"
                    data={typeData}
                    value={type}
                    onChange={(value) => setType(value)}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <SelectComponent
                    placeholder="Select Capacity"
                    data={capacityData}
                    value={capacity}
                    onChange={(value) => setCapacity(value)}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <SelectComponent
                    placeholder="Select Size"
                    data={sizeData}
                    value={size}
                    onChange={(value) => setSize(value)}
                  />
                </Col>
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                  <SelectComponent
                    placeholder="Select Color"
                    data={colorData}
                    value={color}
                    onChange={(value) => setColor(value)}
                  />
                </Col>
              </Row>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
            >
              <Image.PreviewGroup>
                {image.map((img, index) => (
                  <Image
                    key={index}
                    width={200}
                    style={{ margin: "5px" }}
                    src={img.url}
                  />
                ))}
              </Image.PreviewGroup>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 24 }}
              md={{ span: 24 }}
              lg={{ span: 24 }}
            >
              <Row
                gutter={[10, 20]}
                justify="space-between"
                style={{ marginTop: 20 }}
              >
                <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  <button
                    type="submit"
                    className="_btn"
                    disabled={sended && true}
                  >
                    {loading ? (
                      <>
                        <SyncOutlined spin className="icon" />
                        <span>Loading...</span>
                      </>
                    ) : sended ? (
                      "updated"
                    ) : (
                      "update"
                    )}
                  </button>
                </Col>
                {/* <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 12 }}>
                  {" "}
                  <button
                    className="_btn_create"
                    type="button"
                    onClick={handleCreate}
                  >
                    create new product
                  </button>
                </Col> */}
              </Row>
            </Col>
          </Row>
        </FormContainer>
      )}
    </MainContainer>
  );
}

const FormContainer = styled.form`
  background: var(--dark-light-color);
  padding: 3rem 2rem;
  & .title {
    color: var(--silver-color);
    text-align: center;
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }

  & ._btn {
    border: none;
    outline: none;
    background: ${(props) => (props.sended ? "green" : "var(--orange-color)")};
    padding: 5px 2rem;
    transition: all 0.3 ease-in-out;
    display: flex;
    align-items: center;
    gap: 10px;
    letter-spacing: 1px;
    & .icon {
    }
    &:hover {
      background: var(--silver-color);
      color: var(--dark-light-color);
    }
  }

  & ._btn_create {
    border: none;
    background: var(--dark-color);
    padding: 5px 2rem;
    letter-spacing: 1px;
  }
`;

const SelectStyling = styled(Select)`
  & .ant-select-selector {
    border: 1px solid #ffffff34 !important;
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    background: var(--dark-color) !important;
    letter-spacing: 2px;
    padding: 5px 11px;
    font-size: 0.7rem;
    color: var(--silver-color);
  }
`;

export default EditItem;
