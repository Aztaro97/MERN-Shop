import React from 'react'
import styled from "styled-components"

function ButtonComponeent({children, type, onClick, style, className}) {
    return (
        <Button className={className} style={style} type={type} onClick={onClick}>
            {children}
        </Button>
    )
}


const Button = styled.button`
    outline: none;
    background: var(--orange-color);
    color: #fff;
    text-transform: uppercase;
    padding: .6rem 3.5rem;
    border: none;
    font-weight: 700;
    border-radius: 10px;
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* text-align: center; */
    cursor: pointer;

    &:hover {
        background: #c78788e0;
    }

    @media only screen and (max-width: 768px) {
        font-size: .8rem;
        padding: .7rem 1.5rem;
    }
`

export default ButtonComponeent
