import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./flux/store";
import "./translations/i18next";

import Loader from "./components/Loader"

ReactDOM.render(
  <Suspense fallback={Loader}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
