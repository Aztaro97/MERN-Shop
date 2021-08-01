import React from "react";
import styled from "styled-components";

function InputRadio({ value, name, id, checked ,onChange, onClick}) {
  return (
    <Input
      type="radio"
      name={name}
      value={value}
      id={id}
      checked={checked}
      onClick={onClick}
      onChange={onChange}
    />
  );
}

const Input = styled.input`
  & {
    appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid var(--orange-color);
    border-radius: 50%;
    background-clip: content-box;
    padding: 3px;
    padding-right: 5px;
    cursor: pointer;
  }
  &:checked {
    background-color: var(--orange-color);
    padding: 3px;
  }
`;

export default InputRadio;
