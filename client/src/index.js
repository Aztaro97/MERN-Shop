import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./flux/store";
import "./translations/i18next";
// import Loader from "./components/Loader.jsx"
import 'flag-icon-css/css/flag-icon.min.css'
import "react-toastify/dist/ReactToastify.css";




ReactDOM.render(
  <Suspense >
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
