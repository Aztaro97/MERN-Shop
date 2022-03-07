import styled from "styled-components";

export const LandingStyling = styled.section`
  margin: 0 auto;

  & .landing_overlay {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    color: #fff;
    height: 500px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover !important;
    background-origin: content-box;
    object-fit: cover !important;
    width: 100%;
    &.bg_img1 {
      background: linear-gradient(0deg, #00000073 0%, rgba(0, 0, 0, 0.459) 0%),
        url("/img/ecommerce/bg_landing.png");
    }
    &.bg_img2 {
      background: linear-gradient(0deg, #00000073 0%, rgba(0, 0, 0, 0.459) 0%),
        url("/img/ecommerce/bg_landing2.png");
    }
    @media only screen and (max-width: 768px) {
      height: 300px;
    }

    & .content_overlay {
      max-width: 500px;
      padding: 20px;
      & h1 {
        color: #49c4d3;
        margin: 0;
        font-weight: 700;
        text-transform: uppercase;
        font-size: 1.3rem;
        word-wrap: break-word;
        & span {
          color: #c68787;
          display: block;
          text-transform: capitalize;
          font-size: 3.3rem;
          font-family: weFont, sans-serif;
        }
      }

      & p {
        color: #fff;
        margin: 5px 0;
        font-size: 1em;
      }

      & .btn_register {
        display: inline-block;
        text-decoration: none;
        outline: none;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        background: var(--orange-color);
        text-transform: capitalize;
        color: #fff;
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
