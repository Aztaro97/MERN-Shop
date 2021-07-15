import React from 'react'
import styled from "styled-components"

function ButtonComponeent({children, type, onClick}) {
    return (
        <Button type={type} onClick={onClick}>
            {children}
        </Button>
    )
}


const Button = styled.button`
    outline: none;
    background: var(--orange-color);
    color: #fff;
    text-transform: uppercase;
    padding: .4rem 3rem;
    border: none;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
        background: #c78788e0;
    }

    @media only screen and (max-width: 768px) {
        font-size: .8rem;
        padding: .3rem 2rem;
    }
`

export default ButtonComponeent
