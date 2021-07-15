import React, { useState } from "react";
import { Select } from "antd";
import styled from "styled-components";

const { Option } = Select;

function SelectCOmponents({ value, optionList, placeholder }) {
  const [valueSeleted, setValueSeleted] = useState("");
  const handleChange = (value) => {
    setValueSeleted(value);
    console.log(`selected ${value}`);
  };
  return (
    <SelectE
      style={{ width: 120 }}
      onChange={handleChange}
      placeholder={placeholder}
    >
      {optionList && optionList.length > 0
        ? optionList.map((elemList) => {
            return <OptionE value={elemList}>{elemList}</OptionE>;
          })
        : null}
    </SelectE>
  );
}

const SelectE = styled(Select)`
  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

const OptionE = styled(Option)`
  /* color: black; */
  border: none;
  outline: none;
  box-shadow: none;

  &:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
`;

export default SelectCOmponents;
