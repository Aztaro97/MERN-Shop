import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Slider from "react-slick";
import {Image} from "antd"
import { CountryDropdown, RegionDropdown } from "react-country-region-selector";
import { categoryAdversiting } from "../../../utils/advertisingData";
import InputC from "../../InputComponents";
import ButtonC from "../../ButtonComponeent";
import "./advertising.css";

function AdvertisingProfileScreen() {
  return (
    <main>
      <Landing />
      <ContainerStyling className="container my-5">
        <section className="introduction">
          <h1 className="title">company name</h1>
          <img src="/img/logo11.png" alt="" />
        </section>
        <section className="about">
          <h1 className="title">about company</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque, rem
            tempore doloremque sit id esse iusto? Quasi ex laudantium voluptate
            porro? Veniam eligendi fugit consequuntur repellendus error
            repudiandae! Nostrum, amet! Rerum aliquid recusandae nostrum
            consectetur molestias eum illum soluta, cumque vel rem! Debitis nisi
            eos ut reprehenderit ex unde nesciunt voluptate mollitia ducimus
            temporibus earum quibusdam distinctio saepe, tempora amet! Ipsum,
            fugiat laboriosam! Voluptatum obcaecati cumque beatae nisi.
            Inventore velit corporis distinctio impedit vel dolorum minima sed
            veniam? Nam cum enim, unde praesentium reprehenderit ad nisi
            voluptatibus sunt qui similique?
          </p>
        </section>
        <section className="service">
          <h1 className="title">company services</h1>
          <div className="grid">
            {categoryAdversiting.map((data) => (
              <div key={data.id}>
                <div
                  className="box"
                  style={{ backgroundImage: `url(${data.image})` }}
                >
                  <div className="box-container">
                    <h4>{data.title}</h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="service_two">
          <h1 className="title">company services</h1>
          <div className="grid">
            <div className="card">
              <Image src="/img/advertising/real_state.jpg" alt="" className="card-image" />
              <div className="card-body">
                <p className="text-center">real estate</p>
              </div>
            </div>
            <div className="card">
              <Image src="/img/advertising/restaurant.jpg" alt="" className="card-image" />
              <div className="card-body">
                <p className="text-center">Restaurant</p>
              </div>
            </div>
            <div className="card">
              <Image src="/img/advertising/pharmacy.jpg" alt="" className="card-image" />
              <div className="card-body">
                <p className="text-center">pharmacy</p>
              </div>
            </div>
            <div className="card">
              <Image src="/img/advertising/real_state.jpg" alt="" className="card-image" />
              <div className="card-body">
                <p className="text-center">vehicle</p>
              </div>
            </div>
          </div>
        </section>

        <section className="portfolio">
          <h1 className="title">company portfolio</h1>
          <PortfolioSlider className="slider_container" />
        </section>
        <section className="contact">
          <h1 className="title">contact</h1>
          <ContactForm />
          {/* <div className="grid">
            <div>
              <form action="">
                <ul>
                  <li>
                    Email:{" "}
                    <a href="mailto:exemple@emple.com">exemple@example.com</a>
                  </li>
                  <li>
                    telephone: <a href="tel:+971505555555">+971505555555</a>
                  </li>
                  <li>
                    adress: <a href="#/">al rashiya , dubai</a>
                  </li>
                  <li>
                    Country: <span>Emirates</span>
                  </li>
                  <li>
                    State: <span>Dubai</span>
                  </li>
                </ul>
                <input type="text" placeholder="FULL NAME" required />
                <input type="mail" placeholder="EMAIL" required />
                <textarea
                  name="message"
                  id="message"
                  placeholder="MESSAGE"
                  cols="30"
                  rows="6"
                  required
                />

                <button class="btn btn_submit" type="submit">
                  send
                </button>
              </form>
            </div>
            <div>
              <iframe
                title="maps"
                className="maps"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28871.70752908401!2d55.39180900000002!3d25.23815630000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sfr!2sae!4v1631523146741!5m2!1sfr!2sae"
                width="400"
                height="300"
                allowfullscreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div> */}
        </section>
      </ContainerStyling>
    </main>
  );
}

const Landing = () => {
  return (
    <LandingStyling>
      <div>
        <div className="landing_overlay">
          <h1>all restaurants</h1>
          <Link className="link1" to="#/">
            Let's go
          </Link>
        </div>
      </div>
    </LandingStyling>
  );
};

const PortfolioSlider = () => {
  const settings = {
    dots: true,
    infinite: true,
    fade: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    // slidesPerRow: 0,
    dotsClass: "dots__bar",
    // centerPadding: "0px",
    // arrows: false,
  };
  return (
    <Slider {...settings} className="slider_container">
      <div className="slide">
        <img src="/img/advertising/bg-images.jpeg" alt="" />
      </div>
      <div className="slide">
        <img src="/img/advertising/bg-images.jpeg" alt="" />
      </div>
      <div className="slide">
        <img src="/img/advertising/bg-images.jpeg" alt="" />
      </div>
      <div className="slide">
        <img src="/img/advertising/bg-images.jpeg" alt="" />
      </div>
    </Slider>
  );
};

const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleSubmit = (e) => {};
  return (
    <FormStyling onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-lg-6">
          <InputC
            required
            name="firstName"
            id="firstName"
            placeholder="FIRST NAME"
            className="input"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-lg-6">
          <InputC
            required
            name="lastName"
            id="lastName"
            placeholder="LAST NAME"
            className="input"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <InputC
            required
            name="email"
            id="email"
            placeholder="EMAIL"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-lg-6">
          <InputC
            required
            type="tel"
            name="phoneNumber"
            id="phoneNumber"
            placeholder="PHONE NUMBER"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6">
          <InputC
            required
            name="address"
            id="address"
            placeholder="ADRESS"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>
        <div className="col-lg-6">
          <InputC
            required
            type="text"
            name="city"
            id="city"
            placeholder="CITY"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6">
          <CountryDropdownCustom
            required
            name="country"
            value={country}
            onChange={(val) => setCountry(val)}
          />
        </div>
        <div className="col-lg-6">
          <RegionDropdownCustom
            required
            name="region"
            country={country}
            value={region}
            onChange={(val) => setRegion(val)}
          />
        </div>
      </div>

      <ButtonC type="submit" className="btn_submit">
        send
      </ButtonC>
    </FormStyling>
  );
};

const FormStyling = styled.form`
  padding: 2rem;
  border: 1px solid #ececec;

  & .row {
    margin-bottom: 0.6rem;
    & .col-lg-6:first-child {
      @media only screen and (max-width: 992px) {
        margin-bottom: 0.6rem;
      }
    }
  }

  & .btn_submit {
    margin-top: 1rem;
    margin-left: auto;
  }

  /* border-radius: 10px; */
  @media only screen and (max-width: 768px) {
    margin-top: 1rem;
    grid-row-start: 2;
  }
`;

const ContainerStyling = styled.div`
  & section {
    margin: 4rem 0;
  }
  & .title {
    text-transform: capitalize;
    color: var(--silver-color);
    font-size: 1.8rem;
  }
  & .introduction {
    text-align: center;

    & img {
      width: 200px;
      height: 200px;
      margin-left: auto;
      margin-right: auto;
      border-radius: 50%;
      padding: 2rem;
      background: #111;
      object-fit: contain;
      margin-top: 1rem;
    }
  }

  & .about {
    p {
      color: var(--silver-color);
      letter-spacing: 1px;
    }
  }
  & .portfolio {
    & .slider_container {
      margin-top: 2rem;

      & .slide {
        max-width: 1080px;
        height: 800px;
        display: flex !important;
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        @media only screen and (max-width: 768px) {
          height: 400px;
        }
      }
      img {
        width: 90%;
        height: 90%;
        object-fit: cover;
        border-radius: 40px;
        box-shadow: 13px -13px 0px -1px rgba(164, 165, 171, 0.75);
        -webkit-box-shadow: 13px -13px 0px -1px rgba(164, 165, 171, 0.75);
        -moz-box-shadow: 13px -13px 0px -1px rgba(164, 165, 171, 0.75);
      }
    }
  }

  & .contact {
    & .grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 3rem;
      @media only screen and (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
      }

      & ul {
        list-style: none;
        & li {
          text-transform: capitalize;
        }
      }
      & a {
        color: #111;
        text-decoration: none;
        text-transform: lowercase;
        &:hover {
          color: var(--orange-color);
        }
      }

      & input,
      textarea {
        border: 1px solid var(--orange-color);
        outline: none;
        padding: 4px 10px;
        margin-bottom: 10px;
        width: 100%;
        display: block;
      }
      & textarea {
        width: 100%;
        resize: none;
      }
      & .btn_submit {
        display: block;
        /* border: 1px solid var(--orange-color); */
        background: var(--orange-color);
        color: #fff;
        text-transform: lowercase;
        padding: 0.2rem 2rem;
        margin-left: auto;
        &:hover {
          opacity: 0.9;
        }
      }

      & .maps {
        height: 100%;
        border: none;
        width: 100%;
      }
    }
  }

  /* ////////////////  SERVICE SECTION   //////////////// */
  & .service .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0.5rem;
    & .box {
      height: 200px;
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
      padding: 1.5rem;
      /* margin-bottom: 10px;
      margin-left: 5px; */
      /* margin-right: 5px; */
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        padding: 0;
      }
      &:hover .box-container h4 {
        color: var(--orange-color);
      }

      & .box-container {
        width: 100%;
        height: 100%;
        background: #00000068;
        display: flex;
        align-items: center;
        justify-content: center;

        & h4 {
          color: #ffff;
          text-transform: uppercase;
          font-size: 1rem;
          transition: all 0.3s ease-in-out;
        }
      }
    }
    @media only screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media only screen and (max-width: 520px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }


  /*  //////////   service two exemple  ///////////// */
  & .service_two {
    & .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-gap: 10px;
      & .card-image {
        max-height: 240px;
      }
      & p {
        font-size: 1.2rem;
        text-transform: capitalize;
        letter-spacing: 2px;
        margin: 0;
      }

      @media only screen and (max-width:520px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }
  }




`;

const LandingStyling = styled.div`
  & .landing_overlay {
    background-image: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.37298669467787116) 0%
      ),
      url("/img/advertising/bg-images.jpeg");
    height: 700px;
    width: 100%;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    background-origin: content-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    padding-bottom: 3rem;

    & h1 {
      color: #fff;
      margin: 0;
      font-weight: 700;
      text-transform: uppercase;
      font-size: 1.8rem;
      margin-bottom: 2rem;
    }

    & .link1 {
      display: block;
      text-decoration: none;
      outline: none;
      border: none;
      border-radius: 40px;
      padding: 0.5rem;
      background: #fff;
      width: 160px;
      color: #fff;
      text-align: center;
      margin-bottom: 2rem;
      margin-left: 2rem !important;
      font-size: 1.3rem;
      cursor: pointer;
      background: var(--orange-color);

      &:hover {
        opacity: 0.9;
      }
    }
  }
`;

const CountryDropdownCustom = styled(CountryDropdown)`
  border: 3px solid var(--background-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  width: 100%;
  height: 2.5rem;
    border: 3px solid var(--background-color);
  }
  &:focus-visible {
    border: 3px solid var(--background-color);
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
  border: 3px solid var(--background-color);
  color: var(--slider-color);
  padding-left: 0.4rem;
  width: 100%;
  height: 2.5rem;
  &:focus {
    border: 3px solid var(--background-color);
  }
  &:focus-visible {
    border: 3px solid var(--background-color);
    outline: none;
  }
  @media only screen and (max-width: 768px) {
    height: 2.5rem;
  }
`;

export default AdvertisingProfileScreen;
