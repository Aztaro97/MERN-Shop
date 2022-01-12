import { Col, Row, Select } from "antd";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { getAdvertisingProfileByID } from "../../../flux/actions/advertisingAction/advertisingAction";
import { AD_PROFILE_RESET } from "../../../flux/constants/advertising";
import { BusinessList } from "../../../utils/advertisingData";
import ButtonComponeent from "../../ButtonComponeent";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";
import { successMessage } from "../../message";
import {
  BannerUploading,
  LogoUploading,
  ServiceUploading,
  VideoTodoList,
  VideoUploading,
} from "./uploadComponent/uploadComponent";

const { Option } = Select;

function EditAdsService() {
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const [companyName, setCompanyName] = useState("");
  const [companyName_ar, setCompanyName_ar] = useState("");
  const [about, setAbout] = useState("");
  const [about_ar, setAbout_ar] = useState("");
  const [typeBusiness, setTypeBusiness] = useState("");
  const [fullName, setFullName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const body = {
    companyName,
    companyName_ar,
    about,
    about_ar,
    typeBusiness,
    fullName,
    telephone,
    email,
    city,
    country,
    region,
  };

  const params = useParams();
  const serviceId = params.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const { profile, loading } = useSelector((state) => state.advertising);
  const { userInfo } = useSelector((state) => state.userLogin);

  if (!userInfo) history.push("/auth");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const res = await axios.put(
        `/api/advertising/profile/${serviceId}`,
        body,
        config
      );
      if (res.data) {
        successMessage("updated successfully");
        setUpdateSuccess(true);
      }
    } catch (error) {}
  };

  useEffect(() => {
    if (updateSuccess) {
      dispatch({ type: AD_PROFILE_RESET });
      history.push("/profile/my-ads");
    } else {
      if (!profile || profile._id !== serviceId) {
        dispatch(getAdvertisingProfileByID(serviceId));
      } else {
        setCompanyName(profile.companyName);
        setCompanyName_ar(profile.companyName_ar);
        setAbout(profile.about);
        setAbout_ar(profile.about_ar);
        setTypeBusiness(profile.typeBusiness);
        setFullName(profile.fullName);
        setTelephone(profile.telephone);
        setEmail(profile.email);
        setCity(profile.city);
        setCountry(profile.country);
        setRegion(profile.region);
      }
    }
  }, [serviceId, dispatch, profile, updateSuccess, history]);

  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Container>
          <form onSubmit={handleSubmit}>
            <Row gutter={[20, 20]} justify="space-between">
              <Col xs={{ span: 24 }} md={{ span: 24 }}>
                <div className="header">
                  <Link onClick={() => history.goBack()} className="link_back">
                    Go Back
                  </Link>
                  <ButtonComponeent type="submit">update</ButtonComponeent>
                </div>
              </Col>
              {/* <Col xs={{ span: 5 }}> </Col> */}
            </Row>
            <Row gutter={[10, 20]}>
              <Col
                xs={24}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Label>
                  Company Name
                  <InputStyling
                    required
                    type="text"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={24}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Label>
                  Company Name Arab{" "}
                  <InputStyling
                    required
                    type="text"
                    value={companyName_ar}
                    onChange={(e) => setCompanyName_ar(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={24}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Label>
                  About{" "}
                  <TextAreaStyling
                    required
                    type="text"
                    value={about}
                    onChange={(e) => setAbout(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={24}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 12 }}
              >
                <Label>
                  About Arab
                  <TextAreaStyling
                    required
                    type="text"
                    value={about_ar}
                    onChange={(e) => setAbout_ar(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={24}
                sm={{ span: 24 }}
                md={{ span: 12 }}
                lg={{ span: 24 }}
              >
                <Label>
                  Type Business
                  <SelectStyling
                    required
                    allowClear
                    style={{ width: "100%" }}
                    defaultValue={typeBusiness}
                    onChange={(value) => setTypeBusiness(value)}
                  >
                    {BusinessList.map((item, index) => (
                      <Option
                        key={index}
                        value={item.value}
                        label={item.title}
                        style={{ textTransform: "capitalize" }}
                      >
                        {item.title}
                      </Option>
                    ))}
                  </SelectStyling>
                </Label>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Label>
                  Full Name
                  <InputStyling
                    required
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Label>
                  Telephone
                  <InputStyling
                    required
                    type="text"
                    value={telephone}
                    onChange={(e) => setTelephone(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Label>
                  Email
                  <InputStyling
                    required
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Label>
                  City
                  <InputStyling
                    required
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                  />
                </Label>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Label>
                  Country
                  <CountryDropdownStyling
                    required
                    type="text"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </Label>
              </Col>
              <Col
                xs={{ span: 24 }}
                sm={{ span: 12 }}
                md={{ span: 12 }}
                lg={{ span: 8 }}
              >
                <Label>
                  Country
                  <RegionDropdownStyling
                    required
                    country={country}
                    value={region}
                    onChange={(value) => setRegion(value)}
                    // defaultOptionLabel={t("select_region__placeholder")}
                  />
                </Label>
              </Col>
            </Row>
          </form>
          <Row gutter={[20, 50]} style={{ marginTop: 40 }}>
            {" "}
            <Col xs={{ span: 24 }}>
              <BannerUploading
                id={serviceId}
                userInfo={userInfo}
                profile={profile}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <LogoUploading
                id={serviceId}
                userInfo={userInfo}
                profile={profile}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <ServiceUploading
                id={serviceId}
                userInfo={userInfo}
                profile={profile}
              />
            </Col>
            <Col xs={{ span: 24 }}>
              <VideoTodoList
                id={serviceId}
                userInfo={userInfo}
                profile={profile}
              />
            </Col>
          </Row>
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div`
  padding: 20px;
  background: var(--dark-light-color);
  margin-bottom: 20px;
  & .header {
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .link_back {
      font-weight: 700;
      color: var(--orange-color);
      text-decoration: none;
    }
  }
`;

const InputStyling = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: var(--dark-color);
  border: 1px solid var(--silver-color);
  padding: 5px 10px;
  color: var(--white-color);
  &:focus {
    color: var(--silver-color);
  }
`;

const Label = styled.label`
  color: var(--silver-color);
  font-weight: 700;
  text-transform: uppercase;
  width: 100%;
`;

const SelectStyling = styled(Select)`
  & > * {
    text-transform: capitalize !important;
  }

  & .ant-select-selector {
    background: var(--dark-color) !important;
    border: 1px solid var(--silver-color) !important;
    color: var(--white-color) !important;
  }
`;

const CountryDropdownStyling = styled(CountryDropdown)`
  background: var(--dark-color);
  border: 1px solid var(--silver-color);
  width: 100%;
  padding: 5px 10px;
  display: block;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border: none;
    color: var(--silver-color);
  }
`;
const RegionDropdownStyling = styled(RegionDropdown)`
  background: var(--dark-color);
  border: 1px solid var(--silver-color);
  padding: 5px 10px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
    border: none;
    color: var(--silver-color);
  }
`;
const TextAreaStyling = styled.textarea`
  width: 100%;
  height: 140px;
  outline: none;
  background: var(--dark-color);
  border: 1px solid var(--silver-color);
  padding: 4px 10px;
  color: var(--white-color);
  resize: none;
  &:focus {
    color: var(--silver-color);
  }
  &::placeholder {
    color: var(--silver-color);
  }
`;

export default EditAdsService;
