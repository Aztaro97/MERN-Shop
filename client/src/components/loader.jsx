import React, { useState } from "react";

import BeatLoader from "react-spinners/BeatLoader";

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
  background: #0b1b3492;
  `;
  let [loading, setLoading] = useState(true);
  return (
    <BeatLoader
      color={`var(--orange-color)`}
      css={override}
      loading={loading}
      size={70}
      margin={15}
    />
  );
}

export default LoaderComponent;
