import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from 'react-redux'
import {
  MdMail,
  GiPadlock,
  ImPhone,
  GoPlus,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  AiFillDelete
} from "react-icons/all";
import { Link, useHistory } from "react-router-dom";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";
import {register, registerCompanyInfo, registerBankInfo} from "../../../flux/actions/userAction"
import {useFormik} from "formik";
import MainContainer from "../../MainContainer";
import InputRadio from "../../InputRadioComponent";
import ButtonC from "../../ButtonComponeent";
import InputC from "../../InputComponents";
import SelectC from "../../SelectComponents";



function RegisterPage() {
  const [typeUser, setTypeUser] = useState("");



  const history = useHistory();

  const handleClickRadio =  (e) => {
    setTypeUser(e.target.value);
    console.log(e.target.value);
  };
  return (
    <MainContainer>
      <FormContainer>
        <Header>
          <a href="#/" onClick={() => history.goBack()}>Back</a>
          <div className="radio-button">
            <div>
              <InputRadio
                value="company"
                name="typeCpny"
                id="company"
                // checked
                onChange={handleClickRadio}
                  // onClick={handleClickRadio}
              />
              <label htmlFor="company">Comapny</label>
            </div>

            <div>
              <InputRadio
                value="crafman"
                name="typeCpny"
                id="crafman"
                onChange={handleClickRadio}
                  // onClick={handleClickRadio}
              />
              <label htmlFor="crafman">Craftman</label>
            </div>
          </div>
        </Header>
        <UserForm />
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
    initialValues:{
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      console.log(body)
      dispatch(register(body))
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>registration information</h1>
      <div className="card">
        <div className="row">
          <div class="input-container">
            <MdMail class="icon" />
            <input
              class="input-field"
              type="email"
              placeholder="EMAIL"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        
        <div className="row">
          <div class="input-container">
            <GiPadlock class="icon" />
            <input
              class="input-field"
              type="password"
              placeholder="PASSWORD"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div class="input-container">
            <GiPadlock class="icon" />
            <input
              class="input-field"
              type="password"
              placeholder="RETYPE PASSWORD"
              name="password2"
            />
          </div>
        </div>
        <ButtonC type="submit" style={{ marginLeft: "auto", marginBottom: 20 }}>save</ButtonC>
      </div>
    </Form>
  );
};

const CompanyInfo = ({typeUser}) => {
  // Finish State
  const [cellular, setCellular] = useState("");
  const [ListCellular, setListCellular] = useState([]);

const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: { 
      company: { 
        name: "", 
        type: "", 
        scopeBusiness: "",
        phoneNumber: ListCellular,
        location: "",
        email: "",
        workHours: [{
          from: "",
          to: ""
        }],
        holidays: [],
        about: "",
        services: "",
        videoLink: "",
        mediaLink: {
          facebook: "",
          insta: "",
          twitter: "",
          whatsapp: ""
        }

      }
    },
    onSubmit: (values) => {
      formik.setFieldValue("company.type", typeUser)
      const body = JSON.stringify(values, null, 2);

      dispatch(registerCompanyInfo(body))
      
      console.log(body)
    }
  })

  

  //  Cellular function
  const addCellular = (e) => {
    e.preventDefault();
    ListCellular.push(cellular);
    setCellular("");
  };
  const deleteCellular = (itemIndex) => {
    const newListCellular = ListCellular.filter((_, index) => index !== itemIndex);
    setListCellular(newListCellular);
    console.log(newListCellular);
    console.log(ListCellular)
  };


  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>company information</h1>
      <div className="card">
        <div className="grid">
          <div className="col">
            <div className="row">
              <InputC 
              type="text"
              placeholder="COMPANY NAME" 
              name="company.name" 
              value={formik.values.company.name} 
              onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <InputC 
              type="text"
              placeholder="COMPANY SCOPE OF BUSINESS" 
              name="company.scopeBusiness"
              value={formik.values.company.scopeBusiness} 
              onChange={formik.handleChange}
              />
            </div>

            <div className="row">
              <h1>contact us</h1>
              <div class="input-container">
                <ImPhone class="icon" />
                <input
                  class="input-field"
                  type="number"
                  placeholder="PHONE NUMBER"
                  name="company.phone"
                  value={cellular}
                  onChange={e => setCellular(e.target.value)}
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
              <div class="input-container">
                <FaMapMarkerAlt class="icon" />
                <input
                  class="input-field"
                  type="text"
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
              <div class="input-container">
                <MdMail class="icon" />
                <input
                type="mail"
                  class="input-field"
                  type="email"
                  placeholder="EMAIL"
                  name="company.email"
                onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="row">
              <h1>work hours</h1>
              <div className="time">
                <InputC name="workHoursFrom" type="number" placeholder="FROM" />
                <InputC name="workHoursTo" type="number" placeholder="TO" />
                <ButtonC type="button" style={{ padding: "1rem" }}>
                  <GoPlus />
                </ButtonC>
              </div>
            </div>
            <div className="row">
              <h1>add holidays</h1>
              <InputC type="text" name="holidays" placeholder="TYPE DAYS" />
            </div>
          </div>

          <div className="col">
            <div className="row">
              <h1>about company</h1>
              <TextArea
                type="text"
                style={{ height: 100 }}
                name="company.about"
                onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <h1>our services</h1>
              <TextArea type="text" 
              style={{ height: 100 }} 
              name="company.services"
              value={formik.values.company.services}
              onChange={formik.handleChange}
              />
            </div>
            <div className="row">
              <h1>add video link</h1>
              <InputC type="text" 
              name="company.videoLink" 
              placeholder="TYPE DAYS" 
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
                style={{ marginTop: 15 }}
                name="company.mediaLink"
                placeholder="TYPE YOUR FACEBOOK LINK"
              />
            </div>
          </div>
        </div>
      </div>
      <ButtonC type="submit">Save</ButtonC>
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
        device: ""
      }
    },
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(registerBankInfo(body))
    }
  })
  return (
    <Form onSubmit={formik.handleSubmit}>
      <h1>bank information</h1>
      <div className="card">
        <div className="row">
          <InputC name="bank.name" type="text" placeholder="BANK NAME" value={formik.values.bank.name} onChange={formik.handleChange} />
        </div>
        <div className="row">
          <InputC name="bank.branch" type="text" placeholder="BRANCH NAME" value={formik.values.bank.branch} onChange={formik.handleChange} />
        </div>
        <div className="row">
          <InputC name="bank.accountNumber" type="text" placeholder="ACCOUNT NUMBER" value={formik.values.bank.account} onChange={formik.handleChange} />
        </div>
        <div className="row">
          <InputC name="bank.iban" type="text" placeholder="IBAN" value={formik.values.bank.iban} onChange={formik.handleChange} />
        </div>
        <div className="row">
          <InputC name="bank.swiftCode" type="text" placeholder="SWIFT CODE" value={formik.values.bank.swiftCode} onChange={formik.handleChange} />
        </div>
        <div className="row">
          <SelectC
            options={options}
            name="bank.device"
            type="text"
            placeholder="BANK NAME"
            value={formik.values.bank.device}
            onChange={e => formik.setFieldValue("bank.device", e.target.value)}
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
  const [fileList, setFileList] = useState([{}]);

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(fileList);
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
    <Form>
      <div className="row_galery">
        <h1>add photo for your company</h1>
        <div className="card">
          <ImgCrop rotate>
            <Upload
              // style={{background:"red"}
              listType="picture-card"
              beforeUpload={() => false}
              onChange={onChange}
              onPreview={onPreview}
              fileList={fileList}
              name="image-files"
            >
              {fileList.length < 9 && (
                <UploadIcon>
                  <GoPlus size={30} />
                </UploadIcon>
              )}
            </Upload>
          </ImgCrop>
          <h5>COVER PHOTO</h5>
        </div>
      </div>
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
      }
    }
  }
`;

const FormContainer = styled.div`
  padding: 2rem;

  & .submittion_btn {
    margin:2rem 0;
    text-align:center;
    width: 100%;
  }
`;

const Form = styled.form`
  margin-bottom: 2rem;
  & h1 {
    text-transform: uppercase;
    font-size: 1.3rem;
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
        display: -ms-flexbox; /* IE10 */
        display: flex;
        width: 100%;
        margin-bottom: 15px;
        border-radius: 20px;
        height: 3rem;

        & .icon {
          padding: 0.6rem;
          background: var(--orange-color);
          color: white;
          min-width: 3.12rem;
          text-align: center;
          height: 100%;
          border-radius: 10px 0 0 10px;
        }
        & .input-field {
          width: 100%;
          padding: 10px;
          outline: none;
          border: 2px solid var(--orange-color);
          border-radius: 0 10px 10px 0;
        }
        & .input-field:focus {
          box-shadow: 0 0 0 2px var(--orange-color);
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
  padding-left: .7rem;
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
