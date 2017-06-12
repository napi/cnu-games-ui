import {RECEIVE_BOARD} from "../actions/board";

export default function login(state = {
}, action) {
  switch(action.type) {
  case RECEIVE_BOARD : {
    return Object.assign({}, state, action.data);
  }
  default : 
    return state;
  }
}
    
