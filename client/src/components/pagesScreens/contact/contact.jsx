import React from "react";
import styled from "styled-components"

import "./contact.css";

function Contact() {
  return (
    <Container>
      <section class="homeContact">
        <div class="container">
          <div class="row">
            <div class="col-12 col-md-6  col-lg-5 p-3 pl-5 order-12 order-md-1">
              <h3 class="secColor weight-500 mediumTitle">Visit us</h3>
              <p class="grayBlueColor weight-400 normalText">
                If you want to visit us <br /> talk about a project or <br />{" "}
                just have a coffee
              </p>
              <p class="grayBlueColor weight-500 mediumText mt-3">
                Near 41B Street
                <br /> Al Rashidiya - Dubai
              </p>
              <p class="grayBlueColor weight-500 mediumText mt-3 mb-0">
                +97142839983
              </p>
              <p class="grayBlueColor weight-500 mediumText ">+971504366696</p>
              {/* <!-- follow us div  --> */}
              <div class="followUs mt-4">
                <h3 class="secColor weight-500 mediumTitle">Follow us</h3>
                <div class="group">
                  {/* <!-- Repeating link  --> */}
                  <a href="facebook.com" class="btn" target="__blank">
                    <i class="fab fa-tumblr-square grayBlueColor"></i>
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a
                    href="https://api.whatsapp.com/send?phone=+971567957775"
                    class="btn"
                    target="__blank"
                  >
                    <i class="fab fa-whatsapp-square grayBlueColor"></i>
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a
                    href="https://www.instagram.com/au_79_code/"
                    class="btn"
                    target="__blank"
                  >
                    <i class="fab fa-instagram-square grayBlueColor"></i>
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a
                    href="https://twitter.com/79_code"
                    class="btn"
                    target="__blank"
                  >
                    <i class="fab fa-twitter-square grayBlueColor"></i>
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a
                    href="https://www.snapchat.com/add/au79code"
                    class="btn"
                    target="__blank"
                  >
                    <i class="fab fa-snapchat-square grayBlueColor"></i>
                  </a>
                  {/* <!-- Repeating link  --> */}
                  <a
                    href="https://www.facebook.com/pages/category/Marketing-Agency/AU-79-CODE-103505425005079/"
                    class="btn"
                    target="__blank"
                  >
                    <i class="fab fa-facebook-square grayBlueColor"></i>
                  </a>
                </div>
              </div>
              <div class="mt-4">
                <h3 class="secColor weight-500 mediumTitle">Contact US</h3>
                <p class="grayBlueColor weight-400 normalText">
                  You Have a question
                  <br /> a request for information, a project{" "}
                </p>
                <a href="#" class="btn sec-outline-btn">
                  WRITE US
                </a>
                <form
                  class="form_contact"
                  action="https://formsubmit.co/info@au79code.com"
                  method="POST"
                >
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="FULL NAME"
                    required
                  />
                  <input
                    type="mail"
                    name="email"
                    id="email"
                    placeholder="EMAIL"
                    required
                  />
                  <textarea
                    name="message"
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="MESSAGE"
                  ></textarea>
                  <button type="submit">send</button>
                </form>
              </div>
            </div>
            <div class="col-12 col-md-6  col-lg-7  order-1 order-md-12">
              {/* <!-- link for going to external map  --> */}
              
              <a className="mapContent" href="https://goo.gl/maps/YApX2Y5EJPLkzmgA6"  target="_blank" alt="" rel="noreferrer">
                {/* <img class="mapImg" src="./img/map.png" /> */}
                <iframe title="AU79CODE Location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7218.432955814597!2d55.385108200000005!3d25.229632700000014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sae!4v1629292534309!5m2!1sen!2sae" width="600" height="450"  allowfullscreen="" loading="lazy"></iframe>
                <div class="corners">
                  <div class="corner"></div>
                  <div class="corner"></div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
}

const Container = styled.div`
    margin-top: 3rem;
`

export default Contact;
