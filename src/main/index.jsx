import "antd/dist/antd.css";
import "./style.scss";
import "./stylesheet.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./reducers/store.js";
import "../source/模板.xlsx";

import App from "./components/app.jsx";

function Home() {
  return (
    <Provider store={store}>
      <App></App>;
    </Provider>
  );
}

ReactDOM.render(<Home></Home>, document.querySelector("#app"));
