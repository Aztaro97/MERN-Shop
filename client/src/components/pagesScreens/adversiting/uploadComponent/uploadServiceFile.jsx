import React, { useEffect, useState } from "react";
import MainContainer from "../../../MainContainer";
import { useDropzone } from "react-dropzone";
import { Col, Image, Modal, Row, Button } from "antd";
import styled from "styled-components";
import DropzoneUploading from "./DropzoneComponent";
import { FiUploadCloud } from "react-icons/fi";
import { MdDone } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getAdvertisingProfileByID } from "../../../../flux/actions/advertisingAction/advertisingAction";
import Loader from "../../../loader";
import axios from "axios";

function UploadServiceFile() {
  const params = useParams();
  const id = params.id;
  const { userInfo } = useSelector((state) => state.userLogin);
  const { profile, loading, error } = useSelector((state) => state.advertising);
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(getAdvertisingProfileByID(id));
  }, [id, dispatch]);
  return (
    <MainContainer style={{ paddingTop: 44 }}>
      {loading ? (
        <Loader />
      ) : error ? (
        <h1>{error}</h1>
      ) : (
        <Row gutter={[10, 40]}>
          <Col xs={{ span: 24 }}>
            <LogoUploading profile={profile} id={id} userInfo={userInfo} />
          </Col>
          <Col xs={{ span: 24 }}>
            <ServiceFileUploading profile={profile} />
          </Col>
        </Row>
      )}
    </MainContainer>
  );
}

const LogoUploading = ({ id, userInfo, profile }) => {
  const [files, setFiles] = useState([]);
  const [pathImage, setPathImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const dispatch = useDispatch();

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
                  background: "var(--orange-color)",
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
      <img src={pathImage} width={100} alt="" />
    </>
  );
};

const ServiceFileUploading = ({ profile }) => {
  const [files, setFiles] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };
  return (
    <>
      <TitleStyling>Import {profile.typeBusiness[0]} Images</TitleStyling>
      <ButtonWrapper type="button" onClick={showModal}>
        <FiUploadCloud size={45} className="icon" /> Click here to upload
        service pictures
      </ButtonWrapper>
      <Modal
        title={`Upload ${profile.typeBusiness} Pictures`}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={true}
      >
        <form action="">
          <Row justify="space-between">
            <Col xs={{ span: 24 }}>
              <DropzoneUploading
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
                }}
                type="submit"
              >
                submit
              </Button>
            </Col>
          </Row>
        </form>
      </Modal>
    </>
  );
};

const TitleStyling = styled.h1`
  font-size: 25px;
  font-weight: 700;
  /* text-align: center; */
  color: #727171;
`;

const ButtonWrapper = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: #ececec;
  border: none;
  outline: none;
  height: 100px;
  font-size: 20px;
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

export default UploadServiceFile;
