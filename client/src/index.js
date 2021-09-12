import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import store from "./flux/store";
import "./translations/i18next";
import LoaderComponent from "./components/loader"
import 'flag-icon-css/css/flag-icon.min.css'
import "react-toastify/dist/ReactToastify.css";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";




ReactDOM.render(
  <Suspense fallback={LoaderComponent}>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>,
  document.getElementById("root")
);
