import React, { useRef, useState } from "react";
import MainContainer from "../../MainContainer";
import { Card, Col, Image, Row, Space, Typography } from "antd";
import styled from "styled-components";
import Button from "../../ButtonComponeent";
import Slider from "react-slick";
import emailjs from "emailjs-com";
import "./aboutStyling.css";
import { SyncOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

function AboutScreen() {
  return (
    <MainContainer>
      <Banner>
        <div className="content">
          <Title level={2}>About Us</Title>
          <Paragraph className="para">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            cupiditate dolore
          </Paragraph>
          <Button type="button" className="link">
            contact us
          </Button>
        </div>
      </Banner>
      <FirstSectionComponent />
      <VisionStyling>
        <h1 className="title">our vision</h1>
        <Row gutter={[20, 10]} justify="center" className="card_container">
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div className="card_item">
              <img
                className="card_img"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <h3 className="card_title">lorerm upsum</h3>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div className="card_item">
              <img
                className="card_img"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <h3 className="card_title">lorerm upsum</h3>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 12 }} md={{ span: 8 }}>
            <div className="card_item">
              <img
                className="card_img"
                src="https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"
                alt=""
              />
              <h3 className="card_title">lorerm upsum</h3>
            </div>
          </Col>
        </Row>
      </VisionStyling>
      <TestimonialStyling>
        <h1 className="title">lorem ipsum</h1>
        <Row gutter={[20, 0]} className="gutter_row">
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
            <img
              className="picture"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }}>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                iusto perspiciatis sunt, qui natus nesciunt recusandae
                voluptatum, quis quaerat, est exercitationem eaque consequuntur
                rerum officiis molestias necessitatibus earum facilis sint.
              </p>
            </div>
          </Col>
        </Row>
        <Row gutter={[20, 0]} className="gutter_row">
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 16 }}>
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                iusto perspiciatis sunt, qui natus nesciunt recusandae
                voluptatum, quis quaerat, est exercitationem eaque consequuntur
                rerum officiis molestias necessitatibus earum facilis sint.
              </p>
            </div>
          </Col>
          <Col xs={{ span: 24 }} sm={{ span: 24 }} md={{ span: 8 }}>
            <img
              className="picture"
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
              alt=""
            />
          </Col>
        </Row>
      </TestimonialStyling>
      <FormContact />
    </MainContainer>
  );
}

const FirstSectionComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    centerPadding: "60px",
    // fade: true,
    speed: 400,
    autoplaySpeed: 5000,
    autoplay: true,
    slidesToShow: 1,
    // rtl: lang === "ar" ? true : false,
    // rtl: true,
    slidesToScroll: 1,
    dotsClass: "dots__bar",
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <FirstSectionStyling>
      <h1 className="title">why choose us ?</h1>
      <Row gutter={[10]}>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <Slider {...settings} className="slider">
            <div>
              <img
                src="https://images.unsplash.com/photo-1611671208430-772bdb3ed5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611671208430-772bdb3ed5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611671208430-772bdb3ed5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611671208430-772bdb3ed5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1611671208430-772bdb3ed5ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt=""
              />
            </div>
          </Slider>
        </Col>
        <Col xs={{ span: 24 }} md={{ span: 12 }}>
          <div className="content">
            <h2>Lorem Ipsum</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              cupiditate dolore Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Suscipit cupiditate dolore Lorem ipsum dolor sit
              amet consectetur adipisicing elit. Suscipit cupiditate dolore
            </p>
          </div>
        </Col>
      </Row>
    </FirstSectionStyling>
  );
};

const FormContact = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSend, setIsSend] = useState(false);
  const [loading, setLoading] = useState(false);

  const form = useRef();

  const serviceId = process.env.REACT_APP_EMAIL_JS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAIL_JS_TEMPLATE_ID;
  const userId = process.env.REACT_APP_EMAIL_USER_ID_;

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      setLoading(true);
      const res = await emailjs.sendForm(
        serviceId,
        templateId,
        form.current,
        userId
      );
      if (res.text) {
        setIsSend(true);
        setLoading(false);
        setName("");
        setLastName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <FormStyling isSend={isSend}>
      <h1 className="title">Quick contact</h1>
      <form onSubmit={handleSubmit} ref={form}>
        <input
          required
          value={name}
          type="text"
          name="user_name"
          onChange={(e) => setName(e.target.value)}
          placeholder="FIRST NAME"
        />
        <input
          required
          type="text"
          placeholder="LAST NAME"
          name="user_lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          required
          type="email"
          placeholder="EMAIL"
          name="user_email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          required
          name="message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="MESSAGE"
          id=""
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit" className="btn_submit">
          {loading ? (
            <>
              <SyncOutlined spin />{" "}
              <span style={{ paddingLeft: 4 }}> Sending...</span>
            </>
          ) : (
            <span>{isSend ? "Message successfuly sent !!!" : "send"}</span>
          )}
        </button>
      </form>
    </FormStyling>
  );
};

const FormStyling = styled.div`
  margin: 20px 20px 40px 20px;
  & .title {
    text-align: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  & input,
  & textarea {
    display: block;
    width: 100%;
    border: none;
    outline: none;
    border-left: 5px solid #ececec;
    border-right: 5px solid #ececec;
    border-top: 1px solid #ececec;
    border-bottom: 1px solid #ececec;
    margin: 10px 0;
    padding: 5px 20px;
    resize: none;
  }
  & .btn_submit {
    border: none;
    outline: none;
    margin-left: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({ isSend }) => (isSend ? "green" : "#ececec")};
    color: ${({ isSend }) => (isSend ? "#fff" : "#333")};
    padding: 5px 20px;
    letter-spacing: 1px;
    transition: all 0.3s ease-in-out;
    &:hover {
      color: #ececec;
      background: #333;
    }
  }
`;

const TestimonialStyling = styled.section`
  background: #f5f6fa;
  max-width: calc(var(--max-width) - 300px);
  padding: 20px 30px;
  margin-left: auto;
  position: relative;
  bottom: 80px;
  & .title {
    text-align: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-top: 20px;
    margin-bottom: 30px;
  }
  & .gutter_row {
    margin-bottom: 30px;
  }
  & .picture {
    width: 100%;
    height: 150px;
  }
  & .content {
    padding: 20px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: #fff;
    & p {
      margin-bottom: 0;
    }
  }
`;

const VisionStyling = styled.section`
  padding-top: 20px;
  padding-bottom: 150px;
  background: var(--orange-color);
  & .title {
    font-size: 1.8rem;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
    color: #fff;
    letter-spacing: 1px;
  }
  & .card_container {
    padding: 20px 30px;

    & .card_item {
      max-width: 250px;
      padding: 10px;
      background: #fff;
      margin: auto;
      & .card_img {
        width: 100%;
        height: 300px;
        object-fit: cover;
      }
      & .card_title {
        text-align: center;
        margin-top: 10px;
        text-transform: capitalize;
        font-size: 1.2rem;
      }
    }
  }
`;

const FirstSectionStyling = styled.section`
  padding: 20px 0;
  margin: 30px 0;
  & .title {
    text-align: center;
    font-size: 1.8rem;
    text-transform: uppercase;
    font-weight: 700;
    margin-bottom: 40px;
  }
  & .slider {
    & div {
      & img {
        max-width: 300px;
        margin: auto;
      }
    }
  }

  & .content {
    height: 100%;
    display: flex;
    /* align-items: center; */
    justify-content: center;
    flex-direction: column;
    position: relative;
    padding: 20px;
    bottom: 10px;
  }
`;

const Banner = styled.section`
  background: linear-gradient(to bottom, #1111119d 0%, #00000099 100%), url("https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80");
  position: relative;
  height: 400px;
  object-fit: cover;
  background-position: center center;
  background-size: cover;
  & .content {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    max-width: 500px;
    padding-left: 20px;

    margin: 0 auto;
    & > * {
      color: #fff;
    }
    & .para {
      max-width: 400px;
      /* text-align: center; */
    }
    & .link {
      padding: 10px;
      background: #fff;
      color: #333;
      max-width: 200px;
      &:hover {
        opacity: 0.9;
      }
    }
  }
  @media screen and (max-width: 678px) {
    height: 300px;
    & .content {
      & > * {
        margin: 0;
      }
      & .para {
        margin-bottom: 5px;
      }
    }
  }
`;

export default AboutScreen;
