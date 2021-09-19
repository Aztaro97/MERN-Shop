import React from "react";
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

function PartnerRegisterTemplate2() {
  return (
    <Container>
      <LogOutForm />
      <DetailsComponent />
      <AddPictureComponent />
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
          <InputStyling type="password" placeholder="Retype Your Password" />
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
  const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
    useDropzone({
      accept: "image/jpeg, image/png",
      multiple: false,
      //   maxSize: 130979,
    });

  const acceptedFileItems = acceptedFiles.map((file) => (
    <span key={file.path}>
      {file.path} - {file.size} bytes
    </span>
  ));

  const fileRejectionItems = fileRejections.map(({ file, errors }) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
      <ul>
        {errors.map((e) => (
          <li key={e.code}>{e.message}</li>
        ))}
      </ul>
    </li>
  ));
  console.log(fileRejections);
  return (
    <>
      <h1 className="title">add products</h1>
      <UploadButton>
        <DropZone {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} type="file" name="file" />
          {acceptedFiles.length == 0 && fileRejections.length == 0 && (
            <>
              <IoCloudUploadOutline className="upload_icon" />

              <p>Drag & drop file here, or click to select file</p>
              {/* <em>(Only *.jpeg and *.png images will be accepted)</em> */}
            </>
          )}
          {acceptedFiles.length > 0 && (
            <>
              <GiCheckMark className="accept_icon" />
              {acceptedFileItems}
            </>
          )}
           {/* {fileRejections.length > 0 && } */}
          {fileRejections.length > 0 && (
            <>
              <IoClose className="reject_icon" />
              <p className="alert_danger"> {fileRejectionItems} </p>
            </>
          )}
          <em>(Only *.jpeg and *.png images will be accepted)</em>
        </DropZone>
        {/* <aside>
          <h4>Accepted files</h4>
          <ul>{acceptedFileItems}</ul>
          <h4>Rejected files</h4>
          <ul>{fileRejectionItems}</ul>
        </aside> */}
      </UploadButton>
    </>
  );
};

const DropZone = styled.div`
  padding: 1rem;
  background: #ddd;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  & .upload_icon,
  & .accept_icon,
  & .reject_icon {
    font-size: 2.5rem;

    padding: 5px;
    border-radius: 50%;
  }
  & .upload_icon {
    border: 1px solid var(--orange-color);
    color: var(--orange-color);
  }
  & .accept_icon {
    color: #fff;
    background: #2ecc71;
  }
  & .reject_icon {
    color: #fff !important;
    background: #dc3545;
  }
  & .alert_danger {
    color: #dc3545 !important;
  }
`;

const UploadButton = styled.div`
  /* background-color: ; */
`;

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
