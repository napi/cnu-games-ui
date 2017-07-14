import {REQUEST_LOGIN, RECEIVE_LOGIN} from "../actions/login";

export default function login(state = {
  profile: {},
  auth: {},
  isLogin: false,
  accessToken: ''
}, action) {
  switch(action.type) {
  case REQUEST_LOGIN : {
    let nextState = Object.assign({}, state);
    nextState.accessToken = action.data;

    return nextState;
  }
  case RECEIVE_LOGIN : {
    let nextState = Object.assign({}, state);
    nextState.profile = action.data;
    nextState.isLogin = true;
    return nextState;    
  }
  default : 
    return state;
  }
}
    
