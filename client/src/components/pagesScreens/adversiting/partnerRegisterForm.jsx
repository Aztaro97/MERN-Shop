import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Col, Row, Select } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import Button from "../../ButtonComponeent";
import { FaMapMarkerAlt, FaPencilAlt, FaUser } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { useFormik } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Loader from "../../loader";

import { BusinessList } from "../../../utils/advertisingData";
import { useHistory } from "react-router-dom";
import { register } from "../../../flux/actions/userAction";
import { BiWorld } from "react-icons/bi";
import MainContainer from "../../MainContainer";
import { useTranslation } from "react-i18next";
import Meta from "../../helmet";
import axios from "axios";
import { USER_ADS_SUCCESS } from "../../../flux/constants/advertising";

const { Option } = Select;

function PartnerRegisterTemplate2() {
  const { loading, userInfo } = useSelector((state) => state.userLogin);

  const history = useHistory();

  if (!userInfo) {
    history.push("/auth");
  }
  return (
    <MainContainer>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          <Meta title="Partner Registration" />
          <FormComponent userInfo={userInfo} />
        </Container>
      )}
    </MainContainer>
  );
}

const FormComponent = ({ userInfo }) => {
  // ////////    services fields
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

  const [error, setError] = useState(false);

  const dispatch = useDispatch();
  const { i18n } = useTranslation();
  const lang = i18n.language;

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

  const history = useHistory();
  const { t } = useTranslation();

  const config = {
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${userInfo && userInfo.token}`,
    },
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!typeBusiness) {
      setError(true);
    } else {
      const res = await axios.post("/api/advertising/free", body, config);
      const id = res.data._id;
      if (id) {
        history.push({
          pathname: `/advertising/upload-file/${id}`,
          state: {
            data: res.data,
          },
        });
        dispatch({
          type: "SAVE_SERVICE_INFO_SUCCESS",
          payload: res.data,
        });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <Row justify="end">
        <Col xs={{ span: 22, offset: lang === "en" ? 2 : -2 }}>
          <h1 className="title">{t("company_info")}</h1>
        </Col>
      </Row>
      <Row gutter={[10, 10]} justify="end" style={{ marginBottom: 10 }}>
        <Col xs={{ span: 2 }} md={{ span: 2 }}>
          <IconStyling>
            <BsBuilding className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }} md={{ span: 11 }}>
          <InputStyling
            style={{ direction: lang === "ar" && "ltr" }}
            required
            type="text"
            placeholder={`${t("company_name_placeholder")}  ( ${t(
              "english"
            )} ) `}
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Col>
        <Col
          xs={{
            span: lang === "en" ? 22 : 22,
            offset: lang === "en" ? 2 : -2,
          }}
          md={{ span: 11, offset: 0 }}
        >
          <InputStyling
            style={{ direction: lang === "en" && "rtl" }}
            required
            type="text"
            placeholder={`${t("company_name_placeholder")}  ( ${t(
              "arabic"
            )} ) `}
            value={companyName_ar}
            onChange={(e) => setCompanyName_ar(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={[10, 10]} justify="end">
        <Col xs={{ span: 2 }} md={{ span: 2 }}>
          <IconStyling>
            <FaPencilAlt className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }} md={{ span: 11 }}>
          <TextAreaStyling
            style={{ direction: lang === "ar" && "ltr" }}
            required
            name=""
            rows="5"
            cols="4"
            placeholder={`${t("about_company_placeholder")} ( ${t(
              "english"
            )} ) `}
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </Col>
        <Col
          xs={{
            span: lang === "en" ? 22 : 22,
            offset: lang === "en" ? 2 : -2,
          }}
          md={{ span: 11, offset: 0 }}
        >
          <TextAreaStyling
            style={{ direction: lang === "en" && "rtl" }}
            required
            name=""
            rows="5"
            cols="4"
            placeholder={`${t("about_company_placeholder")}  ( ${t(
              "arabic"
            )} ) `}
            value={about_ar}
            onChange={(e) => setAbout_ar(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={[10, 10]}>
        <Col xs={{ span: 2 }}>
          <IconStyling>
            <MdBusinessCenter className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }}>
          <SelectStyling
            required
            allowClear
            style={{ width: "100%" }}
            placeholder={t("select_typ_business_placeholder")}
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
      </Row>

      {error && (
        <Row gutter={[10, 10]} style={{ marginTop: 10 }}>
          <Col xs={{ span: 2 }}></Col>
          <Col xs={{ span: 22 }}>
            <Alert
              message="Pease select your typ of business"
              type="error"
              closable
            />
          </Col>
        </Row>
      )}

      <Row style={{ marginTop: 20 }} justify="end">
        <Col xs={{ span: 22, offset: lang === "en" ? 2 : -2 }}>
          <h1 className="title">{t("contact_details")}</h1>
        </Col>
      </Row>
      <Row gutter={[10, 10]} justify="end">
        <Col xs={{ span: 2 }}>
          <IconStyling>
            <FaUser className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }}>
          <InputStyling
            required
            type="text"
            name="name"
            placeholder={t("full_name__placeholder")}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 2 }}>
          <IconStyling>
            <ImPhone className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }}>
          <InputStyling
            required
            type="tel"
            placeholder={t("phone_number_placeholder")}
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 2 }}>
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }}>
          <InputStyling
            required
            type="email"
            placeholder={t("email_placeholder")}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 2 }}>
          <IconStyling>
            <FaMapMarkerAlt className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 22 }}>
          <InputStyling
            required
            type="text"
            placeholder={t("city__placeholder")}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
        <Col xs={{ span: 2 }}>
          <IconStyling>
            <BiWorld className="icon" />
          </IconStyling>
        </Col>
        <Col xs={{ span: 11 }}>
          <CountryDropdownStyling
            value={country}
            defaultOptionLabel={t("select_country__placeholder")}
            onChange={(val) => setCountry(val)}
          />
        </Col>
        <Col xs={{ span: 11 }}>
          <RegionDropdownStyling
            required
            country={country}
            value={region}
            onChange={(value) => setRegion(value)}
            defaultOptionLabel={t("select_region__placeholder")}
          />
        </Col>

        <Col xs={{ span: 22, offset: lang === "en" ? 2 : -2 }}>
          <CardText>
            <ul>
              <li>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus.
              </li>
              <li>
                Quisque velit nisi, pretium ut lacinia in, elementum id enim.
                Vivamus magna justo, lacinia eget consectetur sed, convallis at
                tellus.
              </li>
            </ul>
            <Button style={{ marginLeft: "auto" }} type="submit">
              continue
            </Button>
          </CardText>
        </Col>
      </Row>
    </form>
  );
};

const CardText = styled.div`
  padding: 20px;
  & ul {
    list-style: none;
    padding: 0;
  }
  border: 1px solid var(--orange-color);
`;

const Container = styled.div`
  background-color: #ecececec;
  padding: 3rem;
  margin-bottom: 40px;
  /* position: relative; */

  & .title {
    font-size: 1.2rem;
    text-transform: uppercase;
    margin-bottom: 14px;
    margin-top: 1rem;
    font-weight: 700;
  }
  & h3,
  h4 {
    color: #fff;
    text-transform: capitalize;
  }

  & .gutter-row {
    margin-bottom: 10px;
  }
  @media only screen and (max-width: 768px) {
    padding: 3rem 1rem;
    & .title {
      font-size: 1.1rem;
    }
  }
`;

const IconStyling = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--orange-color);
  & .icon {
    font-size: 1.5rem;
  }
  @media only screen and (max-width: 320px) {
    & .icon {
      font-size: 20px;
    }
  }
`;
const InputStyling = styled.input`
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 5px 10px;
`;
const TextAreaStyling = styled.textarea`
  width: 100%;
  outline: none;
  border: none;
  background: #fff;
  padding: 4px 10px;
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

export default PartnerRegisterTemplate2;
