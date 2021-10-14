import { DatePicker, Radio } from "antd";
import React, { useState } from "react";
import styled from "styled-components";
import { useTranslation } from "react-i18next";
import MainContainer from "../../MainContainer";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import LogOutForm from "../auth/logOutForm";
import { useSelector } from "react-redux";
import { useFormik } from "formik";
import InputComponents from "../../InputComponents";
import SelectC from "../../SelectComponents";
import TextArea from "../../TextAreaComponent";

import { BusinessList } from "../../../utils/advertisingData";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import ButtonComponeent from "../../ButtonComponeent";
import Meta from "../../helmet";

function PartnerRegister() {
  const [typeUser, setTypeUser] = useState("company");
  const [fileList, setFileList] = useState([]);
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const formik = useFormik({
    initialValues: {
      company: {
        name: "",
        type: "",
        scopeBusiness: "",
        licenceNumber: "",
        expireDate: "",
        phoneNumber: "",
        location: "",
        email: "",
        workHoursFrom: "",
        workHoursTo: "",
        holidays: "",
        about: "",
        services: "",
        videoLink: "",
        mediaLink: {
          facebook: "",
          insta: "",
          twitter: "",
          whatsapp: "",
        },
      },
    },
    onSubmit: (values) => {
      formik.setFieldValue("company.type", typeUser);
      const body = JSON.stringify(values, null, 2);
      // setfield(formik.company.type, typeUser)

      //   dispatch(registerCompanyInfo(body));

      console.log(body);
    },
  });

  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.userLogin);

  const handleClickRadio = (e) => {
    setTypeUser(e.target.value);
    console.log(e.target.value);
    formik.setFieldValue("company.type", typeUser);
  };
  const handleChangeImage = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList);
  };
  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
      console.log(fileList);
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  return (
    <MainContainer>
      <Meta title="Partner Registration" />
      {!userInfo && <LogOutForm />}
      <FormPartnerInfoStyling>
        <h3 className="title">partner information</h3>
        {/* ///////////   Radio Type User */}
        <div className="radio_container my-3">
          <Radio.Group onChange={handleClickRadio} defaultValue={typeUser}>
            <RadioCustom value="company"> {t("company")} </RadioCustom>
            <RadioCustom value="personnel">{t("personnel")}</RadioCustom>
          </Radio.Group>
        </div>

        <div className="row">
          <div className="col-lg-6 my-2">
            <InputComponents
              style={{ textTransform: "uppercase" }}
              required
              type="email"
              placeholder="FIRST NAME"
              name="company.email"
              value={formik.values.company.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6 my-2">
            <InputComponents
              required
              type="text"
              style={{ textTransform: "uppercase" }}
              placeholder="LAST NAME"
              name="company.phoneNumber"
              value={formik.values.company.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 my-2">
            <InputComponents
              style={{ textTransform: "uppercase" }}
              required
              type="email"
              placeholder="EMAIL"
              name="company.email"
              value={formik.values.company.email}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6 my-2">
            <InputComponents
              required
              type="text"
              style={{ textTransform: "uppercase" }}
              placeholder="TELEPHONE"
              name="company.phoneNumber"
              value={formik.values.company.phoneNumber}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6 my-2">
            <InputComponents
              style={{ textTransform: "uppercase" }}
              required
              type="text"
              placeholder={`${typeUser} NAME`}
              name="company.name"
              value={formik.values.company.name}
              onChange={formik.handleChange}
            />
          </div>
          <div className="col-lg-6 my-2">
            <InputComponents
              required
              type="text"
              style={{ textTransform: "uppercase" }}
              placeholder={`${typeUser} SCOPE OF BUSINESS`}
              name="company.scopeBusiness"
              value={formik.values.company.scopeBusiness}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-lg-6  my-2">
            <TextArea
              required
              name="company.about"
              value={formik.values.company.about}
              onChange={formik.handleChange}
              style={{ width: "100%" }}
              placeholder="ABOUT COMPANY"
              rows="5"
            />
          </div>
          <div className="col-lg-6">
            <div className="row">
              <div className="col-lg-12 my-2">
                <CountryDropdownCustom
                  required
                  name="country"
                  value={country}
                  onChange={(val) => setCountry(val)}
                />
              </div>
              <div className="col-lg-12 my-2">
                <RegionDropdownCustom
                  required
                  name="region"
                  country={country}
                  value={region}
                  onChange={(val) => setRegion(val)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* {typeUser === "company" && (
          <div className="row">
            <div className="col-lg-6 my-2">
              <InputComponents
                required
                type="currency"
                placeholder={`LICENCE NUMBER`}
                name="company.licenceNumber"
                value={formik.values.company.licenceNumber}
                onChange={formik.handleChange}
              />
            </div>

            <div className="col-lg-6 my-2">
              <DatePickerStyling
                style={{ width: "100%", borderColor: "var(--orange-color" }}
                onChange={(date, dateString) =>
                  formik.setFieldValue("company.expireDate", dateString)
                }
                picker="date"
                format="DD-MM-YYYY"
                placeholder={t("expiry_placeholder")}
                showNow={false}
              />
            </div>
          </div>
        )} */}

        <div className="row">
          <div className="col-lg-12 my-2">
            <Upload
              required
              listType="picture"
              fileList={fileList}
              onChange={handleChangeImage}
              onPreview={onPreview}
              accept="image/png, image/jpeg, image/jpg, video/mp4"
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Upload company logo</Button>
            </Upload>
          </div>
        </div>

        <div className="row">
          <ButtonComponeent className="ml-auto mt-2">save</ButtonComponeent>
        </div>
      </FormPartnerInfoStyling>
      <ServicesSection />
    </MainContainer>
  );
}

const ServicesSection = () => {
  const [typeService, setTypeService] = useState("");
  return (
    <ServicesStyling>
      <h3 className="title">Company Services</h3>
      <SelectC
        className="form_select"
        placeholder="Brand"
        name="formik.brand"
        options={BusinessList}
        value={typeService}
        onChange={(e) => setTypeService(e.target.value)}
      />
    </ServicesStyling>
  );
};

const FormPartnerInfoStyling = styled.form`
  padding: 1rem;
  height: 100%;

  & .title {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }

  & .radio_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ServicesStyling = styled.form`
  padding: 1rem;
  height: 100%;

  & .title {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
`;

const RadioCustom = styled(Radio)`
  & .ant-radio-checked .ant-radio-inner {
    border-color: var(--orange-color) !important ;
  }
  & .ant-radio-checked .ant-radio-inner:after {
    background-color: var(--orange-color);
  }
  & .ant-radio:hover .ant-radio-inner {
    border-color: var(--orange-color);
  }
`;

const DatePickerStyling = styled(DatePicker)`
  height: 2.5rem;
  &.ant-picker:hover {
    border-color: var(--orange-color) !important ;
  }
  &.ant-picker-focused {
    border-color: var(--orange-color) !important ;
    box-shadow: none;
  }
`;

const CountryDropdownCustom = styled(CountryDropdown)`
  border: 3px solid var(--background-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  width: 100%;
  height: 2.5rem;
    border: 2px solid var(--background-color);
  }
  &:focus-visible {
    border: 2px solid var(--background-color);
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 2.5rem;
  }
  @media only screen and (max-width: 330px) {
    width: 100%;
  }
`;

const RegionDropdownCustom = styled(RegionDropdown)`
  border: 2px solid var(--background-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  width: 100%;
  height: 2.5rem;
  &:focus {
    border: 2px solid var(--background-color);
  }
  &:focus-visible {
    border: 2px solid var(--background-color);
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 2.5rem;
  }
`;

export default PartnerRegister;
