import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from "redux";
import login from "./login";
import board from "./board";
import boardDetail from "./boardDetail";

const rootReducer = combineReducers({
  routing,
  login,
  board,
  boardDetail
})

export default rootReducer;
