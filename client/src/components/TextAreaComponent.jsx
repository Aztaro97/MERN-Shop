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
    />
  );
}

const TextAreaStyling = styled.textarea`
  border: 2px solid var(--background-color);
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: #fff;
  letter-spacing: 2px;
  padding: 5px 11px;
  font-size: 0.7rem;
  resize: none;

  &:focus {
    /* border-color: var(--orange-color); */
    /* border-right-width: 0.3px !important; */
    outline: none;
    box-shadow: 0 0 0 0.5px var(--background-color);
    background: #fff;
  }
`;

export default TextAreaComponent;
