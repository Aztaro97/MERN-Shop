import styled from "styled-components";
import { Modal, Radio, Space } from "antd";

export const Border = styled.div`
  border: 3px solid var(--background-color);
  padding: 1rem 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;

  & hr {
    margin: 0.7rem 0;
    border: none;
    background: var(--silver-color);
    height: 1px;
  }

  & .row {
    display: flex;
    align-items: center;
    justify-content: space-between;

    & .price {
      display: flex;
      justify-content: space-between;
      width: 100%;
      & p {
        text-transform: uppercase;
        font-weight: 700;
      }
    }
    @media only screen and (max-width: 453px) {
      display: block;
    }

    & div {
      display: flex;
      align-items: center;
      & h2 {
        color: var(--orange-color);
        margin: 0;
        margin-right: 1rem;
        text-transform: uppercase;
        font-size: 1rem;
        font-weight: 700;
      }
      & p {
        display: flex;
        margin: 0;
        max-width: 300px;
      }
    }
    & .link {
      margin-left: auto;
      outline: none;
      border: none;
      background: transparent;
      color: var(--orange-color);
      &:hover {
        opacity: 0.9;
      }
    }
  }

  & .radio-button {
    & .radio {
      display: flex;
      align-items: center;
      padding-left: 1rem;
      & label {
        margin-bottom: 0;
        cursor: pointer;
        padding-left: 0.7rem;
        color: var(--silver-color);
      }
    }
  }
`;

export const SectionLeft = styled.form`
  padding: 2rem;
  border: 1px solid #ececec;
  /* border-radius: 10px; */

  & .section_shippindAdress {
    & > * {
      margin-bottom: 0.6rem;
    }
    & .inputRow {
      display: flex;
    }
    & .grid_input {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-gap: 0.4rem;
    }
  }

  & .section_billing {
    margin-top: 1rem;
  }

  & .section_Type_Payment,
  & .section_billing {
    & h2 {
      font-size: 1.2rem;
      color: var(--silver-color);
      text-transform: uppercase;
      font-weight: 700;
      /* margin-bottom: 0; */
    }
    & p {
      color: var(--silver-color);
      margin-bottom: 0.7rem;
    }
  }
  & .section_payment_info {
    & > * {
      margin-bottom: 0.6rem;
    }
    & h2 {
      font-size: 1.2rem;
      color: var(--silver-color);
      text-transform: uppercase;
      font-weight: 700;
      /* margin-bottom: 0; */
    }
  }

  & h1 {
    color: var(--orange-color);
    text-transform: uppercase;
  }
  & p {
    color: var(--silver-color);
    margin-bottom: 0;
  }
  & .btn {
    /* position: relative;
  top: 3rem; */
  }
  & .row {
    display: flex;
    /* justify-content: center; */
    align-items: center;

    & .link {
      color: var(--orange-color);
      /* margin-left: 2rem; */
    }
  }

  & .submition_btn {
    padding: 2rem 0.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    & .btn {
      padding: 0.5rem 0.6rem;
      font-size: 0.8rem;
      font-weight: 400;
      letter-spacing: 2px;
      &:hover {
        color: #fff;
      }
    }
    & .link_back {
      display: inline;
      text-decoration: none;
      &:hover {
        opacity: 0.9;
      }
    }
    @media only screen and (max-width: 768px) {
      padding: 2rem 0.5rem;
    }
  }
  & .link_back {
    color: var(--orange-color);
    margin-left: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    @media only screen and (max-width: 768px) {
      margin-left: 1rem;
    }
  }
  @media only screen and (max-width: 768px) {
    grid-row-start: 2;
  }
`;

export const ContainerCart = styled.div`
  background: var(--orange-color);
  padding: 2rem;

  & hr {
    border: none;
    outline: none;
    height: 0.7px;
    background: #fff;
  }
  & form {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 5px;
    margin: 1.4rem 0;

    & input {
      border: 1px solid #fff;
      outline: none;
      background: transparent;
      color: #fff;
      border-radius: 5px;
      padding: 0.3rem 1rem;
      min-width: 100px;
      height: 3rem;
    }
  }
  & .solde {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 1rem 0;

    & h1 {
      font-size: 1rem;
      font-weight: 700;
      text-transform: uppercase;
    }
    & h1:nth-child(2) {
      color: #fff;
    }
  }
  @media only screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;

export const Card = styled.div`
  display: flex;

  & .card__image {
    & img {
      width: 130px;
      height: 140px;
      border-radius: 10px;
      border: 1px solid var(--orange-color);
    }
    & .quantity {
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4rem;
      color: #fff;
      border-radius: 50%;
      background: #9fa1a1;
      margin: 0;
      max-width: 40px;
      height: 40px;
      position: relative;
      bottom: 9.7rem;
      left: 6.6rem;
      object-fit: cover;
      @media only screen and (max-width: 768px) {
        bottom: 11rem;
        left: 7.5rem;
      }
      @media only screen and (max-width: 430px) {
        bottom: 13rem;
        left: 9rem;
      }
    }
  }

  & .card__details {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin-top: 1rem;
    padding-left: 1.7rem;

    & h1 {
      font-size: 0.8rem;
      font-weight: 700;
    }
    & h1:nth-child(1) {
      /* margin-left: 1.7rem; */
    }
    & h1:nth-child(2) {
      color: #fff;
    }
    @media only screen and (max-width: 1000px) {
      display: block;
    }
  }
`;

export const Container = styled.main`
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 5rem 0 3rem 0;

  @media only screen and (max-width: 1030px) {
    padding: 2rem 2rem;
  }
`;

export const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & a {
    text-decoration: none;
    color: #000;
    font-weight: 700;
    position: relative;
    top: 1.4rem;
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.1rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 60% 40%;
  margin-bottom: 2rem;
  @media only screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

// /////////   RADIO BUTTON CUSTOM   ?////////////////////////////////
export const RadioB = styled(Radio)`
  /* background: #000; */
  padding-left: 1rem;
  color: var(--silver-color);

  & span:nth-child(2) {
    /* color: var(--orange-color); */
    font-weight: 700;
  }

  & .ant-radio {
    & .ant-radio-inner {
      border-color: var(--orange-color);
      width: 1.4rem;
      height: 1.4rem;
      border: 1px solid var(--orange-color);

      &:after {
        background-color: var(--orange-color);
        width: 0.9rem;
        height: 0.9rem;
      }
    }
  }

  & .ant-space {
    gap: 0;

    & .ant-radio-checked {
      border-color: var(--orange-color);
    }
  }
`;
