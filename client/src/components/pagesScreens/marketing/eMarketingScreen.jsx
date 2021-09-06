import React from 'react'

import "./emarketing.css"

function EMarketingScreen() {
    return (
        <main >
        {/* <!-- Start marketing Section  --> */}
        <section className="marketing">
          {/* <!-- marketing top image  --> */}
          <div className="topImg">
            <div className="topLinks" style={{paddingTop:"2.5rem"}}>
              <a href="/marketing" className="active normalText weight-500">
                E-marketing
              </a>
              <a href="/out-marketing" className="normalText weight-500">
                Outdoor marketing
              </a>
            </div>
            <div className="imgCover">
              <img alt="" src="./img/MarketingHead.png"  />
            </div>
            <div className="caption animate__animated">
              <span className="secColor weSpan ">We</span>
              <h2 className="largestTitle thirdColor weight-700 text-uppercase">
                Are The Best E-Marketing Companies In Dubai, UAE.
              </h2>
              <p className="whiteColor largeText weight-400">
                Our marketing strategies for getting your website publicized give
                effective results. there are no excuses, It's that simple.
              </p>
              <div className="marketingSelect">
                <div className="dropdown">
                  <button
                    className="btn  dropdown-toggle"
                    type="button"
                    id="marketingDropDown"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    SEO
                  </button>
                  <div className="dropdown-menu" aria-labelledby="marketingDropDown">
                    <button className="dropdown-item" type="button">
                      Google ads
                    </button>
                    <button className="dropdown-item" type="button">
                      Ads on facebook
                    </button>
                    <button className="dropdown-item" type="button">
                      Ads on instagram
                    </button>
                    <button className="dropdown-item" type="button">
                      Ads on linkin
                    </button>
                    <button className="dropdown-item" type="button">
                      Ads on youtube
                    </button>
                    <button className="dropdown-item" type="button">
                      More visits on my website
                    </button>
                    <button className="dropdown-item" type="button">
                      Sms
                    </button>
                    <button className="dropdown-item" type="button">
                      Email
                    </button>
                  </div>
                </div>
                <a
                  type="button"
                  className="btn mainBg grayColor btn-lg text-uppercase  text-uppercase"
                  href="#/"
                >
                  Try for free
                </a>
              </div>
            </div>
          </div>
  
          <div className="marServices text-center pb-4 mt-4 mt-md-0">
            <div className="container">
              <div className="textContent mb-2  mb-md-4">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  For You
                </p>
                <h2 className="largestTitle mainColor weight-700  text-uppercase">
                  Our E-marketing Services
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  is simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book
                </p>
              </div>
              <div className="row serRow justify-content-center">
                <div className="col col-sm-6 col-md-4">
                  <a className="service" href="#seoContent">
                    <img alt="" className="seoImg" src="./img/m1.png" />
                    <h3 className="largeText weight-500 mainColor my-2">SEO</h3>
                    <p className="  weight-400 grayBlueColor">
                      is simply dummy text of the printing and type setting
                      industry
                    </p>
                    <img alt="" className="arrowIcon" src="./img/blueAr.png" />
                  </a>
                </div>
                <div className="col col-sm-6 col-md-4">
                  <a className="service" href="#googleAdsContent">
                    <img alt="" className="seoImg" src="./img/m2.png" />
                    <h3 className="largeText weight-500 mainColor my-2">
                      GOOGLE ADS
                    </h3>
                    <p className="  weight-400 grayBlueColor">
                      is simply dummy text of the printing and type setting
                      industry
                    </p>
                    <img alt="" className="arrowIcon" src="./img/blueAr.png" />
                  </a>
                </div>
                <div className="col col-sm-6 col-md-4">
                  <a className="service" href="#socialMediaContent">
                    <img alt="" className="seoImg" src="./img/m3.png" />
                    <h3 className="largeText weight-500 mainColor my-2">
                      SOCIAL MEDIA
                    </h3>
                    <p className="  weight-400 grayBlueColor">
                      is simply dummy text of the printing and type setting
                      industry
                    </p>
                    <img alt="" className="arrowIcon" src="./img/blueAr.png" />
                  </a>
                </div>
                <div className="col col-sm-6 col-md-4">
                  <a className="service" href="#smsContent">
                    <img alt="" className="seoImg" src="./img/m4.png" />
                    <h3 className="largeText weight-500 mainColor my-2">SMS</h3>
                    <p className="  weight-400 grayBlueColor">
                      is simply dummy text of the printing and type setting
                      industry
                    </p>
                    <img alt="" className="arrowIcon" src="./img/blueAr.png" />
                  </a>
                </div>
                <div className="col col-sm-6 col-md-4">
                  <a className="service" href="#emailContent">
                    <img alt="" className="seoImg" src="./img/m5.png" />
                    <h3 className="largeText weight-500 mainColor my-2">E-MAIL</h3>
                    <p className="  weight-400 grayBlueColor">
                      is simply dummy text of the printing and type setting
                      industry
                    </p>
                    <img alt="" className="arrowIcon" src="./img/blueAr.png" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Social Media container  --> */}
          <div className="socialMedia" id="socialMediaContent">
            <div className="bgGrediant"> </div>
            <div className="row no-gutters">
              <div className="col-12 col-md-5">
                <div className="socialText">
                  <img alt="" src="./img/shape1.png" className="shape" />
                  <div>
                    <p className="thirdColor mediumText weight-400 text-uppercase mb-0 mb-lg-1">
                      Be The Attentionence
                    </p>
                    <h2 className="secColor largestTitle weight-600  text-uppercase mb-0 mb-lg-2">
                      Social Media
                    </h2>
                    <div className="customBorder"></div>
                    <p className="weight-400 normalText grayBlueColor">
                      Increase your company's monthly leads by 327% with our
                      expert on social media promotion
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-7">
                <div className="popSocial">
                  <p className="largeText weight-500 thirdColor text-uppercase ">
                    Most
                  </p>
                  <p className="largeTitle weight-600 whiteColor text-uppercase">
                    Popular
                  </p>
                  <a className="btn text-uppercase" type="button" href="#/">
                    And More
                  </a>
                  <div className="socials">
                    <div className="item">
                      <a href="#/" className="btn" type="button">
                        <img alt="" src="./img/s1.png" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#/" className="btn" type="button">
                        <img alt="" src="./img/s2.png" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#/" className="btn" type="button">
                        <img alt="" src="./img/s3.png" />
                      </a>
                    </div>
                    <div className="item">
                      <a href="#/" className="btn" type="button">
                        <img alt="" src="./img/s4.png" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Google Ads Container  --> */}
          <div
            className="increaseCustomers pt-3 pt-md-5 pb-md-3"
            id="googleAdsContent"
          >
            <div className="container">
              <div className="textContent mb-4 text-center">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  Increase yor custmoer
                </p>
                <h2 className="largestTitle secColor weight-700  text-uppercase">
                  Google ads
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  Increase your chances of meeting new customers and boost your
                  sales only in 24 hours with Google Ads
                </p>
              </div>
              <div className="adsSlider">
                <div className="myContent">
                  <div className="adsCarousel">
                    <div className="a">
                      <div className="item">
                        <div className="row">
                          <div className="col col-4">
                            <img alt="" src="./img/g1.png" />
                          </div>
                          <div className="col col-8">
                            <p>
                              Our experienced Google Ads management team will work
                              with you to develop the most appropriate Google ads
                              strategy for your company, while ensuring that your
                              website appears at the top of Google's search engine
                              results pages. Thus, thanks to our practical service
                              and personalized approach, we can help you get the
                              most out of your thriving digital ad posting.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="b">
                      <div className="item">
                        <div className="row">
                          <div className="col col-4">
                            <img alt="" src="./img/g2.png" />
                          </div>
                          <div className="col col-8">
                            <p>
                              Our experienced Google Ads management team will work
                              with you to develop the most appropriate Google ads
                              strategy for your company, while ensuring that your
                              website appears at the top of Google's search engine
                              results pages. Thus, thanks to our practical service
                              and personalized approach, we can help you get the
                              most out of your thriving digital ad posting.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="c">
                      <div className="item">
                        <div className="row">
                          <div className="col col-4">
                            <img alt="" src="./img/g3.png" />
                          </div>
                          <div className="col col-8">
                            <p>
                              Our experienced Google Ads management team will work
                              with you to develop the most appropriate Google ads
                              strategy for your company, while ensuring that your
                              website appears at the top of Google's search engine
                              results pages. Thus, thanks to our practical service
                              and personalized approach, we can help you get the
                              most out of your thriving digital ad posting.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="next">
                  <img alt="" src="./img/blueAr.png" />
                </div>
                <div className="prev">
                  <img alt="" src="./img/blueAr.png" />
                </div>
              </div>
              <div className="row ourAdsRow">
                <div className="col-12 col-md-5">
                  <img alt="" className="personImg" src="./img/person.png" />
                </div>
                <div className="col-12 col-md-7">
                  <div className="innerText">
                    <h3 className="mediumText thirdColor weight-400 text-uppercase mb-1">
                      Our google ads
                    </h3>
                    <p className="mediumText secColor weight-400 text-uppercase my-0">
                      Excellent service
                    </p>
                    <div className="customBorder"></div>
                    <p className="mediumText grayBlueColor weight-400  mb-1">
                      Our per click services that we provide include
                    </p>
                    <ul className="adsServices">
                      <li className="normalText">Google ads</li>
                      <li className="normalText">Show Google ads</li>
                      <li className="normalText">Google Marketing</li>
                      <li className="normalText">Google remarketing</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Seo Container  --> */}
          <div className="improveSite pt-5  " id="seoContent">
            <div className="container">
              <div className="textContent mb-4 text-center">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  Improve your site
                </p>
                <h2 className="largestTitle secColor weight-700  text-uppercase">
                  SEO
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  by useing Search engine optimization You will be able to improve
                  your site in search engines within 90 days
                </p>
              </div>
              <div id="seo-slider" className="owl-carousel">
                {/* <!--  repeating carousel item  --> */}
                <div className="slide">
                  <div className="innerContent p-4 p-sm-2 p-lg-4 ">
                    <img alt="" src="./img/seo1.png" />
                    <div className="customBorder"></div>
                    <p className="normalText weight-400  mb-0">
                      Well, do you want to get effective results related to
                      optimizing your site? <br /> Work with people who know how
                      to do the job, partner with United SEO. <br /> With targeted
                      SEO services, we will bring your services to the eyes of
                      your customers; In order for you to get better commercial
                      traffic.
                    </p>
                  </div>
                </div>
                {/* <!--  repeating carousel item  --> */}
                <div className="slide">
                  <div className="innerContent p-4 p-sm-2 p-lg-4 ">
                    <img alt="" src="./img/seo2.png" />
                    <div className="customBorder"></div>
                    <p className="normalText weight-400  mb-0">
                      We work to provide everything related to SEO improvement, by
                      publishing your website on search engines through the
                      dedicated SEO team in our company, which allows us to fully
                      control the quality of the process and service, starting
                      from the studies that we conduct until the moment of
                      preparing the reports.
                    </p>
                  </div>
                </div>
                {/* <!--  repeating carousel item  --> */}
                <div className="slide">
                  <div className="innerContent p-4 p-sm-2 p-lg-4 ">
                    <img alt="" src="./img/seo3.png" />
                    <div className="customBorder"></div>
                    <p className="normalText weight-400  mb-0">
                      At the core of every campaign related to the deployment of
                      the site in all search engines is the reliance on a set of
                      keywords that are chosen in a strategic manner; This is in
                      order to bring commercial traffic to customers naturally and
                      smoothly through Google results.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Sms Message Container  --> */}
          <div className="viaText py-3 py-lg-5" id="smsContent">
            <div className="container">
              <div className="textContent mb-4 text-center">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  Marketing
                </p>
                <h2 className="largestTitle mainColor weight-700  text-uppercase">
                  Via text messages
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  Marketing service through text messages is considered one of the
                  traditional methods of marketing, but one of the most powerful
                  ways to reach your customers <br /> SMS Marketing Service also
                  helps you to promote your product / business. <br /> In addition
                  to the reminder system for your customers and the API service
                  that enables you to link the accounting system, employee
                  management program, clients, <br /> Or even your own mobile
                  application, to be reminded of appointments, payments or send a
                  verification code for the registration process
                </p>
              </div>
              <div className="text-center">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-2">
                  Features
                </p>
              </div>
              <div className="row featuresRow justify-content-center">
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via1.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Online System
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via2.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Ease of use
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via3.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Multiple languages for the message
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via4.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Register the sender's identity
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via5.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Direct reports to send
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via6.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Best price guarantee
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via7.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Schedule the date sent
                    </h3>
                  </a>
                </div>
                <div className="col col-6 col-sm-4 col-md-3">
                  <a href="#/" className="feature">
                    <img alt="" src="./img/via8.png" />
                    <h3 className="largeText weight-500  text-uppercase">
                      Special accounts for suppliers
                    </h3>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- cEmail Message Container  --> */}
          <div className="exViaText" id="emailContent">
            <div className="textContent mb-3 text-center">
              <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                Marketing
              </p>
              <h2 className="largestTitle mainColor weight-700  text-uppercase">
                Via text messages
              </h2>
              <div className="customBorder"></div>
              <p className="mediumText whiteColor weight-400 mb-2 mb-lg-4">
                Email marketing campaigns are characterized by many
                characteristics that are not provided by most other advertising
                methods, which makes them a distinctive and important advertising
                medium, especially if the announcement is for a product or service
                with many details or in the event that a group of services or
                products need to be advertised in an advertising message.
              </p>
              <p className="mediumText whiteColor weight-400  mb-0">
                one, as it gives the advertiser an unlimited space to put forward
                all the details about the advertised service or product, whether
                with textual or graphic content or both, in addition to the
                possibility of directing the future of advertising to a specific
                web page to see more details and information about the product or
                service or even about the facility presented The service, and in
                short addresses we explain some of the advantages of the service
              </p>
            </div>
            <div className="row no-gutters">
              <div className="col-12 col-sm-5 ">
                <div className="imgCover">
                  <img alt="" src="./img/woman.png" />
                </div>
              </div>
              <div className="col-12 col-sm-7">
                <div className="textContent pl-4 mt-md-3 mt-xl-5">
                  <ul className="viaList pt-3">
                    <li>
                      <p className="mediumText ">Unlimited ad space </p>
                    </li>
                    <li>
                      <p className="mediumText">
                        It provides the ability to return the message receiver to
                        the advertisement at any time and from anywhere
                      </p>
                    </li>
                    <li>
                      <p className="mediumText">
                        The possibility of determining the target group to receive
                        the advertising message{" "}
                      </p>
                    </li>
                    <li>
                      <p className="mediumText">
                        Activate the website of the establishment in the event
                        that the recipient of the message is directed to him
                      </p>
                    </li>
                    <li>
                      <p className="mediumText">
                        The low cost of the advertising campaign compared to other
                        advertising means
                      </p>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
}

export default EMarketingScreen
