import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import {
  MdMail,
  GiPadlock,
  ImPhone,
  GoPlus,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  AiFillDelete,
} from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Upload, Radio, DatePicker } from "antd";
import {
  register,
  registerCompanyInfo,
  registerBankInfo,
} from "../../../flux/actions/userAction";
import { useFormik } from "formik";
import MainContainer from "../../MainContainer";
import InputRadio from "../../InputRadioComponent";
import ButtonC from "../../ButtonComponeent";
import InputC from "../../InputComponents";
import SelectC from "../../SelectComponents";
import Ratio from "../../antRatio";

function RegisterPage() {
  const { t } = useTranslation();
  const [typeUser, setTypeUser] = useState("company");

  const history = useHistory();

  const { userInfo } = useSelector((state) => state.userLogin);

  const handleClickRadio = (e) => {
    setTypeUser(e.target.value);
    console.log(e.target.value);
  };

  // useEffect(() => {
  //   if (!userInfo) {
  //     history.push("/auth")
  //   }
  // },[userInfo])

  return (
    <MainContainer>
      <FormContainer>
        <Header>
          <a href="#/" onClick={() => history.goBack()}>
          {t("back")}
          </a>
          <div className="radio_container">
            <Radio.Group onChange={handleClickRadio} value={typeUser}>
              <RadioCustom value="company"> {t("company")} </RadioCustom>
              <RadioCustom value="personnel">{t("personnel")}</RadioCustom>
            </Radio.Group>
          </div>
        </Header>
        {!userInfo && <UserForm />}
        <CompanyInfo typeUser={typeUser} />
        <BankInfo />
        <GalleryPhotos />
        <div className="row">
          <Link to="/add-product" className="submittion_btn">
            <ButtonC style={{ margin: "0 auto" }}>
              {t("save_and_continue")}
            </ButtonC>
          </Link>
        </div>
      </FormContainer>
    </MainContainer>
  );
}

const UserForm = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      console.log(body);
      dispatch(register(body));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>{t("registration_info")}</h1>
      <div className="card">
        <div className="row">
          <div className="input-container">
            <MdMail className="icon" />
            <input
              required
              className="input-field"
              type="email"
              placeholder={t("email_placeholder")}
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="input-container">
            <GiPadlock className="icon" />
            <input
              required
              className="input-field"
              type="password"
              placeholder={t("password_placeholder")}
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="input-container">
            <GiPadlock className="icon" />
            <input
              required
              className="input-field"
              type="password"
              placeholder={t("retype_placeholder")}
              name="password2"
            />
          </div>
        </div>
        <ButtonC type="submit" style={{ marginLeft: "auto", marginBottom: 20 }}>
        {t("save")}
        </ButtonC>
      </div>
    </Form>
  );
};

const CompanyInfo = ({ typeUser }) => {
  const { t } = useTranslation();
  // Finish State
  const [cellular, setCellular] = useState("");
  const [ListCellular, setListCellular] = useState([]);

  const [workHourFrom, setWorkHourFrom] = useState("");
  const [workHourTo, setWorkHourTo] = useState("");

  const [hour, setHour] = useState({
    from: "",
    to: "",
  });
  const [ListHour, setListHour] = useState([]);

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      company: {
        name: "",
        type: typeUser,
        scopeBusiness: "",
        licenceNumber: "",
        expireDate: "",
        phoneNumber: ListCellular,
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

      dispatch(registerCompanyInfo(body));

      console.log(body);
    },
  });

  //  Cellular function
  const addCellular = (e) => {
    e.preventDefault();
    ListCellular.push(cellular);
    setCellular("");
  };
  const deleteCellular = (itemIndex) => {
    const newListCellular = ListCellular.filter(
      (_, index) => index !== itemIndex
    );
    setListCellular(newListCellular);
    console.log(newListCellular);
    console.log(ListCellular);
  };

  //  WorkHour function
  const addHour = (e) => {
    e.preventDefault();
    // formik.setFieldValue("company.workHoursFrom", workHourFrom)
    // formik.setFieldValue("company.workHoursTo", workHourTo)
    // ListHour.push(hour);
    console.log(formik.values.company);
    // console.log({workHourFrom})
    // console.log({workHourTo})
    // setHour({ from: "", to: "" });
  };
  const deleteHour = (itemIndex) => {
    const newListCellular = ListHour.filter((_, index) => index !== itemIndex);
    setListHour(newListCellular);
    console.log(newListCellular);
    console.log(ListHour);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>{typeUser} information</h1>

      <div className="card">
        <div className="grid">
          <div className="col">
            <div className="row">
              <InputC
              style={{textTransform: "uppercase"}}
                required
                type="text"
                placeholder={`${typeUser} NAME`}
                name="company.name"
                value={formik.values.company.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <InputC
                required
                type="text"
                style={{textTransform: "uppercase"}}
                placeholder={`${typeUser} SCOPE OF BUSINESS`}
                name="company.scopeBusiness"
                value={formik.values.company.scopeBusiness}
                onChange={formik.handleChange}
              />
            </div>

            {typeUser === "company" && (
              <>
                <div className="row">
                  <InputC
                    required
                    type="currency"
                    placeholder={`LICENCE NUMBER`}
                    name="company.licenceNumber"
                    value={formik.values.company.licenceNumber}
                    onChange={formik.handleChange}
                  />
                </div>

                <div className="row">
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
              </>
            )}

            <div className="row">
              <h1>{t("nav_contact")}</h1>
              <div className="input-container">
                <ImPhone className="icon" />
                <input
                  className="input-field"
                  type="tel"
                  placeholder={t("phone_number_placeholder")}
                  name="company.phone"
                  value={cellular}
                  onChange={(e) => setCellular(e.target.value)}
                />
                <ButtonC
                  style={{ padding: "1rem", margin: "0 5px" }}
                  type="button"
                  onClick={addCellular}
                >
                  <GoPlus />
                </ButtonC>
              </div>
              <Ul>
                {ListCellular.length > 0
                  ? ListCellular.map((item, index) => (
                      <li key={index}>
                        <p>{item}</p>
                        <AiFillDelete
                          className="delete_icon"
                          onClick={() => deleteCellular(index)}
                        />
                      </li>
                    ))
                  : null}
              </Ul>
            </div>
            <div className="row">
              <div className="input-container">
                <FaMapMarkerAlt className="icon" />
                <input
                  className="input-field"
                  type="url"
                  placeholder={t("location_placeholder")}
                  name="company.location"
                />
                <ButtonC
                  style={{ padding: "1rem", margin: "0 5px" }}
                  type="button"
                >
                  <FaMapMarkerAlt />
                </ButtonC>
              </div>
            </div>
            <div className="row">
              <div className="input-container">
                <MdMail className="icon" />
                <input
                  required
                  type="mail"
                  className="input-field"
                  placeholder={t("email_placeholder")}
                  name="company.email"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <h1>{t("work_hours")}</h1>

              <div className="time_container">
                <DatePickerStyling
                  onChange={(date, dateString) =>
                    formik.setFieldValue("company.workHoursFrom", dateString)
                  }
                  picker="time"
                  format="HH:mm"
                  placeholder={t("from_placeholder")}
                  showNow={false}
                />
                <DatePickerStyling
                  onChange={(date, dateString) =>
                    formik.setFieldValue("company.workHoursTo", dateString)
                  }
                  picker="time"
                  format="HH:mm"
                  placeholder={t("to_placeholder")}
                  showNow={false}
                />
                {/* <ButtonC
                  type="button"
                  style={{ padding: "0rem" }}
                  onClick={addHour}
                  disabled={ListHour.length > 1 ? true : false}
                >
                  <GoPlus />
                </ButtonC> */}
              </div>
              {/* <Ul>
                {ListHour.length > 0
                  ? ListHour.map((item, index) => (
                      <li key={index}>
                        <p>
                          <span>From{item.from}</span> to {item.to}
                        </p>
                        <AiFillDelete
                          className="delete_icon"
                          onClick={() => deleteHour(index)}
                        />
                      </li>
                    ))
                  : null}
              </Ul> */}
            </div>
            <div className="row">
              <h1>{t("add_holidays")}</h1>
              <InputC
                required
                type="text"
                name="company.holidays"
                placeholder={t("type_day_placeholder")}
                value={formik.values.company.holidays}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="col">
            <div className="row">
              <h1>{t("about_company")}</h1>
              <TextArea
                required
                type="text"
                style={{ height: 100 }}
                name="company.about"
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <h1>{t("our_services")}</h1>
              <TextArea
                required
                type="text"
                style={{ height: 100 }}
                name="company.services"
                value={formik.values.company.services}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <h1>{t("add_video_link")}</h1>
              <InputC
                type="url"
                name="company.videoLink"
                placeholder={t("type_video_link_placeholder")}
                value={formik.values.company.videoLink}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row" style={{display:"block"}}>
              <h1>{t("add_your_page")}</h1>
              <div className="social-media">
                <FaFacebookF className="facebook" />
                <FaInstagram className="insta" />
                <FaTwitter className="twitter" />
                <ImPhone className="whatsapp" />
              </div>
              <InputC
                type="url"
                style={{ marginTop: 15 }}
                value={formik.values.company.mediaLink.facebook}
                name="company.mediaLink.facebook"
                placeholder={t("type_facebook_placeholder")}
                onChange={formik.handleChange}
              />
              <InputC
                type="url"
                style={{ marginTop: 15 }}
                name="company.mediaLink.insta"
                value={formik.values.company.mediaLink.insta}
                placeholder={t("type_insta_placeholder")}
                onChange={formik.handleChange}
              />
              <InputC
                type="url"
                style={{ marginTop: 15 }}
                value={formik.values.company.mediaLink.twitter}
                name="company.mediaLink.twitter"
                placeholder={t("type_twitter_placeholder")}
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <ButtonC style={{ margin: "10px auto 10px 0" }} type="submit">
        {t("save")}
        </ButtonC>
      </div>
    </Form>
  );
};

const BankInfo = () => {
  const { t } = useTranslation();
  const options = [
    {
      title: t("currrency_placeholder"),
      value: "",
    },
    {
      title: "Dirham Emirates ( dh )",
      value: "dirham",
    },
    {
      title: "Dollar US ( $ )",
      value: "dollar",
    },
    {
      title: "Euro ( ss)",
      value: "euro",
    },
  ];

  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      bank: {
        name: "",
        branch: "",
        accountNumber: "",
        iban: "",
        swiftCode: "",
        device: "",
      },
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(registerBankInfo(body));
    },
  });
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>{t("bank_info")}</h1>
      <div className="card">
        <div className="row">
          <InputC
            name="bank.name"
            type="text"
            placeholder={t("bank_name_placeholder")}
            value={formik.values.bank.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.branch"
            type="text"
            placeholder={t("bank_branch_placeholder")}
            value={formik.values.bank.branch}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.accountNumber"
            type="text"
            placeholder={t("acc_number_placeholder")}
            value={formik.values.bank.account}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.iban"
            type="text"
            placeholder={t("iban_placeholder")}
            value={formik.values.bank.iban}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.swiftCode"
            type="text"
            placeholder={t("swift_placeholder")}
            value={formik.values.bank.swiftCode}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <SelectC
            options={options}
            name="bank.device"
            type="text"
            placeholder={t("currrency_placeholder")}
            value={formik.values.bank.device}
            onChange={(e) =>
              formik.setFieldValue("bank.device", e.target.value)
            }
          />
        </div>
        <div className="row">
          <ButtonC style={{ marginLeft: "auto" }} type="submit">
          {t("save")}
          </ButtonC>
        </div>
      </div>
    </Form>
  );
};

const GalleryPhotos = () => {
  const { t } = useTranslation();
  const { userInfo } = useSelector((state) => state.userLogin);

  const [fileList, setFileList] = useState([]);

  const fileObjets = [];

  const handleChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileObjets);
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

  const handleSendImage = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      let formdata = new FormData();
      for (var i = 0; i < fileList.length; i++) {
        formdata.append("imgfiles", fileList[i].originFileObj);
      }

      const res = await axios.post(
        "/api/upload/company-images",
        formdata,
        config
      );

      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <Form onSubmit={(e) => handleSendImage(e)}>
      <div className="row_galery">
        <h1>{t("add_photo_for_your")}</h1>
        <div className="card">
          <Upload
            listType="picture-card"
            beforeUpload={() => false}
            onChange={handleChange}
            onPreview={onPreview}
            fileList={fileList}
            name="imgfiles"
            accept="image/png, image/jpeg, image/jpg"
            multiple
          >
            {fileList.length < 4 && (
              <UploadIcon>
                <GoPlus size={30} />
              </UploadIcon>
            )}
          </Upload>

          <p style={{ fontSize: ".8rem" }}> {t("cover_photo")}</p>
        </div>
      </div>
      <ButtonC style={{ marginTop: "10px" }} type="submit">
      {t("upload_all")}
      </ButtonC>
    </Form>
  );
};

const UploadIcon = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--orange-color);
`;

const Header = styled.div`
  height: 5rem;
  width: 100%;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 2rem;
  }

  & .radio_container {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const FormContainer = styled.div`
  padding: 2rem;

  & .submittion_btn {
    margin: 2rem 0;
    text-align: center;
    width: 100%;
  }
`;

const Form = styled.form`
  margin-bottom: 2rem;
  & h1 {
    text-transform: uppercase;
    font-size: 1rem;
    font-weight: 700;
  }
  & .card {
    border: 0.4px solid var(--border-color);
    padding: 1rem 1.5rem;
    border-radius: 15px;

    & .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-gap: 3rem;
      @media only screen and (max-width: 900px) {
        grid-template-columns: 1fr;
      }
    }

    & .row {
      padding: 0.5rem 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .time_container {
        display: grid;
        grid-template-columns: 3fr 3fr 1fr;
        grid-gap: 0.8rem;
      }
      & .social-media {
        display: flex;
        width: 200px;
        justify-content:space-between;
        color: #fff;
        & .facebook {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #3b5998;
          /* margin-right: 0.7rem; */
        }
        & .insta {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #6a453b;
          /* margin-right: 0.7rem; */
        }
        & .twitter {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #55acee;
          /* margin-right: 0.7rem; */
        }
        & .whatsapp {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #4bae50;
        }
      }

      & .input-container {
        /* display: flexIE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        border-radius: 20px;
        height: 2.5rem;

        & .icon {
          padding: 0.6rem;
          font-size: 2px;
          background: var(--orange-color);
          color: white;
          min-width: 3.12rem;
          text-align: center;
          height: 100%;
          border-radius: 0;
        }
        & .input-field {
          width: 100%;
          padding:0 10px;
          outline: none;
          border: 2px solid var(--orange-color);
          /* border-radius: 0 5px 5px 0; */
          font-size: 0.7rem;
          height: 2.5rem;
          /* margin-right: ; */
        }
        & .input-field:focus {
          /* box-shadow: 0 0 0 2px var(--orange-color); */
        }
      }
    }
  }
`;

const TextArea = styled.textarea`
  border-radius: 5px;
  border: 1px solid #c58787;
  outline: none;
  height: 5rem;
  width: 100%;
  padding-left: 0.4rem;
  padding-top: 0.5rem;
  color: #aaaaac;

  &:focus {
    color: #000;
    box-shadow: 0 0 0 2px #c58787;
    border-color: #c58787;
  }
`;

const Ul = styled.ul`
  list-style: none;
  /* padding-top: 1rem; */
  padding-left: 0.7rem;
  /* width: 1rem; */

  & li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    & p {
      text-transform: uppercase;
      color: var(--silver-color);
      font-weight: 700;
      margin-bottom: 0;
      margin-right: 2rem;
    }

    & .delete_icon {
      color: var(--silver-color);
      cursor: pointer;
      &:hover {
        color: #9c1717;
      }
    }
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
  &.ant-picker:hover {
    border-color: var(--orange-color) !important ;
  }
  &.ant-picker-focused {
    border-color: var(--orange-color) !important ;
    box-shadow: none;
  }
`;

export default RegisterPage;
