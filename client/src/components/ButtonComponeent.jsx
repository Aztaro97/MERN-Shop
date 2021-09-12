import React from 'react'
import styled from "styled-components"

function ButtonComponeent({children, type, onClick, style, className, disabled}) {
    return (
        <Button className={className} style={style} type={type} onClick={onClick} disabled={disabled}>
            {children}
        </Button>
    )
}


const Button = styled.button`
    outline: none;
    background: var(--orange-color);
    color: #fff;
    text-transform: uppercase;
    padding: .3rem 3.5rem;
    border: none;
    font-weight: 700;
    border-radius: 5px;
    min-width: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: .9rem;
    cursor: pointer;

    &:hover {
        background: #c78788e0;
    }

    @media only screen and (max-width: 768px) {
        font-size: .7rem;
        padding: .7rem 1.5rem;
    }
`

export default ButtonComponeent
