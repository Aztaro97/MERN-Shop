import { Col, Row, Input, Select, Upload, Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import InputComponents from "../../InputComponents";
import MainContainer from "../../MainContainer";
import TextAreaComponent from "../../TextAreaComponent";
import { SyncOutlined, UploadOutlined } from "@ant-design/icons";
import axios from "axios";
import { useSelector } from "react-redux";

const { Option } = Select;

const SelectComponent = ({ placeholder, data, onChange }) => {
  const children = [];

  data.map((item, index) => children.push(<Option key={item}>{item}</Option>));

  return (
    <SelectStyling
      mode="tags"
      style={{ width: "100%" }}
      onChange={onChange}
      tokenSeparators={[","]}
      placeholder={placeholder}
    >
      {children}
    </SelectStyling>
  );
};

function FormRegisterProduct() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(null);
  const [description, setDescripton] = useState("");
  const [category, setCategory] = useState([]);
  const [type, setType] = useState([]);
  const [capacity, setCapacity] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);

  const [loading, setLoading] = useState(false);
  const [sended, setSended] = useState(false);
  const [error, setError] = useState(false);

  const [fileList, setFileList] = useState([]);

  const categoryData = ["category 1", "category 2", "category 3", "category 4", "category 5", "category 6", "category 7", "category 8"];
  const typeData = ["Категория 1", "Категория 2", "Категория 3"];
  const capacityData = ["Категория 1", "Категория 2", "Категория 3"];
  const sizeData = ["Категория 1", "Категория 2", "Категория 3"];
  const colorData = ["Категория 1", "Категория 2", "Категория 3"];

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // category.length &&

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", price);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("capacity", capacity);
    formData.append("size", size);
    formData.append("color", color);

    for (var i = 0; i < fileList.length; i++) {
      formData.append("imgfiles", fileList[i].originFileObj);
    }

    const res = await axios.post("/api/articles", formData, config);
    if (res.data) {
      setLoading(false);
      setSended(true);
    }
  };

  const props = {
    accept: "image/*",
    name: "imgfiles",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      setFileList(info.fileList);
    },
  };
  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit} sended={sended}>
        <h2 className="title">Create a new production Item</h2>
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
                  onChange={(value) => setCategory(value)}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent
                  placeholder="Select Type"
                  data={typeData}
                  onChange={(value) => setType(value)}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent
                  placeholder="Select Capacity"
                  data={capacityData}
                  onChange={(value) => setCapacity(value)}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent
                  placeholder="Select Size"
                  data={sizeData}
                  onChange={(value) => setSize(value)}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent
                  placeholder="Select Color"
                  data={colorData}
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
            {" "}
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Images</Button>
            </Upload>
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <button type="submit" className="_btn">
              {loading ? (
                <>
                  <SyncOutlined spin className="icon" />
                  <span>Loading...</span>
                </>
              ) : sended ? (
                "done"
              ) : (
                "save"
              )}
            </button>
          </Col>
        </Row>
      </FormContainer>
    </MainContainer>
  );
}

const FormContainer = styled.form`
  height: calc(100vh - 160px);
  background: var(--dark-light-color);
  padding: 3rem 2rem;
  & .title {
    color: var(--silver-color);
    text-align: center;
  }

  & ._btn {
    border: 1px solid var(--silver-color);
    outline: none;
    background: ${(props) => (props.sended ? "green" : "transparent")};
    padding: 5px 2rem;
    transition: all 0.3 ease-in-out;
    display: flex;
    align-items: center;
    gap: 10px;
    margin-top: 20px;
    & .icon {
    }
    &:hover {
      background: var(--silver-color);
      color: var(--dark-light-color);
    }
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

export default FormRegisterProduct;
