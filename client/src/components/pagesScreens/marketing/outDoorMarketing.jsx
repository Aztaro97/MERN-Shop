import React from "react";

import "./outMarketing.css"

function OutDoorMarketing() {
  return (
    <main>
      {/* <!-- Start outdoor marketing Section  --> */}
      <section className="outMarketing">
        {/* <!-- outdoor marketing top image  --> */}
        <div className="topImg">
          <div className="topLinks" style={{paddingTop:"2.5rem"}}>
            <a href="/marketing" className=" normalText weight-500">
              E-marketing
            </a>
            <a href="/out-marketing" className="normalText weight-500 active">
              Outdoor marketing
            </a>
          </div>
          <div className="imgCover">
            <img alt="" src="./img/outMarketing.png" />
          </div>
          {/* <!-- add DropdownMenu  --> */}
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
                  LED SCREEN
                </button>
                <div className="dropdown-menu" aria-labelledby="marketingDropDown">
                  <button className="dropdown-item" type="button">
                    LED SCREEN
                  </button>
                  <button className="dropdown-item" type="button">
                    MUPI
                  </button>
                  <button className="dropdown-item" type="button">
                    BILLBOARD
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

        <div className="exAdvs text-center  mt-4 mt-md-0">
          <div className="container">
            <div className="textContent mb-2  mb-md-4">
              <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                Type Of
              </p>
              <h2 className="largestTitle mainColor weight-700  text-uppercase">
                external advertisements
              </h2>
              <div className="customBorder"></div>
              <p className="mediumText grayBlueColor weight-400  mb-0">
                We provide you with a set of unmatched advertising media options
                for you to choose from outdoor street advertising display
                screens that suits your services and advertising budget
              </p>
            </div>
            <div className="row serRow justify-content-center mt-5">
              <div className="col col-sm-6 col-md-4">
                <a className="service" href="#ledScreen">
                  <img className="seoImg" src="./img/out1.png" alt="" />
                  <h3 className="largeText weight-500 my-2 text-center text-uppercase">
                    LED SCREEN
                  </h3>
                  <img className="arrowIcon" src="./img/blueAr.png" alt="" />
                </a>
              </div>
              <div className="col col-sm-6 col-md-4">
                <a className="service" href="#ledScreen2">
                  <img className="seoImg" src="./img/out2.png" alt="" />
                  <h3 className="largeText weight-500 my-2 text-center text-uppercase">
                    MUPI
                  </h3>
                  <img className="arrowIcon" src="./img/blueAr.png" alt=""/>
                </a>
              </div>
              <div className="col col-sm-6 col-md-4">
                <a className="service" href="#billboard">
                  <img className="seoImg" src="./img/out3.png" alt=""/>
                  <h3 className="largeText weight-500 my-2 text-center text-uppercase">
                    billboard
                  </h3>
                  <img className="arrowIcon" src="./img/blueAr.png" alt=""/>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="ledScreen" id="ledScreen">
          <div className="bgGrediant"> </div>
          <div className="row no-gutters">
            <div className="col-12 col-md-5">
              <div className="socialText">
                <img alt="" src="./img/outImg1.png" className="shape" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="textContent py-4   ">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  Be the attentionence
                </p>
                <h2 className="largestTitle secColor weight-700  text-uppercase">
                  Led Screen
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  Outdoor advertising display screens are advertisements for
                  products or services that are displayed on road advertisement
                  screens in the form of video or illuminated images (LED
                  screens), which are distributed on roadsides, main streets,
                  markets and squares in Kuwait, and the largest companies
                  resort to them where billboards are rented to ensure that
                  their ads reach a segment. A large number of customers at all
                  levels, and advertisements must be designed in an attractive
                  and prominent way, in order to draw the attention of
                  pedestrians, car and bus passengers
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ledScreen2" id="ledScreen2">
          <div className="bgGrediant"> </div>
          <div className="row no-gutters">
            <div className="col-12 col-md-5 order-md-2">
              <div className="socialText">
                <img alt="" src="./img/outImg2.png" className="shape" />
              </div>
            </div>
            <div className="col-12 col-md-7 col-md-1">
              <div className="textContent py-4   ">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  Be the attentionence
                </p>
                <h2 className="largestTitle secColor weight-700  text-uppercase">
                  Led Screen
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  Quality Makers Advertising Company offers you the opportunity
                  to display your products and company services to millions of
                  customers in an attractive way by displaying your products on
                  street advertising screens in Kuwait and billboards on the
                  roads where the advertising display screens are distributed in
                  the most crowded areas and streets in Kuwait to ensure that
                  the advertisement reaches Largest segment of customers as they
                  create new and attractive advertising spaces that can stop
                  people in their tracks.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="billboard" id="billboard">
          <div className="bgGrediant"> </div>
          <div className="row no-gutters">
            <div className="col-12 col-md-5">
              <div className="socialText">
                <img alt="" src="./img/outImg3.png" className="shape" />
              </div>
            </div>
            <div className="col-12 col-md-7">
              <div className="textContent py-4   ">
                <p className="mediumText thirdColor weight-400  text-uppercase mb-0">
                  Be the attentionence
                </p>
                <h2 className="largestTitle secColor weight-700  text-uppercase">
                  billboard
                </h2>
                <div className="customBorder"></div>
                <p className="mediumText grayBlueColor weight-400  mb-0">
                  The ads are installed on large advertising screens in highways
                  and main squares and at high altitude to be prominent and
                  clear to car and bus passengers and attract attention, as the
                  owners of various commercial activities want to take advantage
                  of the busy roads and streets. And display their ads on
                  billboards and illuminated, animated street billboards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default OutDoorMarketing;
