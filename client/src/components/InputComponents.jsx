import React from 'react';
import styled from "styled-components"

function InputComponents({type, name, placeholder, id, value, onChange}) {
    return (
        <Input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} />
    )
}

const Input = styled.input`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: var(--silver-color);
    list-style: none;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    color: #2c3e50;
    font-size: 14px;
    height: 2.3rem;
    border: 2px solid var(--orange-color);
    outline: none;
    border-radius: 5px;
    transition: all 0.3s;
    background: #fff;

    &:focus {
        border-color: var( --orange-color) ;
    border-right-width: 1px !important;
    outline: none;
    box-shadow: 0 0 0 2px var( --orange-color);
    background: #fff;
    }
    &:hover {
        border-color: var( --orange-color);
    border-right-width: 1px !important;
    }
`
export default InputComponents
