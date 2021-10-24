import { Col, Image, Row } from "antd";
import React, { Children, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import Button from "../../../ButtonComponeent";
import { Button } from "antd";
import MainContainer from "../../../MainContainer";
import { useDropzone } from "react-dropzone";
import styled from "styled-components";
import { IoMdDoneAll } from "react-icons/io";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Loader from "../../../loader";
import { getAdvertisingProfileByID } from "../../../../flux/actions/advertisingAction/advertisingAction";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { Select } from "antd";
import { Video, Transformation } from "cloudinary-react";

const { Option } = Select;

function EditServiceScreen() {
  const params = useParams();
  const id = params.id;

  const { userInfo } = useSelector((state) => state.userLogin);

  const { profile, loading, error } = useSelector((state) => state.advertising);

  const dispatch = useDispatch();

  useEffect(() => {
    if (id) dispatch(getAdvertisingProfileByID(id));
  }, [id, dispatch]);

  return (
    <MainContainer>
      {loading ? (
        <Loader />
      ) : error ? (
        <h3>error</h3>
      ) : (
        <Container>
          <LogoContainer
            id={id}
            userInfo={userInfo}
            profile={profile}
            loading={loading}
          />
          <ServiceesContainer
            id={id}
            userInfo={userInfo}
            loading={loading}
            profile={profile}
          />
          <VideoContainer
            id={id}
            userInfo={userInfo}
            loading={loading}
            profile={profile}
          />
          <Row justify="space-between" className="mt-5">
            <Col>
              <BackLinkStyling to="/admin/advertising">back</BackLinkStyling>
            </Col>
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const LogoContainer = ({ id, userInfo, loading, profile }) => {
  const [logoFile, setLogoFile] = useState("");
  const [saveLoading, setSaveLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setSaveLoading(true);
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
    if (res.data.msg) {
      dispatch(getAdvertisingProfileByID(id));
      setSaveLoading(false);
    }
  };

  return (
    <>
      {loading || saveLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <TitleStyling>Add Logo</TitleStyling>
          <Row gutter={[10, 10]} justify="space-between">
            <Col span={18}>
              <InputStyling
                required
                type="file"
                name="logoFile"
                onChange={(e) => setLogoFile(e.target.files[0])}
                accept="image/png, image/jpg, image/jpeg"
              />
            </Col>
            <Col>
              {" "}
              <ButtonStyling
                icon={<AiOutlineCloudUpload className="icon" />}
                htmlType="submit"
              >
                upload
              </ButtonStyling>
            </Col>
          </Row>
          <Row className="mt-3">
            <Col>
              {profile.logoUrl && (
                <Image
                  width={100}
                  height={100}
                  src={profile.logoUrl}
                  alt=""
                  preview={{ mask: <span></span> }}
                />
              )}
            </Col>
          </Row>
        </form>
      )}
    </>
  );
};

const ServiceesContainer = ({ id, userInfo, loading, profile }) => {
  const [saveLoading, setSaveLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    setSaveLoading(true);
    const formdata = new FormData();

    const files = e.target.serviceFile.files;
    if (files.length !== 0) {
      for (const single_file of files) {
        formdata.append("serviceFile", single_file);
      }
    }

    e.preventDefault();
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
    if (res.data.msg) {
      dispatch(getAdvertisingProfileByID(id));
      setSaveLoading(false);
    }
  };

  return (
    <>
      {loading || saveLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          <TitleStyling>Add Pictures</TitleStyling>
          <Row gutter={[10, 10]} justify="space-between" className="mb-3">
            <Col span={18}>
              <InputStyling
                required
                multiple
                type="file"
                name="serviceFile"
                // onChange={(e) => setServiceFile(e.target.files)}
                accept="image/png, image/jpg, image/jpeg"
              />
            </Col>
            <Col>
              {" "}
              <ButtonStyling
                icon={<AiOutlineCloudUpload className="icon" />}
                htmlType="submit"
              >
                update
              </ButtonStyling>
            </Col>
          </Row>
          {profile.serviceUrl.length > 0 && (
            <Row gutter={[10, 10]}>
              {profile.serviceUrl.map((item) => (
                <Col xs={{ span: 3 }}>
                  <Image
                    height={100}
                    src={item.url}
                    alt=""
                    preview={{ mask: <span></span> }}
                  />
                </Col>
              ))}
            </Row>
          )}
        </form>
      )}
    </>
  );
};

const VideoContainer = ({ id, userInfo, loading, profile }) => {
  const [children, setChildren] = useState([]);
  const [saveLoading, setSaveLoading] = useState(false);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    try {
      setSaveLoading(true);
      e.preventDefault();
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };
      const res = await axios.post(
        `/upload-images/video/${id}`,
        { videoUrl: children },
        config
      );
      if (res.data.msg) {
        dispatch(getAdvertisingProfileByID(id));
        setSaveLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // const children = [];
  for (let i = 0; i < children.lenght; i++) {
    <Option key={i}>{i}</Option>;
  }
  function handleChange(value) {
    console.log(`Selected: ${value}`);
    setChildren(value);
  }

  return (
    <>
      {loading || saveLoading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <TitleStyling>Add Video Public ID</TitleStyling>
          <Row gutter={[10, 10]} justify="space-between">
            <Col span={20}>
              <SelectStyling
                required
                mode="tags"
                placeholder="Past the Video Public ID here"
                onChange={handleChange}
              >
                {children}
              </SelectStyling>
            </Col>
            <Col span={4}>
              {" "}
              <ButtonStyling
                icon={<AiOutlineCloudUpload className="icon" />}
                htmlType="submit"
                disabled={children.length === 0 ? true : false}
              >
                update
              </ButtonStyling>
            </Col>
          </Row>
          <Row gutter={[10, 10]} className="mt-3">
            {profile.videoUrl.map((url, index) => (
              <Col lg={{ span: 4 }} className="slide" key={index}>
                <Video
                  cloudName="tarositeweb"
                  controls="true"
                  fallback="Cannot display video"
                  publicId={url}
                  width="100%"
                />
              </Col>
            ))}
          </Row>
        </form>
      )}
    </>
  );
};

const Container = styled.div`
  margin: 4rem 0;
`

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

const ButtonStyling = styled(Button)`
  background: var(--orange-color);
  color: #fff;
  & .icon {
    font-size: 1.4rem;
    margin-right: 5px;
  }
`;

const TitleStyling = styled.h3`
  text-transform: capitalize;
  font-weight: 700;
  margin-top: 3rem;
`;
const SelectStyling = styled(Select)`
  width: 100% !important;
`;

export default EditServiceScreen;
