import React, { useState } from "react";
import styled from "styled-components";
import { Col, DatePicker, Row } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import Button from "../../ButtonComponeent";
import { FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";
import { BsBuilding } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { useDropzone } from "react-dropzone";
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import { GiCheckMark } from "react-icons/gi";
import DropZoneComponent from "./uploadComponent/DropzoneComponent";

function PartnerRegisterTemplate2() {
  return (
    <Container>
      <LogOutForm />
      <DetailsComponent />
      <AddPictureComponent />
      <AddVideoComponent />
    </Container>
  );
}

const LogOutForm = () => {
  return (
    <form action="">
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="email" placeholder="Email" />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <IoMdKey className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="password" placeholder="Password" />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <IoMdKey className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="password" placeholder="Retype Password" />
        </Col>
      </Row>
      <Button className="ml-auto">save</Button>
    </form>
  );
};

const DetailsComponent = () => {
  return (
    <form>
      <h1 className="title">company information</h1>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <BsBuilding className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="text" placeholder="Company Name" />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <FaPencilAlt className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <TextAreaStyling
            name=""
            rows="5"
            cols="4"
            placeholder="About Company"
          />
        </Col>
      </Row>

      <h1 className="title">contact</h1>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <ImPhone className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="tel" placeholder="Phone Number" />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <FaMapMarkerAlt className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="tel" placeholder="Location" />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling type="email" placeholder="Email" />
        </Col>
      </Row>
      <Row>
        <Col span={22} offset={2}>
          <h1 className="title">Work Hour</h1>
          <DatePickerStyling
            //   onChange={(date, dateString) =>
            //     formik.setFieldValue("company.workHoursFrom", dateString)
            //   }
            picker="time"
            format="HH:mm"
            placeholder="From"
            showNow={false}
          />
          <DatePickerStyling
            //   onChange={(date, dateString) =>
            //     formik.setFieldValue("company.workHoursTo", dateString)
            //   }
            picker="time"
            format="HH:mm"
            placeholder="To"
            showNow={false}
          />

          <InputStyling
            className="my-3"
            type="text"
            placeholder="Add Holidays"
          />
        </Col>
      </Row>
      <Button type="submit" className="ml-auto">
        save
      </Button>
    </form>
  );
};

const AddPictureComponent = () => {
  return (
    <form>
      <h1 className="title">add pictures</h1>
      <Row>
        <Col span={24} className="gutter-row"  >
          <DropZoneComponent
            name="landing-image"
            price={150}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={8} className="gutter-row" xs={{span:12}} sm={{span:8}}>
          <DropZoneComponent
            name="image1"
            price={45}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
        <Col span={8} xs={{span:12}} sm={{span:8}}>
          <DropZoneComponent
            name="image2"
            price={45}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
        <Col  span={8} className="gutter-row" xs={{span:12}} sm={{span:8}}>
          <DropZoneComponent
            name="image3"
            price={45}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
      </Row>
      <Row gutter={10}>
        <Col span={12} className="gutter-row">
          <DropZoneComponent
            name="image4"
            price={55}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
        <Col span={12} className="gutter-row">
          <DropZoneComponent
            name="image5"
            price={55}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
      </Row>
      <Button className="ml-auto mt-3">save</Button>
    </form>
  );
};

const AddVideoComponent = () => {
  return (
    <form>
      <h1 className="title">add videos</h1>
      <Row>
        <Col span={24} className="gutter-row">
          <DropZoneComponent
            name="landing-image"
            price={200}
            accept="video/*"
          />
        </Col>
      </Row>
      <Button className="ml-auto mt-3">save</Button>
    </form>
  );
};

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #ecececec;
  padding: 3rem;

  & .title {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 14px;
    margin-top: 1rem;
  }
  & h3,
  h4 {
    color: #fff;
    text-transform: capitalize;
  }

  & .gutter-row {
    margin-bottom: 10px;
  }
`;

const IconStyling = styled.div`
  color: var(--orange-color);
  & .icon {
    font-size: 1.5rem;
  }
`;
const InputStyling = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 4px 10px;
`;
const TextAreaStyling = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 4px 10px;
`;

const DatePickerStyling = styled(DatePicker)`
  margin-right: 1rem;
  &.ant-picker:hover {
    border-color: var(--orange-color) !important ;
  }
  &.ant-picker-focused {
    border-color: var(--orange-color) !important ;
    box-shadow: none;
  }
`;

export default PartnerRegisterTemplate2;
