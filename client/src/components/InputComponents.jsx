import React from "react";
import styled from "styled-components";

function InputComponents({
  type,
  name,
  placeholder,
  id,
  value,
  onChange,
  style,
  required
}) {
  return (
    <Input
      type={type}
      id={id}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={style}
      required={required}
    />
  );
}

const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  color: var(--silver-color);
  list-style: none;
  width: 100%;
  min-width: 0;
  padding: 6px 11px;
  color: var(--silver-color);
  font-size: 0.8rem;
  height: 3rem;
  border: 3px solid var(--background-color);
  outline: none;
  border-radius: 10px;
  transition: all 0.3s;
  background: #fff;
  letter-spacing: 2px;

  &:focus {
    border-color: var(--orange-color);
    border-right-width: 0.3px !important;
    outline: none;
    box-shadow: 0 0 0 0.5px var(--background-color);
    background: #fff;
  }

  @media only screen and (max-width: 900px) {
    /* height: 2rem; */
  }
`;
export default InputComponents;
