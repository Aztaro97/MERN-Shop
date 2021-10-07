import React, { useState } from "react";

import RiseLoader from "react-spinners/RiseLoader";

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
  background: #fff9f9ec;
  `;
  let [loading, setLoading] = useState(true);
  return (
    <RiseLoader
      className="hell"
      color={`var(--orange-color)`}
      css={override}
      loading={loading}
      size={40}
      margin={3}
    />
  );
}

export default LoaderComponent;
