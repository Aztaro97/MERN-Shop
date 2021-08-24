import React from "react";
import { Radio } from "antd";
import styled from "styled-components";

function AntRatio() {
  const [value, setValue] = React.useState("company");
  const onChange = (e) => {
    console.log("radio checked", e.target.value);
    setValue(e.target.value);
  };
  return (
    <Radio.Group onChange={onChange} value={value}>
      <RadioCustom value="company">Company</RadioCustom>
      <RadioCustom value="personnel">Individuals</RadioCustom>
    </Radio.Group>
  );
}

const RadioCustom = styled(Radio)`
  & .ant-radio-checked .ant-radio-inner {
    border-color: var(--orange-color) !important ;
  }
  & .ant-radio-checked .ant-radio-inner:after {
    background-color: var(--orange-color);
  }
  & .ant-radio:hover .ant-radio-inner {
    border-color: var(--orange-color);
  }
`;

export default AntRatio;
