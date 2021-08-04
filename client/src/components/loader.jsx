import React from 'react';
import styled from "styled-components"
import { Spin  } from "antd"

function LoaderComponent() {
    return (
        <Loader>
            <Spin size="large" className="spin_loader" />
        </Loader>
    )
}

const Loader = styled.div`
    height:40rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

     & .spin_loader {
        & .ant-spin-dot > * {
            background: var(--orange-color)
        }
     }
`
export default LoaderComponent
