import styled from "styled-components";

export const LandingStyling = styled.div`
  margin: 0 auto;
  /* overflow-x: hidden; */
  & .landing_overlay {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    color: #fff;
    height: 600px;
    cursor: pointer;
    @media only screen and (max-width: 768px) {
      height: 200px;
    }

    & img {
      background: linear-gradient(
        0deg,
        rgba(0, 0, 0, 1) 0%,
        rgba(0, 0, 0, 0.37298669467787116) 0%
      );
      background-repeat: no-repeat;
      background-position: center;
      background-size: contain;
      background-origin: content-box;
      /* object-fit: contain; */
      height: 100%;
      width: 100%;
    }
  }

  /* //////////  Slider Customer Arrows */

  .slick-prev {
    /* left: -52px !important; */
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
    @media only screen and (max-width: 756px) {
      /* left: ${({ currentLang }) =>
        currentLang === "en" ? "24rem" : "0"}; */
    }
  }
`;
