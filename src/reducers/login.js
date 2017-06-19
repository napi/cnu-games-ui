import {RECEIVE_PROFILE} from "../actions/login";

export default function login(state = {
  profile: {},
  auth: {}
}, action) {
  switch(action.type) {
  case RECEIVE_PROFILE : {
    let nextState = Object.assign({}, state);
    nextState.profile = action.data;

    return nextState;
  }
  default : 
    return state;
  }
}
    
