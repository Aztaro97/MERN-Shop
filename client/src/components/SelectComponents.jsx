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
  color: var(--silver-color);
  outline: none;
  border-radius: 5px;
  transition: all 0.3s;
  background: #fff;
  width: 100%;
  min-width: 0;
  color: #2c3e50;
  cursor: pointer;
  padding: 5px 11px;
  font-size: 0.7rem;
  height: 2.5rem;
  border: 2px solid var(--background-color);
  letter-spacing: 2px;

  &:hover {
    box-shadow: 0 0 0 1px var(--orange-color);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 1px var(--orange-color);
    background: #fff;
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
