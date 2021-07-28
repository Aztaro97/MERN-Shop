import React, { useState } from "react";
// import { Select } from "antd";
import styled from "styled-components";

// const { Option } = Select;

function SelectCOmponents({ options, placeholder, style, name, id , className, onChange}) {
  return (
    <SelectE
      name={name}
      id={id}
      style={style}
      className={className}
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
  border: 3px solid var(--background-color);
  color: var(--silver-color);
  font-size: 14px;
  height: 3rem;
  outline: none;
  border-radius: 10px;
  transition: all 0.3s;
  background: #fff;
  width: 100%;
  min-width: 0;
  padding: 4px 11px;
  color: #2c3e50;
  cursor: pointer;

  &:hover {
    box-shadow: 0 0 0 1px var(--orange-color);
  }

  &:focus {
    border-color: var(--orange-color);
    border-right-width: 1px !important;
    outline: none;
    box-shadow: 0 0 0 2px var(--orange-color);
    background: #fff;
  }
`;

const OptionE = styled.option`
  /* color: black; */
  /* border: none;
  outline: none;
  box-shadow: none; */
  padding: 1rem;

  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export default SelectCOmponents;
