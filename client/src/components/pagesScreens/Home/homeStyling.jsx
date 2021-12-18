import styled from "styled-components";

export const MarketingCardStyling = styled.div`
  padding: 40px 20px;
  color: #000;
  & .title {
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.4rem !important;
    color: #fff !important;
  }
  & .card_container {
    text-align: center;
    & .card_item {
      background: var(--dark-light-color);
      /* border: 1px solid #00000032; */
      border-radius: 10px;
      max-width: 200px;
      height: 150px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      margin: auto;
      padding: 10px;
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      &:hover {
        box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      }
      & .icon {
        color: var(--silver-color);
        font-size: 2.5rem;
        margin-bottom: 10px;
      }
      & .card_title {
        font-size: 1rem;
        font-weight: 700;
        margin: 0;
        color: var(--silver-color);
      }
    }
  }
`;

export const SectionStyling = styled.section`
  /* margin: 80px 0; */
  padding: 100px 40px;
  & .title {
    font-weight: 700;
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 20px;
    color: #fff;
  }
  & .sub_title {
    font-weight: 700;
    font-size: 1.2rem;
    letter-spacing: 1px;
    color: var(--silver-color);
  }
  & .list_item {
    list-style: none;
    font-weight: 700;
    color: var(--silver-color);
    & li::before {
      content: "• ";
      color: var(--orange-color);
      font-weight: bold;
      display: inline-block;
      width: 1em;
      margin-left: -1em;
    }
  }
  & .para {
    margin: auto;
    padding: 10px 0;
    letter-spacing: 1px;
    color: var(--silver-color);
  }
  & .circle_container {
    display: flex;
    justify-content: end;

    & .circle {
      width: 350px;
      height: 350px;
      /* margin-left: auto; */
      background: var(--orange-color);
      border-radius: 50%;
      @media only screen and (max-width: 500px) {
        width: 300px;
        height: 300px;
        & img {
          /* display: none; */
        }
      }
      & img {
        /* width: 100%; */
        height: 300px;
        position: relative;
      }
    }
  }

  /* //////////////////  /////////////// */
  & .second_row {
    margin: 20px 0;
    & .card_large_container {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      & .large_title {
        text-align: center;
        color: #ecececc3;
        transform: rotate(180deg);
        font-size: 3rem;
        writing-mode: vertical-rl;
        text-transform: uppercase;
        letter-spacing: 5px;
        font-weight: 700;
        width: 100%;
        background: var(--orange-color);
        /* background: transparent; */
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 90px 0;
        @media only screen and (max-width: 768px) {
          writing-mode: horizontal-tb;
          transform: rotate(0deg);
          padding: 10px 0;
          font-size: 2.5rem;
        }
      }
    }
    & .card_container {
      background: #ececec;
      padding: 30px;
      & .large_img {
        max-width: 300px;
        height: 400px;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
          height: 200px;
        }
      }
      & .medium_container {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        & .medium_img {
          max-width: 300px;
          height: 190px;
          object-fit: cover;
        }
        @media only screen and (max-width: 768px) {
          flex-direction: row;
          & .medium_img {
            height: 200px;
          }
        }
      }
      & .small_img {
        max-width: 300px !important;
        height: 100px;
        object-fit: cover;
        @media only screen and (max-width: 768px) {
          height: 200px;
        }
      }
      @media only screen and (max-width: 768px) {
        padding: 10px 5px;
      }
    }
  }

  @media only screen and (max-width: 1000px) {
    padding: 40px 10px;
  }
`;

export const BannerStyling = styled.section`
  max-width: var(--max-width);
  margin: 0 auto;

  & .landing_overlay {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    color: #fff;
    height: 400px;
    background-repeat: no-repeat !important;
    background-position: center !important;
    background-size: cover !important;
    background-origin: content-box !important;
    width: 100%;
    &.bg_img1 {
      background: ${({ data }) =>
        data
          ? `radial-gradient(circle, rgba(2,0,36,0.4962359943977591) 0%, rgba(0,0,0,0.896796218487395) 81%),
        url(${data[0].url})`
          : null};
    }
    &.bg_img2 {
      background: ${({ data }) =>
        data
          ? `radial-gradient(circle, rgba(2,0,36,0.4962359943977591) 0%, rgba(0,0,0,0.896796218487395) 81%),
        url(${data[1].url})`
          : null};
    }
    &.bg_img3 {
      background: ${({ data }) =>
        data
          ? `radial-gradient(circle, rgba(2,0,36,0.4962359943977591) 0%, rgba(0,0,0,0.896796218487395) 81%),
        url(${data[2].url})`
          : null};
    }
    &.bg_img4 {
      background: ${({ data }) =>
        data
          ? `radial-gradient(circle, rgba(2,0,36,0.4962359943977591) 0%, rgba(0,0,0,0.896796218487395) 81%),
        url(${data[3].url})`
          : null};
    }

    & #myVideo {
      position: fixed;
      right: 0;
      bottom: 0;
      min-width: 100%;
      min-height: 100%;
    }

    @media only screen and (max-width: 768px) {
      height: 300px;
    }

    & .content_overlay {
      max-width: 500px;
      padding: 20px;
      & h1 {
        color: #fff;
        margin: 0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.3rem;
        word-wrap: break-word;
      }

      & p {
        color: #fff;
        margin: 5px 0;
        font-size: 1em;
      }

      & .btn_banner {
        display: inline-block;
        text-decoration: none;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 5px 20px;
        background: #fff;
        text-transform: uppercase !important;
        color: #333;
        text-align: center;
        letter-spacing: 1px;
        margin: 10px 0;
        font-size: 1rem;
        cursor: pointer;
        &:hover {
          opacity: 0.9;
        }
      }
    }
  }

  /* //////////  Slider Customer Arrows */

  .slick-prev {
    z-index: 2 !important;
  }

  .slick-next:before,
  .slick-prev:before {
    content: "" !important;
    position: relative;
  }
  .slick-next .next-slick-arrow,
  .prev-slick-arrow {
    color: #fff;
    font-size: 30px;
    position: absolute;
    background: #8585859e !important;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 768px) {
      font-size: 30px;
      width: 40px;
      height: 40px;
    }
    @media only screen and (max-width: 540px) {
      font-size: 20px;
    }
  }
  .slick-next .next-slick-arrow {
    right: ${({ currentLang }) =>
      currentLang === "en" ? "1rem" : "-4rem"} !important;
  }
  .prev-slick-arrow {
    left: ${({ currentLang }) =>
      currentLang === "en" ? "3rem" : "-4rem"} !important;
  }

  .slick-next {
    right: ${({ currentLang }) => (currentLang === "en" ? "0" : "0")};
    left: ${({ currentLang }) => (currentLang === "en" ? "auto" : "0")};
  }
`;

export const ProgrammingCardStyling = styled.section`
  background: transparent;
  padding: 20px;
  margin: 30px 0;
  & .service_card {
    padding: 20px;
    border-radius: 10px;
    background-color: var(--dark-color);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    text-align: center;
    cursor: pointer;
    height: 200px;
    transition: all 0.3s ease;
    & .service_card_icon {
      font-size: 40px;
      color: var(--silver-color);
      margin-bottom: 10px;
    }
    & .service_card_title {
      font-size: 20px;
      font-weight: bold;
      margin-bottom: 10px;
      text-transform: capitalize;
      color: var(--silver-color);
    }
    & p {
      font-size: 14px;
      line-height: 1.5;
      color: var(--silver-color);
    }
    & .card_content {
      color: var(--silver-color);
    }

    &.first_card {
      text-align: start;
      box-shadow: none !important;
      & .service_card_title {
        /* color: #333333d5; */
        letter-spacing: 1px;
      }
      & p {
        color: var(--silver-color);
      }
    }
    &:hover {
      transform: translateY(-7px);
    }
  }
`;

export const NavStyling = styled.section`
  /* margin: 20px 0; */
  padding: 40px 40px;
  background: var(--dark-color);
  & .title {
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: #fff;
  }
  & .nav_item {
    max-width: 150px;
    height: 130px;
    padding: 5px;
    background: var(--dark-light-color);
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease-in-out;
    text-decoration: none;
    &:hover {
      box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
      text-decoration: none;
    }
    & .nav_icon {
      font-size: 2.5rem;
      /* color: var(--orange-color); */
      color: var(--silver-color);
      margin-bottom: 10px;
    }
    & .nav_title {
      /* color: var(--orange-color); */
      color: var(--silver-color);
      text-transform: uppercase;
      margin: 0;
      font-size: 1rem;
      letter-spacing: 1px;
      font-weight: 700;
      text-align: center;
    }
  }
  @media only screen and (max-width: 768px) {
    padding: 40px 10px;
  }
`;

export const OurClientStyling = styled.section`
  padding: 20px 0;
  max-width: 800px;
  margin: auto;

  /* background: var(--dark-color); */
  & .title {
    font-weight: 700;
    text-align: center;
    text-transform: uppercase;
    font-size: 1.8rem;
    margin-bottom: 20px;
    color: var(--white-color);
  }
  & .slider {
    & .box {
      padding: 20px 0;
      & img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin: auto;
      }
    }
  }
`;
