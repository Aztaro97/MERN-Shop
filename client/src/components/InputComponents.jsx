import React from 'react';
import styled from "styled-components"

function InputComponents({type, name, placeholder, id, value, onChange, style}) {
    return (
        <Input type={type} id={id} name={name} placeholder={placeholder} value={value} onChange={onChange} style={style} />
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
    padding: 6px 11px;
    color: var(--silver-color);
    font-size: .8rem;
    height: 3rem;
    border: 3px solid var(--background-color);
    outline: none;
    border-radius: 10px;
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
    @media only screen and (max-width: 900px) {
        /* height: 2rem; */
    }
`
export default InputComponents
