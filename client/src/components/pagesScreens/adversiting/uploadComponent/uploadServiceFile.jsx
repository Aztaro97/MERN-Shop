import React, { useEffect, useState } from "react";
import MainContainer from "../../../MainContainer";
import { Col, Modal, Row, Button, Space, Upload } from "antd";
import styled from "styled-components";
import DropzoneUploading from "./DropzoneComponent";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { GoPlus } from "react-icons/go";
import { IoIosCloudDone } from "react-icons/io";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
// import UploadComponent from "./uploadComponent";

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
            <BannerUploading userInfo={userInfo} id={id} />
          </Col>
          <Col xs={{ span: 24 }}>
            <LogoUploading userInfo={userInfo} id={id} />
          </Col>
          <Col xs={{ span: 24 }}>
            <ServiceFileUploading userInfo={userInfo} id={id} />
          </Col>
          <Col xs={{ span: 24 }}>
            <LinkStyling
              to={{
                pathname: "/advertising/confirm-payment",
                state: {
                  data: body,
                },
              }}
            >
              next
            </LinkStyling>
          </Col>
        </Row>
      </COntainer>
    </MainContainer>
  );
}

const BannerUploading = ({ id, userInfo }) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, isSubmited] = useState(false);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fileList)
    try {
      setLoading(true);
      const formdata = new FormData();
      for (var i = 0; i < fileList.length; i++) {
        formdata.append("serviceFile", fileList[i].originFileObj);
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
        setLoading(false);
        isSubmited(true);
        // setPathImage(res.data.logoUrl.url);
        // setIsLoading(false);
        // setIsModalVisible(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <form action="" onSubmit={handleSubmit}>
      <TitleStyling>Import Banner Images</TitleStyling>
      <Row justify="space-between">
        <Col xs={{ span: 12 }}>
          <ImgCrop aspect={3 / 2}>
            <Upload
              accept="image/png, image/jpeg, image/jpg"
              name="serviceFile"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
            >
              {fileList.length < 4 && (
                <UploadIcon>
                  <GoPlus size={30} />
                  <span>upload</span>
                </UploadIcon>
              )}
            </Upload>
          </ImgCrop>

          <ButtonWrapper
            disabled={fileList.length < 1 && true}
            type="submit"
            submited={submited}
          >
            {!loading ? (
              <>
                {" "}
                {!submited ? (
                  <>
                    <FiUploadCloud className="icon" />
                    <span>submit</span>
                  </>
                ) : (
                  <>
                    <IoIosCloudDone className="icon" />
                    <span>submited</span>
                  </>
                )}
              </>
            ) : (
              <>
                <SyncOutlined spin />{" "}
                <span style={{ paddingLeft: 4 }}> Loading...</span>
              </>
            )}
          </ButtonWrapper>
        </Col>
        <Col xs={{ span: 10 }}>
          <Content>
            <ul>
              <li>Quisque velit nisi, pretium ut lacinia in</li>
              <li>Quisque velit nisi, pretium ut lacinia in</li>
              <li>Quisque velit nisi, pretium ut lacinia in</li>
            </ul>
          </Content>
        </Col>
      </Row>
    </form>
  );
};

const LogoUploading = ({ id, userInfo }) => {
  const [pathImage, setPathImage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);

  const [fileList, setFileList] = useState([]);

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
    formdata.append("logoFile", fileList[0].originFileObj);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Accept: "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    const res = await axios.post(`/upload-images/logo/${id}`, formdata, config);
    if (res.data) {
      setPathImage(res.data.logoUrl.url);
      setIsLoading(false);
      setIsModalVisible(false);
    }
  };
  return (
    <>
      <TitleStyling>Import Company Logo</TitleStyling>
      <Row justify="space-between">
        <Col xs={{ span: 12 }}>
          <img
            src={pathImage}
            alt=""
            style={{ marginTop: 10, width: "auto", height: "130px" }}
          />
        </Col>
        <Col xs={{ span: 12 }}>
          <Content>
            <ul>
              <li>Quisque velit nisi, pretium ut lacinia in</li>
              <li>Quisque velit nisi, pretium ut lacinia in</li>
              <li>Quisque velit nisi, pretium ut lacinia in</li>
            </ul>
          </Content>
        </Col>
      </Row>
      <Modal
        title="COMPANY LOGO"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={true}
      >
        <form action="" onSubmit={handleSubmit}>
          <Row justify="space-between">
            <Col xs={{ span: 24 }}>
              {/* <UploadComponent
                name="logoFile"
                maxFile="2"
                fileList={fileList}
                setFileList={setFileList}
              /> */}
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
        <FiUploadCloud className="icon" /> upload
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
  /* position: relative; */
  margin-bottom: 40px;
`;

const TitleStyling = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  /* text-align: center; */
  color: #727171;
  text-transform: capitalize;
`;

const ButtonWrapper = styled.button`
  /* background: {$( {submited} => !submited ? "var(--orange-color)" : "green") }; */
  background: ${({ submited }) =>
    !submited ? "var(--orange-color)" : "#2ed573"};
  border: none;
  outline: none;
  font-size: 1rem;
  color: #ffff;
  padding: 5px 10px;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  & .icon {
    margin-right: 10px;
    font-size: 20px;
  }
  &:hover {
    opacity: 0.9;
    /* background: none; */
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
  text-transform: uppercase;
  &:hover {
    opacity: 0.9;
    color: #fff;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  & ul {
    list-style: none;
    & li {
      color: #111;
    }
  }
`;

const UploadIcon = styled.div`
  width: 100%;
  height: 100%;
  color: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-transform: capitalize;
  /* background: var(--orange-color); */

  &:hover {
    /* background: #ffffff; */
    border: none;
    opacity: 0.9;
  }
`;

export default UploadServiceFile;
