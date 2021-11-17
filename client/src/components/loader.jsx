import React, { useState } from "react";

import ClipLoader from "react-spinners/ClipLoader";
import styled from "styled-components";

function LoaderComponent() {
  const override = `
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999999999999999999999999999999999;
  background: #34495e;
  `;
  let [loading, setLoading] = useState(true);
  return (
    <Container>
      <ClipLoader
        color={`var(--orange-color)`}
        loading={loading}
        size={90}
        // margin={58}
      />
    </Container>
  );
}

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999999999999999999999999999999999999;
  background: #34495e;
`;

export default LoaderComponent;
