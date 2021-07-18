import React from "react";
import styled from "styled-components";

function InputRadio({ value, name, checked, onChange }) {
  return <Input type="radio" name={name} value={value} checked={checked} onChange={onChange} />
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
    margin-right: 5px;
  }
  &:checked {
	background-color: var(--orange-color);
  padding: 3px;

}
`;

export default InputRadio;
