import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Alert, Card, Col, DatePicker, Row, Select } from "antd";
import { AiOutlineMail } from "react-icons/ai";
import { IoMdKey } from "react-icons/io";
import Button from "../../ButtonComponeent";
import { FaMapMarkerAlt, FaPencilAlt } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { BsBuilding } from "react-icons/bs";
import { ImPhone } from "react-icons/im";
import { useFormik } from "formik";
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import Loader from "../../loader";
import DropZoneComponent from "./uploadComponent/DropzoneComponent";

import {
  AddCardImage,
  registerParnerService,
} from "../../../flux/actions/advertisingAction/advertisingAction";

import { serviceArray } from "../../../utils/advertisingData";
import ButtonComponeent from "../../ButtonComponeent";
import { Link } from "react-router-dom";
import { register } from "../../../flux/actions/userAction";
import { BiWorld } from "react-icons/bi";
import axios from "axios";
import { successMessage } from "../../message";

const { Option } = Select;

function PartnerRegisterTemplate2() {
  const { loading, userInfo } = useSelector((state) => state.userLogin);
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Container>
          {!userInfo && <SignUpForm />}
          <DetailsComponent />
          <PlanComponent />
        </Container>
      )}
    </>
  );
}

const SignUpForm = () => {
  const dispatch = useDispatch();

  const validate = (values) => {
    const errors = {};
    if (!values.email) errors.email = "Email est requis !";
    if (values.password.length < 6)
      errors.password = "Enter a password longer than 6 characters";
    if (values.password !== values.password2)
      errors.password2 = "Error Please Make sure your passwords match";
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      password2: "",
    },
    validate,
    onSubmit: (values) => {
      const body = JSON.stringify(values, null, 2);
      dispatch(register(body));
    },
  });
  return (
    <form action="" onSubmit={formik.handleSubmit}>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="email"
            name="email"
            placeholder="Email"
            onChange={formik.handleChange}
            value={formik.values.email}
          />
        </Col>
      </Row>
      <Row>
        <Col span={22} offset={2} className="gutter-row">
          {formik.errors.email ? (
            <Alert message={formik.errors.email} type="error" banner>
              {formik.errors.email}
            </Alert>
          ) : null}
        </Col>
      </Row>

      <Row gutter={10}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <IoMdKey className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="password"
            placeholder="Password"
            name="password"
            id="password"
            onChange={formik.handleChange}
            value={formik.values.password}
          />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <IoMdKey className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="password"
            placeholder="Retype Password"
            name="password2"
            id="password2"
            onChange={formik.handleChange}
            value={formik.values.password2}
          />
        </Col>
      </Row>

      <Row>
        <Col span={22} offset={2} className="gutter-row">
          {formik.errors.password ? (
            <Alert type="error" message={formik.errors.password} banner />
          ) : null}
          {formik.errors.password2 ? (
            <Alert type="error" message={formik.errors.password2} banner />
          ) : null}
        </Col>
      </Row>

      <Button
        type="submit"
        style={{
          fontWeight: 400,
          letterSpacing: "1px",
          textTransform: "capitalize",
        }}
        className="ml-auto"
      >
        sign up
      </Button>
    </form>
  );
};

const DetailsComponent = () => {
  const [companyName, setCompanyName] = useState("");
  const [about, setAbout] = useState("");
  const [TypeBusiness, setTypeBusiness] = useState([]);
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const dispatch = useDispatch();

  const body = {
    companyName,
    about,
    TypeBusiness,
    telephone,
    email,
    city,
    country,
    region,
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    dispatch(registerParnerService(body));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 className="title">company information</h1>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <BsBuilding className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="text"
            placeholder="Company Name"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <FaPencilAlt className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <TextAreaStyling
            name=""
            rows="5"
            cols="4"
            placeholder="About Company"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <MdBusinessCenter className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <SelectStyling
            mode="multiple"
            allowClear
            style={{ width: "100%" }}
            placeholder="Please select your type of busness"
            onChange={(value) => setTypeBusiness(value)}
          >
            {serviceArray.map((item, index) => (
              <Option key={index} value={item.value} label={item.title}>
                {item.title}
              </Option>
            ))}
          </SelectStyling>
        </Col>
      </Row>

      <h1 className="title">contact</h1>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <ImPhone className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="tel"
            placeholder="Phone Number"
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <AiOutlineMail className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Col>
      </Row>
      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <FaMapMarkerAlt className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <InputStyling
            type="text"
            placeholder="City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </Col>
      </Row>

      <Row gutter={1}>
        <Col span={2} className="gutter-row">
          <IconStyling>
            <BiWorld className="icon" />
          </IconStyling>
        </Col>
        <Col span={22} className="gutter-row">
          <Row gutter={20}>
            <Col xs={{ span: 12 }}>
              <CountryDropdownStyling
                value={country}
                onChange={(val) => setCountry(val)}
              />
            </Col>
            <Col xs={{ span: 12 }}>
              <RegionDropdownStyling
                country={country}
                value={region}
                onChange={(value) => setRegion(value)}
                defaultOptionLabel="Choose Region"
              />
            </Col>
          </Row>
        </Col>
      </Row>

      <Button type="submit" className="ml-auto">
        save
      </Button>
    </form>
  );
};

const PlanComponent = () => {
  return (
    <PlanStyling>
      <h1 className="title">Choose your ad type, premium or free</h1>
      <Row gutter={{ lg: 20, md: 10, sm: 10 }}>
        <Col
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <div className="card">
            <h5 className="card_title premium">Premium</h5>
            <div className="card_body">
              <p className="price">
                {" "}
                start<span>aed 25</span>{" "}
              </p>
              <ul className="content">
                <li>Vivamus magna justo, lacinia eget consectetur</li>
                <li>Vivamus magna justo, lacinia consectetur</li>
                <li>Vivamus magna justo, lacinia eget consectetur</li>
                <li>Vivamus magna justo, lacinia consectetur</li>
              </ul>
            </div>
            <div className="card_footer">
              <Link to="/advertising/cart" className="btn premium">
                Start Now
              </Link>
            </div>
          </div>
        </Col>
        <Col
          lg={{ span: 12 }}
          md={{ span: 12 }}
          sm={{ span: 12 }}
          xs={{ span: 24 }}
        >
          <div className="card">
            <h5 className="card_title free">free</h5>
            <div className="card_body">
              <p className="price">
                {" "}
                start<span>aed 0</span>{" "}
              </p>
              <ul className="content">
                <li>Vivamus magna justo, lacinia eget consectetur</li>
                <li>Vivamus magna justo, lacinia consectetur</li>
                <li>Vivamus magna justo, lacinia eget consectetur</li>
                <li>Vivamus magna justo, lacinia consectetur</li>
              </ul>
            </div>
            <div className="card_footer">
              <div className="btn free">Start Now</div>
            </div>
          </div>
        </Col>
      </Row>
    </PlanStyling>
  );
};

const PlanStyling = styled.div`
  margin: 4rem 0;
  & .title {
    text-align: center;
    margin-bottom: 2rem !important;
  }
  & .card {
    margin-bottom: 13px;
  }
  & .card_title {
    color: #fff;
    text-align: center;
    margin: 0;
    padding: 10px 0;
    text-transform: capitalize;
    font-weight: 700;
    letter-spacing: 2px;
    text-transform: uppercase;
    &.free {
      background: #808e9b;
    }
    &.premium {
      background: var(--orange-color);
    }
  }
  & .card_body {
    background: #fff;
    text-align: center;
    padding: 0 10px;

    & .price {
      color: var(--orange-color);
      margin: 1.3rem 0;
      font-weight: 700;
      & span {
        font-size: 3rem;
        color: #000;
        text-transform: uppercase;
        margin-left: 10px;
        font-weight: 700;
      }
    }
    & .content {
      list-style-type: none;
      font-size: 0.9rem;
      text-align: center;
      margin-bottom: 1rem;
    }
  }
  & .card_footer {
    margin: 2rem 0;
    text-align: center;
    & .btn {
      background: var(--orange-color);
      padding: 5px 40px;
      color: #fff;
      &:hover {
        opacity: 0.9;
      }
      &.free {
        background: #808e9b;
      }
      &.premium {
        background: var(--orange-color);
      }
    }
  }
`;

const FirstFraction = styled.div`
  margin-bottom: 1rem;
  & .card-element {
    background: #ffff;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem;
    height: 150px;

    & .content {
      text-align: center;
    }
    & .content-price {
      color: #fff;
      background: var(--orange-color);
      position: absolute;
      right: 5px;
      bottom: 3.6rem;
      padding: 3px 10px;
      font-size: 0.8rem;
    }
  }
  & .card-element-footer {
    padding: 0.8rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    & .price {
      color: var(--orange-color);
      text-transform: uppercase;
      font-weight: 700;
      margin-right: 10px;
    }
    & .quantity {
      /* display: flex; */
      & button {
        outline: none;
        border: 1px solid var(--orange-color);
        padding: 0px;
        display: inline;
        border-radius: 50%;
        width: 30px;
        line-height: 30px;
        height: 30px;
        color: var(--orange-color);
      }
      & p {
        display: inline;
        margin: 0 7px;
        font-weight: 700;
      }
    }
  }
`;

// const AddPictureComponent = () => {
//   return (
//     <form>
//       <h1 className="title">add pictures</h1>
//       <Row>
//         <Col span={24} className="gutter-row">
//           <DropZoneComponent
//             name="landing-image"
//             price={150}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//       </Row>
//       <Row gutter={10}>
//         <Col span={8} className="gutter-row" xs={{ span: 12 }} sm={{ span: 8 }}>
//           <DropZoneComponent
//             name="image1"
//             price={45}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//         <Col span={8} xs={{ span: 12 }} sm={{ span: 8 }}>
//           <DropZoneComponent
//             name="image2"
//             price={45}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//         <Col span={8} className="gutter-row" xs={{ span: 12 }} sm={{ span: 8 }}>
//           <DropZoneComponent
//             name="image3"
//             price={45}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//       </Row>
//       <Row gutter={10}>
//         <Col span={12} className="gutter-row">
//           <DropZoneComponent
//             name="image4"
//             price={55}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//         <Col span={12} className="gutter-row">
//           <DropZoneComponent
//             name="image5"
//             price={55}
//             accept="image/png, image/jpg, image/jpeg"
//           />
//         </Col>
//       </Row>
//       <Button className="ml-auto mt-3">save</Button>
//     </form>
//   );
// };

// const AddVideoComponent = () => {
//   return (
//     <form>
//       <h1 className="title">add videos</h1>
//       <Row>
//         <Col span={24} className="gutter-row">
//           <DropZoneComponent
//             name="landing-image"
//             price={200}
//             accept="video/*"
//           />
//         </Col>
//       </Row>
//       <Button className="ml-auto mt-3">save</Button>
//     </form>
//   );
// };

const Container = styled.div`
  max-width: 800px;
  margin: 12rem auto 0;
  background-color: #ecececec;
  padding: 3rem;
  position: relative;
  bottom: 5rem;

  & .title {
    font-size: 1.5rem;
    text-transform: capitalize;
    margin-bottom: 14px;
    margin-top: 1rem;
  }
  & h3,
  h4 {
    color: #fff;
    text-transform: capitalize;
  }

  & .gutter-row {
    margin-bottom: 10px;
  }
`;

const IconStyling = styled.div`
  color: var(--orange-color);
  & .icon {
    font-size: 1.5rem;
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
