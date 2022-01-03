import { Col, Row, Input, Select, Upload, Button } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import InputComponents from "../../InputComponents";
import MainContainer from "../../MainContainer";
import TextAreaComponent from "../../TextAreaComponent";
import { UploadOutlined } from "@ant-design/icons";

const { Option } = Select;

const SelectComponent = ({ placeholder, data }) => {
  const children = [];

  data.map((item, index) => children.push(<Option key={index}>{item}</Option>));
  //   for (let i = 0; i < data.length; i++) {
  //     children.push(<Option key={i}>{data}</Option>);
  //   }

  function handleChange(value) {
    console.log(`selected ${value}`);
  }
  return (
    <SelectStyling
      mode="tags"
      style={{ width: "100%" }}
      onChange={handleChange}
      tokenSeparators={[","]}
      placeholder={placeholder}
    >
      {children}
    </SelectStyling>
  );
};

function FormRegisterProduct() {
  const [name, setname] = useState("");
  const [category, setcategory] = useState([]);
  const [type, settype] = useState([]);
  const [capacity, setcapacity] = useState([]);
  const [size, setsize] = useState([]);
  const [color, setcolor] = useState([]);

  const categoryData = ["Категория 1", "Категория 2", "Категория 3"];
  const typeData = ["Категория 1", "Категория 2", "Категория 3"];
  const capacityData = ["Категория 1", "Категория 2", "Категория 3"];
  const sizeData = ["Категория 1", "Категория 2", "Категория 3"];
  const colorData = ["Категория 1", "Категория 2", "Категория 3"];

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(e)

    const formData = new FormData();
    formData.append("name", name);
    formData.append("category", category);
    formData.append("type", type);
    formData.append("capacity", capacity);
    formData.append("size", size);
    formData.append("color", color);
    // formData.append("file", e.target.files[0]);
  };

  const props = {
    accept: "image/*",
    name: "file",
    onChange(info) {
      if (info.file.status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === "done") {
        alert(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === "error") {
        alert(`${info.file} file upload failed.`);
      }
    },
  };
  return (
    <MainContainer>
      <FormContainer onSubmit={handleSubmit}>
        <h2 className="title">Create a new production Item</h2>
        <Row gutter={[10, 10]}>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <InputComponents placeholder="Product Name" type="text" />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <InputComponents placeholder="Price" type="number" />
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <TextAreaComponent
              placeholder="Product Descripton"
              style={{ width: "100%", height: "100%" }}
              rows="10"
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
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent placeholder="Select Type" data={typeData} />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent
                  placeholder="Select Capacity"
                  data={capacityData}
                />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent placeholder="Select Size" data={sizeData} />
              </Col>
              <Col xs={{ span: 24 }} md={{ span: 24 }} lg={{ span: 24 }}>
                <SelectComponent placeholder="Select Color" data={colorData} />
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
              save
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
    background: transparent;
    padding: 5px 2rem;
    transition: all 0.3 ease-in-out;
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
