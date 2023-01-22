import React, { useEffect, useState } from "react";
import MainContainer from "../../MainContainer";
import { Col, Modal, Row, Button, Space, Upload, Select, Input } from "antd";
import styled from "styled-components";
import DropzoneUploading from "./uploadComponent/DropzoneComponent";
import { FiLink2, FiUploadCloud } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams, useLocation } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { GoPlus } from "react-icons/go";
import { IoIosCloudDone } from "react-icons/io";
import ReactPlayer from "react-player";
import {
  HomeOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
  LoadingOutlined,
} from "@ant-design/icons";
import { AiOutlineLink } from "react-icons/ai";
import LoaderComponent from "../../loader";
import { getAdvertisingProfileByID } from "../../../flux/actions/advertisingAction/advertisingAction";
import { destroyImages } from "../../../flux/actions/productAction";
import { IoClose } from "react-icons/io5";
import {
  BannerUploading,
  LogoUploading,
  ServiceUploading,
  VideoTodoList,
  VideoUploading,
} from "./uploadComponent/uploadComponent";
// import UploadComponent from "./uploadComponent";
const { Option } = Select;

function UploadServiceFile() {
  const params = useParams();
  const history = useHistory();
  const dispatch = useDispatch();
  const id = params.id;
  const { userInfo } = useSelector((state) => state.userLogin);
  const { loading, profile } = useSelector((state) => state.advertising);

  useEffect(() => {
    if (!userInfo) {
      history.push("/");
    }
    dispatch(getAdvertisingProfileByID(id));
  }, [userInfo, history,  dispatch, id]);

  return (
    <>
      {loading ? (
        <LoaderComponent />
      ) : (
        <MainContainer style={{ paddingTop: 44 }}>
          <Container>
            <Row gutter={[10, 40]}>
              <Col xs={{ span: 24 }}>
                <BannerUploading
                  userInfo={userInfo}
                  id={id}
                  profile={profile}
                />
              </Col>
              <Col xs={{ span: 24 }}>
                <LogoUploading userInfo={userInfo} id={id} profile={profile} />
              </Col>
              <Col xs={{ span: 24 }}>
                <ServiceUploading
                  userInfo={userInfo}
                  id={id}
                  profile={profile}
                />
              </Col>
              <Col xs={{ span: 24 }}>
                <VideoTodoList userInfo={userInfo} id={id} profile={profile} />
              </Col>
              <Col xs={{ span: 24 }}>
                <LinkStyling
                  to={{
                    pathname: "/advertising/confirm-payment",
                    state: {
                      data: profile,
                    },
                  }}
                >
                  next
                </LinkStyling>
              </Col>
            </Row>
          </Container>
        </MainContainer>
      )}
    </>
  );
}

const Container = styled.div`
  background-color: transparent;
  padding: 3rem;
  /* position: relative; */
  margin-bottom: 40px;
  @media only screen and (max-width: 768px ) {
    padding: 1rem;
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

export default UploadServiceFile;
