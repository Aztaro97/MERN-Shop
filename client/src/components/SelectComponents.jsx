import React, { useState } from "react";
// import { Select } from "antd";
import styled from "styled-components";

// const { Option } = Select;

function SelectCOmponents({
  value,
  options,
  placeholder,
  style,
  name,
  id,
  className,
  onChange,
  required,
}) {
  return (
    <SelectE
      required={required}
      name={name}
      id={id}
      style={style}
      className={className}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
    >
      {options && options.length > 0
        ? options.map((elem) => {
            return <OptionE value={elem.value}>{elem.title}</OptionE>;
          })
        : null}
    </SelectE>
  );
}

const SelectE = styled.select`
  text-transform: uppercase;
  color: var(--dark-color);
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: transparent !important;
  width: 100%;
  min-width: 0;
  cursor: pointer;
  padding: 5px 11px;
  font-size: 0.7rem;
  height: 2.5rem;
  border: 1px solid var(--silver-color);
  letter-spacing: 2px;

  &:hover {
    box-shadow: var(--box-shadow-value);
  }

  &:focus {
    outline: none;
    box-shadow: var(--box-shadow-value);
  }
`;

const OptionE = styled.option`
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
    cursor: pointer;
  }
`;

export default SelectCOmponents;
