import React from "react";
import { Checkbox } from "antd";
import styled from "styled-components";

function CheckBoxComponent({ type, name, id, children, style, onChange}) {
  return (
    <InputCheck style={style} type={type} id={id} name={name} onChange={onChange}  >
      {children}
    </InputCheck>
  );
}

const InputCheck = styled(Checkbox)`
  color: #aaaaaa !important;
  text-transform: uppercase;

  /* & span span span span .span {
  color: #C58787 !important;
  } */
  & span .ant-checkbox-inner {
    border-color: #c58787;
  }
  & span .ant-checkbox-wrapper:hover {
    border: none;
    outline: none;
    box-shadow: none;
  }
  & .ant-checkbox-checked .ant-checkbox-inner {
    background: #c58787 !important;
    border: none;
  }
  & .ant-checkbox-wrapper:hover .ant-checkbox-inner,
  .ant-checkbox:hover .ant-checkbox-inner,
  .ant-checkbox-input:focus + .ant-checkbox-inner {
    border: 1px solid var(--orange-color);
    color: red;
  }

  @media only screen and (max-width: 900px) {
      font-size: .8rem;
    }
`;

export default CheckBoxComponent;
