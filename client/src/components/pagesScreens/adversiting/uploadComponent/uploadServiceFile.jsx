import React, { useEffect, useState } from "react";
import MainContainer from "../../../MainContainer";
import { Col, Modal, Row, Button, Space } from "antd";
import styled from "styled-components";
import DropzoneUploading from "./DropzoneComponent";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

function UploadServiceFile() {
  const location = useLocation();
  const body = location.state.data;
  const params = useParams();
  const history = useHistory();
  const id = params.id;
  const { userInfo } = useSelector((state) => state.userLogin);

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    
  }, [userInfo, history]);

  return (
    <MainContainer style={{ paddingTop: 44 }}>
      <COntainer>
        <Row gutter={[10, 40]}>
          <Col xs={{ span: 24 }}>
            <LogoUploading userInfo={userInfo} id={id} />
          </Col>
          <Col xs={{ span: 24 }}>
            <ServiceFileUploading userInfo={userInfo} id={id} />
          </Col>
          <Col xs={{ span: 24 }}>
            <LinkStyling
              to={{
                pathname: "/advertising/thank",
                state: {
                  data: body,
                },
              }}
            >
              Complete
            </LinkStyling>
          </Col>
        </Row>
      </COntainer>
    </MainContainer>
  );
}

const LogoUploading = ({ id, userInfo }) => {
  const [files, setFiles] = useState([]);
  const [pathImage, setPathImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();
  const location = useLocation();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const formdata = new FormData();
    formdata.append("logoFile", files[0]);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.post(`/upload-images/logo/${id}`, formdata, config);
    if (res.data) {
      setPathImage(res.data.logoUrl);
      setIsLoading(false);
      setIsModalVisible(false);
    }
  };
  return (
    <>
      <TitleStyling>Import Company Logo</TitleStyling>
      <ButtonWrapper type="button" onClick={showModal}>
        <FiUploadCloud size={45} className="icon" /> Click here to upload
        Company Logo
      </ButtonWrapper>
      <Modal
        title="COMPANY LOGO"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={true}
      >
        <form action="" onSubmit={handleSubmit}>
          <Row justify="space-between">
            <Col xs={{ span: 24 }}>
              <DropzoneUploading
                name="logoFile"
                multiple={false}
                maxFiles={1}
                files={files}
                setFiles={setFiles}
              />
            </Col>
            <Col xs={{ span: 12 }}>
              <CloseButtonStyling onClick={handleCancel} type="button">
                cancel
              </CloseButtonStyling>
            </Col>
            <Col xs={{ span: 8 }}>
              <Button
                style={{
                  width: "100%",
                  textTransform: "lowercase",
                  fontWeight: 400,
                  background: "#111",
                  color: "#fff",
                }}
                htmlType="submit"
                loading={isLoading}
              >
                submit
              </Button>
            </Col>
          </Row>
        </form>
      </Modal>
      <Space size={[10, 10]}>
        <img src={pathImage} alt="" style={{ marginTop: 10, width: "150px" }} />
      </Space>
    </>
  );
};

const ServiceFileUploading = ({ userInfo, id }) => {
  const [files, setFiles] = useState([]);
  const [pathImage, setPathImage] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const location = useLocation();
  const body = location.state.data;

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(files);
    const formdata = new FormData();
    // formdata.append("serviceFile", files);
    if (files.length !== 0) {
      for (const single_file of files) {
        formdata.append("serviceFile", single_file);
      }
    }
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
    if (res.data) {
      setPathImage(res.data.serviceUrl);
      setIsLoading(false);
      setIsModalVisible(false);
    }
  };
  return (
    <>
      <TitleStyling>Import your {body.typeBusiness} Images</TitleStyling>
      <ButtonWrapper type="button" onClick={showModal}>
        <FiUploadCloud size={45} className="icon" /> Click here to upload
        service pictures
      </ButtonWrapper>
      <Modal
        title={`Upload Pictures`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={true}
      >
        <form action="" onSubmit={handleSubmit}>
          <Row justify="space-between" gutter={[10, 10]}>
            <Col xs={{ span: 24 }}>
              <DropzoneUploading
                name="serviceFile"
                multiple={true}
                maxFiles={6}
                files={files}
                setFiles={setFiles}
              />
            </Col>
            <Col xs={{ span: 12 }}>
              <CloseButtonStyling onClick={handleCancel} type="button">
                cancel
              </CloseButtonStyling>
            </Col>
            <Col xs={{ span: 8 }}>
              <Button
                style={{
                  width: "100%",
                  textTransform: "lowercase",
                  fontWeight: 400,
                  background: "#111",
                  color: "#fff",
                }}
                type="submit"
                htmlType="submit"
                loading={isLoading}
              >
                submit
              </Button>
            </Col>
          </Row>
        </form>
      </Modal>
      <Space size={[5, 10]}>
        {pathImage.map((image, index) => (
          <div key={index} style={{ marginTop: 10 }}>
            <img width="100" src={image.url} alt="" />
          </div>
        ))}
      </Space>
    </>
  );
};

const COntainer = styled.div`
  background-color: #ecececec;
  padding: 3rem;
  position: relative;
`;

const TitleStyling = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  /* text-align: center; */
  color: #727171;
  text-transform: capitalize;
`;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #fff;
  border: none;
  outline: none;
  height: 100px;
  font-size: 1.2rem;
  font-weight: 700;
  color: var(--orange-color);
  & .icon {
    margin-right: 10px;
  }
`;
const CloseButtonStyling = styled.button`
  border: none;
  outline: none;
  color: #111;
  background: #ececec;
  padding: 5px 10px;
`;
const LinkStyling = styled(Link)`
  color: #fff;
  background: var(--orange-color);
  padding: 5px 20px;
  text-decoration: none;
  margin-left: auto;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    opacity: 0.9;
    color: #fff;
  }
`;

export default UploadServiceFile;
