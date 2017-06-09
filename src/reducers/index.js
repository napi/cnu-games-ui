import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from "redux";
import login from "./login";
import board from "./board";

const rootReducer = combineReducers({
  routing,
  login,
  board
})

export default rootReducer;
