import React from "react";
import styled from "styled-components";

function TextAreaComponent({
  name,
  id,
  rows,
  cols,
  placeholder,
  style,
  required,
  onChange,
  value,
}) {
  return (
    <TextAreaStyling
      name={name}
      id={id}
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      style={style}
      required={required}
      onChange={onChange}
      value={value}
    />
  );
}

const TextAreaStyling = styled.textarea`
  border: 1px solid #ffffff34;
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: var(--dark-color);
  letter-spacing: 2px;
  padding: 5px 11px;
  font-size: 0.7rem;
  resize: none;

  &:focus {
    outline: none;
    background: var(--dark-color);
    color: var(--white-color);
  }
  &::placeholder {
    color: var(--silver-color);
  }
`;

export default TextAreaComponent;
