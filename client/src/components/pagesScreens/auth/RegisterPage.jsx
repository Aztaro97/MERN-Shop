import React, { useState, useEffect } from "react";
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
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
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

function RegisterPage() {
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
            Back
          </a>
          <div className="radio-button">
            <div>
              <InputRadio
                required
                value="company"
                name="typeCpny"
                id="company"
                onChange={handleClickRadio}
              />
              <label htmlFor="company">Comapny</label>
            </div>

            <div>
              <InputRadio
                required
                value="craftman"
                name="typeCpny"
                id="craftman"
                onChange={handleClickRadio}
              />
              <label htmlFor="craftman">Craftman</label>
            </div>
          </div>
        </Header>
        {!userInfo && <UserForm />}
        <CompanyInfo typeUser={typeUser} />
        <BankInfo />
        <GalleryPhotos />
        <div className="row">
          <Link to="/add-product" className="submittion_btn">
            <ButtonC style={{ margin: "0 auto" }}>save</ButtonC>
          </Link>
        </div>
      </FormContainer>
    </MainContainer>
  );
}

const UserForm = () => {
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
      <h1>registration information</h1>
      <div className="card">
        <div className="row">
          <div className="input-container">
            <MdMail className="icon" />
            <input
              required
              className="input-field"
              type="email"
              placeholder="EMAIL"
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
              placeholder="PASSWORD"
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
              placeholder="RETYPE PASSWORD"
              name="password2"
            />
          </div>
        </div>
        <ButtonC type="submit" style={{ marginLeft: "auto", marginBottom: 20 }}>
          save
        </ButtonC>
      </div>
    </Form>
  );
};

const CompanyInfo = ({ typeUser }) => {
  // Finish State
  const [cellular, setCellular] = useState("");
  const [ListCellular, setListCellular] = useState([]);

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
        phoneNumber: ListCellular,
        location: "",
        email: "",
        workHours: ListHour,
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
    ListHour.push(hour);
    console.log(hour);
    setHour({ from: "", to: "" });
  };
  const deleteHour = (itemIndex) => {
    const newListCellular = ListHour.filter((_, index) => index !== itemIndex);
    setListHour(newListCellular);
    console.log(newListCellular);
    console.log(ListHour);
  };

  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>company information</h1>
      <div className="card">
        <div className="grid">
          <div className="col">
            <div className="row">
              <InputC
                required
                type="text"
                placeholder="COMPANY NAME"
                name="company.name"
                value={formik.values.company.name}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <InputC
                required
                type="text"
                placeholder="COMPANY SCOPE OF BUSINESS"
                name="company.scopeBusiness"
                value={formik.values.company.scopeBusiness}
                onChange={formik.handleChange}
              />
            </div>

            <div className="row">
              <h1>contact us</h1>
              <div className="input-container">
                <ImPhone className="icon" />
                <input
                  className="input-field"
                  type="tel"
                  placeholder="PHONE NUMBER"
                  name="company.phone"
                  value={cellular}
                  onChange={(e) => setCellular(e.target.value)}
                />
                <ButtonC
                  style={{ padding: "1rem", marginLeft: 14 }}
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
                  placeholder="LOCATION"
                  name="company.location"
                />
                <ButtonC
                  style={{ padding: "1rem", marginLeft: 14 }}
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
                  placeholder="EMAIL"
                  name="company.email"
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <h1>work hours</h1>
              <div className="time">
                <InputC
                  value={hour.from}
                  type="time"
                  placeholder="FROM"
                  onChange={(e) => setHour({ from: e.target.value })}
                />
                <InputC
                  value={hour.to}
                  type="time"
                  placeholder="TO"
                  onChange={(e) => setHour({ to: e.target.value })}
                />
                <ButtonC
                  type="button"
                  style={{ padding: "0rem" }}
                  onClick={addHour}
                  disabled={ListHour.length > 1 ? true : false}
                >
                  <GoPlus />
                </ButtonC>
              </div>
              <Ul>
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
              </Ul>
            </div>
            <div className="row">
              <h1>add holidays</h1>
              <InputC
                required
                type="text"
                name="company.holidays"
                placeholder="TYPE DAYS"
                value={formik.values.company.holidays}
                onChange={formik.handleChange}
              />
            </div>
          </div>

          <div className="col">
            <div className="row">
              <h1>about company</h1>
              <TextArea
                required
                type="text"
                style={{ height: 100 }}
                name="company.about"
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <h1>our services</h1>
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
              <h1>add video link</h1>
              <InputC
                type="url"
                name="company.videoLink"
                placeholder="TYPE VIDEO LINK"
                value={formik.values.company.videoLink}
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <h1>add link of your pages</h1>
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
                placeholder="TYPE YOUR FACEBOOK LINK"
                onChange={formik.handleChange}
              />
              <InputC
                type="url"
                style={{ marginTop: 15 }}
                name="company.mediaLink.insta"
                value={formik.values.company.mediaLink.insta}
                placeholder="TYPE YOUR INSTAGRAM LINK"
                onChange={formik.handleChange}
              />
              <InputC
                type="url"
                style={{ marginTop: 15 }}
                value={formik.values.company.mediaLink.twitter}
                name="company.mediaLink.twitter"
                placeholder="TYPE YOUR TWITTER LINK"
                onChange={formik.handleChange}
              />
            </div>
          </div>
        </div>
        <ButtonC style={{ margin:"10px auto 10px 0"}}type="submit">Save</ButtonC>
      </div>
      
    </Form>
  );
};

const BankInfo = () => {
  const options = [
    {
      title: "Dollar",
      value: "dollar",
    },
    {
      title: "Euro",
      value: "euro",
    },
    {
      title: "Dirham",
      value: "dirham",
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
      <h1>bank information</h1>
      <div className="card">
        <div className="row">
          <InputC
            name="bank.name"
            type="text"
            placeholder="BANK NAME"
            value={formik.values.bank.name}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.branch"
            type="text"
            placeholder="BRANCH NAME"
            value={formik.values.bank.branch}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.accountNumber"
            type="text"
            placeholder="ACCOUNT NUMBER"
            value={formik.values.bank.account}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.iban"
            type="text"
            placeholder="IBAN"
            value={formik.values.bank.iban}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <InputC
            name="bank.swiftCode"
            type="text"
            placeholder="SWIFT CODE"
            value={formik.values.bank.swiftCode}
            onChange={formik.handleChange}
          />
        </div>
        <div className="row">
          <SelectC
            options={options}
            name="bank.device"
            type="text"
            placeholder="BANK NAME"
            value={formik.values.bank.device}
            onChange={(e) =>
              formik.setFieldValue("bank.device", e.target.value)
            }
          />
        </div>
        <div className="row">
          <ButtonC style={{ marginLeft: "auto" }} type="submit">
            save
          </ButtonC>
        </div>
      </div>
    </Form>
  );
};

const GalleryPhotos = () => {
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
        <h1>add photo for your company</h1>
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

          <h5>COVER PHOTO</h5>
        </div>
      </div>
      <button type="submit">Envoyer</button>
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

  & .radio-button {
    text-align: center;
    color: #aaaaac;
    display: flex;
    justify-content: center;

    & div {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 1rem;

      & input {
        font-size: 2rem;
      }

      & label {
        margin-bottom: 0;
        cursor: pointer;
        padding-left: 5px;
      }
    }
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

      .time {
        display: grid;
        grid-template-columns: 3fr 3fr 1fr;
        grid-gap: 0.8rem;
      }
      & .social-media {
        display: flex;
        color: #fff;
        & .facebook {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #3b5998;
          margin-right: 0.7rem;
        }
        & .insta {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #6a453b;
          margin-right: 0.7rem;
        }
        & .twitter {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #55acee;
          margin-right: 0.7rem;
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
          border-radius: 10px 0 0 10px;
        }
        & .input-field {
          width: 100%;
          padding-left: 10px;
          outline: none;
          border: 2px solid var(--orange-color);
          border-radius: 0 10px 10px 0;
          font-size: 0.7rem;
          height: 2.5rem;
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

export default RegisterPage;
