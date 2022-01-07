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

  const categoryData = [
    "category 1",
    "category 2",
    "category 3",
    "category 4",
    "category 5",
    "category 6",
    "category 7",
    "category 8",
  ];
  const typeData = ["type 1", "type 2", "type 3"];
  const capacityData = ["capacity 1", "capacity 2", "capacity 3"];
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
    if (fileList.length === 0) {
      return setError(true);
    } else {
      setLoading(true);
    }

    const config = {
      headers: {
        "content-type": "multipart/form-data",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    console.log(typeof category);

    const formData = new FormData();
    formData.append("formData", JSON.stringify(body));

    for (var i = 0; i < fileList.length; i++) {
      formData.append("imgfiles", fileList[i].originFileObj);
    }

    const res = await axios.post("/api/articles", formData, config);
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

  const props = {
    accept: "image/*",
    name: "imgfiles",
    headers: {
      authorization: "authorization-text",
    },
    onChange(info) {
      setFileList(info.fileList);
    },
    fileList: fileList,
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
            {" "}
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>Click to Images</Button>
            </Upload>
            {error && (
              <p style={{ color: "red", marginTop: 5 }}>Please select images</p>
            )}
          </Col>
          <Col
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 24 }}
            lg={{ span: 24 }}
          >
            <Row justify="space-between">
              <Col>
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
                    "done"
                  ) : (
                    "save"
                  )}
                </button>
              </Col>
              <Col>
                {" "}
                <button
                  className="_btn_create"
                  type="button"
                  onClick={handleCreate}
                >
                  Add new product
                </button>
              </Col>
            </Row>
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

  & ._btn_create {
    border: 1px solid var(--silver-color);
    background: var(--dark-color);
    padding: 5px 2rem;
    margin-top: 20px;
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
