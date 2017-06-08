import {routerReducer as routing} from "react-router-redux";
import {combineReducers} from "redux";
import login from "./login";

const rootReducer = combineReducers({
  routing,
  login
})

export default rootReducer;
