import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.scss";
import App from "./components/app";
import { createStore } from "redux";

const defaultState = {
  cash: 1,
  menuActive: false
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return {...state, menuActive: true}
    case "CLOSE_MENU":
      return {...state, menuActive: false}
    default:
      return state
  }
}

const store = createStore(reducer)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
