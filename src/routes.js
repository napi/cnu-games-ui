import React from "react";
import {Route, IndexRoute} from "react-router";
import AppContainer from "./containers/AppContainer";
import HomeContainer from "./containers/HomeContainer";
import BoardContainer from "./containers/BoardContainer";
import BoardDetailContainer from "./containers/BoardDetailContainer";
import BoardWriteContainer from "./containers/BoardWriteContainer";

export default (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={HomeContainer}/>
    <Route path="board">
      <IndexRoute component={BoardContainer}/>
      <Route path=":idx" component={BoardDetailContainer}/>
    </Route>
  </Route>
)