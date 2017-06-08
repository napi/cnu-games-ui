import React from "react";
import {render} from "react-dom";
import {browserHistory} from "react-router";
import {syncHistoryWithStore} from "react-router-redux";
import RootContainer from "./containers/RootContainer";
import configureStore from "./store/configureStore";

const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

let rootDiv = document.createElement("div");
rootDiv.setAttribute("id", "root");
document.body.appendChild(rootDiv);

render(
  <RootContainer store={store} history={history}/>,
  rootDiv
)