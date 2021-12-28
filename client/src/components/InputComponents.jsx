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
  required,
  className,
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
      className={className}
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
  padding: 5px 11px;
  font-size: 0.7rem;
  height: 2.5rem;
  border: 1px solid #ffffff34;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: var(--dark-color);
  letter-spacing: 2px;

  &:focus {
    outline: none;
    background: var(--dark-color);
    color: var(--white-color);
  }
  &:focus-visible {
    color: var(--silver-color);
    background: var(--dark-color);
  }

  @media only screen and (max-width: 900px) {
    /* height: 2rem; */
  }
`;
export default InputComponents;
