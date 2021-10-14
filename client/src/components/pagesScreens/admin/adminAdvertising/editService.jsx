import { Col, Image, Row } from "antd";
import React, { useEffect, useState } from "react";
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

  const { profile, loading, error } = useSelector((state) => state.advertising);

  const dispatch = useDispatch();
  // const history = useHistory();

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
        <>
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
          <VideoContainer id={id} userInfo={userInfo} />
          <Row justify="space-between" className="mt-3">
            <Col>
              <BackLinkStyling to="/admin/advertising">cancel</BackLinkStyling>
            </Col>
            <Col>{/* <Button>save</Button> */}</Col>
          </Row>
        </>
      )}
    </MainContainer>
  );
}

const LogoContainer = ({ id, userInfo, loading, profile }) => {
  const [logoFile, setLogoFile] = useState("");

  const dispatch = useDispatch();

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
    if (res.data.msg) {
      dispatch(getAdvertisingProfileByID(id));
    }
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          <TitleStyling>Add Logo</TitleStyling>
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
              {profile.logoUrl !== undefined && (
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
  const [serviceFile, setServiceFile] = useState([]);

  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    const formdata = new FormData();
    // formdata.append("serviceFile", serviceFile);

    const files = e.target.serviceFile.files;
    if (files.length !== 0) {
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
    if (res.data.msg) dispatch(getAdvertisingProfileByID(id));
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <form onSubmit={handleSubmit}>
          {" "}
          <TitleStyling>Add Pictures</TitleStyling>
          <Row gutter={[10, 10]} justify="space-between" className="mb-3">
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

const VideoContainer = ({ id, userInfo }) => {
  const [videoFile, setVideoFile] = useState("");

  const handleSubmit = async (e) => {
    console.log(videoFile);
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
      console.log(error);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      {" "}
      <TitleStyling>Add Video</TitleStyling>
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
          <ButtonStyling
            icon={<AiOutlineCloudUpload className="icon" />}
            htmlType="submit"
          >
            update
          </ButtonStyling>
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

const ButtonStyling = styled(Button)`
  background: var(--orange-color);
  color: #fff;
  & .icon {
    font-size: 1.4rem;
    margin-right: 5px;
  }
`;

const TitleStyling = styled.h3`
  text-transform: uppercase;
  font-weight: 700;
  margin-top: 3rem;
`;

export default EditServiceScreen;
