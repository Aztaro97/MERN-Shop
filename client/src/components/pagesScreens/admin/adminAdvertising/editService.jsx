import { Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Button from "../../../ButtonComponeent";
import MainContainer from "../../../MainContainer";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function EditServiceScreen() {
  const params = useParams();
  const id = params.id;

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleSubmit = async (e) => {
    const formdata = new FormData();
    e.preventDefault();
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
      },
    };
    const res = await axios.post(
      "https://api.cloudinary.com/v1_1/tarositeweb/image/upload",
      formdata,
      config
    );
    console.log(res);
  };
  return (
    <MainContainer>
      <LogoContainer id={id} userInfo={userInfo} />
      <ServiceesContainer id={id} userInfo={userInfo} />
      <VideoContainer id={id} userInfo={userInfo} />
      <Row justify="space-between" className="mt-3">
        <Col>
          <BackLinkStyling to="/admin/advertising">cancel</BackLinkStyling>
        </Col>
        <Col>{/* <Button>save</Button> */}</Col>
      </Row>
    </MainContainer>
  );
}

const LogoContainer = ({ id, userInfo }) => {
  const [logoFile, setLogoFile] = useState("");
  const handleSubmit = async (e) => {
    const formdata = new FormData();
    formdata.append("logoFile", logoFile);
    e.preventDefault();
    console.log(logoFile);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.post(`/upload-images/logo/${id}`, formdata, config);
    console.log(res);
    if (res.data.msg) alert(res.data.msg);
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <h5 className="title mt-5">Add Logo</h5>
      <Row gutter={[10, 10]} justify="space-between">
        <Col span={18}>
          <InputStyling
            type="file"
            name="logoFile"
            onChange={(e) => setLogoFile(e.target.files[0])}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
        <Col>
          {" "}
          <Button>update</Button>
        </Col>
      </Row>
    </form>
  );
};

const ServiceesContainer = ({ id, userInfo }) => {
  const [serviceFile, setServiceFile] = useState([]);
  const handleSubmit = async (e) => {
    const formdata = new FormData();
    // formdata.append("serviceFile", serviceFile);

    const files = e.target.serviceFile.files;
    if (files.length != 0) {
      for (const single_file of files) {
        formdata.append("serviceFile", single_file);
      }
    }

    e.preventDefault();
    // console.log(serviceFile);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.post(
      `/upload-images/services/${id}`,
      formdata,
      config
    );
    console.log(res);
    if (res.data.msg) alert(res.data.msg);
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <h5 className="title mt-5">Add Service Pictures</h5>
      <Row gutter={[10, 10]} justify="space-between">
        <Col span={18}>
          <InputStyling
            multiple
            type="file"
            name="serviceFile"
            // onChange={(e) => setServiceFile(e.target.files)}
            accept="image/png, image/jpg, image/jpeg"
          />
        </Col>
        <Col>
          {" "}
          <Button>update</Button>
        </Col>
      </Row>
    </form>
  );
};

const VideoContainer = ({ id, userInfo }) => {
  const [videoFile, setVideoFile] = useState("");

  const handleSubmit = async (e) => {
    console.log(videoFile)
    try {
      const formdata = new FormData();
      formdata.append("file", videoFile);
      formdata.append("cloud_name", "TaroSiteWeb");
      formdata.append("upload_preset", "download");

      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Accept: "application/json",
        },
      };
      const res = await axios.post(
        "https://api.cloudinary.com/v1_1/tarositeweb/image/upload",
        formdata,
        config
      );
      if (res) {
        console.log(res);
      }
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <h5 className="title mt-5">Add Video</h5>
      <Row gutter={[10, 10]} justify="space-between">
        <Col span={18}>
          <InputStyling
            type="file"
            name="serviceFile"
            onChange={(e) => setVideoFile(e.target.files[0])}
            accept="video/mp4"
          />
        </Col>
        <Col>
          {" "}
          <Button>update</Button>
        </Col>
      </Row>
    </form>
  );
};

const BackLinkStyling = styled(Link)`
  color: #111;
  text-decoration: none;
  background: #ececec;
  padding: 5px 2rem;
  text-transform: capitalize;
  &:hover {
    text-decoration: none;
  }
`;

const InputStyling = styled.input``;

export default EditServiceScreen;
