import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from "redux";
import login from "./login";
import board from "./board";
import boardDetail from "./boardDetail";
import comment from "./comment";

const rootReducer = combineReducers({
  routing,
  login,
  board,
  boardDetail,
  comment
})

export default rootReducer;
