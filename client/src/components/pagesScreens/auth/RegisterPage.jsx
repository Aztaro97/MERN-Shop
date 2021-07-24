import React, { useState } from "react";
import styled from "styled-components";
import {
  MdMail,
  GiPadlock,
  ImPhone,
  GoPlus,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
} from "react-icons/all";
import ImgCrop from "antd-img-crop";
import { Upload } from "antd";

import MainContainer from "../../MainContainer"
import InputRadio from "../../InputRadioComponent";
import ButtonC from "../../ButtonComponeent";
import InputC from "../../InputComponents";
import SelectC from "../../SelectComponents"

function RegisterPage() {
  const [typeUser, setTypeUser] = useState(null);

  const handleClickRadio = (e) => {
    setTypeUser(e.target.value);
    console.log(typeUser);
  };
  return (
    <MainContainer>
    <FormContainer>
      <Header>
        <a href="#/">Back</a>
        <div className="radio-button">
          <div>
            <InputRadio
              value="company"
              name="typeCpny"
              id="company"
              checked
              onChange={handleClickRadio}
              //   onClick={handleClickRadio}
            />
            <label htmlFor="company">Comapny</label>
          </div>

          <div>
            <InputRadio
              value="crafman"
              name="typeCpny"
              id="crafman"
              onChange={handleClickRadio}
              //   onClick={handleClickRadio}
            />
            <label htmlFor="crafman">Craftman</label>
          </div>
        </div>
      </Header>
      <UserForm />
      <CompanyInfo />
      <BankInfo />
      <GalleryPhotos />
      <div className="row">
        <ButtonC style={{margin:"0 auto"}}>save</ButtonC>
      </div>
    </FormContainer>
    </MainContainer>
  );
}

const UserForm = () => {
  return (
    <Form>
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
        <ButtonC style={{ marginLeft: "auto", marginBottom: 20 }}>save</ButtonC>
      </div>
    </Form>
  );
};

const CompanyInfo = () => {
  return (
    <Form>
      <h1>company information</h1>
      <div className="card">
        <div className="grid">
          <div className="col">
            <div className="row">
              <InputC placeholder="COMPANY NAME" />
            </div>
            <div className="row">
              <InputC placeholder="COMPANY SCOPE OF BUSINESS" />
            </div>

            <div className="row">
              <h1>contact us</h1>
              <div class="input-container">
                <ImPhone class="icon" />
                <input
                  class="input-field"
                  type="number"
                  placeholder="PHONE NUMBER"
                  name="phone"
                />
                <ButtonC
                  style={{ padding: "1rem", marginLeft: 14 }}
                  type="button"
                >
                  <GoPlus />
                </ButtonC>
              </div>
            </div>
            <div className="row">
              <div class="input-container">
                <FaMapMarkerAlt class="icon" />
                <input
                  class="input-field"
                  type="text"
                  placeholder="LOCATION"
                  name="location"
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
                  class="input-field"
                  type="email"
                  placeholder="EMAIL"
                  name="password"
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
              <TextArea type="text" style={{ height: 100 }} name="description" />
            </div>
            <div className="row">
              <h1>our services</h1>
              <TextArea type="text" style={{ height: 100 }} name="service" />
            </div>
            <div className="row">
              <h1>add video link</h1>
              <InputC type="text" name="videoLink" placeholder="TYPE DAYS" />
            </div>
            <div className="row">
              <h1>add link of your pages</h1>
              <div className="social-media">
                <FaFacebookF className="facebook" />
                <FaInstagram className="insta" />
                <FaTwitter className="twitter" />
                <ImPhone className="whatsapp" />
              </div>
              <InputC style={{ marginTop:15 }} name="social-link" placeholder="TYPE YOUR FACEBOOK LINK"/>
            </div>
          </div>
        </div>
      </div>
    </Form>
  );
};

const BankInfo = () => {
  const options = [
    {
      title: "Dollar",
      value: "dollar"
    },
    {
      title: "Euro",
      value: "euro"
    },
    {
      title: "Dirham",
      value: "dirham"
    }
  ]
  return (
    <Form>
      <h1>bank information</h1>
      <div className="card">
        <div className="row">
          <InputC name="bankName" type="text" placeholder="BANK NAME" />
        </div>
        <div className="row">
          <InputC name="bRANCHName" type="text" placeholder="BRANCH NAME" />
        </div>
        <div className="row">
          <InputC name="bankName" type="text" placeholder="ACCOUNT NUMBER" />
        </div>
        <div className="row">
          <InputC name="bankName" type="text" placeholder="IBAN" />
        </div>
        <div className="row">
          <InputC name="bankName" type="text" placeholder="SWIFT CODE" />
        </div>
        <div className="row">
          <SelectC options={options} name="bankName" type="text" placeholder="BANK NAME" />
        </div>
        <div className="row">
          <ButtonC style={{marginLeft:"auto"}} type="submit">save</ButtonC>
        </div>
      </div>
    </Form>
  )
}

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
    <div className="row">
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
            {fileList.length < 9 && <UploadIcon><GoPlus size={30} /></UploadIcon>}
          </Upload>
        </ImgCrop>
        <h5>COVER PHOTO</h5>
      </div>
    </div>
    </Form>
  )
}

const UploadIcon = styled.div`
width: 100%;
height: 100%;
color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--orange-color);
`

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
      }
    }
  }
`;

const FormContainer = styled.form`
  padding: 2rem;
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
          margin-right: .7rem;
        }
        & .insta {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #6a453b;
          margin-right: .7rem;
        }
        & .twitter {
          border-radius: 50%;
          padding: 7px;
          font-size: 2.4rem;
          background: #55acee;
          margin-right: .7rem;
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
        height:3rem;

        & .icon {
          padding: .6rem;
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

export default RegisterPage;
