import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import "./sliderStyling.css";
import { BsCodeSlash } from "react-icons/bs";
import MainContainer from "../../MainContainer";
import { Col, Row, Image } from "antd";
import { IoCameraOutline, IoCartSharp } from "react-icons/io5";
import { MdOutlineAddAPhoto } from "react-icons/md";
import Scrollspy from "react-scrollspy";
import {
  FaCode,
  FaCreativeCommonsNcJp,
  FiTrendingUp,
  ImPencil2,
  FcAdvertising,
  AiOutlinePrinter,
  BsGlobe,
  MdScreenSearchDesktop,
  GoMegaphone,
  SiMinds,
  AiTwotoneGold,
  IoQrCodeOutline,
} from "react-icons/all";
import {
  BannerStyling,
  MarketingCardStyling,
  NavStyling,
  OurClientStyling,
  ProgrammingCardStyling,
  SectionStyling,
} from "./homeStyling";

function HomeComponents() {
  return (
    <MainContainer>
      <Banner />
      <NavStyling>
        <Scrollspy
          items={[
            "design",
            "photography",
            "printing",
            "exhibition",
            "programming",
            "marketing",
            "products",
          ]}
          currentClassName="is-current"
          style={{ padding: 0 }}
        >
          <h1 className="title">our services</h1>
          <Row gutter={[10, 30]} justify="center">
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#design" className="nav_item">
                <ImPencil2 className="nav_icon" />
                <h4 className="nav_title">design</h4>
              </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#photography" className="nav_item">
                <IoCameraOutline className="nav_icon" />
                <h4 className="nav_title">photography</h4>
              </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#printing" className="nav_item">
                <AiOutlinePrinter className="nav_icon" />
                <h4 className="nav_title">printing press</h4>
              </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#exhibition" className="nav_item">
                <IoCartSharp className="nav_icon" />
                <h4 className="nav_title">exhibition management</h4>
              </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#programming" className="nav_item">
                <FaCode className="nav_icon" />
                <h4 className="nav_title">programming</h4>
              </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#marketing" className="nav_item">
                <GoMegaphone className="nav_icon" />
                <h4 className="nav_title">marketing</h4>
              </a>
            </Col>
            <Col xs={{ span: 12 }} sm={{ span: 8 }} md={{ span: 6 }}>
              <a href="#products" className="nav_item">
                <IoQrCodeOutline className="nav_icon" />
                <h4 className="nav_title">productions</h4>
              </a>
            </Col>
          </Row>
        </Scrollspy>
      </NavStyling>

      <SectionStyling id="design">
        <h1 className="title">design</h1>
        <h3 className="sub_title">
          Want to know what your audiences thinks of your brand ?
        </h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              Are you wondering why other companies do less and benefit more
              from their brand presence in the market? Well here at AU 79 CODE,
              we've made a recipe for exactly that! We welcome your challenges
              and offer you an open feast of beautifully crafted solutions to
              complex problems. Whatever your business, we have our heart and
              passion in it, using the right channels and methods to reach the
              right customers at the right time by designing and building your
              brand identity.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="second_row">
          <Col xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
            <div className="card_large_container">
              <h1 className="large_title">design</h1>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
            <Row className="card_container" gutter={[10, 10]}>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="medium_container">
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                    alt=""
                  />
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                  alt=""
                />
              </Col>

              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=772&q=80"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionStyling>
      <SectionStyling id="photography">
        <h1 className="title">PHOTOGRAPHY</h1>
        <h3 className="sub_title">
          It's simple keep calm, AU79CODE you got it covered !
        </h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              Photography done right can make your story unforgettable. We do
              photoshoots properly by understanding your personality, goals
              behind the photos and your audience. Then we decide the best type
              of storytelling that will resonate with that audience. It could be
              a humorous or emotional documentary style. It's all about finding
              the right way to make the most of your investment.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="second_row">
          <Col xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
            <div className="card_large_container">
              <h1 className="large_title">PHOTOGRAPHY</h1>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
            <Row className="card_container" gutter={[10, 10]}>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="medium_container">
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                  />
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </Col>

              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1554080353-a576cf803bda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionStyling>
      <SectionStyling id="printing">
        <h1 className="title">printing press</h1>
        <h3 className="sub_title">
          It's simple keep calm, AU79CODE you got it covered !
        </h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              We started from a new base. All you must do is tell us what you
              want, and we design for you according to your requests and
              everything we do in order to provide the best possible service at
              the lowest possible price. AU 79 CODE Press is one of the
              successful beginnings in the field of printing and its main
              objective is to provide what the labor market requires of printing
              services. We hope that our efforts will reach the unexpected...
              Printing is still an important part of the marketing
              communications campaign and provides tangible branding.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="second_row">
          <Col xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
            <div className="card_large_container">
              <h1 className="large_title">
                printing <br /> press
              </h1>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
            <Row className="card_container" gutter={[10, 10]}>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="medium_container">
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                    alt=""
                  />
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                  alt=""
                />
              </Col>

              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionStyling>
      <SectionStyling id="exhibition">
        <h1 className="title">exhibition management</h1>
        <h3 className="sub_title">You dream about it we run it!</h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              We take care of everything! Have you ever gotten that spark from
              the idea of planning your special day, but then got sidetracked
              and lost focus? This is where we come in! We help with lighting
              that illuminates and sustains progress We'll be by your side,
              planning every creative shred of detail needed for your special
              exhibition, simply getting enough of the process,
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="second_row">
          <Col xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
            <div className="card_large_container">
              <h1 className="large_title">
                EXHIBITION <br /> MANAGEMENT
              </h1>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
            <Row className="card_container" gutter={[10, 10]}>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="medium_container">
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>

              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1504326787394-e6d75cae8027?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionStyling>
      <SectionStyling id="programming">
        <h1 className="title">PROGRAMMING</h1>
        <h3 className="sub_title">You dream about it we run it!</h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              Develop and build your own website and app You need it, we build
              it for you! Beat your competitors and outdo them! There is no
              difficulty if the website or application is too small or too large
              for our professionals. We create digital experiences for brands
              and businesses using creativity and technology. We'll create the
              style and tone that will give your site its new personality. We
              also create web applications according to your needs such as
              internal management system, online / online stores and online web
              platforms.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <ProgrammingCardStyling>
          <Row gutter={[40, 10]}>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card first_card">
                {/* <BsCodeSlash className="service_card_icon" /> */}
                <h5 className="service_card_title">
                  Providing solutions of every kind
                </h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro adipisicing elit. Molestiae,
                  minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">service 2</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">service 3</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">service 4</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">service 5</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
            <Col
              xs={{ span: 24 }}
              sm={{ span: 12 }}
              md={{ span: 12 }}
              lg={{ span: 8 }}
            >
              <div className="service_card">
                <BsCodeSlash className="service_card_icon" />
                <h5 className="service_card_title">service 6</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Molestiae, minus corrupti. Porro
                </p>
              </div>
            </Col>
          </Row>
        </ProgrammingCardStyling>
      </SectionStyling>
      <SectionStyling id="marketing">
        <h1 className="title">marketing</h1>
        <h3 className="sub_title">
          Our services will make all thes gaps covered !
        </h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <ul className="list_item">
              <li>Is your marketing working ?</li>
              <li>Are you tired of getting rid of all your ?</li>
            </ul>
            <p className="para">
              marketing tactics and not getting the results you really deserve
              in return? We are not happy to see you falter! You my friend need
              a digital marketing consultant Whether you need someone with a lot
              of digital experience or someone with a strong business mind you
              can use to help grow your business or business
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <MarketingCardStyling>
          <h1 className="title">
            Provide Awesome Services <br /> With Our Tools
          </h1>
          <Row className="card_container" gutter={[10, 10]} justify="center">
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <div className="card_item">
                <FiTrendingUp className="icon" />
                <h3 className="card_title">Discover, explore the product</h3>
              </div>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <div className="card_item">
                <AiTwotoneGold className="icon" />
                <h3 className="card_title">Art Direction & Brand Strategy</h3>
              </div>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <div className="card_item">
                <BsGlobe className="icon" />
                <h3 className="card_title">Product UX, Design & Development</h3>
              </div>
            </Col>
            <Col
              xs={{ span: 12 }}
              sm={{ span: 8 }}
              md={{ span: 6 }}
              lg={{ span: 6 }}
            >
              <div className="card_item">
                <MdScreenSearchDesktop className="icon" />
                <h3 className="card_title">
                  Marketing Strategy & SEO Campaigns
                </h3>
              </div>
            </Col>
          </Row>
        </MarketingCardStyling>
      </SectionStyling>
      <SectionStyling id="products">
        <h1 className="title">productions</h1>
        <h3 className="sub_title">You dream about it we run it!</h3>
        <Row gutter={[10, 10]}>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 8 }}>
            <p className="para">
              We are market leaders in each of its sectors and offer a wide
              range of products from a wide range and the best quality. We offer
              more than 3,000 diverse products that include aluminum and
              aluminum foil, plastic containers, plastic film and other plastic
              wrap, paper/plastic/foam cups, paper/plastic/foam plates, cutlery,
              paper/plastic bags, hygiene and safety products, detergents and
              customized products suitable for every market segment.
            </p>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 12 }} lg={{ span: 16 }}>
            <div className="circle">
              <img src="https://via.placeholder.com/300" alt="" />
            </div>
          </Col>
        </Row>
        <Row className="second_row">
          <Col xs={{ span: 24 }} md={{ span: 4 }} lg={{ span: 4 }}>
            <div className="card_large_container">
              <h1 className="large_title">productions</h1>
            </div>
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 20 }} lg={{ span: 20 }}>
            <Row className="card_container" gutter={[10, 10]}>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <div className="medium_container">
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                    alt=""
                  />
                  <Image
                    className="medium_img"
                    width="100%"
                    src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                    alt=""
                  />
                </div>
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="large_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                  alt=""
                />
              </Col>

              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 6 }} lg={{ span: 6 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1471341971476-ae15ff5dd4ea?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80"
                  alt=""
                />
              </Col>
              <Col xs={{ span: 12 }} md={{ span: 9 }} lg={{ span: 9 }}>
                <Image
                  className="small_img"
                  width="100%"
                  src="https://images.unsplash.com/photo-1563968743333-044cef800494?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1516&q=80"
                  alt=""
                />
              </Col>
            </Row>
          </Col>
        </Row>
      </SectionStyling>
      <OurClient />
    </MainContainer>
  );
}

const Banner = () => {
  const { t, i18n } = useTranslation();

  const data = [
    {
      url:
        "https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2076&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1531498352491-042fbae4cf57?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    },
    {
      url:
        "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1932&q=80",
    },
  ];
  const currentLang = i18n.language;
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: currentLang === "ar" ? true : false,
    dotsClass: "dots_bar",
  };
  return (
    <BannerStyling data={data}>
      <Slider {...settings}>
        <div>
          <div className="landing_overlay bg_img1">
            <div className="content_overlay">
              <h1>your partner in growth</h1>

              <p>
                Our marketing strategies for getting your website publicized
                give effective results
              </p>

              <Link className="btn_banner" to="/advertising">
                advertising
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img2">
            <div className="content_overlay">
              <Link className="btn_banner" to="/digital-marketing">
                marketing
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img3">
            <div className="content_overlay">
              <Link className="btn_banner" to="/printing">
                printing
              </Link>
            </div>
          </div>
        </div>
        <div>
          <div className="landing_overlay bg_img4">
            <div className="content_overlay">
              <Link className="btn_banner" to="/photography">
                photography
              </Link>
            </div>
          </div>
        </div>
      </Slider>
    </BannerStyling>
  );
};

const OurClient = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    // rtl: lang === "ar" ? true : false,
    responsive: [
      {
        breakpoint: 1120,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 977,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 760,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <OurClientStyling>
      <h1 className="title">our clients</h1>
      <Slider {...settings} className="slider">
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
        <div className="box">
          <img
            src="https://images.unsplash.com/photo-1518107616985-bd48230d3b20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt=""
          />
        </div>
      </Slider>
    </OurClientStyling>
  );
};

export default HomeComponents;
