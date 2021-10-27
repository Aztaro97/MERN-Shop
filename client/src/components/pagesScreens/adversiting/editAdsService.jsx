import { Col, Row, Select } from "antd";
import React, { useEffect, useState } from "react";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import styled from "styled-components";
import { getAdvertisingProfileByID } from "../../../flux/actions/advertisingAction/advertisingAction";
import { BusinessList } from "../../../utils/advertisingData";
import LoaderComponent from "../../loader";
import MainContainer from "../../MainContainer";

const { Option } = Select;
function EditAdsService() {
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

  const params = useParams();
  const serviceId = params.id;
  const dispatch = useDispatch();
  const history = useHistory();

  const { profile, loading } = useSelector((state) => state.advertising);
  const { userInfo } = useSelector((state) => state.userLogin);

  if (!userInfo) history.push("/auth");

  useEffect(() => {
    dispatch(getAdvertisingProfileByID(serviceId));
    if (profile) {
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
  }, [serviceId, dispatch]);
  return (
    <MainContainer>
      {loading ? (
        <LoaderComponent />
      ) : (
        <Container>
          <Row gutter={[10, 10]}>
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Label>
                Company Name{" "}
                <InputStyling
                  required
                  type="text"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                />
              </Label>
            </Col>
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Label>
                About{" "}
                <InputStyling
                  required
                  type="text"
                  value={about}
                  onChange={(e) => setAbout(e.target.value)}
                />
              </Label>
            </Col>
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <Label>
                About Arab
                <InputStyling
                  required
                  type="text"
                  value={about_ar}
                  onChange={(e) => setAbout_ar(e.target.value)}
                />
              </Label>
            </Col>
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
              <SelectStyling
                required
                allowClear
                style={{ width: "100%" }}
                defaultValue={`${typeBusiness}`}
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
            </Col>
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
            <Col xs={24} sm={{ span: 24 }} md={{ span: 12 }} lg={{ span: 12 }}>
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
        </Container>
      )}
    </MainContainer>
  );
}

const Container = styled.div``;

const InputStyling = styled.input`
  width: 100%;
  outline: none;
  border: 1px solid var(--silver-color);

  padding: 5px 10px;
`;

const Label = styled.label`
  color: #333;
  font-weight: 700;
`;

const SelectStyling = styled(Select)`
  & > * {
    text-transform: capitalize !important;
  }
  &.ant-select-selection {
    background-color: red;
  }
`;

const CountryDropdownStyling = styled(CountryDropdown)`
  border: none;
  width: 100%;
  padding: 5px 10px;
  display: block;
  margin-bottom: 1rem;
  &:focus {
    outline: none;
    border: none;
  }
`;
const RegionDropdownStyling = styled(RegionDropdown)`
  border: none;
  padding: 5px 10px;
  display: block;
  width: 100%;
  &:focus {
    outline: none;
    border: none;
  }
`;

export default EditAdsService;
