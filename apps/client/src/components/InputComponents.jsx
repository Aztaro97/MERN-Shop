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
  color: var(--dark-light-color);
  list-style: none;
  width: 100%;
  min-width: 0;
  padding: 5px 11px;
  font-size: 0.7rem;
  height: 2.5rem;
  border: 1px solid var(--dark-light-color);
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: transparent;
  letter-spacing: 2px;

  &:focus {
    outline: none;
    color: var(--white-color);
  }
  &:focus-visible {
    color: var(--dark-color);
  }
  &::placeholder {
    color: var(--dark-color);
  }

  @media only screen and (max-width: 900px) {
    /* height: 2rem; */
  }
`;
export default InputComponents;
