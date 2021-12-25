import React, { useEffect, useState } from "react";
import { Col, Row, Upload, Select, Input } from "antd";
import styled from "styled-components";
import { FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { Link } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { GoPlus } from "react-icons/go";
import { IoIosCloudDone } from "react-icons/io";
import ReactPlayer from "react-player";
import { SyncOutlined } from "@ant-design/icons";
import { destroyImages } from "../../../../flux/actions/productAction";
import { IoClose } from "react-icons/io5";
const { Option } = Select;

export const BannerUploading = ({ id, userInfo }) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, isSubmited] = useState(false);

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.advertising);

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

  const handleRemove = async (imge) => {
    dispatch(destroyImages([imge]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fileList);
    try {
      setLoading(true);
      const formdata = new FormData();
      for (var i = 0; i < fileList.length; i++) {
        formdata.append("bannerFile", fileList[i].originFileObj);
      }
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.put(
        `/upload-images/banners/${id}`,
        formdata,
        config
      );
      if (res.data) {
        setLoading(false);
        isSubmited(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const props = {
    accept: "image/png, image/jpeg, image/jpg",
    name: "bannerFile",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    listType: "picture-card",
    fileList: fileList,
    onChange: onChange,
    onPreview: onPreview,
    onRemove: handleRemove,
  };
  useEffect(() => {
    profile && setFileList(profile.bannerUrl);
  }, [profile]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <TitleStyling>Import Banner Images</TitleStyling>
      <Row justify="space-between">
        <Col xs={{ span: 12 }}>
          <ImgCrop aspect={2 / 1} quantity={0.8}>
            <Upload {...props}>
              {fileList.length < 4 && (
                <UploadIcon>
                  <GoPlus size={30} className="icon" />
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

export const LogoUploading = ({ id, userInfo }) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, isSubmited] = useState(false);

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.advertising);

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

  const handleRemove = async (imge) => {
    dispatch(destroyImages([imge]));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fileList);
    try {
      setLoading(true);
      const formdata = new FormData();
      for (var i = 0; i < fileList.length; i++) {
        formdata.append("logoFile", fileList[i].originFileObj);
      }
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
          Accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.put(
        `/upload-images/logo/${id}`,
        formdata,
        config
      );
      if (res.data) {
        setLoading(false);
        isSubmited(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const props = {
    accept: "image/png, image/jpeg, image/jpg",
    name: "logoFile",
    action: "https://www.mocky.io/v2/5cc8019d300000980a055e76",
    headers: {
      authorization: "authorization-text",
    },
    listType: "picture-card",
    fileList: fileList,
    onChange: onChange,
    onPreview: onPreview,
    onRemove: handleRemove,
  };

  useEffect(() => {
    profile && setFileList(profile.logoUrl);
  }, [profile]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <TitleStyling>Import Company Logo</TitleStyling>
      <Row justify="space-between">
        <Col xs={{ span: 12 }}>
          <Upload {...props}>
            {fileList.length < 1 && (
              <UploadIcon className="logo_card">
                <GoPlus size={30} className="icon" />
                <span>upload</span>
              </UploadIcon>
            )}
          </Upload>

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

export const ServiceUploading = ({ id, userInfo }) => {
  const [fileList, setFileList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, isSubmited] = useState(false);

  const dispatch = useDispatch();
  const { profile } = useSelector((state) => state.advertising);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const handleRemove = async (imge) => {
    dispatch(destroyImages([imge]));
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
    console.log(fileList);
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
      const res = await axios.put(
        `/upload-images/services/${id}`,
        formdata,
        config
      );
      if (res.data) {
        setLoading(false);
        isSubmited(true);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    profile && setFileList(profile.serviceUrl);
  }, [profile]);

  return (
    <form action="" onSubmit={handleSubmit}>
      <TitleStyling>
        Import {profile && profile.typeBusiness} Images
      </TitleStyling>
      <Row justify="space-between">
        <Col xs={{ span: 12 }}>
          <ImgCrop aspect={2 / 1}>
            <Upload
              accept="image/png, image/jpeg, image/jpg"
              name="serviceFile"
              action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
              listType="picture-card"
              fileList={fileList}
              onChange={onChange}
              onPreview={onPreview}
              onRemove={handleRemove}
            >
              {fileList.length < 4 && (
                <UploadIcon>
                  <GoPlus size={30} className="icon" />
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

export const VideoUploading = ({ userInfo, id }) => {
  const [children, setChildren] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, isSubmited] = useState(false);
  const [videoData, setVideoData] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.put(
        `/upload-images/video/${id}`,
        { videoUrl: children },
        config
      );
      if (res.data.msg) {
        setLoading(false);
        setVideoData(res.data.videoUrl);
        isSubmited(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  for (let i = 0; i < children.lenght; i++) {
    <Option key={i}>{i}</Option>;
  }
  function handleChange(value) {
    setChildren(value);
  }
  return (
    <form onSubmit={handleSubmit}>
      <TitleStyling>Insert Video Links</TitleStyling>
      <Row gutter={[10, 10]} justify="space-between">
        <Col span={20}>
          <Select
            required
            mode="tags"
            placeholder="Past video link here ( Exemple: http://www.youtube.com/sxwdwhuw )"
            onChange={handleChange}
            style={{ width: "100%" }}
          >
            {children}
          </Select>
        </Col>
        <Col span={4}>
          <ButtonWrapper
            type="submit"
            submited={submited}
            disabled={!children.length && true}
          >
            {!loading ? (
              <>
                {" "}
                {!submited ? (
                  <>
                    <FiUploadCloud className="icon" />
                    <span>upload</span>
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
        <Col xs={{ span: 24 }}>
          <Row gutter={[5, 10]}>
            {videoData.map((url, index) => (
              <Col
                xs={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
                key={index}
              >
                <PlayerWrapper>
                  <ReactPlayer
                    className="react-player"
                    width="100%"
                    height="100%"
                    url={url}
                    controls
                    config={{
                      youtube: {
                        playerVars: { showinfo: 1 },
                      },
                      facebook: {
                        appId: "12345",
                      },
                      file: {
                        autoplay: "false",
                        height: "200px",
                        src: url,
                      },
                    }}
                  />
                </PlayerWrapper>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </form>
  );
};

export const VideoTodoList = ({ userInfo, id }) => {
  const [value, setValue] = useState("");
  const [videoList, setVideoList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [submited, isSubmited] = useState(false);

  const { profile } = useSelector((state) => state.advertising);

  const handleAdd = () => {
    const existValue = videoList.indexOf(value) !== -1;
    if (!value || existValue) {
      return;
    }
    setVideoList([...videoList, value]);
    setValue("");
  };

  const handleDelete = (url) => {
    setVideoList(videoList.filter((item) => item !== url));
    console.log(url);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.put(
        `/upload-images/video/${id}`,
        { videoUrl: videoList },
        config
      );
      if (res.data.msg) {
        setLoading(false);
        setVideoList(res.data.videoUrl);
        isSubmited(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    profile.videoUrl && setVideoList([...profile.videoUrl]);
  }, [profile]);
  return (
    <FormVideoStyling onSubmit={handleSubmit}>
      <TitleStyling>Insert Video Links</TitleStyling>
      <Row gutter={[10, 15]}>
        <Col xs={{ span: 18 }} md={{ span: 20 }}>
          <Input
            placeholder="Exemple: http://www.youtube.com/sxwdwhuw "
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="input_form"
          />
        </Col>
        <Col xs={{ span: 6 }} md={{ span: 4 }}>
          <button type="button" className="add_button" onClick={handleAdd}>
            + Add
          </button>
        </Col>
        {videoList.length > 0 &&
          videoList.map((url, index) => (
            <Col
              xs={{ span: 12 }}
              sm={{ span: 12 }}
              md={{ span: 8 }}
              key={index}
            >
              <ReactPlayer
                className="react-player"
                width="100%"
                height="80%"
                url={url}
                controls
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 },
                  },
                  facebook: {
                    appId: "12345",
                  },
                  file: {
                    autoplay: "false",
                    height: "200px",
                    src: url,
                  },
                }}
              />
              <button
                type="button"
                className="delete_Buttoon"
                onClick={() => handleDelete(url)}
              >
                Remove <IoClose className="icon" />
              </button>
            </Col>
          ))}
        <Col xs={{ span: 24 }}>
          <ButtonWrapper
            type="submit"
            submited={submited}
            disabled={!videoList.length && true}
          >
            {!loading ? (
              <>
                {" "}
                {!submited ? (
                  <>
                    <FiUploadCloud className="icon" />
                    <span>upload</span>
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
      </Row>
    </FormVideoStyling>
  );
};

const FormVideoStyling = styled.form`
  & .add_button {
    color: var(--silver-color);
    background: transparent;
    border: 1px solid var(--silver-color);
    font-size: 1rem;
    width: 100%;
    height: 100%;
    &:hover {
      opacity: 0.9;
    }
  }

  & .delete_Buttoon {
    border: none;
    margin-left: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: #c0392b;
    padding: 0 5px;
    margin-top: 3px;
    cursor: pointer;
    color: #ececec;
    & .icon {
    }
  }

  & .input_form {
    background: transparent;
    width: 100%;
    color: var(--silver-color);
    &:hover {
      border-color: var(--orange-color);
    }
    &:focus {
      color: var(--white-color);
      border: 1px solid var(--orange-color);
    }
  }
`;

const PlayerWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;

  .react-player {
    position: absolute;
    top: 0;
    left: 0;
  }
`;

const TitleStyling = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  /* text-align: center; */
  color: var(--silver-color);
  text-transform: uppercase;
`;

const ButtonWrapper = styled.button`
  background: ${({ submited }) =>
    !submited ? "var(--orange-color)" : "#2ed573"};
  border: none;
  outline: none;
  font-size: 1rem;
  color: #ffff;
  padding: 5px 10px;
  width: 120px;
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
      color: var(--silver-color);
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
  background: var(--dark-light-color) !important;
  box-shadow: var(--box-shadow-color);
  color: var(--silver-color);

  & .icon {
    color: var(--silver-color);
  }

  &:hover {
    color: var(--orange-color);
    border: none;
    opacity: 0.9;
    & .icon {
      color: var(--orange-color);
    }
  }
`;
