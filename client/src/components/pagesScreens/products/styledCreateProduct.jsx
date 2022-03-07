import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

export const Header = styled.div`
  height: 5rem;
  width: 100%;
  padding: 0 1rem;

  & a {
    text-decoration: none;
    color: var(--silver-color);
    padding: 5px 10px;
    border: 1px solid var(--silver-color);
    font-weight: 700;
    position: relative;
    top: 1.4rem;
    &:hover {
      opacity: 0.8;
    }
  }

  & h2 {
    text-align: center;
    color: #aaaaac;
    margin-bottom: 0;
    font-weight: 700;
    font-size: 1.5rem;
  }
`;
export const MainProductForm = styled.form`
  padding: 1rem;
`;
export const Col = styled.div`
  border: 1px solid #cccbcb;
  border-radius: 10px;
  padding: 1.25rem;
`;
export const Card = styled.div`
  border: 1px solid #ececec40;
  border-radius: 5px;
  padding: 1.25rem;
  margin-bottom: 1rem;

  & .variant_add {
    display: flex;
    /* justify-content: space-between; */
    align-items: center;
    & .input {
      color: var(--silver-color);
      list-style: none;
      width: 200px;
      min-width: 0;
      padding: 6px 11px;
      color: var(--silver-color);
      font-size: 0.8rem;
      height: 2rem;
      border: 3px solid var(--background-color);
      outline: none;
      transition: all 0.3s;
      background: #fff;
    }
    & .add_btn {
      font-size: 0.9rem;
      border: none;
      background: var(--orange-color);
      color: #fff;
      outline: none;
      padding: 5px 1rem;
      /* border-radius: 0 10px 10px 0; */
      text-transform: uppercase;
    }
  }
`;

export const Row = styled.div`
  margin-bottom: 1rem;
`;
export const Label = styled.label`
  font-weight: 700;
  font-size: 0.75rem;
  text-transform: uppercase;
  display: block;
  /* margin-top: 1rem; */
  margin-bottom: 10px;
  color: var(--silver-color);
  letter-spacing: 1px;
`;

// export const TextArea = styled.textarea`
//   border-radius: 5px;
//   border: 1px solid #c58787;
//   outline: none;
//   /* height: 5rem; */
//   width: 100%;
//   padding-left: 0.4rem;
//   padding-top: 0.5rem;
//   color: #aaaaac;

//   &:focus {
//     color: #000;
//     box-shadow: 0 0 0 2px #c58787;
//     border-color: #c58787;
//   }
// `;
export const RowCheck = styled.div`
  display: flex;
  align-items: center;
  padding: 0.3rem 0;
`;

export const GridRow = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  & .title {
    color: var(--silver-color);
  }
  & p {
    color: var(--silver-color);
    margin-bottom: 0.5rem;
    font-size: 0.7rem;
    text-transform: uppercase;
  }
`;
export const Column = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
  margin-top: 1rem;
  color: #aaaaac;
`;
export const LinkStyling = styled(Link)`
  text-decoration: none;
  font-weight: 700;
  color: #aaaaac;
  text-align: center;
  width: 100%;
  display: block;
  font-size: 0.8rem;
  margin-top: 0.7rem;
  &:hover {
    text-decoration: none;
    color: var(--orange-color);
  }
`;
export const Drop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #aaaaac;
  text-transform: uppercase;
  font-size: 0.9rem;

  & .icons {
    color: #c58787;
    cursor: pointer;
  }
`;

export const Form = styled.form``;

export const UploadIcon = styled.div`
  width: 100%;
  height: 100%;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--orange-color);
`;

export const Ul = styled.ul`
  list-style: none;
  padding-top: 1rem;
  padding-left: 0.7rem;
  display: flex;

  & li {
    display: flex;
    margin-left: 5px;
    background: #fff;
    align-items: center;
    border: 0.5px solid var(--orange-color);
    padding: 2px 5px;

    & p {
      text-transform: capitalize;
      color: var(--orange-color);
      font-weight: 700;
      margin-bottom: 0;
      margin-right: 5px;
    }

    & .delete_icon {
      color: var(--silver-color);
      cursor: pointer;
      &:hover {
        color: #9c1717;
      }
    }
  }
`;

export const Container = styled.div`
  margin: 2rem 0;
  padding: 2rem 0;
  background: var(--bg-color);
`;
