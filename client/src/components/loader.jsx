import React from 'react';
import styled from "styled-components"
import { Spin  } from "antd"

function LoaderComponent() {
    return (
        <Loader>
            <Spin size="large" />
        </Loader>
    )
}

const Loader = styled.div`
    height:100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export default LoaderComponent
